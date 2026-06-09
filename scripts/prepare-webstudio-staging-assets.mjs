import { copyFile, mkdir } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const sharp = require("../webstudio-builder/node_modules/.pnpm/sharp@0.33.5/node_modules/sharp");

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const sourceImageDir = join(root, "turtleci-astro/public/webflow/images");
const stagingAssetDir = join(root, "turtleci-webstudio-staging/public/assets");
const builderAssetDir = join(root, "webstudio-builder/apps/builder/public/cgi/asset");

const destinations = [stagingAssetDir, builderAssetDir];

const fontAssets = [
  {
    url: "https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_907NSg.ttf",
    name: "PlusJakartaSans-Light_uUHgPHKT6doGX2w2_uaMn.ttf",
  },
  {
    url: "https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_qU7NSg.ttf",
    name: "PlusJakartaSans-Regular_i1-I-svk0MY7EMv2ZCR1m.ttf",
  },
  {
    url: "https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_m07NSg.ttf",
    name: "PlusJakartaSans-Medium_KaWBSbxnlTKhV-uM-GmD7.ttf",
  },
  {
    url: "https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_d0nNSg.ttf",
    name: "PlusJakartaSans-SemiBold_WDm6QdgzJXbx_BI2omacI.ttf",
  },
  {
    url: "https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_TknNSg.ttf",
    name: "PlusJakartaSans-Bold_h1T1FSxLs2sYc9KspjDJ4.ttf",
  },
];

const copiedImageAssets = [
  {
    source: "TurtleCI-logo.png",
    name: "6757f9d0679c58f08e454f9c_TurtleCI-logo_jbdlQDyGFFN-sXRZNglHM.png",
  },
  {
    source: "line-md_chevron-up.png",
    name: "67a30a3ec4b6a49e8e7003b5_line-md_chevron-up_qCvGgmMptSyHcDRGaBmSc.png",
  },
  {
    source: "image.svg",
    name: "6757f377cc48557b0ef646c4_image_vDCAkBEN6E3Bb_s43a7iF.svg",
  },
  {
    source: "uil_check_1uil_check.png",
    name: "6757f377cc48557b0ef646c5_uil_check_kByw_9g5u2jySDDTebcpF.png",
  },
];

const convertedImageAssets = [
  {
    source: "Web_illustration-1_1.avif",
    name: "67580734b9e399ebc8e65f96_Web_illustration_201_tBB6WKlcJlLJYynlKuZb-.png",
  },
  {
    source: "anyproject-1_1.avif",
    name: "67581ad7eaea4cb3f4d09de8_anyproject_201_8Scz2jeB98GxlP9cACbJo.png",
  },
  {
    source: "Web_Cost-Effective-Scaling-1.avif",
    name: "67581ad7b176f0650fcc3b9d_Web_Cost-Effective_20Scaling_201_0Wh46eM5-5tNxoonigRcO.png",
  },
  {
    source: "Multi-platform-1_1.avif",
    name: "67581ad771a8ee31c5119f32_Multi_20platform_201_RCuN3skwTGWeGpnDU8z-2.png",
  },
];

for (const destination of destinations) {
  await mkdir(destination, { recursive: true });
}

const writeToDestinations = async (name, buffer) => {
  await Promise.all(
    destinations.map(async (destination) => {
      await import("node:fs/promises").then(({ writeFile }) =>
        writeFile(join(destination, name), buffer)
      );
    })
  );
};

for (const asset of fontAssets) {
  const response = await fetch(asset.url);
  if (!response.ok) {
    throw new Error(`Failed to download ${asset.name}: ${response.status}`);
  }
  await writeToDestinations(asset.name, Buffer.from(await response.arrayBuffer()));
}

for (const asset of copiedImageAssets) {
  await Promise.all(
    destinations.map((destination) =>
      copyFile(join(sourceImageDir, asset.source), join(destination, asset.name))
    )
  );
}

for (const asset of convertedImageAssets) {
  const png = await sharp(join(sourceImageDir, asset.source)).png().toBuffer();
  await writeToDestinations(asset.name, png);
}

console.log(
  JSON.stringify(
    {
      stagingAssetDir,
      builderAssetDir,
      assetCount:
        fontAssets.length + copiedImageAssets.length + convertedImageAssets.length,
    },
    null,
    2
  )
);
