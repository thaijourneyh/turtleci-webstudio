/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { HtmlEmbed as HtmlEmbed, Image as Image } from "@webstudio-is/sdk-components-react";


      export const projectId = "a99d5fa7-683f-4129-974a-e8564180e8df";

      export const projectDomain = "turtleci-staging";

      export const lastPublished = "2026-06-09T07:15:29.598Z";

      export const siteName = undefined;

      export const breakpoints = [{"id":"base"},{"id":"e8ff68f4-dfa4-4b4b-85d3-b344fd3124f3","maxWidth":991},{"id":"745b3d7d-ee2d-4f57-a585-684ecde78788","maxWidth":768},{"id":"4bd8cf14-661c-403d-906b-7f4dd6314b1d","maxWidth":767},{"id":"ef612b5b-f9c5-44ee-a19f-ffacebe27cd6","maxWidth":479},{"id":"fd73618b-33c4-431a-8752-9e45b5ddf95a","minWidth":768}];

      export const favIconAsset: string | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        []

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
return <body
className={`w-element`}>
<HtmlEmbed
code={"<style>html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:none}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@font-face{font-family:\"webflow-icons\";src:url(data:application/x-font-ttf;charset=utf-8;base64,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)format(\"truetype\");font-weight:normal;font-style:normal}[class^=\"w-icon-\"],[class*=\" w-icon-\"]{font-family:\"webflow-icons\"!important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{height:100%}body{margin:0;min-height:100%;background-color:#fff;font-family:Arial,sans-serif;font-size:14px;line-height:20px;color:#333}img{max-width:100%;vertical-align:middle;display:inline-block}html.w-mod-touch *{background-attachment:scroll!important}input.w-button{-webkit-appearance:button}html[data-w-dynpage] [data-w-cloak]{color:transparent!important}pre.w-code-block code{all:inherit}pre.w-code-block code>span{display:block!important}.w-webflow-badge>img{box-sizing:unset;width:unset;height:unset;max-height:unset;max-width:unset;min-height:unset;min-width:unset;margin:unset;padding:unset;float:unset;clear:unset;border:unset;border-radius:unset;background:unset;background-image:unset;background-position:unset;background-size:unset;background-repeat:unset;background-origin:unset;background-clip:unset;background-attachment:unset;background-color:unset;box-shadow:unset;transform:unset;transition:unset;direction:unset;font-family:unset;font-weight:unset;color:unset;font-size:unset;line-height:unset;font-style:unset;font-variant:unset;text-align:unset;letter-spacing:unset;text-decoration:unset;text-indent:unset;text-transform:unset;list-style-type:unset;text-shadow:unset;vertical-align:unset;cursor:unset;white-space:unset;word-break:unset;word-spacing:unset;word-wrap:unset}.w-webflow-badge>img{position:unset;display:inline-block!important;visibility:unset!important;opacity:1!important;vertical-align:middle!important}h1,h2,h3,h4,h5,h6{font-weight:bold;margin-bottom:10px}h1{font-size:38px;line-height:44px;margin-top:20px}h2{font-size:32px;line-height:36px;margin-top:20px}h3{font-size:24px;line-height:30px;margin-top:20px}h4{font-size:18px;line-height:24px;margin-top:10px}h5{font-size:14px;line-height:20px;margin-top:10px}h6{font-size:12px;line-height:18px;margin-top:10px}p{margin-top:0;margin-bottom:10px}blockquote{margin:0 0 10px 0;padding:10px 20px;border-left:5px solid #E2E2E2;font-size:18px;line-height:22px}figure{margin:0;margin-bottom:10px}figcaption{margin-top:5px;text-align:center}ul,ol{margin-top:0px;margin-bottom:10px;padding-left:40px}.w-video iframe,.w-video object,.w-video embed{position:absolute;top:0;left:0;width:100%;height:100%;border:none}fieldset{padding:0;margin:0;border:0}button,[type=\"button\"],[type=\"reset\"]{border:0;cursor:pointer;-webkit-appearance:button}label{display:block;margin-bottom:5px;font-weight:bold}fieldset[disabled] .w-input,fieldset[disabled] .w-select{cursor:not-allowed}fieldset[disabled]:not(.w-input-disabled) .w-input,fieldset[disabled]:not(.w-input-disabled) .w-select{background-color:#eeeeee}textarea.w-input,textarea.w-select{height:auto}.w-widget-map label{width:auto;display:inline}.w-widget-map img{max-width:inherit}.w-widget-map .gm-style-iw>button{display:none!important}.w-widget-twitter-count-shim *{pointer-events:none;user-select:none}.w-background-video>video{background-size:cover;background-position:50% 50%;position:absolute;margin:auto;width:100%;height:100%;right:-100%;bottom:-100%;top:-100%;left:-100%;object-fit:cover;z-index:-100}.w-background-video>video::-webkit-media-controls-start-playback-button{display:none!important;-webkit-appearance:none}.w-background-video--control>[hidden]{display:none!important}.w-slider-nav.w-round>div{border-radius:100%}.w-slider-nav.w-num>div{width:auto;height:auto;padding:0.2em 0.5em;font-size:inherit;line-height:inherit}.w-slider-nav.w-shadow>div{box-shadow:0 0 3px rgba(51,51,51,0.4)}.w-slider-nav-invert>div{background-color:rgba(34,34,34,0.4)}.w-slider-nav-invert>div.w-active{background-color:#222}.w-slider-arrow-left [class^=\"w-icon-\"],.w-slider-arrow-right [class^=\"w-icon-\"],.w-slider-arrow-left [class*=\" w-icon-\"],.w-slider-arrow-right [class*=\" w-icon-\"]{position:absolute}.w-richtext ol,.w-richtext ul{overflow:hidden}.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,.w-richtext .w-richtext-figure-selected[data-rt-type=\"video\"] div:after{outline:2px solid #2895f7}.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,.w-richtext .w-richtext-figure-selected[data-rt-type=\"image\"] div{outline:2px solid #2895f7}.w-richtext figure.w-richtext-figure-type-video>div:after,.w-richtext figure[data-rt-type=\"video\"]>div:after{content:\"\";position:absolute;display:none;left:0;top:0;right:0;bottom:0}.w-richtext figure{position:relative;max-width:60%}.w-richtext figure>div:before{cursor:default!important}.w-richtext figure img{width:100%}.w-richtext figure figcaption.w-richtext-figcaption-placeholder{opacity:0.6}.w-richtext figure div{font-size:0px;color:transparent}.w-richtext figure.w-richtext-figure-type-image,.w-richtext figure[data-rt-type=\"image\"]{display:table}.w-richtext figure.w-richtext-figure-type-image>div,.w-richtext figure[data-rt-type=\"image\"]>div{display:inline-block}.w-richtext figure.w-richtext-figure-type-image>figcaption,.w-richtext figure[data-rt-type=\"image\"]>figcaption{display:table-caption;caption-side:bottom}.w-richtext figure.w-richtext-figure-type-video,.w-richtext figure[data-rt-type=\"video\"]{width:60%;height:0}.w-richtext figure.w-richtext-figure-type-video iframe,.w-richtext figure[data-rt-type=\"video\"] iframe{position:absolute;top:0;left:0;width:100%;height:100%}.w-richtext figure.w-richtext-figure-type-video>div,.w-richtext figure[data-rt-type=\"video\"]>div{width:100%}.w-richtext figure.w-richtext-align-center{margin-right:auto;margin-left:auto;clear:both}.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image>div,.w-richtext figure.w-richtext-align-center[data-rt-type=\"image\"]>div{max-width:100%}.w-richtext figure.w-richtext-align-normal{clear:both}.w-richtext figure.w-richtext-align-fullwidth{width:100%;max-width:100%;text-align:center;clear:both;display:block;margin-right:auto;margin-left:auto}.w-richtext figure.w-richtext-align-fullwidth>div{display:inline-block;padding-bottom:inherit}.w-richtext figure.w-richtext-align-fullwidth>figcaption{display:block}.w-richtext figure.w-richtext-align-floatleft{float:left;margin-right:15px;clear:none}.w-richtext figure.w-richtext-align-floatright{float:right;margin-left:15px;clear:none}[data-nav-menu-open]{display:block!important;position:absolute;top:100%;left:0;right:0;background:#C8C8C8;text-align:center;overflow:visible;min-width:200px}.w-nav-overlay [data-nav-menu-open]{top:0}.w-nav[data-animation=\"over-left\"] .w-nav-overlay{width:auto}.w-nav[data-animation=\"over-left\"] .w-nav-overlay,.w-nav[data-animation=\"over-left\"] [data-nav-menu-open]{right:auto;z-index:1;top:0}.w-nav[data-animation=\"over-right\"] .w-nav-overlay{width:auto}.w-nav[data-animation=\"over-right\"] .w-nav-overlay,.w-nav[data-animation=\"over-right\"] [data-nav-menu-open]{left:auto;z-index:1;top:0}.w-nav[data-collapse=\"all\"] .w-nav-menu{display:none}.w-nav[data-collapse=\"all\"] .w-nav-button{display:block}@media screen and (max-width:991px){.w-nav[data-collapse=\"medium\"] .w-nav-menu{display:none}.w-nav[data-collapse=\"medium\"] .w-nav-button{display:block}}@media screen and (max-width:767px){.w-nav[data-collapse=\"small\"] .w-nav-menu{display:none}.w-nav[data-collapse=\"small\"] .w-nav-button{display:block}}@media screen and (max-width:479px){.w-nav[data-collapse=\"tiny\"] .w-nav-menu{display:none}.w-nav[data-collapse=\"tiny\"] .w-nav-button{display:block}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}body{background-color:var(--base-color--true-white);color:var(--base-color--true-black);font-family:Plus Jakarta Sans,sans-serif;font-size:1vw;line-height:1.4}h1{text-wrap:pretty;margin-top:0;margin-bottom:0;font-size:3.5em;font-weight:700;line-height:1.1}h2{text-wrap:pretty;margin-top:0;margin-bottom:0;font-size:3em;font-weight:700;line-height:1.2}h3{text-wrap:pretty;margin-top:0;margin-bottom:0;font-size:2.5em;font-weight:700;line-height:1.3}h4{text-wrap:pretty;margin-top:0;margin-bottom:0;font-size:1.5em;font-weight:700;line-height:1.3}h5{text-wrap:pretty;margin-top:.5em;margin-bottom:.5em;font-size:1.25em;font-weight:700;line-height:1.4}h6{margin-top:0;margin-bottom:0;font-size:12px;font-weight:700;line-height:18px}p{color:var(--base-color--true-black);text-wrap:pretty;margin-bottom:0;font-size:1em;font-weight:400;line-height:1.4}a{color:var(--base-color--brand-primary);text-shadow:0 0 1px #0000004d;font-size:1em;font-weight:500;line-height:1.4;text-decoration:none;transition-property:color;transition-duration:.2s;transition-timing-function:ease}a:hover{color:var(--base-color--star-yellow)}ul,ol{margin-top:.5em;margin-bottom:1em;padding-left:2.5em}li{text-wrap:pretty;margin-bottom:.25em}img{object-fit:cover;display:inline-block}label{margin-bottom:0;font-weight:700;display:block}code{border:1px solid var(--base-color--star-yellow);background-color:#ffa7261a;border-radius:4px;margin-right:2px;padding:2px 4px;font-size:.9em;font-weight:600;display:inline-block}blockquote{border-left-style:solid;border-left-width:.25em;border-left-color:var(--base-color--brand-primary);text-wrap:pretty;margin-bottom:1em;padding:.5em 0 .5em 1.25em;font-size:1.25em;line-height:1.4}.text-rich-text h1{color:var(--base-color--brand-primary);margin-bottom:.25em}.text-rich-text h2{color:var(--base-color--brand-primary);margin-top:.5em;margin-bottom:.25em}.text-rich-text h3,.text-rich-text h4{color:var(--base-color--brand-primary);margin-top:.5em;margin-bottom:.5em}.text-rich-text h5{color:var(--base-color--brand-primary)}@media screen and (max-width:991px){body{font-size:1.75vw}}@media screen and (max-width:767px){body{font-size:2.25vw}h3{font-size:2.125em}h4{line-height:1.4}p{line-height:1.5}li{font-size:1.25em}}@media screen and (max-width:479px){body{font-size:3.875vw}h1{font-size:2em}h2{font-size:1.75em}h4{font-size:1.25em}h5{font-size:1.125em}p{line-height:1.5}li{font-size:3.5vw}}#w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d202b-0ef646b9{grid-area:span 1/span 1/span 1/span 1}#w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d203e-0ef646b9:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-area:1/1/2/2}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-0ef646b9{grid-area:span 1/span 1/span 1/span 1}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-0ef646b9:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-area:1/2/2/3}#w-node-_66648800-ce29-4660-afa4-92e104160795-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e1041607b4-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041607b9-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041607be-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041607c3-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e1041607dd-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041608a5-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041608a7-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041608ad-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041608c4-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041608dd-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e1041608e0-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e1041608e2-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e1041608e5-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e10416093c-0ef646ba,#w-node-f5fc250e-34b1-c8d9-acf6-d8ea06d4dc9d-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160946-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160947-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e1041609c9-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041609cf-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041609d5-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041609db-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041609e1-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041609e7-0ef646ba{justify-self:stretch}#w-node-_66648800-ce29-4660-afa4-92e1041609f7-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041609fc-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a01-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a06-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a0b-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a10-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a15-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a1a-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a1f-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a24-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a28-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a29-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a2c-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a2d-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a2e-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a31-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a32-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a33-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a36-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a37-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a38-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a3b-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a3c-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a3d-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a40-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a41-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a42-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a45-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a56-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a83-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a99-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a9f-0ef646ba{justify-self:start}#w-node-_75d7d58d-003d-eb2a-bb91-5760bbc0d1ad-40a729bc{grid-area:span 1/span 1/span 1/span 1}#w-node-_75d7d58d-003d-eb2a-bb91-5760bbc0d1bc-40a729bc:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-area:1/1/2/2}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-40a729bc{grid-area:span 1/span 1/span 1/span 1}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-40a729bc:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-area:1/2/2/3}#w-node-_674c7cd8-f820-37fb-d82b-aac29e52da7f-40a729bc{grid-area:span 1/span 1/span 1/span 1}#w-node-_674c7cd8-f820-37fb-d82b-aac29e52da7f-40a729bc:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-area:1/2/2/3}#w-node-_3590fea4-7452-e36f-bbb4-07668ffc7110-40a729bc:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-area:1/1/2/2}#w-node-_3590fea4-7452-e36f-bbb4-07668ffc7101-40a729bc,#w-node-_7483c5f0-6c73-8915-0900-71e22f1e731b-a5d97bcf{grid-area:span 1/span 1/span 1/span 1}#w-node-_7621a218-f4a1-1056-ffdd-ecebdc93fb73-a5d97bcf{order:9999}#w-node-a63b472e-a1da-bb3a-d92c-e5e08816100c-a5d97bcf{align-self:center}#w-node-_1314f315-0d5a-049d-66b0-0dc57a7d21d9-a5d97bcf{order:9999;align-self:center}#w-node-_1314f315-0d5a-049d-66b0-0dc57a7d21df-a5d97bcf{justify-self:center}#w-node-ae3cff3c-61cb-2074-9a65-c6078a640db5-45885f9c{grid-area:span 1/span 1/span 1/span 1}#w-node-ae3cff3c-61cb-2074-9a65-c6078a640dc4-45885f9c:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-area:1/1/2/2}#w-node-_56c4fbff-94e2-273a-2849-e78fae901331-45885f9c,#w-node-_5b9b38dd-7563-4c1f-1249-3c06a9817224-45885f9c,#w-node-_52b60110-ec71-cf77-6efe-8186f1e2cd51-45885f9c,#w-node-ef8419f4-b8b1-ee7a-e0f7-d5b38908f1e0-45885f9c,#w-node-ef8419f4-b8b1-ee7a-e0f7-d5b38908f16e-45885f9c,#w-node-ef8419f4-b8b1-ee7a-e0f7-d5b38908f1a3-45885f9c{grid-area:span 1/span 1/span 1/span 1}#w-node-_7621a218-f4a1-1056-ffdd-ecebdc93fb73-45885f9c{order:9999}#w-node-_1551703d-661f-8a8f-bbe4-a3fa5746bab9-a201f7fa{grid-area:span 1/span 1/span 1/span 1;justify-self:center}#w-node-_1551703d-661f-8a8f-bbe4-a3fa5746bacc-a201f7fa:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-area:1/1/2/2}#w-node-_56fd8490-4c43-3ef5-778c-be9a52dab8bb-a201f7fa{align-self:center}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-a201f7fa{grid-area:span 1/span 1/span 1/span 1}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-a201f7fa:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-area:1/2/2/3}#w-node-_3f74929b-8a41-b220-a411-c5e148c88fed-a201f7fa,#w-node-b13029e3-76cf-3bd3-6171-44b3ba25f7af-a201f7fa,#w-node-d7fed079-6d00-2f06-4fde-0075cb4ca431-a201f7fa{justify-self:center}#w-node-fdb51a93-9599-cf16-b377-00e91f7aa326-d9a78f22{grid-area:span 1/span 1/span 1/span 1;place-self:start}#w-node-_01b34f74-ef7b-84a3-e436-8cebe109b893-d9a78f22{grid-area:span 1/span 5/span 1/span 5}#w-node-_7483c5f0-6c73-8915-0900-71e22f1e731b-84005adb,#w-node-_7483c5f0-6c73-8915-0900-71e22f1e731b-9a5fff5f,#w-node-_7483c5f0-6c73-8915-0900-71e22f1e731b-2ed8878b{grid-area:span 1/span 1/span 1/span 1;justify-self:center}#w-node-_70fa2271-aa4e-0922-9513-cc195e56895d-e97e7802{grid-area:span 1/span 3/span 1/span 3}#w-node-_54bc519d-9f2d-3514-5759-2f61a5f2a8a5-e97e7802{grid-area:span 1/span 1/span 1/span 1}@media screen and (max-width:991px){#w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d203e-0ef646b9{justify-self:center}#w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d203e-0ef646b9:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-row:2/3}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-0ef646b9:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-column:1/2}#w-node-d9852e9b-78da-4b05-14ca-46237e0756e5-7e0756e1{align-self:stretch}#w-node-_75d7d58d-003d-eb2a-bb91-5760bbc0d1bc-40a729bc:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-row:2/3}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-40a729bc:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54),#w-node-_674c7cd8-f820-37fb-d82b-aac29e52da7f-40a729bc:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-column:1/2}#w-node-_3590fea4-7452-e36f-bbb4-07668ffc7110-40a729bc{order:9999}#w-node-_3590fea4-7452-e36f-bbb4-07668ffc7110-40a729bc:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-row:2/3}#w-node-c516adc2-e707-86e8-9bbb-7901f8308955-a5d97bcf,#w-node-a63b472e-a1da-bb3a-d92c-e5e08816102a-a5d97bcf{order:-9999}#w-node-ae3cff3c-61cb-2074-9a65-c6078a640dc4-45885f9c:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26),#w-node-_1551703d-661f-8a8f-bbe4-a3fa5746bacc-a201f7fa:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-row:2/3}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-a201f7fa:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-column:1/2}#w-node-fdb51a93-9599-cf16-b377-00e91f7aa326-d9a78f22{justify-self:center}#w-node-_01b34f74-ef7b-84a3-e436-8cebe109b893-d9a78f22,#w-node-_70fa2271-aa4e-0922-9513-cc195e56895d-e97e7802{grid-column:span 1/span 1}#w-node-_12bb7aac-91dd-9198-7f36-73f680088354-e97e7802{grid-area:span 1/span 1/span 1/span 1}#w-node-_54bc519d-9f2d-3514-5759-2f61a5f2a8a5-e97e7802{grid-area:1/1/2/2;justify-self:center}#w-node-fa612c6e-3df0-392a-7490-c0c92875afec-e97e7802,#w-node-_106216ce-d528-92c9-bbac-d659ef1c0767-e97e7802{grid-area:span 1/span 2/span 1/span 2}}@media screen and (max-width:767px){#w-node-c07faf60-8f84-3edb-aacd-5d7d32aca9a0-0ef646b9{grid-area:span 1/span 1/span 1/span 1}#w-node-fa612c6e-3df0-392a-7490-c0c92875afec-e97e7802,#w-node-_106216ce-d528-92c9-bbac-d659ef1c0767-e97e7802{grid-column:span 1/span 1}}@media screen and (max-width:479px){#w-node-_1314f315-0d5a-049d-66b0-0dc57a7d21d9-a5d97bcf{order:9999;grid-area:span 1/span 1/span 1/span 1;align-self:center}#w-node-_01b34f74-ef7b-84a3-e436-8cebe109b893-d9a78f22{grid-column:span 1/span 1}}</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>.nav_menu-trigger-wrap[data-active=\"true\"] .line-1{animation:line-1-animation 0.6s forwards}.nav_menu-trigger-wrap[data-active=\"true\"] .line-2{animation:line-2-animation 0.3s forwards}.nav_menu-trigger-wrap[data-active=\"true\"] .line-3{animation:line-3-animation 0.6s forwards}@keyframes line-1-animation{0%{transform:translateY(0%) rotate(0deg)}50%{transform:translateY(0.8em)}100%{transform:translateY(0.8em) rotate(45deg)}}@keyframes line-2-animation{0%{opacity:1}100%{opacity:0}}@keyframes line-3-animation{0%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-0.85em)}100%{transform:translateY(-0.85em) rotate(-45deg)}}@keyframes line-1-reverse-animation{0%{transform:translateY(0.8em) rotate(45deg)}50%{transform:translateY(0.8em)}100%{transform:translateY(0%) rotate(0deg)}}@keyframes line-2-reverse-animation{0%{opacity:0}100%{opacity:1}}@keyframes line-3-reverse-animation{0%{transform:translateY(-0.85em) rotate(-45deg)}50%{transform:translateY(-0.85em)}100%{transform:translateY(0%) rotate(0deg)}}</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>.nav_menu-trigger-wrap[data-active=\"true\"] .line-1{animation:line-1-animation 0.6s forwards}.nav_menu-trigger-wrap[data-active=\"true\"] .line-2{animation:line-2-animation 0.3s forwards}.nav_menu-trigger-wrap[data-active=\"true\"] .line-3{animation:line-3-animation 0.6s forwards}@keyframes line-1-animation{0%{transform:translateY(0%) rotate(0deg)}50%{transform:translateY(0.8em)}100%{transform:translateY(0.8em) rotate(45deg)}}@keyframes line-2-animation{0%{opacity:1}100%{opacity:0}}@keyframes line-3-animation{0%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-0.85em)}100%{transform:translateY(-0.85em) rotate(-45deg)}}@keyframes line-1-reverse-animation{0%{transform:translateY(0.8em) rotate(45deg)}50%{transform:translateY(0.8em)}100%{transform:translateY(0%) rotate(0deg)}}@keyframes line-2-reverse-animation{0%{opacity:0}100%{opacity:1}}@keyframes line-3-reverse-animation{0%{transform:translateY(-0.85em) rotate(-45deg)}50%{transform:translateY(-0.85em)}100%{transform:translateY(0%) rotate(0deg)}}</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:antialiased;text-rendering:optimizeLegibility}*[tabindex]:focus-visible,input[type=\"file\"]:focus-visible{outline:0.125rem solid #4d65ff;outline-offset:0.125rem}@media (min-width:1441px){body{font-size:1rem}}.w-richtext>:not(div):first-child,.w-richtext>div:first-child>:first-child{margin-top:0!important}.w-richtext>:last-child,.w-richtext ol li:last-child,.w-richtext ul li:last-child{margin-bottom:0!important}@media screen and (max-width:991px){.pricing_list.column-amount-5 div{grid-column:span 1}.pricing_list.column-amount-5>div:nth-child(5){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.pricing_list.column-amount-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50% - 3.75em);margin-left:auto;margin-right:auto}}@media screen and (max-width:767px){.pricing_list.column-amount-3 div:nth-child(3){grid-column:span 1;max-width:100%}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 1;width:100%}}@media screen and (max-width:479px){.pricing_list.column-amount-5 div{grid-column:span 1;width;100%;}.pricing_list.column-amount-5 div:nth-child(5){grid-column:span 1;max-width:100%}}</style>"}
className={`w-html-embed`} />
<div
className={`w-element ${"page-wrap"}`}>
<div
className={`w-element ${"global-styles w-embed"}`}>
<HtmlEmbed
code={"<style>body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:antialiased;text-rendering:optimizeLegibility}*[tabindex]:focus-visible,input[type=\"file\"]:focus-visible{outline:0.125rem solid #4d65ff;outline-offset:0.125rem}@media (min-width:1441px){body{font-size:1rem}}.w-richtext>:not(div):first-child,.w-richtext>div:first-child>:first-child{margin-top:0!important}.w-richtext>:last-child,.w-richtext ol li:last-child,.w-richtext ul li:last-child{margin-bottom:0!important}@media screen and (max-width:991px){.pricing_list.column-amount-5 div{grid-column:span 1}.pricing_list.column-amount-5>div:nth-child(5){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.pricing_list.column-amount-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50% - 3.75em);margin-left:auto;margin-right:auto}}@media screen and (max-width:767px){.pricing_list.column-amount-3 div:nth-child(3){grid-column:span 1;max-width:100%}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 1;width:100%}}@media screen and (max-width:479px){.pricing_list.column-amount-5 div{grid-column:span 1;width;100%;}.pricing_list.column-amount-5 div:nth-child(5){grid-column:span 1;max-width:100%}}</style>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element ${"page-css w-embed"}`} />
<div
className={`w-element ${"page-js w-embed w-iframe"}`} />
<main
className={`w-element ${"main-wrap"}`}>
<nav
data-wf--navbar--variant={"style-1"}
className={`w-element ${"navbar"}`}>
<div
className={`w-element ${"padding-global"}`}>
<div
className={`w-element ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element ${"nav_flexwrap"}`}>
<div
className={`w-element ${"nav_leftbox"}`}>
<a
href={"index.html"}
className={`w-element ${"nav_logo-link w-inline-block"}`}>
<Image
src={"/turtleci-import/images/TurtleCI-logo.png"}
loading={"lazy"}
width={70}
alt={"TurtleCI Main Logo"}
className={`w-image ${"nav_logo"}`} />
</a>
</div>
<div
className={`w-element ${"nav_rightbox"}`}>
<div
className={`w-element ${"nav_actions"}`}>
<div
className={`w-element ${"nav_link-wrap"}`}>
<a
href={"about-us.html"}
className={`w-element ${"nav_link text-weight-semibold text-align-right"}`}>
{"About Us "}
</a>
<a
href={"features-turtleci.html"}
className={`w-element ${"nav_link text-weight-semibold text-align-right"}`}>
{"Features "}
</a>
<a
href={"pricing-plan.html"}
className={`w-element ${"nav_link text-weight-semibold text-align-right"}`}>
{"Pricing "}
</a>
<a
href={"contact-us.html"}
className={`w-element ${"nav_link text-weight-semibold text-align-right"}`}>
{"Contact "}
</a>
<a
href={"blogs.html"}
aria-current={"page"}
className={`w-element ${"nav_link text-weight-semibold text-align-right w--current"}`}>
{"Blog "}
</a>
<a
href={"documentation.html"}
className={`w-element ${"nav_link text-weight-semibold text-align-right"}`}>
{"Documentation"}
</a>
</div>
<a
href={"https://console.turtleci.io/login"}
className={`w-element ${"button-wrap w-inline-block"}`}>
<button
className={`w-element ${"button"}`}>
<div
className={`w-element`}>
{"Get Started"}
</div>
</button>
</a>
</div>
<div
className={`w-element ${"nav_menu-trigger-wrap"}`}>
<div
className={`w-element ${"nav_menu-trigger_line line-1"}`} />
<div
className={`w-element ${"nav_menu-trigger_line line-2"}`} />
<div
className={`w-element ${"nav_menu-trigger_line line-3"}`} />
</div>
</div>
</div>
</div>
</div>
</nav>
<section
className={`w-element ${"hero-section no-margin"}`}>
<div
className={`w-element ${"max-100vw"}`}>
<div
className={`w-element ${"absolute-hero-heading"}`}>
<h1
className={`w-element ${"text-color-brand style-55"}`}>
{"Blogs"}
</h1>
<div
className={`w-element ${"spacer-24px"}`} />
<div
className={`w-element ${"text-size-lg max-width-medium text-align-center"}`}>
{"Effortlessly automate your build, test, and deployment pipelines across macOS and Linux with a cost-effective, flexible CI/CD platform."}
</div>
<div
className={`w-element ${"spacer-40px"}`} />
<div
className={`w-element ${"button-group"}`}>
<a
href={"https://console.turtleci.io/login"}
className={`w-element ${"button-wrap w-inline-block"}`}>
<button
className={`w-element ${"button"}`}>
<div
className={`w-element`}>
{"Start For Free"}
</div>
<div
className={`w-element ${"button__ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M4 12L20 12M20 12L14 18M20 12L14 6"}
stroke={"currentColor"}
strokeWidth={"1.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
</button>
</a>
<a
href={"contact-us.html"}
className={`w-element ${"button-wrap w-inline-block"}`}>
<button
className={`w-element ${"button-secondary"}`}>
<div
className={`w-element`}>
{"Talk to Us"}
</div>
<div
className={`w-element ${"button__ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M4 12L20 12M20 12L14 18M20 12L14 6"}
stroke={"currentColor"}
strokeWidth={"1.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
</button>
</a>
</div>
</div>
<div
className={`w-element ${"div-block-2"}`} />
</div>
</section>
<section
className={`w-element ${"blog-section"}`}>
<div
className={`w-element ${"padding-global"}`}>
<div
className={`w-element ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element ${"blog-collection overflow-hidden"}`}>
<div
className={`w-element ${"collection-list-wrapper w-dyn-list"}`}>
<div
role={"list"}
className={`w-element ${"collection-list w-dyn-items"}`}>
<div
role={"listitem"}
className={`w-element ${"collection-item w-dyn-item"}`}>
<a
aria-label={"Read More"}
href={"#"}
className={`w-element ${"blog-card w-inline-block"}`}>
<div
className={`w-element ${"blog-img-wrapper"}`}>
<Image
src={"https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"}
loading={"lazy"}
alt={""}
className={`w-image ${"w-dyn-bind-empty"}`} />
</div>
<div
className={`w-element ${"blog_item_content"}`}>
<div
className={`w-element ${"spacer-16px"}`} />
<div
className={`w-element ${"text-block w-dyn-bind-empty"}`} />
<h2
className={`w-element ${"blog-heading w-dyn-bind-empty"}`} />
<p
className={`w-element ${"max-width-full text-style-3lines w-dyn-bind-empty"}`} />
</div>
</a>
</div>
</div>
<div
className={`w-element ${"w-dyn-empty"}`}>
<div
className={`w-element`}>
{"No items found."}
</div>
</div>
</div>
<div
className={`w-element ${"button-center"}`}>
<a
href={"features-turtleci.html"}
className={`w-element ${"button-wrap w-inline-block"}`}>
<button
className={`w-element ${"button"}`}>
<div
className={`w-element`}>
{"Explore Our Services"}
</div>
<div
className={`w-element ${"button__ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M4 12L20 12M20 12L14 18M20 12L14 6"}
stroke={"currentColor"}
strokeWidth={"1.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
</button>
</a>
</div>
</div>
</div>
</div>
</section>
<section
className={`w-element ${"cta-section"}`}>
<div
className={`w-element ${"padding-global"}`}>
<div
className={`w-element ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element ${"cta_box-wrap background-color-dark"}`}>
<div
className={`w-element ${"cta_w-bg_main_lg"}`}>
<div
className={`w-element ${"cta_heading-wrap"}`}>
<h3
className={`w-element ${"cta-heading"}`}>
{"Experience the speed, scalability, and simplicity of TurtleCI with zero risk."}
</h3>
</div>
<div
className={`w-element ${"spacer-24px"}`} />
<div
className={`w-element ${"cta_content-wrap"}`}>
<p
className={`w-element ${"text-color-alternate"}`}>
{"Start for Free Trial and build, test, and deploy with confidence."}
</p>
</div>
<div
className={`w-element ${"spacer-24px"}`} />
<a
aria-label={"Go to TurtleCI Console"}
href={"https://console.turtleci.io/login"}
className={`w-element ${"button-wrap w-inline-block"}`}>
<button
className={`w-element ${"button-tertiary"}`}>
<div
className={`w-element`}>
{"Start Free Trial"}
</div>
<div
className={`w-element ${"button__ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M4 12L20 12M20 12L14 18M20 12L14 6"}
stroke={"currentColor"}
strokeWidth={"1.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
</button>
</a>
</div>
</div>
</div>
</div>
</section>
<footer
data-wf--footer-2--variant={"style-1"}
className={`w-element ${"footer"}`}>
<div
className={`w-element ${"padding-global"}`}>
<div
className={`w-element ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element ${"footer_grid footer-2"}`}>
<div
id={"w-node-d9852e9b-78da-4b05-14ca-46237e0756e5-7e0756e1"}
className={`w-element ${"footer_left-content footer-2"}`}>
<Image
width={70}
loading={"lazy"}
alt={"TurtleCI Main Logo"}
src={"/turtleci-import/images/TurtleCI-logo.png"}
className={`w-image ${"footer_logo"}`} />
<div
className={`w-element ${"spacer-8px"}`} />
<div
className={`w-element ${"text-size-sm"}`}>
{"Cost-Effective CI/CD Platform for Devops"}
</div>
<div
className={`w-element ${"spacer-16px"}`} />
<div
className={`w-element ${"social-links"}`}>
<a
aria-label={"Visit TurtleCI Facebook"}
href={"https://www.facebook.com/turtleci"}
className={`w-element ${"footer_social w-inline-block"}`}>
<div
className={`w-element ${"footer_social-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<g
clipPath={"url(#clip0_64_2128)"}
className={`w-element`}>
<path
d={"M24 12.0301C24 5.38947 18.624 0 12 0C5.376 0 0 5.38947 0 12.0301C0 17.8526 4.128 22.7007 9.6 23.8195V15.6391H7.2V12.0301H9.6V9.02256C9.6 6.70075 11.484 4.81203 13.8 4.81203H16.8V8.42105H14.4C13.74 8.42105 13.2 8.96241 13.2 9.62406V12.0301H16.8V15.6391H13.2V24C19.26 23.3985 24 18.2737 24 12.0301Z"}
fill={"currentColor"}
className={`w-element`} />
</g>
<defs
className={`w-element`}>
<clipPath
id={"clip0_64_2128"}
className={`w-element`}>
<rect
width={"24"}
height={"24"}
fill={"white"}
className={`w-element`} />
</clipPath>
</defs>
</svg>
</div>
</a>
<a
aria-label={"Visit TurtleCI Youtube"}
href={"https://www.youtube.com/@TurtleCI"}
className={`w-element ${"footer_social w-inline-block"}`}>
<div
className={`w-element ${"footer_social-ic w-embed"}`}>
<svg
viewBox={"0 0 152 152"}
width={"100%"}
height={"100%"}
xmlns={"http://www.w3.org/2000/svg"}
id={"fi_3669688"}
fill={"currentColor"}
className={`w-element`}>
<g
id={"Layer_2"}
data-name={"Layer 2"}
className={`w-element`}>
<g
id={"Color"}
className={`w-element`}>
<g
id={"_02.YouTube"}
data-name={"02.YouTube"}
className={`w-element`}>
<path
d={"m65.46 88.26 21.08-12.23-21.08-12.29z"}
className={`w-element`} />
<path
d={"m76 0a76 76 0 1 0 76 76 76 76 0 0 0 -76-76zm40 89.45a15.13 15.13 0 0 1 -15.13 15.14h-49.74a15.13 15.13 0 0 1 -15.13-15.14v-26.9a15.13 15.13 0 0 1 15.13-15.14h49.74a15.13 15.13 0 0 1 15.13 15.14z"}
className={`w-element`} />
</g>
</g>
</g>
</svg>
</div>
</a>
<a
aria-label={"Visit TurtleCI LinkedIn"}
href={"https://www.linkedin.com/company/turtleci/"}
className={`w-element ${"footer_social w-inline-block"}`}>
<div
className={`w-element ${"footer_social-ic w-embed"}`}>
<svg
viewBox={"0 0 32 32"}
width={"100%"}
height={"100%"}
xmlns={"http://www.w3.org/2000/svg"}
id={"fi_10110392"}
fill={"currentColor"}
className={`w-element`}>
<g
id={"OUTLINE_copy_2"}
className={`w-element`}>
<g
className={`w-element`}>
<path
d={"m16 0c-8.836 0-16 7.163-16 16 0 8.836 7.164 16 16 16s16-7.164 16-16c0-8.837-7.164-16-16-16zm-4.156 22.277h-3.264v-9.82h3.264zm-1.632-11.161h-.021c-1.096 0-1.804-.755-1.804-1.697 0-.963.73-1.696 1.846-1.696s1.804.733 1.825 1.696c0 .943-.709 1.697-1.846 1.697zm13.401 11.161h-3.264v-5.254c0-1.32-.472-2.22-1.654-2.22-.901 0-1.438.607-1.674 1.194-.086.21-.108.503-.108.796v5.484h-3.263s.043-8.898 0-9.82h3.264v1.391c.433-.669 1.209-1.622 2.942-1.622 2.147 0 3.757 1.404 3.757 4.42z"}
className={`w-element`} />
</g>
</g>
</svg>
</div>
</a>
</div>
</div>
<div
className={`w-element ${"footer_center-block"}`}>
<div
className={`w-element ${"footer-link-wrapper"}`}>
<div
className={`w-element ${"heading-style-h5"}`}>
{"Product"}
</div>
<div
className={`w-element ${"spacer-8px"}`} />
<a
href={"features-turtleci.html"}
className={`w-element`}>
{"Features"}
</a>
<div
className={`w-element ${"spacer-8px"}`} />
<a
href={"pricing-plan.html"}
className={`w-element`}>
{"Pricing"}
</a>
</div>
<div
className={`w-element ${"footer-link-wrapper"}`}>
<div
className={`w-element ${"heading-style-h5"}`}>
{"Company"}
</div>
<div
className={`w-element ${"spacer-8px"}`} />
<a
href={"about-us.html"}
className={`w-element`}>
{"About Us"}
</a>
<div
className={`w-element ${"spacer-8px"}`} />
<a
href={"blogs.html"}
aria-current={"page"}
className={`w-element ${"w--current"}`}>
{"Blog"}
</a>
</div>
<div
className={`w-element ${"footer-link-wrapper"}`}>
<div
className={`w-element ${"heading-style-h5"}`}>
{"Legal Terms"}
</div>
<div
className={`w-element ${"spacer-8px"}`} />
<a
href={"terms-of-service.html"}
className={`w-element`}>
{"Terms of Service"}
</a>
<div
className={`w-element ${"spacer-8px"}`} />
<a
href={"privacy-and-policy.html"}
className={`w-element`}>
{"Privacy Policy"}
</a>
</div>
<div
className={`w-element ${"footer-link-wrapper"}`}>
<div
className={`w-element ${"heading-style-h5"}`}>
{"Support"}
</div>
<div
className={`w-element ${"spacer-8px"}`} />
<a
href={"documentation.html"}
className={`w-element`}>
{"Documentation"}
</a>
<div
className={`w-element ${"spacer-8px"}`} />
<a
href={"contact-us.html"}
className={`w-element`}>
{"Contact Us"}
</a>
</div>
</div>
</div>
<div
className={`w-element ${"spacer-80px"}`} />
</div>
<div
className={`w-element ${"footnote"}`}>
<p
className={`w-element ${"text-color-secondary caption-md"}`}>
{"@2024 TurtleCI. All Rights Reserved"}
</p>
</div>
</div>
</footer>
<div
className={`w-element ${"intercom-embed"}`}>
<div
className={`w-element ${"w-embed w-script"}`}>
<HtmlEmbed
clientOnly={true}
code={"<script>\n  const APP_ID = \"gl275fli\" // IMPORTANT: Replace with your workspace ID\n  window.intercomSettings = {\n    api_base: \"https://api-iam.intercom.io\",\n    app_id: APP_ID,\n  };\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
clientOnly={true}
code={"<script>\n  (function(){var w=window;var ic=w.Intercom;if(typeof ic===\"function\"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();\n</script>"}
className={`w-html-embed`} />
</div>
</div>
</main>
</div>
<HtmlEmbed
clientOnly={true}
code={"<script src=\"https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6757f377cc48557b0ef646bd\" type=\"text/javascript\" integrity=\"sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=\" crossorigin=\"anonymous\"></script>"}
className={`w-html-embed`} />
<HtmlEmbed
clientOnly={true}
code={"<script src=\"/turtleci-import/js/webflow.js\" type=\"text/javascript\"></script>"}
className={`w-html-embed`} />
<HtmlEmbed
clientOnly={true}
code={"<script>\ndocument.addEventListener('DOMContentLoaded', function () {\ndocument.querySelector('.nav_menu-trigger-wrap').addEventListener('click', function () {\n  const menuTrigger = document.querySelector('.nav_menu-trigger-wrap');\n  const navLinks = document.querySelector('.nav_actions');\n  // Check if `data-active` attribute exists\n  if (navLinks.getAttribute('data-active') === 'true') {\n    // Remove the attribute from both elements\n    navLinks.removeAttribute('data-active');\n    menuTrigger.removeAttribute('data-active');\n  } else {\n    // Add the attribute to both elements\n    navLinks.setAttribute('data-active', 'true');\n    menuTrigger.setAttribute('data-active', 'true');\n  }\n});\n});\n</script>"}
className={`w-html-embed`} />
</body>
}


      export { Page }
    