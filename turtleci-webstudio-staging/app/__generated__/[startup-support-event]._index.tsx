/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { HtmlEmbed as HtmlEmbed, Image as Image, Input as Input, Select as Select, Textarea as Textarea } from "@webstudio-is/sdk-components-react";


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
code={"<style>[opacity-entry=\"true\"]{opacity:0}</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:antialiased;text-rendering:optimizeLegibility}*[tabindex]:focus-visible,input[type=\"file\"]:focus-visible{outline:0.125rem solid #4d65ff;outline-offset:0.125rem}@media (min-width:1441px){body{font-size:1rem}}.w-richtext>:not(div):first-child,.w-richtext>div:first-child>:first-child{margin-top:0!important}.w-richtext>:last-child,.w-richtext ol li:last-child,.w-richtext ul li:last-child{margin-bottom:0!important}@media screen and (max-width:991px){.pricing_list.column-amount-5 div{grid-column:span 1}.pricing_list.column-amount-5>div:nth-child(5){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.pricing_list.column-amount-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50% - 3.75em);margin-left:auto;margin-right:auto}}@media screen and (max-width:767px){.pricing_list.column-amount-3 div:nth-child(3){grid-column:span 1;max-width:100%}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 1;width:100%}}@media screen and (max-width:479px){.pricing_list.column-amount-5 div{grid-column:span 1;width;100%;}.pricing_list.column-amount-5 div:nth-child(5){grid-column:span 1;max-width:100%}}</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>select{-webkit-appearance:none;appearance:none}@keyframes rotate-full-circle{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes cpa-bg-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style>"}
className={`w-html-embed`} />
<div
className={`w-element cm0u0jj c1nyqhf9 c1upswbh c1t335do cecg1q c1cinhhj ${"page-wrap"}`}>
<div
className={`w-element c1ro25gr c1m333il cds5ulr c1rfbdao cxsker3 caoid09 ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"global-styles w-embed"}`}>
<HtmlEmbed
code={"<style>body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:antialiased;text-rendering:optimizeLegibility}*[tabindex]:focus-visible,input[type=\"file\"]:focus-visible{outline:0.125rem solid #4d65ff;outline-offset:0.125rem}@media (min-width:1441px){body{font-size:1rem}}.w-richtext>:not(div):first-child,.w-richtext>div:first-child>:first-child{margin-top:0!important}.w-richtext>:last-child,.w-richtext ol li:last-child,.w-richtext ul li:last-child{margin-bottom:0!important}@media screen and (max-width:991px){.pricing_list.column-amount-5 div{grid-column:span 1}.pricing_list.column-amount-5>div:nth-child(5){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.pricing_list.column-amount-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50%);margin-left:auto;margin-right:auto}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 2;width:100%;max-width:calc(50% - 3.75em);margin-left:auto;margin-right:auto}}@media screen and (max-width:767px){.pricing_list.column-amount-3 div:nth-child(3){grid-column:span 1;max-width:100%}.testimonial_grid.column-3>div:nth-child(3){grid-column:span 1;width:100%}}@media screen and (max-width:479px){.pricing_list.column-amount-5 div{grid-column:span 1;width;100%;}.pricing_list.column-amount-5 div:nth-child(5){grid-column:span 1;max-width:100%}}</style>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element cmh603w c14jek5s ctx8ibw ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"page-css w-embed"}`}>
<HtmlEmbed
code={"<style>select{-webkit-appearance:none;appearance:none}@keyframes rotate-full-circle{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes cpa-bg-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element c1ro25gr ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"page-js w-embed w-iframe w-script"}`}>
<HtmlEmbed
clientOnly={true}
code={"<script>\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    gsap.timeline()\n  .to(\".cpa_cover\", { \n      y: \"-100%\", \n      duration: 0.8, \n      ease: \"power2.out\" \n  }, 0) // Start at 0\n  .fromTo(\".cpa_hero\", { \n      opacity: 0\n  },\n  { \n      opacity: 1, \n      duration: 1 \n  }, 0) // Start at 0\n  .fromTo(\".cpa_about\", { \n      opacity: 0\n  },\n  { \n      opacity: 1, \n      duration: 1 \n  }, 0) // Start at 0\n  .fromTo(\".cpa_hero_highlight\", { \n      opacity: 0, \n      y: \"1.5em\",\n  },\n  { \n      opacity: 1, \n      y: \"0em\", \n      duration: 0.8, \n      ease: \"power2.out\", \n      delay: 0.4 \n  }, 0) // Starts at 0, but delayed by 0.2s\n  .fromTo(\".cpa_navbar\", { \n      opacity: 0\n  },\n  { \n      opacity: 1, \n      duration: 0.6, \n      ease: \"power2.out\", \n      delay: 0.8 \n  }, 0); // Starts at 0, but delayed by 0.4s\n});\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
clientOnly={true}
code={"<script>\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const elements = document.querySelectorAll('[opacity-entry=\"true\"]');\n    if (!elements.length) return;\n    // Apply initial styles\n    elements.forEach(el => {\n  el.style.opacity = \"0\";\n  el.style.transform = \"translateY(2.5em)\";\n  el.style.transition = \"opacity 1s ease-out, transform 1s ease-out\";\n    });\n    // Intersection Observer to trigger animation\n    const observer = new IntersectionObserver((entries, observer) => {\n  entries.forEach(entry => {\n      if (entry.isIntersecting) {\n          const element = entry.target;\n          element.style.opacity = \"1\";\n          element.style.transform = \"translateY(0em)\";\n          observer.unobserve(element); // Stop observing once animated\n      }\n  });\n    }, { threshold: 0.1 }); // Trigger when at least 50% is visible\n    elements.forEach(el => observer.observe(el));\n});\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
clientOnly={true}
code={"<script>\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Function to toggle the menu\n  function toggleMenu() {\n    const menu = document.querySelector('.cpa_navbar_menu');\n    const triggerLabel = document.querySelector('.cpa_navbar_menu-trigger_label');\n    if (menu.getAttribute('data-active') === 'true') {\n// If data-active=\"true\", remove the attribute and set label back to \"MENU\"\nmenu.removeAttribute('data-active');\ntriggerLabel.textContent = 'MENU';\n    } else {\n// Otherwise, add the attribute and set label to \"CLOSE\"\nmenu.setAttribute('data-active', 'true');\ntriggerLabel.textContent = 'CLOSE';\n    }\n  }\n  // Function to close the menu when a link is clicked or button is clicked\n  function closeMenu() {\n    const menu = document.querySelector('.cpa_navbar_menu');\n    const triggerLabel = document.querySelector('.cpa_navbar_menu-trigger_label');\n    // Remove the attribute and set label back to \"MENU\"\n    menu.removeAttribute('data-active');\n    triggerLabel.textContent = 'MENU';\n  }\n  // Add event listener to the menu trigger\n  document.querySelector('.cpa_navbar_menu-trigger').addEventListener('click', toggleMenu);\n  // Add event listeners to all menu links\n  document.querySelectorAll('.cpa_navbar_link').forEach(link => {\n    link.addEventListener('click', closeMenu);\n  });\n  // Add event listener to the menu button (.cpa_navbar_menu_btn) to also close the menu\n  document.querySelector('.cpa_navbar_menu_btn').addEventListener('click', closeMenu);\n});\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
clientOnly={true}
code={"<script>\ndocument.addEventListener('DOMContentLoaded', () => {\n  const industrySelect = document.querySelector('#Industry');\n  const otherIndustryWrap = document.querySelector('#industry-other-wrap');\n  const otherIndustryInput = document.querySelector('#Industry-Other');\n  function toggleOtherIndustryField() {\n    if (industrySelect.value === 'Other') {\notherIndustryWrap.style.display = 'block'; // Show the other industry input field\notherIndustryInput.setAttribute('required', 'true'); // Make input required\n    } else {\notherIndustryWrap.style.display = 'none'; // Hide the other industry input field\notherIndustryInput.removeAttribute('required'); // Remove required attribute\n    }\n  }\n  // Initial check in case the dropdown has a pre-selected value\n  toggleOtherIndustryField();\n  // Listen for changes in the #Industry dropdown\n  industrySelect.addEventListener('change', toggleOtherIndustryField);\n});\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
clientOnly={true}
code={"<script>\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const metricElements = document.querySelectorAll('[metric-animate=\"true\"]');\n    if (!metricElements.length) return;\n    const observer = new IntersectionObserver((entries, observer) => {\n  entries.forEach(entry => {\n      if (entry.isIntersecting) {\n          const element = entry.target;\n          const targetValue = parseInt(element.innerText, 10) || 0;\n          const step = parseInt(element.getAttribute(\"metric-animate-step\"), 10) || 1;\n          animateNumber(element, targetValue, step);\n          observer.unobserve(element); // Stop observing once animated\n      }\n  });\n    }, { threshold: 0.5 }); // Trigger when at least 50% of the element is in view\n    metricElements.forEach(el => observer.observe(el));\n    function animateNumber(element, targetValue, step) {\n  let startValue = 0;\n  let duration = 1000; // Animation duration in milliseconds\n  let startTime = null;\n  function animationStep(timestamp) {\n      if (!startTime) startTime = timestamp;\n      let progress = (timestamp - startTime) / duration;\n      let easingProgress = easeOutQuad(progress); // Apply easing effect\n      let currentValue = Math.min(Math.floor(startValue + (targetValue - startValue) * easingProgress), targetValue);\n      element.innerText = currentValue;\n      if (progress < 1) {\n          requestAnimationFrame(animationStep);\n      } else {\n          element.innerText = targetValue; // Ensure final value is set\n      }\n  }\n  requestAnimationFrame(animationStep);\n    }\n    // Ease-out function for a smooth finish\n    function easeOutQuad(t) {\n  return t * (2 - t);\n    }\n});\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
clientOnly={true}
code={"<script>\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const elements = document.querySelectorAll('[opacity-entry=\"true\"]');\n    if (!elements.length) return;\n    // Apply initial styles\n    elements.forEach(el => {\n  el.style.opacity = \"0\";\n  el.style.transform = \"translateY(2.5em)\";\n  el.style.transition = \"opacity 1s ease-out, transform 1s ease-out\";\n    });\n    // Intersection Observer to trigger animation\n    const observer = new IntersectionObserver((entries, observer) => {\n  entries.forEach(entry => {\n      if (entry.isIntersecting) {\n          const element = entry.target;\n          element.style.opacity = \"1\";\n          element.style.transform = \"translateY(0em)\";\n          observer.unobserve(element); // Stop observing once animated\n      }\n  });\n    }, { threshold: 0.5 }); // Trigger when at least 50% is visible\n    elements.forEach(el => observer.observe(el));\n});\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
clientOnly={true}
code={"<script>\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const collapsedElement = document.querySelector(\".fomo_collapsed\");\n    const expandedElement = document.querySelector(\".fomo_expanded\");\n    if (!collapsedElement || !expandedElement) return;\n    // Ensure default state\n    gsap.set(expandedElement, { opacity: 0, pointerEvents: \"none\" });\n    // Function to show the expanded element\n    function showExpanded() {\n  gsap.to(expandedElement, { opacity: 1, pointerEvents: \"auto\", duration: 0.3, ease: \"power2.out\" });\n  document.addEventListener(\"click\", handleOutsideClick); // Listen for outside click\n    }\n    // Function to hide the expanded element\n    function hideExpanded() {\n  gsap.to(expandedElement, { opacity: 0, pointerEvents: \"none\", duration: 0.3, ease: \"power2.out\" });\n  document.removeEventListener(\"click\", handleOutsideClick); // Remove outside click listener\n    }\n    // Function to detect outside click\n    function handleOutsideClick(event) {\n  if (!expandedElement.contains(event.target) && !collapsedElement.contains(event.target)) {\n      hideExpanded();\n  }\n    }\n    // Desktop: Hover effect\n    collapsedElement.addEventListener(\"mouseenter\", function () {\n  if (window.innerWidth > 768) showExpanded();\n    });\n    expandedElement.addEventListener(\"mouseleave\", function () {\n  if (window.innerWidth > 768) hideExpanded();\n    });\n    // Mobile: Click to toggle\n    collapsedElement.addEventListener(\"click\", function (event) {\n  if (window.innerWidth <= 768) {\n      event.stopPropagation(); // Prevent immediate closing\n      showExpanded();\n  }\n    });\n});\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
clientOnly={true}
code={"<script>\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const backToTopBtn = document.querySelector(\".cpa_btt-btn\");\n  function toggleBackToTop() {\n    const scrollPosition = window.scrollY;\n    const threshold = window.innerHeight * 1; // 150vh\n    if (scrollPosition > threshold) {\nbackToTopBtn.classList.add(\"is-active\");\n    } else {\nbackToTopBtn.classList.remove(\"is-active\");\n    }\n  }\n  window.addEventListener(\"scroll\", toggleBackToTop);\n});\n</script>"}
className={`w-html-embed`} />
</div>
<main
className={`w-element ${"main-wrap"}`}>
<nav
className={`w-element c3pv99h c7q667e ch73i66 c1d5da0p c1xgwmfx c155y887 c1rwc4sm c1t335do c1cinhhj ${"cpa_navbar"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha c1kuwk32 c4gouwl cfko4c5 cmcjy5s ctbzh2u c16agd5o caxr30d caqe5xq c1c8uskx cmbbocb c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element c13lcbtl c7xx1rg c1chl3ha cfko4c5 cmcjy5s c1k9913m c16agd5o c1yofgyr c1k0gcvl ${"cpa_navbar_flex-wrap"}`}>
<a
href={"https://www.turtleci.io/"}
target={"_blank"}
className={`w-element ckwuexc cmh603w c1xn1ugd ${"cpa_navbar_leftbox w-inline-block"}`}>
<Image
src={"/turtleci-import/images/TurtleCI-logo.png"}
loading={"lazy"}
width={70}
alt={"TurtleCI Main Logo"}
className={`w-image cm0uvih c1w0yz8n c1xn1ugd ${"cpa_navbar_logo"}`} />
</a>
<div
className={`w-element c1i7ve6l c2q6o0k c1aee7dx c7xx1rg cdzvqh6 cz1dbqk cmtw8ia c1mtge5i cjt5b5a c1cnynqc ${"cpa_navbar_lrightbox"}`}>
<div
className={`w-element c1i7ve6l c2q6o0k cdzvqh6 c1ovvada c173o5z5 c2q0ag4 c8ba5sw c1uqb5d4 ch8j29j c3p5aki chq3ky0 cfe1vus c149hts6 ceq9pda c1tgn0qk c1ca9zgk c1t5p4ol c74o7rt c1eylu9g c132mgzs c1kyf1zd cubp8mi cc49nab c1d195ce c7tx598 c1fxf2qs crugq0o c1mqnin4 c1m3ycyu cqlc3hu cp1crqp c1t335do cecg1q c1cinhhj c1586av8 coqt328 c39fbfu c1khhthh c1nj3xj4 c1kyk2lm c1np6jes c1ou5bby c7xx1s3 cubhqip cf74d0e c10nffi4 ctltzze c1ccfgsa c1i4lgve c1az46lv c1kpochy ckrq6tv c1l2cfg6 c1t8kji7 cijgvnt chkfzp4 cvz82l9 c1qx1hjk c15owlff c1i3w6qs c1l7z73p c1pqrddi c15trozn ${"cpa_navbar_menu"}`}>
<a
href={"#campaign"}
className={`w-element c1tpxml8 c8g4rbm c12z5fd8 c1ml7m1e c434y6l ${"cpa_navbar_link"}`}>
{"Campaign"}
</a>
<a
href={"#features"}
className={`w-element c1tpxml8 c8g4rbm c12z5fd8 c1ml7m1e c434y6l ${"cpa_navbar_link"}`}>
{"Features"}
</a>
<a
href={"#reason"}
className={`w-element c1tpxml8 c8g4rbm c12z5fd8 c1ml7m1e c434y6l ${"cpa_navbar_link"}`}>
{"Why choose TurtleCI"}
</a>
<a
href={"#faq"}
className={`w-element c1tpxml8 c8g4rbm c12z5fd8 c1ml7m1e c434y6l ${"cpa_navbar_link"}`}>
{"FAQs"}
</a>
<div
className={`w-element cggrpw0 ccx0tax c1f9ovza c74clpy ${"cpa_navbar_menu-line"}`} />
<a
href={"https://www.turtleci.io/"}
target={"_blank"}
className={`w-element c1tpxml8 c8g4rbm c12z5fd8 c1ml7m1e c434y6l ${"cpa_navbar_link"}`}>
{"Explore TurtleCI"}
</a>
<div
className={`w-element cmh603w cc3k908 c1rqlhiv ${"cpa_navbar_menu_btn-wrap"}`}>
<a
href={"#apply"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1jbh7w8 c2w17zg cqm1fiw c1rkddb1 ckwuexc cmh603w cu73m4q c1xn1ugd ${"button-wrap w-inline-block cpa_navbar_menu_btn"}`}>
<button
className={`w-element c13dsrcw c1tbtc05 c1kuwk32 ck80r54 c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c1m80p2u crld1xj ciwacd0 cwek1tm ${"button"}`}>
<div
className={`w-element`}>
{"REGISTER NOW"}
</div>
</button>
</a>
</div>
</div>
<div
className={`w-element c75fxaq c1ijzp3p ${"cpa_navbar_btn-wrap"}`}>
<a
href={"#apply"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1jbh7w8 c2w17zg cqm1fiw c1rkddb1 ckwuexc cmh603w cu73m4q c1xn1ugd ${"button-wrap w-inline-block"}`}>
<button
className={`w-element c13dsrcw c1tbtc05 c1kuwk32 ck80r54 c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c1m80p2u crld1xj ciwacd0 cwek1tm ${"button"}`}>
<div
className={`w-element`}>
{"REGISTER NOW"}
</div>
</button>
</a>
</div>
<div
className={`w-element cmh603w c1vy91sm ccsp7fv crp7fjt csld4j0 ${"cpa_navbar_menu-trigger"}`}>
<div
className={`w-element c1svrc9o c1capo46 cg86szb c13dg8zr cc7k8p0 c1ap3zbi c1hslvci c3ubsk9 ${"cpa_navbar_menu-trigger_label"}`}>
{"MENU"}
</div>
</div>
</div>
</div>
</div>
</div>
</nav>
<section
id={"hero"}
className={`w-element c1ie99sc ${"cpa_hero"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha c1kuwk32 c4gouwl cfko4c5 cmcjy5s ctbzh2u c16agd5o caxr30d caqe5xq c1c8uskx cmbbocb c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element c15qeke9 c2y6fjl cdfqu8g c6ru6q0 c1wijxeh cwqsbw c1wi3wzs c1vtrtst cnikyp9 ccwjzqv cfko4c5 cmcjy5s c187uerx c56s163 c1va3hnz cezqez3 c1sd137f c1tg8mxy c1nkc5xz c169rbwe ${"cpa_hero_main"}`}>
<div
className={`w-element c8d04es ccwjzqv c1svrc9o chq3ky0 cfe1vus c149hts6 csuuk33 c1j20a7e cc7k8p0 c1ou5bby c7xx1s3 cubhqip cr5vxx5 c1fojb1i ${"cpa_hero_content"}`}>
<div
className={`w-element c1agj5vr c1b7j5ya c1chu7bs c18qd29s c43eehi cvj7wjk c1gkpfk9 ${"cpa_hero_subtitle"}`}>
{"New CI/CD Platform Supports New Startups"}
</div>
<div
className={`w-element c1qvc3d3 ca7ovlo ${"spacer-24px"}`} />
<h1
className={`w-element c13i00t cvd9qfr cet7x00 c1um4v3y ck07vqj cez4jgv c2jt8hd czdnhsw ${"cpa_hero_title"}`}>
{"Up to $1 Million in Support!"}
</h1>
<div
className={`w-element c1kuwk32 c8dohr6 ca7ovlo ${"spacer-64px"}`} />
<div
className={`w-element c1le6v90 c1e7vj8g cv0uui2 c6fca7a c1v8ff5v c5g9k3b c1b7qqpo c1y39kfe c7xx1rg c1jbh7w8 ccwjzqv cfko4c5 cmcjy5s cz579ng ${"cpa_hero_highlight"}`}>
<div
className={`w-element c8d04es c1le6v90 c1e7vj8g c7q667e c6fca7a c1v8ff5v c5g9k3b c1b7qqpo c1y39kfe c7xx1rg ch73i66 cndrtrt c1d5da0p c1tlh46y cdzvqh6 ccwjzqv c1t7kko7 c1ulbj5j c1ngc8mk cpuhn16 c2exrjn c1qiey0w cb2dvav ccx8w9t ${"cpa_hero_highlight_content"}`}>
<div
className={`w-element c1xeu4lt c1lmt071 c1noxpoj ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c1r2ofne c11j62p8 c1tf8zie c1dmj322 c1t4fold c10ztb15 ce17mxc cv7k4t c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_hero_highlight_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 40 40"}
fill={"none"}
className={`w-element`}>
<g
clipPath={"url(#clip0_58_5272)"}
className={`w-element`}>
<path
d={"M31.6666 24.1666C31.6702 24.6308 31.5291 25.0846 31.263 25.4648C30.9969 25.8451 30.619 26.133 30.1818 26.2885L21.2106 29.5518L17.9497 38.5243C17.789 38.9574 17.4996 39.331 17.1204 39.5948C16.7412 39.8586 16.2904 40 15.8285 40C15.3666 40 14.9158 39.8586 14.5366 39.5948C14.1575 39.331 13.8681 38.9574 13.7073 38.5243L10.4464 29.5504L1.47524 26.2885C1.04223 26.1277 0.668786 25.8382 0.405069 25.4589C0.141353 25.0796 0 24.6287 0 24.1666C0 23.7046 0.141353 23.2537 0.405069 22.8744C0.668786 22.4951 1.04223 22.2056 1.47524 22.0448L10.4464 18.7829L13.7073 9.809C13.8681 9.37586 14.1575 9.0023 14.5366 8.73851C14.9158 8.47471 15.3666 8.33331 15.8285 8.33331C16.2904 8.33331 16.7412 8.47471 17.1204 8.73851C17.4996 9.0023 17.789 9.37586 17.9497 9.809L21.212 18.7829L30.1818 22.0448C30.619 22.2003 30.9969 22.4882 31.263 22.8685C31.5291 23.2487 31.6702 23.7025 31.6666 24.1666Z"}
fill={"currentColor"}
className={`w-element`} />
<path
d={"M40.0001 8.33333C40.002 8.57763 39.9278 8.81644 39.7877 9.01658C39.6477 9.21672 39.4488 9.36824 39.2186 9.45008L34.497 11.1676L32.7807 15.89C32.6961 16.118 32.5438 16.3146 32.3442 16.4534C32.1447 16.5922 31.9074 16.6667 31.6643 16.6667C31.4212 16.6667 31.1839 16.5922 30.9844 16.4534C30.7848 16.3146 30.6325 16.118 30.5479 15.89L28.8316 11.1669L24.1099 9.45008C23.882 9.36546 23.6855 9.2131 23.5467 9.01347C23.4079 8.81384 23.3335 8.5765 23.3335 8.33333C23.3335 8.09017 23.4079 7.85283 23.5467 7.65319C23.6855 7.45356 23.882 7.3012 24.1099 7.21659L28.8316 5.49977L30.5479 0.776678C30.6325 0.54871 30.7848 0.3521 30.9844 0.213259C31.1839 0.074419 31.4212 0 31.6643 0C31.9074 0 32.1447 0.074419 32.3442 0.213259C32.5438 0.3521 32.6961 0.54871 32.7807 0.776678L34.4977 5.49977L39.2186 7.21659C39.4488 7.29843 39.6477 7.44995 39.7877 7.65009C39.9278 7.85022 40.002 8.08904 40.0001 8.33333Z"}
fill={"currentColor"}
className={`w-element`} />
</g>
<defs
className={`w-element`}>
<clipPath
id={"clip0_58_5272"}
className={`w-element`}>
<rect
width={"40"}
height={"40"}
fill={"white"}
className={`w-element`} />
</clipPath>
</defs>
</svg>
</div>
<div
className={`w-element c1noxpoj c3bspns c18ghmj7 c1b7j5ya c8g4rbm c18qd29s cvj7wjk ${"cpa_hero_highlight_text"}`}>
{"18 MONTHS FREE SUBSCRIPTION"}
</div>
</div>
<div
className={`w-element cof4nxl c1kuwk32 c4gouwl c1ilrpex cds5ulr cjfjc1q cxnec9k caoid09 c1p54kz7 cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t ctp2fz2 c4s3jf c1tfz2nu c1isl1ly ${"cpa_hero_highlight_lightning"}`} />
</div>
</div>
<div
className={`w-element c1y39kfe c7xx1rg c1sxiycd cdzvqh6 c1ilrpex cds5ulr c1rfbdao cxnec9k caoid09 c187uerx c56s163 c1fxf2qs crugq0o c15z4me5 c12gnh9b c1nrgqzb c1ggozrk c1sd137f c1tg8mxy cvz82l9 c1qx1hjk cl4x9pa c7jdf9i cxy7r1n c1ofs5db ${"cpa_hero_bg-wrap"}`}>
<div
className={`w-element c1hqea92 c1wjt81d c1w0yz8n ck80r54 ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly cgdkt0f cu0rxmm c1a6avdk c7c218r crwoak8 cpspkms cw0k7t1 cfficd2 c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_hero_bg w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 1015 511"}
fill={"none"}
className={`w-element`}>
<path
d={"M92.2727 255.5C92.2727 298.622 109.285 339.977 139.568 370.469C169.851 400.961 210.924 418.091 253.75 418.091C309.298 418.091 346.945 397.93 378.318 366.387C406.969 337.446 430.037 299.492 454.674 255.5C430.037 211.508 406.969 173.554 378.272 144.613C346.946 113.024 309.298 92.9091 253.75 92.9091C210.924 92.9091 169.851 110.039 139.568 140.531C109.285 171.023 92.2727 212.378 92.2727 255.5ZM253.75 511C186.451 511 121.909 484.081 74.3217 436.166C26.7343 388.25 0 323.263 0 255.5C0 187.737 26.7343 122.75 74.3217 74.8342C121.909 26.9187 186.451 0 253.75 0C336.657 0 397.003 32.1001 443.509 78.9727C468.238 103.779 489.045 132.953 507.5 162.684C525.955 132.953 546.762 103.779 571.491 78.9263C617.997 32.1001 678.343 0 761.25 0C828.549 0 893.091 26.9187 940.678 74.8342C988.266 122.75 1015 187.737 1015 255.5C1015 323.263 988.266 388.25 940.678 436.166C893.091 484.081 828.549 511 761.25 511C678.389 511 617.997 478.9 571.491 432.027C546.762 407.221 525.955 378.047 507.5 348.316C489.045 378.047 468.238 407.221 443.509 432.074C397.003 478.9 336.657 511 253.75 511ZM560.326 255.5C584.963 299.492 608.031 337.446 636.728 366.387C668.101 397.976 705.748 418.091 761.25 418.091C782.455 418.091 803.453 413.885 823.045 405.714C842.636 397.543 860.437 385.567 875.432 370.469C890.426 355.371 902.321 337.447 910.436 317.721C918.551 297.994 922.727 276.852 922.727 255.5C922.727 234.148 918.551 213.006 910.436 193.279C902.321 173.553 890.426 155.629 875.432 140.531C860.437 125.433 842.636 113.457 823.045 105.286C803.453 97.1146 782.455 92.9091 761.25 92.9091C705.748 92.9091 668.055 113.07 636.682 144.613C608.031 173.554 584.963 211.508 560.326 255.5Z"}
fill={"currentColor"}
fillOpacity={"1"}
className={`w-element`} />
</svg>
</div>
</div>
<div
className={`w-element c136fmy c1ilrpex cds5ulr c1771wej c15keb5f c19u1i0f c1rhwrbf csuuk33 c19bjlry c14av54f c1tgn0qk c1j20a7e c1yofgyr c1sxnnl5 crugq0o c15z4me5 c12gnh9b c1mu0one c13negkv cr5vxx5 cu3keg7 cnag396 c10nffi4 c1fojb1i c1k0gcvl c1w4nqtb c1qx1hjk cl4x9pa c7jdf9i cba1jyl ${"cpa_hero_animation"}`}>
<div
data-rive-url={"https://cdn.prod.website-files.com/6757f377cc48557b0ef646bd/67a3074f472ef0837a0691f1_TurtleCI%20Campaign%20Hero%20Animation.riv"}
data-rive-artboard={"Artboard"}
data-rive-autoplay={"true"}
data-rive-is-touch-scroll-enabled={"false"}
data-rive-automatically-handle-events={"false"}
data-rive-fit={"contain"}
data-rive-alignment={"center"}
data-animation-type={"rive"}
className={`w-element c1kuwk32 c4gouwl cgdkt0f cu0rxmm c1a6avdk c186ffp2 crwoak8 cpspkms cw0k7t1 c1f2bs6w ${"cpa_hero_rive"}`}>
<canvas
className={`w-element c4gouwl c1kuwk32`} />
</div>
</div>
</div>
</div>
</div>
</section>
<section
className={`w-element c14fwb78 c1ie99sc ${"cpa_about"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha c1kuwk32 c4gouwl cfko4c5 cmcjy5s ctbzh2u c16agd5o caxr30d caqe5xq c1c8uskx cmbbocb c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element clue8m c1ms6g6o c13lcbtl c7xx1rg cdzvqh6 czwjesa c12oouua c1svrc9o chq3ky0 cfe1vus cat6qrd c10bep2g cc7k8p0 c1ou5bby c7xx1s3 ${"cpa_about_flex-wrap"}`}>
<h2
className={`w-element c8g4rbm c1a91cgv cdznpsm c1kkah6p ${"text-weight-semibold is-cpa-about"}`}>
<span
className={`w-element`}>
{"Hello!"}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"We Are "}
</span>
<span
className={`w-element c1noxpoj c18ghmj7 ${"text-color-brand"}`}>
{"TurtleCI"}
</span>
</h2>
<p
className={`w-element`}>
<span
className={`w-element`}>
{"Designed for startups, TurtleCI is a cutting-edge Continuous Integration/Continuous Deployment (CI/CD) platform, helps build, test, and deploy software faster and with fewer errors."}
</span>
<br
className={`w-element`} />
<br
className={`w-element`} />
<span
className={`w-element`}>
{"At TurtleCI, we’ve been in your shoes – a small team with big dreams, striving to build better, faster, and more reliable software with limited resources."}
</span>
</p>
</div>
</div>
</div>
</section>
<section
id={"campaign"}
opacity-entry={"true"}
className={`w-element cwqsbw c1vtrtst ${"cpa_details"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha c1kuwk32 c4gouwl cfko4c5 cmcjy5s ctbzh2u c16agd5o caxr30d caqe5xq c1c8uskx cmbbocb c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe ${"w-layout-blockcontainer container-lg w-container"}`}>
<h2
className={`w-element cte2vf8 c8g4rbm cnsje4e c1fs6dqh c43eehi c1gkpfk9 ${"heading-style-h4 text-weight-semibold text-align-center"}`}>
{"That’s Why We Created This Campaign"}
</h2>
<h2
className={`w-element c8g4rbm c1fs6dqh ${"text-weight-semibold text-align-center"}`}>
{"Code to Scale: "}
<span
className={`w-element cvd9qfr ${"text-color-yellow"}`}>
{"$1M Startup Support Event"}
</span>
</h2>
<div
className={`w-element c1kuwk32 c14fwb78 ca7ovlo cqyyj0l c1sgfhaw ${"spacer-40px"}`} />
<div
className={`w-element c1le6v90 c1e7vj8g c1jkbzro czrt1di c13qfgf c10rtf3d c168g7wn c1ml4qhu ${"cpa_details_grid"}`}>
<div
className={`w-element c1fs6dqh carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 c14fwb78 cndrtrt c1ie99sc c1tlh46y cdzvqh6 c1hi5fbc ce6kj4 cfe1vus c11eop2k c1xg2mm cytteay cezqez3 c1gk8fjd c1va3hnz ce9gx9a c7xx1s3 cf1fbqu cr3sus csrkwa2 c169rbwe cjlzfqh c1nkc5xz ${"cpa_details_box"}`}>
<div
className={`w-element c1le6v90 c1e7vj8g cbplqux c1qu1cb1 c1y39kfe c7xx1rg cx9dked cdzvqh6 c4ak5if c1coga6h ce6kj4 cfe1vus c1cbjd2o c9zpt8h c56s163 c1selrgo c1wd2yga c1mujqkf c11eop2k c1xg2mm c1817s9f c3apr0e c1wrvlix c1aoddrq ce9gx9a c7xx1s3 c10iegm chw4we2 c1tg8mxy c1jk73wb c72h4va c1hborwc cf1fbqu cr3sus cgyp09m c10p036a cxrxot9 ${"cpa_details_box_top"}`}>
<div
className={`w-element c1xeu4lt c1lmt071 c14ikxcr ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_details_box_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 40 40"}
fill={"none"}
className={`w-element`}>
<path
d={"M3.3335 20C3.3335 12.1434 3.3335 8.21504 5.7735 5.77337C8.21683 3.33337 12.1435 3.33337 20.0002 3.33337C27.8568 3.33337 31.7852 3.33337 34.2252 5.77337C36.6668 8.21671 36.6668 12.1434 36.6668 20C36.6668 27.8567 36.6668 31.785 34.2252 34.225C31.7868 36.6667 27.8568 36.6667 20.0002 36.6667C12.1435 36.6667 8.21516 36.6667 5.7735 34.225C3.3335 31.7867 3.3335 27.8567 3.3335 20Z"}
stroke={"currentColor"}
strokeWidth={"3.5"}
className={`w-element`} />
<path
d={"M10 26.3334L11.905 28.3334L16.6667 23.3334M10 14.6667L11.905 16.6667L16.6667 11.6667"}
stroke={"currentColor"}
strokeWidth={"3.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M21.667 15H30.0003M21.667 26.6667H30.0003"}
stroke={"currentColor"}
strokeWidth={"3.5"}
strokeLinecap={"round"}
className={`w-element`} />
</svg>
</div>
<h3
className={`w-element cte2vf8 c8g4rbm cnsje4e c3bspns c43eehi c1gkpfk9 ${"heading-style-h4 text-style-allcaps text-weight-semibold"}`}>
{"Eligibility"}
</h3>
</div>
<div
className={`w-element cbplqux c1qu1cb1 covda95 c1mjz48u c1ea4sxw c1g7apm c1qvc3d3 cdzvqh6 c1hqv6so c187uerx c1wytze2 c14pb92a c1epobsd c1sd137f c1edlru5 cb330ls ${"cpa_details_box_bottom"}`}>
<div
className={`w-element cte2vf8 cn9ibz0 ${"cpa_details_box_text text-weight-bold"}`}>
{"Early Startups Teams"}
</div>
</div>
</div>
<div
className={`w-element c1fs6dqh carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 c14fwb78 cndrtrt c1ie99sc c1tlh46y cdzvqh6 c1hi5fbc ce6kj4 cfe1vus c11eop2k c1xg2mm cytteay cezqez3 c1gk8fjd c1va3hnz ce9gx9a c7xx1s3 cf1fbqu cr3sus csrkwa2 c169rbwe cjlzfqh c1nkc5xz ${"cpa_details_box"}`}>
<div
className={`w-element c1le6v90 c1e7vj8g cbplqux c1qu1cb1 c1y39kfe c7xx1rg cx9dked cdzvqh6 c4ak5if c1coga6h ce6kj4 cfe1vus c1cbjd2o c9zpt8h c56s163 c1selrgo c1wd2yga c1mujqkf c11eop2k c1xg2mm c1817s9f c3apr0e c1wrvlix c1aoddrq ce9gx9a c7xx1s3 c10iegm chw4we2 c1tg8mxy c1jk73wb c72h4va c1hborwc cf1fbqu cr3sus cgyp09m c10p036a cxrxot9 ${"cpa_details_box_top"}`}>
<div
className={`w-element c1xeu4lt c1lmt071 c14ikxcr ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_details_box_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 40 40"}
fill={"none"}
className={`w-element`}>
<path
d={"M6.5 4.375C4.77609 4.375 3.12279 5.05982 1.90381 6.27881C0.684819 7.49779 0 9.15109 0 10.875V27.875C0 29.5989 0.684819 31.2522 1.90381 32.4712C3.12279 33.6902 4.77609 34.375 6.5 34.375H33.5C34.3536 34.375 35.1988 34.2069 35.9874 33.8802C36.7761 33.5536 37.4926 33.0748 38.0962 32.4712C38.6998 31.8676 39.1786 31.1511 39.5052 30.3624C39.8319 29.5738 40 28.7286 40 27.875V10.875C40 10.0214 39.8319 9.17617 39.5052 8.38756C39.1786 7.59894 38.6998 6.88239 38.0962 6.27881C37.4926 5.67522 36.7761 5.19644 35.9874 4.86978C35.1988 4.54313 34.3536 4.375 33.5 4.375H6.5ZM3 10.875C3 8.943 4.568 7.375 6.5 7.375H12V9.791C11.0787 9.38833 10.0575 9.27274 9.06956 9.45933C8.08161 9.64591 7.17287 10.126 6.46194 10.8369C5.75101 11.5479 5.27091 12.4566 5.08433 13.4446C4.89774 14.4325 5.01333 15.4537 5.416 16.375H3V10.875ZM15 14.375C15 13.9794 15.1173 13.5928 15.3371 13.2639C15.5568 12.935 15.8692 12.6786 16.2346 12.5272C16.6001 12.3759 17.0022 12.3363 17.3902 12.4134C17.7781 12.4906 18.1345 12.6811 18.4142 12.9608C18.6939 13.2405 18.8844 13.5969 18.9616 13.9848C19.0387 14.3728 18.9991 14.7749 18.8478 15.1404C18.6964 15.5058 18.44 15.8182 18.1111 16.0379C17.7822 16.2577 17.3956 16.375 17 16.375H15V14.375ZM12 16.375H10C9.60444 16.375 9.21776 16.2577 8.88886 16.0379C8.55996 15.8182 8.30362 15.5058 8.15224 15.1404C8.00087 14.7749 7.96126 14.3728 8.03843 13.9848C8.1156 13.5969 8.30608 13.2405 8.58579 12.9608C8.86549 12.6811 9.22186 12.4906 9.60982 12.4134C9.99778 12.3363 10.3999 12.3759 10.7654 12.5272C11.1308 12.6786 11.4432 12.935 11.6629 13.2639C11.8827 13.5928 12 13.9794 12 14.375V16.375ZM12 21.495V31.375H6.5C5.57174 31.375 4.6815 31.0063 4.02513 30.3499C3.36875 29.6935 3 28.8033 3 27.875V19.375H9.88L6.44 22.815C6.29263 22.9523 6.17442 23.1179 6.09244 23.3019C6.01045 23.4859 5.96637 23.6845 5.96282 23.886C5.95926 24.0874 5.99631 24.2874 6.07175 24.4742C6.1472 24.661 6.25949 24.8306 6.40192 24.9731C6.54436 25.1155 6.71403 25.2278 6.9008 25.3032C7.08758 25.3787 7.28764 25.4157 7.48905 25.4122C7.69045 25.4086 7.88908 25.3645 8.07308 25.2826C8.25708 25.2006 8.42268 25.0824 8.56 24.935L12 21.495ZM15 31.375V21.495L18.44 24.935C18.5773 25.0824 18.7429 25.2006 18.9269 25.2826C19.1109 25.3645 19.3095 25.4086 19.511 25.4122C19.7124 25.4157 19.9124 25.3787 20.0992 25.3032C20.286 25.2278 20.4556 25.1155 20.5981 24.9731C20.7405 24.8306 20.8528 24.661 20.9282 24.4742C21.0037 24.2874 21.0407 24.0874 21.0372 23.886C21.0336 23.6845 20.9895 23.4859 20.9076 23.3019C20.8256 23.1179 20.7074 22.9523 20.56 22.815L17.12 19.375H37V27.875C37 28.3346 36.9095 28.7898 36.7336 29.2144C36.5577 29.639 36.2999 30.0249 35.9749 30.3499C35.6499 30.6749 35.264 30.9327 34.8394 31.1086C34.4148 31.2845 33.9596 31.375 33.5 31.375H15ZM15 9.791V7.375H33.5C35.432 7.375 37 8.943 37 10.875V16.375H21.584C21.9867 15.4537 22.1023 14.4325 21.9157 13.4446C21.7291 12.4566 21.249 11.5479 20.5381 10.8369C19.8271 10.126 18.9184 9.64591 17.9304 9.45933C16.9425 9.27274 15.9213 9.38833 15 9.791Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<h3
className={`w-element cte2vf8 c8g4rbm cnsje4e c3bspns c43eehi c1gkpfk9 ${"heading-style-h4 text-style-allcaps text-weight-semibold"}`}>
{"Free Subscription"}
</h3>
</div>
<div
className={`w-element cbplqux c1qu1cb1 covda95 c1mjz48u c1ea4sxw c1g7apm c1qvc3d3 cdzvqh6 c1hqv6so c187uerx c1wytze2 c14pb92a c1epobsd c1sd137f c1edlru5 cb330ls ${"cpa_details_box_bottom"}`}>
<div
className={`w-element cte2vf8 ${"cpa_details_box_text"}`}>
{"Total Value: "}
<span
className={`w-element cn9ibz0 ${"text-weight-bold"}`}>
{"$3,294/startup"}
</span>
</div>
<div
className={`w-element cvdimgi c6s7woo c1qpv6k ${"text-size-sm"}`}>
{"( $183/month for 18 months )"}
</div>
</div>
</div>
<div
className={`w-element c1fs6dqh carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 c14fwb78 cndrtrt c1ie99sc c1tlh46y cdzvqh6 c1hi5fbc ce6kj4 cfe1vus c11eop2k c1xg2mm cytteay cezqez3 c1gk8fjd c1va3hnz ce9gx9a c7xx1s3 cf1fbqu cr3sus csrkwa2 c169rbwe cjlzfqh c1nkc5xz ${"cpa_details_box"}`}>
<div
className={`w-element c1le6v90 c1e7vj8g cbplqux c1qu1cb1 c1y39kfe c7xx1rg cx9dked cdzvqh6 c4ak5if c1coga6h ce6kj4 cfe1vus c1cbjd2o c9zpt8h c56s163 c1selrgo c1wd2yga c1mujqkf c11eop2k c1xg2mm c1817s9f c3apr0e c1wrvlix c1aoddrq ce9gx9a c7xx1s3 c10iegm chw4we2 c1tg8mxy c1jk73wb c72h4va c1hborwc cf1fbqu cr3sus cgyp09m c10p036a cxrxot9 ${"cpa_details_box_top"}`}>
<div
className={`w-element c1xeu4lt c1lmt071 c14ikxcr ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_details_box_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 40 40"}
fill={"none"}
className={`w-element`}>
<path
d={"M13.3335 3.33337V10M26.6668 3.33337V10"}
stroke={"currentColor"}
strokeWidth={"3.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M31.6667 6.66675H8.33333C6.49238 6.66675 5 8.15913 5 10.0001V33.3334C5 35.1744 6.49238 36.6667 8.33333 36.6667H31.6667C33.5076 36.6667 35 35.1744 35 33.3334V10.0001C35 8.15913 33.5076 6.66675 31.6667 6.66675Z"}
stroke={"currentColor"}
strokeWidth={"3.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M5 16.6667H35"}
stroke={"currentColor"}
strokeWidth={"3.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
<h3
className={`w-element cte2vf8 c8g4rbm cnsje4e c3bspns c43eehi c1gkpfk9 ${"heading-style-h4 text-style-allcaps text-weight-semibold"}`}>
{"Registering Timeline"}
</h3>
</div>
<div
className={`w-element cbplqux c1qu1cb1 covda95 c1mjz48u c1ea4sxw c1g7apm c1qvc3d3 cdzvqh6 c1hqv6so c187uerx c1wytze2 c14pb92a c1epobsd c1sd137f c1edlru5 cb330ls ${"cpa_details_box_bottom"}`}>
<div
className={`w-element`}>
{"From "}
<span
className={`w-element cte2vf8 cn9ibz0 ${"cpa_details_box_text text-weight-bold"}`}>
{"January"}
</span>
{" to "}
<span
className={`w-element cte2vf8 cn9ibz0 ${"cpa_details_box_text text-weight-bold"}`}>
{"April/May 2025"}
</span>
</div>
</div>
</div>
<div
id={"w-node-_70fa2271-aa4e-0922-9513-cc195e56895d-e97e7802"}
className={`w-element cm8azr1 c176ublo c15nbh89 c6fca7a c1v8ff5v c5g9k3b c1b7qqpo c13lcbtl c7xx1rg cdzvqh6 cz3bf02 c1d9yfo1 cnpfpql cf95c9v c11eop2k c1xg2mm c1smjrpr csby888 cqd193u c4idmi5 cf1fbqu cr3sus c13wea9x ${"cpa_details_cta-box"}`}>
<div
className={`w-element c1tj7br1 ${"cpa_details_cta-box_text-wrap"}`}>
<p
className={`w-element c20zflo ck80r54 ${"text-size-lg text-color-alternate"}`}>
<span
className={`w-element`}>
{"By removing financial and technical barriers, we aim to help you focus on what matters most – innovating and scaling your ideas."}
</span>
<br
className={`w-element`} />
<br
className={`w-element`} />
<span
className={`w-element cn9ibz0 cticrez ${"text-weight-bold text-style-italic"}`}>
{"Join us and take the first step toward building the future!"}
</span>
</p>
</div>
<a
href={"#apply"}
className={`w-element c428y35 c1tpxml8 c1apmtg4 cwqrurh c37cgwq c1p16x0l c1a91cgv cdznpsm c1kkah6p c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c1jyc72b cdquffd c5nnka2 cag1f6 cimea03 cmh603w ckwuexc crld1xj ccfi1nz c1xn1ugd ${"cpa_details_cta-box_btn w-inline-block"}`}>
<div
className={`w-element cn9ibz0 c3bspns ${"text-weight-bold text-style-allcaps"}`}>
{"Join the program"}
</div>
</a>
</div>
</div>
</div>
</div>
</section>
<section
opacity-entry={"true"}
className={`w-element cwqsbw cy4qr4q ccwjzqv ${"cpa_values"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c8d04es ccwjzqv c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global z-index-1"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha c1kuwk32 c4gouwl cfko4c5 cmcjy5s ctbzh2u c16agd5o caxr30d caqe5xq c1c8uskx cmbbocb c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element clue8m c1ms6g6o c1viuxvl c9bgjuu c13qfgf c10rtf3d cu8axpx c114xu6n c168g7wn clqhs5g cul534n c1ml4qhu ${"cpa_values_grid"}`}>
<div
id={"w-node-_12bb7aac-91dd-9198-7f36-73f680088354-e97e7802"}
className={`w-element c14fwb78 c1ie99sc c1svrc9o c9zpt8h cc7k8p0 chw4we2 ${"cpa_values_content"}`}>
<h2
className={`w-element c8g4rbm ${"text-weight-semibold"}`}>
{"What Our Sponsorship Can Do For You"}
</h2>
<div
className={`w-element c1kuwk32 czdwwj2 cr95nb3 c66efv8 c733ecn chc368u ${"spacer-56px is-cpa-values"}`} />
<div
className={`w-element c1le6v90 c1e7vj8g cbplqux c1qu1cb1 cdzvqh6 c149hts6 csuuk33 cubhqip cr5vxx5 ${"cpa_values_list"}`}>
<div
className={`w-element c12lvo49 c8gnt76 c1y39kfe c7xx1rg cdzvqh6 c1ngc8mk cpuhn16 cb2dvav ccx8w9t ${"cpa_values_item"}`}>
<div
className={`w-element c370mb2 c1ul5uo8 c1noxpoj ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c1wpwirj cozctnf c1oca33h c1hgigzu c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_values_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 56 56"}
fill={"none"}
className={`w-element`}>
<path
d={"M7.146 19.8333L24.6673 37.3545C25.7241 38.411 26.5624 39.6654 27.1342 41.0459C27.7061 42.4265 28.0003 43.9062 28.0002 45.4005V50.1666M7.146 19.8333H14.7293M7.146 19.8333V27.4166"}
stroke={"currentColor"}
strokeWidth={"3.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M48.8542 19.8333L31.3329 37.3546C30.2761 38.4111 29.4378 39.6654 28.8659 41.046C28.2941 42.4265 27.9998 43.9062 28 45.4005V50.1666M48.8542 19.8333H41.2708M48.8542 19.8333V27.4166M28 4.66663V44.4791M28 4.66663L22.3125 10.3541M28 4.66663L33.6875 10.3541"}
stroke={"currentColor"}
strokeWidth={"3.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c20zflo c8g4rbm c1ajwld3 c3bspns c1iver4f c1wmi6tm ${"heading-style-h5 text-weight-semibold text-style-allcaps"}`}>
{"Flexible Sponsorship Packages"}
</div>
</div>
<div
className={`w-element c12lvo49 c8gnt76 c1y39kfe c7xx1rg cdzvqh6 c1ngc8mk cpuhn16 cb2dvav ccx8w9t ${"cpa_values_item"}`}>
<div
className={`w-element c370mb2 c1ul5uo8 c1noxpoj ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c1wpwirj cozctnf c1oca33h c1hgigzu c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_values_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 56 56"}
fill={"none"}
className={`w-element`}>
<path
d={"M49 28C49 30.7578 48.4568 33.4885 47.4015 36.0364C46.3461 38.5842 44.7993 40.8992 42.8492 42.8492C40.8992 44.7993 38.5842 46.3461 36.0364 47.4015C33.4885 48.4568 30.7578 49 28 49C25.2422 49 22.5115 48.4568 19.9636 47.4015C17.4158 46.3461 15.1008 44.7993 13.1508 42.8492C11.2007 40.8992 9.65388 38.5842 8.59853 36.0364C7.54318 33.4885 7 30.7578 7 28C7 22.4305 9.21249 17.089 13.1508 13.1508C17.089 9.21249 22.4305 7 28 7C33.5695 7 38.911 9.21249 42.8492 13.1508C46.7875 17.089 49 22.4305 49 28Z"}
stroke={"currentColor"}
strokeWidth={"3.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M42 14L33.775 22.225M33.775 22.225C36.9203 25.3727 36.9203 30.6297 33.775 33.775M33.775 22.225C30.6297 19.0797 25.3727 19.0797 22.225 22.225M14 42L22.225 33.775M22.225 33.775C19.0797 30.6297 19.0797 25.3727 22.225 22.225M22.225 33.775C25.3703 36.9203 30.6273 36.9203 33.775 33.775M14 14L22.225 22.225M42 42L33.775 33.775"}
stroke={"currentColor"}
strokeWidth={"3.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c20zflo c8g4rbm c1ajwld3 c3bspns c1iver4f c1wmi6tm ${"heading-style-h5 text-weight-semibold text-style-allcaps"}`}>
{"Dedicated support"}
</div>
</div>
<div
className={`w-element c12lvo49 c8gnt76 c1y39kfe c7xx1rg cdzvqh6 c1ngc8mk cpuhn16 cb2dvav ccx8w9t ${"cpa_values_item"}`}>
<div
className={`w-element c370mb2 c1ul5uo8 c1noxpoj ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c1wpwirj cozctnf c1oca33h c1hgigzu c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_values_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 56 56"}
fill={"none"}
className={`w-element`}>
<path
d={"M28 8.4001C26.5148 8.4001 25.0904 8.9901 24.0402 10.0403C22.99 11.0905 22.4 12.5149 22.4 14.0001C22.4 15.4853 22.99 16.9097 24.0402 17.9599C25.0904 19.0101 26.5148 19.6001 28 19.6001C29.4852 19.6001 30.9096 19.0101 31.9598 17.9599C33.01 16.9097 33.6 15.4853 33.6 14.0001C33.6 12.5149 33.01 11.0905 31.9598 10.0403C30.9096 8.9901 29.4852 8.4001 28 8.4001ZM19.6 14.0001C19.6 11.7723 20.485 9.63571 22.0603 8.0604C23.6356 6.4851 25.7722 5.6001 28 5.6001C30.2278 5.6001 32.3644 6.4851 33.9397 8.0604C35.515 9.63571 36.4 11.7723 36.4 14.0001C36.4 16.2279 35.515 18.3645 33.9397 19.9398C32.3644 21.5151 30.2278 22.4001 28 22.4001C25.7722 22.4001 23.6356 21.5151 22.0603 19.9398C20.485 18.3645 19.6 16.2279 19.6 14.0001ZM14.1484 27.9889C14.0532 28.4444 14.0056 28.9148 14.0056 29.4001V30.9261L6.63877 32.9001C6.28012 32.9959 5.97422 33.2303 5.78834 33.5517C5.60246 33.873 5.55183 34.255 5.64757 34.6137L7.45917 41.3757C7.99068 43.356 9.22818 45.0736 10.9384 46.2047C12.6487 47.3357 14.7136 47.8022 16.744 47.5161C17.388 48.3841 18.13 49.1793 18.9532 49.8765L18.4744 50.0165C17.0536 50.3976 15.5716 50.4951 14.1131 50.3034C12.6546 50.1117 11.2482 49.6346 9.97414 48.8993C8.70008 48.164 7.58335 47.1849 6.68773 46.0179C5.79211 44.8509 5.13515 43.519 4.75437 42.0981L2.94277 35.3361C2.80008 34.8033 2.76374 34.2476 2.83582 33.7008C2.9079 33.1539 3.08698 32.6266 3.36285 32.149C3.63871 31.6714 4.00596 31.2527 4.44362 30.9171C4.88127 30.5814 5.38076 30.3351 5.91357 30.1925L14.1484 27.9889ZM42.0056 30.9261V29.4001C42.0037 28.9148 41.957 28.4444 41.8656 27.9889L50.0976 30.1953C51.1731 30.484 52.09 31.188 52.6465 32.1526C53.2031 33.1171 53.3538 34.2632 53.0656 35.3389L51.254 42.1009C50.8623 43.562 50.1787 44.9287 49.2444 46.1183C48.3101 47.308 47.1444 48.2961 45.8178 49.023C44.4912 49.7499 43.0311 50.2006 41.5255 50.3477C40.02 50.4949 38.5002 50.3355 37.058 49.8793C37.8849 49.1774 38.6213 48.3906 39.2672 47.5189C41.2975 47.8041 43.362 47.3369 45.0717 46.2054C46.7814 45.0738 48.0183 43.356 48.5492 41.3757L50.3636 34.6137C50.4593 34.255 50.4087 33.873 50.2228 33.5517C50.0369 33.2303 49.731 32.9959 49.3724 32.9001L42.0056 30.9261ZM42 18.2001C42 17.0862 42.4425 16.0179 43.2301 15.2302C44.0178 14.4426 45.0861 14.0001 46.2 14.0001C47.3139 14.0001 48.3822 14.4426 49.1698 15.2302C49.9575 16.0179 50.4 17.0862 50.4 18.2001C50.4 19.314 49.9575 20.3823 49.1698 21.1699C48.3822 21.9576 47.3139 22.4001 46.2 22.4001C45.0861 22.4001 44.0178 21.9576 43.2301 21.1699C42.4425 20.3823 42 19.314 42 18.2001ZM46.2 11.2001C44.3435 11.2001 42.563 11.9376 41.2502 13.2503C39.9375 14.5631 39.2 16.3436 39.2 18.2001C39.2 20.0566 39.9375 21.8371 41.2502 23.1498C42.563 24.4626 44.3435 25.2001 46.2 25.2001C48.0565 25.2001 49.837 24.4626 51.1497 23.1498C52.4625 21.8371 53.2 20.0566 53.2 18.2001C53.2 16.3436 52.4625 14.5631 51.1497 13.2503C49.837 11.9376 48.0565 11.2001 46.2 11.2001ZM9.79997 14.0001C8.68606 14.0001 7.61778 14.4426 6.83012 15.2302C6.04247 16.0179 5.59997 17.0862 5.59997 18.2001C5.59997 19.314 6.04247 20.3823 6.83012 21.1699C7.61778 21.9576 8.68606 22.4001 9.79997 22.4001C10.9139 22.4001 11.9822 21.9576 12.7698 21.1699C13.5575 20.3823 14 19.314 14 18.2001C14 17.0862 13.5575 16.0179 12.7698 15.2302C11.9822 14.4426 10.9139 14.0001 9.79997 14.0001ZM2.79997 18.2001C2.79997 16.3436 3.53747 14.5631 4.85022 13.2503C6.16298 11.9376 7.94346 11.2001 9.79997 11.2001C11.6565 11.2001 13.437 11.9376 14.7497 13.2503C16.0625 14.5631 16.8 16.3436 16.8 18.2001C16.8 20.0566 16.0625 21.8371 14.7497 23.1498C13.437 24.4626 11.6565 25.2001 9.79997 25.2001C7.94346 25.2001 6.16298 24.4626 4.85022 23.1498C3.53747 21.8371 2.79997 20.0566 2.79997 18.2001ZM21 25.2001C19.8861 25.2001 18.8178 25.6426 18.0301 26.4302C17.2425 27.2179 16.8 28.2862 16.8 29.4001V39.2001C16.8 42.1705 17.98 45.0193 20.0804 47.1197C22.1808 49.2201 25.0295 50.4001 28 50.4001C30.9704 50.4001 33.8192 49.2201 35.9196 47.1197C38.02 45.0193 39.2 42.1705 39.2 39.2001V29.4001C39.2 28.2862 38.7575 27.2179 37.9698 26.4302C37.1822 25.6426 36.1139 25.2001 35 25.2001H21ZM19.6 29.4001C19.6 29.0288 19.7475 28.6727 20.01 28.4101C20.2726 28.1476 20.6287 28.0001 21 28.0001H35C35.3713 28.0001 35.7274 28.1476 35.9899 28.4101C36.2525 28.6727 36.4 29.0288 36.4 29.4001V39.2001C36.4 41.4279 35.515 43.5645 33.9397 45.1398C32.3644 46.7151 30.2278 47.6001 28 47.6001C25.7722 47.6001 23.6356 46.7151 22.0603 45.1398C20.485 43.5645 19.6 41.4279 19.6 39.2001V29.4001Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c20zflo c8g4rbm c1ajwld3 c3bspns c1iver4f c1wmi6tm ${"heading-style-h5 text-weight-semibold text-style-allcaps"}`}>
{"Join a Vibrant Developer Community"}
</div>
</div>
</div>
</div>
<div
className={`w-element c1xirpce carupg6 cazdpea c1g67dw5 c74orcy c1g7apm c7xx1rg cdzvqh6 cfko4c5 cmcjy5s c14u2f0p c1msgjcw ${"cpa_values_img-wrap"}`}>
<Image
src={"/turtleci-import/images/1Mil-campaign-img-1_1.avif"}
loading={"lazy"}
width={70}
alt={"Our Sponsorship can help Startups"}
className={`w-image cckc7l3 c5c7vsx c1sqjap8 crsq7ew ${"cpa_values_img"}`} />
</div>
</div>
<div
className={`w-element cwqsbw ca7ovlo ${"spacer-80px"}`} />
<div
className={`w-element c1fs6dqh cci2jum carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 c1y39kfe c7xx1rg cd86zl1 ctx8ibw c14jek5s c1qvc3d3 c1kuo939 cx9dked c1sxiycd cdzvqh6 c5rxag3 c6lrzl9 c10f74nw coox8kb c14en6jp c19kcl71 crrhkmv c1g9ws2e ${"cpa_values_cta"}`}>
<p
className={`w-element c20zflo cmt6d78 c1ajwld3 c1iver4f c1wmi6tm ${"heading-style-h5 text-weight-normal"}`}>
<span
className={`w-element`}>
{"With full capability of the highest price "}
</span>
<span
className={`w-element cn9ibz0 ${"text-weight-bold"}`}>
{"$183/month"}
</span>
<span
className={`w-element`}>
{" for "}
</span>
<span
className={`w-element cn9ibz0 ${"text-weight-bold"}`}>
{"18 months"}
</span>
<br
className={`w-element`} />
</p>
<div
className={`w-element c1kuwk32 cejdlg0 ca7ovlo ${"spacer-8px"}`} />
<div
className={`w-element c1b7j5ya cn9ibz0 cnsje4e c1noxpoj c18ghmj7 c18m5w71 c1szfbvc ${"heading-style-h3 text-color-brand"}`}>
{"You truly have nothing to lose."}
</div>
<div
className={`w-element c1kuwk32 c14fwb78 ca7ovlo cqyyj0l c1sgfhaw ${"spacer-40px"}`} />
<a
href={"https://www.turtleci.io/"}
target={"_blank"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1jbh7w8 c2w17zg cqm1fiw c1rkddb1 ckwuexc cmh603w cu73m4q c1xn1ugd ${"button-wrap w-inline-block"}`}>
<button
className={`w-element c13dsrcw c428y35 c1kuwk32 c14ikxcr c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 csemwku c1sg3im2 crld1xj ccfi1nz c1juhpdv cwek1tm ${"button-outline"}`}>
<div
className={`w-element`}>
{"LEARN MORE ABOUT TURTLECI"}
</div>
</button>
</a>
</div>
</div>
</div>
<div
className={`w-element cyf0c4o c1ilrpex cds5ulr cjfjc1q cxnec9k caoid09 ${"cpa_values_bg"}`} />
</section>
<section
id={"features"}
opacity-entry={"true"}
className={`w-element c1jwyp7v c1ie99sc ${"cpa_wycd"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha c1kuwk32 c4gouwl cfko4c5 cmcjy5s ctbzh2u c16agd5o caxr30d caqe5xq c1c8uskx cmbbocb c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element c1fs6dqh c1o28xnq ctx8ibw c14jek5s ${"cpa_wycd_header"}`}>
<h2
className={`w-element`}>
{"What you can do with "}
<span
className={`w-element c1noxpoj c18ghmj7 ${"text-color-brand"}`}>
{"TurtleCI"}
</span>
</h2>
<div
className={`w-element c1qvc3d3 ca7ovlo ${"spacer-24px"}`} />
<p
className={`w-element`}>
{"Streamline your CI/CD pipeline from code to deployment with ease and precision."}
</p>
</div>
<div
className={`w-element c1kuwk32 c8dohr6 ca7ovlo ${"spacer-64px"}`} />
<div
className={`w-element c1le6v90 c1e7vj8g c1jkbzro c9bgjuu c13qfgf c10rtf3d c13z7luj cx7q1ul ${"cpa_wycd_grid"}`}>
<div
className={`w-element c1le6v90 c1e7vj8g c6fca7a c1v8ff5v c5g9k3b c1b7qqpo cbplqux c1qu1cb1 cdzvqh6 c1hi5fbc cz3bf02 ${"cpa_wycd_item"}`}>
<div
className={`w-element c11toct7 ca418g0 cvd9qfr ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_wycd_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 64 64"}
fill={"none"}
className={`w-element`}>
<path
d={"M31.9998 21.3333C43.7819 21.3333 53.3332 17.7515 53.3332 13.3333C53.3332 8.91497 43.7819 5.33325 31.9998 5.33325C20.2178 5.33325 10.6665 8.91497 10.6665 13.3333C10.6665 17.7515 20.2178 21.3333 31.9998 21.3333Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M18.6665 28.9119C20.2718 29.3919 22.0638 29.7919 23.9998 30.0852M53.3332 31.9999C53.3332 36.4185 43.7812 39.9999 31.9998 39.9999C20.2185 39.9999 10.6665 36.4185 10.6665 31.9999M18.6665 47.5785C20.2718 48.0585 22.0638 48.4585 23.9998 48.7519"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M53.3332 13.3333V50.6666C53.3332 55.0852 43.7812 58.6666 31.9998 58.6666C20.2185 58.6666 10.6665 55.0852 10.6665 50.6666V13.3333"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c1noxpoj c18ghmj7 c43eehi c1gkpfk9 ${"heading-style-h4 text-color-brand"}`}>
{"Codify"}
</h3>
<ul
role={"list"}
className={`w-element c1tlh46y ${"cpa_wycd_list"}`}>
<li
className={`w-element`}>
{"Integration flows as code."}
</li>
<li
className={`w-element`}>
{"Pre-built composable modules to speed up development."}
</li>
<li
className={`w-element`}>
{"Recyclable flows and split environments."}
</li>
<li
className={`w-element`}>
{"Automatically trigger builds on commit events."}
</li>
</ul>
</div>
<div
className={`w-element c1le6v90 c1e7vj8g c6fca7a c1v8ff5v c5g9k3b c1b7qqpo cbplqux c1qu1cb1 cdzvqh6 c1hi5fbc cz3bf02 ${"cpa_wycd_item"}`}>
<div
className={`w-element c11toct7 ca418g0 cvd9qfr ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_wycd_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 64 64"}
fill={"none"}
className={`w-element`}>
<path
d={"M43.2773 22.6079L34.492 17.5359M43.2773 41.3959L34.492 46.4679M18.2227 37.0732V26.9306M29.5027 46.4679L20.7173 41.3959M45.7707 37.0732V26.9306M29.5027 17.5359L20.7173 22.6079"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M32 18.976C33.5913 18.976 34.8813 17.686 34.8813 16.0947C34.8813 14.5034 33.5913 13.2134 32 13.2134C30.4087 13.2134 29.1187 14.5034 29.1187 16.0947C29.1187 17.686 30.4087 18.976 32 18.976Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M32 50.7866C33.5913 50.7866 34.8813 49.4966 34.8813 47.9053C34.8813 46.3139 33.5913 45.0239 32 45.0239C30.4087 45.0239 29.1187 46.3139 29.1187 47.9053C29.1187 49.4966 30.4087 50.7866 32 50.7866Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M45.7749 42.8347C47.3662 42.8347 48.6562 41.5447 48.6562 39.9534C48.6562 38.362 47.3662 37.072 45.7749 37.072C44.1836 37.072 42.8936 38.362 42.8936 39.9534C42.8936 41.5447 44.1836 42.8347 45.7749 42.8347Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M45.7749 26.9279C47.3662 26.9279 48.6562 25.6379 48.6562 24.0466C48.6562 22.4553 47.3662 21.1653 45.7749 21.1653C44.1836 21.1653 42.8936 22.4553 42.8936 24.0466C42.8936 25.6379 44.1836 26.9279 45.7749 26.9279Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M18.2256 42.8347C19.8169 42.8347 21.1069 41.5447 21.1069 39.9534C21.1069 38.362 19.8169 37.072 18.2256 37.072C16.6343 37.072 15.3442 38.362 15.3442 39.9534C15.3442 41.5447 16.6343 42.8347 18.2256 42.8347Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M18.2256 26.9279C19.8169 26.9279 21.1069 25.6379 21.1069 24.0466C21.1069 22.4553 19.8169 21.1653 18.2256 21.1653C16.6343 21.1653 15.3442 22.4553 15.3442 24.0466C15.3442 25.6379 16.6343 26.9279 18.2256 26.9279Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M32 13.2133V3.33325M32 60.6666V50.7866M48.2693 22.6066L56.8267 17.6666M7.17334 46.3332L15.7307 41.3932M48.2693 41.3932L56.8267 46.3332M7.17334 17.6666L15.7307 22.6066"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M32.0002 60.6666C47.8323 60.6666 60.6668 47.8321 60.6668 31.9999C60.6668 16.1678 47.8323 3.33325 32.0002 3.33325C16.168 3.33325 3.3335 16.1678 3.3335 31.9999C3.3335 47.8321 16.168 60.6666 32.0002 60.6666Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c1noxpoj c18ghmj7 c43eehi c1gkpfk9 ${"heading-style-h4 text-color-brand"}`}>
{"Multi-OS Support"}
</h3>
<ul
role={"list"}
className={`w-element c1tlh46y ${"cpa_wycd_list"}`}>
<li
className={`w-element`}>
{"Dedicated environments for MacOS (Sierra, High Sierra, Ventura) and Ubuntu 22.04, with more to come."}
</li>
<li
className={`w-element`}>
{"Optimized for mobile and web development on platforms like React Native, Flutter, Native iOS, and Native Android."}
</li>
</ul>
</div>
<div
className={`w-element c1le6v90 c1e7vj8g c6fca7a c1v8ff5v c5g9k3b c1b7qqpo cbplqux c1qu1cb1 cdzvqh6 c1hi5fbc cz3bf02 ${"cpa_wycd_item"}`}>
<div
className={`w-element c11toct7 ca418g0 cvd9qfr ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_wycd_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 64 64"}
fill={"none"}
className={`w-element`}>
<path
d={"M37.3333 10.6666H42.6667C46.4373 10.6666 48.3227 10.6666 49.4933 11.8399C50.6667 13.0079 50.6667 14.8933 50.6667 18.6666M26.6667 10.6666H21.3333C17.5627 10.6666 15.6773 10.6666 14.5067 11.8399C13.3333 13.0079 13.3333 14.8933 13.3333 18.6666M26.6667 53.3332H21.3333C17.5627 53.3332 15.6773 53.3332 14.5067 52.1599C13.3333 50.9919 13.3333 49.1066 13.3333 45.3332M37.3333 53.3332H42.6667C46.4373 53.3332 48.3227 53.3332 49.4933 52.1599C50.6667 50.9892 50.6667 49.1039 50.6667 45.3332M26.6667 31.9999H37.3333M34.6667 5.33325H29.3333C28.6261 5.33325 27.9478 5.6142 27.4477 6.1143C26.9476 6.6144 26.6667 7.29267 26.6667 7.99992V13.3333C26.6667 14.0405 26.9476 14.7188 27.4477 15.2189C27.9478 15.719 28.6261 15.9999 29.3333 15.9999H34.6667C35.3739 15.9999 36.0522 15.719 36.5523 15.2189C37.0524 14.7188 37.3333 14.0405 37.3333 13.3333V7.99992C37.3333 7.29267 37.0524 6.6144 36.5523 6.1143C36.0522 5.6142 35.3739 5.33325 34.6667 5.33325ZM34.6667 47.9999H29.3333C28.6261 47.9999 27.9478 48.2809 27.4477 48.781C26.9476 49.2811 26.6667 49.9593 26.6667 50.6666V55.9999C26.6667 56.7072 26.9476 57.3854 27.4477 57.8855C27.9478 58.3856 28.6261 58.6666 29.3333 58.6666H34.6667C35.3739 58.6666 36.0522 58.3856 36.5523 57.8855C37.0524 57.3854 37.3333 56.7072 37.3333 55.9999V50.6666C37.3333 49.9593 37.0524 49.2811 36.5523 48.781C36.0522 48.2809 35.3739 47.9999 34.6667 47.9999ZM56 34.6666V29.3333C56 28.626 55.7191 27.9477 55.219 27.4476C54.7189 26.9475 54.0406 26.6666 53.3333 26.6666H48C47.2928 26.6666 46.6145 26.9475 46.1144 27.4476C45.6143 27.9477 45.3333 28.626 45.3333 29.3333V34.6666C45.3333 35.3738 45.6143 36.0521 46.1144 36.5522C46.6145 37.0523 47.2928 37.3333 48 37.3333H53.3333C54.0406 37.3333 54.7189 37.0523 55.219 36.5522C55.7191 36.0521 56 35.3738 56 34.6666ZM18.6667 34.6666V29.3333C18.6667 28.626 18.3857 27.9477 17.8856 27.4476C17.3855 26.9475 16.7072 26.6666 16 26.6666H10.6667C9.95942 26.6666 9.28115 26.9475 8.78105 27.4476C8.28095 27.9477 8 28.626 8 29.3333V34.6666C8 35.3738 8.28095 36.0521 8.78105 36.5522C9.28115 37.0523 9.95942 37.3333 10.6667 37.3333H16C16.7072 37.3333 17.3855 37.0523 17.8856 36.5522C18.3857 36.0521 18.6667 35.3738 18.6667 34.6666Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c1noxpoj c18ghmj7 c43eehi c1gkpfk9 ${"heading-style-h4 text-color-brand"}`}>
{"Multi-Framework Compatibility"}
</h3>
<p
className={`w-element`}>
{"Support for a wide range of web and mobile frameworks, ensuring flexibility no matter what your tech stack looks like."}
</p>
</div>
<div
className={`w-element c1le6v90 c1e7vj8g c6fca7a c1v8ff5v c5g9k3b c1b7qqpo cbplqux c1qu1cb1 cdzvqh6 c1hi5fbc cz3bf02 ${"cpa_wycd_item"}`}>
<div
className={`w-element c11toct7 ca418g0 cvd9qfr ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_wycd_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 64 64"}
fill={"none"}
className={`w-element`}>
<path
d={"M56 32V44H8V12H30V8H8C6.93913 8 5.92172 8.42143 5.17157 9.17157C4.42143 9.92172 4 10.9391 4 12V44C4 45.0609 4.42143 46.0783 5.17157 46.8284C5.92172 47.5786 6.93913 48 8 48H24V56H16V60H48V56H40V48H56C57.0609 48 58.0783 47.5786 58.8284 46.8284C59.5786 46.0783 60 45.0609 60 44V32H56ZM36 56H28V48H36V56ZM36 8H60V12H36V8Z"}
fill={"currentColor"}
className={`w-element`} />
<path
d={"M36 16H60V20H36V16ZM36 24H48V28H36V24Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<h3
className={`w-element cte2vf8 cn9ibz0 cnsje4e c1noxpoj c18ghmj7 c43eehi c1gkpfk9 ${"heading-style-h4 text-color-brand"}`}>
{"Advanced Logging"}
</h3>
<p
className={`w-element`}>
{"Track build times, manage error logs and monitor build steps to identify issues before they become bottlenecks."}
</p>
</div>
</div>
</div>
</div>
</section>
<section
opacity-entry={"true"}
className={`w-element c14fwb78 c1ie99sc ${"cpa_metrics"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha c1kuwk32 c4gouwl cfko4c5 cmcjy5s ctbzh2u c16agd5o caxr30d caqe5xq c1c8uskx cmbbocb c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element cum4mnn ck80r54 c6fca7a c1v8ff5v c5g9k3b c1b7qqpo c1viuxvl czrt1di c13qfgf c10rtf3d ccwjzqv cfko4c5 cmcjy5s c14fh8ap crla0h8 c1bmrrs2 c17tx2n0 cxjxpo5 c1yruke9 c6x222 ${"cpa_metrics_main"}`}>
<div
className={`w-element c8d04es c13dsrcw cvv99b2 cbplqux c1qu1cb1 c1y39kfe c7xx1rg cdzvqh6 ccwjzqv ${"cpa_metrics_item"}`}>
<div
className={`w-element c1g7apm c7xx1rg cdzvqh6 ${"cpa_metrics_number-wrap"}`}>
<div
metric-animate-step={"5"}
metric-animate={"true"}
className={`w-element cjxjibi c8g4rbm c1e5610 c1qi0km1 ${"cpa_metrics_number text-weight-semibold"}`}>
{"99.9"}
</div>
<div
className={`w-element cjxjibi c8g4rbm c1e5610 c1qi0km1 ${"cpa_metrics_number text-weight-semibold"}`}>
{"%"}
</div>
</div>
<div
className={`w-element c20zflo cn9ibz0 c3bspns ${"text-size-lg text-weight-bold text-style-allcaps"}`}>
{"Uptime"}
</div>
</div>
<div
className={`w-element c8d04es c13dsrcw cvv99b2 cbplqux c1qu1cb1 c1y39kfe c7xx1rg cdzvqh6 ccwjzqv ${"cpa_metrics_item"}`}>
<div
className={`w-element c1g7apm c7xx1rg cdzvqh6 ${"cpa_metrics_number-wrap"}`}>
<div
metric-animate-step={"5"}
metric-animate={"true"}
className={`w-element cjxjibi c8g4rbm c1e5610 c1qi0km1 ${"cpa_metrics_number text-weight-semibold"}`}>
{"80"}
</div>
<div
className={`w-element cjxjibi c8g4rbm c1e5610 c1qi0km1 ${"cpa_metrics_number text-weight-semibold"}`}>
{"%"}
</div>
</div>
<div
className={`w-element c20zflo cn9ibz0 c3bspns ${"text-size-lg text-weight-bold text-style-allcaps"}`}>
{"Faster Builds"}
</div>
</div>
<div
className={`w-element c8d04es c13dsrcw cvv99b2 cbplqux c1qu1cb1 c1y39kfe c7xx1rg cdzvqh6 ccwjzqv ${"cpa_metrics_item"}`}>
<div
className={`w-element c1g7apm c7xx1rg cdzvqh6 ${"cpa_metrics_number-wrap"}`}>
<div
metric-animate-step={"1"}
metric-animate={"true"}
className={`w-element cjxjibi c8g4rbm c1e5610 c1qi0km1 ${"cpa_metrics_number text-weight-semibold"}`}>
{"15"}
</div>
<div
className={`w-element cjxjibi c8g4rbm c1e5610 c1qi0km1 ${"cpa_metrics_number text-weight-semibold"}`}>
{"K+"}
</div>
</div>
<div
className={`w-element c20zflo cn9ibz0 c3bspns ${"text-size-lg text-weight-bold text-style-allcaps"}`}>
{"U sers"}
</div>
</div>
<div
className={`w-element co29il6 c1g7apm c7xx1rg cdzvqh6 c1ilrpex cds5ulr cjfjc1q cxnec9k caoid09 c5hmduz ${"cpa_metrics_bg-wrap"}`}>
<div
className={`w-element c14dp2e1 c1g3jzk2 c1iel4hw c1w0yz8n cdzvqh6 cd2mmkj ca9u31z ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly crmqu4e cmpsox c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_metrics_bg w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
viewBox={"0 0 1360 1360"}
fill={"none"}
className={`w-element ${".cpa_metrics_svg"}`}>
<path
d={"M680 680L631.058 0H728.942L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M680 680L891.062 31.7344L981.72 68.6408L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M680 680L1126.23 164.561L1195.44 233.775L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M680 680L1296.16 388.2L1331.59 479.444L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M680 680L1360 631.058V728.942L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M680 680L1331.86 879.681L1296.55 970.972L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M680 680L1195.44 1126.23L1126.23 1195.44L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M680 680L885.736 1329.98L976.694 1293.81L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M680 680L728.942 1360H631.058L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M680 680L468.938 1328.27L378.279 1291.36L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M680 680L233.774 1195.44L164.561 1126.23L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M680 680L63.8438 971.8L28.4074 880.557L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M680 680L0 728.942V631.058L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M680 680L28.1388 480.319L63.4526 389.028L680 680Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M474.264 30.0247L680 680L383.306 66.186L474.264 30.0247Z"}
fill={"white"}
className={`w-element`} />
<path
d={"M233.775 164.561L680 680L164.561 233.775L233.775 164.561Z"}
fill={"white"}
className={`w-element`} />
</svg>
</div>
</div>
</div>
</div>
</div>
</section>
<section
id={"reason"}
opacity-entry={"true"}
className={`w-element c14fwb78 cy4qr4q ${"cpa_why"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha c1kuwk32 c4gouwl cfko4c5 cmcjy5s ctbzh2u c16agd5o caxr30d caqe5xq c1c8uskx cmbbocb c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element cm8azr1 c176ublo c1viuxvl c9bgjuu c13qfgf c10rtf3d c168g7wn c1ml4qhu ${"cpa_why_grid"}`}>
<div
className={`w-element c1xirpce carupg6 cazdpea c1g67dw5 c74orcy c1g7apm c7xx1rg cdzvqh6 cfko4c5 cmcjy5s c14u2f0p c1msgjcw ${"cpa_why_img-wrap"}`}>
<Image
src={"/turtleci-import/images/1Mil-campaign-img-2_1.avif"}
loading={"lazy"}
width={70}
alt={"Startups choose TurtleCI for its various values"}
className={`w-image cckc7l3 c5z8l3h ccwjfpv cm96mtf ${"cpa_why_img"}`} />
</div>
<div
id={"w-node-_54bc519d-9f2d-3514-5759-2f61a5f2a8a5-e97e7802"}
className={`w-element c14fwb78 c1ie99sc c1svrc9o cc7k8p0 ${"cpa_why_content"}`}>
<h2
className={`w-element c8g4rbm c6s7woo cxgq9es ${"text-wrap-balance text-weight-semibold"}`}>
{"Why Startups Choose "}
<span
className={`w-element c1noxpoj c18ghmj7 ${"text-color-brand"}`}>
{"TurtleCI"}
</span>
</h2>
<div
className={`w-element c1kuwk32 c58vwce cgz2jcg c139r9rg c1toovlm c8o4rha ${"spacer-48px"}`} />
<div
className={`w-element c1s0k8lp c1irosg5 cbplqux c1qu1cb1 cdzvqh6 ${"cpa_why_list"}`}>
<div
className={`w-element c12lvo49 c8gnt76 c1y39kfe c10je7ri cdzvqh6 chq3ky0 cfe1vus c149hts6 csuuk33 c1ou5bby c7xx1s3 cubhqip cr5vxx5 ${"cpa_why_item"}`}>
<div
className={`w-element cd66rhb ckq8af1 c1noxpoj c1a91cgv cdznpsm c1kkah6p ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_why_item_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 32 32"}
fill={"none"}
className={`w-element`}>
<path
d={"M15.9998 29.3332C17.7511 29.3353 19.4856 28.9914 21.1035 28.3212C22.7215 27.651 24.1911 26.6677 25.4278 25.4278C26.6677 24.1911 27.651 22.7215 28.3212 21.1035C28.9914 19.4856 29.3353 17.7511 29.3332 15.9998C29.3353 14.2486 28.9914 12.5141 28.3212 10.8962C27.651 9.27822 26.6677 7.80863 25.4278 6.57185C24.1911 5.33195 22.7215 4.34866 21.1035 3.67846C19.4856 3.00826 17.7511 2.66435 15.9998 2.66651C14.2486 2.66435 12.5141 3.00826 10.8962 3.67846C9.27822 4.34866 7.80863 5.33195 6.57185 6.57185C5.33195 7.80863 4.34866 9.27822 3.67846 10.8962C3.00826 12.5141 2.66435 14.2486 2.66651 15.9998C2.66435 17.7511 3.00826 19.4856 3.67846 21.1035C4.34866 22.7215 5.33195 24.1911 6.57185 25.4278C7.80863 26.6677 9.27822 27.651 10.8962 28.3212C12.5141 28.9914 14.2486 29.3353 15.9998 29.3332Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M10.6665 16L14.6665 20L22.6665 12"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c13dsrcw cvv99b2 cbplqux c1qu1cb1 covda95 c1mjz48u c1ea4sxw cdzvqh6 ${"cpa_why_item_content"}`}>
<h3
className={`w-element c14pm6dm c8g4rbm c3bspns ${"text-size-md text-weight-semibold text-style-allcaps"}`}>
{"Solve Resource Limitations"}
</h3>
<p
className={`w-element`}>
{"No need for expensive infrastructure or dedicated DevOps engineers."}
</p>
</div>
</div>
<div
className={`w-element c12lvo49 c8gnt76 c1y39kfe c10je7ri cdzvqh6 chq3ky0 cfe1vus c149hts6 csuuk33 c1ou5bby c7xx1s3 cubhqip cr5vxx5 ${"cpa_why_item"}`}>
<div
className={`w-element cd66rhb ckq8af1 c1noxpoj c1a91cgv cdznpsm c1kkah6p ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_why_item_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 32 32"}
fill={"none"}
className={`w-element`}>
<path
d={"M15.9998 29.3332C17.7511 29.3353 19.4856 28.9914 21.1035 28.3212C22.7215 27.651 24.1911 26.6677 25.4278 25.4278C26.6677 24.1911 27.651 22.7215 28.3212 21.1035C28.9914 19.4856 29.3353 17.7511 29.3332 15.9998C29.3353 14.2486 28.9914 12.5141 28.3212 10.8962C27.651 9.27822 26.6677 7.80863 25.4278 6.57185C24.1911 5.33195 22.7215 4.34866 21.1035 3.67846C19.4856 3.00826 17.7511 2.66435 15.9998 2.66651C14.2486 2.66435 12.5141 3.00826 10.8962 3.67846C9.27822 4.34866 7.80863 5.33195 6.57185 6.57185C5.33195 7.80863 4.34866 9.27822 3.67846 10.8962C3.00826 12.5141 2.66435 14.2486 2.66651 15.9998C2.66435 17.7511 3.00826 19.4856 3.67846 21.1035C4.34866 22.7215 5.33195 24.1911 6.57185 25.4278C7.80863 26.6677 9.27822 27.651 10.8962 28.3212C12.5141 28.9914 14.2486 29.3353 15.9998 29.3332Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M10.6665 16L14.6665 20L22.6665 12"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c13dsrcw cvv99b2 cbplqux c1qu1cb1 covda95 c1mjz48u c1ea4sxw cdzvqh6 ${"cpa_why_item_content"}`}>
<h3
className={`w-element c14pm6dm c8g4rbm c3bspns ${"text-size-md text-weight-semibold text-style-allcaps"}`}>
{"Accelerate Time to Market"}
</h3>
<p
className={`w-element`}>
{"Deliver features and updates faster with streamlined workflows."}
</p>
</div>
</div>
<div
className={`w-element c12lvo49 c8gnt76 c1y39kfe c10je7ri cdzvqh6 chq3ky0 cfe1vus c149hts6 csuuk33 c1ou5bby c7xx1s3 cubhqip cr5vxx5 ${"cpa_why_item"}`}>
<div
className={`w-element cd66rhb ckq8af1 c1noxpoj c1a91cgv cdznpsm c1kkah6p ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_why_item_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 32 32"}
fill={"none"}
className={`w-element`}>
<path
d={"M15.9998 29.3332C17.7511 29.3353 19.4856 28.9914 21.1035 28.3212C22.7215 27.651 24.1911 26.6677 25.4278 25.4278C26.6677 24.1911 27.651 22.7215 28.3212 21.1035C28.9914 19.4856 29.3353 17.7511 29.3332 15.9998C29.3353 14.2486 28.9914 12.5141 28.3212 10.8962C27.651 9.27822 26.6677 7.80863 25.4278 6.57185C24.1911 5.33195 22.7215 4.34866 21.1035 3.67846C19.4856 3.00826 17.7511 2.66435 15.9998 2.66651C14.2486 2.66435 12.5141 3.00826 10.8962 3.67846C9.27822 4.34866 7.80863 5.33195 6.57185 6.57185C5.33195 7.80863 4.34866 9.27822 3.67846 10.8962C3.00826 12.5141 2.66435 14.2486 2.66651 15.9998C2.66435 17.7511 3.00826 19.4856 3.67846 21.1035C4.34866 22.7215 5.33195 24.1911 6.57185 25.4278C7.80863 26.6677 9.27822 27.651 10.8962 28.3212C12.5141 28.9914 14.2486 29.3353 15.9998 29.3332Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M10.6665 16L14.6665 20L22.6665 12"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c13dsrcw cvv99b2 cbplqux c1qu1cb1 covda95 c1mjz48u c1ea4sxw cdzvqh6 ${"cpa_why_item_content"}`}>
<h3
className={`w-element c14pm6dm c8g4rbm c3bspns ${"text-size-md text-weight-semibold text-style-allcaps"}`}>
{"Simplify Complex Workflows"}
</h3>
<p
className={`w-element`}>
{"Customizable, pre-built modules save time and reduce errors."}
</p>
</div>
</div>
<div
className={`w-element c12lvo49 c8gnt76 c1y39kfe c10je7ri cdzvqh6 chq3ky0 cfe1vus c149hts6 csuuk33 c1ou5bby c7xx1s3 cubhqip cr5vxx5 ${"cpa_why_item"}`}>
<div
className={`w-element cd66rhb ckq8af1 c1noxpoj c1a91cgv cdznpsm c1kkah6p ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_why_item_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 32 32"}
fill={"none"}
className={`w-element`}>
<path
d={"M15.9998 29.3332C17.7511 29.3353 19.4856 28.9914 21.1035 28.3212C22.7215 27.651 24.1911 26.6677 25.4278 25.4278C26.6677 24.1911 27.651 22.7215 28.3212 21.1035C28.9914 19.4856 29.3353 17.7511 29.3332 15.9998C29.3353 14.2486 28.9914 12.5141 28.3212 10.8962C27.651 9.27822 26.6677 7.80863 25.4278 6.57185C24.1911 5.33195 22.7215 4.34866 21.1035 3.67846C19.4856 3.00826 17.7511 2.66435 15.9998 2.66651C14.2486 2.66435 12.5141 3.00826 10.8962 3.67846C9.27822 4.34866 7.80863 5.33195 6.57185 6.57185C5.33195 7.80863 4.34866 9.27822 3.67846 10.8962C3.00826 12.5141 2.66435 14.2486 2.66651 15.9998C2.66435 17.7511 3.00826 19.4856 3.67846 21.1035C4.34866 22.7215 5.33195 24.1911 6.57185 25.4278C7.80863 26.6677 9.27822 27.651 10.8962 28.3212C12.5141 28.9914 14.2486 29.3353 15.9998 29.3332Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M10.6665 16L14.6665 20L22.6665 12"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c13dsrcw cvv99b2 cbplqux c1qu1cb1 covda95 c1mjz48u c1ea4sxw cdzvqh6 ${"cpa_why_item_content"}`}>
<h3
className={`w-element c14pm6dm c8g4rbm c3bspns ${"text-size-md text-weight-semibold text-style-allcaps"}`}>
{"Enable Collaboration and Scalability"}
</h3>
<p
className={`w-element`}>
{"Work seamlessly in real-time and scale effortlessly as your startup grows."}
</p>
</div>
</div>
<div
className={`w-element c12lvo49 c8gnt76 c1y39kfe c10je7ri cdzvqh6 chq3ky0 cfe1vus c149hts6 csuuk33 c1ou5bby c7xx1s3 cubhqip cr5vxx5 ${"cpa_why_item"}`}>
<div
className={`w-element cd66rhb ckq8af1 c1noxpoj c1a91cgv cdznpsm c1kkah6p ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_why_item_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 32 32"}
fill={"none"}
className={`w-element`}>
<path
d={"M15.9998 29.3332C17.7511 29.3353 19.4856 28.9914 21.1035 28.3212C22.7215 27.651 24.1911 26.6677 25.4278 25.4278C26.6677 24.1911 27.651 22.7215 28.3212 21.1035C28.9914 19.4856 29.3353 17.7511 29.3332 15.9998C29.3353 14.2486 28.9914 12.5141 28.3212 10.8962C27.651 9.27822 26.6677 7.80863 25.4278 6.57185C24.1911 5.33195 22.7215 4.34866 21.1035 3.67846C19.4856 3.00826 17.7511 2.66435 15.9998 2.66651C14.2486 2.66435 12.5141 3.00826 10.8962 3.67846C9.27822 4.34866 7.80863 5.33195 6.57185 6.57185C5.33195 7.80863 4.34866 9.27822 3.67846 10.8962C3.00826 12.5141 2.66435 14.2486 2.66651 15.9998C2.66435 17.7511 3.00826 19.4856 3.67846 21.1035C4.34866 22.7215 5.33195 24.1911 6.57185 25.4278C7.80863 26.6677 9.27822 27.651 10.8962 28.3212C12.5141 28.9914 14.2486 29.3353 15.9998 29.3332Z"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M10.6665 16L14.6665 20L22.6665 12"}
stroke={"currentColor"}
strokeWidth={"3"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c13dsrcw cvv99b2 cbplqux c1qu1cb1 covda95 c1mjz48u c1ea4sxw cdzvqh6 ${"cpa_why_item_content"}`}>
<h3
className={`w-element c14pm6dm c8g4rbm c3bspns ${"text-size-md text-weight-semibold text-style-allcaps"}`}>
{"Reduce Risks with All-In-One Solution"}
</h3>
<p
className={`w-element`}>
{"Integrate essential CI/CD tools for a reliable, secure pipeline."}
</p>
</div>
</div>
</div>
<div
className={`w-element c1kuwk32 c58vwce cgz2jcg c139r9rg c1toovlm c8o4rha ${"spacer-48px"}`} />
<a
href={"https://www.turtleci.io/"}
target={"_blank"}
className={`w-element c1a91cgv cdznpsm c1kkah6p c1jbh7w8 c2w17zg cqm1fiw c1rkddb1 ckwuexc cmh603w cu73m4q c1xn1ugd ${"button-wrap w-inline-block"}`}>
<button
className={`w-element c13dsrcw c428y35 c1kuwk32 c14ikxcr c1u0b96l c16wixva c1yjsk66 c1rrwas8 c1g7apm c7xx1rg c1yzoccs c14umb8c c1eka9gg crkjqv8 c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 csemwku c1sg3im2 crld1xj ccfi1nz c1juhpdv cwek1tm ${"button-outline"}`}>
<div
className={`w-element`}>
{"SEE HOW WE HELP STARTUPS"}
</div>
</button>
</a>
</div>
</div>
</div>
</div>
</section>
<section
id={"apply"}
className={`w-element c1sb376y cwqsbw c1vtrtst ${"cpa_apply"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha c1kuwk32 c4gouwl cfko4c5 cmcjy5s ctbzh2u c16agd5o caxr30d caqe5xq c1c8uskx cmbbocb c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
opacity-entry={"true"}
className={`w-element c7q667e carupg6 cazdpea c1g67dw5 c74orcy cwqsbw c1kuo939 c1vtrtst c1sxiycd cqq5fes c3ro169 cezqez3 ckrcdps c1va3hnz c1jhhju3 c169rbwe c1858q5l c1nkc5xz ${"cpa_apply_main"}`}>
<h2
className={`w-element c8g4rbm c1fs6dqh ${"text-weight-semibold text-align-center"}`}>
{"Join the Program and get your Free Subscription"}
</h2>
<div
className={`w-element c1kuwk32 c8dohr6 ca7ovlo ${"spacer-64px"}`} />
<div
className={`w-element c1viuxvl c9bgjuu c13qfgf c10rtf3d c168g7wn c1ml4qhu ${"cpa_apply_grid"}`}>
<div
className={`w-element c1viq0dj c1kuo939 c1v7lzh4 c1qx9vin cxedn37 c1g948a1 cz23m1w cpkmgqt c1vjymjx cpg0w0n c1krxrp6 c1le6lzr ckf5n2u c2x8drr ${"cpa_apply_form-block w-form"}`}>
<form
id={"wf-form-1M-Campaign-Application"}
name={"wf-form-1M-Campaign-Application"}
data-name={"1M Campaign Application"}
method={"get"}
data-wf-page-id={"67a1e10ab010e0ebe97e7802"}
data-wf-element-id={"92c0b494-959b-6377-a300-e6c1a771c503"}
className={`w-element ${"cpa_apply_form"}`}>
<div
className={`w-element c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly ${"w-embed"}`}>
<div
hidden={true}
className={`w-element`}>
<Input
type={"hidden"}
name={"tags"}
value={"17802"}
className={`w-element`} />
</div>
</div>
<div
className={`w-element c1svrc9o cc7k8p0 ${"cpa_apply_step"}`}>
<div
className={`w-element c20zflo c8g4rbm cd92vsb ${"text-size-lg text-weight-semibold"}`}>
{"Step 1."}
</div>
<div
className={`w-element cte2vf8 c8g4rbm cnsje4e c1noxpoj c18ghmj7 c43eehi c1gkpfk9 ${"heading-style-h4 text-weight-semibold text-color-brand"}`}>
{"Fill Out this Form"}
</div>
</div>
<div
className={`w-element c1kuwk32 c14fwb78 ca7ovlo cqyyj0l c1sgfhaw ${"spacer-40px"}`} />
<div
className={`w-element c1le6v90 c1e7vj8g cdzvqh6 cwd1fig c6167c6 chq3ky0 cfe1vus c15h812d c1n016qu c1ou5bby c7xx1s3 ${"form_row is-campaign"}`}>
<div
className={`w-element covda95 c1mjz48u c1ea4sxw c2tlpf1 ${"form_field-wrap is-campaign"}`}>
<label
htmlFor={"MMERGE"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"Your Name"}
</label>
<Input
maxLength={256}
name={"MMERGE5"}
data-name={"MMERGE5"}
placeholder={"John Smith"}
type={"text"}
id={"MMERGE"}
required={true}
className={`w-element cm4kqbl c1hk3iai c1fgdw21 c5c9eqz c1r7r9op cjge562 cklimrq cjps8te c71aqp4 c1xu9ni5 cye2xyr c13pgzpp cgz9fe1 cwfsyhm ck8x7n0 cfw1inn c11djwk1 ci007ia c1ro25gr c1kuwk32 c1i2dd9i c5fdr0g c1joexfe c1hi5fbc c5io6td c882zc0 cuvokq6 c1029fez c1e6md11 c1oi4tev c13ku895 c1ha0zq3 c1gpg3nf cogbpki c198in2q c1aw7qc6 cy35f9v cxkrb62 ${"form_input w-input"}`} />
</div>
<div
className={`w-element covda95 c1mjz48u c1ea4sxw c2tlpf1 ${"form_field-wrap is-campaign"}`}>
<label
htmlFor={"EMAIL-3"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"Your Email"}
</label>
<Input
maxLength={256}
name={"EMAIL-3"}
data-name={"EMAIL 3"}
placeholder={"john@gmail.com"}
type={"email"}
id={"EMAIL-3"}
required={true}
className={`w-element cm4kqbl c1hk3iai c1fgdw21 c5c9eqz c1r7r9op cjge562 cklimrq cjps8te c71aqp4 c1xu9ni5 cye2xyr c13pgzpp cgz9fe1 cwfsyhm ck8x7n0 cfw1inn c11djwk1 ci007ia c1ro25gr c1kuwk32 c1i2dd9i c5fdr0g c1joexfe c1hi5fbc c5io6td c882zc0 cuvokq6 c1029fez c1e6md11 c1oi4tev c13ku895 c1ha0zq3 c1gpg3nf cogbpki c198in2q c1aw7qc6 cy35f9v cxkrb62 ${"form_input w-input"}`} />
</div>
</div>
<div
className={`w-element c1le6v90 c1e7vj8g cdzvqh6 cwd1fig c6167c6 chq3ky0 cfe1vus c15h812d c1n016qu c1ou5bby c7xx1s3 ${"form_row is-campaign"}`}>
<div
className={`w-element covda95 c1mjz48u c1ea4sxw c2tlpf1 ${"form_field-wrap is-campaign"}`}>
<label
htmlFor={"GITID"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"GitHub Organisation ID"}
</label>
<Input
maxLength={256}
name={"GITID"}
data-name={"GITID"}
placeholder={"62913829"}
type={"text"}
id={"GITID"}
required={true}
className={`w-element cm4kqbl c1hk3iai c1fgdw21 c5c9eqz c1r7r9op cjge562 cklimrq cjps8te c71aqp4 c1xu9ni5 cye2xyr c13pgzpp cgz9fe1 cwfsyhm ck8x7n0 cfw1inn c11djwk1 ci007ia c1ro25gr c1kuwk32 c1i2dd9i c5fdr0g c1joexfe c1hi5fbc c5io6td c882zc0 cuvokq6 c1029fez c1e6md11 c1oi4tev c13ku895 c1ha0zq3 c1gpg3nf cogbpki c198in2q c1aw7qc6 cy35f9v cxkrb62 ${"form_input w-input"}`} />
</div>
<div
className={`w-element covda95 c1mjz48u c1ea4sxw c2tlpf1 ${"form_field-wrap is-campaign"}`}>
<label
htmlFor={"TEAMSIZE"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"Your Team Size"}
</label>
<Select
id={"TEAMSIZE"}
name={"TEAMSIZE"}
data-name={"TEAMSIZE"}
required={true}
className={`w-element cm4kqbl c1hk3iai cqi8r21 c5c9eqz c1r7r9op cjge562 cklimrq cjps8te ce9b4sv c1xu9ni5 c17jqo6w c13pgzpp cgz9fe1 cwfsyhm ck8x7n0 cfw1inn c11djwk1 ci007ia c1ro25gr c1kuwk32 c1i2dd9i c5fdr0g c1joexfe cajthak c2ye6xu c19ohx5n c1hi5fbc cn1m4mf c5io6td c882zc0 cuvokq6 c1029fez c1e6md11 c1oi4tev c13ku895 c1ha0zq3 c1gpg3nf cogbpki c198in2q c1aw7qc6 cy35f9v cxkrb62 c1iiet6j ${"form_input is-select-input w-select"}`}>
<option
value={""}
className={`w-element`}>
{"Select team size"}
</option>
<option
value={"1 - 10"}
className={`w-element`}>
{"1 - 10"}
</option>
<option
value={"11 - 25"}
className={`w-element`}>
{"11 - 25"}
</option>
<option
value={"26 - 35"}
className={`w-element`}>
{"26 - 35"}
</option>
<option
value={"36 - 50"}
className={`w-element`}>
{"36 - 50"}
</option>
</Select>
</div>
</div>
<div
id={"industry-other-wrap"}
className={`w-element covda95 c1mjz48u c1ea4sxw c2tlpf1 cmh603w ${"form_field-wrap is-campaign is-industry-other"}`}>
<label
htmlFor={"Industry-Other"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"Industry"}
</label>
<Input
maxLength={256}
name={"Industry-Other"}
data-name={"Industry (Other)"}
placeholder={"Your industry"}
type={"text"}
id={"Industry-Other"}
className={`w-element cm4kqbl c1hk3iai c1fgdw21 c5c9eqz c1r7r9op cjge562 cklimrq cjps8te c71aqp4 c1xu9ni5 cye2xyr c13pgzpp cgz9fe1 cwfsyhm ck8x7n0 cfw1inn c11djwk1 ci007ia c1ro25gr c1kuwk32 c1i2dd9i c5fdr0g c1joexfe c1hi5fbc c5io6td c882zc0 cuvokq6 c1029fez c1e6md11 c1oi4tev c13ku895 c1ha0zq3 c1gpg3nf cogbpki c198in2q c1aw7qc6 cy35f9v cxkrb62 ${"form_input w-input"}`} />
</div>
<div
className={`w-element covda95 c1mjz48u c1ea4sxw c2tlpf1 ${"form_field-wrap is-campaign"}`}>
<label
htmlFor={"COUNTRY-3"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"Your Country"}
</label>
<Select
id={"COUNTRY-3"}
name={"COUNTRY"}
data-name={"COUNTRY"}
className={`w-element cm4kqbl c1hk3iai cqi8r21 c5c9eqz c1r7r9op cjge562 cklimrq cjps8te ce9b4sv c1xu9ni5 c17jqo6w c13pgzpp cgz9fe1 cwfsyhm ck8x7n0 cfw1inn c11djwk1 ci007ia c1ro25gr c1kuwk32 c1i2dd9i c5fdr0g c1joexfe cajthak c2ye6xu c19ohx5n c1hi5fbc cn1m4mf c5io6td c882zc0 cuvokq6 c1029fez c1e6md11 c1oi4tev c13ku895 c1ha0zq3 c1gpg3nf cogbpki c198in2q c1aw7qc6 cy35f9v cxkrb62 c1iiet6j ${"form_input is-select-input w-select"}`}>
<option
value={""}
className={`w-element`}>
{"Select country"}
</option>
<option
value={"Afghanistan"}
className={`w-element`}>
{"Afghanistan"}
</option>
<option
value={" Albania"}
className={`w-element`}>
{" Albania"}
</option>
<option
value={" Algeria"}
className={`w-element`}>
{" Algeria"}
</option>
<option
value={" Andorra"}
className={`w-element`}>
{" Andorra"}
</option>
<option
value={" Angola"}
className={`w-element`}>
{" Angola"}
</option>
<option
value={" Antigua and Barbuda"}
className={`w-element`}>
{" Antigua and Barbuda"}
</option>
<option
value={" Argentina"}
className={`w-element`}>
{" Argentina"}
</option>
<option
value={" Armenia"}
className={`w-element`}>
{" Armenia"}
</option>
<option
value={" Australia"}
className={`w-element`}>
{" Australia"}
</option>
<option
value={" Austria"}
className={`w-element`}>
{" Austria"}
</option>
<option
value={" Azerbaijan"}
className={`w-element`}>
{" Azerbaijan"}
</option>
<option
value={" Bahamas"}
className={`w-element`}>
{" Bahamas"}
</option>
<option
value={" Bahrain"}
className={`w-element`}>
{" Bahrain"}
</option>
<option
value={" Bangladesh"}
className={`w-element`}>
{" Bangladesh"}
</option>
<option
value={" Barbados"}
className={`w-element`}>
{" Barbados"}
</option>
<option
value={" Belarus"}
className={`w-element`}>
{" Belarus"}
</option>
<option
value={" Belgium"}
className={`w-element`}>
{" Belgium"}
</option>
<option
value={" Belize"}
className={`w-element`}>
{" Belize"}
</option>
<option
value={" Benin"}
className={`w-element`}>
{" Benin"}
</option>
<option
value={" Bhutan"}
className={`w-element`}>
{" Bhutan"}
</option>
<option
value={" Bolivia"}
className={`w-element`}>
{" Bolivia"}
</option>
<option
value={" Bosnia and Herzegovina"}
className={`w-element`}>
{" Bosnia and Herzegovina"}
</option>
<option
value={" Botswana"}
className={`w-element`}>
{" Botswana"}
</option>
<option
value={" Brazil"}
className={`w-element`}>
{" Brazil"}
</option>
<option
value={" Brunei"}
className={`w-element`}>
{" Brunei"}
</option>
<option
value={" Bulgaria"}
className={`w-element`}>
{" Bulgaria"}
</option>
<option
value={" Burkina Faso"}
className={`w-element`}>
{" Burkina Faso"}
</option>
<option
value={" Burundi"}
className={`w-element`}>
{" Burundi"}
</option>
<option
value={" Cabo Verde"}
className={`w-element`}>
{" Cabo Verde"}
</option>
<option
value={" Cambodia"}
className={`w-element`}>
{" Cambodia"}
</option>
<option
value={" Cameroon"}
className={`w-element`}>
{" Cameroon"}
</option>
<option
value={" Canada"}
className={`w-element`}>
{" Canada"}
</option>
<option
value={" Central African Republic"}
className={`w-element`}>
{" Central African Republic"}
</option>
<option
value={" Chad"}
className={`w-element`}>
{" Chad"}
</option>
<option
value={" Chile"}
className={`w-element`}>
{" Chile"}
</option>
<option
value={" China"}
className={`w-element`}>
{" China"}
</option>
<option
value={" Colombia"}
className={`w-element`}>
{" Colombia"}
</option>
<option
value={" Comoros"}
className={`w-element`}>
{" Comoros"}
</option>
<option
value={" Congo (Congo-Brazzaville)"}
className={`w-element`}>
{" Congo (Congo-Brazzaville)"}
</option>
<option
value={" Costa Rica"}
className={`w-element`}>
{" Costa Rica"}
</option>
<option
value={" Croatia"}
className={`w-element`}>
{" Croatia"}
</option>
<option
value={" Cuba"}
className={`w-element`}>
{" Cuba"}
</option>
<option
value={" Cyprus"}
className={`w-element`}>
{" Cyprus"}
</option>
<option
value={" Czechia (Czech Republic)"}
className={`w-element`}>
{" Czechia (Czech Republic)"}
</option>
<option
value={" Democratic Republic of the Congo"}
className={`w-element`}>
{" Democratic Republic of the Congo"}
</option>
<option
value={" Denmark"}
className={`w-element`}>
{" Denmark"}
</option>
<option
value={" Djibouti"}
className={`w-element`}>
{" Djibouti"}
</option>
<option
value={" Dominica"}
className={`w-element`}>
{" Dominica"}
</option>
<option
value={" Dominican Republic"}
className={`w-element`}>
{" Dominican Republic"}
</option>
<option
value={" Ecuador"}
className={`w-element`}>
{" Ecuador"}
</option>
<option
value={" Egypt"}
className={`w-element`}>
{" Egypt"}
</option>
<option
value={" El Salvador"}
className={`w-element`}>
{" El Salvador"}
</option>
<option
value={" Equatorial Guinea"}
className={`w-element`}>
{" Equatorial Guinea"}
</option>
<option
value={" Eritrea"}
className={`w-element`}>
{" Eritrea"}
</option>
<option
value={" Estonia"}
className={`w-element`}>
{" Estonia"}
</option>
<option
value={" Eswatini (Swaziland)"}
className={`w-element`}>
{" Eswatini (Swaziland)"}
</option>
<option
value={" Ethiopia"}
className={`w-element`}>
{" Ethiopia"}
</option>
<option
value={" Fiji"}
className={`w-element`}>
{" Fiji"}
</option>
<option
value={" Finland"}
className={`w-element`}>
{" Finland"}
</option>
<option
value={" France"}
className={`w-element`}>
{" France"}
</option>
<option
value={" Gabon"}
className={`w-element`}>
{" Gabon"}
</option>
<option
value={" Gambia"}
className={`w-element`}>
{" Gambia"}
</option>
<option
value={" Georgia"}
className={`w-element`}>
{" Georgia"}
</option>
<option
value={" Germany"}
className={`w-element`}>
{" Germany"}
</option>
<option
value={" Ghana"}
className={`w-element`}>
{" Ghana"}
</option>
<option
value={" Greece"}
className={`w-element`}>
{" Greece"}
</option>
<option
value={" Grenada"}
className={`w-element`}>
{" Grenada"}
</option>
<option
value={" Guatemala"}
className={`w-element`}>
{" Guatemala"}
</option>
<option
value={" Guinea"}
className={`w-element`}>
{" Guinea"}
</option>
<option
value={" Guinea-Bissau"}
className={`w-element`}>
{" Guinea-Bissau"}
</option>
<option
value={" Guyana"}
className={`w-element`}>
{" Guyana"}
</option>
<option
value={" Haiti"}
className={`w-element`}>
{" Haiti"}
</option>
<option
value={" Honduras"}
className={`w-element`}>
{" Honduras"}
</option>
<option
value={" Hungary"}
className={`w-element`}>
{" Hungary"}
</option>
<option
value={" Iceland"}
className={`w-element`}>
{" Iceland"}
</option>
<option
value={" India"}
className={`w-element`}>
{" India"}
</option>
<option
value={" Indonesia"}
className={`w-element`}>
{" Indonesia"}
</option>
<option
value={" Iran"}
className={`w-element`}>
{" Iran"}
</option>
<option
value={" Iraq"}
className={`w-element`}>
{" Iraq"}
</option>
<option
value={" Ireland"}
className={`w-element`}>
{" Ireland"}
</option>
<option
value={" Israel"}
className={`w-element`}>
{" Israel"}
</option>
<option
value={" Italy"}
className={`w-element`}>
{" Italy"}
</option>
<option
value={" Jamaica"}
className={`w-element`}>
{" Jamaica"}
</option>
<option
value={" Japan"}
className={`w-element`}>
{" Japan"}
</option>
<option
value={" Jordan"}
className={`w-element`}>
{" Jordan"}
</option>
<option
value={" Kazakhstan"}
className={`w-element`}>
{" Kazakhstan"}
</option>
<option
value={" Kenya"}
className={`w-element`}>
{" Kenya"}
</option>
<option
value={" Kiribati"}
className={`w-element`}>
{" Kiribati"}
</option>
<option
value={" Kuwait"}
className={`w-element`}>
{" Kuwait"}
</option>
<option
value={" Kyrgyzstan"}
className={`w-element`}>
{" Kyrgyzstan"}
</option>
<option
value={" Laos"}
className={`w-element`}>
{" Laos"}
</option>
<option
value={" Latvia"}
className={`w-element`}>
{" Latvia"}
</option>
<option
value={" Lebanon"}
className={`w-element`}>
{" Lebanon"}
</option>
<option
value={" Lesotho"}
className={`w-element`}>
{" Lesotho"}
</option>
<option
value={" Liberia"}
className={`w-element`}>
{" Liberia"}
</option>
<option
value={" Libya"}
className={`w-element`}>
{" Libya"}
</option>
<option
value={" Liechtenstein"}
className={`w-element`}>
{" Liechtenstein"}
</option>
<option
value={" Lithuania"}
className={`w-element`}>
{" Lithuania"}
</option>
<option
value={" Luxembourg"}
className={`w-element`}>
{" Luxembourg"}
</option>
<option
value={" Madagascar"}
className={`w-element`}>
{" Madagascar"}
</option>
<option
value={" Malawi"}
className={`w-element`}>
{" Malawi"}
</option>
<option
value={" Malaysia"}
className={`w-element`}>
{" Malaysia"}
</option>
<option
value={" Maldives"}
className={`w-element`}>
{" Maldives"}
</option>
<option
value={" Mali"}
className={`w-element`}>
{" Mali"}
</option>
<option
value={" Malta"}
className={`w-element`}>
{" Malta"}
</option>
<option
value={" Marshall Islands"}
className={`w-element`}>
{" Marshall Islands"}
</option>
<option
value={" Mauritania"}
className={`w-element`}>
{" Mauritania"}
</option>
<option
value={" Mauritius"}
className={`w-element`}>
{" Mauritius"}
</option>
<option
value={" Mexico"}
className={`w-element`}>
{" Mexico"}
</option>
<option
value={" Micronesia"}
className={`w-element`}>
{" Micronesia"}
</option>
<option
value={" Moldova"}
className={`w-element`}>
{" Moldova"}
</option>
<option
value={" Monaco"}
className={`w-element`}>
{" Monaco"}
</option>
<option
value={" Mongolia"}
className={`w-element`}>
{" Mongolia"}
</option>
<option
value={" Montenegro"}
className={`w-element`}>
{" Montenegro"}
</option>
<option
value={" Morocco"}
className={`w-element`}>
{" Morocco"}
</option>
<option
value={" Mozambique"}
className={`w-element`}>
{" Mozambique"}
</option>
<option
value={" Myanmar (Burma)"}
className={`w-element`}>
{" Myanmar (Burma)"}
</option>
<option
value={" Namibia"}
className={`w-element`}>
{" Namibia"}
</option>
<option
value={" Nauru"}
className={`w-element`}>
{" Nauru"}
</option>
<option
value={" Nepal"}
className={`w-element`}>
{" Nepal"}
</option>
<option
value={" Netherlands"}
className={`w-element`}>
{" Netherlands"}
</option>
<option
value={" New Zealand"}
className={`w-element`}>
{" New Zealand"}
</option>
<option
value={" Nicaragua"}
className={`w-element`}>
{" Nicaragua"}
</option>
<option
value={" Niger"}
className={`w-element`}>
{" Niger"}
</option>
<option
value={" Nigeria"}
className={`w-element`}>
{" Nigeria"}
</option>
<option
value={" North Korea"}
className={`w-element`}>
{" North Korea"}
</option>
<option
value={" North Macedonia"}
className={`w-element`}>
{" North Macedonia"}
</option>
<option
value={" Norway"}
className={`w-element`}>
{" Norway"}
</option>
<option
value={" Oman"}
className={`w-element`}>
{" Oman"}
</option>
<option
value={" Pakistan"}
className={`w-element`}>
{" Pakistan"}
</option>
<option
value={" Palau"}
className={`w-element`}>
{" Palau"}
</option>
<option
value={" Panama"}
className={`w-element`}>
{" Panama"}
</option>
<option
value={" Papua New Guinea"}
className={`w-element`}>
{" Papua New Guinea"}
</option>
<option
value={" Paraguay"}
className={`w-element`}>
{" Paraguay"}
</option>
<option
value={" Peru"}
className={`w-element`}>
{" Peru"}
</option>
<option
value={" Philippines"}
className={`w-element`}>
{" Philippines"}
</option>
<option
value={" Poland"}
className={`w-element`}>
{" Poland"}
</option>
<option
value={" Portugal"}
className={`w-element`}>
{" Portugal"}
</option>
<option
value={" Qatar"}
className={`w-element`}>
{" Qatar"}
</option>
<option
value={" Romania"}
className={`w-element`}>
{" Romania"}
</option>
<option
value={" Russia"}
className={`w-element`}>
{" Russia"}
</option>
<option
value={" Rwanda"}
className={`w-element`}>
{" Rwanda"}
</option>
<option
value={" Saint Kitts and Nevis"}
className={`w-element`}>
{" Saint Kitts and Nevis"}
</option>
<option
value={" Saint Lucia"}
className={`w-element`}>
{" Saint Lucia"}
</option>
<option
value={" Saint Vincent and the Grenadines"}
className={`w-element`}>
{" Saint Vincent and the Grenadines"}
</option>
<option
value={" Samoa"}
className={`w-element`}>
{" Samoa"}
</option>
<option
value={" San Marino"}
className={`w-element`}>
{" San Marino"}
</option>
<option
value={" Sao Tome and Principe"}
className={`w-element`}>
{" Sao Tome and Principe"}
</option>
<option
value={" Saudi Arabia"}
className={`w-element`}>
{" Saudi Arabia"}
</option>
<option
value={" Senegal"}
className={`w-element`}>
{" Senegal"}
</option>
<option
value={" Serbia"}
className={`w-element`}>
{" Serbia"}
</option>
<option
value={" Seychelles"}
className={`w-element`}>
{" Seychelles"}
</option>
<option
value={" Sierra Leone"}
className={`w-element`}>
{" Sierra Leone"}
</option>
<option
value={" Singapore"}
className={`w-element`}>
{" Singapore"}
</option>
<option
value={" Slovakia"}
className={`w-element`}>
{" Slovakia"}
</option>
<option
value={" Slovenia"}
className={`w-element`}>
{" Slovenia"}
</option>
<option
value={" Solomon Islands"}
className={`w-element`}>
{" Solomon Islands"}
</option>
<option
value={" Somalia"}
className={`w-element`}>
{" Somalia"}
</option>
<option
value={" South Africa"}
className={`w-element`}>
{" South Africa"}
</option>
<option
value={" South Korea"}
className={`w-element`}>
{" South Korea"}
</option>
<option
value={" South Sudan"}
className={`w-element`}>
{" South Sudan"}
</option>
<option
value={" Spain"}
className={`w-element`}>
{" Spain"}
</option>
<option
value={" Sri Lanka"}
className={`w-element`}>
{" Sri Lanka"}
</option>
<option
value={" Sudan"}
className={`w-element`}>
{" Sudan"}
</option>
<option
value={" Suriname"}
className={`w-element`}>
{" Suriname"}
</option>
<option
value={" Sweden"}
className={`w-element`}>
{" Sweden"}
</option>
<option
value={" Switzerland"}
className={`w-element`}>
{" Switzerland"}
</option>
<option
value={" Syria"}
className={`w-element`}>
{" Syria"}
</option>
<option
value={" Taiwan"}
className={`w-element`}>
{" Taiwan"}
</option>
<option
value={" Tajikistan"}
className={`w-element`}>
{" Tajikistan"}
</option>
<option
value={" Tanzania"}
className={`w-element`}>
{" Tanzania"}
</option>
<option
value={" Thailand"}
className={`w-element`}>
{" Thailand"}
</option>
<option
value={" Timor-Leste"}
className={`w-element`}>
{" Timor-Leste"}
</option>
<option
value={" Togo"}
className={`w-element`}>
{" Togo"}
</option>
<option
value={" Tonga"}
className={`w-element`}>
{" Tonga"}
</option>
<option
value={" Trinidad and Tobago"}
className={`w-element`}>
{" Trinidad and Tobago"}
</option>
<option
value={" Tunisia"}
className={`w-element`}>
{" Tunisia"}
</option>
<option
value={" Turkey"}
className={`w-element`}>
{" Turkey"}
</option>
<option
value={" Turkmenistan"}
className={`w-element`}>
{" Turkmenistan"}
</option>
<option
value={" Tuvalu"}
className={`w-element`}>
{" Tuvalu"}
</option>
<option
value={" Uganda"}
className={`w-element`}>
{" Uganda"}
</option>
<option
value={" Ukraine"}
className={`w-element`}>
{" Ukraine"}
</option>
<option
value={" United Arab Emirates"}
className={`w-element`}>
{" United Arab Emirates"}
</option>
<option
value={" United Kingdom"}
className={`w-element`}>
{" United Kingdom"}
</option>
<option
value={" United States"}
className={`w-element`}>
{" United States"}
</option>
<option
value={" Uruguay"}
className={`w-element`}>
{" Uruguay"}
</option>
<option
value={" Uzbekistan"}
className={`w-element`}>
{" Uzbekistan"}
</option>
<option
value={" Vanuatu"}
className={`w-element`}>
{" Vanuatu"}
</option>
<option
value={" Vatican City"}
className={`w-element`}>
{" Vatican City"}
</option>
<option
value={" Venezuela"}
className={`w-element`}>
{" Venezuela"}
</option>
<option
value={" Vietnam"}
className={`w-element`}>
{" Vietnam"}
</option>
<option
value={" Yemen"}
className={`w-element`}>
{" Yemen"}
</option>
<option
value={" Zambia"}
className={`w-element`}>
{" Zambia"}
</option>
<option
value={" Zimbabwe"}
className={`w-element`}>
{" Zimbabwe"}
</option>
</Select>
</div>
<div
className={`w-element covda95 c1mjz48u c1ea4sxw c2tlpf1 ${"form_field-wrap is-campaign"}`}>
<label
htmlFor={"USAGE"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"Planned CI/CD Usage (minutes)"}
</label>
<Input
maxLength={256}
name={"USAGE"}
data-name={"USAGE"}
placeholder={"Your expected build time per month"}
type={"number"}
id={"USAGE"}
required={true}
className={`w-element cm4kqbl c1hk3iai c1fgdw21 c5c9eqz c1r7r9op cjge562 cklimrq cjps8te c71aqp4 c1xu9ni5 cye2xyr c13pgzpp cgz9fe1 cwfsyhm ck8x7n0 cfw1inn c11djwk1 ci007ia c1ro25gr c1kuwk32 c1i2dd9i c5fdr0g c1joexfe c1hi5fbc c5io6td c882zc0 cuvokq6 c1029fez c1e6md11 c1oi4tev c13ku895 c1ha0zq3 c1gpg3nf cogbpki c198in2q c1aw7qc6 cy35f9v cxkrb62 ${"form_input w-input"}`} />
</div>
<div
className={`w-element covda95 c1mjz48u c1ea4sxw c2tlpf1 ${"form_field-wrap is-campaign"}`}>
<label
htmlFor={"PROBLEM"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"What CI/CI problems does your team usually meet?"}
</label>
<Textarea
id={"PROBLEM"}
name={"PROBLEM"}
maxLength={5000}
data-name={"PROBLEM"}
placeholder={"Your problems with CI/CD"}
required={true}
className={`w-element c1xvzwx9 c1hk3iai c1fgdw21 c5c9eqz c1r7r9op cjge562 cklimrq cjps8te c71aqp4 c1xu9ni5 cye2xyr c13pgzpp cgz9fe1 cwfsyhm ck8x7n0 cfw1inn c11djwk1 ci007ia c1ro25gr c1kuwk32 c1i2dd9i c5fdr0g c1joexfe c1hi5fbc c5io6td c882zc0 cuvokq6 c1029fez c1e6md11 c1oi4tev c13ku895 c1ha0zq3 c1gpg3nf cogbpki c198in2q c1aw7qc6 cy35f9v cxkrb62 ${"form_input is-text-area is-campaign w-input"}`} />
</div>
<div
className={`w-element covda95 c1mjz48u c1ea4sxw c2tlpf1 ${"form_field-wrap is-campaign"}`}>
<label
htmlFor={"FEATURE"}
className={`w-element c18q8j3k cvdimgi c1chu7bs ${"form_label"}`}>
{"Which feature of TurtleCI do you expect most?"}
</label>
<Textarea
id={"FEATURE"}
name={"FEATURE"}
maxLength={5000}
data-name={"FEATURE"}
placeholder={"Your CI/CD needs"}
required={true}
className={`w-element c1xvzwx9 c1hk3iai c1fgdw21 c5c9eqz c1r7r9op cjge562 cklimrq cjps8te c71aqp4 c1xu9ni5 cye2xyr c13pgzpp cgz9fe1 cwfsyhm ck8x7n0 cfw1inn c11djwk1 ci007ia c1ro25gr c1kuwk32 c1i2dd9i c5fdr0g c1joexfe c1hi5fbc c5io6td c882zc0 cuvokq6 c1029fez c1e6md11 c1oi4tev c13ku895 c1ha0zq3 c1gpg3nf cogbpki c198in2q c1aw7qc6 cy35f9v cxkrb62 ${"form_input is-text-area is-campaign w-input"}`} />
</div>
<div
className={`w-element c1g7apm c7xx1rg cdzvqh6 cgs2h5n c1fqtwf3 c1y42lgf c1o37h44 c1esg1pr ce7nui5 ${"campaign-recaptcha-wrap"}`}>
<div
data-sitekey={"6LdaEawqAAAAAH8xtLeCjcyNnfHKlmlAgk5UtUV2"}
className={`w-element c2tlpf1 c120mq95 c1og5opp c1xkeyc4 c1k6hcwn c1t31bm1 cnqacuw ${"w-form-formrecaptcha campaign-recaptcha g-recaptcha g-recaptcha-error g-recaptcha-disabled"}`} />
</div>
<Input
type={"submit"}
data-wait={"Please wait..."}
value={"Submit"}
className={`w-element c13dsrcw cf159v7 c1kuwk32 c1qe1f6t czsxu8n c1nrdone c1f4f0w8 c1g8wfgh c1g7apm c7xx1rg cze2t9e ct0i0ao curkl6s c1oi8sje c8g4rbm c18lwzes ck8x7n0 cfw1inn c11djwk1 ci007ia c1dftv06 c1m80p2u c3bspns c1vee3qe c2w17zg cqm1fiw c1rkddb1 cwwbqcf c15pshk crld1xj ciwacd0 cwek1tm ${"button text-style-allcaps w-button"}`} />
</form>
<div
className={`w-element cmh603w c1fs6dqh cq967bf c1fqmh6z ${"w-form-done"}`}>
<div
className={`w-element`}>
{"Thank you! Your submission has been received!"}
</div>
</div>
<div
className={`w-element cmh603w c1a3mfqd c1xxgguf cy7z5dk ${"w-form-fail"}`}>
<div
className={`w-element`}>
{"Oops! Something went wrong while submitting the form."}
</div>
</div>
</div>
<div
className={`w-element c1sxiycd c10g9ild c2nqfm1 ccp0548 cn1i7a5 ${"cpa_apply_content"}`}>
<div
className={`w-element c1svrc9o cc7k8p0 ${"cpa_apply_step"}`}>
<div
className={`w-element c20zflo c8g4rbm cd92vsb ${"text-size-lg text-weight-semibold"}`}>
{"Step 2."}
</div>
<div
className={`w-element cte2vf8 c8g4rbm cnsje4e c1noxpoj c18ghmj7 c43eehi c1gkpfk9 ${"heading-style-h4 text-weight-semibold text-color-brand"}`}>
{"Screening & Approval"}
</div>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<p
className={`w-element`}>
{"Applications are reviewed on a case-by-case basis, and eligible startups will receive approval within 10 days."}
</p>
</div>
<div
className={`w-element c1kuwk32 c8dohr6 ca7ovlo ${"spacer-64px"}`} />
<div
className={`w-element c1svrc9o cc7k8p0 ${"cpa_apply_step"}`}>
<div
className={`w-element c20zflo c8g4rbm cd92vsb ${"text-size-lg text-weight-semibold"}`}>
{"Step 3."}
</div>
<div
className={`w-element cte2vf8 c8g4rbm cnsje4e c1noxpoj c18ghmj7 c43eehi c1gkpfk9 ${"heading-style-h4 text-weight-semibold text-color-brand"}`}>
{"Get Started with TurtleCI"}
</div>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<p
className={`w-element`}>
{"Approved startups will receive a personalised subscription link with a video tutorial to ensure a smooth onboarding process."}
</p>
</div>
<div
className={`w-element c1kuwk32 c8dohr6 ca7ovlo ${"spacer-64px"}`} />
<div
className={`w-element c1svrc9o cc7k8p0 ${"cpa_apply_step"}`}>
<div
className={`w-element c20zflo c8g4rbm cd92vsb ${"text-size-lg text-weight-semibold"}`}>
{"Step 4."}
</div>
<div
className={`w-element cte2vf8 c8g4rbm cnsje4e c1noxpoj c18ghmj7 c43eehi c1gkpfk9 ${"heading-style-h4 text-weight-semibold text-color-brand"}`}>
{"Connect with Our Community"}
</div>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<p
className={`w-element`}>
{"Access our Discord group to learn and share insights with other developers and co-founders."}
</p>
</div>
<div
className={`w-element c1kuwk32 c8dohr6 ca7ovlo ${"spacer-64px"}`} />
<div
className={`w-element c1le6v90 c1e7vj8g c1i4vvfx carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 cdzvqh6 cz3bf02 cz1dbqk cmtw8ia c1svrc9o c2uge19 cyb4w8x c1kdmmgj c128olfu c13z7luj c1mtge5i cjt5b5a cc7k8p0 c1xf2fqr chhzgn6 c272cgt c1xbq8bc cx7q1ul ${"cpa_apply_eligible"}`}>
<h3
id={"w-node-fa612c6e-3df0-392a-7490-c0c92875afec-e97e7802"}
className={`w-element c8g4rbm ${"text-weight-semibold"}`}>
{"Are You Eligible?"}
</h3>
<div
className={`w-element c12lvo49 c8gnt76 c1y39kfe c7xx1rg cdzvqh6 chq3ky0 cfe1vus c1ou5bby c7xx1s3 ${"cpa_apply_item"}`}>
<div
className={`w-element c1pj3xl3 c1my0hcn c1noxpoj c1a91cgv cdznpsm c1kkah6p ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_apply_eligible_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M19 19H5V5H15V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V11H19M7.91 10.08L6.5 11.5L11 16L21 6L19.59 4.58L11 13.17L7.91 10.08Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1chu7bs ${"text-weight-medium"}`}>
{"Your Startup is established within the last 5 years."}
</div>
</div>
<div
className={`w-element c12lvo49 c8gnt76 c1y39kfe c7xx1rg cdzvqh6 chq3ky0 cfe1vus c1ou5bby c7xx1s3 ${"cpa_apply_item"}`}>
<div
className={`w-element c1pj3xl3 c1my0hcn c1noxpoj c1a91cgv cdznpsm c1kkah6p ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_apply_eligible_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M19 19H5V5H15V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V11H19M7.91 10.08L6.5 11.5L11 16L21 6L19.59 4.58L11 13.17L7.91 10.08Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1chu7bs ${"text-weight-medium"}`}>
{"Have a team size of 50 or fewer employees."}
</div>
</div>
<div
id={"w-node-_106216ce-d528-92c9-bbac-d659ef1c0767-e97e7802"}
className={`w-element c12lvo49 c8gnt76 c1y39kfe c7xx1rg cdzvqh6 chq3ky0 cfe1vus c1ou5bby c7xx1s3 ${"cpa_apply_item"}`}>
<div
className={`w-element c1pj3xl3 c1my0hcn c1noxpoj c1a91cgv cdznpsm c1kkah6p ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_apply_eligible_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M19 19H5V5H15V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V11H19M7.91 10.08L6.5 11.5L11 16L21 6L19.59 4.58L11 13.17L7.91 10.08Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element c1chu7bs ${"text-weight-medium"}`}>
{"Be planning to use CI/CD to streamline development processes."}
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
opacity-entry={"true"}
className={`w-element ceqyts6 c1vtrtst ccwjzqv ci2109k c1dv3tq7 ${"cpa_reviews"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c8d04es ccwjzqv c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global z-index-1"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha c1kuwk32 c4gouwl cfko4c5 cmcjy5s ctbzh2u c16agd5o caxr30d caqe5xq c1c8uskx cmbbocb c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe ${"w-layout-blockcontainer container-lg w-container"}`}>
<h2
className={`w-element c8g4rbm c1fs6dqh ${"text-weight-semibold text-align-center"}`}>
{"Hear what our clients say about TurtleCI"}
</h2>
<div
className={`w-element c1kuwk32 c8dohr6 ca7ovlo ${"spacer-64px"}`} />
<div
className={`w-element c1i7ve6l c2q6o0k c1viuxvl czrt1di c13qfgf c10rtf3d c18akvbr c1qdbp4w c168g7wn c1tx6pu8 c1wzutdz c1ml4qhu ${"cpa_reviews_grid"}`}>
<div
className={`w-element c1le6v90 c1e7vj8g carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 cdzvqh6 c1hi5fbc cz3bf02 ${"cpa_reviews_item"}`}>
<p
className={`w-element c20zflo ${"text-size-lg"}`}>
{"As a startup, every dollar counts. "}
<span
className={`w-element cn9ibz0 c1noxpoj c18ghmj7 ${"text-weight-bold text-color-brand"}`}>
{"TurtleCI"}
</span>
{" has been a game-changer for us, providing enterprise-level CI/CD capabilities without breaking the bank. We no longer need to invest heavily in infrastructure—everything runs seamlessly in the cloud. It’s the perfect solution for scaling startups looking to streamline their development without massive overhead costs."}
</p>
<div
className={`w-element c8g4rbm ${"text-weight-semibold"}`}>
{"— Emily Rodriguez"}
</div>
</div>
<div
className={`w-element c1le6v90 c1e7vj8g carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 cdzvqh6 c1hi5fbc cz3bf02 ${"cpa_reviews_item"}`}>
<p
className={`w-element c20zflo ${"text-size-lg"}`}>
<span
className={`w-element cn9ibz0 c1noxpoj c18ghmj7 ${"text-weight-bold text-color-brand"}`}>
{"TurtleCI"}
</span>
{" has completely transformed how our team collaborates on builds and deployments. The real-time feedback loop allows our developers to work together effortlessly, catching issues early and ensuring smooth releases. It’s like having an extra set of hands optimizing our workflow 24/7. Highly recommend it for teams that value speed and efficiency!"}
</p>
<div
className={`w-element c8g4rbm ${"text-weight-semibold"}`}>
{"— James Carter"}
</div>
</div>
<div
className={`w-element c1le6v90 c1e7vj8g carupg6 cazdpea c1g67dw5 c74orcy cbplqux c1qu1cb1 cdzvqh6 c1hi5fbc cz3bf02 ${"cpa_reviews_item"}`}>
<p
className={`w-element c20zflo covda95 c1mjz48u c1ea4sxw ${"text-size-lg is-campaign-reviews"}`}>
<span
className={`w-element cn9ibz0 c1noxpoj c18ghmj7 ${"text-weight-bold text-color-brand"}`}>
{"TurtleCI"}
</span>
{" helped us refine our development pipeline, automating repetitive tasks and reducing deployment times drastically. Our engineers can now focus on building great features instead of wrestling with manual configurations. The result? A highly efficient workflow that keeps us ahead of the competition."}
</p>
<div
className={`w-element c8g4rbm ${"text-weight-semibold"}`}>
{"— Nathan Williams"}
</div>
</div>
</div>
</div>
</div>
<div
className={`w-element c6hffsk c1ilrpex c18r95i3 c1rfbdao cxsker3 cj69bmq ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c1w06jk5 cr1wuzi cc4i9wg c1msuzd2 cv3utw2 c18s693l cadppsj c8cgvpx c1ll8n70 clel825 celfunb cvwt32x c797w09 c1yfeu9z cgchj3n c12vkyio c1slws0n c1i75aid c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_reviews_bg-ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 178 156"}
fill={"none"}
className={`w-element`}>
<path
d={"M122.25 155.583C116.371 155.583 110.733 153.248 106.576 149.091C102.419 144.934 100.083 139.296 100.083 133.417L100.083 66.9168C100.083 32.226 118.371 9.36108 152.807 0.749342C154.222 0.383909 155.696 0.302214 157.144 0.508955C158.591 0.715712 159.984 1.20683 161.24 1.95401C162.497 2.70119 163.594 3.68967 164.467 4.86249C165.34 6.03531 165.972 7.36929 166.328 8.78761C166.683 10.2059 166.754 11.6805 166.537 13.1265C166.32 14.5724 165.819 15.9611 165.063 17.2126C164.307 18.464 163.31 19.5535 162.131 20.4182C160.952 21.2829 159.614 21.9058 158.193 22.251C133.511 28.4244 122.25 42.5002 122.25 66.9168L122.25 78.0002L155.5 78.0002C161.092 77.9984 166.479 80.1105 170.579 83.9131C174.68 87.7157 177.192 92.9277 177.611 98.5043L177.667 100.167L177.667 133.417C177.667 139.296 175.331 144.934 171.174 149.091C167.017 153.248 161.379 155.583 155.5 155.583L122.25 155.583ZM22.4998 155.583C16.6208 155.583 10.9827 153.248 6.82562 149.091C2.66856 144.934 0.333147 139.296 0.333147 133.417L0.333153 66.9168C0.333156 32.226 18.6207 9.36107 53.0566 0.749333C54.4723 0.3839 55.9464 0.302205 57.3938 0.508946C58.8413 0.715703 60.2335 1.20682 61.4904 1.954C62.7472 2.70118 63.8437 3.68966 64.7169 4.86248C65.59 6.0353 66.2224 7.36928 66.5777 8.7876C66.933 10.2059 67.0042 11.6805 66.7871 13.1265C66.57 14.5724 66.069 15.9611 65.3128 17.2125C64.5567 18.464 63.5604 19.5535 62.3814 20.4182C61.2024 21.2829 59.8639 21.9058 58.4431 22.251C33.7605 28.4244 22.4998 42.5002 22.4998 66.9168L22.4998 78.0002L55.7498 78.0002C61.3422 77.9984 66.7286 80.1105 70.8292 83.9131C74.9299 87.7157 77.4416 92.9277 77.8611 98.5043L77.9165 100.167L77.9165 133.417C77.9165 139.296 75.5811 144.934 71.424 149.091C67.267 153.248 61.6288 155.583 55.7498 155.583L22.4998 155.583Z"}
fill={"#D6F5F2"}
className={`w-element`} />
</svg>
</div>
</section>
<div
className={`w-element co29il6 ${"cpa_divider-wrap"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha c1kuwk32 c4gouwl cfko4c5 cmcjy5s ctbzh2u c16agd5o caxr30d caqe5xq c1c8uskx cmbbocb c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element cggrpw0 c1kuwk32 c1wiw99h ${"cpa_divider"}`} />
</div>
</div>
</div>
<section
id={"faq"}
opacity-entry={"true"}
className={`w-element cwqsbw cy4qr4q ${"cpa_faq"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha c1kuwk32 cfko4c5 cmcjy5s ctbzh2u c16agd5o caxr30d caqe5xq c1c8uskx cmbbocb c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe ${"w-layout-blockcontainer container-sm w-container"}`}>
<h2
className={`w-element c8g4rbm c1fs6dqh ${"text-weight-semibold text-align-center"}`}>
{"Frequently Asked Questions"}
</h2>
<div
className={`w-element c1kuwk32 c8dohr6 ca7ovlo ${"spacer-64px"}`} />
<div
className={`w-element`}>
<div
className={`w-element cbplqux c1y39kfe cp7hr9q ${"rl_faq1_accordion"}`}>
<div
data-w-id={"1fffd5ce-21ce-05a0-4c55-a2303a5963f7"}
className={`w-element c1h4ztf3 cvb1b3u cwwbqcf c13lcbtl c7xx1rg c1w2oi28 c137irjg cscfrjp ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c12z5fd8 c1i2qi3y cfxsg04 c1emwurg c7ngagw ${"rl_faq1_question"}`}>
<h3
className={`w-element c20zflo c8g4rbm cd92vsb ${"text-size-lg text-weight-semibold"}`}>
{"What is CI/CD, and why does my startup need it?"}
</h3>
<div
className={`w-element cn68m5r c1wz6rw7 ci9qf13 ${"rl_faq1_icon-wrapper"}`}>
<div
className={`w-element c197ntxo cbplqux c1g7apm c7xx1rg c1s9hj7p cufrovc cdzvqh6 ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c1wz6rw7 c1vfu5j3 ci9qf13 ckhyoxg c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"rl_faq1_icon-2 w-embed"}`}>
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
{"CI/CD (Continuous Integration/Continuous Deployment) automates your development processes, ensuring faster delivery, fewer errors, and seamless collaboration."}
</p>
</div>
</div>
</div>
<div
className={`w-element cbplqux c1y39kfe cp7hr9q ${"rl_faq1_accordion"}`}>
<div
data-w-id={"bb921ef6-58ce-5e25-cd50-58a3b8922a2a"}
className={`w-element c1h4ztf3 cvb1b3u cwwbqcf c13lcbtl c7xx1rg c1w2oi28 c137irjg cscfrjp ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c12z5fd8 c1i2qi3y cfxsg04 c1emwurg c7ngagw ${"rl_faq1_question"}`}>
<h3
className={`w-element c20zflo c8g4rbm cd92vsb ${"text-size-lg text-weight-semibold"}`}>
{"Why should I choose TurtleCI over a free CI/CD tool?"}
</h3>
<div
className={`w-element cn68m5r c1wz6rw7 ci9qf13 ${"rl_faq1_icon-wrapper"}`}>
<div
className={`w-element c197ntxo cbplqux c1g7apm c7xx1rg c1s9hj7p cufrovc cdzvqh6 ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c1wz6rw7 c1vfu5j3 ci9qf13 ckhyoxg c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"rl_faq1_icon-2 w-embed"}`}>
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
{"Free CI/CD tools often come with limitations on build minutes, concurrency, and enterprise-level features. TurtleCI offers unlimited scalability, faster build times, and enhanced workflow automation to help startups scale efficiently without technical bottlenecks."}
</p>
</div>
</div>
</div>
<div
className={`w-element cbplqux c1y39kfe cp7hr9q ${"rl_faq1_accordion"}`}>
<div
data-w-id={"6431cc96-e930-2774-e593-f87985d7a6f8"}
className={`w-element c1h4ztf3 cvb1b3u cwwbqcf c13lcbtl c7xx1rg c1w2oi28 c137irjg cscfrjp ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c12z5fd8 c1i2qi3y cfxsg04 c1emwurg c7ngagw ${"rl_faq1_question"}`}>
<h3
className={`w-element c20zflo c8g4rbm cd92vsb ${"text-size-lg text-weight-semibold"}`}>
{"Does TurtleCI support complex workflows for growing startups?"}
</h3>
<div
className={`w-element cn68m5r c1wz6rw7 ci9qf13 ${"rl_faq1_icon-wrapper"}`}>
<div
className={`w-element c197ntxo cbplqux c1g7apm c7xx1rg c1s9hj7p cufrovc cdzvqh6 ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c1wz6rw7 c1vfu5j3 ci9qf13 ckhyoxg c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"rl_faq1_icon-2 w-embed"}`}>
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
{"Absolutely! TurtleCI is built to support startups as they scale, offering customisable workflows, parallel testing, and seamless integrations with your existing development stack. Whether you’re launching an MVP or handling enterprise-grade deployments, TurtleCI ensures a smooth and optimised pipeline."}
</p>
</div>
</div>
</div>
<div
className={`w-element cbplqux c1y39kfe cp7hr9q ${"rl_faq1_accordion"}`}>
<div
data-w-id={"1f2549bc-04a7-3612-8920-ad35784f682f"}
className={`w-element c1h4ztf3 cvb1b3u cwwbqcf c13lcbtl c7xx1rg c1w2oi28 c137irjg cscfrjp ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c12z5fd8 c1i2qi3y cfxsg04 c1emwurg c7ngagw ${"rl_faq1_question"}`}>
<h3
className={`w-element c20zflo c8g4rbm cd92vsb ${"text-size-lg text-weight-semibold"}`}>
{"Is TurtleCI really free for 18 months?"}
</h3>
<div
className={`w-element cn68m5r c1wz6rw7 ci9qf13 ${"rl_faq1_icon-wrapper"}`}>
<div
className={`w-element c197ntxo cbplqux c1g7apm c7xx1rg c1s9hj7p cufrovc cdzvqh6 ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c1wz6rw7 c1vfu5j3 ci9qf13 ckhyoxg c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"rl_faq1_icon-2 w-embed"}`}>
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
{"Yes! Selected startups will receive a full subscription, valued at $183/month, at no cost for the first 18 months."}
</p>
</div>
</div>
</div>
<div
className={`w-element cbplqux c1y39kfe cp7hr9q ${"rl_faq1_accordion"}`}>
<div
data-w-id={"2c9c1fd5-ab92-091d-8924-a717ff2b2b48"}
className={`w-element c1h4ztf3 cvb1b3u cwwbqcf c13lcbtl c7xx1rg c1w2oi28 c137irjg cscfrjp ck8x7n0 cfw1inn c11djwk1 ci007ia cdzvqh6 c12z5fd8 c1i2qi3y cfxsg04 c1emwurg c7ngagw ${"rl_faq1_question"}`}>
<h3
className={`w-element c20zflo c8g4rbm cd92vsb ${"text-size-lg text-weight-semibold"}`}>
{"What happens after the 18-month period?"}
</h3>
<div
className={`w-element cn68m5r c1wz6rw7 ci9qf13 ${"rl_faq1_icon-wrapper"}`}>
<div
className={`w-element c197ntxo cbplqux c1g7apm c7xx1rg c1s9hj7p cufrovc cdzvqh6 ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c1wz6rw7 c1vfu5j3 ci9qf13 ckhyoxg c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"rl_faq1_icon-2 w-embed"}`}>
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
{"We offer exclusive discounts for startups to transition to our paid plans."}
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer
opacity-entry={"true"}
className={`w-element c1tvjxkp c8dohr6 cx9dked ${"cpa_footer"}`}>
<div
className={`w-element c1hxqw1p caai4an cmh603w c1nct5tu c17wenqj c170v7gy c13s97cq c1jir8pn c140mlhs cfo0qtk c1i1wffc ${"padding-global"}`}>
<div
className={`w-element c1v0fx6w ctx8ibw c14jek5s c1chl3ha c1kuwk32 c4gouwl cfko4c5 cmcjy5s ctbzh2u c16agd5o caxr30d caqe5xq c1c8uskx cmbbocb c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 cm2lply c431rxe ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element c1i7ve6l c2q6o0k c1fs6dqh cbplqux c1qu1cb1 c1y39kfe c7xx1rg c13cc2b1 ctx8ibw c14jek5s cdzvqh6 ${"cpa_footer_main"}`}>
<Image
src={"/turtleci-import/images/TurtleCI-logo.png"}
loading={"lazy"}
width={70}
alt={"TurtleCI Main Logo"}
className={`w-image c15enxs9 c1w0yz8n ${"cpa_footer_logo"}`} />
<p
className={`w-element`}>
{"Automate your build, test, and deploy processes across MacOS or Linux with a simple, powerful CI/CD platform. Designed to save you time and resources."}
</p>
</div>
<div
className={`w-element c1jwyp7v ${"spacer-120px"}`} />
<div
className={`w-element cvdimgi c1fs6dqh c193feeu c6s7woo c1qpv6k ${"text-size-sm text-align-center is-campaign-footer"}`}>
{"@2025 - 2026 TurtleCI. All Rights Reserved"}
</div>
</div>
</div>
</footer>
<div
className={`w-element c19r7nxq cgmfdf6 co29il6 c1gvonls cs2bh2 c1ro25gr c1m333il cds5ulr cjfjc1q cxnec9k caoid09 ${"cpa_cover"}`} />
<div
className={`w-element c1hw3lfr co29il6 c1aee7dx cq8p6mw c1ie99sc c1tlh46y cndrtrt cdzvqh6 c1m333il c1tp54gh cjfjc1q cxnec9k caoid09 c1va3hnz cezqez3 c1nkc5xz c169rbwe ${"floating-btn-wrap"}`}>
<div
className={`w-element ccwjzqv ${"fomo-wrap"}`}>
<div
className={`w-element c8d04es c1ungi45 co29il6 c1fs6dqh c6fca7a c1v8ff5v c5g9k3b c1b7qqpo cpf5oe2 c1iel4hw c1ilrpex c1tp54gh c1rfbdao cxnec9k caoid09 cfko4c5 cmcjy5s cqq5fes c1pjsvdt c1xjz1nz ${"fomo_expanded"}`}>
<div
className={`w-element c8d04es c12tmhp5 cbplqux c1qu1cb1 c1g7apm c7xx1rg cdzvqh6 ccwjzqv c14fh8ap c1yteglu c1auxpmy ${"fomo_expanded_top"}`}>
<div
className={`w-element cvd9qfr cjxjibi c8g4rbm ${"fomo-expanded_number"}`}>
{"118"}
</div>
<div
className={`w-element c1kuwk32 c1yzoccs ${"spacer-12px"}`} />
<div
className={`w-element cij1jqz ${"fomo_expanded_text-wrap"}`}>
<div
className={`w-element cn9ibz0 c3bspns ${"text-weight-bold text-style-allcaps"}`}>
<span
className={`w-element`}>
{"startups joined TurtleCI"}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"and counting"}
</span>
</div>
</div>
<div
className={`w-element cgakeqw cbi1l3h c1ilrpex c1tp54gh cjfjc1q cxnec9k c19u1i0f ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"fomo-expanded_arrow w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 286 203"}
fill={"none"}
className={`w-element`}>
<path
d={"M197.5 288.333H88.4999V143H0.573242L143 0.573242L285.427 143H197.5V288.333Z"}
fill={"url(#paint0_linear_64_179)"}
className={`w-element`} />
<defs
className={`w-element`}>
<linearGradient
id={"paint0_linear_64_179"}
x1={"0.999998"}
y1={"1"}
x2={"285"}
y2={"288"}
gradientUnits={"userSpaceOnUse"}
className={`w-element`}>
<stop
stopColor={"white"}
stopOpacity={"0.2"}
className={`w-element`} />
<stop
offset={"1"}
stopColor={"white"}
className={`w-element`} />
</linearGradient>
</defs>
</svg>
</div>
</div>
<div
className={`w-element c1tbtc05 ck80r54 c14fh8ap c1yteglu c1auxpmy ${"fomo_expanded_bottom"}`}>
<div
className={`w-element cte2vf8 c1chu7bs cnsje4e c43eehi c1gkpfk9 ${"heading-style-h4 text-weight-medium"}`}>
{"Act Fast! Limited Spots Available!"}
</div>
<div
className={`w-element c1kuwk32 ch73i66 ${"spacer-16px"}`} />
<p
className={`w-element ck80r54 ${"text-color-alternate"}`}>
{"Don’t miss your chance to take your startup to the next level. Apply now to join the growing list of innovative startups using TurtleCI to build, test, and deploy faster than ever."}
</p>
<div
className={`w-element c1kuwk32 cic3b2g c6a5ych c1th8947 c2dxj8u cs0nmy5 ${"spacer-32px"}`} />
<a
href={"#apply"}
className={`w-element c7q667e c1kuwk32 c1tpxml8 c5c9eqz c1r7r9op cjge562 cklimrq c1yzoccs cndrtrt c1eka9gg c1tlh46y ckwuexc cmh603w c1xn1ugd ${"fomo-expanded_btn w-inline-block"}`}>
<div
className={`w-element c3bspns cn9ibz0 ${"text-style-allcaps text-weight-bold"}`}>
{"Apply Now"}
</div>
</a>
</div>
</div>
</div>
<a
href={"#hero"}
className={`w-element c1hw3lfr c13dsrcw cvv99b2 c1ungi45 c1tpxml8 cbplqux c1qu1cb1 c1g7apm c7xx1rg c1lphpb0 cdquffd c5nnka2 cag1f6 cimea03 cmh603w ccwjzqv ckwuexc c1xn1ugd ${"cpa_btt-btn w-inline-block"}`}>
<div
className={`w-element c7q667e c1j6tu1q c89nuzw czdmh79 c1bmznli c1g7apm c7xx1rg c1xeu4lt c1lmt071 cdzvqh6 c1hi5fbc c1oenadl c1bzsfob ca8zumh c2ac6n5 ${"cpa_btt-btn_ic-wrap"}`}>
<div
className={`w-element c1pj3xl3 c1my0hcn ctaq7lt cdzqvh9 ch2lfjv c130dlrg c1j84joi cqgu1dd cp8mt3t c16r31we c4s3jf c1tfz2nu c1isl1ly c1tf8zie c1dmj322 ce17mxc cv7k4t c14iwcl4 c19adc7b c1tbqqby c189uwjb c1vro1vt c93ul7a c5bq8c7 c8arrar cynjjrm cw4w1ux c5fry1g clu1xzz c1kwepi8 ${"cpa_btt-btn_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 25 24"}
fill={"none"}
className={`w-element`}>
<path
fillRule={"evenodd"}
clipRule={"evenodd"}
d={"M11.9697 4.46967C12.2626 4.17678 12.7374 4.17678 13.0303 4.46967L20.0303 11.4697C20.3232 11.7626 20.3232 12.2374 20.0303 12.5303C19.7374 12.8232 19.2626 12.8232 18.9697 12.5303L13.25 6.81066L13.25 19C13.25 19.4142 12.9142 19.75 12.5 19.75C12.0858 19.75 11.75 19.4142 11.75 19L11.75 6.81066L6.03033 12.5303C5.73744 12.8232 5.26256 12.8232 4.96967 12.5303C4.67678 12.2374 4.67678 11.7626 4.96967 11.4697L11.9697 4.46967Z"}
fill={"currentColor"}
className={`w-element`} />
</svg>
</div>
</div>
<div
className={`w-element c8g4rbm c75fxaq c1ijzp3p ${"text-weight-semibold hide-mobile-portrait"}`}>
{"Back to Top"}
</div>
</a>
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
</body>
}


      export { Page }
    