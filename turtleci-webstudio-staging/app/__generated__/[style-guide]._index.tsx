/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { HtmlEmbed as HtmlEmbed, Input as Input, Textarea as Textarea, Select as Select, Image as Image } from "@webstudio-is/sdk-components-react";


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
code={"<style>body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:antialiased;text-rendering:optimizeLegibility}*[tabindex]:focus-visible,input[type=\"file\"]:focus-visible{outline:0.125rem solid #4d65ff;outline-offset:0.125rem}@media (min-width:1441px){body{font-size:1rem}}.w-richtext>:not(div):first-child,.w-richtext>div:first-child>:first-child{margin-top:0!important}.w-richtext>:last-child,.w-richtext ol li:last-child,.w-richtext ul li:last-child{margin-bottom:0!important}@media screen and (max-width:991px){.pricing_list.column-amount-5 div{grid-column:span 1}.pricing_list.column-amount-5>div:nth-child(5){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.pricing_list.column-amount-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50% - 3.75em);margin-left:auto;margin-right:auto}}@media screen and (max-width:767px){.pricing_list.column-amount-3 div:nth-child(3){grid-column:span 1;max-width:100%}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 1;width:100%}}@media screen and (max-width:479px){.pricing_list.column-amount-5 div{grid-column:span 1;width;100%;}.pricing_list.column-amount-5 div:nth-child(5){grid-column:span 1;max-width:100%}}</style>"}
className={`w-html-embed`} />
<div
className={`w-element cm0u0jj c1nyqhf9 c1upswbh c14jek5s ctx8ibw ${"page-wrap"}`}>
<div
className={`w-element c1chl3ha c1m333il cds5ulr c1rfbdao cxsker3 caoid09 c14jek5s ctx8ibw cfko4c5 cmcjy5s ctbzh2u c16agd5o c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"global-styles w-embed"}`}>
<HtmlEmbed
code={"<style>body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:antialiased;text-rendering:optimizeLegibility}*[tabindex]:focus-visible,input[type=\"file\"]:focus-visible{outline:0.125rem solid #4d65ff;outline-offset:0.125rem}@media (min-width:1441px){body{font-size:1rem}}.w-richtext>:not(div):first-child,.w-richtext>div:first-child>:first-child{margin-top:0!important}.w-richtext>:last-child,.w-richtext ol li:last-child,.w-richtext ul li:last-child{margin-bottom:0!important}@media screen and (max-width:991px){.pricing_list.column-amount-5 div{grid-column:span 1}.pricing_list.column-amount-5>div:nth-child(5){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.pricing_list.column-amount-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50% - 3.75em);margin-left:auto;margin-right:auto}}@media screen and (max-width:767px){.pricing_list.column-amount-3 div:nth-child(3){grid-column:span 1;max-width:100%}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 1;width:100%}}@media screen and (max-width:479px){.pricing_list.column-amount-5 div{grid-column:span 1;width;100%;}.pricing_list.column-amount-5 div:nth-child(5){grid-column:span 1;max-width:100%}}</style>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element ${"fs-styleguide_component"}`}>
<header
className={`w-element c1f9hcp8 cue63w1 cnvuqy3 cw4hxr0 c1chl3ha cfko4c5 cmcjy5s c1ek6cds c16agd5o ${"fs-styleguide_header"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1xn1ugd ${"padding-global"}`}>
<div
className={`w-element c1kuwk32 c1n6bhaq c4gouwl ctx8ibw c14jek5s c1xn1ugd ${"container-lg"}`}>
<div
className={`w-element cq3v0d6 c1cmm6nn c1viuxvl cg2v6fb c13qfgf c7xx1rg cekxmt8 c10rtf3d c1cnynqc ${"fs-styleguide_header-block"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160795-0ef646ba"}
className={`w-element cue63w1 c3bspns c11warl2 ca09yfv c1at8wuf crjhvpn c1cihr4e c1lbtf55 cr860ff cezig9b caav141 c1lopt3j c1chu7bs c2w17zg cqm1fiw c1rkddb1 c2y6b7y c1tt49pc c1rwc4sm c1t335do c1cinhhj ${"fs-styleguide_hero-label"}`}>
{"JH Framework — Version 1.0"}
</div>
<h1
className={`w-element cha3p3 c1chl3ha cfko4c5 cmcjy5s c1k9913m c16agd5o cklrh9t cnghgtz ${"fs-styleguide_heading-header"}`}>
{"Style Guide"}
</h1>
<div
className={`w-element c1kuwk32 c3plzlj c15trozn ${"max-width-medium"}`}>
<p
className={`w-element c14pm6dm ${"text-size-md"}`}>
{"Modified and used for Journey Horizon projects, based on Finsweet's client first style guide system."}
</p>
</div>
</div>
</div>
</div>
</header>
<section
className={`w-element clchzch cbee7cb c1viuxvl cg2v6fb c13qfgf c10rtf3d ${"fs-styleguide_classes"}`}>
<section
className={`w-element c1jwyp7v cy4qr4q ${"fs-styleguide_structure"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1xn1ugd ${"padding-global"}`}>
<div
className={`w-element c1kuwk32 c1n6bhaq c4gouwl ctx8ibw c14jek5s c1xn1ugd ${"container-lg"}`}>
<div
className={`w-element c1maiddp cegtkqw c1viuxvl cg2v6fb c13qfgf c1s7gu6l cekxmt8 c10rtf3d ccfmkuq c168g7wn c1fh4n0e c1ml4qhu ${"fs-styleguide_section is-vertical"}`}>
<div
className={`w-element chr7ptk c1enenfh c1viuxvl cg2v6fb c13qfgf c1kuwk32 cxmkyul c1ajwld3 c10rtf3d c1ljx4pi cne7wk4 ctmhnid ${"fs-styleguide_section-header"}`}>
<h2
className={`w-element chnqs0s c1lukcgt c1plggll c13ips6o c8lc392 ${"fs-styleguide_heading-medium"}`}>
{"Structure Classes"}
</h2>
<p
className={`w-element c14pm6dm ${"text-size-md"}`}>
<span
className={`w-element`}>
{"Defined and flexible core structure we can use on all or most pages."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element cz6b4pt c16qu3ee c1viuxvl cg2v6fb c13qfgf c1kuwk32 c10rtf3d cu433tg cpkiywx ca5hslh c1gyjzp6 ${"fs-styleguide_1-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"page-wrapp"}
</div>
<div
className={`w-element cm0u0jj c1nyqhf9 c1upswbh c14jek5s ctx8ibw ${"page-wrap"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"main-wrap"}
</div>
<main
className={`w-element ${"main-wrap"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item is-stretch"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041607b4-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"container-sm"}
</div>
<div
className={`w-element c1kuwk32 cmw01bb ctx8ibw c14jek5s ${"container-sm"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item is-stretch"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041607b9-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"container-md"}
</div>
<div
className={`w-element c1kuwk32 cyn0wfw ctx8ibw c14jek5s ${"container-md"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item is-stretch"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041607be-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"container-lg"}
</div>
<div
className={`w-element c1kuwk32 c1n6bhaq c4gouwl ctx8ibw c14jek5s c1xn1ugd ${"container-lg"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item is-stretch"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041607c3-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"padding-global"}
</div>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1xn1ugd ${"padding-global"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element cwzi4dx c1723kff cr0hif c1viuxvl c1pmahw8 cbdnmzm c3mk8rr c1y39kfe c7xx1rg cdzvqh6 cbabh1c cghr5hk ${"fs-styleguide_row"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"button-group"}
</div>
</div>
<div
className={`w-element c61wgnw c1sfgv62 c4y6pxj cbpji3r c1g7apm c7xx1rg cdzvqh6 c2ykn3m crwxlzb c1ef4itk c1eu5nh c1bvp1x3 c1z0drro ${"button-group"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className={`w-element c1jwyp7v cy4qr4q ${"fs-styleguide_headings"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1xn1ugd ${"padding-global"}`}>
<div
className={`w-element c1kuwk32 c1n6bhaq c4gouwl ctx8ibw c14jek5s c1xn1ugd ${"container-lg"}`}>
<div
className={`w-element c75nwzb c11m0b1m c1viuxvl cg2v6fb c13qfgf c1s7gu6l cekxmt8 c10rtf3d ccfmkuq c168g7wn c1fh4n0e c1ml4qhu ${"fs-styleguide_section"}`}>
<div
className={`w-element chr7ptk c1enenfh c1viuxvl cg2v6fb c13qfgf c1kuwk32 cxmkyul c1ajwld3 c10rtf3d c1ljx4pi cne7wk4 ctmhnid ${"fs-styleguide_section-header"}`}>
<h2
className={`w-element chnqs0s c1lukcgt c1plggll c13ips6o c8lc392 ${"fs-styleguide_heading-medium"}`}>
{"Headings"}
</h2>
<p
className={`w-element c14pm6dm ${"text-size-md"}`}>
<span
className={`w-element`}>
{"HTML tags define default Heading styles. Use Heading classes when the typography style doesn't match the default HTML tag."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element cz6b4pt c16qu3ee c1viuxvl cg2v6fb c13qfgf c1kuwk32 c10rtf3d cu433tg cpkiywx ca5hslh c1gyjzp6 ${"fs-styleguide_1-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1tbtc05 cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label is-tag"}`}>
{"super-text"}
</div>
<h1
id={"w-node-_66648800-ce29-4660-afa4-92e1041607dd-0ef646ba"}
className={`w-element cha3p3 c8g4rbm c4sybjy cn7swv c1bo5e9h ${"super-text"}`}>
{"Sample text helps you understand how real text may look. Sample text is being used as a placeholder."}
</h1>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1tbtc05 cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label is-tag"}`}>
{"H1"}
</div>
<h1
className={`w-element`}>
{"Sample text helps you understand how real text may look. Sample text is being used as a placeholder."}
</h1>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"heading-style-h1"}
</div>
<h1
className={`w-element c1yvobt4 cn9ibz0 c45mrwh cez4jgv czdnhsw ${"heading-style-h1"}`}>
{"Sample text helps you understand how real text may look."}
</h1>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1tbtc05 cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label is-tag"}`}>
{"H2"}
</div>
<h2
className={`w-element`}>
{"Sample text is being used as a placeholder. Sample text helps you understand how real text may look."}
</h2>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"heading-style-h2"}
</div>
<h2
className={`w-element c1hg6r8l cn9ibz0 c1um4v3y cdu5ypz ciwyep9 ${"heading-style-h2"}`}>
{"Sample text is being used as a placeholder. Sample text helps you understand how real text may look."}
</h2>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1tbtc05 cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label is-tag"}`}>
{"H3"}
</div>
<h3
className={`w-element`}>
{"Sample text helps you understand how real text may look on your website. Sample text is being used as a placeholder for real text that is normally present."}
</h3>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"heading-style-h3"}
</div>
<h2
className={`w-element c1b7j5ya cn9ibz0 cnsje4e c18m5w71 c1szfbvc ${"heading-style-h3"}`}>
{"Sample text helps you understand how real text may look on your website. Sample text is being used as a placeholder for real text that is normally present."}
</h2>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1tbtc05 cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label is-tag"}`}>
{"H4"}
</div>
<h4
className={`w-element`}>
{"Sample text is being used as a placeholder. Sample text helps you understand how real text may look. Sample text is being used as a placeholder for real text that is normally present."}
</h4>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"heading-style-h4"}
</div>
<h2
className={`w-element cte2vf8 cn9ibz0 cnsje4e c43eehi c1gkpfk9 ${"heading-style-h4"}`}>
{"Sample text is being used as a placeholder. Sample text helps you understand how real text may look. Sample text is being used as a placeholder for real text that is normally present."}
</h2>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1tbtc05 cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label is-tag"}`}>
{"H5"}
</div>
<h5
className={`w-element`}>
{"Sample text is being used as a placeholder. Sample text helps you understand how real text may look. Sample text is being used as a placeholder for real text that is normally present. Sample text helps you understand how real text may look."}
</h5>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"heading-style-h5"}
</div>
<h2
className={`w-element c20zflo cn9ibz0 c1ajwld3 c1iver4f c1wmi6tm ${"heading-style-h5"}`}>
{"Sample text is being used as a placeholder. Sample text helps you understand how real text may look. Sample text is being used as a placeholder for real text that is normally present. Sample text helps you understand how real text may look."}
</h2>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className={`w-element c1jwyp7v cy4qr4q ${"fs-styleguide_other-tags"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1xn1ugd ${"padding-global"}`}>
<div
className={`w-element c1kuwk32 c1n6bhaq c4gouwl ctx8ibw c14jek5s c1xn1ugd ${"container-lg"}`}>
<div
className={`w-element c75nwzb c11m0b1m c1viuxvl cg2v6fb c13qfgf c1s7gu6l cekxmt8 c10rtf3d ccfmkuq c168g7wn c1fh4n0e c1ml4qhu ${"fs-styleguide_section"}`}>
<div
className={`w-element chr7ptk c1enenfh c1viuxvl cg2v6fb c13qfgf c1kuwk32 cxmkyul c1ajwld3 c10rtf3d c1ljx4pi cne7wk4 ctmhnid ${"fs-styleguide_section-header"}`}>
<h2
className={`w-element chnqs0s c1lukcgt c1plggll c13ips6o c8lc392 ${"fs-styleguide_heading-medium"}`}>
{"Other HTML Tags"}
</h2>
<p
className={`w-element c14pm6dm ${"text-size-md"}`}>
<span
className={`w-element`}>
{"HTML tags define default text styles."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element c1maiddp cegtkqw c1viuxvl c9bgjuu c13qfgf c1kuwk32 c10rtf3d cu433tg cpkiywx c168g7wn ca5hslh c1gyjzp6 c1ml4qhu ${"fs-styleguide_2-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1tbtc05 cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label is-tag"}`}>
{"All paragraphs"}
</div>
<p
className={`w-element`}>
<span
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present. Sample text helps you understand how real text may look on your website. Sample text is being used as a placeholder for real text."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1tbtc05 cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label is-tag"}`}>
{"All links"}
</div>
<a
href={"#"}
className={`w-element`}>
{"Hero CTA Link"}
</a>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1tbtc05 cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label is-tag"}`}>
{"All quotes"}
</div>
<blockquote
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present. Sample text helps you understand how real text may look on your website."}
</blockquote>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1tbtc05 cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label is-tag"}`}>
{"All Ordered Lists"}
</div>
<ol
role={"list"}
className={`w-element`}>
<li
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present."}
</li>
<li
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present."}
</li>
<li
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present."}
</li>
</ol>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1tbtc05 cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label is-tag"}`}>
{"All Unordered Lists"}
</div>
<ul
role={"list"}
className={`w-element`}>
<li
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present."}
</li>
<li
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present."}
</li>
<li
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present."}
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className={`w-element c1jwyp7v cy4qr4q ${"fs-styleguide_text-classes"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1xn1ugd ${"padding-global"}`}>
<div
className={`w-element c1kuwk32 c1n6bhaq c4gouwl ctx8ibw c14jek5s c1xn1ugd ${"container-lg"}`}>
<div
className={`w-element c75nwzb c11m0b1m c1viuxvl cg2v6fb c13qfgf c1s7gu6l cekxmt8 c10rtf3d ccfmkuq c168g7wn c1fh4n0e c1ml4qhu ${"fs-styleguide_section"}`}>
<div
className={`w-element chr7ptk c1enenfh c1viuxvl cg2v6fb c13qfgf c1kuwk32 cxmkyul c1ajwld3 c10rtf3d c1ljx4pi cne7wk4 ctmhnid ${"fs-styleguide_section-header"}`}>
<h2
className={`w-element chnqs0s c1lukcgt c1plggll c13ips6o c8lc392 ${"fs-styleguide_heading-medium"}`}>
{"Text Classes"}
</h2>
<p
className={`w-element c14pm6dm ${"text-size-md"}`}>
<span
className={`w-element`}>
{"Text classes when typography style doesn't match the default HTML tag."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element c1kuwk32 c196rp2y ccd92et ${"fs-styleguide_item-header"}`}>
<h3
className={`w-element c8g4rbm ${"text-weight-semibold"}`}>
{"Text Sizes"}
</h3>
</div>
<div
className={`w-element c1maiddp cegtkqw c1viuxvl czrt1di c13qfgf cp7hr9q c1kuwk32 c10rtf3d c168g7wn c1ml4qhu ${"fs-styleguide_3-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-size-lg"}
</div>
<p
className={`w-element c20zflo ${"text-size-lg"}`}>
<span
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-size-md"}
</div>
<p
className={`w-element c14pm6dm ${"text-size-md"}`}>
<span
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present on your website."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-size-sm"}
</div>
<p
className={`w-element cvdimgi c6s7woo c1qpv6k ${"text-size-sm"}`}>
<span
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present. Sample text helps you understand how real text may look on your website. "}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"caption-md"}
</div>
<p
className={`w-element c1egpnue ${"caption-md"}`}>
<span
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present on your website. Sample text helps you understand how real text may look on your website. "}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"caption-sm"}
</div>
<p
className={`w-element c1k3kcpb ${"caption-sm"}`}>
<span
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present on your website. Sample text helps you understand how real text may look on your website. "}
</span>
<br
className={`w-element`} />
</p>
</div>
</div>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element c1kuwk32 c196rp2y ccd92et ${"fs-styleguide_item-header"}`}>
<h3
className={`w-element c8g4rbm ${"text-weight-semibold"}`}>
{"Text Styles"}
</h3>
</div>
<div
className={`w-element c1maiddp cegtkqw c1viuxvl czrt1di c13qfgf cp7hr9q c1kuwk32 c10rtf3d c168g7wn c1ml4qhu ${"fs-styleguide_3-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-style-strikethrough"}
</div>
<p
className={`w-element c10fg1i4 cqm1fiw c1rkddb1 ${"text-style-strikethrough"}`}>
<span
className={`w-element`}>
{"text-style-strikethrough"}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-style-italic"}
</div>
<p
className={`w-element cticrez ${"text-style-italic"}`}>
<span
className={`w-element`}>
{"text-style-italic"}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-style-muted"}
</div>
<p
className={`w-element c193feeu ${"text-style-muted"}`}>
<span
className={`w-element`}>
{"text-style-muted"}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-style-allcaps"}
</div>
<p
className={`w-element c3bspns ${"text-style-allcaps"}`}>
<span
className={`w-element`}>
{"text-style-allcaps"}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-style-nowrap"}
</div>
<p
className={`w-element c16e2dia c1lv4vpp c1aeddnn c1ncyrh9 c1eiarb7 c15oy4xn ${"text-style-nowrap"}`}>
<span
className={`w-element`}>
{"text-style-nowrap"}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-style-link"}
</div>
<p
className={`w-element c1chu7bs cjxzswz cqm1fiw c1rkddb1 cscfrjp ck8x7n0 cfw1inn c11djwk1 ci007ia ct4bwso ${"text-style-link"}`}>
<span
className={`w-element`}>
{"text-style-link"}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-style-2lines"}
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041608a5-0ef646ba"}
className={`w-element c1tgy7p4 cdpprdk ca09yfv c1at8wuf crjhvpn c1cihr4e c1lbtf55 chrsm5x cezig9b c6mk67z c84694i ${"fs-styleguide_message"}`}>
{"This CSS style is not supported for Rich Texts on iOS."}
</div>
<p
id={"w-node-_66648800-ce29-4660-afa4-92e1041608a7-0ef646ba"}
className={`w-element c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o ${"text-style-2lines"}`}>
<span
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present. Sample text helps you understand how real text may look on your website. Sample text is being used as a placeholder for real text text-style-2lines"}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-style-3lines"}
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041608ad-0ef646ba"}
className={`w-element c1tgy7p4 cdpprdk ca09yfv c1at8wuf crjhvpn c1cihr4e c1lbtf55 chrsm5x cezig9b c6mk67z c84694i ${"fs-styleguide_message"}`}>
{"This CSS style is not supported for Rich Texts on iOS."}
</div>
<p
className={`w-element c1chl3ha cfko4c5 cmcjy5s c1ek6cds c16agd5o ${"text-style-3lines"}`}>
<span
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present. Sample text helps you understand how real text may look on your website. Sample text is being used as a placeholder for real text. Sample text is being used as a placeholder for real text that is normally present. Sample text helps you understand how real text may look on your website. Sample text is being used as a placeholder for real text."}
</span>
<br
className={`w-element`} />
</p>
</div>
</div>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element c1kuwk32 c196rp2y ccd92et ${"fs-styleguide_item-header"}`}>
<h3
className={`w-element c8g4rbm ${"text-weight-semibold"}`}>
{"Text Weights"}
</h3>
</div>
<div
className={`w-element c1maiddp cegtkqw c1viuxvl czrt1di c13qfgf cp7hr9q c1kuwk32 c10rtf3d c168g7wn c1ml4qhu ${"fs-styleguide_3-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-weight-xbold"}
</div>
<div
className={`w-element c1caml4c ${"text-weight-xbold"}`}>
{"text-weight-xbold"}
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-weight-bold"}
</div>
<div
className={`w-element cn9ibz0 ${"text-weight-bold"}`}>
{"text-weight-bold"}
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-weight-semibold"}
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041608c4-0ef646ba"}
className={`w-element c8g4rbm ${"text-weight-semibold"}`}>
{"text-weight-semibold"}
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-weight-medium"}
</div>
<div
className={`w-element c1chu7bs ${"text-weight-medium"}`}>
{"text-weight-medium"}
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-weight-normal"}
</div>
<div
className={`w-element cmt6d78 ${"text-weight-normal"}`}>
{"text-weight-normal"}
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-weight-light"}
</div>
<div
className={`w-element cjtmlqc ${"text-weight-light"}`}>
{"text-weight-light"}
</div>
</div>
</div>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element c1kuwk32 c196rp2y ccd92et ${"fs-styleguide_item-header"}`}>
<h3
className={`w-element c8g4rbm ${"text-weight-semibold"}`}>
{"Text Alignments"}
</h3>
</div>
<div
className={`w-element c1maiddp cegtkqw c1viuxvl czrt1di c13qfgf cp7hr9q c1kuwk32 c10rtf3d c168g7wn c1ml4qhu ${"fs-styleguide_3-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-align-left"}
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041608dd-0ef646ba"}
className={`w-element ct1fxvf ${"text-align-left"}`}>
{"text-align-left"}
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item is-stretch"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041608e0-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-align-center"}
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041608e2-0ef646ba"}
className={`w-element c1fs6dqh ${"text-align-center"}`}>
{"text-align-center"}
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item is-stretch"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041608e5-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-align-right"}
</div>
<div
className={`w-element c2ix4r5 ${"text-align-right"}`}>
{"text-align-right"}
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className={`w-element c1jwyp7v cy4qr4q ${"fs-styleguide_buttons"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1xn1ugd ${"padding-global"}`}>
<div
className={`w-element c1kuwk32 c1n6bhaq c4gouwl ctx8ibw c14jek5s c1xn1ugd ${"container-lg"}`}>
<div
className={`w-element c75nwzb c11m0b1m c1viuxvl cg2v6fb c13qfgf c1s7gu6l cekxmt8 c10rtf3d ccfmkuq c168g7wn c1fh4n0e c1ml4qhu ${"fs-styleguide_section"}`}>
<div
className={`w-element chr7ptk c1enenfh c1viuxvl cg2v6fb c13qfgf c1kuwk32 cxmkyul c1ajwld3 c10rtf3d c1ljx4pi cne7wk4 ctmhnid ${"fs-styleguide_section-header"}`}>
<h2
className={`w-element chnqs0s c1lukcgt c1plggll c13ips6o c8lc392 ${"fs-styleguide_heading-medium"}`}>
{"Buttons"}
</h2>
<p
className={`w-element c14pm6dm ${"text-size-md"}`}>
<span
className={`w-element`}>
{"Button combo class system."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element c1maiddp cegtkqw c1viuxvl czrt1di c13qfgf cp7hr9q c1kuwk32 c10rtf3d c168g7wn c1ml4qhu ${"fs-styleguide_3-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"button"}
</div>
<a
href={"#"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1jbh7w8 c2w17zg cqm1fiw c1rkddb1 ckwuexc c1dftv06 cu73m4q ${"button-wrap w-inline-block"}`}>
<button
className={`w-element c13dsrcw c1tbtc05 c1kuwk32 ck80r54 c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c1m80p2u crld1xj ciwacd0 cwek1tm ${"button"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"button__ic w-embed"}`}>
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
<div
className={`w-element`}>
{"Request a project"}
</div>
<div
className={`w-element cmaf0s5 c1afds52 c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"button__ic w-embed"}`}>
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
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"button-secondary"}
</div>
<a
href={"#"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1jbh7w8 c2w17zg cqm1fiw c1rkddb1 ckwuexc c1dftv06 cu73m4q ${"button-wrap w-inline-block"}`}>
<button
className={`w-element c13dsrcw c428y35 c1tpxml8 c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1jbh7w8 c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn cdzvqh6 csemwku crld1xj ccfi1nz c1juhpdv cwek1tm ${"button-secondary"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"button__ic w-embed"}`}>
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
<div
className={`w-element`}>
{"Request a project"}
</div>
<div
className={`w-element cmaf0s5 c1afds52 c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"button__ic w-embed"}`}>
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
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"button-outline"}
</div>
<a
href={"#"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1jbh7w8 c2w17zg cqm1fiw c1rkddb1 ckwuexc c1dftv06 cu73m4q ${"button-wrap w-inline-block"}`}>
<button
className={`w-element c13dsrcw c428y35 c1kuwk32 c14ikxcr c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 csemwku c1sg3im2 crld1xj ccfi1nz c1juhpdv cwek1tm ${"button-outline"}`}>
<div
className={`w-element cmaf0s5 c1afds52 c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"button__ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
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
<div
className={`w-element`}>
{"Request a project"}
</div>
<div
className={`w-element cmaf0s5 c1afds52 c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"button__ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"currentWidth"}
height={"currentHeight"}
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
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"button-tertiary"}
</div>
<a
href={"#"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1jbh7w8 c2w17zg cqm1fiw c1rkddb1 ckwuexc c1dftv06 cu73m4q ${"button-wrap w-inline-block"}`}>
<button
className={`w-element c13dsrcw cum4mnn ck80r54 c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1jbh7w8 c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn cdzvqh6 cow3ufv crld1xj ciwacd0 c1ap9ppu ${"button-tertiary"}`}>
<div
className={`w-element`}>
{"Request a project"}
</div>
<div
className={`w-element cmaf0s5 c1afds52 c1chl3ha cfko4c5 cmcjy5s ctbzh2u c16agd5o c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"button__ic w-embed"}`}>
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
</div>
</section>
<section
className={`w-element c1jwyp7v cy4qr4q ${"fs-styleguide_colors"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1xn1ugd ${"padding-global"}`}>
<div
className={`w-element c1kuwk32 c1n6bhaq c4gouwl ctx8ibw c14jek5s c1xn1ugd ${"container-lg"}`}>
<div
className={`w-element c75nwzb c11m0b1m c1viuxvl cg2v6fb c13qfgf c1s7gu6l cekxmt8 c10rtf3d ccfmkuq c168g7wn c1fh4n0e c1ml4qhu ${"fs-styleguide_section"}`}>
<div
className={`w-element chr7ptk c1enenfh c1viuxvl cg2v6fb c13qfgf c1kuwk32 cxmkyul c1ajwld3 c10rtf3d c1ljx4pi cne7wk4 ctmhnid ${"fs-styleguide_section-header"}`}>
<h2
className={`w-element chnqs0s c1lukcgt c1plggll c13ips6o c8lc392 ${"fs-styleguide_heading-medium"}`}>
{"Colors"}
</h2>
<p
className={`w-element c14pm6dm ${"text-size-md"}`}>
<span
className={`w-element`}>
{"Manage recurring text and background colors."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element c1kuwk32 c196rp2y ccd92et ${"fs-styleguide_item-header"}`}>
<h3
className={`w-element c8g4rbm ${"text-weight-semibold"}`}>
{"Text Colors"}
</h3>
</div>
<div
className={`w-element c1maiddp cegtkqw c1viuxvl czrt1di c13qfgf cp7hr9q c1kuwk32 c10rtf3d c168g7wn c1ml4qhu ${"fs-styleguide_3-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-color-primary"}
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e10416093c-0ef646ba"}
className={`w-element c1tpxml8 ${"text-color-primary"}`}>
{"text-color-primary"}
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-color-secondary"}
</div>
<div
className={`w-element c1nsb0xd ${"text-color-secondary"}`}>
{"text-color-secondary"}
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-color-brand"}
</div>
<div
id={"w-node-f5fc250e-34b1-c8d9-acf6-d8ea06d4dc9d-0ef646ba"}
className={`w-element c1noxpoj c18ghmj7 ${"text-color-brand"}`}>
{"text-color-brand"}
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-color-alternate"}
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160946-0ef646ba"}
className={`w-element c1sjoqyl ${"background-color-dark"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160947-0ef646ba"}
className={`w-element ck80r54 ${"text-color-alternate"}`}>
{"text-color-alternate"}
</div>
</div>
</div>
</div>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element c1kuwk32 c196rp2y ccd92et ${"fs-styleguide_item-header"}`}>
<h3
className={`w-element c8g4rbm ${"text-weight-semibold"}`}>
{"Background Colors"}
</h3>
</div>
<div
className={`w-element c1maiddp cegtkqw c1viuxvl czrt1di c13qfgf cp7hr9q c1kuwk32 c10rtf3d c168g7wn c1ml4qhu ${"fs-styleguide_3-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"background-color-primary"}
</div>
<div
className={`w-element cbplqux c1g7apm cp7hr9q c1kuwk32 cdzvqh6 ca8rynm ${"fs-styleguide_background"}`}>
<div
className={`w-element ck80r54 c1fgdw21 ${"background-color-primary"}`}>
<div
className={`w-element ccx0tax c1wiw99h cw4zqut ${"fs-styleguide_background-space"}`} />
</div>
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"background-color-secondary"}
</div>
<div
className={`w-element cbplqux c1g7apm cp7hr9q c1kuwk32 cdzvqh6 ca8rynm ${"fs-styleguide_background"}`}>
<div
className={`w-element cgmfdf6 ${"background-color-secondary"}`}>
<div
className={`w-element ccx0tax c1wiw99h cw4zqut ${"fs-styleguide_background-space"}`} />
</div>
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"background-color-tertiary"}
</div>
<div
className={`w-element cbplqux c1g7apm cp7hr9q c1kuwk32 cdzvqh6 ca8rynm ${"fs-styleguide_background"}`}>
<div
className={`w-element ccgyw5d ${"background-color-tertiary"}`}>
<div
className={`w-element ccx0tax c1wiw99h cw4zqut ${"fs-styleguide_background-space"}`} />
</div>
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"background-color-brand"}
</div>
<div
className={`w-element cbplqux c1g7apm cp7hr9q c1kuwk32 cdzvqh6 ca8rynm ${"fs-styleguide_background"}`}>
<div
className={`w-element c1tbtc05 ${"background-color-brand"}`}>
<div
className={`w-element ccx0tax c1wiw99h cw4zqut ${"fs-styleguide_background-space"}`} />
</div>
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"background-color-dark"}
</div>
<div
className={`w-element cbplqux c1g7apm cp7hr9q c1kuwk32 cdzvqh6 ca8rynm ${"fs-styleguide_background"}`}>
<div
className={`w-element c1sjoqyl ${"background-color-dark"}`}>
<div
className={`w-element ccx0tax c1wiw99h cw4zqut ${"fs-styleguide_background-space"}`} />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className={`w-element c1jwyp7v cy4qr4q ${"fs-styleguide_max-width"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1xn1ugd ${"padding-global"}`}>
<div
className={`w-element c1kuwk32 c1n6bhaq c4gouwl ctx8ibw c14jek5s c1xn1ugd ${"container-lg"}`}>
<div
className={`w-element c1maiddp cegtkqw c1viuxvl cg2v6fb c13qfgf c1s7gu6l cekxmt8 c10rtf3d ccfmkuq c168g7wn c1fh4n0e c1ml4qhu ${"fs-styleguide_section is-vertical"}`}>
<div
className={`w-element chr7ptk c1enenfh c1viuxvl cg2v6fb c13qfgf c1kuwk32 cxmkyul c1ajwld3 c10rtf3d c1ljx4pi cne7wk4 ctmhnid ${"fs-styleguide_section-header"}`}>
<h2
className={`w-element chnqs0s c1lukcgt c1plggll c13ips6o c8lc392 ${"fs-styleguide_heading-medium"}`}>
{"Max widths"}
</h2>
<p
className={`w-element c14pm6dm ${"text-size-md"}`}>
<span
className={`w-element`}>
{"Use the max-width CSS property to contain inner content to a maximum width."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element cz6b4pt c16qu3ee c1viuxvl cg2v6fb c13qfgf c1kuwk32 c10rtf3d cu433tg cpkiywx ca5hslh c1gyjzp6 ${"fs-styleguide_1-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"max-width-full"}
</div>
<div
className={`w-element c1kuwk32 c1iel4hw c1qhvmyk c8cjjn4 ${"max-width-full"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"max-width-full-tablet"}
</div>
<main
className={`w-element c19bjlry c10f74nw cu3keg7 c19kcl71 ${"max-width-full-tablet"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"max-width-full-mobile-portrait"}
</div>
<main
className={`w-element c1ogibdx cm2lply ck7mm0g c431rxe ${"max-width-full-mobile-portrait"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"max-width-full-mobile-landscape"}
</div>
<main
className={`w-element c1817s9f caqe5xq cgyp09m cmbbocb ${"max-width-full-mobile-landscape"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"max-width-xxlarge"}
</div>
<main
className={`w-element c1kuwk32 cmbktot ${"max-width-xxlarge"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"max-width-xlarge"}
</div>
<main
className={`w-element c1kuwk32 cyn0wfw ${"max-width-xlarge"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"max-width-large"}
</div>
<main
className={`w-element c1kuwk32 cmw01bb ${"max-width-large"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"max-width-medium"}
</div>
<main
className={`w-element c1kuwk32 c3plzlj c15trozn ${"max-width-medium"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"max-width-small"}
</div>
<main
className={`w-element c1kuwk32 c1eeu7wv ${"max-width-small"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"max-width-xsmall"}
</div>
<main
className={`w-element c1kuwk32 c15gzflm ${"max-width-xsmall"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"max-width-xxsmall"}
</div>
<main
className={`w-element c1kuwk32 c1agj5vr ${"max-width-xxsmall"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className={`w-element c1jwyp7v cy4qr4q ${"fs-styleguide_flexbox"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1xn1ugd ${"padding-global"}`}>
<div
className={`w-element c1kuwk32 c1n6bhaq c4gouwl ctx8ibw c14jek5s c1xn1ugd ${"container-lg"}`}>
<div
className={`w-element c1maiddp cegtkqw c1viuxvl cg2v6fb c13qfgf c1s7gu6l cekxmt8 c10rtf3d ccfmkuq c168g7wn c1fh4n0e c1ml4qhu ${"fs-styleguide_section is-vertical"}`}>
<div
className={`w-element chr7ptk c1enenfh c1viuxvl cg2v6fb c13qfgf c1kuwk32 cxmkyul c1ajwld3 c10rtf3d c1ljx4pi cne7wk4 ctmhnid ${"fs-styleguide_section-header"}`}>
<h2
className={`w-element chnqs0s c1lukcgt c1plggll c13ips6o c8lc392 ${"fs-styleguide_heading-medium"}`}>
{"Flexbox"}
</h2>
<p
className={`w-element c14pm6dm ${"text-size-md"}`}>
<span
className={`w-element`}>
{"Use the different flexbox classes to wrap and arange content inside."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element cz6b4pt c16qu3ee c1viuxvl cg2v6fb c13qfgf c1kuwk32 c10rtf3d cu433tg cpkiywx ca5hslh c1gyjzp6 ${"fs-styleguide_1-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"flex-horizontal"}
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041609c9-0ef646ba"}
className={`w-element cdzvqh6 ${"flex-horizontal"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"flex-space-between"}
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041609cf-0ef646ba"}
className={`w-element c13lcbtl cdzvqh6 cu8axpx cese208 c11eop2k clqhs5g c12iq66h cf1fbqu ${"flex-space-between"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"flex-space-around"}
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041609d5-0ef646ba"}
className={`w-element c13fiixd cdzvqh6 ${"flex-space-around"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"flex-center"}
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041609db-0ef646ba"}
className={`w-element cbplqux c7xx1rg cdzvqh6 ${"flex-center"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"flex-vertical-left"}
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041609e1-0ef646ba"}
className={`w-element cbplqux c10je7ri cdzvqh6 ${"flex-vertical-left"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"flex-vertical-right"}
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041609e7-0ef646ba"}
className={`w-element cbplqux cq8p6mw cdzvqh6 ${"flex-vertical-right"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className={`w-element c1jwyp7v cy4qr4q ${"fs-styleguide_spacers"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1xn1ugd ${"padding-global"}`}>
<div
className={`w-element c1kuwk32 c1n6bhaq c4gouwl ctx8ibw c14jek5s c1xn1ugd ${"container-lg"}`}>
<div
className={`w-element c75nwzb c11m0b1m c1viuxvl cg2v6fb c13qfgf c1s7gu6l cekxmt8 c10rtf3d ccfmkuq c168g7wn c1fh4n0e c1ml4qhu ${"fs-styleguide_section"}`}>
<div
className={`w-element chr7ptk c1enenfh c1viuxvl cg2v6fb c13qfgf c1kuwk32 cxmkyul c1ajwld3 c10rtf3d c1ljx4pi cne7wk4 ctmhnid ${"fs-styleguide_section-header"}`}>
<h2
className={`w-element chnqs0s c1lukcgt c1plggll c13ips6o c8lc392 ${"fs-styleguide_heading-medium"}`}>
{"Spacers"}
</h2>
<p
className={`w-element c14pm6dm ${"text-size-md"}`}>
<span
className={`w-element`}>
{"Unified spacer system for the project."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element cz6b4pt c16qu3ee c1viuxvl cg2v6fb c13qfgf c1kuwk32 c10rtf3d cu433tg cpkiywx ca5hslh c1gyjzp6 ${"fs-styleguide_1-col"}`}>
<div
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041609f7-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-4px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
className={`w-element c1kuwk32 c18wgxan ${"spacer-4px"}`} />
</div>
</div>
<div
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e1041609fc-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-8px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
className={`w-element c1kuwk32 cejdlg0 ca7ovlo ${"spacer-8px"}`} />
</div>
</div>
<div
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a01-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-12px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
className={`w-element c1kuwk32 c1yzoccs ${"spacer-12px"}`} />
</div>
</div>
<div
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a06-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-16px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
</div>
</div>
<div
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a0b-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-20px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
className={`w-element c1kuwk32 c111x8wj c14jwuqv c1jnk1r1 cfc1ro8 cwhcubc ${"spacer-20px"}`} />
</div>
</div>
<div
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a10-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-24px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
className={`w-element c1qvc3d3 ca7ovlo ${"spacer-24px"}`} />
</div>
</div>
<div
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a15-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-32px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
</div>
</div>
<div
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a1a-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-40px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
className={`w-element c1kuwk32 c14fwb78 ca7ovlo cqyyj0l c1sgfhaw ${"spacer-40px"}`} />
</div>
</div>
<div
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a1f-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-48px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
className={`w-element c1kuwk32 c58vwce cgz2jcg c139r9rg c1toovlm c8o4rha ${"spacer-48px"}`} />
</div>
</div>
<div
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a24-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-56px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
className={`w-element c1kuwk32 czdwwj2 ckfhcgl c66efv8 c1xdm8ja chc368u ${"spacer-56px"}`} />
</div>
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a28-0ef646ba"}
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a29-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-64px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a2c-0ef646ba"}
className={`w-element c1kuwk32 c8dohr6 ca7ovlo ${"spacer-64px"}`} />
</div>
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a2d-0ef646ba"}
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a2e-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-80px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a31-0ef646ba"}
className={`w-element cwqsbw ca7ovlo ${"spacer-80px"}`} />
</div>
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a32-0ef646ba"}
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a33-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-96px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a36-0ef646ba"}
className={`w-element c1tb535j ${"spacer-96px"}`} />
</div>
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a37-0ef646ba"}
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a38-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-120px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a3b-0ef646ba"}
className={`w-element c1jwyp7v ${"spacer-120px"}`} />
</div>
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a3c-0ef646ba"}
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a3d-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-160px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a40-0ef646ba"}
className={`w-element ceqyts6 ${"spacer-160px"}`} />
</div>
</div>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a41-0ef646ba"}
className={`w-element c2onsk4 c1n2lta2 c1jkbzro cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd c10rtf3d ccwjzqv ${"fs-styleguide_spacing"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a42-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"spacer-240px"}
</div>
<div
className={`w-element cmvdd2c c1kuwk32 ccwjzqv c2ztgvm ${"fs-styleguide_spacer-box"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a45-0ef646ba"}
className={`w-element c1rr71sy ${"spacer-240px"}`} />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className={`w-element c1jwyp7v cy4qr4q ${"fs-styleguide_utility-classes"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1xn1ugd ${"padding-global"}`}>
<div
className={`w-element c1kuwk32 c1n6bhaq c4gouwl ctx8ibw c14jek5s c1xn1ugd ${"container-lg"}`}>
<div
className={`w-element c75nwzb c11m0b1m c1viuxvl cg2v6fb c13qfgf c1s7gu6l cekxmt8 c10rtf3d ccfmkuq c168g7wn c1fh4n0e c1ml4qhu ${"fs-styleguide_section"}`}>
<div
className={`w-element chr7ptk c1enenfh c1viuxvl cg2v6fb c13qfgf c1kuwk32 cxmkyul c1ajwld3 c10rtf3d c1ljx4pi cne7wk4 ctmhnid ${"fs-styleguide_section-header"}`}>
<h2
className={`w-element chnqs0s c1lukcgt c1plggll c13ips6o c8lc392 ${"fs-styleguide_heading-medium"}`}>
{"Useful utility systems"}
</h2>
<p
className={`w-element c14pm6dm ${"text-size-md"}`}>
<span
className={`w-element`}>
{"Utility classes we like to use in most of our projects to build faster."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element c1maiddp cegtkqw c1viuxvl c1yqysa c13qfgf c1kuwk32 c10rtf3d c168g7wn c1ml4qhu ${"fs-styleguide_4-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"hide"}
</div>
<div
className={`w-element cmh603w c1f9ovza c74clpy ${"hide"}`} />
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a56-0ef646ba"}
className={`w-element`}>
{"This element is hidden"}
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"hide-tablet"}
</div>
<main
className={`w-element c1f9ovza c74clpy ${"hide-tablet"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"show-tablet"}
</div>
<main
className={`w-element cmh603w ccsp7fv csld4j0 ${"show-tablet"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"hide-mobile-portrait"}
</div>
<main
className={`w-element c75fxaq c1ijzp3p ${"hide-mobile-portrait"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"show-mobile-portrait"}
</div>
<main
className={`w-element cmh603w cc3k908 c1rqlhiv ${"show-mobile-portrait"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"hide-mobile-landscape"}
</div>
<main
className={`w-element c1ftzn93 cvxeimn ${"hide-mobile-landscape"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"show-mobile-landscape"}
</div>
<main
className={`w-element cmh603w c1nw5o3x c1kan4ht ${"show-mobile-landscape"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"overflow-visible"}
</div>
<main
className={`w-element cd2mmkj ca9u31z ${"overflow-visible"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"overflow-hidden"}
</div>
<main
className={`w-element cfko4c5 cmcjy5s ${"overflow-hidden"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"overflow-auto"}
</div>
<main
className={`w-element c1scrlst c18fiswd ${"overflow-auto"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"overflow-auto-x"}
</div>
<main
className={`w-element c1scrlst ${"overflow-auto-x"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"overflow-auto-y"}
</div>
<main
className={`w-element c1scrlst ${"overflow-auto-y"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"overflow-scroll"}
</div>
<main
className={`w-element c1uadud5 c1yktdgk ${"overflow-scroll"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"pointer-events-auto"}
</div>
<main
className={`w-element c4lsin1 ${"pointer-events-auto"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"pointer-events-none"}
</div>
<main
id={"w-node-_66648800-ce29-4660-afa4-92e104160a83-0ef646ba"}
className={`w-element co29il6 ${"pointer-events-none"}`}>
<div
className={`w-element cgakeqw cmvdd2c cuumhrp cj8sc6i ccwjzqv c2ztgvm ${"fs-styleguide_empty-box"}`} />
</main>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"z-index-1"}
</div>
<main
className={`w-element c8d04es ccwjzqv ${"z-index-1"}`} />
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"z-index-2"}
</div>
<main
className={`w-element cpxrkxj ccwjzqv ${"z-index-2"}`} />
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className={`w-element ${"fs-styleguide_webflow-elements"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc c1xn1ugd ${"padding-global"}`}>
<div
className={`w-element c1kuwk32 c1n6bhaq c4gouwl ctx8ibw c14jek5s c1xn1ugd ${"container-lg"}`}>
<div
className={`w-element c75nwzb c11m0b1m c1viuxvl cg2v6fb c13qfgf c1s7gu6l cekxmt8 c10rtf3d ccfmkuq c168g7wn c1fh4n0e c1ml4qhu ${"fs-styleguide_section"}`}>
<div
className={`w-element chr7ptk c1enenfh c1viuxvl cg2v6fb c13qfgf c1kuwk32 cxmkyul c1ajwld3 c10rtf3d c1ljx4pi cne7wk4 ctmhnid ${"fs-styleguide_section-header"}`}>
<h2
className={`w-element chnqs0s c1lukcgt c1plggll c13ips6o c8lc392 ${"fs-styleguide_heading-medium"}`}>
{"Webflow elements"}
</h2>
<p
id={"w-node-_66648800-ce29-4660-afa4-92e104160a99-0ef646ba"}
className={`w-element c14pm6dm ${"text-size-md"}`}>
<span
className={`w-element`}>
{"Native Webflow elements with classes applied."}
</span>
<br
className={`w-element`} />
</p>
</div>
<div
className={`w-element cz6b4pt c16qu3ee cbplqux c1y39kfe c10je7ri c1kuwk32 cdzvqh6 ${"fs-styleguide_item-wrapper"}`}>
<div
className={`w-element cz6b4pt c16qu3ee c1viuxvl cg2v6fb c13qfgf c1kuwk32 c10rtf3d cu433tg cpkiywx ca5hslh c1gyjzp6 ${"fs-styleguide_1-col"}`}>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l c1lqh5qd cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item is-stretch"}`}>
<div
id={"w-node-_66648800-ce29-4660-afa4-92e104160a9f-0ef646ba"}
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"form_component"}
</div>
<p
className={`w-element c14pm6dm ${"text-size-md"}`}>
<span
className={`w-element`}>
{"Example of a form component using Folders"}
</span>
<br
className={`w-element`} />
</p>
<div
className={`w-element c1viq0dj c1v7lzh4 c1qx9vin cxedn37 ${"form_component w-form"}`}>
<form
id={"wf-form-Form"}
name={"wf-form-Form"}
data-name={"Form"}
method={"get"}
data-wf-page-id={"6757f377cc48557b0ef646ba"}
data-wf-element-id={"66648800-ce29-4660-afa4-92e104160aa5"}
className={`w-element ${"form_form"}`}>
<div
className={`w-element covda95 c1mjz48u c1ea4sxw c5nedoi ${"form_field-wrap"}`}>
<label
htmlFor={"First-Name"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"Text Input"}
</label>
<Input
maxLength={256}
name={"First-Name"}
data-name={"First Name"}
placeholder={"First Name"}
type={"text"}
id={"First-Name"}
className={`w-element cm4kqbl c1hk3iai c1fgdw21 c5c9eqz c1r7r9op cjge562 cklimrq cjps8te c71aqp4 c1xu9ni5 cye2xyr c13pgzpp cgz9fe1 cwfsyhm ck8x7n0 cfw1inn c11djwk1 ci007ia c1ro25gr c1kuwk32 c1i2dd9i c5fdr0g c1joexfe c1hi5fbc c5io6td c882zc0 cuvokq6 c1029fez c1e6md11 c1oi4tev c13ku895 c1ha0zq3 c1gpg3nf cogbpki c198in2q c1aw7qc6 cy35f9v cxkrb62 ${"form_input w-input"}`} />
</div>
<div
className={`w-element covda95 c1mjz48u c1ea4sxw c5nedoi ${"form_field-wrap"}`}>
<label
htmlFor={"Message"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"Text Area"}
</label>
<Textarea
id={"Message"}
name={"Message"}
maxLength={5000}
data-name={"Message"}
placeholder={"Message"}
className={`w-element c1e97ymn c1hk3iai c1fgdw21 c5c9eqz c1r7r9op cjge562 cklimrq cjps8te c71aqp4 c1xu9ni5 cye2xyr c13pgzpp cgz9fe1 cwfsyhm ck8x7n0 cfw1inn c11djwk1 ci007ia c1ro25gr c1kuwk32 c1i2dd9i c5fdr0g c1joexfe c1hi5fbc c5io6td c882zc0 cuvokq6 c1029fez c1e6md11 c1oi4tev c13ku895 c1ha0zq3 c1gpg3nf cogbpki c198in2q c1aw7qc6 cy35f9v cxkrb62 ${"form_input is-text-area w-input"}`} />
</div>
<div
className={`w-element covda95 c1mjz48u c1ea4sxw c5nedoi ${"form_field-wrap"}`}>
<label
htmlFor={"Select"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"Select field"}
</label>
<Select
id={"Select"}
name={"Select"}
data-name={"Select"}
className={`w-element cm4kqbl c1hk3iai cqi8r21 c5c9eqz c1r7r9op cjge562 cklimrq cjps8te ce9b4sv c1xu9ni5 c17jqo6w c13pgzpp cgz9fe1 cwfsyhm ck8x7n0 cfw1inn c11djwk1 ci007ia c1ro25gr c1kuwk32 c1i2dd9i c5fdr0g c1joexfe cajthak c2ye6xu c19ohx5n c1hi5fbc cn1m4mf c5io6td c882zc0 cuvokq6 c1029fez c1e6md11 c1oi4tev c13ku895 c1ha0zq3 c1gpg3nf cogbpki c198in2q c1aw7qc6 cy35f9v cxkrb62 c1iiet6j ${"form_input is-select-input w-select"}`}>
<option
value={""}
className={`w-element`}>
{"Select one..."}
</option>
<option
value={"First"}
className={`w-element`}>
{"First Choice"}
</option>
<option
value={"Second"}
className={`w-element`}>
{"Second Choice"}
</option>
<option
value={"Third"}
className={`w-element`}>
{"Third Choice"}
</option>
</Select>
</div>
<div
className={`w-element covda95 c1mjz48u c1ea4sxw c5nedoi ${"form_field-wrap"}`}>
<label
htmlFor={"email"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"Checkbox field"}
</label>
<label
className={`w-element c1nvquth c1g9d0aa cdzvqh6 cr0hif c7xx1rg c14iwcl4 c189uwjb c1tbqqby c93ul7a c1vro1vt c19adc7b c5bq8c7 c1kwepi8 cw4w1ux cynjjrm clu1xzz c5fry1g c8arrar ${"w-checkbox form_checkbox"}`}>
<div
className={`w-element c1988f7f c1v7lzh4 c95je1t c1nvquth cxedn37 cy698ao ca09yfv c1at8wuf crjhvpn c1cihr4e cmaf0s5 c1afds52 c428y35 c1sg3im2 c1up4h7s ${"w-checkbox-input w-checkbox-input--inputType-custom form_checkbox-icon"}`} />
<Input
type={"checkbox"}
name={"Checkbox"}
id={"Checkbox"}
data-name={"Checkbox"}
className={`w-element c1ungi45 c1ilrpex cgakeqw`} />
<span
htmlFor={"Checkbox"}
className={`w-element cvdimgi c1kexwu9 c1ajwld3 c1dftv06 cwwbqcf c1oxtnso ${"form_checkbox-label w-form-label"}`}>
{"Checkbox"}
</span>
</label>
</div>
<div
className={`w-element covda95 c1mjz48u c1ea4sxw c5nedoi ${"form_field-wrap"}`}>
<label
htmlFor={"email"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"Radio button"}
</label>
<label
className={`w-element cr0hif c7xx1rg c1whjrci cz3dvi0 c1ro25gr c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"form_radio w-radio"}`}>
<div
className={`w-element cfk8owb c179gtdw cuxhjw4 c1og7qmh cmaf0s5 c1afds52 c428y35 c1mm0u8y c1tntgph c1qx9vin c1nvquth cy698ao c1988f7f c1sg3im2 c1up4h7s ${"w-form-formradioinput w-form-formradioinput--inputType-custom form_radio-icon w-radio-input"}`} />
<Input
type={"radio"}
name={"Radio"}
id={"radio"}
data-name={"Radio"}
value={"Radio"}
className={`w-element c1ungi45 c1ilrpex cgakeqw`} />
<span
htmlFor={"radio"}
className={`w-element cvdimgi c1kexwu9 c1ajwld3 c1dftv06 cwwbqcf c1oxtnso ${"form_radio-label w-form-label"}`}>
{"Radio"}
</span>
</label>
</div>
<Input
type={"submit"}
data-wait={"Sending your request..."}
value={"Send request"}
className={`w-element c13dsrcw cf159v7 c1kuwk32 c1qe1f6t czsxu8n c1nrdone c1f4f0w8 c1g8wfgh c1g7apm c7xx1rg cze2t9e ct0i0ao curkl6s c1oi8sje c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia c1dftv06 c1m80p2u c1vee3qe c2w17zg cqm1fiw c1rkddb1 cwwbqcf c15pshk crld1xj ciwacd0 cwek1tm ${"button w-button"}`} />
</form>
<div
className={`w-element cg7vtnf cq967bf cmh603w c1fs6dqh c1fqmh6z ${"form_message-success w-form-done"}`}>
<div
className={`w-element`}>
{"Thank you! Your submission has been received!"}
</div>
</div>
<div
className={`w-element cawkhls c1xxgguf c1a3mfqd cmh603w cy7z5dk ${"form_message-error w-form-fail"}`}>
<div
className={`w-element`}>
{"Oops! Something went wrong while submitting the form."}
</div>
</div>
</div>
</div>
<div
className={`w-element c1nfxds6 c7x4qpi c1viuxvl cg2v6fb c13qfgf cdzxtq6 c6xsn2q c1s7gu6l cekxmt8 cuzs0o5 c10rtf3d ccwjzqv ccd92et ${"fs-styleguide_item"}`}>
<div
className={`w-element c1sjoqyl cue63w1 ca09yfv c1at8wuf crjhvpn c1cihr4e cr0hif c1y39kfe c7xx1rg c1lbtf55 coquuii czyiz0d c14v0xy7 c8g4rbm cdzvqh6 ${"fs-styleguide_label"}`}>
{"text-rich-text"}
</div>
<div
className={`w-element c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c1qminw5 c7g8hv3 c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 c1owova2 ctxxht2 ${"text-rich-text w-richtext"}`}>
<h1
className={`w-element`}>
{"Heading 1"}
</h1>
<h2
className={`w-element`}>
{"Heading 2"}
</h2>
<h3
className={`w-element`}>
{"Heading 3"}
</h3>
<h4
className={`w-element`}>
{"Heading 4"}
</h4>
<h5
className={`w-element c1noxpoj ${"heading-2"}`}>
{"Heading 5"}
</h5>
<p
className={`w-element`}>
<span
className={`w-element`}>
{"Sample text with a "}
</span>
<a
href={"http://finsweet.com"}
className={`w-element`}>
{"link"}
</a>
<span
className={`w-element`}>
{" is being used as a "}
</span>
<code
className={`w-element`}>
{"placeholder"}
</code>
<span
className={`w-element`}>
{" for real text that is normally present. Sample text helps you understand how real text may look on your website. Sample text is being used as a placeholder for real text. Sample text is being used as a placeholder for real text. Sample text is being used as a placeholder for real text."}
</span>
</p>
<ul
role={"list"}
className={`w-element`}>
<li
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present."}
</li>
<li
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present."}
</li>
<li
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present."}
</li>
</ul>
<ol
start={0}
role={"list"}
className={`w-element`}>
<li
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present."}
</li>
<li
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present."}
</li>
<li
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present."}
</li>
</ol>
<blockquote
className={`w-element`}>
{"Sample text is being used as a placeholder for real text that is normally present. Sample text helps you understand how real text may look on your website. Sample text is being used as a placeholder for real text that is normally present."}
</blockquote>
<p
className={`w-element`}>
{"‍"}
</p>
<figure
className={`w-element ${"w-richtext-align-normal w-richtext-figure-type-image"}`}>
<div
className={`w-element`}>
<Image
loading={"lazy"}
src={"/turtleci-import/images/image.svg"}
alt={""}
className={`w-image`} />
</div>
</figure>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</section>
</div>
</div>
<HtmlEmbed
clientOnly={true}
code={"<script src=\"https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6757f377cc48557b0ef646bd\" type=\"text/javascript\" integrity=\"sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=\" crossorigin=\"anonymous\"></script>"}
className={`w-html-embed`} />
<HtmlEmbed
clientOnly={true}
code={"<script src=\"/turtleci-import/js/webflow.js\" type=\"text/javascript\"></script>"}
className={`w-html-embed`} />
</body>
}


      export { Page }
    