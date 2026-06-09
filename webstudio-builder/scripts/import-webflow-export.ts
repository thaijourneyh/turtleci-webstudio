import { cp, readFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { randomUUID } from "node:crypto";
import React from "react";
import type {
  Breakpoint,
  DataSource,
  Instance,
  Page,
  Prop,
  Resource,
  StyleDecl,
  StyleSource,
  StyleSourceSelection,
  WebstudioFragment,
} from "../packages/sdk/src/index";
import type { AppContext } from "../packages/trpc-interface/src/index.server";

globalThis.React = React;

const { createClient } = await import("../packages/postgrest/src/index.server");
const { loadDevBuildByProjectId, serializeData } = await import(
  "../packages/project-build/src/index.server"
);
const { serializePages } = await import(
  "../packages/project-migrations/src/pages"
);
const { generateFragmentFromHtml } = await import(
  "../apps/builder/app/shared/html"
);
const { ROOT_FOLDER_ID } = await import("../packages/sdk/src/index");
const { serializeStyles } = await import(
  "../packages/project-build/src/db/styles"
);
const { serializeStyleSourceSelections } = await import(
  "../packages/project-build/src/db/style-source-selections"
);

const projectId = process.argv[2];
const webflowDir = process.argv[3];
const stagingDir = process.argv[4];

if (projectId === undefined || webflowDir === undefined || stagingDir === undefined) {
  console.error(
    "Usage: pnpm tsx scripts/import-webflow-export.ts <project-id> <webflow-export-dir> <staging-dir>"
  );
  process.exit(1);
}

const htmlFileNames = [
  "index.html",
  "about-us.html",
  "features-turtleci.html",
  "pricing-plan.html",
  "contact-us.html",
  "blogs.html",
  "documentation.html",
  "detail_blogs.html",
  "detail_carousel-collection.html",
  "detail_marquee-logos.html",
  "startup-support-event.html",
  "privacy-and-policy.html",
  "terms-of-service.html",
  "style-guide.html",
];

const postgrest = {
  client: createClient(
    process.env.POSTGREST_URL ?? "http://localhost:3000",
    process.env.POSTGREST_API_KEY ?? ""
  ),
};

const context = {
  authorization: { type: "service", isServiceCall: true },
  postgrest,
} as AppContext;

const build = await loadDevBuildByProjectId(context, projectId);
const existingPages = Array.from(build.pages.pages.values());
const existing404Page = existingPages.find((page) => page.path === "/*");
const existing404Root = existing404Page
  ? build.instances.find((instance) => instance.id === existing404Page.rootInstanceId)
  : undefined;

const extract = (html: string, regex: RegExp) => html.match(regex)?.[1]?.trim();

const extractAll = (html: string, regex: RegExp) =>
  Array.from(html.matchAll(regex), (match) => match[1] ?? "").filter(
    (value) => value.length > 0
  );

const toTitle = (fileName: string, htmlTitle: string | undefined) => {
  if (htmlTitle && htmlTitle.length > 0) {
    return htmlTitle;
  }
  return basename(fileName, ".html")
    .split(/[-_]/)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
};

const toPath = (fileName: string) => {
  const slug = basename(fileName, ".html");
  return slug === "index" ? "" : `/${slug}`;
};

const rewriteStaticPaths = (source: string) =>
  source
    .replace(/(["'(])images\//g, `$1/turtleci-import/images/`)
    .replace(/(["'(])documents\//g, `$1/turtleci-import/documents/`)
    .replace(/(["'(])js\//g, `$1/turtleci-import/js/`);

const cssFiles = [
  "css/normalize.css",
  "css/webflow.css",
  "css/turtleci.webflow.css",
];

const cssContents = await Promise.all(
  cssFiles.map(async (file) => rewriteStaticPaths(await readFile(join(webflowDir, file), "utf8")))
);
const combinedCss = cssContents.join("\n\n");

const globalCode = [
  '<link href="https://fonts.googleapis.com" rel="preconnect">',
  '<link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">',
  '<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>',
  '<script type="text/javascript">WebFont.load({ google: { families: ["Plus Jakarta Sans:300,400,500,600,700"] } });</script>',
  '<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>',
  '<script src="/turtleci-import/js/webflow.js" type="text/javascript"></script>',
  `<style>\n${combinedCss}\n</style>`,
].join("\n");

const keepOnlyLocalStyleData = (
  fragment: WebstudioFragment
): WebstudioFragment => {
  const localStyleSourceIds = new Set(
    fragment.styleSources
      .filter((styleSource) => styleSource.type === "local")
      .map((styleSource) => styleSource.id)
  );

  return {
    ...fragment,
    styleSources: fragment.styleSources.filter((styleSource) =>
      localStyleSourceIds.has(styleSource.id)
    ),
    styleSourceSelections: fragment.styleSourceSelections
      .map((selection) => ({
        ...selection,
        values: selection.values.filter((value) =>
          localStyleSourceIds.has(value)
        ),
      }))
      .filter((selection) => selection.values.length > 0),
    styles: fragment.styles.filter((style) =>
      localStyleSourceIds.has(style.styleSourceId)
    ),
  };
};

const prefixFragment = ({
  fragment,
  prefix,
  breakpointIds,
}: {
  fragment: WebstudioFragment;
  prefix: string;
  breakpointIds: Map<string, string>;
}) => {
  const instanceIdMap = new Map<string, string>();
  const styleSourceIdMap = new Map<string, string>();
  const resourceIdMap = new Map<string, string>();
  const dataSourceIdMap = new Map<string, string>();

  const getPrefixedId = (id: string) => `${prefix}${id}`;

  for (const instance of fragment.instances) {
    instanceIdMap.set(instance.id, getPrefixedId(instance.id));
  }
  for (const styleSource of fragment.styleSources) {
    styleSourceIdMap.set(styleSource.id, getPrefixedId(styleSource.id));
  }
  for (const resource of fragment.resources) {
    resourceIdMap.set(resource.id, getPrefixedId(resource.id));
  }
  for (const dataSource of fragment.dataSources) {
    dataSourceIdMap.set(dataSource.id, getPrefixedId(dataSource.id));
  }

  const instances: Instance[] = fragment.instances.map((instance) => ({
    ...instance,
    id: instanceIdMap.get(instance.id) ?? instance.id,
    children: instance.children.map((child) =>
      child.type === "id"
        ? { ...child, value: instanceIdMap.get(child.value) ?? child.value }
        : child
    ),
  }));

  const props: Prop[] = fragment.props.map((prop) => ({
    ...prop,
    id: getPrefixedId(prop.id),
    instanceId: instanceIdMap.get(prop.instanceId) ?? prop.instanceId,
    value:
      prop.type === "page" &&
      typeof prop.value === "object" &&
      prop.value !== null &&
      "instanceId" in prop.value
        ? {
            ...prop.value,
            instanceId:
              instanceIdMap.get(prop.value.instanceId) ?? prop.value.instanceId,
          }
        : prop.value,
  }));

  const styleSources: StyleSource[] = fragment.styleSources.map((styleSource) => ({
    ...styleSource,
    id: styleSourceIdMap.get(styleSource.id) ?? styleSource.id,
  }));

  const styleSourceSelections: StyleSourceSelection[] =
    fragment.styleSourceSelections.map((selection) => ({
      ...selection,
      instanceId: instanceIdMap.get(selection.instanceId) ?? selection.instanceId,
      values: selection.values.map(
        (value) => styleSourceIdMap.get(value) ?? value
      ),
    }));

  const styles: StyleDecl[] = fragment.styles.map((style) => {
    const breakpointKey = JSON.stringify({
      minWidth: style.breakpointId
        ? fragment.breakpoints.find((breakpoint) => breakpoint.id === style.breakpointId)
            ?.minWidth
        : undefined,
      maxWidth: style.breakpointId
        ? fragment.breakpoints.find((breakpoint) => breakpoint.id === style.breakpointId)
            ?.maxWidth
        : undefined,
      label: style.breakpointId
        ? fragment.breakpoints.find((breakpoint) => breakpoint.id === style.breakpointId)
            ?.label
        : undefined,
    });
    return {
      ...style,
      breakpointId: breakpointIds.get(breakpointKey) ?? style.breakpointId,
      styleSourceId:
        styleSourceIdMap.get(style.styleSourceId) ?? style.styleSourceId,
    };
  });

  const resources: Resource[] = fragment.resources.map((resource) => ({
    ...resource,
    id: resourceIdMap.get(resource.id) ?? resource.id,
  }));

  const dataSources: DataSource[] = fragment.dataSources.map((dataSource) => ({
    ...dataSource,
    id: dataSourceIdMap.get(dataSource.id) ?? dataSource.id,
    scopeInstanceId:
      instanceIdMap.get(dataSource.scopeInstanceId) ?? dataSource.scopeInstanceId,
    resourceId:
      dataSource.type === "resource"
        ? resourceIdMap.get(dataSource.resourceId) ?? dataSource.resourceId
        : undefined,
  }));

  const children = fragment.children.map((child) =>
    child.type === "id"
      ? { ...child, value: instanceIdMap.get(child.value) ?? child.value }
      : child
  );

  return {
    children,
    instances,
    props,
    styleSources,
    styleSourceSelections,
    styles,
    resources,
    dataSources,
  };
};

const nextBreakpoints: Breakpoint[] = [];
const breakpointIds = new Map<string, string>();
const pages: Page[] = [];
const instances: Instance[] = [];
const props: Prop[] = [];
const styleSources: StyleSource[] = [];
const styleSourceSelections: StyleSourceSelection[] = [];
const styles: StyleDecl[] = [];
const resources: Resource[] = [];
const dataSources: DataSource[] = [];

for (const fileName of htmlFileNames) {
  const html = await readFile(join(webflowDir, fileName), "utf8");
  const htmlTitle = extract(html, /<title>([\s\S]*?)<\/title>/i);
  const description =
    extract(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i) ?? "";
  const socialImageUrl =
    extract(html, /<meta[^>]+property="og:image"[^>]+content="([^"]*)"/i) ?? "";
  const body = extract(html, /<body[^>]*>([\s\S]*?)<\/body>/i) ?? "";
  const headStyles = extractAll(html, /<style[^>]*>([\s\S]*?)<\/style>/gi)
    .map((style) => `<style>\n${rewriteStaticPaths(style)}\n</style>`)
    .join("\n");
  const canvasCss = `<style>\n${combinedCss}\n</style>`;

  const fragment = keepOnlyLocalStyleData(
    generateFragmentFromHtml(
    `${canvasCss}\n${headStyles}\n${rewriteStaticPaths(body)}`
    )
  );

  for (const breakpoint of fragment.breakpoints) {
    const key = JSON.stringify({
      minWidth: breakpoint.minWidth,
      maxWidth: breakpoint.maxWidth,
      label: breakpoint.label,
    });
    if (breakpointIds.has(key)) {
      continue;
    }
    const id = breakpointIds.size === 0 ? "base" : randomUUID();
    breakpointIds.set(key, id);
    nextBreakpoints.push({ ...breakpoint, id });
  }

  const path = toPath(fileName);
  const pageId =
    path === "" ? build.pages.homePageId : `page:${basename(fileName, ".html")}`;
  const rootInstanceId =
    path === ""
      ? build.pages.pages.get(build.pages.homePageId)?.rootInstanceId ??
        randomUUID()
      : `body:${basename(fileName, ".html")}`;
  const prefixed = prefixFragment({
    fragment,
    prefix: `${basename(fileName, ".html")}::`,
    breakpointIds,
  });

  pages.push({
    id: pageId,
    name: toTitle(fileName, htmlTitle),
    title: JSON.stringify(htmlTitle ?? toTitle(fileName, htmlTitle)),
    rootInstanceId,
    path,
    meta: {
      description: JSON.stringify(description),
      socialImageUrl: JSON.stringify(rewriteStaticPaths(socialImageUrl)),
      excludePageFromSearch: "false",
      redirect: JSON.stringify(""),
      documentType: "html",
      content: JSON.stringify(""),
      custom: [],
    },
  });

  instances.push({
    type: "instance",
    id: rootInstanceId,
    component: "ws:element",
    tag: "body",
    children: prefixed.children,
  });
  instances.push(...prefixed.instances);
  props.push(...prefixed.props);
  styleSources.push(...prefixed.styleSources);
  styleSourceSelections.push(...prefixed.styleSourceSelections);
  styles.push(...prefixed.styles);
  resources.push(...prefixed.resources);
  dataSources.push(...prefixed.dataSources);
}

if (existing404Page && existing404Root) {
  pages.push(existing404Page);
  instances.push(existing404Root);
  const keepIds = new Set<string>();
  const stack = [existing404Root.id];
  const instanceById = new Map(build.instances.map((instance) => [instance.id, instance]));
  while (stack.length > 0) {
    const id = stack.pop();
    if (id === undefined || keepIds.has(id)) {
      continue;
    }
    keepIds.add(id);
    const instance = instanceById.get(id);
    if (instance) {
      instances.push(instance);
      for (const child of instance.children) {
        if (child.type === "id") {
          stack.push(child.value);
        }
      }
    }
  }
  props.push(
    ...build.props.filter((prop) => keepIds.has(prop.instanceId))
  );
  styleSourceSelections.push(
    ...build.styleSourceSelections.filter((selection) =>
      keepIds.has(selection.instanceId)
    )
  );
  const keepStyleSourceIds = new Set(
    styleSourceSelections.flatMap((selection) => selection.values)
  );
  styleSources.push(
    ...build.styleSources.filter((styleSource) => keepStyleSourceIds.has(styleSource.id))
  );
  styles.push(
    ...build.styles.filter((style) => keepStyleSourceIds.has(style.styleSourceId))
  );
}

const nextPages = {
  meta: {
    code: globalCode,
  },
  homePageId: build.pages.homePageId,
  rootFolderId: ROOT_FOLDER_ID,
  pages: new Map(pages.map((page) => [page.id, page])),
  pageTemplates: new Map(),
  folders: new Map([
    [
      ROOT_FOLDER_ID,
      {
        id: ROOT_FOLDER_ID,
        name: "Root",
        slug: "",
        children: pages.map((page) => page.id),
      },
    ],
  ]),
};

await postgrest.client
  .from("Build")
  .update({
    pages: JSON.stringify(serializePages(nextPages)),
    breakpoints: serializeData<Breakpoint>(nextBreakpoints),
    styles: serializeStyles(styles),
    styleSources: serializeData<StyleSource>(styleSources),
    styleSourceSelections: serializeStyleSourceSelections(
      new Map(styleSourceSelections.map((selection) => [selection.instanceId, selection]))
    ),
    props: serializeData<Prop>(props),
    dataSources: serializeData<DataSource>(dataSources),
    resources: serializeData<Resource>(resources),
    instances: serializeData<Instance>(instances),
  })
  .eq("id", build.id);

const copyTargets = [
  join(stagingDir, "public", "turtleci-import"),
  join(process.cwd(), "apps", "builder", "public", "turtleci-import"),
];

for (const target of copyTargets) {
  await cp(join(webflowDir, "images"), join(target, "images"), {
    recursive: true,
    force: true,
  });
  await cp(join(webflowDir, "documents"), join(target, "documents"), {
    recursive: true,
    force: true,
  });
  await cp(join(webflowDir, "js"), join(target, "js"), {
    recursive: true,
    force: true,
  });
  await cp(join(webflowDir, "css"), join(target, "css"), {
    recursive: true,
    force: true,
  });
}

console.log(
  JSON.stringify(
    {
      projectId,
      buildId: build.id,
      importedPages: pages.map((page) => ({
        name: page.name,
        path: page.path,
      })),
      copiedStaticDirs: copyTargets,
      breakpoints: nextBreakpoints.length,
      instances: instances.length,
      props: props.length,
      styleSources: styleSources.length,
      styles: styles.length,
    },
    null,
    2
  )
);
