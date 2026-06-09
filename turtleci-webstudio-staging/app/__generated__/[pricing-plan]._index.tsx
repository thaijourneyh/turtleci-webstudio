/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { HtmlEmbed as HtmlEmbed, Image as Image } from "@webstudio-is/sdk-components-react";


      export const projectId = "a99d5fa7-683f-4129-974a-e8564180e8df";

      export const projectDomain = "turtleci-staging";

      export const lastPublished = "2026-06-08T02:55:34.619Z";

      export const siteName = undefined;

      export const breakpoints = [{"id":"base"},{"id":"45f5c977-5f83-41e9-8b7d-9695fe51f7fc","maxWidth":991},{"id":"2e71b6b0-c8bf-44e8-9431-2362a90f8f4e","maxWidth":768},{"id":"a6f71109-250c-4881-b222-dd77b71daa01","maxWidth":767},{"id":"95e56516-8d86-425f-8f6b-4cf342440c91","maxWidth":479},{"id":"dcd00c70-1b4c-4d5e-88a5-9eed4ce9d845","minWidth":768}];

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
code={"<style>html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:none}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@font-face{font-family:\"webflow-icons\";src:url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)format(\"truetype\");font-weight:normal;font-style:normal}[class^=\"w-icon-\"],[class*=\" w-icon-\"]{font-family:\"webflow-icons\"!important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{height:100%}body{margin:0;min-height:100%;background-color:#fff;font-family:Arial,sans-serif;font-size:14px;line-height:20px;color:#333}img{max-width:100%;vertical-align:middle;display:inline-block}html.w-mod-touch *{background-attachment:scroll!important}input.w-button{-webkit-appearance:button}html[data-w-dynpage] [data-w-cloak]{color:transparent!important}pre.w-code-block code{all:inherit}pre.w-code-block code>span{display:block!important}.w-webflow-badge>img{box-sizing:unset;width:unset;height:unset;max-height:unset;max-width:unset;min-height:unset;min-width:unset;margin:unset;padding:unset;float:unset;clear:unset;border:unset;border-radius:unset;background:unset;background-image:unset;background-position:unset;background-size:unset;background-repeat:unset;background-origin:unset;background-clip:unset;background-attachment:unset;background-color:unset;box-shadow:unset;transform:unset;transition:unset;direction:unset;font-family:unset;font-weight:unset;color:unset;font-size:unset;line-height:unset;font-style:unset;font-variant:unset;text-align:unset;letter-spacing:unset;text-decoration:unset;text-indent:unset;text-transform:unset;list-style-type:unset;text-shadow:unset;vertical-align:unset;cursor:unset;white-space:unset;word-break:unset;word-spacing:unset;word-wrap:unset}.w-webflow-badge>img{position:unset;display:inline-block!important;visibility:unset!important;opacity:1!important;vertical-align:middle!important}h1,h2,h3,h4,h5,h6{font-weight:bold;margin-bottom:10px}h1{font-size:38px;line-height:44px;margin-top:20px}h2{font-size:32px;line-height:36px;margin-top:20px}h3{font-size:24px;line-height:30px;margin-top:20px}h4{font-size:18px;line-height:24px;margin-top:10px}h5{font-size:14px;line-height:20px;margin-top:10px}h6{font-size:12px;line-height:18px;margin-top:10px}p{margin-top:0;margin-bottom:10px}blockquote{margin:0 0 10px 0;padding:10px 20px;border-left:5px solid #E2E2E2;font-size:18px;line-height:22px}figure{margin:0;margin-bottom:10px}figcaption{margin-top:5px;text-align:center}ul,ol{margin-top:0px;margin-bottom:10px;padding-left:40px}.w-video iframe,.w-video object,.w-video embed{position:absolute;top:0;left:0;width:100%;height:100%;border:none}fieldset{padding:0;margin:0;border:0}button,[type=\"button\"],[type=\"reset\"]{border:0;cursor:pointer;-webkit-appearance:button}label{display:block;margin-bottom:5px;font-weight:bold}fieldset[disabled] .w-input,fieldset[disabled] .w-select{cursor:not-allowed}fieldset[disabled]:not(.w-input-disabled) .w-input,fieldset[disabled]:not(.w-input-disabled) .w-select{background-color:#eeeeee}textarea.w-input,textarea.w-select{height:auto}.w-widget-map label{width:auto;display:inline}.w-widget-map img{max-width:inherit}.w-widget-map .gm-style-iw>button{display:none!important}.w-widget-twitter-count-shim *{pointer-events:none;user-select:none}.w-background-video>video{background-size:cover;background-position:50% 50%;position:absolute;margin:auto;width:100%;height:100%;right:-100%;bottom:-100%;top:-100%;left:-100%;object-fit:cover;z-index:-100}.w-background-video>video::-webkit-media-controls-start-playback-button{display:none!important;-webkit-appearance:none}.w-background-video--control>[hidden]{display:none!important}.w-slider-nav.w-round>div{border-radius:100%}.w-slider-nav.w-num>div{width:auto;height:auto;padding:0.2em 0.5em;font-size:inherit;line-height:inherit}.w-slider-nav.w-shadow>div{box-shadow:0 0 3px rgba(51,51,51,0.4)}.w-slider-nav-invert>div{background-color:rgba(34,34,34,0.4)}.w-slider-nav-invert>div.w-active{background-color:#222}.w-slider-arrow-left [class^=\"w-icon-\"],.w-slider-arrow-right [class^=\"w-icon-\"],.w-slider-arrow-left [class*=\" w-icon-\"],.w-slider-arrow-right [class*=\" w-icon-\"]{position:absolute}.w-richtext ol,.w-richtext ul{overflow:hidden}.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,.w-richtext .w-richtext-figure-selected[data-rt-type=\"video\"] div:after{outline:2px solid #2895f7}.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,.w-richtext .w-richtext-figure-selected[data-rt-type=\"image\"] div{outline:2px solid #2895f7}.w-richtext figure.w-richtext-figure-type-video>div:after,.w-richtext figure[data-rt-type=\"video\"]>div:after{content:\"\";position:absolute;display:none;left:0;top:0;right:0;bottom:0}.w-richtext figure{position:relative;max-width:60%}.w-richtext figure>div:before{cursor:default!important}.w-richtext figure img{width:100%}.w-richtext figure figcaption.w-richtext-figcaption-placeholder{opacity:0.6}.w-richtext figure div{font-size:0px;color:transparent}.w-richtext figure.w-richtext-figure-type-image,.w-richtext figure[data-rt-type=\"image\"]{display:table}.w-richtext figure.w-richtext-figure-type-image>div,.w-richtext figure[data-rt-type=\"image\"]>div{display:inline-block}.w-richtext figure.w-richtext-figure-type-image>figcaption,.w-richtext figure[data-rt-type=\"image\"]>figcaption{display:table-caption;caption-side:bottom}.w-richtext figure.w-richtext-figure-type-video,.w-richtext figure[data-rt-type=\"video\"]{width:60%;height:0}.w-richtext figure.w-richtext-figure-type-video iframe,.w-richtext figure[data-rt-type=\"video\"] iframe{position:absolute;top:0;left:0;width:100%;height:100%}.w-richtext figure.w-richtext-figure-type-video>div,.w-richtext figure[data-rt-type=\"video\"]>div{width:100%}.w-richtext figure.w-richtext-align-center{margin-right:auto;margin-left:auto;clear:both}.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image>div,.w-richtext figure.w-richtext-align-center[data-rt-type=\"image\"]>div{max-width:100%}.w-richtext figure.w-richtext-align-normal{clear:both}.w-richtext figure.w-richtext-align-fullwidth{width:100%;max-width:100%;text-align:center;clear:both;display:block;margin-right:auto;margin-left:auto}.w-richtext figure.w-richtext-align-fullwidth>div{display:inline-block;padding-bottom:inherit}.w-richtext figure.w-richtext-align-fullwidth>figcaption{display:block}.w-richtext figure.w-richtext-align-floatleft{float:left;margin-right:15px;clear:none}.w-richtext figure.w-richtext-align-floatright{float:right;margin-left:15px;clear:none}[data-nav-menu-open]{display:block!important;position:absolute;top:100%;left:0;right:0;background:#C8C8C8;text-align:center;overflow:visible;min-width:200px}.w-nav-overlay [data-nav-menu-open]{top:0}.w-nav[data-animation=\"over-left\"] .w-nav-overlay{width:auto}.w-nav[data-animation=\"over-left\"] .w-nav-overlay,.w-nav[data-animation=\"over-left\"] [data-nav-menu-open]{right:auto;z-index:1;top:0}.w-nav[data-animation=\"over-right\"] .w-nav-overlay{width:auto}.w-nav[data-animation=\"over-right\"] .w-nav-overlay,.w-nav[data-animation=\"over-right\"] [data-nav-menu-open]{left:auto;z-index:1;top:0}.w-nav[data-collapse=\"all\"] .w-nav-menu{display:none}.w-nav[data-collapse=\"all\"] .w-nav-button{display:block}@media screen and (max-width:991px){.w-nav[data-collapse=\"medium\"] .w-nav-menu{display:none}.w-nav[data-collapse=\"medium\"] .w-nav-button{display:block}}@media screen and (max-width:767px){.w-nav[data-collapse=\"small\"] .w-nav-menu{display:none}.w-nav[data-collapse=\"small\"] .w-nav-button{display:block}}@media screen and (max-width:479px){.w-nav[data-collapse=\"tiny\"] .w-nav-menu{display:none}.w-nav[data-collapse=\"tiny\"] .w-nav-button{display:block}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}body{background-color:var(--base-color--true-white);color:var(--base-color--true-black);font-family:Plus Jakarta Sans,sans-serif;font-size:1vw;line-height:1.4}h1{text-wrap:pretty;margin-top:0;margin-bottom:0;font-size:3.5em;font-weight:700;line-height:1.1}h2{text-wrap:pretty;margin-top:0;margin-bottom:0;font-size:3em;font-weight:700;line-height:1.2}h3{text-wrap:pretty;margin-top:0;margin-bottom:0;font-size:2.5em;font-weight:700;line-height:1.3}h4{text-wrap:pretty;margin-top:0;margin-bottom:0;font-size:1.5em;font-weight:700;line-height:1.3}h5{text-wrap:pretty;margin-top:.5em;margin-bottom:.5em;font-size:1.25em;font-weight:700;line-height:1.4}h6{margin-top:0;margin-bottom:0;font-size:12px;font-weight:700;line-height:18px}p{color:var(--base-color--true-black);text-wrap:pretty;margin-bottom:0;font-size:1em;font-weight:400;line-height:1.4}a{color:var(--base-color--brand-primary);text-shadow:0 0 1px #0000004d;font-size:1em;font-weight:500;line-height:1.4;text-decoration:none;transition-property:color;transition-duration:.2s;transition-timing-function:ease}a:hover{color:var(--base-color--star-yellow)}ul,ol{margin-top:.5em;margin-bottom:1em;padding-left:2.5em}li{text-wrap:pretty;margin-bottom:.25em}img{object-fit:cover;display:inline-block}label{margin-bottom:0;font-weight:700;display:block}code{border:1px solid var(--base-color--star-yellow);background-color:#ffa7261a;border-radius:4px;margin-right:2px;padding:2px 4px;font-size:.9em;font-weight:600;display:inline-block}blockquote{border-left-style:solid;border-left-width:.25em;border-left-color:var(--base-color--brand-primary);text-wrap:pretty;margin-bottom:1em;padding:.5em 0 .5em 1.25em;font-size:1.25em;line-height:1.4}.text-rich-text h1{color:var(--base-color--brand-primary);margin-bottom:.25em}.text-rich-text h2{color:var(--base-color--brand-primary);margin-top:.5em;margin-bottom:.25em}.text-rich-text h3,.text-rich-text h4{color:var(--base-color--brand-primary);margin-top:.5em;margin-bottom:.5em}.text-rich-text h5{color:var(--base-color--brand-primary)}@media screen and (max-width:991px){body{font-size:1.75vw}}@media screen and (max-width:767px){body{font-size:2.25vw}h3{font-size:2.125em}h4{line-height:1.4}p{line-height:1.5}li{font-size:1.25em}}@media screen and (max-width:479px){body{font-size:3.875vw}h1{font-size:2em}h2{font-size:1.75em}h4{font-size:1.25em}h5{font-size:1.125em}p{line-height:1.5}li{font-size:3.5vw}}#w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d202b-0ef646b9{grid-area:span 1/span 1/span 1/span 1}#w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d203e-0ef646b9:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-area:1/1/2/2}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-0ef646b9{grid-area:span 1/span 1/span 1/span 1}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-0ef646b9:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-area:1/2/2/3}#w-node-_66648800-ce29-4660-afa4-92e104160795-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e1041607b4-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041607b9-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041607be-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041607c3-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e1041607dd-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041608a5-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041608a7-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041608ad-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041608c4-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041608dd-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e1041608e0-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e1041608e2-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e1041608e5-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e10416093c-0ef646ba,#w-node-f5fc250e-34b1-c8d9-acf6-d8ea06d4dc9d-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160946-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160947-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e1041609c9-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041609cf-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041609d5-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041609db-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041609e1-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041609e7-0ef646ba{justify-self:stretch}#w-node-_66648800-ce29-4660-afa4-92e1041609f7-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e1041609fc-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a01-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a06-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a0b-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a10-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a15-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a1a-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a1f-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a24-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a28-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a29-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a2c-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a2d-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a2e-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a31-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a32-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a33-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a36-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a37-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a38-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a3b-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a3c-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a3d-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a40-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a41-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a42-0ef646ba{justify-self:start}#w-node-_66648800-ce29-4660-afa4-92e104160a45-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a56-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a83-0ef646ba,#w-node-_66648800-ce29-4660-afa4-92e104160a99-0ef646ba{grid-area:span 1/span 1/span 1/span 1}#w-node-_66648800-ce29-4660-afa4-92e104160a9f-0ef646ba{justify-self:start}#w-node-_75d7d58d-003d-eb2a-bb91-5760bbc0d1ad-40a729bc{grid-area:span 1/span 1/span 1/span 1}#w-node-_75d7d58d-003d-eb2a-bb91-5760bbc0d1bc-40a729bc:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-area:1/1/2/2}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-40a729bc{grid-area:span 1/span 1/span 1/span 1}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-40a729bc:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-area:1/2/2/3}#w-node-_674c7cd8-f820-37fb-d82b-aac29e52da7f-40a729bc{grid-area:span 1/span 1/span 1/span 1}#w-node-_674c7cd8-f820-37fb-d82b-aac29e52da7f-40a729bc:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-area:1/2/2/3}#w-node-_3590fea4-7452-e36f-bbb4-07668ffc7110-40a729bc:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-area:1/1/2/2}#w-node-_3590fea4-7452-e36f-bbb4-07668ffc7101-40a729bc,#w-node-_7483c5f0-6c73-8915-0900-71e22f1e731b-a5d97bcf{grid-area:span 1/span 1/span 1/span 1}#w-node-_7621a218-f4a1-1056-ffdd-ecebdc93fb73-a5d97bcf{order:9999}#w-node-a63b472e-a1da-bb3a-d92c-e5e08816100c-a5d97bcf{align-self:center}#w-node-_1314f315-0d5a-049d-66b0-0dc57a7d21d9-a5d97bcf{order:9999;align-self:center}#w-node-_1314f315-0d5a-049d-66b0-0dc57a7d21df-a5d97bcf{justify-self:center}#w-node-ae3cff3c-61cb-2074-9a65-c6078a640db5-45885f9c{grid-area:span 1/span 1/span 1/span 1}#w-node-ae3cff3c-61cb-2074-9a65-c6078a640dc4-45885f9c:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-area:1/1/2/2}#w-node-_56c4fbff-94e2-273a-2849-e78fae901331-45885f9c,#w-node-_5b9b38dd-7563-4c1f-1249-3c06a9817224-45885f9c,#w-node-_52b60110-ec71-cf77-6efe-8186f1e2cd51-45885f9c,#w-node-ef8419f4-b8b1-ee7a-e0f7-d5b38908f1e0-45885f9c,#w-node-ef8419f4-b8b1-ee7a-e0f7-d5b38908f16e-45885f9c,#w-node-ef8419f4-b8b1-ee7a-e0f7-d5b38908f1a3-45885f9c{grid-area:span 1/span 1/span 1/span 1}#w-node-_7621a218-f4a1-1056-ffdd-ecebdc93fb73-45885f9c{order:9999}#w-node-_1551703d-661f-8a8f-bbe4-a3fa5746bab9-a201f7fa{grid-area:span 1/span 1/span 1/span 1;justify-self:center}#w-node-_1551703d-661f-8a8f-bbe4-a3fa5746bacc-a201f7fa:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-area:1/1/2/2}#w-node-_56fd8490-4c43-3ef5-778c-be9a52dab8bb-a201f7fa{align-self:center}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-a201f7fa{grid-area:span 1/span 1/span 1/span 1}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-a201f7fa:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-area:1/2/2/3}#w-node-_3f74929b-8a41-b220-a411-c5e148c88fed-a201f7fa,#w-node-b13029e3-76cf-3bd3-6171-44b3ba25f7af-a201f7fa,#w-node-d7fed079-6d00-2f06-4fde-0075cb4ca431-a201f7fa{justify-self:center}#w-node-fdb51a93-9599-cf16-b377-00e91f7aa326-d9a78f22{grid-area:span 1/span 1/span 1/span 1;place-self:start}#w-node-_01b34f74-ef7b-84a3-e436-8cebe109b893-d9a78f22{grid-area:span 1/span 5/span 1/span 5}#w-node-_7483c5f0-6c73-8915-0900-71e22f1e731b-84005adb,#w-node-_7483c5f0-6c73-8915-0900-71e22f1e731b-9a5fff5f,#w-node-_7483c5f0-6c73-8915-0900-71e22f1e731b-2ed8878b{grid-area:span 1/span 1/span 1/span 1;justify-self:center}#w-node-_70fa2271-aa4e-0922-9513-cc195e56895d-e97e7802{grid-area:span 1/span 3/span 1/span 3}#w-node-_54bc519d-9f2d-3514-5759-2f61a5f2a8a5-e97e7802{grid-area:span 1/span 1/span 1/span 1}@media screen and (max-width:991px){#w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d203e-0ef646b9{justify-self:center}#w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d203e-0ef646b9:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-row:2/3}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-0ef646b9:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-column:1/2}#w-node-d9852e9b-78da-4b05-14ca-46237e0756e5-7e0756e1{align-self:stretch}#w-node-_75d7d58d-003d-eb2a-bb91-5760bbc0d1bc-40a729bc:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-row:2/3}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-40a729bc:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54),#w-node-_674c7cd8-f820-37fb-d82b-aac29e52da7f-40a729bc:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-column:1/2}#w-node-_3590fea4-7452-e36f-bbb4-07668ffc7110-40a729bc{order:9999}#w-node-_3590fea4-7452-e36f-bbb4-07668ffc7110-40a729bc:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-row:2/3}#w-node-c516adc2-e707-86e8-9bbb-7901f8308955-a5d97bcf,#w-node-a63b472e-a1da-bb3a-d92c-e5e08816102a-a5d97bcf{order:-9999}#w-node-ae3cff3c-61cb-2074-9a65-c6078a640dc4-45885f9c:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26),#w-node-_1551703d-661f-8a8f-bbe4-a3fa5746bacc-a201f7fa:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26){grid-row:2/3}#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-a201f7fa:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54){grid-column:1/2}#w-node-fdb51a93-9599-cf16-b377-00e91f7aa326-d9a78f22{justify-self:center}#w-node-_01b34f74-ef7b-84a3-e436-8cebe109b893-d9a78f22,#w-node-_70fa2271-aa4e-0922-9513-cc195e56895d-e97e7802{grid-column:span 1/span 1}#w-node-_12bb7aac-91dd-9198-7f36-73f680088354-e97e7802{grid-area:span 1/span 1/span 1/span 1}#w-node-_54bc519d-9f2d-3514-5759-2f61a5f2a8a5-e97e7802{grid-area:1/1/2/2;justify-self:center}#w-node-fa612c6e-3df0-392a-7490-c0c92875afec-e97e7802,#w-node-_106216ce-d528-92c9-bbac-d659ef1c0767-e97e7802{grid-area:span 1/span 2/span 1/span 2}}@media screen and (max-width:767px){#w-node-c07faf60-8f84-3edb-aacd-5d7d32aca9a0-0ef646b9{grid-area:span 1/span 1/span 1/span 1}#w-node-fa612c6e-3df0-392a-7490-c0c92875afec-e97e7802,#w-node-_106216ce-d528-92c9-bbac-d659ef1c0767-e97e7802{grid-column:span 1/span 1}}@media screen and (max-width:479px){#w-node-_1314f315-0d5a-049d-66b0-0dc57a7d21d9-a5d97bcf{order:9999;grid-area:span 1/span 1/span 1/span 1;align-self:center}#w-node-_01b34f74-ef7b-84a3-e436-8cebe109b893-d9a78f22{grid-column:span 1/span 1}}</style>"}
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
className={`w-element cm0u0jj c1nyqhf9 c1upswbh c1rwc4sm c1t335do c1cinhhj ${"page-wrap"}`}>
<div
className={`w-element cmh603w c1m333il cds5ulr c1rfbdao cxsker3 caoid09 c1dgyhgq c10l835j c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"global-styles w-embed"}`}>
<HtmlEmbed
code={"<style>body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:antialiased;text-rendering:optimizeLegibility}*[tabindex]:focus-visible,input[type=\"file\"]:focus-visible{outline:0.125rem solid #4d65ff;outline-offset:0.125rem}@media (min-width:1441px){body{font-size:1rem}}.w-richtext>:not(div):first-child,.w-richtext>div:first-child>:first-child{margin-top:0!important}.w-richtext>:last-child,.w-richtext ol li:last-child,.w-richtext ul li:last-child{margin-bottom:0!important}@media screen and (max-width:991px){.pricing_list.column-amount-5 div{grid-column:span 1}.pricing_list.column-amount-5>div:nth-child(5){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.pricing_list.column-amount-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50% - 3.75em);margin-left:auto;margin-right:auto}}@media screen and (max-width:767px){.pricing_list.column-amount-3 div:nth-child(3){grid-column:span 1;max-width:100%}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 1;width:100%}}@media screen and (max-width:479px){.pricing_list.column-amount-5 div{grid-column:span 1;width;100%;}.pricing_list.column-amount-5 div:nth-child(5){grid-column:span 1;max-width:100%}}</style>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element cmh603w c14jek5s ctx8ibw c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"page-css w-embed"}`} />
<div
className={`w-element cmh603w c14jek5s ctx8ibw c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"page-js w-embed w-iframe"}`} />
<main
className={`w-element ${"main-wrap"}`}>
<nav
data-wf--navbar--variant={"style-1"}
className={`w-element c3pv99h c428y35 ch73i66 c1d5da0p c1xgwmfx c155y887 c1chl3ha cfko4c5 cmcjy5s c1ek6cds c16agd5o cvg101s c1n9jjcq ${"navbar"}`}>
<div
className={`w-element c1hxqw1p caai4an c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha cfko4c5 cmcjy5s c1k9913m c16agd5o c1kuwk32 c4gouwl caxr30d caqe5xq c1c8uskx cmbbocb c1xn1ugd c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe c1cnynqc ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element c1i7ve6l c2q6o0k c13lcbtl c7xx1rg cdzvqh6 cb9ahd3 cnphsm6 cu8axpx cley3lg csuuk33 clqhs5g c16fhz67 cr5vxx5 c15trozn ${"nav_flexwrap"}`}>
<div
className={`w-element c4yai1e cc964en cwnrfm6 c15s0n45 c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1udtbj5 c4s3jf c1tfz2nu c1isl1ly ${"nav_leftbox"}`}>
<a
href={"index.html"}
className={`w-element ckwuexc c1dftv06 cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly ${"nav_logo-link w-inline-block"}`}>
<Image
src={"/turtleci-import/images/TurtleCI-logo.png"}
loading={"lazy"}
width={70}
alt={"TurtleCI Main Logo"}
className={`w-image c1mfc36h c1lmt071 c15s0n45 c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1khrccq c4s3jf c1tfz2nu c1isl1ly ccn6bca c1dmj322 coxu29m cv7k4t ${"nav_logo"}`} />
</a>
</div>
<div
className={`w-element cdzvqh6 cmaylbl c1f96ip4 c19dnpzs cb9ahd3 cnphsm6 c12u855l c12lwdaa c7sdmwr c6660c5 cq6d6kz c14mmn5y c1ogj039 c3vgo57 c1hi9tqm c1u7ehrg ${"nav_rightbox"}`}>
<div
className={`w-element c1le6v90 c1e7vj8g c1y39kfe c7xx1rg cdzvqh6 cmaylbl c1f96ip4 c19dnpzs cb9ahd3 cnphsm6 cioexil czwjesa c12oouua c1tnh22f c173o5z5 c2q0ag4 chq3ky0 cfe1vus c149hts6 ceq9pda c1ca9zgk c6mrxx0 c74o7rt cocic4y c1jh5jmh c2jugk3 cubp8mi cc49nab c1d195ce c7tx598 cca4j68 crugq0o c1mqnin4 c12gnh9b cn5kibl c1rwc4sm c1t335do c1cinhhj cat6qrd c10bep2g c1w82hja coqt328 c39fbfu c1ou5bby c7xx1s3 cubhqip cf74d0e ctltzze ck7hzt7 c1i4lgve c1opa2bv c1mrgejv cjq76t4 c1l2cfg6 c1t8kji7 cijgvnt chkfzp4 c1bp1gy4 c1qx1hjk c15owlff c7jdf9i cxwnwit ${"nav_actions"}`}>
<div
className={`w-element c1s0k8lp c1irosg5 cdzvqh6 cmaylbl c1f96ip4 c19dnpzs czwjesa c12oouua chq3ky0 cfe1vus c19bjlry cat6qrd c10bep2g c1ou5bby c7xx1s3 cu3keg7 ${"nav_link-wrap"}`}>
<a
href={"about-us.html"}
className={`w-element c1noxpoj c8g4rbm c2ix4r5 c19dwj4u c1ml7m1e c434y6l ${"nav_link text-weight-semibold text-align-right"}`}>
{"About Us "}
</a>
<a
href={"features-turtleci.html"}
className={`w-element c1noxpoj c8g4rbm c2ix4r5 c19dwj4u c1ml7m1e c434y6l ${"nav_link text-weight-semibold text-align-right"}`}>
{"Features "}
</a>
<a
href={"pricing-plan.html"}
aria-current={"page"}
className={`w-element cvd9qfr c8g4rbm c2ix4r5 c19dwj4u c1ml7m1e c434y6l ${"nav_link text-weight-semibold text-align-right w--current"}`}>
{"Pricing "}
</a>
<a
href={"contact-us.html"}
className={`w-element c1noxpoj c8g4rbm c2ix4r5 c19dwj4u c1ml7m1e c434y6l ${"nav_link text-weight-semibold text-align-right"}`}>
{"Contact "}
</a>
<a
href={"blogs.html"}
className={`w-element c1noxpoj c8g4rbm c2ix4r5 c19dwj4u c1ml7m1e c434y6l ${"nav_link text-weight-semibold text-align-right"}`}>
{"Blog "}
</a>
<a
href={"documentation.html"}
className={`w-element c1noxpoj c8g4rbm c2ix4r5 c19dwj4u c1ml7m1e c434y6l ${"nav_link text-weight-semibold text-align-right"}`}>
{"Documentation"}
</a>
</div>
<a
href={"https://console.turtleci.io/login"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1jbh7w8 c2w17zg cqm1fiw c1rkddb1 ckwuexc c1dftv06 cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly cu73m4q ${"button-wrap w-inline-block"}`}>
<button
className={`w-element c13dsrcw c1tbtc05 c1kuwk32 ck80r54 c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c1m80p2u crld1xj ciwacd0 cwek1tm ${"button"}`}>
<div
className={`w-element`}>
{"Get Started"}
</div>
</button>
</a>
</div>
<div
className={`w-element cbplqux c1qu1cb1 c13lcbtl c1xeu4lt ckq8af1 cmh603w ccwjzqv ccsp7fv cvg101s c16ztblm csld4j0 c1n9jjcq cqj8kmi ${"nav_menu-trigger-wrap"}`}>
<div
className={`w-element c1t5f8e2 c1kuwk32 c7k79tq c1ilrpex cds5ulr cjfjc1q cxsker3 caoid09 c15s0n45 c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1udtbj5 c4s3jf c1tfz2nu c1isl1ly ${"nav_menu-trigger_line line-1"}`} />
<div
className={`w-element c1t5f8e2 c1kuwk32 c7k79tq c1ilrpex cqkoggo cjfjc1q cxsker3 caoid09 cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly ${"nav_menu-trigger_line line-2"}`} />
<div
className={`w-element c1t5f8e2 c1kuwk32 c7k79tq c1ilrpex c1tp54gh cjfjc1q cxnec9k caoid09 c15s0n45 c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1khrccq c4s3jf c1tfz2nu c1isl1ly ${"nav_menu-trigger_line line-3"}`} />
</div>
</div>
</div>
</div>
</div>
</nav>
<section
className={`w-element c16sffq6 cwqsbw c1vtrtst ${"hero-section"}`}>
<div
className={`w-element c1hxqw1p caai4an c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1d2jaa0 c1xfacko ${"padding-global is-hero"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha cfko4c5 cmcjy5s c1k9913m c16agd5o c1kuwk32 c4gouwl caxr30d caqe5xq c1c8uskx cmbbocb c1xn1ugd c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe c1cnynqc ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element c1i7ve6l c2q6o0k c1viuxvl c9bgjuu c13qfgf c1ofzs3j c1jyjzo4 c10rtf3d c146xu6l c168g7wn c1d2jaa0 c1ca9zgk c16e22dg cjyirgs c1dnw3oj cqqdlg5 c1ml4qhu c1xfacko ctltzze c17r3bwm cnrwk1m cetmigl c19b0j2q ${"hero_grid"}`}>
<div
id={"w-node-ae3cff3c-61cb-2074-9a65-c6078a640db5-45885f9c"}
className={`w-element cbplqux c1qu1cb1 c1g7apm c10je7ri cdzvqh6 c39dolp cb9ahd3 c1dem3yf c9fwhrd cbtr22e cq8fywn c2ykn3m crwxlzb c1svrc9o c149hts6 csuuk33 cegqa3m cozhu8r cs6j0y1 c1cuw1q6 cajtztt cq6d6kz cxem87t caxh4vs cc7k8p0 cubhqip cr5vxx5 csg1yg2 c1mmdtnj ccfm18d cn11m3v c1ruwqfa c1u7ehrg ctokejq c18xbpvs ${"hero_leftbox"}`}>
<div
className={`w-element c16v4zl c1i5hu5a cogx7qt cj5gfwl ${"cta_heading-wrap"}`}>
<div
className={`w-element c1egpnue c3bspns c1noxpoj c18ghmj7 ${"caption-md text-style-allcaps text-color-brand"}`}>
{"TURTLECI"}
</div>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<h1
className={`w-element c1noxpoj c18ghmj7 ${"text-color-brand"}`}>
{"TurtleCI Pricing Plan"}
</h1>
</div>
<div
className={`w-element c1kuwk32 c14fwb78 ca7ovlo cqyyj0l c1sgfhaw ${"spacer-40px"}`} />
<div
className={`w-element cbplqux c1qu1cb1 c1y39kfe c10je7ri cdzvqh6 c125ucm9 cnphsm6 c16v4zl c6mkfsn c149hts6 csuuk33 cogx7qt cubhqip cr5vxx5 cj5gfwl ${"hero_content-wrap"}`}>
<p
className={`w-element`}>
{"Get Started with a Free Trial and 'Unlock Powerful CI/CD Features Today"}
</p>
</div>
</div>
<div
id={"w-node-ae3cff3c-61cb-2074-9a65-c6078a640dc4-45885f9c"}
className={`w-element carupg6 cazdpea c1g67dw5 c74orcy ccwjzqv cfko4c5 cmcjy5s ${"hero_rightbox"}`}>
<Image
width={70}
src={"/turtleci-import/images/Web_illustration_14-1_1.avif"}
alt={"Turtle CI Plans for powerful CI/CD Features. Illustration with a rocket flying from coding."}
loading={"lazy"}
className={`w-image clujysi c1kuwk32 clxtd7s cjecskl c14u2f0p c1lnbq02 cbyh2l4 c1msgjcw c1wwm94l cl98mwy ${"hero_img is-pricing"}`} />
</div>
</div>
</div>
</div>
</section>
<section
className={`w-element cwqsbw c1vtrtst ${"pricing-section-w"}`}>
<div
className={`w-element c1hxqw1p caai4an c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha cfko4c5 cmcjy5s c1k9913m c16agd5o c1kuwk32 c4gouwl caxr30d caqe5xq c1c8uskx cmbbocb c1xn1ugd c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe c1cnynqc ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element cfko4c5 cmcjy5s ${"pricing-embed overflow-hidden"}`}>
<div
className={`w-element c1fs6dqh cruqiwr ctx8ibw c14jek5s c1591u52 cla4xsu c16v4zl cb9ahd3 cnphsm6 c1noyra5 c9fwhrd c1c2kv0c cv5u0wn c9sdurq celfadz cogx7qt cs6j0y1 c1cuw1q6 c1f1jjg6 c99xr99 cj5gfwl ccfm18d cn11m3v ${"pricing-header"}`}>
<h2
className={`w-element c1noxpoj c18ghmj7 c1b7j5ya cn9ibz0 cnsje4e c18m5w71 c1szfbvc ${"text-color-brand heading-style-h3"}`}>
{"Powerful CI/CD Features for Developers"}
</h2>
<div
className={`w-element c1qvc3d3 ca7ovlo ${"spacer-24px"}`} />
<div
className={`w-element`}>
{"Get Started with a Free Trial and Unlock Powerful CI/CD Features Today"}
</div>
<div
className={`w-element c1kuwk32 czdwwj2 ckfhcgl c66efv8 c1xdm8ja chc368u ${"spacer-56px"}`} />
</div>
<div
className={`w-element ${"pricing_main-wrap"}`}>
<div
className={`w-element cgmfdf6 c5c9eqz c1r7r9op cjge562 cklimrq c1jbh7w8 ctx8ibw c14jek5s cfko4c5 cmcjy5s c34eoac ${"pricing_tab-wrap"}`}>
<div
className={`w-element c5c9eqz c1r7r9op cjge562 cklimrq c1y39kfe c7xx1rg cdzvqh6 ccwjzqv ${"pricing_tabs"}`}>
<a
href={"#"}
className={`w-element c8d04es c7w54oj c1lmt071 c1rmfend c1g7apm c7xx1rg cejdlg0 cndrtrt cr1x9xh c1tlh46y cscfrjp c1o3r60t cfw1inn c11djwk1 ci007ia c1dftv06 ccwjzqv ckwuexc cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly c8g4rbm cu73m4q ${"pricing_tab is-1 is-active w-inline-block"}`}>
<div
className={`w-element ${"pricing_tab-label"}`}>
{"Monthly"}
</div>
</a>
<a
href={"#"}
className={`w-element c8d04es c7w54oj c1lmt071 c1nsb0xd c1g7apm c7xx1rg cejdlg0 cndrtrt cr1x9xh c1tlh46y cscfrjp c1o3r60t cfw1inn c11djwk1 ci007ia c1dftv06 ccwjzqv ckwuexc cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly cu73m4q ${"pricing_tab is-2 w-inline-block"}`}>
<div
className={`w-element ${"pricing_tab-label"}`}>
{"Yearly"}
</div>
</a>
<div
className={`w-element c1tbtc05 ca09yfv c1at8wuf crjhvpn c1cihr4e c7w54oj c1lmt071 c1mlnj0l c1o3r60t cfw1inn c11djwk1 ci007ia c1ilrpex ${"pricing_tab-bg"}`} />
</div>
</div>
<div
className={`w-element c1qvc3d3 ca7ovlo ${"spacer-24px"}`} />
<div
className={`w-element c1le6v90 c1e7vj8g c1viuxvl czrt1di c13qfgf c10rtf3d cyb4w8x c13z7luj chhzgn6 cx7q1ul ${"pricing_card-list is-1"}`}>
<div
className={`w-element celwvaf c1tj9838 c428y35 carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 c1kuwk32 cdzvqh6 ccwjzqv c1nyqhf9 c1upswbh c1kfa8zr c14fh8ap c1d9abwr cr8a0dl c2ykn3m crwxlzb c1japgq8 ccsv4y9 c1nhy5lw csb7dnv c1h47mh9 ctdilnr c1yteglu csuv9zg carcp78 cvl6olq cfs0u7e c1age6x5 c1nq5cvx c1mh8mtu c1auxpmy cmj23kl c1mushyk ${"pricing_card"}`}>
<div
className={`w-element c1f9hcp8 ck80r54 c5c9eqz c1r7r9op cjge562 cklimrq c1jbh7w8 c18wgxan c1wke3ch c1ohgokp c85zpzt c1chu7bs c1ungi45 co29il6 ${"pricing_card_tag is-hidden"}`}>
<div
className={`w-element`}>
{"Recommended"}
</div>
</div>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c43eehi c1gkpfk9 ${"heading-style-h4"}`}>
<strong
className={`w-element`}>
{"Learn with TurtleCI"}
</strong>
</h3>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<p
className={`w-element c1nsb0xd ${"pricing_card-text"}`}>
{"It's ok to be here and learn, that is what TurtleCI's whole spirit based upon. A place for you to learn & test the knowledge that you have to integrate a CI. Click on schedule a time to go to our dashboard and start learning!"}
</p>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe cq8p6mw cdzvqh6 c1ungi45 co29il6 cewblmz ${"pricing_card_price-wrap is-hidden"}`}>
<div
className={`w-element c1b7j5ya cn9ibz0 c4sybjy ${"pricing_card_price-number"}`}>
{"$"}
<strong
className={`w-element`}>
{"183"}
</strong>
</div>
<div
className={`w-element c1nsb0xd ${"text-color-secondary"}`}>
{"per month"}
</div>
</div>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<a
href={"https://console.turtleci.io/login"}
target={"_blank"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1kuwk32 c2w17zg cqm1fiw c1rkddb1 ckwuexc c1dftv06 cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly cu73m4q ${"button-wrap w-inline-block full-width"}`}>
<button
className={`w-element c13dsrcw c428y35 c1kuwk32 c14ikxcr c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 csemwku c1sg3im2 crld1xj ccfi1nz c1juhpdv cwek1tm ${"button-outline"}`}>
<div
className={`w-element`}>
{"Start Trial"}
</div>
</button>
</a>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<div
className={`w-element c61wgnw c1sfgv62 c1nsb0xd cbplqux c1qu1cb1 c1jkbzro cg2v6fb c13qfgf c10rtf3d ctina2s c1noyra5 c19bjlry cu3keg7 ${"pricing_card_value-list"}`}>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"This includes:"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Free"}
</div>
</div>
<div
id={"w-node-_56c4fbff-94e2-273a-2849-e78fae901331-45885f9c"}
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"600 build minutes"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Free MacOS instances included"}
</div>
</div>
</div>
</div>
<div
className={`w-element celwvaf c1tj9838 c1kyqj6s carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 c1kuwk32 cdzvqh6 ccwjzqv c1nyqhf9 c1upswbh c18fpj2c c14fh8ap c1d9abwr cr8a0dl c2ykn3m crwxlzb c1japgq8 ccsv4y9 c1nhy5lw csb7dnv c1h47mh9 ctdilnr c1yteglu csuv9zg carcp78 cvl6olq cfs0u7e c1age6x5 c1nq5cvx c1mh8mtu c1auxpmy cmj23kl c1mushyk ${"pricing_card is-recommended"}`}>
<div
className={`w-element c1f9hcp8 ck80r54 c5c9eqz c1r7r9op cjge562 cklimrq c1jbh7w8 c18wgxan c1wke3ch c1ohgokp c85zpzt c1chu7bs ${"pricing_card_tag"}`}>
<div
className={`w-element`}>
{"Recommended"}
</div>
</div>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c43eehi c1gkpfk9 ${"heading-style-h4"}`}>
<strong
className={`w-element`}>
{"Learn & Build with TurtleCI"}
</strong>
</h3>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<p
className={`w-element c1nsb0xd ${"pricing_card-text"}`}>
<span
className={`w-element`}>
{"Comes with a default of 1200 build minutes per month. Great if you are committed to start learning and building your application. You can increase the quantity for more build minutes."}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"‍"}
</span>
</p>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe cq8p6mw cdzvqh6 cewblmz ${"pricing_card_price-wrap"}`}>
<div
className={`w-element c1b7j5ya cn9ibz0 c4sybjy ${"pricing_card_price-number"}`}>
{"$18.30"}
</div>
<div
className={`w-element c1nsb0xd ${"text-color-secondary"}`}>
{"per month"}
</div>
</div>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<a
href={"https://buy.stripe.com/5kAaFQduzd40dEY144"}
target={"_blank"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1kuwk32 c2w17zg cqm1fiw c1rkddb1 ckwuexc c1dftv06 cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly cu73m4q ${"button-wrap w-inline-block full-width"}`}>
<button
className={`w-element c13dsrcw c1tbtc05 c1kuwk32 ck80r54 c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c1m80p2u crld1xj ciwacd0 cwek1tm ${"button"}`}>
<div
className={`w-element`}>
{"Subscribe"}
</div>
</button>
</a>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<div
className={`w-element c61wgnw c1sfgv62 c1nsb0xd cbplqux c1qu1cb1 c1jkbzro cg2v6fb c13qfgf c10rtf3d ctina2s c1noyra5 c19bjlry cu3keg7 ${"pricing_card_value-list"}`}>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"This includes:"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"1200 build minutes"}
</div>
</div>
<div
id={"w-node-_5b9b38dd-7563-4c1f-1249-3c06a9817224-45885f9c"}
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Priority Queue"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Exclusive Instances"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Our Trust"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Our Help"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Our Souls"}
</div>
</div>
</div>
</div>
<div
className={`w-element celwvaf c1tj9838 c428y35 carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 c1kuwk32 cdzvqh6 ccwjzqv c1nyqhf9 c1upswbh c1kfa8zr c14fh8ap c1d9abwr cr8a0dl c2ykn3m crwxlzb c1japgq8 ccsv4y9 c1nhy5lw csb7dnv c1h47mh9 ctdilnr c1yteglu csuv9zg carcp78 cvl6olq cfs0u7e c1age6x5 c1nq5cvx c1mh8mtu c1auxpmy cmj23kl c1mushyk ${"pricing_card"}`}>
<div
className={`w-element c1f9hcp8 ck80r54 c5c9eqz c1r7r9op cjge562 cklimrq c1jbh7w8 c18wgxan c1wke3ch c1ohgokp c85zpzt c1chu7bs c1ungi45 co29il6 ${"pricing_card_tag is-hidden"}`}>
<div
className={`w-element`}>
{"Recommended"}
</div>
</div>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c43eehi c1gkpfk9 ${"heading-style-h4"}`}>
<strong
className={`w-element`}>
{"Build & Scale with TurtleCI"}
</strong>
</h3>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<p
className={`w-element c1nsb0xd ${"pricing_card-text"}`}>
<span
className={`w-element`}>
{"Comes with a default of 12000 build minutes per month. Great if you are committed to scale your development pipelines."}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"‍"}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"‍"}
</span>
</p>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe cq8p6mw cdzvqh6 cewblmz ${"pricing_card_price-wrap"}`}>
<div
className={`w-element c1b7j5ya cn9ibz0 c4sybjy ${"pricing_card_price-number"}`}>
{"$"}
<strong
className={`w-element`}>
{"183"}
</strong>
</div>
<div
className={`w-element c1nsb0xd ${"text-color-secondary"}`}>
{"per month"}
</div>
</div>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<a
href={"https://buy.stripe.com/fZe4hs9ej2pm6cwcMO"}
target={"_blank"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1kuwk32 c2w17zg cqm1fiw c1rkddb1 ckwuexc c1dftv06 cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly cu73m4q ${"button-wrap w-inline-block full-width"}`}>
<button
className={`w-element c13dsrcw c428y35 c1kuwk32 c14ikxcr c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 csemwku c1sg3im2 crld1xj ccfi1nz c1juhpdv cwek1tm ${"button-outline"}`}>
<div
className={`w-element`}>
{"Subscribe"}
</div>
</button>
</a>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<div
className={`w-element c61wgnw c1sfgv62 c1nsb0xd cbplqux c1qu1cb1 c1jkbzro cg2v6fb c13qfgf c10rtf3d ctina2s c1noyra5 c19bjlry cu3keg7 ${"pricing_card_value-list"}`}>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"This includes:"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"12000 build minutes"}
</div>
</div>
<div
id={"w-node-_52b60110-ec71-cf77-6efe-8186f1e2cd51-45885f9c"}
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Priority Queue"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Exclusive Instances"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Large volume discount"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Our Trust"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Our Help"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Our Souls"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Chances to Talk with Master Turtle"}
</div>
</div>
</div>
</div>
</div>
<div
className={`w-element c1le6v90 c1e7vj8g c1viuxvl czrt1di c13qfgf cmh603w cyb4w8x c13z7luj chhzgn6 cx7q1ul ${"pricing_card-list is-2"}`}>
<div
className={`w-element celwvaf c1tj9838 c428y35 carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 c1kuwk32 cdzvqh6 ccwjzqv c1nyqhf9 c1upswbh c1kfa8zr c14fh8ap c1d9abwr cr8a0dl c2ykn3m crwxlzb c1japgq8 ccsv4y9 c1nhy5lw csb7dnv c1h47mh9 ctdilnr c1yteglu csuv9zg carcp78 cvl6olq cfs0u7e c1age6x5 c1nq5cvx c1mh8mtu c1auxpmy cmj23kl c1mushyk ${"pricing_card"}`}>
<div
className={`w-element c1f9hcp8 ck80r54 c5c9eqz c1r7r9op cjge562 cklimrq c1jbh7w8 c18wgxan c1wke3ch c1ohgokp c85zpzt c1chu7bs c1ungi45 co29il6 ${"pricing_card_tag is-hidden"}`}>
<div
className={`w-element`}>
{"Recommended"}
</div>
</div>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c43eehi c1gkpfk9 ${"heading-style-h4"}`}>
<strong
className={`w-element`}>
{"Learn with TurtleCI"}
</strong>
</h3>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<p
className={`w-element c1nsb0xd ${"pricing_card-text"}`}>
{"It's ok to be here and learn, that is what TurtleCI's whole spirit based upon. A place for you to learn & test the knowledge that you have to integrate a CI. Click on schedule a time to go to our dashboard and start learning!"}
</p>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe cq8p6mw cdzvqh6 c1ungi45 co29il6 cewblmz ${"pricing_card_price-wrap is-hidden"}`}>
<div
className={`w-element c1b7j5ya cn9ibz0 c4sybjy ${"pricing_card_price-number"}`}>
{"$"}
<strong
className={`w-element`}>
{"183"}
</strong>
</div>
<div
className={`w-element c1nsb0xd ${"text-color-secondary"}`}>
{"per month"}
</div>
</div>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<a
href={"https://console.turtleci.io/auth"}
target={"_blank"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1kuwk32 c2w17zg cqm1fiw c1rkddb1 ckwuexc c1dftv06 cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly cu73m4q ${"button-wrap w-inline-block full-width"}`}>
<button
className={`w-element c13dsrcw c428y35 c1kuwk32 c14ikxcr c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 csemwku c1sg3im2 crld1xj ccfi1nz c1juhpdv cwek1tm ${"button-outline"}`}>
<div
className={`w-element`}>
{"Start Trial"}
</div>
</button>
</a>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<div
className={`w-element c61wgnw c1sfgv62 c1nsb0xd cbplqux c1qu1cb1 c1jkbzro cg2v6fb c13qfgf c10rtf3d ctina2s c1noyra5 c19bjlry cu3keg7 ${"pricing_card_value-list"}`}>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"This includes:"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Free"}
</div>
</div>
<div
id={"w-node-ef8419f4-b8b1-ee7a-e0f7-d5b38908f1e0-45885f9c"}
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"600 build minutes"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Free MacOS instances included"}
</div>
</div>
</div>
</div>
<div
className={`w-element celwvaf c1tj9838 c1kyqj6s carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 c1kuwk32 cdzvqh6 ccwjzqv c1nyqhf9 c1upswbh c18fpj2c c14fh8ap c1d9abwr cr8a0dl c2ykn3m crwxlzb c1japgq8 ccsv4y9 c1nhy5lw csb7dnv c1h47mh9 ctdilnr c1yteglu csuv9zg carcp78 cvl6olq cfs0u7e c1age6x5 c1nq5cvx c1mh8mtu c1auxpmy cmj23kl c1mushyk ${"pricing_card is-recommended"}`}>
<div
className={`w-element c1f9hcp8 ck80r54 c5c9eqz c1r7r9op cjge562 cklimrq c1jbh7w8 c18wgxan c1wke3ch c1ohgokp c85zpzt c1chu7bs ${"pricing_card_tag"}`}>
<div
className={`w-element`}>
{"Recommended"}
</div>
</div>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c43eehi c1gkpfk9 ${"heading-style-h4"}`}>
<strong
className={`w-element`}>
{"Learn & Build with TurtleCI"}
</strong>
</h3>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<p
className={`w-element c1nsb0xd ${"pricing_card-text"}`}>
<span
className={`w-element`}>
{"Comes with a default of 1200 build minutes per month. Great if you are committed to start learning and building your application. You can increase the quantity for more build minutes."}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"‍"}
</span>
</p>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe cq8p6mw cdzvqh6 cewblmz ${"pricing_card_price-wrap"}`}>
<div
className={`w-element c1b7j5ya cn9ibz0 c4sybjy ${"pricing_card_price-number"}`}>
{"$201.30"}
</div>
<div
className={`w-element c1nsb0xd ${"text-color-secondary"}`}>
{"per year"}
</div>
</div>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<a
href={"https://buy.stripe.com/14k6pAcqv7JGfN6289"}
target={"_blank"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1kuwk32 c2w17zg cqm1fiw c1rkddb1 ckwuexc c1dftv06 cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly cu73m4q ${"button-wrap w-inline-block full-width"}`}>
<button
className={`w-element c13dsrcw c1tbtc05 c1kuwk32 ck80r54 c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c1m80p2u crld1xj ciwacd0 cwek1tm ${"button"}`}>
<div
className={`w-element`}>
{"Subscribe"}
</div>
</button>
</a>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<div
className={`w-element c61wgnw c1sfgv62 c1nsb0xd cbplqux c1qu1cb1 c1jkbzro cg2v6fb c13qfgf c10rtf3d ctina2s c1noyra5 c19bjlry cu3keg7 ${"pricing_card_value-list"}`}>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"This includes:"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"1200 build minutes"}
</div>
</div>
<div
id={"w-node-ef8419f4-b8b1-ee7a-e0f7-d5b38908f16e-45885f9c"}
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Priority Queue"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Exclusive Instances"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Our Trust"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Our Help"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Our Souls"}
</div>
</div>
</div>
</div>
<div
className={`w-element celwvaf c1tj9838 c428y35 carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 c1kuwk32 cdzvqh6 ccwjzqv c1nyqhf9 c1upswbh c1kfa8zr c14fh8ap c1d9abwr cr8a0dl c2ykn3m crwxlzb c1japgq8 ccsv4y9 c1nhy5lw csb7dnv c1h47mh9 ctdilnr c1yteglu csuv9zg carcp78 cvl6olq cfs0u7e c1age6x5 c1nq5cvx c1mh8mtu c1auxpmy cmj23kl c1mushyk ${"pricing_card"}`}>
<div
className={`w-element c1f9hcp8 ck80r54 c5c9eqz c1r7r9op cjge562 cklimrq c1jbh7w8 c18wgxan c1wke3ch c1ohgokp c85zpzt c1chu7bs c1ungi45 co29il6 ${"pricing_card_tag is-hidden"}`}>
<div
className={`w-element`}>
{"Recommended"}
</div>
</div>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c43eehi c1gkpfk9 ${"heading-style-h4"}`}>
<strong
className={`w-element`}>
{"Build & Scale with TurtleCI"}
</strong>
</h3>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<p
className={`w-element c1nsb0xd ${"pricing_card-text"}`}>
<span
className={`w-element`}>
{"Comes with a default of 12000 build minutes per month. Great if you are committed to scale your development pipelines."}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"‍"}
</span>
<br
className={`w-element`} />
<br
className={`w-element`} />
</p>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe cq8p6mw cdzvqh6 cewblmz ${"pricing_card_price-wrap"}`}>
<div
className={`w-element c1b7j5ya cn9ibz0 c4sybjy ${"pricing_card_price-number"}`}>
{"$2,013"}
</div>
<div
className={`w-element c1nsb0xd ${"text-color-secondary"}`}>
{"per year"}
</div>
</div>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<a
href={"https://buy.stripe.com/14kdS21LR2pm6cw5kn"}
target={"_blank"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1kuwk32 c2w17zg cqm1fiw c1rkddb1 ckwuexc c1dftv06 cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly cu73m4q ${"button-wrap w-inline-block full-width"}`}>
<button
className={`w-element c13dsrcw c428y35 c1kuwk32 c14ikxcr c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 csemwku c1sg3im2 crld1xj ccfi1nz c1juhpdv cwek1tm ${"button-outline"}`}>
<div
className={`w-element`}>
{"Subscribe"}
</div>
</button>
</a>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<div
className={`w-element c61wgnw c1sfgv62 c1nsb0xd cbplqux c1qu1cb1 c1jkbzro cg2v6fb c13qfgf c10rtf3d ctina2s c1noyra5 c19bjlry cu3keg7 ${"pricing_card_value-list"}`}>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"This includes:"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"12000 build minutes"}
</div>
</div>
<div
id={"w-node-ef8419f4-b8b1-ee7a-e0f7-d5b38908f1a3-45885f9c"}
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Priority Queue"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Exclusive Instances"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Large volume discount"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Our Trust"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Our Help"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Our Souls"}
</div>
</div>
<div
className={`w-element c13dsrcw cvv99b2 c1y39kfe c7xx1rg cdzvqh6 ${"pricing_card_value"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c14ikxcr cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"pricing_card_value-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M10.6 16.6L17.65 9.55L16.25 8.15L10.6 13.8L7.75 10.95L6.35 12.35L10.6 16.6ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1tpxml8 ${"pricing_card_value-text"}`}>
{"Chances to Talk with Master Turtle"}
</div>
</div>
</div>
</div>
</div>
</div>
<div
className={`w-element cmh603w c1f9ovza c74clpy c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"hide w-embed w-script"}`}>
<HtmlEmbed
clientOnly={true}
code={"<script>\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Select all the tab elements\n  const tabs = document.querySelectorAll('.pricing_tab');\n  const tabBg = document.querySelector('.pricing_tab-bg'); // Select the background element\n  const pricingLists = document.querySelectorAll('.pricing_card-list'); // Select all pricing card lists\n  // Function to handle tab click\n  tabs.forEach(tab => {\n    tab.addEventListener('click', () => {\n      // Remove the 'is-active' class from all tabs\n      tabs.forEach(t => t.classList.remove('is-active'));\n      // Add the 'is-active' class to the clicked tab\n      if (!tab.classList.contains('is-active')) {\n        tab.classList.add('is-active');\n      }\n      // Move the background based on the selected tab\n      if (tab.classList.contains('is-1')) {\n        tabBg.style.transform = 'translateX(0em)';\n      } else if (tab.classList.contains('is-2')) {\n        tabBg.style.transform = 'translateX(8em)';\n      }\n      // Show and hide pricing card lists based on the selected tab\n      pricingLists.forEach(list => {\n        if (tab.classList.contains('is-1') && list.classList.contains('is-1')) {\n          list.style.display = 'grid';\n          // Play GSAP animation for the pricing cards\n          gsap.fromTo(\n            list.querySelectorAll('.pricing_card'),\n            { opacity: 0, yPercent: 10 },\n            { opacity: 1, yPercent: 0, stagger: 0.2, ease: \"power1.in\", duration: 0.5 }\n          );\n        } else if (tab.classList.contains('is-2') && list.classList.contains('is-2')) {\n          list.style.display = 'grid';\n          // Play GSAP animation for the pricing cards\n          gsap.fromTo(\n            list.querySelectorAll('.pricing_card'),\n            { opacity: 0, yPercent: 10 },\n            { opacity: 1, yPercent: 0, stagger: 0.2, ease: \"power1.in\", duration: 0.5 }\n          );\n        } else {\n          list.style.display = 'none';\n        }\n      });\n    });\n  });\n});\n</script>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element cmh603w c1f9ovza c74clpy c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"hide w-embed"}`} />
</div>
</div>
</div>
</section>
<section
className={`w-element c16sffq6 cwqsbw c1vtrtst ${"mastmulti-os-section"}`}>
<div
className={`w-element c1hxqw1p caai4an c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1d2jaa0 c1xfacko ${"padding-global is-hero"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha cfko4c5 cmcjy5s c1k9913m c16agd5o c1kuwk32 c4gouwl caxr30d caqe5xq c1c8uskx cmbbocb c1xn1ugd c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe c1cnynqc ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element cm8azr1 c176ublo c1viuxvl c9bgjuu c13qfgf c10rtf3d c146xu6l c168g7wn c1ml4qhu ${"codify-grid"}`}>
<section
id={"w-node-_7621a218-f4a1-1056-ffdd-ecebdc93fb73-45885f9c"}
className={`w-element ${"mastmulti-os-left-column"}`}>
<div
className={`w-element cbplqux c7xx1rg cdzvqh6 ${"rl_faq1_component"}`}>
<div
className={`w-element ${"rl_faq1_list"}`}>
<div
className={`w-element cbplqux c1y39kfe cp7hr9q ${"rl_faq1_accordion"}`}>
<div
data-w-id={"7621a218-f4a1-1056-ffdd-ecebdc93fb7e"}
className={`w-element c1h4ztf3 cvb1b3u cwwbqcf c13lcbtl c7xx1rg c1w2oi28 c137irjg cscfrjp ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c12z5fd8 c1i2qi3y cfxsg04 c1emwurg c7ngagw ${"rl_faq1_question"}`}>
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c43eehi c1gkpfk9 ${"heading-style-h4"}`}>
{"What is TurtleCI, and how is it different from other CI/CD platforms?"}
</h3>
<div
className={`w-element cn68m5r c1wz6rw7 ci9qf13 ${"rl_faq1_icon-wrapper"}`}>
<div
className={`w-element c1s9hj7p cufrovc c1miup9g cbplqux c1g7apm c7xx1rg cmh603w c1wz6rw7 c1vfu5j3 ci9qf13 ckhyoxg c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"rl_faq1_icon w-embed"}`}>
<svg
width={" 100%"}
height={" 100%"}
viewBox={"0 0 32 32"}
fill={"none"}
xmlns={"http://www.w3.org/2000/svg"}
className={`w-element`}>
<path
fillRule={"evenodd"}
clipRule={"evenodd"}
d={"M16.5303 20.884C16.2374 21.1769 15.7625 21.1769 15.4696 20.884L7.82315 13.2375C7.53025 12.9446 7.53025 12.4698 7.82315 12.1769L8.1767 11.8233C8.46959 11.5304 8.94447 11.5304 9.23736 11.8233L15.9999 18.5859L22.7625 11.8233C23.0554 11.5304 23.5303 11.5304 23.8231 11.8233L24.1767 12.1769C24.4696 12.4698 24.4696 12.9446 24.1767 13.2375L16.5303 20.884Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
</div>
</div>
<div
className={`w-element cfko4c5 cmcjy5s c1kuwk32 c1vd2j6y caejmnp ${"rl_faq1_answer"}`}>
<div
className={`w-element c1o28xnq c12lh4mn c1rv4wuu cze7299 ${"rl_faq1_answer-wrapper"}`}>
<p
className={`w-element`}>
{"TurtleCI is a cost-effective CI/CD platform designed to automate build, test, and deploy processes for both mobile and web applications. It offers features like integration flows as code (Codify), multi-OS support (MacOS, Linux), and multi-framework compatibility, all with transparent pricing and a focus on scalability."}
</p>
</div>
</div>
</div>
<div
className={`w-element cbplqux c1y39kfe cp7hr9q ${"rl_faq1_accordion"}`}>
<div
data-w-id={"7621a218-f4a1-1056-ffdd-ecebdc93fb88"}
className={`w-element c1h4ztf3 cvb1b3u cwwbqcf c13lcbtl c7xx1rg c1w2oi28 c137irjg cscfrjp ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c12z5fd8 c1i2qi3y cfxsg04 c1emwurg c7ngagw ${"rl_faq1_question"}`}>
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c43eehi c1gkpfk9 ${"heading-style-h4"}`}>
{"Who is TurtleCI designed for?"}
</h3>
<div
className={`w-element cn68m5r c1wz6rw7 ci9qf13 ${"rl_faq1_icon-wrapper"}`}>
<div
className={`w-element c1s9hj7p cufrovc c1miup9g cbplqux c1g7apm c7xx1rg cmh603w c1wz6rw7 c1vfu5j3 ci9qf13 ckhyoxg c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"rl_faq1_icon w-embed"}`}>
<svg
width={" 100%"}
height={" 100%"}
viewBox={"0 0 32 32"}
fill={"none"}
xmlns={"http://www.w3.org/2000/svg"}
className={`w-element`}>
<path
fillRule={"evenodd"}
clipRule={"evenodd"}
d={"M16.5303 20.884C16.2374 21.1769 15.7625 21.1769 15.4696 20.884L7.82315 13.2375C7.53025 12.9446 7.53025 12.4698 7.82315 12.1769L8.1767 11.8233C8.46959 11.5304 8.94447 11.5304 9.23736 11.8233L15.9999 18.5859L22.7625 11.8233C23.0554 11.5304 23.5303 11.5304 23.8231 11.8233L24.1767 12.1769C24.4696 12.4698 24.4696 12.9446 24.1767 13.2375L16.5303 20.884Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
</div>
</div>
<div
className={`w-element cfko4c5 cmcjy5s c1kuwk32 c1vd2j6y caejmnp ${"rl_faq1_answer"}`}>
<div
className={`w-element c1o28xnq c12lh4mn c1rv4wuu cze7299 ${"rl_faq1_answer-wrapper"}`}>
<p
className={`w-element`}>
{"TurtleCI is ideal for small to medium-sized teams, startups, and independent developers looking for a cost-effective, scalable CI/CD solution."}
</p>
</div>
</div>
</div>
<div
className={`w-element cbplqux c1y39kfe cp7hr9q ${"rl_faq1_accordion"}`}>
<div
data-w-id={"fc1cb55a-fa5d-075a-eee0-ba91aa562bdf"}
className={`w-element c1h4ztf3 cvb1b3u cwwbqcf c13lcbtl c7xx1rg c1w2oi28 c137irjg cscfrjp ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c12z5fd8 c1i2qi3y cfxsg04 c1emwurg c7ngagw ${"rl_faq1_question"}`}>
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c43eehi c1gkpfk9 ${"heading-style-h4"}`}>
{"What are the pricing plans for TurtleCI?"}
</h3>
<div
className={`w-element cn68m5r c1wz6rw7 ci9qf13 ${"rl_faq1_icon-wrapper"}`}>
<div
className={`w-element c1s9hj7p cufrovc c1miup9g cbplqux c1g7apm c7xx1rg cmh603w c1wz6rw7 c1vfu5j3 ci9qf13 ckhyoxg c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"rl_faq1_icon w-embed"}`}>
<svg
width={" 100%"}
height={" 100%"}
viewBox={"0 0 32 32"}
fill={"none"}
xmlns={"http://www.w3.org/2000/svg"}
className={`w-element`}>
<path
fillRule={"evenodd"}
clipRule={"evenodd"}
d={"M16.5303 20.884C16.2374 21.1769 15.7625 21.1769 15.4696 20.884L7.82315 13.2375C7.53025 12.9446 7.53025 12.4698 7.82315 12.1769L8.1767 11.8233C8.46959 11.5304 8.94447 11.5304 9.23736 11.8233L15.9999 18.5859L22.7625 11.8233C23.0554 11.5304 23.5303 11.5304 23.8231 11.8233L24.1767 12.1769C24.4696 12.4698 24.4696 12.9446 24.1767 13.2375L16.5303 20.884Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
</div>
</div>
<div
className={`w-element cfko4c5 cmcjy5s c1kuwk32 c1vd2j6y caejmnp ${"rl_faq1_answer"}`}>
<div
className={`w-element c1o28xnq c12lh4mn c1rv4wuu cze7299 ${"rl_faq1_answer-wrapper"}`}>
<p
className={`w-element`}>
<span
className={`w-element`}>
{"TurtleCI offers:"}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"- A Free Plan with 600 build minutes/month."}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"- A Learn & Build Plan for 1200 build minutes/month at 30 AUD/month."}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"- A Build & Scale Plan for 12,000 build minutes/month at 280 AUD/month."}
</span>
</p>
</div>
</div>
</div>
<div
className={`w-element cbplqux c1y39kfe cp7hr9q ${"rl_faq1_accordion"}`}>
<div
data-w-id={"3f61d394-cf76-1b3c-b338-799d6c99379f"}
className={`w-element c1h4ztf3 cvb1b3u cwwbqcf c13lcbtl c7xx1rg c1w2oi28 c137irjg cscfrjp ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c12z5fd8 c1i2qi3y cfxsg04 c1emwurg c7ngagw ${"rl_faq1_question"}`}>
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c43eehi c1gkpfk9 ${"heading-style-h4"}`}>
{"How do I set up my first project on TurtleCI?"}
</h3>
<div
className={`w-element cn68m5r c1wz6rw7 ci9qf13 ${"rl_faq1_icon-wrapper"}`}>
<div
className={`w-element c1s9hj7p cufrovc c1miup9g cbplqux c1g7apm c7xx1rg cmh603w c1wz6rw7 c1vfu5j3 ci9qf13 ckhyoxg c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"rl_faq1_icon w-embed"}`}>
<svg
width={" 100%"}
height={" 100%"}
viewBox={"0 0 32 32"}
fill={"none"}
xmlns={"http://www.w3.org/2000/svg"}
className={`w-element`}>
<path
fillRule={"evenodd"}
clipRule={"evenodd"}
d={"M16.5303 20.884C16.2374 21.1769 15.7625 21.1769 15.4696 20.884L7.82315 13.2375C7.53025 12.9446 7.53025 12.4698 7.82315 12.1769L8.1767 11.8233C8.46959 11.5304 8.94447 11.5304 9.23736 11.8233L15.9999 18.5859L22.7625 11.8233C23.0554 11.5304 23.5303 11.5304 23.8231 11.8233L24.1767 12.1769C24.4696 12.4698 24.4696 12.9446 24.1767 13.2375L16.5303 20.884Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
</div>
</div>
<div
className={`w-element cfko4c5 cmcjy5s c1kuwk32 c1vd2j6y caejmnp ${"rl_faq1_answer"}`}>
<div
className={`w-element c1o28xnq c12lh4mn c1rv4wuu cze7299 ${"rl_faq1_answer-wrapper"}`}>
<p
className={`w-element`}>
{"Setting up is easy! Sign up, connect your repository, configure your build pipeline, and start running builds."}
</p>
</div>
</div>
</div>
</div>
</div>
</section>
<div
className={`w-element ${"codify-right-column"}`}>
<div
className={`w-element c1fs6dqh c1kuwk32 c133g3f6 ${"rl_faq1_heading-wrapper"}`}>
<h2
className={`w-element c1noxpoj c18ghmj7 ct1fxvf c1b7j5ya cn9ibz0 cnsje4e c18m5w71 c1szfbvc ${"text-color-brand text-align-left heading-style-h3"}`}>
{"Frequently Asked Questions?"}
</h2>
</div>
</div>
</div>
<div
className={`w-element c1g7apm c7xx1rg c189gpym cdzvqh6 ${"button-center"}`}>
<a
href={"features-turtleci.html"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1jbh7w8 c2w17zg cqm1fiw c1rkddb1 ckwuexc c1dftv06 cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly cu73m4q ${"button-wrap w-inline-block"}`}>
<button
className={`w-element c13dsrcw c1tbtc05 c1kuwk32 ck80r54 c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c1m80p2u crld1xj ciwacd0 cwek1tm ${"button"}`}>
<div
className={`w-element`}>
{"Explore Our Services"}
</div>
<div
className={`w-element cmaf0s5 c1afds52 cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"button__ic w-embed"}`}>
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
</section>
<section
className={`w-element cwqsbw c1vtrtst ${"cta-section"}`}>
<div
className={`w-element c1hxqw1p caai4an c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha cfko4c5 cmcjy5s c1k9913m c16agd5o c1kuwk32 c4gouwl caxr30d caqe5xq c1c8uskx cmbbocb c1xn1ugd c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe c1cnynqc ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element c1sjoqyl carupg6 cazdpea c1g67dw5 c74orcy cwqsbw cndrtrt c1vtrtst c1tlh46y ccwjzqv c1nyqhf9 c1upswbh cqpg39m c16d75ht cdvu0n4 c19wmnr4 ${"cta_box-wrap background-color-dark"}`}>
<div
className={`w-element c8d04es c110uequ c4gouwl ck80r54 c1fs6dqh cbplqux c1qu1cb1 c1g7apm c7xx1rg ctx8ibw c14jek5s cdzvqh6 ccwjzqv c2ykn3m crwxlzb cb9ahd3 c1dem3yf c9fwhrd cbtr22e cq8fywn cs6j0y1 c1cuw1q6 cajtztt cq6d6kz ccfm18d cn11m3v c1ruwqfa c1u7ehrg ${"cta_w-bg_main_lg"}`}>
<div
className={`w-element c16v4zl c1i5hu5a cogx7qt cj5gfwl ${"cta_heading-wrap"}`}>
<h3
className={`w-element c15jj1ft cx3yy4n ${"cta-heading"}`}>
{"Experience the speed, scalability, and simplicity of TurtleCI with zero risk."}
</h3>
</div>
<div
className={`w-element c1qvc3d3 ca7ovlo ${"spacer-24px"}`} />
<div
className={`w-element c16v4zl c6mkfsn c3yb4wn crwxlzb c125ucm9 c1dem3yf cv5u0wn cogx7qt c1pbmtwn cq6d6kz cj5gfwl cl41q2c c1u7ehrg ${"cta_content-wrap"}`}>
<p
className={`w-element ck80r54 ${"text-color-alternate"}`}>
{"Start for Free Trial and build, test, and deploy with confidence."}
</p>
</div>
<div
className={`w-element c1qvc3d3 ca7ovlo ${"spacer-24px"}`} />
<a
aria-label={"Go to TurtleCI Console"}
href={"https://console.turtleci.io/login"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1jbh7w8 c2w17zg cqm1fiw c1rkddb1 ckwuexc c1dftv06 cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly cu73m4q ${"button-wrap w-inline-block"}`}>
<button
className={`w-element c13dsrcw cum4mnn ck80r54 c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1jbh7w8 c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn cdzvqh6 cow3ufv crld1xj ciwacd0 c1ap9ppu ${"button-tertiary"}`}>
<div
className={`w-element`}>
{"Start Free Trial"}
</div>
<div
className={`w-element cmaf0s5 c1afds52 cmh603w c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"button__ic w-embed"}`}>
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
className={`w-element ccgyw5d cwqsbw c1ie99sc cadn3oz ${"footer"}`}>
<div
className={`w-element c1hxqw1p caai4an c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha cfko4c5 cmcjy5s c1k9913m c16agd5o c1kuwk32 c4gouwl caxr30d caqe5xq c1c8uskx cmbbocb c1xn1ugd c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe c1cnynqc ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element c1i7ve6l c2q6o0k c1viuxvl c9bgjuu c13qfgf c10rtf3d c1g7apm c1s7gu6l ccwjzqv c1591u52 cla4xsu c3yb4wn crwxlzb c125ucm9 cnphsm6 cv5u0wn cu8axpx c114xu6n c1h3kawa chq3ky0 cfe1vus c8ps3s4 c1i3j2um clqhs5g cul534n ca9mwfu c1ou5bby c7xx1s3 c13baokj c17zx7pk c68hmk6 cese208 c13z7luj ck9ykc8 c12iq66h cx7q1ul ${"footer_grid footer-2"}`}>
<div
id={"w-node-d9852e9b-78da-4b05-14ca-46237e0756e5-7e0756e1"}
className={`w-element c1eeu7wv covda95 c1mjz48u c1ea4sxw c39dolp c1ngc8mk cpuhn16 c1ggozrk cb2dvav ccx8w9t c1ofs5db ${"footer_left-content footer-2"}`}>
<Image
width={70}
loading={"lazy"}
alt={"TurtleCI Main Logo"}
src={"/turtleci-import/images/TurtleCI-logo.png"}
className={`w-image c1mfc36h c1lmt071 ${"footer_logo"}`} />
<div
className={`w-element c1kuwk32 cejdlg0 ca7ovlo ${"spacer-8px"}`} />
<div
className={`w-element cvdimgi c6s7woo c1qpv6k ${"text-size-sm"}`}>
{"Cost-Effective CI/CD Platform for Devops"}
</div>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<div
className={`w-element c12lvo49 c8gnt76 covda95 c1mjz48u c1ea4sxw c1y39kfe c7xx1rg cdzvqh6 ${"social-links"}`}>
<a
aria-label={"Visit TurtleCI Facebook"}
href={"https://www.facebook.com/turtleci"}
className={`w-element c61wgnw c1sfgv62 c1y39kfe c7xx1rg c1dftv06 ckwuexc cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly ${"footer_social w-inline-block"}`}>
<div
className={`w-element c1a91cgv cdznpsm c1kkah6p cd66rhb ckq8af1 cmh603w c1qwrzhk cld605x c5uz77h c1qhug9n c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"footer_social-ic w-embed"}`}>
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
className={`w-element c61wgnw c1sfgv62 c1y39kfe c7xx1rg c1dftv06 ckwuexc cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly ${"footer_social w-inline-block"}`}>
<div
className={`w-element c1a91cgv cdznpsm c1kkah6p cd66rhb ckq8af1 cmh603w c1qwrzhk cld605x c5uz77h c1qhug9n c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"footer_social-ic w-embed"}`}>
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
className={`w-element c61wgnw c1sfgv62 c1y39kfe c7xx1rg c1dftv06 ckwuexc cwhjckb c1mhj3mw ch2lfjv c1u6rwg2 c1j84joi c6zflky cp8mt3t c1f2vexh c4s3jf c1tfz2nu c1isl1ly ${"footer_social w-inline-block"}`}>
<div
className={`w-element c1a91cgv cdznpsm c1kkah6p cd66rhb ckq8af1 cmh603w c1qwrzhk cld605x c5uz77h c1qhug9n c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1xn1ugd ${"footer_social-ic w-embed"}`}>
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
className={`w-element c1s0k8lp c1irosg5 cr0hif c1qu1cb1 c1viuxvl c1yqysa c13qfgf c1g7apm c7xx1rg c10rtf3d c7ql8jf cygo89w c2ykn3m crwxlzb cioexil c1oluv4f c18ir677 cyb4w8x c1yofgyr cxz3mpi c1ef4itk c1eu5nh c1luecoc c1frnw7z c1tv0fkb chhzgn6 c1k0gcvl c3oo163 c1bvp1x3 c1z0drro c9dacs1 ${"footer_center-block"}`}>
<div
className={`w-element cbplqux c1qu1cb1 cdzvqh6 ${"footer-link-wrapper"}`}>
<div
className={`w-element c20zflo cn9ibz0 c1ajwld3 c1iver4f c1wmi6tm ${"heading-style-h5"}`}>
{"Product"}
</div>
<div
className={`w-element c1kuwk32 cejdlg0 ca7ovlo ${"spacer-8px"}`} />
<a
href={"features-turtleci.html"}
className={`w-element`}>
{"Features"}
</a>
<div
className={`w-element c1kuwk32 cejdlg0 ca7ovlo ${"spacer-8px"}`} />
<a
href={"pricing-plan.html"}
aria-current={"page"}
className={`w-element ${"w--current"}`}>
{"Pricing"}
</a>
</div>
<div
className={`w-element cbplqux c1qu1cb1 cdzvqh6 ${"footer-link-wrapper"}`}>
<div
className={`w-element c20zflo cn9ibz0 c1ajwld3 c1iver4f c1wmi6tm ${"heading-style-h5"}`}>
{"Company"}
</div>
<div
className={`w-element c1kuwk32 cejdlg0 ca7ovlo ${"spacer-8px"}`} />
<a
href={"about-us.html"}
className={`w-element`}>
{"About Us"}
</a>
<div
className={`w-element c1kuwk32 cejdlg0 ca7ovlo ${"spacer-8px"}`} />
<a
href={"blogs.html"}
className={`w-element`}>
{"Blog"}
</a>
</div>
<div
className={`w-element cbplqux c1qu1cb1 cdzvqh6 ${"footer-link-wrapper"}`}>
<div
className={`w-element c20zflo cn9ibz0 c1ajwld3 c1iver4f c1wmi6tm ${"heading-style-h5"}`}>
{"Legal Terms"}
</div>
<div
className={`w-element c1kuwk32 cejdlg0 ca7ovlo ${"spacer-8px"}`} />
<a
href={"terms-of-service.html"}
className={`w-element`}>
{"Terms of Service"}
</a>
<div
className={`w-element c1kuwk32 cejdlg0 ca7ovlo ${"spacer-8px"}`} />
<a
href={"privacy-and-policy.html"}
className={`w-element`}>
{"Privacy Policy"}
</a>
</div>
<div
className={`w-element cbplqux c1qu1cb1 cdzvqh6 ${"footer-link-wrapper"}`}>
<div
className={`w-element c20zflo cn9ibz0 c1ajwld3 c1iver4f c1wmi6tm ${"heading-style-h5"}`}>
{"Support"}
</div>
<div
className={`w-element c1kuwk32 cejdlg0 ca7ovlo ${"spacer-8px"}`} />
<a
href={"documentation.html"}
className={`w-element`}>
{"Documentation"}
</a>
<div
className={`w-element c1kuwk32 cejdlg0 ca7ovlo ${"spacer-8px"}`} />
<a
href={"contact-us.html"}
className={`w-element`}>
{"Contact Us"}
</a>
</div>
</div>
</div>
<div
className={`w-element cwqsbw ca7ovlo ${"spacer-80px"}`} />
</div>
<div
className={`w-element c1g7apm c7xx1rg cdzvqh6 ${"footnote"}`}>
<p
className={`w-element c1nsb0xd c1egpnue ${"text-color-secondary caption-md"}`}>
{"@2024 TurtleCI. All Rights Reserved"}
</p>
</div>
</div>
</footer>
<div
className={`w-element c1m333il c1tp54gh cnkz51l cbdh0ku c19u1i0f ${"intercom-embed"}`}>
<div
className={`w-element c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cmh603w c1xn1ugd ${"w-embed w-script"}`}>
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
    