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

      
            
            const Script = ({children, ...props}: Record<string, string | boolean>) => {
              if (children == null) {
                return <script {...props} />;
              }

              return <script {...props} dangerouslySetInnerHTML={{__html: children}} />;
            };
            const Style = ({children, ...props}: Record<string, string | boolean>) => {
              if (children == null) {
                return <style {...props} />;
              }

              return <style {...props} dangerouslySetInnerHTML={{__html: children}} />;
            };
            

            export const CustomCode = () => {
              return (<><link href={"https://fonts.googleapis.com"} rel={"preconnect"}></link><link href={"https://fonts.gstatic.com"} rel={"preconnect"} crossorigin={"anonymous"}></link><Script src={"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"} type={"text/javascript"}></Script><Script type={"text/javascript"}>{"WebFont.load({ google: { families: [\"Plus Jakarta Sans:300,400,500,600,700\"] } });"}</Script><Script src={"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"}></Script><Script src={"/turtleci-import/js/webflow.js"} type={"text/javascript"}></Script><Style>{"\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/**\n * Remove default margin.\n */\nbody {\n  margin: 0;\n}\n/* HTML5 display definitions\n   ========================================================================== */\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n[hidden],\ntemplate {\n  display: none;\n}\n/* Links\n   ========================================================================== */\n/**\n * Remove the gray background color from active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\na:active,\na:hover {\n  outline: 0;\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\nb,\nstrong {\n  font-weight: bold;\n}\n/**\n * Address styling not present in Safari and Chrome.\n */\ndfn {\n  font-style: italic;\n}\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/**\n * Address styling not present in IE 8/9.\n */\nmark {\n  background: #ff0;\n  color: #000;\n}\n/**\n * Address inconsistent and variable font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\nimg {\n  border: 0;\n}\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\nsvg:not(:root) {\n  overflow: hidden;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\nfigure {\n  margin: 1em 40px;\n}\n/**\n * Address differences between Firefox and other browsers.\n */\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n/**\n * Contain overflow in all browsers.\n */\npre {\n  overflow: auto;\n}\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n/* Forms\n   ========================================================================== */\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\nbutton {\n  overflow: visible;\n}\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\nbutton,\nselect {\n  text-transform: none;\n}\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. CUSTOM FOR WEBFLOW: Removed the input[type=\"submit\"] selector to reduce\n *    specificity and defer to the .w-button selector\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n/**\n * Re-set default cursor for disabled elements.\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n/**\n * Remove inner padding and border in Firefox 4+.\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\ninput {\n  line-height: normal;\n}\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\ninput[type='checkbox'],\ninput[type='radio'] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. CUSTOM FOR WEBFLOW: changed from `textfield` to `none` to normalize iOS rounded input\n * 2. CUSTOM FOR WEBFLOW: box-sizing: content-box rule removed\n *    (similar to normalize.css >=4.0.0)\n */\ninput[type='search'] {\n  -webkit-appearance: none;\n  /* 1 */\n}\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\ninput[type='search']::-webkit-search-cancel-button,\ninput[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * Define consistent border, margin, and padding.\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\noptgroup {\n  font-weight: bold;\n}\n/* Tables\n   ========================================================================== */\n/**\n * Remove most spacing between table cells.\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n\n\n@font-face {\n  font-family: 'webflow-icons';\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\") format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n[class^=\"w-icon-\"],\n[class*=\" w-icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'webflow-icons' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.w-icon-slider-right:before {\n  content: \"\\e600\";\n}\n.w-icon-slider-left:before {\n  content: \"\\e601\";\n}\n.w-icon-nav-menu:before {\n  content: \"\\e602\";\n}\n.w-icon-arrow-down:before,\n.w-icon-dropdown-toggle:before {\n  content: \"\\e603\";\n}\n.w-icon-file-upload-remove:before {\n  content: \"\\e900\";\n}\n.w-icon-file-upload-icon:before {\n  content: \"\\e903\";\n}\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  min-height: 100%;\n  background-color: #fff;\n  font-family: Arial, sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  color: #333;\n}\nimg {\n  max-width: 100%;\n  vertical-align: middle;\n  display: inline-block;\n}\nhtml.w-mod-touch * {\n  background-attachment: scroll !important;\n}\n.w-block {\n  display: block;\n}\n.w-inline-block {\n  max-width: 100%;\n  display: inline-block;\n}\n.w-clearfix:before,\n.w-clearfix:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-clearfix:after {\n  clear: both;\n}\n.w-hidden {\n  display: none;\n}\n.w-button {\n  display: inline-block;\n  padding: 9px 15px;\n  background-color: #3898EC;\n  color: white;\n  border: 0;\n  line-height: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  border-radius: 0;\n}\ninput.w-button {\n  -webkit-appearance: button;\n}\nhtml[data-w-dynpage] [data-w-cloak] {\n  color: transparent !important;\n}\n.w-code-block {\n  margin: unset;\n}\npre.w-code-block code {\n  all: inherit;\n}\npre.w-code-block code > span {\n  display: block !important;\n}\n.w-optimization {\n  display: contents;\n}\n.w-webflow-badge,\n.w-webflow-badge > img {\n  box-sizing: unset;\n  width: unset;\n  height: unset;\n  max-height: unset;\n  max-width: unset;\n  min-height: unset;\n  min-width: unset;\n  margin: unset;\n  padding: unset;\n  float: unset;\n  clear: unset;\n  border: unset;\n  border-radius: unset;\n  background: unset;\n  background-image: unset;\n  background-position: unset;\n  background-size: unset;\n  background-repeat: unset;\n  background-origin: unset;\n  background-clip: unset;\n  background-attachment: unset;\n  background-color: unset;\n  box-shadow: unset;\n  transform: unset;\n  transition: unset;\n  direction: unset;\n  font-family: unset;\n  font-weight: unset;\n  color: unset;\n  font-size: unset;\n  line-height: unset;\n  font-style: unset;\n  font-variant: unset;\n  text-align: unset;\n  letter-spacing: unset;\n  text-decoration: unset;\n  text-indent: unset;\n  text-transform: unset;\n  list-style-type: unset;\n  text-shadow: unset;\n  vertical-align: unset;\n  cursor: unset;\n  white-space: unset;\n  word-break: unset;\n  word-spacing: unset;\n  word-wrap: unset;\n}\n.w-webflow-badge {\n  position: fixed !important;\n  display: inline-block !important;\n  visibility: visible !important;\n  opacity: 1 !important;\n  z-index: 2147483647 !important;\n  top: auto !important;\n  right: 12px !important;\n  bottom: 12px !important;\n  left: auto !important;\n  color: #aaadb0 !important;\n  background-color: #fff !important;\n  border-radius: 3px !important;\n  padding: 6px !important;\n  font-size: 12px !important;\n  line-height: 14px !important;\n  text-decoration: none !important;\n  transform: none !important;\n  margin: 0 !important;\n  width: auto !important;\n  height: auto !important;\n  overflow: unset !important;\n  white-space: nowrap;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n.w-webflow-badge > img {\n  position: unset;\n  display: inline-block !important;\n  visibility: unset !important;\n  opacity: 1 !important;\n  vertical-align: middle !important;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\nh1 {\n  font-size: 38px;\n  line-height: 44px;\n  margin-top: 20px;\n}\nh2 {\n  font-size: 32px;\n  line-height: 36px;\n  margin-top: 20px;\n}\nh3 {\n  font-size: 24px;\n  line-height: 30px;\n  margin-top: 20px;\n}\nh4 {\n  font-size: 18px;\n  line-height: 24px;\n  margin-top: 10px;\n}\nh5 {\n  font-size: 14px;\n  line-height: 20px;\n  margin-top: 10px;\n}\nh6 {\n  font-size: 12px;\n  line-height: 18px;\n  margin-top: 10px;\n}\np {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nblockquote {\n  margin: 0 0 10px 0;\n  padding: 10px 20px;\n  border-left: 5px solid #E2E2E2;\n  font-size: 18px;\n  line-height: 22px;\n}\nfigure {\n  margin: 0;\n  margin-bottom: 10px;\n}\nfigcaption {\n  margin-top: 5px;\n  text-align: center;\n}\nul,\nol {\n  margin-top: 0px;\n  margin-bottom: 10px;\n  padding-left: 40px;\n}\n.w-list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.w-embed:before,\n.w-embed:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-embed:after {\n  clear: both;\n}\n.w-video {\n  width: 100%;\n  position: relative;\n  padding: 0;\n}\n.w-video iframe,\n.w-video object,\n.w-video embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n}\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nbutton,\n[type='button'],\n[type='reset'] {\n  border: 0;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n.w-form {\n  margin: 0 0 15px;\n}\n.w-form-done {\n  display: none;\n  padding: 20px;\n  text-align: center;\n  background-color: #dddddd;\n}\n.w-form-fail {\n  display: none;\n  margin-top: 10px;\n  padding: 10px;\n  background-color: #ffdede;\n}\nlabel {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n.w-input,\n.w-select {\n  display: block;\n  width: 100%;\n  height: 38px;\n  padding: 8px 12px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333333;\n  vertical-align: middle;\n  background-color: #ffffff;\n  border: 1px solid #cccccc;\n}\n.w-input::placeholder,\n.w-select::placeholder {\n  color: #999;\n}\n.w-input:focus,\n.w-select:focus {\n  border-color: #3898EC;\n  outline: 0;\n}\n.w-input[disabled],\n.w-select[disabled],\n.w-input[readonly],\n.w-select[readonly],\nfieldset[disabled] .w-input,\nfieldset[disabled] .w-select {\n  cursor: not-allowed;\n}\n.w-input[disabled]:not(.w-input-disabled),\n.w-select[disabled]:not(.w-input-disabled),\n.w-input[readonly],\n.w-select[readonly],\nfieldset[disabled]:not(.w-input-disabled) .w-input,\nfieldset[disabled]:not(.w-input-disabled) .w-select {\n  background-color: #eeeeee;\n}\ntextarea.w-input,\ntextarea.w-select {\n  height: auto;\n}\n.w-select {\n  background-color: #f3f3f3;\n}\n.w-select[multiple] {\n  height: auto;\n}\n.w-form-label {\n  display: inline-block;\n  cursor: pointer;\n  font-weight: normal;\n  margin-bottom: 0px;\n}\n.w-radio {\n  display: block;\n  margin-bottom: 5px;\n  padding-left: 20px;\n}\n.w-radio:before,\n.w-radio:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-radio:after {\n  clear: both;\n}\n.w-radio-input {\n  margin: 4px 0 0;\n  line-height: normal;\n  float: left;\n  margin-left: -20px;\n}\n.w-radio-input {\n  margin-top: 3px;\n}\n.w-file-upload {\n  display: block;\n  margin-bottom: 10px;\n}\n.w-file-upload-input {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -100;\n}\n.w-file-upload-default,\n.w-file-upload-uploading,\n.w-file-upload-success {\n  display: inline-block;\n  color: #333333;\n}\n.w-file-upload-error {\n  display: block;\n  margin-top: 10px;\n}\n.w-file-upload-default.w-hidden,\n.w-file-upload-uploading.w-hidden,\n.w-file-upload-error.w-hidden,\n.w-file-upload-success.w-hidden {\n  display: none;\n}\n.w-file-upload-uploading-btn {\n  display: flex;\n  font-size: 14px;\n  font-weight: normal;\n  cursor: pointer;\n  margin: 0;\n  padding: 8px 12px;\n  border: 1px solid #cccccc;\n  background-color: #fafafa;\n}\n.w-file-upload-file {\n  display: flex;\n  flex-grow: 1;\n  justify-content: space-between;\n  margin: 0;\n  padding: 8px 9px 8px 11px;\n  border: 1px solid #cccccc;\n  background-color: #fafafa;\n}\n.w-file-upload-file-name {\n  font-size: 14px;\n  font-weight: normal;\n  display: block;\n}\n.w-file-remove-link {\n  margin-top: 3px;\n  margin-left: 10px;\n  width: auto;\n  height: auto;\n  padding: 3px;\n  display: block;\n  cursor: pointer;\n}\n.w-icon-file-upload-remove {\n  margin: auto;\n  font-size: 10px;\n}\n.w-file-upload-error-msg {\n  display: inline-block;\n  color: #ea384c;\n  padding: 2px 0;\n}\n.w-file-upload-info {\n  display: inline-block;\n  line-height: 38px;\n  padding: 0 12px;\n}\n.w-file-upload-label {\n  display: inline-block;\n  font-size: 14px;\n  font-weight: normal;\n  cursor: pointer;\n  margin: 0;\n  padding: 8px 12px;\n  border: 1px solid #cccccc;\n  background-color: #fafafa;\n}\n.w-icon-file-upload-icon,\n.w-icon-file-upload-uploading {\n  display: inline-block;\n  margin-right: 8px;\n  width: 20px;\n}\n.w-icon-file-upload-uploading {\n  height: 20px;\n}\n.w-container {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 940px;\n}\n.w-container:before,\n.w-container:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-container:after {\n  clear: both;\n}\n.w-container .w-row {\n  margin-left: -10px;\n  margin-right: -10px;\n}\n.w-row:before,\n.w-row:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-row:after {\n  clear: both;\n}\n.w-row .w-row {\n  margin-left: 0;\n  margin-right: 0;\n}\n.w-col {\n  position: relative;\n  float: left;\n  width: 100%;\n  min-height: 1px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.w-col .w-col {\n  padding-left: 0;\n  padding-right: 0;\n}\n.w-col-1 {\n  width: 8.33333333%;\n}\n.w-col-2 {\n  width: 16.66666667%;\n}\n.w-col-3 {\n  width: 25%;\n}\n.w-col-4 {\n  width: 33.33333333%;\n}\n.w-col-5 {\n  width: 41.66666667%;\n}\n.w-col-6 {\n  width: 50%;\n}\n.w-col-7 {\n  width: 58.33333333%;\n}\n.w-col-8 {\n  width: 66.66666667%;\n}\n.w-col-9 {\n  width: 75%;\n}\n.w-col-10 {\n  width: 83.33333333%;\n}\n.w-col-11 {\n  width: 91.66666667%;\n}\n.w-col-12 {\n  width: 100%;\n}\n.w-hidden-main {\n  display: none !important;\n}\n@media screen and (max-width: 991px) {\n  .w-container {\n    max-width: 728px;\n  }\n  .w-hidden-main {\n    display: inherit !important;\n  }\n  .w-hidden-medium {\n    display: none !important;\n  }\n  .w-col-medium-1 {\n    width: 8.33333333%;\n  }\n  .w-col-medium-2 {\n    width: 16.66666667%;\n  }\n  .w-col-medium-3 {\n    width: 25%;\n  }\n  .w-col-medium-4 {\n    width: 33.33333333%;\n  }\n  .w-col-medium-5 {\n    width: 41.66666667%;\n  }\n  .w-col-medium-6 {\n    width: 50%;\n  }\n  .w-col-medium-7 {\n    width: 58.33333333%;\n  }\n  .w-col-medium-8 {\n    width: 66.66666667%;\n  }\n  .w-col-medium-9 {\n    width: 75%;\n  }\n  .w-col-medium-10 {\n    width: 83.33333333%;\n  }\n  .w-col-medium-11 {\n    width: 91.66666667%;\n  }\n  .w-col-medium-12 {\n    width: 100%;\n  }\n  .w-col-stack {\n    width: 100%;\n    left: auto;\n    right: auto;\n  }\n}\n@media screen and (max-width: 767px) {\n  .w-hidden-main {\n    display: inherit !important;\n  }\n  .w-hidden-medium {\n    display: inherit !important;\n  }\n  .w-hidden-small {\n    display: none !important;\n  }\n  .w-row,\n  .w-container .w-row {\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .w-col {\n    width: 100%;\n    left: auto;\n    right: auto;\n  }\n  .w-col-small-1 {\n    width: 8.33333333%;\n  }\n  .w-col-small-2 {\n    width: 16.66666667%;\n  }\n  .w-col-small-3 {\n    width: 25%;\n  }\n  .w-col-small-4 {\n    width: 33.33333333%;\n  }\n  .w-col-small-5 {\n    width: 41.66666667%;\n  }\n  .w-col-small-6 {\n    width: 50%;\n  }\n  .w-col-small-7 {\n    width: 58.33333333%;\n  }\n  .w-col-small-8 {\n    width: 66.66666667%;\n  }\n  .w-col-small-9 {\n    width: 75%;\n  }\n  .w-col-small-10 {\n    width: 83.33333333%;\n  }\n  .w-col-small-11 {\n    width: 91.66666667%;\n  }\n  .w-col-small-12 {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 479px) {\n  .w-container {\n    max-width: none;\n  }\n  .w-hidden-main {\n    display: inherit !important;\n  }\n  .w-hidden-medium {\n    display: inherit !important;\n  }\n  .w-hidden-small {\n    display: inherit !important;\n  }\n  .w-hidden-tiny {\n    display: none !important;\n  }\n  .w-col {\n    width: 100%;\n  }\n  .w-col-tiny-1 {\n    width: 8.33333333%;\n  }\n  .w-col-tiny-2 {\n    width: 16.66666667%;\n  }\n  .w-col-tiny-3 {\n    width: 25%;\n  }\n  .w-col-tiny-4 {\n    width: 33.33333333%;\n  }\n  .w-col-tiny-5 {\n    width: 41.66666667%;\n  }\n  .w-col-tiny-6 {\n    width: 50%;\n  }\n  .w-col-tiny-7 {\n    width: 58.33333333%;\n  }\n  .w-col-tiny-8 {\n    width: 66.66666667%;\n  }\n  .w-col-tiny-9 {\n    width: 75%;\n  }\n  .w-col-tiny-10 {\n    width: 83.33333333%;\n  }\n  .w-col-tiny-11 {\n    width: 91.66666667%;\n  }\n  .w-col-tiny-12 {\n    width: 100%;\n  }\n}\n.w-widget {\n  position: relative;\n}\n.w-widget-map {\n  width: 100%;\n  height: 400px;\n}\n.w-widget-map label {\n  width: auto;\n  display: inline;\n}\n.w-widget-map img {\n  max-width: inherit;\n}\n.w-widget-map .gm-style-iw {\n  text-align: center;\n}\n.w-widget-map .gm-style-iw > button {\n  display: none !important;\n}\n.w-widget-twitter {\n  overflow: hidden;\n}\n.w-widget-twitter-count-shim {\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  width: 28px;\n  height: 20px;\n  text-align: center;\n  background: white;\n  border: #758696 solid 1px;\n  border-radius: 3px;\n}\n.w-widget-twitter-count-shim * {\n  pointer-events: none;\n  user-select: none;\n}\n.w-widget-twitter-count-shim .w-widget-twitter-count-inner {\n  position: relative;\n  font-size: 15px;\n  line-height: 12px;\n  text-align: center;\n  color: #999;\n  font-family: serif;\n}\n.w-widget-twitter-count-shim .w-widget-twitter-count-clear {\n  position: relative;\n  display: block;\n}\n.w-widget-twitter-count-shim.w--large {\n  width: 36px;\n  height: 28px;\n}\n.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {\n  font-size: 18px;\n  line-height: 18px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical) {\n  margin-left: 5px;\n  margin-right: 8px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical).w--large {\n  margin-left: 6px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical):before,\n.w-widget-twitter-count-shim:not(.w--vertical):after {\n  top: 50%;\n  left: 0;\n  border: solid transparent;\n  content: ' ';\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.w-widget-twitter-count-shim:not(.w--vertical):before {\n  border-color: rgba(117, 134, 150, 0);\n  border-right-color: #5d6c7b;\n  border-width: 4px;\n  margin-left: -9px;\n  margin-top: -4px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {\n  border-width: 5px;\n  margin-left: -10px;\n  margin-top: -5px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical):after {\n  border-color: rgba(255, 255, 255, 0);\n  border-right-color: white;\n  border-width: 4px;\n  margin-left: -8px;\n  margin-top: -4px;\n}\n.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {\n  border-width: 5px;\n  margin-left: -9px;\n  margin-top: -5px;\n}\n.w-widget-twitter-count-shim.w--vertical {\n  width: 61px;\n  height: 33px;\n  margin-bottom: 8px;\n}\n.w-widget-twitter-count-shim.w--vertical:before,\n.w-widget-twitter-count-shim.w--vertical:after {\n  top: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: ' ';\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.w-widget-twitter-count-shim.w--vertical:before {\n  border-color: rgba(117, 134, 150, 0);\n  border-top-color: #5d6c7b;\n  border-width: 5px;\n  margin-left: -5px;\n}\n.w-widget-twitter-count-shim.w--vertical:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-top-color: white;\n  border-width: 4px;\n  margin-left: -4px;\n}\n.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {\n  font-size: 18px;\n  line-height: 22px;\n}\n.w-widget-twitter-count-shim.w--vertical.w--large {\n  width: 76px;\n}\n.w-background-video {\n  position: relative;\n  overflow: hidden;\n  height: 500px;\n  color: white;\n}\n.w-background-video > video {\n  background-size: cover;\n  background-position: 50% 50%;\n  position: absolute;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  right: -100%;\n  bottom: -100%;\n  top: -100%;\n  left: -100%;\n  object-fit: cover;\n  z-index: -100;\n}\n.w-background-video > video::-webkit-media-controls-start-playback-button {\n  display: none !important;\n  -webkit-appearance: none;\n}\n.w-background-video--control {\n  position: absolute;\n  bottom: 1em;\n  right: 1em;\n  background-color: transparent;\n  padding: 0;\n}\n.w-background-video--control > [hidden] {\n  display: none !important;\n}\n.w-slider {\n  position: relative;\n  height: 300px;\n  text-align: center;\n  background: #dddddd;\n  clear: both;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.w-slider-mask {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  height: 100%;\n  white-space: nowrap;\n}\n.w-slide {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: 100%;\n  height: 100%;\n  white-space: normal;\n  text-align: left;\n}\n.w-slider-nav {\n  position: absolute;\n  z-index: 2;\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  padding-top: 10px;\n  height: 40px;\n  text-align: center;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.w-slider-nav.w-round > div {\n  border-radius: 100%;\n}\n.w-slider-nav.w-num > div {\n  width: auto;\n  height: auto;\n  padding: 0.2em 0.5em;\n  font-size: inherit;\n  line-height: inherit;\n}\n.w-slider-nav.w-shadow > div {\n  box-shadow: 0 0 3px rgba(51, 51, 51, 0.4);\n}\n.w-slider-nav-invert {\n  color: #fff;\n}\n.w-slider-nav-invert > div {\n  background-color: rgba(34, 34, 34, 0.4);\n}\n.w-slider-nav-invert > div.w-active {\n  background-color: #222;\n}\n.w-slider-dot {\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  background-color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  margin: 0 3px 0.5em;\n  transition: background-color 100ms, color 100ms;\n}\n.w-slider-dot.w-active {\n  background-color: #fff;\n}\n.w-slider-dot:focus {\n  outline: none;\n  box-shadow: 0px 0px 0px 2px #fff;\n}\n.w-slider-dot:focus.w-active {\n  box-shadow: none;\n}\n.w-slider-arrow-left,\n.w-slider-arrow-right {\n  position: absolute;\n  width: 80px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  cursor: pointer;\n  overflow: hidden;\n  color: white;\n  font-size: 40px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n}\n.w-slider-arrow-left [class^='w-icon-'],\n.w-slider-arrow-right [class^='w-icon-'],\n.w-slider-arrow-left [class*=' w-icon-'],\n.w-slider-arrow-right [class*=' w-icon-'] {\n  position: absolute;\n}\n.w-slider-arrow-left:focus,\n.w-slider-arrow-right:focus {\n  outline: 0;\n}\n.w-slider-arrow-left {\n  z-index: 3;\n  right: auto;\n}\n.w-slider-arrow-right {\n  z-index: 4;\n  left: auto;\n}\n.w-icon-slider-left,\n.w-icon-slider-right {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 1em;\n  height: 1em;\n}\n.w-slider-aria-label {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n.w-slider-force-show {\n  display: block !important;\n}\n.w-dropdown {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 900;\n}\n.w-dropdown-btn,\n.w-dropdown-toggle,\n.w-dropdown-link {\n  position: relative;\n  vertical-align: top;\n  text-decoration: none;\n  color: #222222;\n  padding: 20px;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  white-space: nowrap;\n}\n.w-dropdown-toggle {\n  user-select: none;\n  display: inline-block;\n  cursor: pointer;\n  padding-right: 40px;\n}\n.w-dropdown-toggle:focus {\n  outline: 0;\n}\n.w-icon-dropdown-toggle {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  margin-right: 20px;\n  width: 1em;\n  height: 1em;\n}\n.w-dropdown-list {\n  position: absolute;\n  background: #dddddd;\n  display: none;\n  min-width: 100%;\n}\n.w-dropdown-list.w--open {\n  display: block;\n}\n.w-dropdown-link {\n  padding: 10px 20px;\n  display: block;\n  color: #222222;\n}\n.w-dropdown-link.w--current {\n  color: #0082f3;\n}\n.w-dropdown-link:focus {\n  outline: 0;\n}\n@media screen and (max-width: 767px) {\n  .w-nav-brand {\n    padding-left: 10px;\n  }\n}\n/**\n * ## Note\n * Safari (on both iOS and OS X) does not handle viewport units (vh, vw) well.\n * For example percentage units do not work on descendants of elements that\n * have any dimensions expressed in viewport units. It also doesn’t handle them at\n * all in `calc()`.\n */\n/**\n * Wrapper around all lightbox elements\n *\n * 1. Since the lightbox can receive focus, IE also gives it an outline.\n * 2. Fixes flickering on Chrome when a transition is in progress\n *    underneath the lightbox.\n */\n.w-lightbox-backdrop {\n  cursor: auto;\n  font-style: normal;\n  letter-spacing: normal;\n  list-style: disc;\n  text-indent: 0;\n  text-shadow: none;\n  text-transform: none;\n  visibility: visible;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  color: #fff;\n  font-family: \"Helvetica Neue\", Helvetica, Ubuntu, \"Segoe UI\", Verdana, sans-serif;\n  font-size: 17px;\n  line-height: 1.2;\n  font-weight: 300;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 2000;\n  outline: 0;\n  /* 1 */\n  opacity: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transform: translate(0, 0);\n  /* 2 */\n}\n/**\n * Neat trick to bind the rubberband effect to our canvas instead of the whole\n * document on iOS. It also prevents a bug that causes the document underneath to scroll.\n */\n.w-lightbox-backdrop,\n.w-lightbox-container {\n  height: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.w-lightbox-content {\n  position: relative;\n  height: 100vh;\n  overflow: hidden;\n}\n.w-lightbox-view {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  opacity: 0;\n}\n.w-lightbox-view:before {\n  content: \"\";\n  height: 100vh;\n}\n/* .w-lightbox-content */\n.w-lightbox-group,\n.w-lightbox-group .w-lightbox-view,\n.w-lightbox-group .w-lightbox-view:before {\n  height: 86vh;\n}\n.w-lightbox-frame,\n.w-lightbox-view:before {\n  display: inline-block;\n  vertical-align: middle;\n}\n/*\n * 1. Remove default margin set by user-agent on the <figure> element.\n */\n.w-lightbox-figure {\n  position: relative;\n  margin: 0;\n  /* 1 */\n}\n.w-lightbox-group .w-lightbox-figure {\n  cursor: pointer;\n}\n/**\n * IE adds image dimensions as width and height attributes on the IMG tag,\n * but we need both width and height to be set to auto to enable scaling.\n */\n.w-lightbox-img {\n  width: auto;\n  height: auto;\n  max-width: none;\n}\n/**\n * 1. Reset if style is set by user on \"All Images\"\n */\n.w-lightbox-image {\n  display: block;\n  float: none;\n  /* 1 */\n  max-width: 100vw;\n  max-height: 100vh;\n}\n.w-lightbox-group .w-lightbox-image {\n  max-height: 86vh;\n}\n.w-lightbox-caption {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0.5em 1em;\n  background: rgba(0, 0, 0, 0.4);\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.w-lightbox-embed {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.w-lightbox-control {\n  position: absolute;\n  top: 0;\n  width: 4em;\n  background-size: 24px;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.w-lightbox-left {\n  display: none;\n  bottom: 0;\n  left: 0;\n  /* <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 0 24 40\" width=\"24\" height=\"40\"><g transform=\"rotate(45)\"><path d=\"m0 0h5v23h23v5h-28z\" opacity=\".4\"/><path d=\"m1 1h3v23h23v3h-26z\" fill=\"#fff\"/></g></svg> */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==\");\n}\n.w-lightbox-right {\n  display: none;\n  right: 0;\n  bottom: 0;\n  /* <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-4 0 24 40\" width=\"24\" height=\"40\"><g transform=\"rotate(45)\"><path d=\"m0-0h28v28h-5v-23h-23z\" opacity=\".4\"/><path d=\"m1 1h26v26h-3v-23h-23z\" fill=\"#fff\"/></g></svg> */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+\");\n}\n/*\n * Without specifying the with and height inside the SVG, all versions of IE render the icon too small.\n * The bug does not seem to manifest itself if the elements are tall enough such as the above arrows.\n * (http://stackoverflow.com/questions/16092114/background-size-differs-in-internet-explorer)\n */\n.w-lightbox-close {\n  right: 0;\n  height: 2.6em;\n  /* <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-4 0 18 17\" width=\"18\" height=\"17\"><g transform=\"rotate(45)\"><path d=\"m0 0h7v-7h5v7h7v5h-7v7h-5v-7h-7z\" opacity=\".4\"/><path d=\"m1 1h7v-7h3v7h7v3h-7v7h-3v-7h-7z\" fill=\"#fff\"/></g></svg> */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=\");\n  background-size: 18px;\n}\n/**\n * 1. All IE versions add extra space at the bottom without this.\n */\n.w-lightbox-strip {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0 1vh;\n  line-height: 0;\n  /* 1 */\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n/*\n * 1. We use content-box to avoid having to do `width: calc(10vh + 2vw)`\n *    which doesn’t work in Safari anyway.\n * 2. Chrome renders images pixelated when switching to GPU. Making sure\n *    the parent is also rendered on the GPU (by setting translate3d for\n *    example) fixes this behavior.\n */\n.w-lightbox-item {\n  display: inline-block;\n  width: 10vh;\n  padding: 2vh 1vh;\n  box-sizing: content-box;\n  /* 1 */\n  cursor: pointer;\n  -webkit-transform: translate3d(0, 0, 0);\n  /* 2 */\n}\n.w-lightbox-active {\n  opacity: 0.3;\n}\n.w-lightbox-thumbnail {\n  position: relative;\n  height: 10vh;\n  background: #222;\n  overflow: hidden;\n}\n.w-lightbox-thumbnail-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.w-lightbox-thumbnail .w-lightbox-tall {\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n}\n.w-lightbox-thumbnail .w-lightbox-wide {\n  left: 50%;\n  height: 100%;\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n}\n/*\n * Spinner\n *\n * Absolute pixel values are used to avoid rounding errors that would cause\n * the white spinning element to be misaligned with the track.\n */\n.w-lightbox-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  box-sizing: border-box;\n  width: 40px;\n  height: 40px;\n  margin-top: -20px;\n  margin-left: -20px;\n  border: 5px solid rgba(0, 0, 0, 0.4);\n  border-radius: 50%;\n  -webkit-animation: spin 0.8s infinite linear;\n  animation: spin 0.8s infinite linear;\n}\n.w-lightbox-spinner:after {\n  content: \"\";\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  bottom: -4px;\n  left: -4px;\n  border: 3px solid transparent;\n  border-bottom-color: #fff;\n  border-radius: 50%;\n}\n/*\n * Utility classes\n */\n.w-lightbox-hide {\n  display: none;\n}\n.w-lightbox-noscroll {\n  overflow: hidden;\n}\n@media (min-width: 768px) {\n  .w-lightbox-content {\n    height: 96vh;\n    margin-top: 2vh;\n  }\n  .w-lightbox-view,\n  .w-lightbox-view:before {\n    height: 96vh;\n  }\n  /* .w-lightbox-content */\n  .w-lightbox-group,\n  .w-lightbox-group .w-lightbox-view,\n  .w-lightbox-group .w-lightbox-view:before {\n    height: 84vh;\n  }\n  .w-lightbox-image {\n    max-width: 96vw;\n    max-height: 96vh;\n  }\n  .w-lightbox-group .w-lightbox-image {\n    max-width: 82.3vw;\n    max-height: 84vh;\n  }\n  .w-lightbox-left,\n  .w-lightbox-right {\n    display: block;\n    opacity: 0.5;\n  }\n  .w-lightbox-close {\n    opacity: 0.8;\n  }\n  .w-lightbox-control:hover {\n    opacity: 1;\n  }\n}\n.w-lightbox-inactive,\n.w-lightbox-inactive:hover {\n  opacity: 0;\n}\n.w-richtext:before,\n.w-richtext:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-richtext:after {\n  clear: both;\n}\n.w-richtext[contenteditable=\"true\"]:before,\n.w-richtext[contenteditable=\"true\"]:after {\n  white-space: initial;\n}\n.w-richtext ol,\n.w-richtext ul {\n  overflow: hidden;\n}\n.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,\n.w-richtext .w-richtext-figure-selected[data-rt-type=\"video\"] div:after {\n  outline: 2px solid #2895f7;\n}\n.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,\n.w-richtext .w-richtext-figure-selected[data-rt-type=\"image\"] div {\n  outline: 2px solid #2895f7;\n}\n.w-richtext figure.w-richtext-figure-type-video > div:after,\n.w-richtext figure[data-rt-type=\"video\"] > div:after {\n  content: '';\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n.w-richtext figure {\n  position: relative;\n  max-width: 60%;\n}\n.w-richtext figure > div:before {\n  cursor: default!important;\n}\n.w-richtext figure img {\n  width: 100%;\n}\n.w-richtext figure figcaption.w-richtext-figcaption-placeholder {\n  opacity: 0.6;\n}\n.w-richtext figure div {\n  /* fix incorrectly sized selection border in the data manager */\n  font-size: 0px;\n  color: transparent;\n}\n.w-richtext figure.w-richtext-figure-type-image,\n.w-richtext figure[data-rt-type=\"image\"] {\n  display: table;\n}\n.w-richtext figure.w-richtext-figure-type-image > div,\n.w-richtext figure[data-rt-type=\"image\"] > div {\n  display: inline-block;\n}\n.w-richtext figure.w-richtext-figure-type-image > figcaption,\n.w-richtext figure[data-rt-type=\"image\"] > figcaption {\n  display: table-caption;\n  caption-side: bottom;\n}\n.w-richtext figure.w-richtext-figure-type-video,\n.w-richtext figure[data-rt-type=\"video\"] {\n  width: 60%;\n  height: 0;\n}\n.w-richtext figure.w-richtext-figure-type-video iframe,\n.w-richtext figure[data-rt-type=\"video\"] iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.w-richtext figure.w-richtext-figure-type-video > div,\n.w-richtext figure[data-rt-type=\"video\"] > div {\n  width: 100%;\n}\n.w-richtext figure.w-richtext-align-center {\n  margin-right: auto;\n  margin-left: auto;\n  clear: both;\n}\n.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div,\n.w-richtext figure.w-richtext-align-center[data-rt-type=\"image\"] > div {\n  max-width: 100%;\n}\n.w-richtext figure.w-richtext-align-normal {\n  clear: both;\n}\n.w-richtext figure.w-richtext-align-fullwidth {\n  width: 100%;\n  max-width: 100%;\n  text-align: center;\n  clear: both;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.w-richtext figure.w-richtext-align-fullwidth > div {\n  display: inline-block;\n  /* padding-bottom is used for aspect ratios in video figures\n      we want the div to inherit that so hover/selection borders in the designer-canvas\n      fit right*/\n  padding-bottom: inherit;\n}\n.w-richtext figure.w-richtext-align-fullwidth > figcaption {\n  display: block;\n}\n.w-richtext figure.w-richtext-align-floatleft {\n  float: left;\n  margin-right: 15px;\n  clear: none;\n}\n.w-richtext figure.w-richtext-align-floatright {\n  float: right;\n  margin-left: 15px;\n  clear: none;\n}\n.w-nav {\n  position: relative;\n  background: #dddddd;\n  z-index: 1000;\n}\n.w-nav:before,\n.w-nav:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-nav:after {\n  clear: both;\n}\n.w-nav-brand {\n  position: relative;\n  float: left;\n  text-decoration: none;\n  color: #333333;\n}\n.w-nav-link {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  text-decoration: none;\n  color: #222222;\n  padding: 20px;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n}\n.w-nav-link.w--current {\n  color: #0082f3;\n}\n.w-nav-menu {\n  position: relative;\n  float: right;\n}\n[data-nav-menu-open] {\n  display: block !important;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #C8C8C8;\n  text-align: center;\n  overflow: visible;\n  min-width: 200px;\n}\n.w--nav-link-open {\n  display: block;\n  position: relative;\n}\n.w-nav-overlay {\n  position: absolute;\n  overflow: hidden;\n  display: none;\n  top: 100%;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n.w-nav-overlay [data-nav-menu-open] {\n  top: 0;\n}\n.w-nav[data-animation='over-left'] .w-nav-overlay {\n  width: auto;\n}\n.w-nav[data-animation='over-left'] .w-nav-overlay,\n.w-nav[data-animation='over-left'] [data-nav-menu-open] {\n  right: auto;\n  z-index: 1;\n  top: 0;\n}\n.w-nav[data-animation='over-right'] .w-nav-overlay {\n  width: auto;\n}\n.w-nav[data-animation='over-right'] .w-nav-overlay,\n.w-nav[data-animation='over-right'] [data-nav-menu-open] {\n  left: auto;\n  z-index: 1;\n  top: 0;\n}\n.w-nav-button {\n  position: relative;\n  float: right;\n  padding: 18px;\n  font-size: 24px;\n  display: none;\n  cursor: pointer;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  user-select: none;\n}\n.w-nav-button:focus {\n  outline: 0;\n}\n.w-nav-button.w--open {\n  background-color: #C8C8C8;\n  color: white;\n}\n.w-nav[data-collapse='all'] .w-nav-menu {\n  display: none;\n}\n.w-nav[data-collapse='all'] .w-nav-button {\n  display: block;\n}\n.w--nav-dropdown-open {\n  display: block;\n}\n.w--nav-dropdown-toggle-open {\n  display: block;\n}\n.w--nav-dropdown-list-open {\n  position: static;\n}\n/**\n * NOTE: These rules are overridden in site-designer.less to use container queries instead of media queries\n * when the navbar is inside a Frame on the Open Canvas.\n */\n@media screen and (max-width: 991px) {\n  .w-nav[data-collapse='medium'] .w-nav-menu {\n    display: none;\n  }\n  .w-nav[data-collapse='medium'] .w-nav-button {\n    display: block;\n  }\n}\n@media screen and (max-width: 767px) {\n  .w-nav[data-collapse='small'] .w-nav-menu {\n    display: none;\n  }\n  .w-nav[data-collapse='small'] .w-nav-button {\n    display: block;\n  }\n  .w-nav-brand {\n    padding-left: 10px;\n  }\n}\n@media screen and (max-width: 479px) {\n  .w-nav[data-collapse='tiny'] .w-nav-menu {\n    display: none;\n  }\n  .w-nav[data-collapse='tiny'] .w-nav-button {\n    display: block;\n  }\n}\n.w-tabs {\n  position: relative;\n}\n.w-tabs:before,\n.w-tabs:after {\n  content: \" \";\n  display: table;\n  grid-column-start: 1;\n  grid-row-start: 1;\n  grid-column-end: 2;\n  grid-row-end: 2;\n}\n.w-tabs:after {\n  clear: both;\n}\n.w-tab-menu {\n  position: relative;\n}\n.w-tab-link {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  text-decoration: none;\n  padding: 9px 30px;\n  text-align: left;\n  cursor: pointer;\n  color: #222222;\n  background-color: #dddddd;\n}\n.w-tab-link.w--current {\n  background-color: #C8C8C8;\n}\n.w-tab-link:focus {\n  outline: 0;\n}\n.w-tab-content {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n.w-tab-pane {\n  position: relative;\n  display: none;\n}\n.w--tab-active {\n  display: block;\n}\n@media screen and (max-width: 479px) {\n  .w-tab-link {\n    display: block;\n  }\n}\n.w-ix-emptyfix:after {\n  content: \"\";\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.w-dyn-empty {\n  padding: 10px;\n  background-color: #dddddd;\n}\n.w-dyn-hide {\n  display: none !important;\n}\n.w-dyn-bind-empty {\n  display: none !important;\n}\n.w-condition-invisible {\n  display: none !important;\n}\n.wf-layout-layout {\n  display: grid;\n}\n.w-layout-grid {\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto auto;\n  grid-row-gap: 16px;\n  grid-column-gap: 16px;\n}\n\n\n:root {\n  --base-color--true-white: white;\n  --base-color--true-black: #000;\n  --base-color--brand-primary: #12a89d;\n  --base-color--star-yellow: #ffa726;\n  --base-color--grey-light: #eee;\n  --base-color--brand-lighter: #ebfbff;\n  --base-color--grey-primary: #555759;\n  --base-color--brand-darker: #37937e;\n  --background-color: white;\n  --base-color--overlay: #0009;\n  --base-color--grey-lighter: #c6c8ca;\n  --relume-library-lite--rl-black: black;\n  --relume-library-lite--rl-white: white;\n  --button--border-color: white;\n  --button--label-color: white;\n  --button--background-color: white;\n  --button--border-color-hover: white;\n  --button--label-color-hover: white;\n  --button--background-color-hover: white;\n  --change-logo-height: 2.5em;\n}\n\n.w-layout-blockcontainer {\n  max-width: 940px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\n.w-checkbox {\n  margin-bottom: 5px;\n  padding-left: 20px;\n  display: block;\n}\n\n.w-checkbox:before {\n  content: \" \";\n  grid-area: 1 / 1 / 2 / 2;\n  display: table;\n}\n\n.w-checkbox:after {\n  content: \" \";\n  clear: both;\n  grid-area: 1 / 1 / 2 / 2;\n  display: table;\n}\n\n.w-checkbox-input {\n  float: left;\n  margin: 4px 0 0 -20px;\n  line-height: normal;\n}\n\n.w-checkbox-input--inputType-custom {\n  border: 1px solid #ccc;\n  border-radius: 2px;\n  width: 12px;\n  height: 12px;\n}\n\n.w-checkbox-input--inputType-custom.w--redirected-checked {\n  background-color: #3898ec;\n  background-image: url('https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg');\n  background-position: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-color: #3898ec;\n}\n\n.w-checkbox-input--inputType-custom.w--redirected-focus {\n  box-shadow: 0 0 3px 1px #3898ec;\n}\n\n.w-form-formradioinput--inputType-custom {\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n}\n\n.w-form-formradioinput--inputType-custom.w--redirected-focus {\n  box-shadow: 0 0 3px 1px #3898ec;\n}\n\n.w-form-formradioinput--inputType-custom.w--redirected-checked {\n  border-width: 4px;\n  border-color: #3898ec;\n}\n\n.w-form-formrecaptcha {\n  margin-bottom: 8px;\n}\n\n@media screen and (max-width: 991px) {\n  .w-layout-blockcontainer {\n    max-width: 728px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .w-layout-blockcontainer {\n    max-width: none;\n  }\n}\n\nbody {\n  background-color: var(--base-color--true-white);\n  color: var(--base-color--true-black);\n  font-family: Plus Jakarta Sans, sans-serif;\n  font-size: 1vw;\n  line-height: 1.4;\n}\n\nh1 {\n  text-wrap: pretty;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 3.5em;\n  font-weight: 700;\n  line-height: 1.1;\n}\n\nh2 {\n  text-wrap: pretty;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 3em;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh3 {\n  text-wrap: pretty;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 2.5em;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\nh4 {\n  text-wrap: pretty;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 1.5em;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\nh5 {\n  text-wrap: pretty;\n  margin-top: .5em;\n  margin-bottom: .5em;\n  font-size: 1.25em;\n  font-weight: 700;\n  line-height: 1.4;\n}\n\nh6 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 18px;\n}\n\np {\n  color: var(--base-color--true-black);\n  text-wrap: pretty;\n  margin-bottom: 0;\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.4;\n}\n\na {\n  color: var(--base-color--brand-primary);\n  text-shadow: 0 0 1px #0000004d;\n  font-size: 1em;\n  font-weight: 500;\n  line-height: 1.4;\n  text-decoration: none;\n  transition-property: color;\n  transition-duration: .2s;\n  transition-timing-function: ease;\n}\n\na:hover {\n  color: var(--base-color--star-yellow);\n}\n\nul, ol {\n  margin-top: .5em;\n  margin-bottom: 1em;\n  padding-left: 2.5em;\n}\n\nli {\n  text-wrap: pretty;\n  margin-bottom: .25em;\n}\n\nimg {\n  object-fit: cover;\n  display: inline-block;\n}\n\nlabel {\n  margin-bottom: 0;\n  font-weight: 700;\n  display: block;\n}\n\ncode {\n  border: 1px solid var(--base-color--star-yellow);\n  background-color: #ffa7261a;\n  border-radius: 4px;\n  margin-right: 2px;\n  padding: 2px 4px;\n  font-size: .9em;\n  font-weight: 600;\n  display: inline-block;\n}\n\nblockquote {\n  border-left-style: solid;\n  border-left-width: .25em;\n  border-left-color: var(--base-color--brand-primary);\n  text-wrap: pretty;\n  margin-bottom: 1em;\n  padding: .5em 0 .5em 1.25em;\n  font-size: 1.25em;\n  line-height: 1.4;\n}\n\n.max-width-full {\n  width: 100%;\n  max-width: none;\n}\n\n.button {\n  grid-column-gap: .5em;\n  background-color: var(--base-color--brand-primary);\n  width: 100%;\n  color: var(--base-color--true-white);\n  border-radius: 40rem;\n  justify-content: center;\n  align-items: center;\n  padding: .75em 2em;\n  font-weight: 600;\n  transition: all .2s;\n  display: flex;\n  box-shadow: 0 8px 24px #959da58c;\n}\n\n.button:hover {\n  background-color: var(--base-color--true-black);\n  box-shadow: 0 8px 24px #959da5cc;\n}\n\n.button:focus {\n  box-shadow: 0 0 0 3px #009ba94d;\n}\n\n.button.is-large {\n  padding: 1em 2em;\n}\n\n.button.is-ghost {\n  color: #000;\n  background-color: #0000;\n  border: 2px solid #0000;\n}\n\n.button.is-form-submit {\n  margin-top: 2.5em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.button.is-form-submit:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5), .button.is-form-submit:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n  margin-left: 0;\n}\n\n.button.is-small {\n  padding: .5em 1.25em;\n  font-size: 1em;\n}\n\n.button.width--full {\n  width: 100%;\n}\n\n.button.is-form-submit-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.super-text2 {\n  font-size: 7.5em;\n  font-weight: 400;\n}\n\n.background-color-secondary {\n  background-color: var(--base-color--grey-light);\n}\n\n.button__ic {\n  width: 1.25em;\n  height: 1.25em;\n}\n\n.button__ic.is--left {\n  height: 100%;\n  margin-left: -1.75em;\n  position: absolute;\n  inset: 0% auto 0% 0%;\n}\n\n.text-rich-text h1 {\n  color: var(--base-color--brand-primary);\n  margin-bottom: .25em;\n}\n\n.text-rich-text h2 {\n  color: var(--base-color--brand-primary);\n  margin-top: .5em;\n  margin-bottom: .25em;\n}\n\n.text-rich-text h3, .text-rich-text h4 {\n  color: var(--base-color--brand-primary);\n  margin-top: .5em;\n  margin-bottom: .5em;\n}\n\n.text-rich-text h5 {\n  color: var(--base-color--brand-primary);\n}\n\n.form_message-error {\n  color: red;\n  background-color: #ffe5e5;\n  margin-top: .75rem;\n  padding: .75rem;\n}\n\n.fs-styleguide_utility-classes {\n  padding-top: 7.5em;\n  padding-bottom: 7.5em;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.flex-horizontal {\n  display: flex;\n}\n\n.heading-style-h2 {\n  font-size: 3em;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.fs-styleguide_background {\n  border: 1px solid #0000001a;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  width: 100%;\n  display: flex;\n}\n\n.heading-style-h3 {\n  font-size: 2.5em;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\n.heading-style-h3.is--home-scrub {\n  font-size: 2.5em;\n  font-weight: 700;\n  line-height: 1.3;\n  transition: color .2s;\n}\n\n.spacer-8px {\n  width: 100%;\n  padding-top: .5em;\n}\n\n.spacer-8px:where(.w-variant-b03828de-1604-123f-4a44-d945443c2f3b), .spacer-8px:where(.w-variant-c0bf14bf-4ea2-e78d-c956-cbe54cf2942e), .spacer-8px:where(.w-variant-e5585519-36c1-9263-9a10-27b9bf14b9a2), .spacer-8px:where(.w-variant-2ea2b7ff-10a9-31ee-acd6-333083e1519d), .spacer-8px:where(.w-variant-31b8c1e0-c996-3eda-de3e-b03f0f5a80fa), .spacer-8px:where(.w-variant-cf10c570-0f69-141a-4903-dae91a97e54b), .spacer-8px:where(.w-variant-bb39ef81-28ea-805a-a00b-62173435b27f), .spacer-8px:where(.w-variant-e97c40c7-e048-1de9-d541-00d732ee5c5f), .spacer-8px:where(.w-variant-46590a55-cf77-e641-28e0-0c093cbbabcd), .spacer-8px:where(.w-variant-7e866526-af6d-97fe-7785-aa492e0dd84d), .spacer-8px:where(.w-variant-e35f08b9-0930-25aa-0d16-8750895b6aaa), .spacer-8px:where(.w-variant-154bc500-4dbe-0e26-dc26-bf2dad9ca4b4) {\n  display: none;\n}\n\n.overflow-visible {\n  overflow: visible;\n}\n\n.fs-styleguide_header-block {\n  grid-column-gap: 2rem;\n  grid-row-gap: 2rem;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr;\n  grid-auto-columns: 1fr;\n  place-items: center start;\n  display: grid;\n}\n\n.max-width-xlarge {\n  width: 100%;\n  max-width: 80em;\n}\n\n.pointer-events-none {\n  pointer-events: none;\n}\n\n.fs-styleguide_item-header {\n  border-bottom: 1px solid #0000001a;\n  width: 100%;\n  padding-bottom: 2rem;\n}\n\n.fs-styleguide_item-wrapper {\n  grid-column-gap: 3rem;\n  grid-row-gap: 3rem;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  display: flex;\n}\n\n.text-weight-xbold {\n  font-weight: 800;\n}\n\n.fs-styleguide_section {\n  grid-column-gap: 6rem;\n  grid-row-gap: 6rem;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr;\n  grid-auto-columns: 1fr;\n  place-items: start;\n  display: grid;\n}\n\n.fs-styleguide_section.is-vertical {\n  grid-column-gap: 4rem;\n  grid-row-gap: 4rem;\n  grid-template-columns: 1fr;\n}\n\n.page-wrap {\n  min-height: 100vh;\n  overflow: clip;\n}\n\n.caption-sm {\n  font-size: .75em;\n}\n\n.spacer-4px {\n  width: 100%;\n  padding-top: .25em;\n}\n\n.background-color-primary {\n  color: var(--base-color--true-white);\n  background-color: #fff;\n}\n\n.pointer-events-auto {\n  pointer-events: auto;\n}\n\n.form_message-success {\n  color: #0c0;\n  background-color: #e5ffe5;\n  padding: 1.25rem;\n}\n\n.text-color-alternate {\n  color: var(--base-color--true-white);\n}\n\n.background-color-tertiary {\n  background-color: var(--base-color--brand-lighter);\n}\n\n.spacer-160px {\n  padding-top: 10em;\n}\n\n.text-weight-medium {\n  font-weight: 500;\n}\n\n.text-style-muted {\n  opacity: .5;\n}\n\n.text-style-quote {\n  border-left: .25em solid var(--base-color--brand-primary);\n  padding-top: .5em;\n  padding-bottom: .5em;\n  padding-left: 1.25em;\n  font-size: 1.25em;\n  line-height: 1.4;\n}\n\n.form_component {\n  margin-bottom: 0;\n}\n\n.spacer-40px {\n  width: 100%;\n  padding-top: 2.5em;\n}\n\n.spacer-40px:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .spacer-40px:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933), .spacer-40px:where(.w-variant-81f74197-d706-52d9-1913-95cee790e695), .spacer-40px:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2), .spacer-40px:where(.w-variant-d894e45c-071f-7af1-4f2f-b99ed46a0f2f), .spacer-40px.style-41, .spacer-40px.style-56 {\n  display: none;\n}\n\n.button-wrap {\n  flex: none;\n  width: fit-content;\n  text-decoration: none;\n}\n\n.button-wrap:hover {\n  color: var(--base-color--true-black);\n}\n\n.button-wrap.full-width {\n  width: 100%;\n}\n\n.text-align-left {\n  text-align: left;\n}\n\n.text-color-secondary {\n  color: var(--base-color--grey-primary);\n}\n\n.spacer-20px {\n  width: 100%;\n  padding-top: 1.25em;\n}\n\n.text-style-strikethrough {\n  text-decoration: line-through;\n}\n\n.fs-styleguide_spacing {\n  grid-column-gap: .5rem;\n  grid-row-gap: .5rem;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr;\n  grid-auto-columns: 1fr;\n  place-content: start;\n  place-items: start stretch;\n  display: grid;\n  position: relative;\n}\n\n.form_radio {\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 0;\n  padding-left: 0;\n  display: flex;\n}\n\n.form_radio.is-single {\n  margin-bottom: 1em;\n}\n\n.spacer-32px {\n  width: 100%;\n  padding-top: 2em;\n}\n\n.form_checkbox-label {\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.4;\n}\n\n.hide {\n  display: none;\n}\n\n.heading-style-h1 {\n  font-size: 3.5em;\n  font-weight: 700;\n  line-height: 1.1;\n}\n\n.overflow-scroll {\n  overflow: scroll;\n}\n\n.max-width-small {\n  width: 100%;\n  max-width: 24em;\n}\n\n.text-color-primary {\n  color: var(--base-color--true-black);\n}\n\n.fs-styleguide_colors {\n  padding-top: 7.5em;\n  padding-bottom: 7.5em;\n}\n\n.form_radio-icon {\n  border: 1px solid var(--base-color--brand-primary);\n  background-color: var(--base-color--true-white);\n  width: 1.25em;\n  height: 1.25em;\n  margin-top: 0;\n  margin-left: 0;\n  margin-right: .75em;\n}\n\n.form_radio-icon:hover {\n  background-color: var(--base-color--brand-lighter);\n}\n\n.form_radio-icon.w--redirected-checked {\n  background-color: var(--base-color--brand-primary);\n  box-shadow: inset 0 0 0 5px var(--base-color--true-white);\n}\n\n.form_radio-icon.w--redirected-focus {\n  box-shadow: 0 0 .25rem 0 #fff0;\n}\n\n.is--primary-color {\n  color: #4e55ff;\n  background-color: #4e55ff;\n}\n\n.fs-styleguide_label {\n  background-color: var(--base-color--true-black);\n  color: #fff;\n  border-radius: .25rem;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: .25rem .75rem .3rem;\n  font-weight: 600;\n  display: flex;\n}\n\n.fs-styleguide_label.is-tag {\n  background-color: var(--base-color--brand-primary);\n}\n\n.fs-styleguide_buttons {\n  padding-top: 7.5em;\n  padding-bottom: 7.5em;\n}\n\n.z-index-1 {\n  z-index: 1;\n  position: relative;\n}\n\n.text-align-right {\n  text-align: right;\n}\n\n.text-weight-normal {\n  font-weight: 400;\n}\n\n.fs-styleguide_flexbox {\n  padding-top: 7.5em;\n  padding-bottom: 7.5em;\n}\n\n.spacer-120px {\n  padding-top: 7.5em;\n}\n\n.spacer-240px {\n  padding-top: 15em;\n}\n\n.fs-styleguide_item {\n  grid-column-gap: 1.125rem;\n  grid-row-gap: 1.125rem;\n  border-bottom: 1px solid #0000001a;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr;\n  grid-auto-columns: 1fr;\n  place-content: start;\n  place-items: start;\n  padding-bottom: 3em;\n  display: grid;\n  position: relative;\n}\n\n.fs-styleguide_item.is-stretch {\n  justify-items: stretch;\n}\n\n.text-weight-light {\n  font-weight: 300;\n}\n\n.fs-styleguide_classes {\n  grid-column-gap: 1px;\n  grid-row-gap: 1px;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.form_field-wrap {\n  flex: 1;\n  margin-bottom: 1em;\n}\n\n.form_field-wrap.is-campaign {\n  margin-bottom: 1.5em;\n}\n\n.form_field-wrap.is-campaign.is-industry-other {\n  display: none;\n}\n\n.heading-style-h5 {\n  font-size: 1.25em;\n  font-weight: 700;\n  line-height: 1.4;\n}\n\n.heading-style-h5.text-weight-normal {\n  font-weight: 400;\n}\n\n.fs-styleguide_headings {\n  padding-top: 7.5em;\n  padding-bottom: 7.5em;\n}\n\n.fs-styleguide_heading-header {\n  font-size: 6em;\n}\n\n.spacer-24px {\n  padding-top: 1.5em;\n}\n\n.spacer-24px:where(.w-variant-a9399cc1-a0a7-2667-433b-4f85aa85a84a), .spacer-24px:where(.w-variant-95ad2457-fc61-2145-2174-762a27da01b1), .spacer-24px:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n  display: none;\n}\n\n.overflow-auto {\n  overflow: auto;\n}\n\n.text-style-italic {\n  font-style: italic;\n}\n\n.text-weight-semibold {\n  font-weight: 600;\n}\n\n.text-weight-semibold.is-cpa-about {\n  flex: none;\n}\n\n.fs-styleguide_2-col {\n  grid-column-gap: 4rem;\n  grid-row-gap: 4rem;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  width: 100%;\n  display: grid;\n}\n\n.spacer-12px {\n  width: 100%;\n  padding-top: .75em;\n}\n\n.fs-styleguide_empty-box {\n  z-index: -1;\n  border: 1px dashed var(--base-color--brand-primary);\n  background-color: #009ba90d;\n  min-width: 3rem;\n  height: 3rem;\n  position: relative;\n}\n\n.container-md {\n  width: 100%;\n  max-width: 80em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.flex-space-around {\n  justify-content: space-around;\n  display: flex;\n}\n\n.heading-style-h4 {\n  font-size: 1.5em;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\n.padding-global {\n  padding-left: 4%;\n  padding-right: 4%;\n}\n\n.padding-global.height--full {\n  height: 100%;\n}\n\n.spacer-56px {\n  width: 100%;\n  padding-top: 3.5em;\n}\n\n.text-size-md {\n  font-size: 1.125em;\n}\n\n.flex-vertical-left {\n  flex-direction: column;\n  align-items: flex-start;\n  display: flex;\n}\n\n.fs-styleguide_text-classes {\n  padding-top: 7.5em;\n  padding-bottom: 7.5em;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.max-width-xxlarge {\n  width: 100%;\n  max-width: 100em;\n}\n\n.fs-styleguide_hero-label {\n  color: #fff;\n  text-transform: uppercase;\n  background-color: #4e55ff;\n  border-radius: .25rem;\n  padding: .25rem .375rem;\n  font-size: .75rem;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.max-width-large {\n  width: 100%;\n  max-width: 64em;\n}\n\n.fs-styleguide_heading-medium {\n  font-size: 4rem;\n}\n\n.super-text {\n  font-size: 6em;\n  font-weight: 600;\n  line-height: 1;\n}\n\n.text-size-sm {\n  text-wrap: pretty;\n  font-size: 1em;\n}\n\n.text-size-sm.text-align-center.is-campaign-footer {\n  opacity: .5;\n}\n\n.caption-md {\n  font-size: .875em;\n}\n\n.form_checkbox {\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 0;\n  padding-left: 0;\n  display: flex;\n}\n\n.form_checkbox.is-single {\n  margin-bottom: 1em;\n}\n\n.is--grey {\n  color: #1b1e1f;\n  background-color: #1b1e1f;\n}\n\n.flex-center {\n  flex-direction: column;\n  align-items: center;\n  display: flex;\n}\n\n.spacer-96px {\n  padding-top: 6em;\n}\n\n.text-style-allcaps {\n  text-transform: uppercase;\n}\n\n.form_radio-label {\n  font-size: 1em;\n  font-weight: 400;\n  line-height: 1.4;\n}\n\n.container-lg {\n  width: 100%;\n  max-width: 90em;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.fs-styleguide_structure {\n  padding-top: 7.5em;\n  padding-bottom: 7.5em;\n}\n\n.text-weight-bold {\n  font-weight: 700;\n}\n\n.fs-styleguide_3-col {\n  grid-column-gap: 4rem;\n  grid-row-gap: 4rem;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  align-items: stretch;\n  width: 100%;\n  display: grid;\n}\n\n.fs-styleguide_background-space {\n  width: 1px;\n  height: 1px;\n  margin: 5rem;\n}\n\n.fs-styleguide_max-width {\n  padding-top: 7.5em;\n  padding-bottom: 7.5em;\n}\n\n.flex-vertical-right {\n  flex-direction: column;\n  align-items: flex-end;\n  display: flex;\n}\n\n.fs-styleguide_spacers {\n  padding-top: 7.5em;\n  padding-bottom: 7.5em;\n}\n\n.button-group {\n  grid-column-gap: .75em;\n  grid-row-gap: .75em;\n  flex-flow: wrap;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.button-group:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n  flex-flow: row;\n}\n\n.button-group._w-link {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n}\n\n.button-group.feature-5, .button-group.feature-6 {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.button-group.is-hero-2:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933), .button-group.is-hero-2:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2) {\n  flex-flow: wrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.button-group.is-cta-side-by-side {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.button-group.is-cta-side-by-side:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933), .button-group.is-cta-side-by-side:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2) {\n  flex-flow: wrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.button-group.style-44, .button-group.style-59 {\n  flex-flow: row;\n}\n\n.global-styles {\n  display: block;\n  position: fixed;\n  inset: 0% auto auto 0%;\n}\n\n.spacer-16px {\n  width: 100%;\n  padding-top: 1em;\n}\n\n.max-width-xsmall {\n  width: 100%;\n  max-width: 16em;\n}\n\n.fs-styleguide_message {\n  color: #fa0;\n  background-color: #fff6e5;\n  border-radius: .25rem;\n  padding: .25rem .5rem;\n  font-size: .875rem;\n}\n\n.spacer-80px {\n  padding-top: 5em;\n}\n\n.spacer-80px:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5), .spacer-80px:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n  display: none;\n}\n\n.fs-styleguide_4-col {\n  grid-column-gap: 4rem;\n  grid-row-gap: 4rem;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  width: 100%;\n  display: grid;\n}\n\n.text-size-lg {\n  font-size: 1.25em;\n}\n\n.text-size-lg.text-weight-semibold:where(.w-variant-51fc333e-bc02-5e9b-52f5-c7b50bc0c30f) {\n  display: none;\n}\n\n.text-size-lg.text-weight-semibold:where(.w-variant-25edd254-87b8-b6f7-298a-56807f1a33f5) {\n  display: block;\n}\n\n.text-size-lg.is-campaign-reviews {\n  flex: 1;\n}\n\n.form_checkbox-icon {\n  border: 1px solid var(--base-color--brand-primary);\n  background-color: var(--base-color--true-white);\n  border-radius: .25rem;\n  width: 1.25em;\n  height: 1.25em;\n  margin: 0 .75em 0 0;\n}\n\n.form_checkbox-icon:hover {\n  background-color: var(--base-color--brand-lighter);\n}\n\n.form_checkbox-icon.w--redirected-checked {\n  border-color: var(--base-color--brand-primary);\n  background-color: var(--base-color--brand-primary);\n  background-image: url('../images/uil_check_1uil_check.png');\n  background-position: 50%;\n  background-size: cover;\n  margin: 0 .75em 0 0;\n}\n\n.form_checkbox-icon.w--redirected-focus {\n  border-radius: .25rem;\n  margin: 0 .75em 0 0;\n  box-shadow: 0 0 .25rem 0 #fff0;\n}\n\n.fs-styleguide_section-header {\n  grid-column-gap: 1rem;\n  grid-row-gap: 1rem;\n  border-bottom: 1px solid #a4a5a5;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr;\n  grid-auto-columns: 1fr;\n  width: 100%;\n  padding-bottom: 3rem;\n  line-height: 1.4;\n  display: grid;\n}\n\n.text-style-nowrap {\n  white-space: nowrap;\n}\n\n.max-width-medium {\n  width: 100%;\n  max-width: 40em;\n}\n\n.z-index-2 {\n  z-index: 2;\n  position: relative;\n}\n\n.flex-space-between {\n  justify-content: space-between;\n  display: flex;\n}\n\n.spacer-48px {\n  width: 100%;\n  padding-top: 3em;\n}\n\n.form_label {\n  margin-bottom: .375em;\n  font-size: 1em;\n  font-weight: 500;\n}\n\n.form_input {\n  border: 1px solid var(--base-color--grey-light);\n  min-height: 2.5em;\n  color: var(--base-color--true-black);\n  background-color: #0000;\n  border-radius: .5rem;\n  margin-bottom: 0;\n  padding: .75em 1em;\n  font-size: 1.125em;\n  transition: border-color .2s;\n}\n\n.form_input:hover, .form_input:focus {\n  border-color: var(--base-color--brand-primary);\n}\n\n.form_input::placeholder {\n  color: #00000080;\n}\n\n.form_input.is-select-input {\n  background-image: url('../images/line-md_chevron-up.png');\n  background-position: 95%;\n  background-repeat: no-repeat;\n  background-size: 16px 16px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.form_input.is-text-area {\n  min-height: 12.5em;\n}\n\n.form_input.is-text-area.is-campaign {\n  min-height: 5em;\n}\n\n.is--grey-light1 {\n  background-color: #494b4c;\n}\n\n.container-sm {\n  width: 100%;\n  max-width: 64em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.spacer-64px {\n  width: 100%;\n  padding-top: 4em;\n}\n\n.spacer-64px:where(.w-variant-a9399cc1-a0a7-2667-433b-4f85aa85a84a) {\n  display: none;\n}\n\n.text-style-link {\n  font-weight: 500;\n  text-decoration: underline;\n  transition: color .2s;\n}\n\n.text-style-link:hover {\n  color: #7177ff;\n}\n\n.fs-styleguide_row {\n  grid-column-gap: .75rem;\n  grid-row-gap: .75rem;\n  flex-direction: row;\n  grid-template-rows: auto;\n  grid-template-columns: auto;\n  grid-auto-columns: auto;\n  grid-auto-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.fs-styleguide_1-col {\n  grid-column-gap: 3rem;\n  grid-row-gap: 3rem;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr;\n  grid-auto-columns: 1fr;\n  width: 100%;\n  display: grid;\n}\n\n.fs-styleguide_spacer-box {\n  border: 1px dashed var(--base-color--brand-primary);\n  background-color: #009ba90d;\n  width: 100%;\n  position: relative;\n}\n\n.max-width-xxsmall {\n  width: 100%;\n  max-width: 12em;\n}\n\n.fs-styleguide_header {\n  background-color: var(--base-color--brand-darker);\n  color: #fff;\n  padding-top: 8em;\n  padding-bottom: 8em;\n}\n\n.fs-styleguide_other-tags {\n  padding-top: 7.5em;\n  padding-bottom: 7.5em;\n}\n\n.button-secondary {\n  grid-column-gap: .5em;\n  background-color: var(--base-color--true-white);\n  color: var(--base-color--true-black);\n  border-radius: 40rem;\n  justify-content: center;\n  align-items: center;\n  width: fit-content;\n  padding: .75em 2em;\n  font-weight: 600;\n  transition-property: all;\n  transition-duration: .2s;\n  transition-timing-function: ease;\n  display: flex;\n  box-shadow: 0 8px 24px #959da533;\n}\n\n.button-secondary:hover {\n  background-color: var(--base-color--true-black);\n  color: var(--base-color--true-white);\n  box-shadow: 0 8px 24px #959da599;\n}\n\n.button-secondary:focus {\n  box-shadow: 0 0 0 3px #009ba94d;\n}\n\n.button-secondary.is-large {\n  padding: 1em 2em;\n}\n\n.button-secondary.is-ghost {\n  color: #000;\n  background-color: #0000;\n  border: 2px solid #0000;\n}\n\n.button-secondary.is-small {\n  padding: .5em 1.25em;\n  font-size: 1em;\n}\n\n.background-color-brand {\n  background-color: var(--base-color--brand-primary);\n}\n\n.background-color-dark {\n  background-color: var(--base-color--true-black);\n}\n\n.overflow-auto-x, .overflow-auto-y {\n  overflow-x: auto;\n}\n\n.show-tablet, .show-mobile-portrait, .show-mobile-landscape, .page-css, .page-js {\n  display: none;\n}\n\n.navbar {\n  z-index: 99;\n  background-color: var(--base-color--true-white);\n  padding-top: 1em;\n  padding-bottom: 1em;\n  position: sticky;\n  top: 0;\n}\n\n.nav_leftbox:where(.w-variant-cf65633f-2a96-e077-1d1b-d50579053f83) {\n  position: absolute;\n}\n\n.nav_rightbox {\n  display: flex;\n}\n\n.nav_rightbox:where(.w-variant-cf65633f-2a96-e077-1d1b-d50579053f83) {\n  flex: 1;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav_rightbox:where(.w-variant-328ffe14-7867-40e6-f65d-03370d5965ac) {\n  flex: 1;\n}\n\n.nav_logo {\n  width: 12.3em;\n  height: 2.5em;\n}\n\n.nav_actions {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.nav_actions:where(.w-variant-cf65633f-2a96-e077-1d1b-d50579053f83) {\n  flex: 1;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}\n\n.nav_actions:where(.w-variant-328ffe14-7867-40e6-f65d-03370d5965ac) {\n  flex: 1;\n}\n\n.nav_menu-trigger-wrap {\n  flex-flow: column;\n  justify-content: space-between;\n  width: 2.5em;\n  height: 2em;\n  display: none;\n  position: relative;\n}\n\n.nav_menu-trigger_line {\n  background-color: var(--base-color--grey-primary);\n  width: 100%;\n  height: .3em;\n}\n\n.nav_menu-trigger_line.line-1 {\n  position: absolute;\n  inset: 0% 0% auto;\n}\n\n.nav_menu-trigger_line.line-2 {\n  position: absolute;\n  inset: 40% 0% auto;\n}\n\n.nav_menu-trigger_line.line-3 {\n  position: absolute;\n  inset: auto 0% 0%;\n}\n\n.nav_link {\n  color: var(--base-color--brand-primary);\n}\n\n.nav_link:hover, .nav_link.text-weight-semibold.w--current {\n  color: var(--base-color--star-yellow);\n}\n\n.nav_flexwrap {\n  grid-column-gap: 2.5em;\n  grid-row-gap: 2.5em;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n}\n\n.nav_flexwrap:where(.w-variant-cf65633f-2a96-e077-1d1b-d50579053f83) {\n  justify-content: center;\n  align-items: center;\n}\n\n.nav_flexwrap:where(.w-variant-328ffe14-7867-40e6-f65d-03370d5965ac) {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer {\n  border-top: 1px solid var(--base-color--brand-primary);\n  background-color: var(--base-color--brand-lighter);\n  padding-top: 5em;\n  padding-bottom: 2.5em;\n}\n\n.footer_grid {\n  grid-column-gap: 2.5em;\n  grid-row-gap: 2.5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1.25fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.footer_grid:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.footer_grid.footer-2 {\n  grid-column-gap: 2.5em;\n  grid-row-gap: 2.5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  justify-content: center;\n  align-items: start;\n  display: grid;\n  position: relative;\n}\n\n.footer_grid.footer-2:where(.w-variant-febd92e3-a6bf-6989-b44f-7d5e7c14382c) {\n  flex-flow: column;\n}\n\n.footer_left-content {\n  max-width: 24em;\n}\n\n.footer_left-content:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n  text-align: center;\n}\n\n.footer_left-content.footer-2 {\n  flex: 1;\n}\n\n.footer_logo {\n  width: 12.3em;\n  height: 2.5em;\n}\n\n.footer_column {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  flex-flow: column;\n  display: flex;\n}\n\n.footer_column:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n  grid-column-gap: 2.5em;\n  grid-row-gap: 2.5em;\n  flex-flow: row;\n}\n\n.footer_column.footer-2 {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  flex-flow: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer_column_title {\n  color: var(--base-color--grey-primary);\n  text-transform: uppercase;\n  font-size: .875em;\n  font-weight: 500;\n}\n\n.footer_column_title:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n  display: none;\n}\n\n.footnote {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.footer_right-content {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.footer_right-content:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  grid-template-columns: 1fr;\n}\n\n.nav_link-wrap {\n  grid-column-gap: 2em;\n  grid-row-gap: 2em;\n  display: flex;\n}\n\n.nav_link-wrap:where(.w-variant-328ffe14-7867-40e6-f65d-03370d5965ac) {\n  flex: 1;\n}\n\n.feature-section {\n  background-image: linear-gradient(#f6fcfb, #fff);\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.hero_grid {\n  grid-column-gap: 2.5em;\n  grid-row-gap: 2.5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  padding-left: 5em;\n  padding-right: 5em;\n  display: grid;\n}\n\n.hero_grid:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9), .hero_grid:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .hero_grid.style-20, .hero_grid.style-35, .hero_grid.style-50 {\n  grid-template-columns: 1fr;\n}\n\n.hero_grid.is-carousel {\n  background-color: var(--background-color);\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.hero_grid.is-carousel.is-event {\n  grid-template-columns: 1fr;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.hero_leftbox {\n  flex-flow: column;\n  justify-content: center;\n  align-items: flex-start;\n  display: flex;\n}\n\n.hero_leftbox:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9) {\n  text-align: center;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.hero_leftbox:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n  text-align: center;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.hero_leftbox.style-21 {\n  text-align: center;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.hero_leftbox.style-36, .hero_leftbox.style-51 {\n  text-align: center;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.hero_leftbox.privacy {\n  justify-content: center;\n  align-items: center;\n  margin-top: 6em;\n}\n\n.hero_leftbox.is-carousel {\n  z-index: 1;\n  position: relative;\n}\n\n.hero_leftbox.flex-center {\n  justify-content: center;\n  align-items: center;\n}\n\n.hero_rightbox {\n  border-radius: 1rem;\n  position: relative;\n  overflow: hidden;\n}\n\n.hero_img {\n  object-fit: contain;\n  width: 100%;\n  height: 48em;\n}\n\n.hero_img:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9), .hero_img:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n  height: auto;\n}\n\n.hero_img.style-16.height-24-em {\n  height: 24em;\n}\n\n.hero_img.style-31, .hero_img.style-46 {\n  height: auto;\n}\n\n.hero_img.style-61 {\n  height: auto;\n  display: none;\n}\n\n.hero_img.is-pricing {\n  height: 32em;\n}\n\n.text-color-brand {\n  color: var(--base-color--brand-primary);\n  text-shadow: 0 0 1px #0000004d;\n}\n\n.text-color-brand.style-55 {\n  text-align: center;\n}\n\n.feature_grid {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.feature_grid:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9), .feature_grid:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .feature_grid.feature-4 {\n  grid-template-columns: 1fr;\n}\n\n.feature_grid.feature-5 {\n  grid-column-gap: 0em;\n  grid-row-gap: 0em;\n  grid-template-columns: 1fr 1fr;\n}\n\n.feature_grid.turtleci {\n  display: block;\n}\n\n.feature_leftbox {\n  flex-flow: column;\n  justify-content: center;\n  align-items: flex-start;\n  display: flex;\n}\n\n.feature_leftbox:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9), .feature_leftbox:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n  text-align: center;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.feature_leftbox.feature-4 {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.feature_leftbox.feature-5, .feature_leftbox.feature-6 {\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-right: 5em;\n}\n\n.feature_rightbox {\n  border-radius: 1rem;\n  position: relative;\n  overflow: hidden;\n}\n\n.feature_rightbox.feature-5 {\n  border-radius: 0;\n  overflow: visible;\n}\n\n.basic_img {\n  width: 100%;\n}\n\n.basic_img:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9), .basic_img:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n  height: auto;\n}\n\n.basic_img.ratio--square {\n  aspect-ratio: 1;\n}\n\n.basic_img.ratio-16-9 {\n  aspect-ratio: 16 / 9;\n}\n\n.marquee-logo-section {\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.marquee-logo_wrap {\n  overflow: visible;\n}\n\n.marquee-logo_collection {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.marquee-logo_list {\n  flex: none;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.marquee-logo_item {\n  flex: none;\n  margin-right: 5em;\n}\n\n.marquee-logo_code {\n  display: none;\n}\n\n.marquee-logo_header {\n  text-align: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.marquee-logo_header:where(.w-variant-a9399cc1-a0a7-2667-433b-4f85aa85a84a) {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  text-align: left;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: none;\n  margin-bottom: 4em;\n  display: flex;\n}\n\n.hero-section {\n  background-image: linear-gradient(#fff, #f6fcfb);\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.hero-section._w-bg {\n  position: relative;\n}\n\n.hero-section.no-margin {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.hero-section._100vh {\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  display: flex;\n}\n\n.hero-section.is-blog {\n  padding-top: 10em;\n}\n\n.feature_list {\n  grid-column-gap: 2.5em;\n  grid-row-gap: 2.5em;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  width: 100%;\n  display: grid;\n}\n\n.feature_list.feature-3 {\n  grid-template-columns: 1fr;\n}\n\n.feature_list.feature-4 {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n.feature_list.feature-5, .feature_list.feature-6 {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n}\n\n.feature_item {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  flex-flow: column;\n  display: flex;\n}\n\n.feature_item.feature-3 {\n  flex-flow: row;\n}\n\n.feature_item.feature-4 {\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.feature_item.feature-5, .feature_item.feature-6 {\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.feature_item_img {\n  width: 2em;\n  height: 2em;\n}\n\n.feature_header {\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.feature_img-wrap {\n  border-radius: 1rem;\n  position: relative;\n  overflow: hidden;\n}\n\n.feature_img-wrap.feature-5 {\n  border-radius: 0;\n  overflow: visible;\n}\n\n.carousel-section {\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.carousel_list.swiper-wrapper {\n  display: flex;\n}\n\n.carousel_item.swiper-slide {\n  border: 1.25px solid var(--base-color--star-yellow);\n  border-radius: 16px;\n  flex: none;\n  width: 28em;\n  box-shadow: 0 25px 20px -17px #00000040;\n}\n\n.carousel_img {\n  aspect-ratio: 1;\n  border-radius: .75rem;\n  width: 100%;\n  transition: border-radius .4s;\n}\n\n.carousel_card:hover {\n  color: var(--base-color--true-black);\n}\n\n.carousel_header {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  justify-content: flex-start;\n  align-items: flex-end;\n  display: flex;\n}\n\n.carousel_header_leftbox {\n  flex: 1;\n}\n\n.carousel_navigation {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  display: flex;\n}\n\n.carousel_navigation-btn-prev {\n  border: 1px solid var(--base-color--grey-light);\n  border-radius: .5rem;\n  justify-content: center;\n  align-items: center;\n  width: 2.5em;\n  height: 2.5em;\n  transition: opacity .2s, border-color .2s;\n  display: flex;\n}\n\n.carousel_navigation-btn-prev:hover {\n  border-color: var(--base-color--brand-primary);\n}\n\n.carousel_navigation-btn-prev.swiper-button-disabled {\n  opacity: .5;\n  pointer-events: none;\n}\n\n.carousel_navigatio-btn_ic {\n  width: 1.5em;\n  height: 1.5em;\n}\n\n.carousel_navigation-btn-next {\n  border: 1px solid var(--base-color--grey-light);\n  border-radius: .5rem;\n  justify-content: center;\n  align-items: center;\n  width: 2.5em;\n  height: 2.5em;\n  transition: opacity .2s, border-color .2s;\n  display: flex;\n}\n\n.carousel_navigation-btn-next:hover {\n  border-color: var(--base-color--brand-primary);\n}\n\n.carousel_navigation-btn-next.swiper-button-disabled {\n  opacity: .5;\n  pointer-events: none;\n}\n\n.carousel_bottom {\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n}\n\n.carousel_pagination {\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  display: flex;\n}\n\n.swiper-pagination-bullet {\n  background-color: var(--base-color--grey-light);\n  cursor: pointer;\n  border-radius: 20rem;\n  width: 1em;\n  height: .5em;\n  transition: width .3s, background-color .2s;\n}\n\n.swiper-pagination-bullet-active {\n  background-color: var(--base-color--brand-primary);\n  cursor: pointer;\n  border-radius: 20rem;\n  width: 2.5em;\n  height: .5em;\n  transition: width .3s, background-color .2s;\n}\n\n.carousel_scrollbar {\n  background-color: var(--base-color--grey-light);\n  border-radius: 20rem;\n  width: 16em;\n  height: .5em;\n  position: relative;\n}\n\n.swiper-scrollbar-drag {\n  background-color: var(--base-color--brand-primary);\n  border-radius: 20rem;\n  height: 100%;\n}\n\n.footer_center-block {\n  grid-column-gap: 2em;\n  grid-row-gap: 2em;\n  flex-flow: row;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n  display: grid;\n}\n\n.footer_center-block:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n  grid-column-gap: 2.5em;\n  grid-row-gap: 2.5em;\n  flex-flow: row;\n}\n\n.footer_center-block:where(.w-variant-febd92e3-a6bf-6989-b44f-7d5e7c14382c) {\n  position: relative;\n}\n\n.footer_center-block.footer-2 {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  flex-flow: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer_right-block {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  flex: 1;\n  justify-content: flex-end;\n  align-items: center;\n  display: flex;\n}\n\n.footer_social-ic {\n  flex: none;\n  width: 2em;\n  height: 2em;\n}\n\n.footer_social {\n  grid-column-gap: .75em;\n  grid-row-gap: .75em;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.footer_right-block-2 {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  flex: 1;\n  justify-content: flex-end;\n  align-items: center;\n  display: flex;\n}\n\n.content-row-heading {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.cell {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.content-row-3-col {\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  display: grid;\n}\n\n.content-row-3-col:where(.w-variant-8a95e8ec-dc05-54b1-6bc3-03979f912989) {\n  background-color: var(--base-color--grey-light);\n}\n\n.content-row-3-col.grey {\n  background-color: #eee;\n}\n\n.svg_check {\n  width: 24px;\n  height: 24px;\n  overflow: hidden;\n}\n\n.table-slots {\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n.first-row-3-column {\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  display: grid;\n}\n\n.first-row-4-column, .content-row-4-col {\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  display: grid;\n}\n\n.content-row-4-col:where(.w-variant-8a95e8ec-dc05-54b1-6bc3-03979f912989), .content-row-4-col:where(.w-variant-dcca28b4-e17a-9dde-a99b-d3730c2bdd8f) {\n  background-color: var(--base-color--grey-light);\n}\n\n.content-row-4-col.grey {\n  background-color: #eee;\n}\n\n.check-icon {\n  width: 24px;\n  height: 24px;\n  display: none;\n}\n\n.check-icon:where(.w-variant-51fc333e-bc02-5e9b-52f5-c7b50bc0c30f) {\n  display: block;\n}\n\n.x-icon {\n  width: 24px;\n  height: 24px;\n  display: none;\n}\n\n.x-icon:where(.w-variant-51fc333e-bc02-5e9b-52f5-c7b50bc0c30f) {\n  display: none;\n}\n\n.x-icon:where(.w-variant-29981834-0582-1b0f-2e22-4acb60000a7b) {\n  display: block;\n}\n\n.heading:where(.w-variant-51fc333e-bc02-5e9b-52f5-c7b50bc0c30f), .heading:where(.w-variant-29981834-0582-1b0f-2e22-4acb60000a7b), .heading:where(.w-variant-25edd254-87b8-b6f7-298a-56807f1a33f5), .heading:where(.w-variant-44c14af6-c010-7da6-c621-2efd38cdf0dc) {\n  display: none;\n}\n\n.dash-icon {\n  width: 24px;\n  height: 24px;\n  display: none;\n}\n\n.dash-icon:where(.w-variant-44c14af6-c010-7da6-c621-2efd38cdf0dc) {\n  display: block;\n}\n\n.cta_heading-wrap:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .cta_heading-wrap:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933) {\n  text-align: left;\n  max-width: 40em;\n}\n\n.cta_heading-wrap:where(.w-variant-81f74197-d706-52d9-1913-95cee790e695) {\n  text-align: left;\n}\n\n.cta_heading-wrap:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2) {\n  text-align: left;\n  max-width: 40em;\n}\n\n.cta_heading-wrap:where(.w-variant-d894e45c-071f-7af1-4f2f-b99ed46a0f2f) {\n  text-align: left;\n}\n\n.cta_heading-wrap.style-37, .cta_heading-wrap.style-52 {\n  text-align: left;\n  max-width: 40em;\n}\n\n.hero_content-wrap {\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  display: flex;\n}\n\n.hero_content-wrap:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9) {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.hero_content-wrap:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n  text-align: left;\n  max-width: 32em;\n}\n\n.hero_content-wrap.is-hero-2 {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.hero_content-wrap.is-hero-2:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933) {\n  text-align: left;\n  justify-content: flex-start;\n  align-items: flex-start;\n  max-width: 32em;\n}\n\n.hero_content-wrap.style-27 {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.hero_content-wrap.style-42, .hero_content-wrap.style-57 {\n  text-align: left;\n  max-width: 32em;\n}\n\n.cta_bg-wrap {\n  position: absolute;\n  inset: 0%;\n}\n\n.cta_bg-img {\n  width: 100%;\n  height: 100%;\n}\n\n.cta_bg-overlay {\n  background-color: var(--base-color--overlay);\n  position: absolute;\n  inset: 0%;\n}\n\n.cta_w-bg_main {\n  z-index: 1;\n  max-width: 40em;\n  height: 100%;\n  color: var(--base-color--true-white);\n  text-align: center;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  position: relative;\n}\n\n.cta_w-bg_main:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933) {\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n}\n\n.cta_w-bg_main:where(.w-variant-81f74197-d706-52d9-1913-95cee790e695) {\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.cta_w-bg_main:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2) {\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n}\n\n.cta_w-bg_main:where(.w-variant-d894e45c-071f-7af1-4f2f-b99ed46a0f2f) {\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.cta_w-bg_main.side-by-side {\n  max-width: none;\n  color: var(--base-color--true-black);\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.cta-section {\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.cta-section._w-bg {\n  position: relative;\n}\n\n.cta_content-wrap:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933) {\n  text-align: left;\n  max-width: 32em;\n}\n\n.cta_content-wrap:where(.w-variant-81f74197-d706-52d9-1913-95cee790e695) {\n  text-align: left;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  max-width: 32em;\n  display: flex;\n}\n\n.cta_content-wrap:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2) {\n  text-align: left;\n  max-width: 32em;\n}\n\n.cta_content-wrap:where(.w-variant-d894e45c-071f-7af1-4f2f-b99ed46a0f2f) {\n  text-align: left;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  max-width: 32em;\n  display: flex;\n}\n\n.cta_box-wrap {\n  background-color: var(--base-color--brand-primary);\n  border-radius: 1rem;\n  padding: 5em 1.5em;\n  position: relative;\n  overflow: clip;\n}\n\n.cta_box-wrap.side-by-side {\n  padding: 0;\n}\n\n.marquee-logo_text-wrap:where(.w-variant-a9399cc1-a0a7-2667-433b-4f85aa85a84a) {\n  max-width: 32em;\n}\n\n.timeline-grid {\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  place-items: start stretch;\n  display: grid;\n}\n\n.timeline-leftbox {\n  position: sticky;\n  top: 5rem;\n}\n\n.heading-tagline {\n  font-size: .875em;\n  font-weight: 600;\n}\n\n.timeline-content-atom {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.cta_leftbox.side-by-side {\n  text-align: left;\n  padding: 5em;\n}\n\n.cta_leftbox.side-by-side:where(.w-variant-384c281f-a5bd-8442-41b9-253cef14509e) {\n  padding-left: 5em;\n  padding-right: 5em;\n}\n\n.cta_rightbox, .cta_img {\n  width: 100%;\n  height: 100%;\n}\n\n.contact-section {\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.contact_main {\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.contact_main:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5) {\n  grid-column-gap: 7.5em;\n  grid-row-gap: 7.5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  max-width: none;\n  display: flex;\n}\n\n.contact_main:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n  grid-column-gap: 7.5em;\n  grid-row-gap: 7.5em;\n  flex-flow: row-reverse;\n  max-width: none;\n  display: flex;\n}\n\n.contact_header {\n  text-align: center;\n  max-width: 48em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.contact_header:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5) {\n  text-align: left;\n  flex: 1;\n  max-width: 32em;\n}\n\n.contact_header:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n  text-align: left;\n  max-width: 32em;\n}\n\n.form_checkbox-list {\n  grid-column-gap: 5em;\n  grid-row-gap: 1em;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n  display: grid;\n}\n\n.form_radio-icon-2 {\n  background-color: #fff;\n  border: 1px solid #009ba9;\n  width: 1.25em;\n  height: 1.25em;\n  margin-top: 0;\n  margin-left: 0;\n  margin-right: .75em;\n}\n\n.form_radio-icon-2:hover {\n  background-color: #ebfbff;\n}\n\n.form_radio-icon-2.w--redirected-checked {\n  background-color: #009ba9;\n  box-shadow: inset 0 0 0 5px #fff;\n}\n\n.form_radio-icon-2.w--redirected-focus {\n  box-shadow: 0 0 .25rem 0 #fff0;\n}\n\n.form_radio-list {\n  grid-column-gap: 5em;\n  grid-row-gap: 1em;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  margin-top: 1em;\n  margin-bottom: 2.5em;\n  display: grid;\n}\n\n.form_row {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  display: flex;\n}\n\n.form_row.is-campaign {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n}\n\n.form_slot, .contact_form-wrap:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5), .contact_form-wrap:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n  flex: 1;\n}\n\n.extra-info-item {\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  flex-flow: column;\n  flex: none;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.extra-info-item:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5) {\n  flex-flow: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.extra-info-item:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n  flex-flow: row;\n}\n\n.extra-info-list {\n  grid-column-gap: 2.5em;\n  grid-row-gap: 2.5em;\n  flex-flow: wrap;\n  justify-content: center;\n  display: flex;\n}\n\n.extra-info-list:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5), .extra-info-list:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  flex-flow: column;\n}\n\n.extra-info-icon {\n  width: 2.5em;\n  height: 2.5em;\n  color: var(--base-color--brand-primary);\n}\n\n.extra-info-icon:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5), .extra-info-icon:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n  width: 2em;\n  height: 2em;\n}\n\n.pricing-section {\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.pricing_header {\n  text-align: center;\n  max-width: 48em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pricing_header:where(.w-variant-8b717360-c2d0-c1c7-0a8d-051f0fe36cbe) {\n  text-align: left;\n  justify-content: space-between;\n  align-items: center;\n  max-width: none;\n  display: flex;\n}\n\n.pricing_list.column-amount-5 {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  grid-template-rows: auto;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.pricing_list.column-amount-4 {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  grid-template-rows: auto;\n  grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr);\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.pricing_list.column-amount-3 {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.pricing_list.column-amount-2, .pricing_list._2-columns {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.pricing_list.column-amount-1 {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.pricing_card {\n  grid-column-gap: 0em;\n  grid-row-gap: 0em;\n  border: 1px solid var(--base-color--grey-light);\n  background-color: var(--base-color--true-white);\n  border-radius: 1rem;\n  flex-flow: column;\n  width: 100%;\n  padding: 2.5em;\n  display: flex;\n  position: relative;\n  overflow: clip;\n}\n\n.pricing_card:where(.w-variant-a233221e-4c52-4b9c-9347-237465cb1417) {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n}\n\n.pricing_card:where(.w-variant-3c893124-1b5b-ba81-f177-11589869d8eb) {\n  grid-column-gap: 2em;\n  grid-row-gap: 2em;\n}\n\n.pricing_card:where(.w-variant-95ad2457-fc61-2145-2174-762a27da01b1) {\n  grid-column-gap: 0em;\n  grid-row-gap: 0em;\n  flex-flow: row;\n  padding-bottom: 7.5em;\n}\n\n.pricing_card:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n  grid-column-gap: 0em;\n  grid-row-gap: 0em;\n  flex-flow: row;\n}\n\n.pricing_card.is-recommended {\n  border-color: var(--base-color--brand-primary);\n  background-color: #12a89d0d;\n}\n\n.pricing_card_name {\n  color: var(--base-color--brand-primary);\n  font-size: 1.125em;\n  font-weight: 600;\n}\n\n.pricing_card_price-wrap {\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  justify-content: flex-start;\n  align-items: flex-end;\n  display: flex;\n}\n\n.pricing_card_price-wrap:where(.w-variant-a233221e-4c52-4b9c-9347-237465cb1417) {\n  margin-top: 1em;\n}\n\n.pricing_card_price-wrap.is-hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.pricing_card_price-number {\n  font-size: 2.5em;\n  font-weight: 700;\n  line-height: 1;\n}\n\n.pricing_card_price-unit {\n  font-size: 1.5em;\n  line-height: 1;\n}\n\n.pricing_card_description {\n  color: var(--base-color--grey-primary);\n  font-size: 1em;\n}\n\n.pricing_card_description.is-1 {\n  display: none;\n}\n\n.pricing_card_description.is-1:where(.w-variant-a233221e-4c52-4b9c-9347-237465cb1417), .pricing_card_description.is-1:where(.w-variant-3c893124-1b5b-ba81-f177-11589869d8eb) {\n  display: block;\n}\n\n.pricing_card_description.is-2:where(.w-variant-a233221e-4c52-4b9c-9347-237465cb1417) {\n  display: none;\n}\n\n.pricing_card_header {\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  flex-flow: column;\n  display: flex;\n}\n\n.pricing_card_header:where(.w-variant-a233221e-4c52-4b9c-9347-237465cb1417) {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n}\n\n.pricing_card_header:where(.w-variant-3c893124-1b5b-ba81-f177-11589869d8eb) {\n  grid-column-gap: 2em;\n  grid-row-gap: 2em;\n}\n\n.pricing_card_header:where(.w-variant-95ad2457-fc61-2145-2174-762a27da01b1), .pricing_card_header:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n  flex: 1;\n  padding-right: 2.5em;\n}\n\n.pricing_card_line {\n  background-color: var(--base-color--grey-lighter);\n  width: 100%;\n  height: 1px;\n}\n\n.pricing_card_line.is-1 {\n  display: none;\n}\n\n.pricing_card_line.is-1:where(.w-variant-a233221e-4c52-4b9c-9347-237465cb1417), .pricing_card_line.is-1:where(.w-variant-3c893124-1b5b-ba81-f177-11589869d8eb) {\n  display: block;\n}\n\n.pricing_card_line.is-2:where(.w-variant-a233221e-4c52-4b9c-9347-237465cb1417), .pricing_card_line.is-2:where(.w-variant-95ad2457-fc61-2145-2174-762a27da01b1), .pricing_card_line.is-2:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n  display: none;\n}\n\n.pricing_card_value-list {\n  grid-column-gap: .75em;\n  grid-row-gap: .75em;\n  color: var(--base-color--grey-primary);\n  flex-flow: column;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.pricing_card_value-list:where(.w-variant-3c893124-1b5b-ba81-f177-11589869d8eb) {\n  margin-bottom: 1em;\n}\n\n.pricing_card_value-list:where(.w-variant-95ad2457-fc61-2145-2174-762a27da01b1), .pricing_card_value-list:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n  width: 100%;\n}\n\n.pricing_card_value {\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.pricing_card_value-ic {\n  width: 1.25em;\n  height: 1.25em;\n  color: var(--base-color--brand-darker);\n}\n\n.pricing_card_img {\n  width: 2.5em;\n  height: 2.5em;\n  position: absolute;\n  inset: 1em 1em auto auto;\n}\n\n.pricing_card_img:where(.w-variant-95ad2457-fc61-2145-2174-762a27da01b1), .pricing_card_img:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n  display: none;\n}\n\n.pricing_card_header-content {\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  flex-flow: column;\n  display: flex;\n}\n\n.pricing_card_btn-wrap.is-2:where(.w-variant-a233221e-4c52-4b9c-9347-237465cb1417) {\n  display: none;\n}\n\n.pricing_card_btn-wrap.is-2:where(.w-variant-95ad2457-fc61-2145-2174-762a27da01b1) {\n  padding-bottom: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  position: absolute;\n  inset: auto 0% 0%;\n}\n\n.pricing_card_btn-wrap.is-2:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n  padding-bottom: 1em;\n  padding-left: 1em;\n  padding-right: 1em;\n  display: none;\n  position: absolute;\n  inset: auto 0% 0%;\n}\n\n.pricing_card_btn-wrap.is-1 {\n  display: none;\n}\n\n.pricing_card_btn-wrap.is-1:where(.w-variant-a233221e-4c52-4b9c-9347-237465cb1417) {\n  display: block;\n}\n\n.pricing_card_btn-wrap.is-1:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n  margin-top: 1.5em;\n  display: flex;\n}\n\n.pricing_card_bottom {\n  grid-column-gap: 2em;\n  grid-row-gap: 2em;\n  flex-flow: column;\n  display: flex;\n}\n\n.pricing_card_bottom:where(.w-variant-95ad2457-fc61-2145-2174-762a27da01b1) {\n  grid-column-gap: 2em;\n  grid-row-gap: 2em;\n  flex-flow: column;\n  flex: none;\n  align-items: flex-end;\n  width: 50%;\n  display: flex;\n}\n\n.pricing_card_bottom:where(.w-variant-a233221e-4c52-4b9c-9347-237465cb1417) {\n  margin-top: 1em;\n}\n\n.pricing_card_bottom:where(.w-variant-3c893124-1b5b-ba81-f177-11589869d8eb) {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n}\n\n.pricing_card_bottom:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n  grid-column-gap: 2em;\n  grid-row-gap: 2em;\n  flex-flow: column;\n  flex: none;\n  align-items: flex-end;\n  width: 60%;\n  display: flex;\n}\n\n.pricing_card_value-column {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  flex-flow: column;\n  width: 100%;\n  display: flex;\n}\n\n.pricing_card_value-column.is-1 {\n  padding-right: 2.5em;\n}\n\n.pricing_header_description-wrap:where(.w-variant-8b717360-c2d0-c1c7-0a8d-051f0fe36cbe) {\n  max-width: 32em;\n}\n\n.testimonial-section {\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.testimonial_header {\n  text-align: center;\n  max-width: 48em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.spacer-24px-2 {\n  padding-top: 1.5em;\n}\n\n.testimonial_grid {\n  grid-column-gap: 7.5em;\n  grid-row-gap: 7.5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  margin-left: auto;\n  margin-right: auto;\n  display: grid;\n}\n\n.testimonial_grid.column-2 {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n}\n\n.testimonial_grid.column-3 {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n.testimonial_grid.column-1 {\n  grid-template-columns: 1fr;\n  width: 40em;\n}\n\n.testimonial_card {\n  text-align: center;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.testimonial_card:where(.w-variant-188f400d-c527-a4be-6f0f-741ab39e6d12) {\n  border: 1px solid var(--base-color--grey-lighter);\n  border-radius: .75rem;\n  padding: 1.5em;\n}\n\n.testimonial_card:where(.w-variant-6cc5cbe9-2d01-cc1c-4123-de1c24e71be2) {\n  background-color: var(--base-color--grey-light);\n  border-radius: .75rem;\n  padding: 1.5em;\n}\n\n.testimonial_card:where(.w-variant-17c51010-f0be-7532-de14-016a7986bfda) {\n  border: 1px solid var(--base-color--grey-lighter);\n  border-radius: .75rem;\n  padding: 1.5em;\n}\n\n.testimonial_card:where(.w-variant-de640fec-4f7c-0945-b8c0-29e7158fc8e4) {\n  background-color: var(--base-color--grey-light);\n  border-radius: .75rem;\n  padding: 1.5em;\n}\n\n.testimonial_card:where(.w-variant-c0bf14bf-4ea2-e78d-c956-cbe54cf2942e) {\n  border: 1px solid var(--base-color--grey-lighter);\n  border-radius: .75rem;\n  padding: 1.5em;\n}\n\n.testimonial_card:where(.w-variant-e5585519-36c1-9263-9a10-27b9bf14b9a2) {\n  text-align: left;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.testimonial_card:where(.w-variant-2ea2b7ff-10a9-31ee-acd6-333083e1519d) {\n  border: 1px solid var(--base-color--grey-lighter);\n  text-align: left;\n  border-radius: .75rem;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 1.5em;\n}\n\n.testimonial_card:where(.w-variant-31b8c1e0-c996-3eda-de3e-b03f0f5a80fa) {\n  background-color: var(--base-color--grey-light);\n  text-align: left;\n  border-radius: .75rem;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 1.5em;\n}\n\n.testimonial_card:where(.w-variant-cf10c570-0f69-141a-4903-dae91a97e54b) {\n  text-align: left;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.testimonial_card:where(.w-variant-bb39ef81-28ea-805a-a00b-62173435b27f) {\n  border: 1px solid var(--base-color--grey-lighter);\n  text-align: left;\n  border-radius: .75rem;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 1.5em;\n}\n\n.testimonial_card:where(.w-variant-e97c40c7-e048-1de9-d541-00d732ee5c5f) {\n  background-color: var(--base-color--grey-light);\n  text-align: left;\n  border-radius: .75rem;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 1.5em;\n}\n\n.testimonial_card:where(.w-variant-46590a55-cf77-e641-28e0-0c093cbbabcd) {\n  text-align: left;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.testimonial_card:where(.w-variant-7e866526-af6d-97fe-7785-aa492e0dd84d) {\n  border: 1px solid var(--base-color--grey-lighter);\n  text-align: left;\n  border-radius: .75rem;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 1.5em;\n}\n\n.testimonial_card:where(.w-variant-e35f08b9-0930-25aa-0d16-8750895b6aaa) {\n  background-color: var(--base-color--grey-light);\n  text-align: left;\n  border-radius: .75rem;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 1.5em;\n}\n\n.testimonial_card:where(.w-variant-154bc500-4dbe-0e26-dc26-bf2dad9ca4b4) {\n  background-color: var(--base-color--grey-light);\n  border-radius: .75rem;\n  padding: 1.5em;\n}\n\n.testimonial_card_logo {\n  width: auto;\n  height: 2em;\n}\n\n.testimonial_card_content {\n  color: var(--base-color--true-black);\n  font-size: 1.125em;\n}\n\n.testimonial_card_client-wrap:where(.w-variant-b03828de-1604-123f-4a44-d945443c2f3b), .testimonial_card_client-wrap:where(.w-variant-c0bf14bf-4ea2-e78d-c956-cbe54cf2942e) {\n  margin-top: 1em;\n  display: flex;\n}\n\n.testimonial_card_client-wrap:where(.w-variant-46590a55-cf77-e641-28e0-0c093cbbabcd), .testimonial_card_client-wrap:where(.w-variant-7e866526-af6d-97fe-7785-aa492e0dd84d), .testimonial_card_client-wrap:where(.w-variant-e35f08b9-0930-25aa-0d16-8750895b6aaa) {\n  display: flex;\n}\n\n.testimonial_card_client-wrap:where(.w-variant-154bc500-4dbe-0e26-dc26-bf2dad9ca4b4) {\n  margin-top: 1em;\n  display: flex;\n}\n\n.testimonial_card_client-avatar {\n  aspect-ratio: 1;\n  border-radius: 100%;\n  width: 3.5em;\n  height: 3.5em;\n}\n\n.testimonial_card_client-name {\n  font-size: 1em;\n  font-weight: 600;\n}\n\n.testimonial_card_client-title {\n  color: var(--base-color--grey-primary);\n  font-size: 1em;\n}\n\n.testimonial_card_5-stars {\n  display: none;\n}\n\n.testimonial_card_5-stars:where(.w-variant-01984084-8189-3255-41f0-c95e08109a12), .testimonial_card_5-stars:where(.w-variant-b03828de-1604-123f-4a44-d945443c2f3b), .testimonial_card_5-stars:where(.w-variant-17c51010-f0be-7532-de14-016a7986bfda), .testimonial_card_5-stars:where(.w-variant-de640fec-4f7c-0945-b8c0-29e7158fc8e4), .testimonial_card_5-stars:where(.w-variant-c0bf14bf-4ea2-e78d-c956-cbe54cf2942e), .testimonial_card_5-stars:where(.w-variant-cf10c570-0f69-141a-4903-dae91a97e54b), .testimonial_card_5-stars:where(.w-variant-bb39ef81-28ea-805a-a00b-62173435b27f), .testimonial_card_5-stars:where(.w-variant-e97c40c7-e048-1de9-d541-00d732ee5c5f), .testimonial_card_5-stars:where(.w-variant-46590a55-cf77-e641-28e0-0c093cbbabcd), .testimonial_card_5-stars:where(.w-variant-7e866526-af6d-97fe-7785-aa492e0dd84d), .testimonial_card_5-stars:where(.w-variant-e35f08b9-0930-25aa-0d16-8750895b6aaa), .testimonial_card_5-stars:where(.w-variant-154bc500-4dbe-0e26-dc26-bf2dad9ca4b4) {\n  margin-top: -1.5em;\n  display: block;\n}\n\n.single-star {\n  width: 2em;\n  height: 2em;\n}\n\n.testimonial_card_logo-wrap.is-1:where(.w-variant-01984084-8189-3255-41f0-c95e08109a12), .testimonial_card_logo-wrap.is-1:where(.w-variant-b03828de-1604-123f-4a44-d945443c2f3b), .testimonial_card_logo-wrap.is-1:where(.w-variant-17c51010-f0be-7532-de14-016a7986bfda), .testimonial_card_logo-wrap.is-1:where(.w-variant-de640fec-4f7c-0945-b8c0-29e7158fc8e4), .testimonial_card_logo-wrap.is-1:where(.w-variant-c0bf14bf-4ea2-e78d-c956-cbe54cf2942e), .testimonial_card_logo-wrap.is-1:where(.w-variant-cf10c570-0f69-141a-4903-dae91a97e54b), .testimonial_card_logo-wrap.is-1:where(.w-variant-bb39ef81-28ea-805a-a00b-62173435b27f), .testimonial_card_logo-wrap.is-1:where(.w-variant-e97c40c7-e048-1de9-d541-00d732ee5c5f), .testimonial_card_logo-wrap.is-1:where(.w-variant-46590a55-cf77-e641-28e0-0c093cbbabcd), .testimonial_card_logo-wrap.is-1:where(.w-variant-7e866526-af6d-97fe-7785-aa492e0dd84d), .testimonial_card_logo-wrap.is-1:where(.w-variant-e35f08b9-0930-25aa-0d16-8750895b6aaa), .testimonial_card_logo-wrap.is-1:where(.w-variant-154bc500-4dbe-0e26-dc26-bf2dad9ca4b4), .testimonial_card_logo-wrap.is-2 {\n  display: none;\n}\n\n.testimonial_card_logo-wrap.is-2:where(.w-variant-b03828de-1604-123f-4a44-d945443c2f3b), .testimonial_card_logo-wrap.is-2:where(.w-variant-c0bf14bf-4ea2-e78d-c956-cbe54cf2942e), .testimonial_card_logo-wrap.is-2:where(.w-variant-46590a55-cf77-e641-28e0-0c093cbbabcd), .testimonial_card_logo-wrap.is-2:where(.w-variant-7e866526-af6d-97fe-7785-aa492e0dd84d), .testimonial_card_logo-wrap.is-2:where(.w-variant-e35f08b9-0930-25aa-0d16-8750895b6aaa), .testimonial_card_logo-wrap.is-2:where(.w-variant-154bc500-4dbe-0e26-dc26-bf2dad9ca4b4) {\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 1.5em;\n  display: flex;\n}\n\n.testimonial_card_client_main:where(.w-variant-b03828de-1604-123f-4a44-d945443c2f3b), .testimonial_card_client_main:where(.w-variant-c0bf14bf-4ea2-e78d-c956-cbe54cf2942e) {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  border-right: 1px solid var(--base-color--grey-lighter);\n  justify-content: flex-start;\n  align-items: center;\n  padding-right: 1.5em;\n  display: flex;\n}\n\n.testimonial_card_client_main:where(.w-variant-e5585519-36c1-9263-9a10-27b9bf14b9a2), .testimonial_card_client_main:where(.w-variant-2ea2b7ff-10a9-31ee-acd6-333083e1519d), .testimonial_card_client_main:where(.w-variant-31b8c1e0-c996-3eda-de3e-b03f0f5a80fa), .testimonial_card_client_main:where(.w-variant-cf10c570-0f69-141a-4903-dae91a97e54b), .testimonial_card_client_main:where(.w-variant-bb39ef81-28ea-805a-a00b-62173435b27f), .testimonial_card_client_main:where(.w-variant-e97c40c7-e048-1de9-d541-00d732ee5c5f) {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.testimonial_card_client_main:where(.w-variant-46590a55-cf77-e641-28e0-0c093cbbabcd), .testimonial_card_client_main:where(.w-variant-7e866526-af6d-97fe-7785-aa492e0dd84d), .testimonial_card_client_main:where(.w-variant-e35f08b9-0930-25aa-0d16-8750895b6aaa), .testimonial_card_client_main:where(.w-variant-154bc500-4dbe-0e26-dc26-bf2dad9ca4b4) {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  border-right: 1px solid var(--base-color--grey-lighter);\n  justify-content: flex-start;\n  align-items: center;\n  padding-right: 1.5em;\n  display: flex;\n}\n\n.testimonial_card_client_name-title:where(.w-variant-b03828de-1604-123f-4a44-d945443c2f3b), .testimonial_card_client_name-title:where(.w-variant-c0bf14bf-4ea2-e78d-c956-cbe54cf2942e), .testimonial_card_client_name-title:where(.w-variant-154bc500-4dbe-0e26-dc26-bf2dad9ca4b4) {\n  text-align: left;\n}\n\n.feature-grid-turtleci {\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  flex-flow: column;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  justify-content: center;\n  align-items: flex-start;\n  display: grid;\n}\n\n.feature-grid-turtleci:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9), .feature-grid-turtleci:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n  text-align: center;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.feature-grid-turtleci.feature-4 {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.feature-grid-turtleci.feature-5, .feature-grid-turtleci.feature-6 {\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-right: 5em;\n}\n\n.feature_card {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  border: 1px solid var(--base-color--grey-lighter);\n  border-radius: 16px;\n  flex-flow: column;\n  height: 100%;\n  min-height: 18em;\n  padding: 2em;\n  display: flex;\n}\n\n.feature_card.feature-3 {\n  flex-flow: row;\n}\n\n.feature_card.feature-4 {\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.feature_card.feature-5, .feature_card.feature-6 {\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.code-embed {\n  width: 4em;\n  height: 4em;\n}\n\n.data-wrapper {\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  margin-top: 2em;\n  display: grid;\n}\n\n.data-card {\n  padding: 1em;\n}\n\n.data-card.background-color-brand {\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  border-radius: 16px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.why-choose-turtleci-card {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  flex-flow: column;\n  padding: 2em;\n  display: flex;\n}\n\n.why-choose-turtleci-card.no-image {\n  justify-content: center;\n  height: 100%;\n}\n\n.why-choose-text-block {\n  text-wrap: pretty;\n  font-size: 1em;\n}\n\n.div-block {\n  justify-content: center;\n  align-items: center;\n  margin-top: 2em;\n  margin-bottom: 1em;\n  display: flex;\n}\n\n.why-choose-image-wrapper {\n  aspect-ratio: 3 / 2;\n  justify-content: center;\n  align-items: center;\n  height: 20em;\n  display: flex;\n}\n\n.embed-video-section {\n  display: block;\n}\n\n.video-wrapper {\n  aspect-ratio: 16 / 9;\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.margin-5em {\n  margin-top: 5em;\n  margin-bottom: 5em;\n}\n\n.cta_w-bg_main_lg {\n  z-index: 1;\n  max-width: 60em;\n  height: 100%;\n  color: var(--base-color--true-white);\n  text-align: center;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  position: relative;\n}\n\n.cta_w-bg_main_lg:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933) {\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n}\n\n.cta_w-bg_main_lg:where(.w-variant-81f74197-d706-52d9-1913-95cee790e695) {\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.cta_w-bg_main_lg:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2) {\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n}\n\n.cta_w-bg_main_lg:where(.w-variant-d894e45c-071f-7af1-4f2f-b99ed46a0f2f) {\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.cta_w-bg_main_lg.side-by-side {\n  max-width: none;\n  color: var(--base-color--true-black);\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.button-tertiary {\n  grid-column-gap: .5em;\n  background-color: var(--base-color--star-yellow);\n  color: var(--base-color--true-white);\n  border-radius: 40rem;\n  justify-content: center;\n  align-items: center;\n  width: fit-content;\n  padding: .75em 2em;\n  font-weight: 600;\n  transition-property: all;\n  transition-duration: .2s;\n  transition-timing-function: ease;\n  display: flex;\n  box-shadow: 0 8px 24px #959da599;\n}\n\n.button-tertiary:hover {\n  background-color: var(--base-color--true-black);\n  box-shadow: 0 8px 24px #959da5cc;\n}\n\n.button-tertiary:focus {\n  box-shadow: 0 0 0 3px #a990004d;\n}\n\n.button-tertiary.is-large {\n  padding: 1em 2em;\n}\n\n.button-tertiary.is-ghost {\n  color: #000;\n  background-color: #0000;\n  border: 2px solid #0000;\n}\n\n.button-tertiary.is-small {\n  padding: .5em 1.25em;\n  font-size: 1em;\n}\n\n.footer-link-wrapper {\n  flex-flow: column;\n  display: flex;\n}\n\n.social-links {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  flex: 1;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.why-choose-image {\n  object-fit: contain;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n}\n\n.about-us-grid {\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  flex-flow: column;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  justify-content: center;\n  align-items: flex-start;\n  display: grid;\n}\n\n.about-us-grid:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9), .about-us-grid:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n  text-align: center;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.about-us-grid.feature-4 {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.about-us-grid.feature-5, .about-us-grid.feature-6 {\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-right: 5em;\n}\n\n.about-us-card {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  border-radius: 16px;\n  flex-flow: column;\n  height: 100%;\n  min-height: 18em;\n  padding: 2em;\n  display: flex;\n}\n\n.about-us-card.feature-3 {\n  flex-flow: row;\n}\n\n.about-us-card.feature-4 {\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.about-us-card.feature-5, .about-us-card.feature-6 {\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.about-us-member-image {\n  width: 100%;\n  height: 50%;\n  min-height: 30em;\n}\n\n.about-us-image {\n  object-fit: cover;\n  object-position: 50% 0%;\n  border-radius: 1em;\n  width: 100%;\n  height: 100%;\n}\n\n.mission-grid {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n}\n\n.mission-grid:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9), .mission-grid:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .mission-grid.feature-4 {\n  grid-template-columns: 1fr;\n}\n\n.mission-grid.feature-5 {\n  grid-column-gap: 0em;\n  grid-row-gap: 0em;\n  grid-template-columns: 1fr 1fr;\n}\n\n.mission-grid.turtleci {\n  display: block;\n}\n\n.our-mission {\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.our-mission:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9), .our-mission:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n  text-align: center;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.our-mission.feature-4 {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.our-mission.feature-5, .our-mission.feature-6 {\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-right: 5em;\n}\n\n.mission-grid-wrapper {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  width: 100%;\n  display: grid;\n}\n\n.mission-grid-wrapper.feature-3 {\n  grid-template-columns: 1fr;\n}\n\n.mission-grid-wrapper.feature-4 {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n.mission-grid-wrapper.feature-5, .mission-grid-wrapper.feature-6 {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n}\n\n.our-mission-grid, .about-us-section {\n  background-image: linear-gradient(#f6fcfb, #fff);\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.our-mission-icon {\n  object-fit: contain;\n  width: 2em;\n  height: 2em;\n}\n\n.mission-items {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  border: 1px solid #ffa72673;\n  border-radius: 1em;\n  flex-flow: column;\n  padding: 2em;\n  display: flex;\n}\n\n.mission-items.feature-3 {\n  flex-flow: row;\n}\n\n.mission-items.feature-4 {\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.mission-items.feature-5, .mission-items.feature-6 {\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.join-our-team-section {\n  background-image: linear-gradient(#fff, #f6fcfb);\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.join-our-team-section._w-bg {\n  position: relative;\n}\n\n.image {\n  max-height: 3em;\n}\n\n.codify-section {\n  background-image: linear-gradient(#f6fcfb, #fff);\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.codify-grid {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.codify-grid:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9), .codify-grid:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .codify-grid.feature-4 {\n  grid-template-columns: 1fr;\n}\n\n.codify-grid.feature-5 {\n  grid-column-gap: 0em;\n  grid-row-gap: 0em;\n  grid-template-columns: 1fr 1fr;\n}\n\n.codify-grid.turtleci {\n  display: block;\n}\n\n.rl-button-secondary {\n  border: 1px solid var(--relume-library-lite--rl-black);\n  background-color: var(--relume-library-lite--rl-white);\n  color: var(--relume-library-lite--rl-black);\n  text-align: center;\n  padding: .75rem 1.5rem;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-size: 1rem;\n}\n\n.rl_faq1_spacing-block-5 {\n  width: 100%;\n  padding-bottom: 2rem;\n}\n\n.rl-text-style-medium {\n  color: var(--relume-library-lite--rl-black);\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-size: 1.125rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\n\n.rl_faq1_spacing-block-4 {\n  width: 100%;\n  padding-bottom: 1rem;\n}\n\n.rl-heading-style-h4 {\n  color: var(--relume-library-lite--rl-black);\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\n.rl_faq1_cta-wrapper {\n  text-align: center;\n  width: 100%;\n  max-width: 35rem;\n}\n\n.rl_faq1_spacing-block-3 {\n  width: 100%;\n  padding-bottom: 5rem;\n}\n\n.rl-text-style-regular {\n  color: var(--relume-library-lite--rl-black);\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\n\n.rl_faq1_answer-wrapper {\n  max-width: 45em;\n  margin-bottom: 1.5rem;\n}\n\n.rl_faq1_answer {\n  border: 0 solid #000;\n  overflow: hidden;\n}\n\n.rl_faq1_icon {\n  width: 2rem;\n  height: 2rem;\n  color: var(--relume-library-lite--rl-black);\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.rl_faq1_icon-wrapper {\n  align-self: flex-start;\n}\n\n.rl_faq1_question-text {\n  color: var(--relume-library-lite--rl-black);\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-size: 1.125rem;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.rl_faq1_question {\n  grid-column-gap: 1.5rem;\n  grid-row-gap: 1.5rem;\n  cursor: pointer;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  transition: color .2s;\n  display: flex;\n}\n\n.rl_faq1_question:hover {\n  color: var(--base-color--brand-darker);\n}\n\n.rl_faq1_accordion {\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n\n.rl_faq1_spacing-block-2 {\n  width: 100%;\n  padding-bottom: 5rem;\n}\n\n.rl_faq1_spacing-block-1 {\n  width: 100%;\n  padding-bottom: 1.5rem;\n}\n\n.rl-heading-style-h2 {\n  color: var(--relume-library-lite--rl-black);\n  margin-top: 0;\n  margin-bottom: 0;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-size: 3rem;\n  font-weight: 700;\n  line-height: 1.2;\n}\n\n.rl_faq1_heading-wrapper {\n  text-align: center;\n  width: 100%;\n  max-width: 48rem;\n}\n\n.rl_faq1_component {\n  flex-direction: column;\n  align-items: center;\n  display: flex;\n}\n\n.rl-container-small {\n  width: 100%;\n  max-width: 48rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rl-padding-global {\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.mastmulti-os-section, .multi-framework-section {\n  background-image: linear-gradient(#fff, #f6fcfb);\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.advanced-logging-section {\n  background-image: linear-gradient(0deg, #fff, #f6fcfb);\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.image-advanced-logging {\n  max-width: 28em;\n}\n\n.pricing-section-w {\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.pricing-embed {\n  overflow: visible;\n}\n\n.pricing-header {\n  text-align: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pricing-header:where(.w-variant-a9399cc1-a0a7-2667-433b-4f85aa85a84a) {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  text-align: left;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: none;\n  margin-bottom: 4em;\n  display: flex;\n}\n\n.button-center {\n  justify-content: center;\n  align-items: center;\n  margin-top: 4em;\n  display: flex;\n}\n\n.hero-top-row {\n  flex-flow: column;\n  justify-content: center;\n  align-items: flex-start;\n  display: flex;\n}\n\n.hero-top-row:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9) {\n  text-align: center;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.hero-top-row:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n  text-align: center;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.hero-top-row.style-21 {\n  text-align: center;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.hero-top-row.style-36 {\n  text-align: center;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.hero-top-row._5em-top {\n  margin-top: 5em;\n}\n\n.hero-bot-row {\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  border-radius: 1rem;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n  position: relative;\n  overflow: hidden;\n}\n\n.contact-form-section {\n  background-image: linear-gradient(#f6fcfb, #fff);\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.contact-from-grid {\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  flex-flow: column;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  justify-content: center;\n  align-items: flex-start;\n  margin-bottom: 5em;\n  display: grid;\n}\n\n.contact-from-grid:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9), .contact-from-grid:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n  text-align: center;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.contact-from-grid.feature-4 {\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.contact-from-grid.feature-5, .contact-from-grid.feature-6 {\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-right: 5em;\n}\n\n.max-100vw {\n  width: 100vw;\n  height: 50vh;\n  position: relative;\n  overflow: hidden;\n}\n\n.absolute-hero-heading {\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  position: absolute;\n  inset: 0%;\n}\n\n.div-block-2 {\n  background-image: linear-gradient(#d8f8f2, #fff);\n  width: 100%;\n  height: 100%;\n}\n\n.blog-section {\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.blog-collection {\n  width: 100%;\n  overflow: visible;\n}\n\n.blog-header {\n  text-align: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.blog-header:where(.w-variant-a9399cc1-a0a7-2667-433b-4f85aa85a84a) {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  text-align: left;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-width: none;\n  margin-bottom: 4em;\n  display: flex;\n}\n\n.blog-card {\n  width: 100%;\n}\n\n.blog-img-wrapper {\n  border-radius: 16px;\n  overflow: hidden;\n}\n\n.collection-list {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 3em;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  width: 100%;\n  display: grid;\n}\n\n.blog-hero {\n  grid-column-gap: 2em;\n  grid-row-gap: 2em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.blog-hero:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9), .blog-hero:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .blog-hero.style-20, .blog-hero.style-35, .blog-hero.style-50 {\n  grid-template-columns: 1fr;\n}\n\n.hero-rightbox {\n  flex-flow: column;\n  justify-content: center;\n  align-items: flex-start;\n  display: flex;\n}\n\n.hero-rightbox:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9) {\n  text-align: center;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.hero-rightbox:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n  text-align: center;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.hero-rightbox.style-21 {\n  text-align: center;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.hero-rightbox.style-36, .hero-rightbox.style-51 {\n  text-align: center;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.blog-hero-left {\n  flex-flow: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: .5em;\n  display: flex;\n}\n\n.blog-hero-left:where(.w-variant-78338583-1b2e-a9cc-19bb-6c51f42bfef9) {\n  text-align: center;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.blog-hero-left:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n  text-align: center;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.blog-hero-left.style-21 {\n  text-align: center;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 56em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.blog-hero-left.style-36, .blog-hero-left.style-51 {\n  text-align: center;\n  flex-flow: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  max-width: none;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.blog-rich-text {\n  max-width: 48em;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 5em;\n}\n\n.heading-2 {\n  color: var(--base-color--brand-primary);\n}\n\n.documentation-content {\n  background-image: linear-gradient(#f6fcfb, #fff);\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.documentation-wrapper {\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  flex-flow: column;\n  max-width: 40em;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 4em;\n  display: flex;\n}\n\n.documentation-wrapper.is-first {\n  padding-top: 0;\n}\n\n.documentation-wrapper.is-last {\n  padding-bottom: 4em;\n}\n\n.code-source {\n  padding: 2em;\n}\n\n.document-text-heading {\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  display: flex;\n}\n\n.code-block {\n  border-radius: 10px;\n}\n\n.terms-of-services-content {\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  flex-flow: column;\n  max-width: 60em;\n  margin-bottom: 4em;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n}\n\n.terms-of-services-section {\n  background-image: linear-gradient(#f6fcfb, #fff);\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.documentation-content-wrap {\n  width: 70%;\n}\n\n.documentation-grid {\n  flex-flow: row-reverse;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: flex;\n}\n\n.documentation-sidebar-wrap {\n  padding-left: 4em;\n  position: relative;\n}\n\n.documentation-sidebar-wrap.hide-mobile-landscape {\n  flex: 1;\n}\n\n.documentation-sidebar-sticky {\n  position: sticky;\n  top: 7em;\n}\n\n.documentation-sidebar-sticky.hide-desktop-tablet {\n  display: none;\n}\n\n.ci-syntax-block {\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  flex-flow: column;\n  display: flex;\n}\n\n.sidebar-link {\n  padding-left: 2em;\n  font-size: .8em;\n}\n\n.sidebar-link.w--current {\n  color: var(--base-color--star-yellow);\n}\n\n.blog-heading {\n  margin-top: .5em;\n  margin-bottom: .5em;\n  font-size: 1.5em;\n}\n\n.collection-list-wrapper {\n  width: 100%;\n}\n\n.text-color-yellow {\n  color: var(--base-color--star-yellow);\n}\n\n.background-video {\n  border-radius: 1em;\n  width: 100%;\n  height: 100%;\n}\n\n.heading-svg {\n  width: 2em;\n  height: 2em;\n}\n\n.x-svg {\n  width: 2em;\n  height: 2em;\n  padding: 4px;\n}\n\n.indicator {\n  justify-content: flex-end;\n  align-items: center;\n  display: none;\n  position: absolute;\n  inset: .5% 0% auto auto;\n}\n\n.sidebar-title {\n  margin-top: .5em;\n  margin-bottom: 0;\n  font-size: 1.125em;\n}\n\n.documentation-sidebar-fixed {\n  padding-left: 4em;\n  display: none;\n  position: relative;\n}\n\n.overlay-bg {\n  pointer-events: none;\n  display: none;\n}\n\n.contact-details {\n  grid-column-gap: 16px;\n  grid-row-gap: 16px;\n  border-top: 1px solid var(--base-color--grey-light);\n  border-bottom: 1px solid var(--base-color--grey-light);\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  display: grid;\n}\n\n.contact-info-card {\n  align-items: center;\n  padding-top: 2em;\n  padding-bottom: 2em;\n  display: flex;\n}\n\n.contact-info-card.center {\n  border-right: 1px solid var(--base-color--grey-light);\n  border-left: 1px solid var(--base-color--grey-light);\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.contact-info-svg-wrap {\n  width: 2em;\n  height: 2em;\n  margin-right: 1em;\n}\n\n.contact-info-text {\n  color: var(--base-color--true-black);\n  margin-bottom: .25em;\n}\n\n.contact-detail {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.pricing_tabs {\n  border-radius: .5rem;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n  position: relative;\n}\n\n.pricing_card-list {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.pricing_card-list.is-2 {\n  display: none;\n}\n\n.pricing_tab {\n  z-index: 1;\n  width: 8em;\n  height: 2.5em;\n  color: var(--base-color--grey-primary);\n  justify-content: center;\n  align-items: center;\n  padding: .5em 1.5em;\n  transition: color .4s;\n  display: flex;\n  position: relative;\n}\n\n.pricing_tab:hover {\n  color: var(--base-color--true-black);\n}\n\n.pricing_tab.is-active {\n  color: var(--base-color--brand-lighter);\n  font-weight: 600;\n}\n\n.pricing_tab-bg {\n  background-color: var(--base-color--brand-primary);\n  border-radius: .25rem;\n  width: 8em;\n  height: 2.5em;\n  transition: transform .4s;\n  position: absolute;\n}\n\n.pricing_tab-wrap {\n  background-color: var(--base-color--grey-light);\n  border-radius: .5rem;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  padding: .25em;\n  overflow: hidden;\n}\n\n.pricing_card_tag {\n  background-color: var(--base-color--brand-darker);\n  color: var(--base-color--true-white);\n  border-radius: .5rem;\n  width: fit-content;\n  padding: .25em .75em;\n  font-weight: 500;\n}\n\n.pricing_card_tag.is-hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.pricing_card-text {\n  color: var(--base-color--grey-primary);\n}\n\n.pricing_card_value-text {\n  color: var(--base-color--true-black);\n}\n\n.pricing_card_flex-spacer {\n  flex: 1;\n}\n\n.button-outline {\n  grid-column-gap: .5em;\n  border: 1px solid var(--base-color--brand-primary);\n  background-color: var(--base-color--true-white);\n  width: 100%;\n  color: var(--base-color--brand-darker);\n  border-radius: 40rem;\n  justify-content: center;\n  align-items: center;\n  padding: .75em 2em;\n  font-weight: 600;\n  transition: all .2s;\n  display: flex;\n  box-shadow: 0 8px 24px #959da533;\n}\n\n.button-outline:hover {\n  background-color: var(--base-color--true-black);\n  color: var(--base-color--true-white);\n  box-shadow: 0 8px 24px #959da599;\n}\n\n.button-outline:focus {\n  box-shadow: 0 0 0 3px #009ba94d;\n}\n\n.button-outline.is-large {\n  padding: 1em 2em;\n}\n\n.button-outline.is-ghost {\n  color: #000;\n  background-color: #0000;\n  border: 2px solid #0000;\n}\n\n.button-outline.is-small {\n  padding: .5em 1.25em;\n  font-size: 1em;\n}\n\n.code {\n  width: 100%;\n  padding: 1rem;\n}\n\n.blog_item_content {\n  padding-right: 2.5em;\n}\n\n.intercom-embed {\n  position: fixed;\n  inset: auto 2em 2em auto;\n}\n\n.cpa_navbar {\n  z-index: 99;\n  background-color: var(--background-color);\n  padding-top: 1em;\n  padding-bottom: 1em;\n  position: sticky;\n  top: 0;\n}\n\n.cpa_navbar_flex-wrap {\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n}\n\n.cpa_navbar_lrightbox {\n  grid-column-gap: 2.5em;\n  grid-row-gap: 2.5em;\n  justify-content: flex-end;\n  align-items: center;\n  display: flex;\n}\n\n.cpa_navbar_logo {\n  width: 11.25em;\n  height: auto;\n}\n\n.cpa_navbar_menu {\n  grid-column-gap: 2.5em;\n  grid-row-gap: 2.5em;\n  display: flex;\n}\n\n.cpa_navbar_menu-trigger {\n  display: none;\n}\n\n.cpa_navbar_link {\n  color: var(--base-color--true-black);\n  font-weight: 600;\n}\n\n.cpa_navbar_link:hover {\n  color: var(--base-color--brand-darker);\n}\n\n.cpa_navbar_menu-line {\n  background-color: #ccc;\n  width: 1px;\n}\n\n.cpa_navbar_menu_btn-wrap {\n  display: none;\n}\n\n.cpa_hero {\n  padding-bottom: 2.5em;\n}\n\n.cpa_hero_main {\n  background-image: linear-gradient(90deg, #e4f7f5, #cef9f5);\n  border-radius: 1.5rem;\n  padding: 5em 4em;\n  position: relative;\n  overflow: hidden;\n}\n\n.cpa_hero_main.is-home-carousel {\n  width: 100%;\n  height: 100%;\n}\n\n.cpa_hero_content {\n  z-index: 1;\n  position: relative;\n}\n\n.cpa_hero_content.is-carousel {\n  flex-flow: column;\n  justify-content: center;\n  height: 100%;\n  display: flex;\n}\n\n.cpa_hero_subtitle {\n  max-width: 12em;\n  font-size: 2.5em;\n  font-weight: 500;\n}\n\n.cpa_hero_title {\n  max-width: 8em;\n  color: var(--base-color--star-yellow);\n  font-size: 5.5em;\n  line-height: 1.2;\n}\n\n.cpa_hero_highlight {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  background-color: #d1d1d14d;\n  border-radius: .75rem;\n  justify-content: flex-start;\n  align-items: center;\n  width: fit-content;\n  padding: 2px;\n  position: relative;\n  overflow: hidden;\n}\n\n.cpa_hero_highlight.is-home {\n  z-index: 1;\n  cursor: pointer;\n  transition: transform .4s cubic-bezier(.645, .045, .355, 1), color .2s;\n}\n\n.cpa_hero_highlight.is-home:hover {\n  transform: scale(1.05);\n}\n\n.cpa_hero_highlight_content {\n  z-index: 1;\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  background-color: var(--background-color);\n  border-radius: .75rem;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 1em 1.5em;\n  display: flex;\n  position: relative;\n}\n\n.cpa_hero_highlight_text {\n  color: var(--base-color--brand-primary);\n  text-transform: uppercase;\n  text-shadow: 0 0 1px #0000004d;\n  font-size: 2.5em;\n  font-weight: 600;\n}\n\n.cpa_hero_highlight_text.is-home {\n  font-size: 1.5em;\n}\n\n.cpa_hero_highlight_ic {\n  width: 2.5em;\n  height: 2.5em;\n  color: var(--base-color--brand-primary);\n}\n\n.cpa_hero_highlight_ic.is-home {\n  width: 1.5em;\n  height: 1.5em;\n}\n\n.cpa_hero_highlight_lightning {\n  background-image: linear-gradient(#ffa72600, #ffa726 50%, #ffa72600);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  inset: 0%;\n}\n\n.cpa_hero_bg-wrap {\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 2.5em;\n  display: flex;\n  position: absolute;\n  inset: 0% auto 0% 0%;\n}\n\n.cpa_hero_bg {\n  opacity: .4;\n  width: 62.5em;\n  height: auto;\n  color: var(--base-color--true-white);\n}\n\n.cpa_about {\n  padding-top: 2.5em;\n  padding-bottom: 2.5em;\n}\n\n.cpa_about_flex-wrap {\n  grid-column-gap: 7.5em;\n  grid-row-gap: 7.5em;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n}\n\n.cpa_details {\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.cpa_details_grid {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.cpa_details_box {\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 1rem;\n  flex-flow: column;\n  padding: 2.5em 1.5em;\n  display: flex;\n}\n\n.cpa_details_box_top {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  border-bottom: 1px solid #ccc;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding-bottom: 1.5em;\n  display: flex;\n}\n\n.cpa_details_box_ic {\n  width: 2.5em;\n  height: 2.5em;\n  color: var(--base-color--brand-darker);\n}\n\n.cpa_details_box_bottom {\n  flex-flow: column;\n  flex: 1;\n  justify-content: center;\n  padding-top: 1.5em;\n  display: flex;\n}\n\n.cpa_details_box_text {\n  font-size: 1.5em;\n}\n\n.cpa_details_cta-box {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  background-image: linear-gradient(90deg, #10a99d, #11978d);\n  border-radius: .75rem;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5em;\n  display: flex;\n}\n\n.cpa_details_cta-box_text-wrap {\n  max-width: 50em;\n}\n\n.cpa_details_cta-box_btn {\n  background-color: var(--base-color--true-white);\n  color: var(--base-color--true-black);\n  border-radius: .625rem;\n  flex: none;\n  justify-content: center;\n  align-items: center;\n  padding: .75em 2em;\n  transition: background-color .2s, color .2s;\n  display: flex;\n}\n\n.cpa_details_cta-box_btn:hover {\n  background-color: var(--base-color--true-black);\n  color: var(--base-color--true-white);\n}\n\n.cpa_values {\n  padding-top: 5em;\n  padding-bottom: 7.5em;\n  position: relative;\n}\n\n.cpa_values_bg {\n  background-image: linear-gradient(0deg, #caefeb, #eefffd00);\n  position: absolute;\n  inset: 0%;\n}\n\n.cpa_values_grid {\n  grid-column-gap: 7.5em;\n  grid-row-gap: 7.5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.cpa_values_content {\n  padding-top: 2.5em;\n  padding-bottom: 2.5em;\n}\n\n.cpa_values_img-wrap {\n  background-color: #d2f9f5;\n  border-radius: 1rem;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  overflow: hidden;\n}\n\n.cpa_values_list {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  flex-flow: column;\n  display: flex;\n}\n\n.cpa_values_item {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.cpa_values_ic {\n  width: 3.5em;\n  height: 3.5em;\n  color: var(--base-color--brand-primary);\n}\n\n.cpa_values_cta {\n  border: 2px solid var(--base-color--true-white);\n  text-align: center;\n  background-color: #fff9;\n  border-radius: 1rem;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 51.25em;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 1.5em 2.5em;\n  display: flex;\n  box-shadow: 0 4px 16px #0000000d;\n}\n\n.cpa_wycd {\n  padding-top: 7.5em;\n  padding-bottom: 2.5em;\n}\n\n.cpa_wycd_header {\n  text-align: center;\n  max-width: 45em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.cpa_wycd_grid {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  grid-template-rows: auto auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.cpa_wycd_item {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  border: 1px solid #ccc;\n  border-radius: .75rem;\n  flex-flow: column;\n  padding: 1.5em;\n  display: flex;\n}\n\n.cpa_wycd_ic {\n  width: 4em;\n  height: 4em;\n  color: var(--base-color--star-yellow);\n}\n\n.cpa_wycd_list {\n  padding-left: 1.5em;\n}\n\n.cpa_metrics {\n  padding-top: 2.5em;\n  padding-bottom: 2.5em;\n}\n\n.cpa_metrics_main {\n  background-color: var(--base-color--star-yellow);\n  color: var(--base-color--true-white);\n  border-radius: .75rem;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  padding: 2.5em;\n  display: grid;\n  position: relative;\n  overflow: hidden;\n}\n\n.cpa_metrics_item {\n  z-index: 1;\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n  position: relative;\n}\n\n.cpa_metrics_number {\n  font-size: 5em;\n}\n\n.cpa_metrics_number-wrap {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.cpa_metrics_bg-wrap {\n  pointer-events: none;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  position: absolute;\n  inset: 0%;\n  transform: scale(2);\n}\n\n.cpa_metrics_bg {\n  opacity: .1;\n  width: 200%;\n  max-width: none;\n  height: auto;\n  display: flex;\n  overflow: visible;\n}\n\n.cpa_metrics_svg {\n  width: 200%;\n  height: 200%;\n}\n\n.cpa_why {\n  padding-top: 2.5em;\n  padding-bottom: 7.5em;\n}\n\n.cpa_why_grid {\n  grid-column-gap: 5em;\n  grid-row-gap: 5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.cpa_why_img-wrap {\n  background-color: #d2f9f5;\n  border-radius: 1rem;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  overflow: hidden;\n}\n\n.cpa_why_content {\n  padding-top: 2.5em;\n  padding-bottom: 2.5em;\n}\n\n.text-wrap-balance {\n  text-wrap: balance;\n}\n\n.cpa_why_list {\n  grid-column-gap: 2em;\n  grid-row-gap: 2em;\n  flex-flow: column;\n  display: flex;\n}\n\n.cpa_why_item {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  justify-content: flex-start;\n  align-items: flex-start;\n  display: flex;\n}\n\n.cpa_why_item_ic {\n  width: 2em;\n  height: 2em;\n  color: var(--base-color--brand-primary);\n  flex: none;\n}\n\n.cpa_why_item_content {\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  flex-flow: column;\n  flex: 1;\n  display: flex;\n}\n\n.cpa_apply {\n  background-color: #d6f5f2;\n  padding-top: 5em;\n  padding-bottom: 5em;\n}\n\n.cpa_apply_main {\n  background-color: var(--background-color);\n  border-radius: 1rem;\n  padding: 5em 2.5em;\n  box-shadow: 0 4px 16px #0000001a;\n}\n\n.cpa_apply_grid {\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.cpa_apply_form-block {\n  border-right: 1px solid #ccc;\n  margin-bottom: 0;\n  padding-right: 2.5em;\n}\n\n.cpa_apply_content {\n  padding-left: 2.5em;\n}\n\n.campaign-recaptcha {\n  margin-bottom: 1.5em;\n}\n\n.cpa_apply_eligible {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  background-color: #f4f4f4;\n  border-radius: 1rem;\n  flex-flow: column;\n  padding: 1.5em;\n  display: flex;\n}\n\n.cpa_apply_item {\n  grid-column-gap: 1em;\n  grid-row-gap: 1em;\n  justify-content: flex-start;\n  align-items: center;\n  display: flex;\n}\n\n.cpa_apply_eligible_ic {\n  width: 1.5em;\n  height: 1.5em;\n  color: var(--base-color--brand-primary);\n  flex: none;\n}\n\n.campaign-recaptcha-wrap {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.cpa_reviews {\n  padding-top: 10em;\n  padding-bottom: 5em;\n  position: relative;\n}\n\n.cpa_reviews_grid {\n  grid-column-gap: 2.5em;\n  grid-row-gap: 2.5em;\n  grid-template-rows: auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-auto-columns: 1fr;\n  display: grid;\n}\n\n.cpa_reviews_item {\n  grid-column-gap: 1.5em;\n  grid-row-gap: 1.5em;\n  border: 1px solid #ccc;\n  border-radius: 1rem;\n  flex-flow: column;\n  padding: 1.5em;\n  display: flex;\n}\n\n.cpa_reviews_bg-ic {\n  width: 15em;\n  position: absolute;\n  inset: 6% auto auto 12vw;\n}\n\n.cpa_divider-wrap {\n  pointer-events: none;\n}\n\n.cpa_divider {\n  background-color: #ccc;\n  width: 100%;\n  height: 1px;\n}\n\n.cpa_faq {\n  padding-top: 5em;\n  padding-bottom: 7.5em;\n}\n\n.rl_faq1_icon-2 {\n  color: #000;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n}\n\n.cpa_footer {\n  background-color: #f1f1f1;\n  padding-top: 4em;\n  padding-bottom: 1.5em;\n}\n\n.cpa_footer_main {\n  grid-column-gap: 2.5em;\n  grid-row-gap: 2.5em;\n  text-align: center;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 32.5em;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n}\n\n.cpa_footer_logo {\n  width: 17.5em;\n  height: auto;\n}\n\n.cpa_hero_animation {\n  width: 40em;\n  position: absolute;\n  inset: 0% -4% -8% auto;\n}\n\n.cpa_hero_rive {\n  width: 100%;\n  height: 100%;\n}\n\n.cpa_values_img {\n  width: auto;\n  height: 120%;\n}\n\n.cpa_why_img {\n  width: auto;\n  height: 80%;\n}\n\n.form_input-2 {\n  color: #000;\n  background-color: #0000;\n  border: 1px solid #eee;\n  border-radius: .5rem;\n  min-height: 2.5em;\n  margin-bottom: 0;\n  padding: .75em 1em;\n  font-size: 1.125em;\n  transition: border-color .2s;\n}\n\n.form_input-2:hover, .form_input-2:focus {\n  border-color: #12a89d;\n}\n\n.form_input-2::placeholder {\n  color: #00000080;\n}\n\n.form_input-2.is-select-input {\n  background-image: url('../images/line-md_chevron-up.png');\n  background-position: 95%;\n  background-repeat: no-repeat;\n  background-size: 16px 16px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.cpa_cover {\n  z-index: 100;\n  background-color: var(--base-color--grey-light);\n  pointer-events: none;\n  width: 100vw;\n  height: 100vh;\n  display: none;\n  position: fixed;\n  inset: 0%;\n}\n\n.floating-btn-wrap {\n  z-index: 10;\n  pointer-events: none;\n  justify-content: flex-end;\n  align-items: flex-end;\n  padding-bottom: 2.5em;\n  padding-left: 1.5em;\n  padding-right: 1.5em;\n  display: flex;\n  position: fixed;\n  inset: auto 0% 0%;\n}\n\n.fomo-wrap {\n  position: relative;\n}\n\n.cpa_btt-btn {\n  z-index: 10;\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  opacity: 0;\n  color: var(--base-color--true-black);\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  transition: opacity .2s, color .2s;\n  display: flex;\n  position: relative;\n}\n\n.cpa_btt-btn.is-active {\n  opacity: 1;\n  pointer-events: auto;\n}\n\n.cpa_btt-btn_ic-wrap {\n  background-color: var(--background-color);\n  border: 1px solid #ccc;\n  border-radius: 100%;\n  justify-content: center;\n  align-items: center;\n  width: 2.5em;\n  height: 2.5em;\n  display: flex;\n}\n\n.cpa_btt-btn_ic {\n  width: 1.5em;\n  height: 1.5em;\n}\n\n.fomo_collapsed {\n  grid-column-gap: .5em;\n  grid-row-gap: .5em;\n  border: 1px solid var(--base-color--brand-primary);\n  pointer-events: auto;\n  text-align: center;\n  white-space: nowrap;\n  background-image: linear-gradient(#f0fffe, #d6f5f2);\n  border-radius: .5rem;\n  flex-flow: column;\n  padding: 1em;\n  display: flex;\n  position: relative;\n  inset: auto auto 0% 0%;\n  box-shadow: 0 4px 16px #0000001a;\n}\n\n.fomo_expanded {\n  z-index: 1;\n  opacity: 0;\n  pointer-events: none;\n  text-align: center;\n  border-radius: .75rem;\n  width: 32.5em;\n  max-width: none;\n  position: absolute;\n  inset: auto auto 0% 0%;\n  overflow: hidden;\n  box-shadow: 0 4px 16px #0000001a;\n}\n\n.fomo_expanded_top {\n  z-index: 1;\n  background-image: linear-gradient(#f0fffe, #d6f5f2);\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2.5em;\n  display: flex;\n  position: relative;\n}\n\n.fomo_expanded_bottom {\n  background-color: var(--base-color--brand-primary);\n  color: var(--base-color--true-white);\n  padding: 2.5em;\n}\n\n.fomo-expanded_number {\n  color: var(--base-color--star-yellow);\n  font-size: 5em;\n  font-weight: 600;\n}\n\n.fomo_expanded_text-wrap {\n  max-width: 13.75rem;\n}\n\n.fomo-expanded_arrow {\n  z-index: -1;\n  width: 16em;\n  position: absolute;\n  inset: auto 0% 0% auto;\n}\n\n.fomo-expanded_btn {\n  background-color: var(--background-color);\n  width: 100%;\n  color: var(--base-color--true-black);\n  border-radius: .5rem;\n  padding: .75em 1.5em;\n}\n\n.hero-carousel {\n  padding-top: 1.5em;\n  padding-bottom: 5em;\n  position: relative;\n}\n\n.hero-carousel_list.swiper-wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  position: relative;\n}\n\n.hero-carousel-slide {\n  flex: none;\n  width: 100%;\n  height: 100%;\n}\n\n.hero-carousel-slide.swiper-slide {\n  z-index: 1;\n  position: absolute;\n  inset: 0%;\n}\n\n.hero-carousel_slide-wrap {\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.hero-carousel_event-content {\n  z-index: 1;\n  flex-flow: column;\n  justify-content: center;\n  align-items: flex-start;\n  display: flex;\n  position: relative;\n}\n\n.hero-carousel_event-bg-wrap {\n  background-image: linear-gradient(90deg, #e4f7f5, #cef9f5);\n  position: absolute;\n  inset: 0%;\n}\n\n.hero-carousel_main {\n  aspect-ratio: 16 / 9;\n  border: 1px solid var(--base-color--grey-light);\n  border-radius: 1.5em;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.hero-carousel_pagination {\n  z-index: 10;\n  grid-column-gap: .25em;\n  grid-row-gap: .25em;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 3.5em;\n  display: flex;\n  position: absolute;\n  inset: auto 0% 0%;\n}\n\n.hero-carousel-pagination-bullet-active {\n  background-color: var(--base-color--brand-primary);\n  cursor: pointer;\n  border-radius: 20rem;\n  width: 2.5em;\n  height: .5em;\n  transition: width .3s, background-color .2s;\n}\n\n.hero-carousel-pagination-bullet {\n  background-color: var(--base-color--grey-light);\n  cursor: pointer;\n  border-radius: 20rem;\n  width: 1em;\n  height: .5em;\n  transition: width .3s, background-color .2s;\n}\n\n@media screen and (max-width: 991px) {\n  body {\n    font-size: 1.75vw;\n  }\n\n  .max-width-full {\n    font-size: 1.125em;\n  }\n\n  .button.is-form-submit:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5), .button.is-form-submit:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n    margin-left: auto;\n  }\n\n  .fs-styleguide_section {\n    grid-column-gap: 2.5rem;\n    grid-template-columns: 1fr;\n  }\n\n  .spacer-40px:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .spacer-40px:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933), .spacer-40px:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2), .spacer-40px.style-41, .spacer-40px.style-56 {\n    display: block;\n  }\n\n  .spacer-20px {\n    padding-top: 1.5rem;\n  }\n\n  .spacer-32px {\n    padding-top: 3rem;\n  }\n\n  .fs-styleguide_heading-header {\n    font-size: 4rem;\n  }\n\n  .fs-styleguide_2-col {\n    grid-column-gap: 2rem;\n    grid-row-gap: 2rem;\n    grid-template-columns: 1fr;\n  }\n\n  .padding-global.is-hero {\n    height: 100%;\n  }\n\n  .spacer-56px {\n    padding-top: 6rem;\n  }\n\n  .spacer-56px.is-cpa-values {\n    padding-top: 2.5rem;\n  }\n\n  .fs-styleguide_hero-label {\n    background-color: var(--base-color--brand-primary);\n  }\n\n  .fs-styleguide_heading-medium {\n    font-size: 3rem;\n  }\n\n  .fs-styleguide_3-col {\n    grid-template-columns: 1fr;\n  }\n\n  .button-group.is-nav {\n    flex-flow: column;\n  }\n\n  .button-group.feature-5, .button-group.feature-6, .button-group.is-hero-2:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933), .button-group.is-hero-2:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2), .button-group.is-cta-side-by-side, .button-group.is-cta-side-by-side:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933), .button-group.is-cta-side-by-side:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2) {\n    justify-content: center;\n    align-items: center;\n  }\n\n  .fs-styleguide_4-col {\n    grid-template-columns: 1fr;\n  }\n\n  .flex-space-between {\n    grid-column-gap: 5em;\n  }\n\n  .spacer-48px {\n    padding-top: 5rem;\n  }\n\n  .hide-tablet {\n    display: none;\n  }\n\n  .max-width-full-tablet {\n    width: 100%;\n    max-width: none;\n  }\n\n  .fs-styleguide_1-col {\n    grid-column-gap: 2rem;\n    grid-row-gap: 2rem;\n  }\n\n  .show-tablet {\n    display: block;\n  }\n\n  .nav_leftbox:where(.w-variant-cf65633f-2a96-e077-1d1b-d50579053f83) {\n    position: relative;\n  }\n\n  .nav_rightbox {\n    flex: 0 auto;\n  }\n\n  .nav_rightbox:where(.w-variant-cf65633f-2a96-e077-1d1b-d50579053f83) {\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  .nav_actions {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    border-bottom: 1px solid var(--base-color--brand-primary);\n    background-color: var(--base-color--true-white);\n    opacity: 0;\n    pointer-events: none;\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: flex-end;\n    padding: 2.5em 6%;\n    transition: opacity .3s, top .5s;\n    position: absolute;\n    inset: 75% 0% auto;\n  }\n\n  .nav_menu-trigger-wrap {\n    display: block;\n  }\n\n  .nav_link {\n    font-size: 1.25em;\n  }\n\n  .nav_flexwrap {\n    grid-column-gap: 5em;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .footer_grid {\n    grid-column-gap: 5em;\n    grid-row-gap: 5em;\n    grid-template-columns: 1.25fr;\n  }\n\n  .footer_grid.footer-2 {\n    flex-flow: column;\n  }\n\n  .footer_column:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n    justify-content: center;\n  }\n\n  .footer_right-content:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n    grid-template-rows: auto auto;\n  }\n\n  .nav_link-wrap {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    flex-flow: column;\n    width: 100%;\n  }\n\n  .hero_grid {\n    grid-template-columns: 1fr;\n    height: 100%;\n    padding-top: 2.5em;\n    padding-left: 2.5em;\n    padding-right: 2.5em;\n  }\n\n  .hero_grid.style-5.join-our-team {\n    grid-column-gap: 0em;\n    grid-row-gap: 0em;\n  }\n\n  .hero_grid._100vh {\n    grid-column-gap: 3.5em;\n    grid-row-gap: 3.5em;\n  }\n\n  .hero_grid.is-carousel {\n    aspect-ratio: 3 / 4;\n    padding-top: 5em;\n  }\n\n  .hero_grid.is-carousel.is-event {\n    padding-top: 0;\n  }\n\n  .hero_leftbox {\n    text-align: center;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .hero_leftbox:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .hero_leftbox.style-36, .hero_leftbox.style-51 {\n    flex-flow: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .hero_leftbox.privacy {\n    margin-top: 3em;\n  }\n\n  .hero_leftbox.is-carousel {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .hero_rightbox.is-carousel {\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    display: flex;\n    position: absolute;\n    inset: auto 0% 0%;\n  }\n\n  .hero_img {\n    aspect-ratio: 1;\n    height: auto;\n  }\n\n  .hero_img.is-carousel {\n    width: 56em;\n    max-width: none;\n    margin-bottom: -5em;\n  }\n\n  .feature_grid {\n    grid-template-columns: 1fr;\n  }\n\n  .feature_grid.feature-5 {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    text-align: center;\n    grid-template-columns: 1fr;\n  }\n\n  .feature_leftbox {\n    text-align: center;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .feature_leftbox.feature-2 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .feature_leftbox.feature-3 {\n    padding-left: 7.5em;\n    padding-right: 7.5em;\n  }\n\n  .feature_leftbox.feature-4 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .feature_leftbox.feature-5, .feature_leftbox.feature-6 {\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .basic_img {\n    height: auto;\n  }\n\n  .marquee-logo-section {\n    display: none;\n  }\n\n  .marquee-logo_header:where(.w-variant-a9399cc1-a0a7-2667-433b-4f85aa85a84a) {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    text-align: center;\n    flex-flow: column;\n  }\n\n  .hero-section._100vh {\n    height: auto;\n    display: block;\n  }\n\n  .hero-section.is-blog {\n    padding-top: 5em;\n  }\n\n  .feature_list.feature-3 {\n    grid-column-gap: 5em;\n    grid-row-gap: 5em;\n  }\n\n  .feature_list.feature-4, .feature_list.feature-5, .feature_list.feature-6 {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n  }\n\n  .feature_item {\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .feature_item.feature-3, .feature_item.feature-4 {\n    flex-flow: column;\n  }\n\n  .feature_item.feature-5, .feature_item.feature-6 {\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .feature_header {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    text-align: center;\n    grid-template-columns: 1fr;\n  }\n\n  .carousel_header {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .carousel_header_leftbox {\n    text-align: center;\n  }\n\n  .footer_center-block {\n    flex-flow: wrap;\n    grid-template-columns: 1fr 1fr;\n    position: relative;\n  }\n\n  .footer_social-ic {\n    width: 2em;\n    height: 2em;\n  }\n\n  .footer_social-label:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n    display: none;\n  }\n\n  .content-row-heading {\n    display: block;\n  }\n\n  .content-row-3-col.grey, .content-row-4-col.grey {\n    grid-template-rows: auto auto;\n  }\n\n  .cta_heading-wrap:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .cta_heading-wrap:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933), .cta_heading-wrap:where(.w-variant-81f74197-d706-52d9-1913-95cee790e695), .cta_heading-wrap:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2), .cta_heading-wrap:where(.w-variant-d894e45c-071f-7af1-4f2f-b99ed46a0f2f), .cta_heading-wrap.style-37, .cta_heading-wrap.style-52 {\n    text-align: center;\n  }\n\n  .hero_content-wrap {\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .hero_content-wrap:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5) {\n    text-align: center;\n  }\n\n  .hero_content-wrap.is-hero-2:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933) {\n    text-align: center;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .hero_content-wrap.style-42, .hero_content-wrap.style-57 {\n    text-align: center;\n  }\n\n  .cta_w-bg_main:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933) {\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .cta_w-bg_main:where(.w-variant-81f74197-d706-52d9-1913-95cee790e695) {\n    flex-flow: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .cta_w-bg_main:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2) {\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .cta_w-bg_main:where(.w-variant-d894e45c-071f-7af1-4f2f-b99ed46a0f2f) {\n    flex-flow: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .cta_w-bg_main.side-by-side {\n    grid-template-columns: 1fr;\n  }\n\n  .cta_content-wrap:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933) {\n    text-align: center;\n  }\n\n  .cta_content-wrap:where(.w-variant-81f74197-d706-52d9-1913-95cee790e695) {\n    text-align: center;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .cta_content-wrap:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2) {\n    text-align: center;\n  }\n\n  .cta_content-wrap:where(.w-variant-d894e45c-071f-7af1-4f2f-b99ed46a0f2f) {\n    text-align: center;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .cta_leftbox.side-by-side {\n    text-align: center;\n  }\n\n  .contact_main:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5), .contact_main:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n    flex-flow: column;\n  }\n\n  .contact_header:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5), .contact_header:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n    text-align: center;\n  }\n\n  .form_row {\n    grid-column-gap: 0em;\n    grid-row-gap: 0em;\n    flex-flow: column;\n  }\n\n  .extra-info-item:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5), .extra-info-item:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n    flex-flow: column;\n  }\n\n  .extra-info-list:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5), .extra-info-list:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    flex-flow: wrap;\n  }\n\n  .pricing_header:where(.w-variant-8b717360-c2d0-c1c7-0a8d-051f0fe36cbe) {\n    text-align: center;\n    flex-flow: column;\n  }\n\n  .pricing_list.column-amount-5 {\n    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  }\n\n  .pricing_list.column-amount-4 {\n    grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr);\n  }\n\n  .pricing_list.column-amount-3 {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .pricing_card_value-list {\n    width: 100%;\n  }\n\n  .testimonial_grid {\n    grid-column-gap: 5em;\n    grid-row-gap: 5em;\n  }\n\n  .testimonial_grid.column-3 {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .feature-grid-turtleci {\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .feature-grid-turtleci.feature-2 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .feature-grid-turtleci.feature-3 {\n    padding-left: 7.5em;\n    padding-right: 7.5em;\n  }\n\n  .feature-grid-turtleci.feature-4 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .feature-grid-turtleci.feature-5, .feature-grid-turtleci.feature-6 {\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .feature_card.feature-3, .feature_card.feature-4 {\n    flex-flow: column;\n  }\n\n  .feature_card.feature-5, .feature_card.feature-6 {\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .cta_w-bg_main_lg:where(.w-variant-129184cd-d181-0e1e-1a77-2c8f2fba6933) {\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .cta_w-bg_main_lg:where(.w-variant-81f74197-d706-52d9-1913-95cee790e695) {\n    flex-flow: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .cta_w-bg_main_lg:where(.w-variant-73ffb1e1-4ee2-c29c-b3f1-e641123df4c2) {\n    flex-flow: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .cta_w-bg_main_lg:where(.w-variant-d894e45c-071f-7af1-4f2f-b99ed46a0f2f) {\n    flex-flow: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .cta_w-bg_main_lg.side-by-side {\n    grid-template-columns: 1fr;\n  }\n\n  .social-links.tablet-center {\n    justify-content: center;\n    align-items: center;\n  }\n\n  .feature-descirption {\n    text-wrap: pretty;\n  }\n\n  .about-us-grid {\n    grid-column-gap: 0px;\n    grid-row-gap: 0px;\n    text-align: center;\n    grid-template-columns: 1fr 1fr;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .about-us-grid.feature-2 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .about-us-grid.feature-3 {\n    padding-left: 7.5em;\n    padding-right: 7.5em;\n  }\n\n  .about-us-grid.feature-4 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .about-us-grid.feature-5, .about-us-grid.feature-6 {\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .about-us-card {\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1em;\n  }\n\n  .about-us-card.feature-3, .about-us-card.feature-4 {\n    flex-flow: column;\n  }\n\n  .about-us-card.feature-5, .about-us-card.feature-6 {\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .mission-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .mission-grid.feature-5 {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    text-align: center;\n    grid-template-columns: 1fr;\n  }\n\n  .our-mission {\n    text-align: center;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .our-mission.feature-2 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .our-mission.feature-3 {\n    padding-left: 7.5em;\n    padding-right: 7.5em;\n  }\n\n  .our-mission.feature-4 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .our-mission.feature-5, .our-mission.feature-6 {\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .mission-grid-wrapper {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .mission-grid-wrapper.feature-3 {\n    grid-column-gap: 5em;\n    grid-row-gap: 5em;\n  }\n\n  .mission-grid-wrapper.feature-4, .mission-grid-wrapper.feature-5, .mission-grid-wrapper.feature-6 {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n  }\n\n  .mission-items.feature-3, .mission-items.feature-4 {\n    flex-flow: column;\n  }\n\n  .mission-items.feature-5, .mission-items.feature-6 {\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .codify-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .codify-grid.feature-5 {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    text-align: center;\n    grid-template-columns: 1fr;\n  }\n\n  .rl-heading-style-h4 {\n    font-size: 1.75rem;\n  }\n\n  .rl_faq1_spacing-block-3, .rl_faq1_spacing-block-2 {\n    padding-bottom: 4.5rem;\n  }\n\n  .rl-heading-style-h2 {\n    font-size: 2.75rem;\n  }\n\n  .rl-padding-section-large {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n\n  .pricing-header:where(.w-variant-a9399cc1-a0a7-2667-433b-4f85aa85a84a) {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    text-align: center;\n    flex-flow: column;\n  }\n\n  .hero-top-row {\n    text-align: center;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .hero-top-row:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .hero-top-row.style-36 {\n    flex-flow: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .contact-from-grid {\n    grid-column-gap: 4em;\n    grid-row-gap: 4em;\n    text-align: center;\n    grid-template-rows: auto auto;\n    grid-template-columns: 1fr;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .contact-from-grid.feature-2 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .contact-from-grid.feature-3 {\n    padding-left: 7.5em;\n    padding-right: 7.5em;\n  }\n\n  .contact-from-grid.feature-4 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .contact-from-grid.feature-5, .contact-from-grid.feature-6 {\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .max-100vw {\n    height: 40em;\n  }\n\n  .blog-header:where(.w-variant-a9399cc1-a0a7-2667-433b-4f85aa85a84a) {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    text-align: center;\n    flex-flow: column;\n  }\n\n  .collection-list {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .blog-hero {\n    grid-template-columns: 1fr;\n  }\n\n  .blog-hero.style-5.join-our-team {\n    grid-column-gap: 0em;\n    grid-row-gap: 0em;\n  }\n\n  .hero-rightbox {\n    text-align: center;\n    justify-content: flex-start;\n    align-items: center;\n    padding-top: 5em;\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .hero-rightbox:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .hero-rightbox.style-36, .hero-rightbox.style-51 {\n    flex-flow: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .blog-hero-left {\n    text-align: center;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .blog-hero-left:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .blog-hero-left.style-36, .blog-hero-left.style-51 {\n    flex-flow: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .documentation-content-wrap {\n    padding-left: 4vw;\n  }\n\n  .documentation-sidebar-wrap {\n    padding-left: 0;\n  }\n\n  ._100vh {\n    height: 100vh;\n  }\n\n  .documentation-sidebar-fixed {\n    padding-left: 0;\n  }\n\n  .pricing_card-list {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .cpa_navbar_flex-wrap {\n    position: relative;\n  }\n\n  .cpa_navbar_lrightbox {\n    grid-column-gap: 1.5em;\n    grid-row-gap: 1.5em;\n  }\n\n  .cpa_navbar_menu {\n    background-color: var(--background-color);\n    opacity: 0;\n    pointer-events: none;\n    border-radius: .75rem;\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: flex-end;\n    margin-top: 5em;\n    padding: 2.5em 4%;\n    transition: transform .4s, opacity .4s;\n    position: absolute;\n    inset: 0% 0% auto auto;\n    transform: translate(0, -10%);\n    box-shadow: 0 2px 12px #00000026;\n  }\n\n  .cpa_navbar_menu-trigger {\n    cursor: pointer;\n    display: block;\n  }\n\n  .cpa_navbar_link {\n    font-size: 1.25em;\n  }\n\n  .cpa_navbar_menu-line {\n    display: none;\n  }\n\n  .cpa_navbar_menu-trigger_label {\n    text-align: center;\n    min-width: 3.5em;\n    font-size: 1.5em;\n    font-weight: 600;\n  }\n\n  .cpa_hero_main {\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n  }\n\n  .cpa_hero_content {\n    text-align: center;\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: center;\n    display: flex;\n  }\n\n  .cpa_hero_content.is-carousel {\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .cpa_hero_bg-wrap {\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n    inset: 0%;\n  }\n\n  .cpa_about_flex-wrap {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    text-align: center;\n    flex-flow: column;\n  }\n\n  .cpa_details_grid {\n    grid-template-columns: 1fr;\n  }\n\n  .cpa_details_box {\n    flex-flow: row;\n  }\n\n  .cpa_details_box_top {\n    border-bottom-style: none;\n    border-right: 1px solid #ccc;\n    flex-flow: row;\n    width: 24em;\n    padding-bottom: 0;\n    padding-right: 1.5em;\n  }\n\n  .cpa_details_box_bottom {\n    padding-top: 0;\n    padding-left: 1.5em;\n  }\n\n  .cpa_values_grid {\n    grid-column-gap: 5em;\n    grid-row-gap: 5em;\n    grid-template-columns: 1fr;\n  }\n\n  .cpa_values_content {\n    text-align: center;\n    padding-bottom: 0;\n  }\n\n  .cpa_values_img-wrap {\n    aspect-ratio: 1;\n  }\n\n  .cpa_values_list {\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .cpa_values_cta {\n    max-width: none;\n  }\n\n  .cpa_metrics_number {\n    font-size: 3.5em;\n  }\n\n  .cpa_why_grid {\n    grid-template-columns: 1fr;\n  }\n\n  .cpa_why_img-wrap {\n    aspect-ratio: 1;\n  }\n\n  .cpa_why_content {\n    text-align: center;\n  }\n\n  .cpa_why_item {\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .cpa_apply_grid {\n    grid-template-columns: 1fr;\n  }\n\n  .cpa_apply_form-block {\n    border-bottom: 1px solid #ccc;\n    border-right-style: none;\n    padding-bottom: 5em;\n    padding-right: 0;\n  }\n\n  .cpa_apply_content {\n    padding-top: 5em;\n    padding-left: 0;\n  }\n\n  .cpa_apply_step {\n    text-align: center;\n  }\n\n  .cpa_apply_eligible {\n    grid-column-gap: 1.5em;\n    grid-row-gap: 1.5em;\n    text-align: center;\n    grid-template-rows: auto auto;\n    grid-template-columns: 1fr 1fr;\n    grid-auto-columns: 1fr;\n    display: grid;\n  }\n\n  .cpa_apply_item {\n    flex-flow: column;\n  }\n\n  .cpa_reviews_grid {\n    grid-column-gap: 1em;\n    grid-row-gap: 1em;\n    grid-template-columns: 1fr;\n  }\n\n  .cpa_reviews_bg-ic {\n    width: 12em;\n    top: 5%;\n    left: 5vw;\n  }\n\n  .cpa_hero_animation {\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 36em;\n    margin-top: 5em;\n    display: flex;\n    position: relative;\n    inset: auto 0% 0%;\n  }\n\n  .cpa_hero_animation.is-home-carousel {\n    height: 56em;\n    position: absolute;\n    bottom: -10%;\n  }\n\n  .cpa_hero_rive.is-home-carousel {\n    width: auto;\n    max-width: none;\n    height: 100%;\n    max-height: none;\n  }\n\n  .cpa_values_img {\n    height: 90%;\n  }\n\n  .hero-carousel_main {\n    aspect-ratio: 3 / 4;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  body {\n    font-size: 2.25vw;\n  }\n\n  h3 {\n    font-size: 2.125em;\n  }\n\n  h4 {\n    line-height: 1.4;\n  }\n\n  p {\n    line-height: 1.5;\n  }\n\n  li {\n    font-size: 1.25em;\n  }\n\n  .super-text2 {\n    font-size: 6em;\n  }\n\n  .heading-style-h2 {\n    font-size: 2.5em;\n  }\n\n  .heading-style-h3 {\n    font-size: 2.125em;\n  }\n\n  .heading-style-h3.is--home-scrub {\n    width: 90%;\n  }\n\n  .spacer-20px {\n    padding-top: 1.25rem;\n  }\n\n  .spacer-32px {\n    padding-top: 2rem;\n  }\n\n  .max-width-full-mobile-landscape {\n    width: 100%;\n    max-width: none;\n  }\n\n  .hide-mobile-landscape {\n    display: none;\n  }\n\n  .padding-global {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .spacer-56px {\n    padding-top: 4rem;\n  }\n\n  .fs-styleguide_heading-medium {\n    font-size: 2rem;\n  }\n\n  .fs-styleguide_section-header {\n    font-size: .875rem;\n  }\n\n  .text-style-nowrap {\n    white-space: normal;\n  }\n\n  .flex-space-between {\n    grid-row-gap: 5em;\n    flex-direction: column;\n  }\n\n  .spacer-48px {\n    padding-top: 3.5rem;\n  }\n\n  .show-mobile-landscape {\n    display: block;\n  }\n\n  .navbar, .nav_menu-trigger-wrap {\n    z-index: 9999;\n  }\n\n  .footer_grid.footer-2 {\n    grid-column-gap: 5em;\n    grid-row-gap: 5em;\n    grid-template-columns: 1fr;\n  }\n\n  .footer_right-content:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n    grid-template-rows: auto auto;\n  }\n\n  .hero_leftbox.style-21 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .hero_img.is-carousel {\n    width: 48em;\n    margin-bottom: -15em;\n  }\n\n  .feature_leftbox {\n    padding-left: 2.5em;\n    padding-right: 2.5em;\n  }\n\n  .feature_leftbox.feature-3 {\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .feature_list.feature-4, .feature_list.feature-5, .feature_list.feature-6 {\n    grid-template-columns: 1fr;\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .carousel_bottom {\n    grid-column-gap: 1.5em;\n    grid-row-gap: 1.5em;\n    flex-flow: column;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .pricing_list.column-amount-3 {\n    grid-template-columns: 1fr;\n  }\n\n  .pricing_card:where(.w-variant-95ad2457-fc61-2145-2174-762a27da01b1), .pricing_card:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n    grid-column-gap: 2em;\n    grid-row-gap: 2em;\n    flex-flow: column;\n    padding-bottom: 1em;\n  }\n\n  .pricing_card_line.is-2:where(.w-variant-95ad2457-fc61-2145-2174-762a27da01b1), .pricing_card_line.is-2:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n    display: block;\n  }\n\n  .pricing_card_btn-wrap.is-2:where(.w-variant-95ad2457-fc61-2145-2174-762a27da01b1), .pricing_card_btn-wrap.is-2:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n    padding: 0;\n    position: relative;\n  }\n\n  .pricing_card_bottom:where(.w-variant-95ad2457-fc61-2145-2174-762a27da01b1), .pricing_card_bottom:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n    width: 100%;\n  }\n\n  .testimonial_grid, .testimonial_grid.column-3, .feature-grid-turtleci {\n    grid-template-columns: 1fr;\n  }\n\n  .feature-grid-turtleci.feature-3 {\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .data-wrapper {\n    grid-column-gap: 1em;\n    grid-row-gap: 1em;\n  }\n\n  .data-card.background-color-brand {\n    border-radius: 1em;\n  }\n\n  .about-us-grid {\n    grid-template-columns: 1fr;\n    padding-left: 2.5em;\n    padding-right: 2.5em;\n  }\n\n  .about-us-grid.feature-3 {\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .about-us-card {\n    height: 70em;\n  }\n\n  .about-us-member-image {\n    height: 50em;\n    min-height: auto;\n  }\n\n  .our-mission {\n    padding-left: 2.5em;\n    padding-right: 2.5em;\n  }\n\n  .our-mission.feature-3 {\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .mission-grid-wrapper {\n    grid-template-columns: 1fr;\n  }\n\n  .mission-grid-wrapper.feature-4, .mission-grid-wrapper.feature-5, .mission-grid-wrapper.feature-6 {\n    grid-template-columns: 1fr;\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .mission-items {\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n\n  .rl_faq1_spacing-block-5 {\n    padding-bottom: 1.5rem;\n  }\n\n  .rl-text-style-medium {\n    font-size: 1rem;\n  }\n\n  .rl_faq1_spacing-block-4 {\n    padding-bottom: .75rem;\n  }\n\n  .rl-heading-style-h4 {\n    font-size: 1.5rem;\n    line-height: 1.4;\n  }\n\n  .rl_faq1_spacing-block-3 {\n    padding-bottom: 3rem;\n  }\n\n  .rl_faq1_answer-wrapper {\n    margin-bottom: 1.25rem;\n  }\n\n  .rl_faq1_icon {\n    width: 1.75rem;\n    height: 1.75rem;\n  }\n\n  .rl_faq1_icon-wrapper {\n    width: 1.75rem;\n  }\n\n  .rl_faq1_question-text {\n    font-size: 1rem;\n  }\n\n  .rl_faq1_question {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n\n  .rl_faq1_spacing-block-2 {\n    padding-bottom: 3rem;\n  }\n\n  .rl_faq1_spacing-block-1 {\n    padding-bottom: 1.25rem;\n  }\n\n  .rl-heading-style-h2 {\n    font-size: 2.25rem;\n  }\n\n  .rl-padding-section-large {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n\n  .hero-bot-row {\n    grid-template-rows: auto auto;\n    grid-template-columns: 1fr;\n  }\n\n  .contact-from-grid {\n    padding-left: 2.5em;\n    padding-right: 2.5em;\n  }\n\n  .contact-from-grid.feature-3 {\n    padding-left: 5em;\n    padding-right: 5em;\n  }\n\n  .max-100vw {\n    height: 30em;\n  }\n\n  .absolute-hero-heading {\n    padding-top: 3em;\n  }\n\n  .collection-list {\n    grid-template-columns: 1fr;\n  }\n\n  .documentation-wrapper {\n    max-width: none;\n    padding-top: 5em;\n    position: relative;\n  }\n\n  .documentation-content-wrap {\n    width: 100%;\n    padding-left: 0;\n  }\n\n  .documentation-grid {\n    display: flex;\n  }\n\n  .documentation-sidebar-sticky {\n    flex-flow: column;\n    align-items: flex-end;\n    display: flex;\n    top: 7em;\n  }\n\n  .documentation-sidebar-sticky.hide-desktop-tablet {\n    display: block;\n  }\n\n  .ci-syntax-block {\n    width: 100%;\n  }\n\n  .sidebar-link {\n    font-size: 1em;\n  }\n\n  .heading-svg {\n    width: 4em;\n    height: 4em;\n    color: var(--base-color--true-white);\n    padding: 1em;\n    position: absolute;\n    inset: 0%;\n  }\n\n  .x-svg {\n    width: 4em;\n    height: 4em;\n    color: var(--base-color--true-white);\n    padding: 1em;\n    display: block;\n    position: absolute;\n    inset: 0%;\n  }\n\n  .indicator {\n    z-index: 1000;\n    background-color: var(--base-color--star-yellow);\n    border-radius: .75rem;\n    width: 4em;\n    height: 4em;\n    transition: all .2s;\n    display: block;\n    position: fixed;\n    inset: auto 1.5rem 5rem auto;\n    box-shadow: 0 4px 7px #6b6b6b33;\n  }\n\n  .documentation-sidebar-fixed {\n    z-index: 999;\n    background-color: var(--base-color--true-white);\n    padding: 2rem;\n    transition: all .3s;\n    display: block;\n    position: fixed;\n    inset: 0% auto 0% 0%;\n  }\n\n  .overlay-bg {\n    z-index: 998;\n    background-color: var(--base-color--overlay);\n    transition: all .4s;\n    display: block;\n    position: fixed;\n    inset: 0%;\n  }\n\n  .contact-details {\n    grid-template-columns: 1fr;\n  }\n\n  .contact-info-card.center {\n    border-left-style: none;\n    border-right-style: none;\n  }\n\n  .contact_hero_content {\n    text-align: center;\n  }\n\n  .pricing_card-list {\n    grid-template-columns: 1fr;\n  }\n\n  .cpa_hero_main.is-home-carousel {\n    padding-top: 2.5em;\n    padding-bottom: 2.5em;\n  }\n\n  .cpa_hero_subtitle {\n    font-size: 1.5em;\n  }\n\n  .cpa_hero_title {\n    font-size: 4.5em;\n  }\n\n  .cpa_hero_highlight_text {\n    font-size: 1.5em;\n  }\n\n  .cpa_hero_highlight_ic {\n    width: 1.5em;\n    height: 1.5em;\n  }\n\n  .cpa_details_box {\n    flex-flow: column;\n  }\n\n  .cpa_details_box_top {\n    border-bottom-style: solid;\n    border-right-style: none;\n    flex-flow: column;\n    width: 100%;\n    padding-bottom: 1.5em;\n    padding-right: 0;\n  }\n\n  .cpa_details_box_bottom {\n    padding-top: 1.5em;\n    padding-left: 0;\n  }\n\n  .cpa_details_cta-box {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    text-align: center;\n    flex-flow: column;\n  }\n\n  .cpa_wycd_grid, .cpa_apply_eligible {\n    grid-template-columns: 1fr;\n  }\n\n  .cpa_reviews_bg-ic {\n    width: 10em;\n    top: 8%;\n    left: 2.5vw;\n  }\n\n  .rl_faq1_icon-2 {\n    width: 1.75rem;\n    height: 1.75rem;\n  }\n\n  .cpa_hero_animation.is-home-carousel {\n    height: 40em;\n    bottom: -15%;\n  }\n\n  .cpa_why_img {\n    height: 90%;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  body {\n    font-size: 3.875vw;\n  }\n\n  h1 {\n    font-size: 2em;\n  }\n\n  h2 {\n    font-size: 1.75em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1.125em;\n  }\n\n  p {\n    line-height: 1.5;\n  }\n\n  li {\n    font-size: 3.5vw;\n  }\n\n  .button.is-form-submit {\n    width: 100%;\n  }\n\n  .super-text2 {\n    font-size: 5em;\n  }\n\n  .heading-style-h2.text-color-yellow.is-fomo {\n    font-size: 2em;\n  }\n\n  .heading-style-h3.is--home-scrub {\n    width: 100%;\n  }\n\n  .heading-style-h1 {\n    font-size: 2.75em;\n  }\n\n  .heading-style-h5 {\n    font-size: 1.125em;\n  }\n\n  .heading-style-h4 {\n    font-size: 1.25em;\n  }\n\n  .padding-global {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .max-width-full-mobile-portrait {\n    width: 100%;\n    max-width: none;\n  }\n\n  .super-text {\n    font-size: 4em;\n  }\n\n  .button-group:where(.w-variant-bd759705-9ecf-4629-a7c8-8630e5d934d5), .button-group.style-44, .button-group.style-59 {\n    flex-flow: wrap;\n  }\n\n  .hide-mobile-portrait {\n    display: none;\n  }\n\n  .fs-styleguide_row {\n    flex-wrap: wrap;\n  }\n\n  .show-mobile-portrait {\n    display: block;\n  }\n\n  .nav_logo {\n    width: 9.8em;\n    height: 2em;\n  }\n\n  .nav_menu-trigger-wrap {\n    z-index: 99999;\n  }\n\n  .footer_grid:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n    grid-column-gap: 7.5em;\n    grid-row-gap: 7.5em;\n  }\n\n  .footer_left-content.footer-2 {\n    flex-flow: column;\n    align-items: center;\n  }\n\n  .footer_column:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n    grid-row-gap: 1em;\n    flex-flow: wrap;\n    justify-content: center;\n  }\n\n  .footer_right-content {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .footer_right-content:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n    grid-row-gap: 5em;\n    grid-template-columns: 1fr;\n  }\n\n  .hero_grid {\n    grid-column-gap: 2em;\n    grid-row-gap: 2em;\n  }\n\n  .hero_grid.is-carousel {\n    padding: 1em;\n  }\n\n  .hero_grid.is-carousel.is-event {\n    padding-bottom: 0;\n  }\n\n  .hero_leftbox {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .hero_leftbox.privacy {\n    margin-top: 0;\n  }\n\n  .hero_img {\n    height: auto;\n  }\n\n  .hero_img.is-carousel {\n    width: 38em;\n    margin-bottom: -12.5em;\n  }\n\n  .feature_leftbox, .feature_leftbox.feature-3, .feature_leftbox.feature-4, .feature_leftbox.feature-5, .feature_leftbox.feature-6 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .feature_list {\n    grid-column-gap: 4em;\n    grid-row-gap: 4em;\n    grid-template-columns: 1fr;\n  }\n\n  .feature_list.feature-4, .feature_list.feature-5, .feature_list.feature-6 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .carousel_item.swiper-slide {\n    width: 100%;\n  }\n\n  .footer_center-block:where(.w-variant-f6ecfa1b-e61c-7008-808f-cc268ec38b60) {\n    grid-row-gap: 1em;\n    flex-flow: wrap;\n    justify-content: center;\n  }\n\n  .cta_box-wrap {\n    padding-top: 3em;\n    padding-bottom: 3em;\n  }\n\n  .cta_leftbox.side-by-side {\n    padding: 2.5em 1.5em;\n  }\n\n  .cta_rightbox {\n    aspect-ratio: 1;\n  }\n\n  .extra-info-list, .extra-info-list:where(.w-variant-9b07ff06-1be2-97d4-25dc-058957026af5), .extra-info-list:where(.w-variant-8cc54523-9699-11ba-65b8-073fef88c538) {\n    flex-flow: column;\n  }\n\n  .pricing_list.column-amount-5 {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .pricing_list.column-amount-4 {\n    grid-template-columns: minmax(200px, 1fr);\n  }\n\n  .pricing_list.column-amount-3, .pricing_list.column-amount-2 {\n    grid-template-columns: 1fr;\n  }\n\n  .pricing_card {\n    padding: 1.5em;\n  }\n\n  .pricing_card_header:where(.w-variant-8e3a6c7c-e6f4-3683-e9f2-07e37ce915a3) {\n    padding-right: 0;\n  }\n\n  .testimonial_card_client-wrap:where(.w-variant-46590a55-cf77-e641-28e0-0c093cbbabcd), .testimonial_card_client-wrap:where(.w-variant-7e866526-af6d-97fe-7785-aa492e0dd84d), .testimonial_card_client-wrap:where(.w-variant-e35f08b9-0930-25aa-0d16-8750895b6aaa) {\n    grid-column-gap: 2em;\n    grid-row-gap: 2em;\n    flex-flow: column;\n    width: 100%;\n  }\n\n  .testimonial_card_client-wrap:where(.w-variant-b03828de-1604-123f-4a44-d945443c2f3b), .testimonial_card_client-wrap:where(.w-variant-c0bf14bf-4ea2-e78d-c956-cbe54cf2942e), .testimonial_card_client-wrap:where(.w-variant-154bc500-4dbe-0e26-dc26-bf2dad9ca4b4) {\n    grid-column-gap: 2em;\n    grid-row-gap: 2em;\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  .testimonial_card_logo-wrap.is-2:where(.w-variant-46590a55-cf77-e641-28e0-0c093cbbabcd), .testimonial_card_logo-wrap.is-2:where(.w-variant-7e866526-af6d-97fe-7785-aa492e0dd84d), .testimonial_card_logo-wrap.is-2:where(.w-variant-e35f08b9-0930-25aa-0d16-8750895b6aaa), .testimonial_card_logo-wrap.is-2:where(.w-variant-b03828de-1604-123f-4a44-d945443c2f3b), .testimonial_card_logo-wrap.is-2:where(.w-variant-c0bf14bf-4ea2-e78d-c956-cbe54cf2942e), .testimonial_card_logo-wrap.is-2:where(.w-variant-154bc500-4dbe-0e26-dc26-bf2dad9ca4b4) {\n    padding-left: 0;\n  }\n\n  .testimonial_card_client_main:where(.w-variant-46590a55-cf77-e641-28e0-0c093cbbabcd), .testimonial_card_client_main:where(.w-variant-7e866526-af6d-97fe-7785-aa492e0dd84d), .testimonial_card_client_main:where(.w-variant-e35f08b9-0930-25aa-0d16-8750895b6aaa) {\n    width: 100%;\n    padding-right: 0;\n  }\n\n  .testimonial_card_client_main:where(.w-variant-b03828de-1604-123f-4a44-d945443c2f3b), .testimonial_card_client_main:where(.w-variant-c0bf14bf-4ea2-e78d-c956-cbe54cf2942e), .testimonial_card_client_main:where(.w-variant-154bc500-4dbe-0e26-dc26-bf2dad9ca4b4) {\n    border-right-style: none;\n    flex-flow: column;\n    padding-right: 0;\n  }\n\n  .testimonial_card_client_name-title:where(.w-variant-b03828de-1604-123f-4a44-d945443c2f3b), .testimonial_card_client_name-title:where(.w-variant-c0bf14bf-4ea2-e78d-c956-cbe54cf2942e), .testimonial_card_client_name-title:where(.w-variant-154bc500-4dbe-0e26-dc26-bf2dad9ca4b4) {\n    text-align: center;\n  }\n\n  .feature-grid-turtleci {\n    grid-template-columns: 1fr;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .feature-grid-turtleci.feature-3, .feature-grid-turtleci.feature-4, .feature-grid-turtleci.feature-5, .feature-grid-turtleci.feature-6 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .data-wrapper {\n    grid-template-columns: 1fr;\n  }\n\n  .why-choose-image-wrapper {\n    width: 100%;\n    height: auto;\n  }\n\n  .video-wrapper {\n    width: 100%;\n  }\n\n  .cta-heading {\n    font-size: 1.5em;\n  }\n\n  .about-us-grid {\n    grid-template-columns: 1fr;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .about-us-grid.feature-3, .about-us-grid.feature-4, .about-us-grid.feature-5, .about-us-grid.feature-6 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .about-us-card {\n    height: 50em;\n  }\n\n  .about-us-member-image {\n    height: 30em;\n  }\n\n  .our-mission, .our-mission.feature-3, .our-mission.feature-4, .our-mission.feature-5, .our-mission.feature-6, .mission-grid-wrapper.feature-4, .mission-grid-wrapper.feature-5, .mission-grid-wrapper.feature-6 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .image-advanced-logging {\n    width: 100%;\n    max-width: none;\n  }\n\n  .hero-top-row {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .contact-from-grid {\n    grid-template-columns: 1fr;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .contact-from-grid.feature-3, .contact-from-grid.feature-4, .contact-from-grid.feature-5, .contact-from-grid.feature-6 {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .max-100vw {\n    height: 40em;\n  }\n\n  .absolute-hero-heading {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  .blog-card {\n    flex-flow: column;\n  }\n\n  .blog-img-wrapper {\n    flex: 0 auto;\n    width: 100%;\n  }\n\n  .collection-list {\n    grid-column-gap: 3rem;\n    grid-row-gap: 3rem;\n    grid-template-columns: 1fr;\n  }\n\n  .hero-rightbox, .blog-hero-left {\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .documentation-wrapper {\n    max-width: none;\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .document-text-heading {\n    flex-flow: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    margin-bottom: .5em;\n  }\n\n  .documentation-sidebar-wrap {\n    display: none;\n  }\n\n  .blog-heading {\n    width: 100%;\n    font-size: 1.25em;\n  }\n\n  .collection-item, .text-block {\n    width: 100%;\n  }\n\n  .heading-svg, .x-svg {\n    width: 3.5em;\n    height: 3.5em;\n  }\n\n  .indicator {\n    width: 3.5em;\n    height: 3.5em;\n    right: 1rem;\n  }\n\n  .documentation-sidebar-fixed {\n    display: block;\n  }\n\n  .blog_item_content {\n    padding-right: 0;\n  }\n\n  .cpa_navbar_btn-wrap {\n    display: none;\n  }\n\n  .cpa_navbar_menu_btn-wrap {\n    display: block;\n  }\n\n  .cpa_hero_main {\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n\n  .cpa_hero_subtitle {\n    font-size: 1.25em;\n  }\n\n  .cpa_hero_title {\n    font-size: 2.75em;\n  }\n\n  .cpa_hero_highlight_content {\n    grid-column-gap: .75em;\n    grid-row-gap: .75em;\n    flex-flow: column;\n  }\n\n  .cpa_hero_highlight_text.is-home {\n    font-size: 1.25em;\n  }\n\n  .cpa_hero_highlight_ic {\n    width: 2em;\n    height: 2em;\n  }\n\n  .cpa_hero_bg-wrap {\n    justify-content: center;\n    align-items: center;\n  }\n\n  .cpa_hero_bg {\n    flex: none;\n    width: 32em;\n  }\n\n  .cpa_details_box {\n    padding: 1.5em 1em;\n  }\n\n  .cpa_details_cta-box {\n    padding: 1em;\n  }\n\n  .cpa_values_item {\n    flex-flow: column;\n  }\n\n  .cpa_values_ic {\n    width: 2.5em;\n    height: 2.5em;\n  }\n\n  .cpa_values_cta {\n    padding-left: 1.5em;\n    padding-right: 1.5em;\n  }\n\n  .cpa_metrics_main {\n    grid-column-gap: 2.5em;\n    grid-row-gap: 2.5em;\n    grid-template-columns: 1fr;\n  }\n\n  .cpa_metrics_bg {\n    height: 200%;\n  }\n\n  .cpa_apply_main {\n    padding: 2.5em 1em;\n  }\n\n  .campaign-recaptcha {\n    margin-left: 0;\n    margin-right: 0;\n    position: absolute;\n  }\n\n  .campaign-recaptcha-wrap {\n    max-width: 100%;\n    height: 10em;\n    position: relative;\n  }\n\n  .cpa_reviews {\n    padding-top: 7.5em;\n  }\n\n  .cpa_reviews_bg-ic {\n    width: 8em;\n    top: 4%;\n    left: 4%;\n  }\n\n  .cpa_hero_animation {\n    height: 28em;\n  }\n\n  .cpa_hero_animation.is-home-carousel {\n    height: 35em;\n    bottom: -12%;\n  }\n\n  .cpa_hero_rive {\n    flex: none;\n    width: 200%;\n  }\n\n  .floating-btn-wrap {\n    padding-left: 1em;\n    padding-right: 1em;\n  }\n\n  .cpa_btt-btn_ic-wrap {\n    width: 3em;\n    height: 3em;\n  }\n\n  .cpa_btt-btn_ic {\n    width: 2em;\n    height: 2em;\n  }\n\n  .fomo_collapsed {\n    padding: .75em;\n  }\n\n  .fomo_expanded {\n    width: 22em;\n  }\n\n  .fomo_expanded_top, .fomo_expanded_bottom {\n    padding: 1.5em;\n  }\n\n  .hero-carousel_main {\n    aspect-ratio: 9 / 16;\n  }\n}\n\n#w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d202b-0ef646b9 {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d203e-0ef646b9:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26) {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-0ef646b9 {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-0ef646b9:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54) {\n  grid-area: 1 / 2 / 2 / 3;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160795-0ef646ba {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e1041607b4-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041607b9-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041607be-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041607c3-0ef646ba {\n  justify-self: start;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e1041607dd-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041608a5-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041608a7-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041608ad-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041608c4-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041608dd-0ef646ba {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e1041608e0-0ef646ba {\n  justify-self: start;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e1041608e2-0ef646ba {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e1041608e5-0ef646ba {\n  justify-self: start;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e10416093c-0ef646ba, #w-node-f5fc250e-34b1-c8d9-acf6-d8ea06d4dc9d-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160946-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160947-0ef646ba {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e1041609c9-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041609cf-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041609d5-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041609db-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041609e1-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041609e7-0ef646ba {\n  justify-self: stretch;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e1041609f7-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e1041609fc-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a01-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a06-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a0b-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a10-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a15-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a1a-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a1f-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a24-0ef646ba {\n  justify-self: start;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a28-0ef646ba {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a29-0ef646ba {\n  justify-self: start;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a2c-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a2d-0ef646ba {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a2e-0ef646ba {\n  justify-self: start;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a31-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a32-0ef646ba {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a33-0ef646ba {\n  justify-self: start;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a36-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a37-0ef646ba {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a38-0ef646ba {\n  justify-self: start;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a3b-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a3c-0ef646ba {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a3d-0ef646ba {\n  justify-self: start;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a40-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a41-0ef646ba {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a42-0ef646ba {\n  justify-self: start;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a45-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a56-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a83-0ef646ba, #w-node-_66648800-ce29-4660-afa4-92e104160a99-0ef646ba {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_66648800-ce29-4660-afa4-92e104160a9f-0ef646ba {\n  justify-self: start;\n}\n\n#w-node-_75d7d58d-003d-eb2a-bb91-5760bbc0d1ad-40a729bc {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_75d7d58d-003d-eb2a-bb91-5760bbc0d1bc-40a729bc:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26) {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-40a729bc {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-40a729bc:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54) {\n  grid-area: 1 / 2 / 2 / 3;\n}\n\n#w-node-_674c7cd8-f820-37fb-d82b-aac29e52da7f-40a729bc {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_674c7cd8-f820-37fb-d82b-aac29e52da7f-40a729bc:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54) {\n  grid-area: 1 / 2 / 2 / 3;\n}\n\n#w-node-_3590fea4-7452-e36f-bbb4-07668ffc7110-40a729bc:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26) {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n#w-node-_3590fea4-7452-e36f-bbb4-07668ffc7101-40a729bc, #w-node-_7483c5f0-6c73-8915-0900-71e22f1e731b-a5d97bcf {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_7621a218-f4a1-1056-ffdd-ecebdc93fb73-a5d97bcf {\n  order: 9999;\n}\n\n#w-node-a63b472e-a1da-bb3a-d92c-e5e08816100c-a5d97bcf {\n  align-self: center;\n}\n\n#w-node-_1314f315-0d5a-049d-66b0-0dc57a7d21d9-a5d97bcf {\n  order: 9999;\n  align-self: center;\n}\n\n#w-node-_1314f315-0d5a-049d-66b0-0dc57a7d21df-a5d97bcf {\n  justify-self: center;\n}\n\n#w-node-ae3cff3c-61cb-2074-9a65-c6078a640db5-45885f9c {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-ae3cff3c-61cb-2074-9a65-c6078a640dc4-45885f9c:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26) {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n#w-node-_56c4fbff-94e2-273a-2849-e78fae901331-45885f9c, #w-node-_5b9b38dd-7563-4c1f-1249-3c06a9817224-45885f9c, #w-node-_52b60110-ec71-cf77-6efe-8186f1e2cd51-45885f9c, #w-node-ef8419f4-b8b1-ee7a-e0f7-d5b38908f1e0-45885f9c, #w-node-ef8419f4-b8b1-ee7a-e0f7-d5b38908f16e-45885f9c, #w-node-ef8419f4-b8b1-ee7a-e0f7-d5b38908f1a3-45885f9c {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_7621a218-f4a1-1056-ffdd-ecebdc93fb73-45885f9c {\n  order: 9999;\n}\n\n#w-node-_1551703d-661f-8a8f-bbe4-a3fa5746bab9-a201f7fa {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n  justify-self: center;\n}\n\n#w-node-_1551703d-661f-8a8f-bbe4-a3fa5746bacc-a201f7fa:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26) {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n#w-node-_56fd8490-4c43-3ef5-778c-be9a52dab8bb-a201f7fa {\n  align-self: center;\n}\n\n#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-a201f7fa {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n#w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-a201f7fa:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54) {\n  grid-area: 1 / 2 / 2 / 3;\n}\n\n#w-node-_3f74929b-8a41-b220-a411-c5e148c88fed-a201f7fa, #w-node-b13029e3-76cf-3bd3-6171-44b3ba25f7af-a201f7fa, #w-node-d7fed079-6d00-2f06-4fde-0075cb4ca431-a201f7fa {\n  justify-self: center;\n}\n\n#w-node-fdb51a93-9599-cf16-b377-00e91f7aa326-d9a78f22 {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n  place-self: start;\n}\n\n#w-node-_01b34f74-ef7b-84a3-e436-8cebe109b893-d9a78f22 {\n  grid-area: span 1 / span 5 / span 1 / span 5;\n}\n\n#w-node-_7483c5f0-6c73-8915-0900-71e22f1e731b-84005adb, #w-node-_7483c5f0-6c73-8915-0900-71e22f1e731b-9a5fff5f, #w-node-_7483c5f0-6c73-8915-0900-71e22f1e731b-2ed8878b {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n  justify-self: center;\n}\n\n#w-node-_70fa2271-aa4e-0922-9513-cc195e56895d-e97e7802 {\n  grid-area: span 1 / span 3 / span 1 / span 3;\n}\n\n#w-node-_54bc519d-9f2d-3514-5759-2f61a5f2a8a5-e97e7802 {\n  grid-area: span 1 / span 1 / span 1 / span 1;\n}\n\n@media screen and (max-width: 991px) {\n  #w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d203e-0ef646b9 {\n    justify-self: center;\n  }\n\n  #w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d203e-0ef646b9:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26) {\n    grid-row: 2 / 3;\n  }\n\n  #w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-0ef646b9:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54) {\n    grid-column: 1 / 2;\n  }\n\n  #w-node-d9852e9b-78da-4b05-14ca-46237e0756e5-7e0756e1 {\n    align-self: stretch;\n  }\n\n  #w-node-_75d7d58d-003d-eb2a-bb91-5760bbc0d1bc-40a729bc:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26) {\n    grid-row: 2 / 3;\n  }\n\n  #w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-40a729bc:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54), #w-node-_674c7cd8-f820-37fb-d82b-aac29e52da7f-40a729bc:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54) {\n    grid-column: 1 / 2;\n  }\n\n  #w-node-_3590fea4-7452-e36f-bbb4-07668ffc7110-40a729bc {\n    order: 9999;\n  }\n\n  #w-node-_3590fea4-7452-e36f-bbb4-07668ffc7110-40a729bc:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26) {\n    grid-row: 2 / 3;\n  }\n\n  #w-node-c516adc2-e707-86e8-9bbb-7901f8308955-a5d97bcf, #w-node-a63b472e-a1da-bb3a-d92c-e5e08816102a-a5d97bcf {\n    order: -9999;\n  }\n\n  #w-node-ae3cff3c-61cb-2074-9a65-c6078a640dc4-45885f9c:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26), #w-node-_1551703d-661f-8a8f-bbe4-a3fa5746bacc-a201f7fa:where(.w-variant-694d54c2-fd6c-0c00-28bb-ae5a557a7e26) {\n    grid-row: 2 / 3;\n  }\n\n  #w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-a201f7fa:where(.w-variant-187ad4c7-24e0-3e5f-95b1-c428f1f25a54) {\n    grid-column: 1 / 2;\n  }\n\n  #w-node-fdb51a93-9599-cf16-b377-00e91f7aa326-d9a78f22 {\n    justify-self: center;\n  }\n\n  #w-node-_01b34f74-ef7b-84a3-e436-8cebe109b893-d9a78f22, #w-node-_70fa2271-aa4e-0922-9513-cc195e56895d-e97e7802 {\n    grid-column: span 1 / span 1;\n  }\n\n  #w-node-_12bb7aac-91dd-9198-7f36-73f680088354-e97e7802 {\n    grid-area: span 1 / span 1 / span 1 / span 1;\n  }\n\n  #w-node-_54bc519d-9f2d-3514-5759-2f61a5f2a8a5-e97e7802 {\n    grid-area: 1 / 1 / 2 / 2;\n    justify-self: center;\n  }\n\n  #w-node-fa612c6e-3df0-392a-7490-c0c92875afec-e97e7802, #w-node-_106216ce-d528-92c9-bbac-d659ef1c0767-e97e7802 {\n    grid-area: span 1 / span 2 / span 1 / span 2;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  #w-node-c07faf60-8f84-3edb-aacd-5d7d32aca9a0-0ef646b9 {\n    grid-area: span 1 / span 1 / span 1 / span 1;\n  }\n\n  #w-node-fa612c6e-3df0-392a-7490-c0c92875afec-e97e7802, #w-node-_106216ce-d528-92c9-bbac-d659ef1c0767-e97e7802 {\n    grid-column: span 1 / span 1;\n  }\n}\n\n@media screen and (max-width: 479px) {\n  #w-node-_1314f315-0d5a-049d-66b0-0dc57a7d21d9-a5d97bcf {\n    order: 9999;\n    grid-area: span 1 / span 1 / span 1 / span 1;\n    align-self: center;\n  }\n\n  #w-node-_01b34f74-ef7b-84a3-e436-8cebe109b893-d9a78f22 {\n    grid-column: span 1 / span 1;\n  }\n}\n\n\n\n"}</Style></>);
            }
          

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
<HtmlEmbed
code={"<style>@keyframes rotate-full-circle{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<style>.carousel_card:hover .carousel_img{border-radius:2rem}.carousel_bottom>*:only-child{margin:0 auto}</style>"}
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
className={`w-element ${"page-css w-embed"}`}>
<HtmlEmbed
code={"<style>@keyframes rotate-full-circle{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element ${"page-js w-embed"}`} />
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
aria-current={"page"}
className={`w-element ${"nav_logo-link w-inline-block w--current"}`}>
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
className={`w-element ${"nav_link text-weight-semibold text-align-right"}`}>
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
className={`w-element ${"hero-carousel"}`}>
<div
className={`w-element ${"padding-global"}`}>
<div
className={`w-element ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element ${"hero-carousel_pagination swiper-pagination"}`}>
<div
className={`w-element ${"hero-carousel-pagination-bullet-active"}`} />
<div
className={`w-element ${"hero-carousel-pagination-bullet"}`} />
</div>
<div
className={`w-element ${"hero-carousel_main"}`}>
<div
className={`w-element ${"hero-carousel_list swiper-wrapper"}`}>
<div
className={`w-element ${"hero-carousel-slide swiper-slide"}`}>
<div
className={`w-element ${"hero-carousel_slide-wrap"}`}>
<div
className={`w-element ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element ${"hero_grid is-carousel is-event"}`}>
<div
className={`w-element ${"cpa_hero_main is-home-carousel"}`}>
<div
className={`w-element ${"cpa_hero_content is-carousel"}`}>
<div
className={`w-element ${"cpa_hero_subtitle"}`}>
{"New CI/CD Platform Supports New Startups"}
</div>
<div
className={`w-element ${"spacer-24px"}`} />
<div
className={`w-element ${"cpa_hero_title"}`}>
{"Up to $1 Million in Support!"}
</div>
<div
className={`w-element ${"spacer-80px"}`} />
<a
href={"startup-support-event.html"}
className={`w-element ${"cpa_hero_highlight is-home w-inline-block"}`}>
<div
className={`w-element ${"cpa_hero_highlight_content"}`}>
<div
className={`w-element ${"cpa_hero_highlight_ic is-home w-embed"}`}>
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
className={`w-element ${"cpa_hero_highlight_text is-home"}`}>
{"Get Your 18 MONTHS FREE SUBSCRIPTION"}
</div>
</div>
<div
className={`w-element ${"cpa_hero_highlight_lightning"}`} />
</a>
</div>
<div
className={`w-element ${"cpa_hero_bg-wrap"}`}>
<div
className={`w-element ${"cpa_hero_bg w-embed"}`}>
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
className={`w-element ${"cpa_hero_animation is-home-carousel"}`}>
<div
data-rive-url={"https://cdn.prod.website-files.com/6757f377cc48557b0ef646bd/67a3074f472ef0837a0691f1_TurtleCI%20Campaign%20Hero%20Animation.riv"}
data-rive-artboard={"Artboard"}
data-rive-autoplay={"true"}
data-rive-is-touch-scroll-enabled={"false"}
data-rive-automatically-handle-events={"false"}
data-rive-fit={"contain"}
data-rive-alignment={"center"}
data-animation-type={"rive"}
className={`w-element ${"cpa_hero_rive is-home-carousel"}`}>
<canvas
className={`w-element c4gouwl c1kuwk32`} />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div
className={`w-element ${"hero-carousel-slide swiper-slide"}`}>
<div
className={`w-element ${"hero-carousel_slide-wrap"}`}>
<div
className={`w-element ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element ${"hero_grid is-carousel"}`}>
<div
id={"w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d202b-0ef646b9"}
className={`w-element ${"hero_leftbox is-carousel"}`}>
<div
className={`w-element ${"cta_heading-wrap"}`}>
<div
className={`w-element ${"caption-md text-style-allcaps text-color-brand"}`}>
{"TURTLECI"}
</div>
<div
className={`w-element ${"spacer-16px"}`} />
<h1
className={`w-element ${"text-color-brand"}`}>
{"Effortless, Scalable CI/CD For Modern Devops Teams"}
</h1>
</div>
<div
className={`w-element ${"spacer-40px"}`} />
<div
className={`w-element ${"hero_content-wrap"}`}>
<p
className={`w-element`}>
{"Automate your build, test, and deploy processes across MacOS or Linux with a simple, powerful CI/CD platform designed to save you time and resources."}
</p>
<div
className={`w-element ${"spacer-40px"}`} />
<div
className={`w-element ${"button-group"}`}>
<div
className={`w-element`}>
<a
href={"https://console.turtleci.io/login"}
className={`w-element ${"button-wrap w-inline-block"}`}>
<button
className={`w-element ${"button"}`}>
<div
className={`w-element`}>
{"Start for free"}
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
<div
className={`w-element`}>
<a
href={"documentation.html"}
className={`w-element ${"button-wrap w-inline-block"}`}>
<button
className={`w-element ${"button-secondary"}`}>
<div
className={`w-element`}>
{"TurtleCI Syntax"}
</div>
</button>
</a>
</div>
</div>
</div>
</div>
<div
id={"w-node-b877bb4f-a1e1-c4cc-c10d-3249fd5d203e-0ef646b9"}
className={`w-element ${"hero_rightbox is-carousel"}`}>
<Image
width={70}
src={"/turtleci-import/images/Web_illustration-1_1.avif"}
alt={"Effortless, Scalable CI/CD For Modern Devops Teams"}
loading={"eager"}
className={`w-image ${"hero_img is-carousel"}`} />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div
className={`w-element ${"hide w-embed w-script"}`}>
<HtmlEmbed
clientOnly={true}
code={"<script>\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const heroCarouselSwiper = new Swiper('.hero-carousel_main', {\n    speed: 400,\n    spaceBetween: 0,\n    slidesPerView: 1,\n    grabCursor: false,\n    loop: true,\n    autoplay: {\n      delay: 8000,\n      disableOnInteraction: false\n    },\n    effect: 'fade',\n    fadeEffect: {\n      crossFade: true\n    },\n    pagination: {\n      el: '.hero-carousel_pagination',\n      type: 'bullets',\n      clickable: true,\n      bulletClass: 'swiper-pagination-bullet',\n      bulletActiveClass: 'swiper-pagination-bullet-active',\n    },\n    on: {\n      init: function () {\n        // Ensure proper initial state\n        this.slides.forEach((slide, index) => {\nif (index === this.activeIndex) {\n  slide.style.opacity = '1';\n} else {\n  slide.style.opacity = '0';\n}\n        });\n      }\n    }\n  });\n  console.log(\"Swiper Initialized:\", heroCarouselSwiper);\n});\n</script>"}
className={`w-html-embed`} />
</div>
</section>
<section
className={`w-element ${"feature-section"}`}>
<div
className={`w-element ${"padding-global is-hero"}`}>
<div
className={`w-element ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element ${"feature_grid turtleci"}`}>
<div
className={`w-element`}>
<h2
className={`w-element ${"text-align-center text-color-brand"}`}>
<span
className={`w-element`}>
{"Key Features"}
</span>
<br
className={`w-element`} />
</h2>
<div
className={`w-element ${"spacer-16px"}`} />
<div
className={`w-element ${"text-align-center text-weight-semibold text-size-md"}`}>
{"Streamline your CI/CD pipeline from code to deployment with ease and precision."}
</div>
<div
className={`w-element ${"spacer-32px"}`} />
</div>
<div
id={"w-node-_28c21dba-5dca-f30b-85e7-299c3068d929-0ef646b9"}
className={`w-element ${"feature-grid-turtleci"}`}>
<div
className={`w-element ${"feature_card"}`}>
<div
className={`w-element ${"code-embed w-embed"}`}>
<svg
viewBox={"0 0 79 84"}
fill={"none"}
xmlns={"http://www.w3.org/2000/svg"}
className={`w-element c1kuwk32 c4gouwl`}>
<g
clipPath={"url(#clip0_6018_7542)"}
className={`w-element`}>
<path
d={"M66.7729 23.2391C66.7729 30.0809 54.3338 34.8486 39.2013 34.8486C24.0687 34.8486 11.6296 30.0809 11.6296 23.2391C11.6296 16.3973 24.0687 11.6297 39.2013 11.6297C54.3338 11.6297 66.7729 16.3973 66.7729 23.2391Z"}
stroke={"#FFA726"}
strokeWidth={"3.25941"}
strokeMiterlimit={"10"}
className={`w-element`} />
<path
d={"M66.7729 23.2391V34.8486C66.7729 41.6904 54.3338 47.2877 39.2013 47.2877C24.0687 47.2877 11.6296 41.6904 11.6296 34.8486V23.2391"}
stroke={"#FFA726"}
strokeWidth={"3.25941"}
strokeMiterlimit={"10"}
className={`w-element`} />
<path
d={"M66.7729 35.056V47.4951C66.7729 54.3369 54.3338 59.9342 39.2013 59.9342C24.0687 59.9342 11.6296 54.3369 11.6296 47.4951V35.056"}
stroke={"#FFA726"}
strokeWidth={"3.25941"}
strokeMiterlimit={"10"}
className={`w-element`} />
<path
d={"M66.7729 47.4951V59.9342C66.7729 66.7759 54.3338 72.3732 39.2013 72.3732C24.0687 72.3732 11.6296 66.773 11.6296 59.9342V47.4951"}
stroke={"#FFA726"}
strokeWidth={"3.25941"}
strokeMiterlimit={"10"}
className={`w-element`} />
<path
d={"M18.0566 37.1301C23.2391 39.8265 30.7032 41.6903 39.2013 41.6903H41.2755"}
stroke={"#FFA726"}
strokeWidth={"3.25941"}
strokeMiterlimit={"10"}
className={`w-element`} />
<path
d={"M60.3462 37.1301C57.4453 38.582 53.7118 39.8265 49.5664 40.6533"}
stroke={"#FFA726"}
strokeWidth={"3.25941"}
strokeMiterlimit={"10"}
className={`w-element`} />
<path
d={"M18.0566 49.5663C23.2391 52.2627 30.7032 54.1265 39.2013 54.1265H41.2755"}
stroke={"#FFA726"}
strokeWidth={"3.25941"}
strokeMiterlimit={"10"}
className={`w-element`} />
<path
d={"M60.3462 49.5663C57.4453 51.2256 53.7118 52.2627 49.5664 53.0894"}
stroke={"#FFA726"}
strokeWidth={"3.25941"}
strokeMiterlimit={"10"}
className={`w-element`} />
<path
d={"M18.0566 62.0054C23.2391 64.7018 30.7032 66.5656 39.2013 66.5656H41.2755"}
stroke={"#FFA726"}
strokeWidth={"3.25941"}
strokeMiterlimit={"10"}
className={`w-element`} />
<path
d={"M60.3462 62.0054C57.4453 63.6647 53.7118 64.9062 49.5664 65.5285"}
stroke={"#FFA726"}
strokeWidth={"3.25941"}
strokeMiterlimit={"10"}
className={`w-element`} />
</g>
<defs
className={`w-element`}>
<clipPath
id={"clip0_6018_7542"}
className={`w-element`}>
<rect
width={"58.4027"}
height={"64"}
fill={"white"}
transform={"translate(10 10)"}
className={`w-element`} />
</clipPath>
</defs>
</svg>
</div>
<div
className={`w-element ${"feature_item_content"}`}>
<h3
className={`w-element ${"heading-style-h4 text-color-brand"}`}>
{"Codify"}
</h3>
<div
className={`w-element ${"spacer-12px"}`} />
<div
className={`w-element ${"feature-descirption text-size-md"}`}>
<span
className={`w-element`}>
{"- Integration flows as code."}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"- Pre-built composable modules to speed up development."}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"- Recyclable flows and split environments."}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"- Automatically trigger builds on commit events."}
</span>
</div>
</div>
</div>
<div
className={`w-element ${"feature_card"}`}>
<div
className={`w-element ${"code-embed w-embed"}`}>
<svg
viewBox={"0 0 84 84"}
fill={"none"}
xmlns={"http://www.w3.org/2000/svg"}
className={`w-element c1kuwk32 c4gouwl`}>
<path
d={"M34.69 72.05C33.4661 72.0439 32.2533 71.817 31.11 71.38C26.56 69.67 24.37 64.81 22.61 60.91C22.18 59.96 21.77 59.06 21.36 58.27C18.42 52.53 18 44 20.36 37.51C21.78 33.58 24.04 30.87 26.88 29.68C32.13 27.45 36.06 28.57 39.21 29.47C40.3879 29.8794 41.6156 30.1283 42.86 30.21C43.3904 30.21 43.8991 30.4207 44.2742 30.7958C44.6493 31.1709 44.86 31.6796 44.86 32.21C44.86 32.7404 44.6493 33.2492 44.2742 33.6242C43.8991 33.9993 43.3904 34.21 42.86 34.21C41.2428 34.1373 39.6438 33.8377 38.11 33.32C35.3 32.52 32.39 31.69 28.43 33.32C26.67 34.06 25.14 36.02 24.12 38.83C22.12 44.26 22.48 51.65 24.92 56.4C25.38 57.29 25.8 58.23 26.25 59.22C27.79 62.62 29.52 66.47 32.52 67.59C34.82 68.46 36.52 67.8 38.59 67.05C39.941 66.4607 41.3878 66.1218 42.86 66.05C43.3904 66.05 43.8991 66.2607 44.2742 66.6358C44.6493 67.0109 44.86 67.5196 44.86 68.05C44.86 68.5804 44.6493 69.0892 44.2742 69.4642C43.8991 69.8393 43.3904 70.05 42.86 70.05C41.8645 70.1484 40.8918 70.4085 39.98 70.82C38.3079 71.5537 36.5142 71.9708 34.69 72.05Z"}
fill={"#FFA726"}
className={`w-element`} />
<path
d={"M51.0001 72.05C49.1771 71.9771 47.3835 71.5668 45.7101 70.84C44.7983 70.4285 43.8256 70.1684 42.8301 70.07C42.2996 70.07 41.7909 69.8593 41.4159 69.4842C41.0408 69.1092 40.8301 68.6004 40.8301 68.07C40.8301 67.5396 41.0408 67.0309 41.4159 66.6558C41.7909 66.2807 42.2996 66.07 42.8301 66.07C44.3053 66.1428 45.7553 66.4816 47.1101 67.07C49.1101 67.83 50.8801 68.48 53.1801 67.61C56.1801 66.49 57.9101 62.61 59.4401 59.24C59.8901 58.24 60.3201 57.31 60.7701 56.42C60.9501 56.06 61.1301 55.68 61.2901 55.29C61.3905 55.0464 61.538 54.825 61.724 54.6384C61.9101 54.4518 62.131 54.3036 62.3743 54.2024C62.6176 54.1012 62.8785 54.0489 63.142 54.0485C63.4055 54.0481 63.6665 54.0996 63.9101 54.2C64.1537 54.3005 64.3751 54.4479 64.5617 54.634C64.7483 54.82 64.8965 55.041 64.9977 55.2843C65.0989 55.5276 65.1512 55.7884 65.1516 56.0519C65.152 56.3154 65.1005 56.5764 65.0001 56.82C64.8001 57.31 64.5801 57.82 64.3501 58.25C63.9301 59.06 63.5301 59.96 63.1001 60.9C61.3401 64.81 59.1501 69.67 54.5901 71.38C53.4436 71.8181 52.2274 72.0451 51.0001 72.05Z"}
fill={"#FFA726"}
className={`w-element`} />
<path
d={"M62.1301 37.31C61.7828 37.3062 61.4424 37.2119 61.1426 37.0366C60.8428 36.8612 60.5938 36.6108 60.4201 36.31C59.7205 35.004 58.6246 33.9536 57.2901 33.31C53.3401 31.64 50.4301 32.47 47.6101 33.31C46.0746 33.8197 44.4763 34.1158 42.8601 34.19C42.3297 34.19 41.821 33.9793 41.4459 33.6042C41.0708 33.2291 40.8601 32.7204 40.8601 32.19C40.8601 31.6596 41.0708 31.1509 41.4459 30.7758C41.821 30.4007 42.3297 30.19 42.8601 30.19C44.1067 30.1074 45.3372 29.862 46.5201 29.46C49.6701 28.56 53.5901 27.46 58.8501 29.66C60.9651 30.6203 62.7172 32.2323 63.8501 34.26C64.0247 34.5624 64.1171 34.9053 64.1181 35.2545C64.1191 35.6037 64.0286 35.9471 63.8557 36.2505C63.6827 36.5539 63.4334 36.8068 63.1324 36.9839C62.8314 37.161 62.4893 37.2562 62.1401 37.26L62.1301 37.31Z"}
fill={"#FFA726"}
className={`w-element`} />
<path
d={"M42.5501 28.67C42.2158 28.6715 41.8818 28.6515 41.5501 28.61C41.0641 28.5488 40.6175 28.3113 40.2949 27.9427C39.9723 27.574 39.7963 27.0998 39.8001 26.61C39.7401 18.61 44.5501 12.74 51.8001 11.94C52.3264 11.8839 52.8535 12.0387 53.2658 12.3704C53.6782 12.7022 53.9422 13.1839 54.0001 13.71C54.2517 15.8139 54.0224 17.9475 53.3295 19.95C52.6366 21.9524 51.4982 23.7714 50.0001 25.27C48.0531 27.3286 45.381 28.5481 42.5501 28.67ZM50.0701 16.44C46.7601 17.61 44.5301 20.52 43.9701 24.44C45.1918 24.0423 46.2997 23.3563 47.2001 22.44C48.8134 20.826 49.8261 18.7089 50.0701 16.44Z"}
fill={"#FFA726"}
className={`w-element`} />
<path
d={"M63.17 58.06C62.7542 58.0711 62.3452 57.9523 62.0001 57.72C58.3301 55.21 55.8301 50.38 55.6301 45.42C55.5013 43.2008 55.9062 40.9831 56.811 38.9527C57.7157 36.9222 59.0939 35.1382 60.8301 33.75C61.2425 33.4158 61.7707 33.2592 62.2986 33.3145C62.8266 33.3698 63.3109 33.6326 63.6451 34.045C63.9792 34.4574 64.1359 34.9857 64.0806 35.5136C64.0252 36.0415 63.7625 36.5258 63.35 36.86C62.0982 37.8538 61.1058 39.1362 60.4579 40.5974C59.81 42.0586 59.526 43.655 59.6301 45.25C59.6764 47.0242 60.1157 48.766 60.9163 50.35C61.7169 51.9339 62.8589 53.3206 64.26 54.41C64.6976 54.7097 64.9982 55.171 65.0957 55.6923C65.1933 56.2137 65.0797 56.7524 64.7801 57.19C64.6003 57.4527 64.3604 57.6686 64.0804 57.8199C63.8004 57.9713 63.4883 58.0536 63.17 58.06Z"}
fill={"#FFA726"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element ${"feature_item_content"}`}>
<h3
className={`w-element ${"heading-style-h4 text-color-brand"}`}>
<strong
className={`w-element`}>
{"Multi-OS Support"}
</strong>
<br
className={`w-element`} />
</h3>
<div
className={`w-element ${"spacer-12px"}`} />
<div
className={`w-element ${"feature-descirption text-size-md"}`}>
<span
className={`w-element`}>
{"- Dedicated environments for MacOS (Sierra, High Sierra, Ventura) and Ubuntu 22.04, with more to come."}
</span>
<br
className={`w-element`} />
<span
className={`w-element`}>
{"- Optimized for mobile and web development on platforms like React Native, Flutter, Native iOS, and Native Android."}
</span>
</div>
</div>
</div>
<div
className={`w-element ${"feature_card"}`}>
<div
className={`w-element ${"code-embed w-embed"}`}>
<svg
viewBox={"0 0 60 60"}
fill={"none"}
xmlns={"http://www.w3.org/2000/svg"}
className={`w-element c1kuwk32 c4gouwl`}>
<path
d={"M40.3637 46.8182H15.1819V46.5455C15.1819 44.6364 16.7273 43.0909 18.6364 43.0909H36.9092C38.8182 43.0909 40.3637 44.6364 40.3637 46.5455V46.8182Z"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M43 39.5455H3.36359C2.36359 39.5455 1.54541 38.7273 1.54541 37.7273V4.72727C1.54541 3.72727 2.36359 2.90909 3.36359 2.90909H52.0909C53.0909 2.90909 53.9091 3.72727 53.9091 4.72727V28.7273"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M43 34.9091H1.54541"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M32.1819 39.6364L34.0001 43.0909"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M21.5454 43.0909L23.2727 39.6364"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M55.6365 57.0909H45.6365C44.091 57.0909 42.9092 55.9091 42.9092 54.3636V31.5454C42.9092 30 44.091 28.8182 45.6365 28.8182H55.6365C57.1819 28.8182 58.3637 30 58.3637 31.5454V54.3636C58.3637 55.8182 57.1819 57.0909 55.6365 57.0909Z"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M51.7271 31.0909H49.6362"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M49.6362 54.7273H51.7271"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M55.2729 43.7273C55.2729 44.9091 54.2729 45.9091 53.0911 45.9091C52.3638 45.9091 50.0002 45.9091 49.0911 45.9091C47.4547 45.9091 46.0911 44.5455 46.0911 42.9091C46.0911 41.2727 47.4547 39.9091 49.0911 39.9091C50.3638 39.9091 51.4547 40.7273 51.9092 41.8182C52.2729 41.5455 52.6365 41.4545 53.0911 41.4545C54.2729 41.5454 55.2729 42.4545 55.2729 43.7273Z"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M51.0908 42.9091C51.4545 42.0909 52.1817 41.5455 53.0908 41.5455"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M42.4545 22.8182C42.4545 26 39.909 28.5454 36.7272 28.5454C34.909 28.5454 20.6363 28.5454 18.8181 28.5454C15.6363 28.5454 13.0908 26 13.0908 22.8182C13.0908 20.4545 14.5454 18.4545 16.5454 17.6363C16.4545 17.1818 16.3635 16.8182 16.3635 16.3636C16.3635 13.3636 18.7272 11 21.7272 11C23.0908 11 24.2726 11.4545 25.2726 12.2727C26.5454 10.4545 28.6363 9.27271 30.9999 9.27271C34.909 9.27271 38.0908 12.4545 38.0908 16.3636C38.0908 16.6363 38.0908 17 37.9999 17.2727C40.5454 17.8182 42.4545 20.0909 42.4545 22.8182Z"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M38.0908 16.9091C37.9998 18.0909 37.6362 19.2727 36.9089 20.3636"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M25 12.0909C25.4545 12.4545 25.8182 12.8182 26.1818 13.3636"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M17.3637 19.4545C16.8182 18.7273 16.5455 17.8182 16.4546 17"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M18.8182 25.9091C17.0909 25.9091 15.7273 24.5454 15.7273 22.8182"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M39.8182 22.8182C39.8182 24.5454 38.4546 25.9091 36.7273 25.9091"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M31 11.9091C33.4545 11.9091 35.4545 13.9091 35.4545 16.3636"}
stroke={"#FFA726"}
strokeWidth={"1.81818"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element ${"feature_item_content"}`}>
<h3
className={`w-element ${"heading-style-h4 text-color-brand"}`}>
<strong
className={`w-element`}>
{"Multi-Framework Compatibility"}
</strong>
<br
className={`w-element`} />
</h3>
<div
className={`w-element ${"spacer-12px"}`} />
<div
className={`w-element ${"feature-descirption text-size-md"}`}>
<span
className={`w-element`}>
{"- Support for a wide range of web and mobile frameworks, ensuring flexibility no matter what your tech stack looks like."}
</span>
<br
className={`w-element`} />
</div>
</div>
</div>
<div
className={`w-element ${"feature_card"}`}>
<div
className={`w-element ${"code-embed w-embed"}`}>
<svg
viewBox={"0 0 60 60"}
fill={"none"}
xmlns={"http://www.w3.org/2000/svg"}
className={`w-element c1kuwk32 c4gouwl`}>
<path
d={"M4.36352 20.1818H30.6362L34.6362 15.3636H56.3635C57.6362 15.3636 58.6362 16.6363 58.4544 18.1818L54.9999 53C54.8181 54.4545 53.8181 55.5454 52.5453 55.5454H6.90897C5.63624 55.5454 4.54533 54.4545 4.45442 53L1.63624 23.7273C1.36352 21.8182 2.72715 20.1818 4.36352 20.1818Z"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M5.27246 20.1818V6.99999C5.27246 5.63635 6.18155 4.54544 7.36337 4.54544H22.0906C23.2725 4.54544 24.1816 5.63635 24.1816 6.99999V8.63635H51.6361C52.9997 8.63635 54.0906 8.45453 54.0906 10.0909V15.4545"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M40.3633 40.9091C40.3633 43.6363 38.1814 45.8182 35.4542 45.8182C33.7269 45.8182 28.3633 45.8182 26.3633 45.8182C22.636 45.8182 19.636 42.8182 19.636 39.0909C19.636 35.3636 22.636 32.3636 26.3633 32.3636C29.2723 32.3636 31.7269 34.1818 32.636 36.7273C33.4542 36.1818 34.3633 35.9091 35.4542 35.9091C38.1814 36 40.3633 38.1818 40.3633 40.9091Z"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M30.8179 39.0909C31.5451 37.2727 33.3633 36 35.4542 36"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M24.2722 41.6364H24.9086"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M27.9087 41.6364H28.5451"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M31.4541 41.6364H32.0905"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M35.0903 41.6364H35.7267"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M19.7268 52.3636H13.0904C12.3632 52.3636 11.7268 51.7272 11.7268 50.9999V44.3636C11.7268 43.6363 12.3632 42.9999 13.0904 42.9999C13.8177 42.9999 14.4541 43.6363 14.4541 44.3636V49.6363H19.7268C20.4541 49.6363 21.0904 50.2727 21.0904 50.9999C21.0904 51.8181 20.4541 52.3636 19.7268 52.3636Z"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M46.9084 52.3636H40.2721C39.5448 52.3636 38.9084 51.7272 38.9084 50.9999C38.9084 50.2727 39.5448 49.6363 40.2721 49.6363H45.5448V44.3636C45.5448 43.6363 46.1812 42.9999 46.9084 42.9999C47.6357 42.9999 48.2721 43.6363 48.2721 44.3636V50.9999C48.1812 51.8181 47.6357 52.3636 46.9084 52.3636Z"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M13.1813 32.4545C12.454 32.4545 11.8176 31.8181 11.8176 31.0909V24.5454C11.8176 23.8181 12.454 23.1818 13.1813 23.1818H19.8176C20.5449 23.1818 21.1813 23.8181 21.1813 24.5454C21.1813 25.2727 20.5449 25.909 19.8176 25.909H14.5449V31.1818C14.454 31.909 13.9085 32.4545 13.1813 32.4545Z"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M46.9084 32.4545C46.1812 32.4545 45.5448 31.8181 45.5448 31.0909V25.8181H40.2721C39.5448 25.8181 38.9084 25.1818 38.9084 24.4545C38.9084 23.7272 39.5448 23.0909 40.2721 23.0909H46.9084C47.6357 23.0909 48.2721 23.7272 48.2721 24.4545V31.0909C48.1812 31.909 47.6357 32.4545 46.9084 32.4545Z"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M49.7271 12.4545H9.63623"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
<path
d={"M29.0908 16.2727H9.63623"}
stroke={"#FFA726"}
strokeWidth={"1.36364"}
strokeMiterlimit={"10"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
<div
className={`w-element ${"feature_item_content"}`}>
<h3
className={`w-element ${"heading-style-h4 text-color-brand"}`}>
<strong
className={`w-element`}>
{"Advanced Logging"}
</strong>
<br
className={`w-element`} />
</h3>
<div
className={`w-element ${"spacer-12px"}`} />
<div
className={`w-element ${"feature-descirption text-size-md"}`}>
<span
className={`w-element`}>
{"- Track build times, manage error logs and monitor build steps to identify issues before they become bottlenecks."}
</span>
<br
className={`w-element`} />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className={`w-element ${"carousel-section"}`}>
<div
className={`w-element ${"padding-global"}`}>
<div
className={`w-element ${"w-layout-blockcontainer container-lg w-container"}`}>
<div
className={`w-element ${"carousel_header"}`}>
<div
className={`w-element ${"carousel_header_leftbox"}`}>
<h2
className={`w-element ${"text-color-brand"}`}>
{"Why Choose TurtleCI?"}
</h2>
<div
className={`w-element ${"data-wrapper"}`}>
<div
id={"w-node-c07faf60-8f84-3edb-aacd-5d7d32aca9a0-0ef646b9"}
className={`w-element ${"data-card background-color-brand"}`}>
<h3
className={`w-element ${"text-align-center text-color-alternate"}`}>
{"99.9%"}
</h3>
<h4
className={`w-element ${"text-align-center text-color-alternate"}`}>
{"Uptime"}
</h4>
</div>
<div
className={`w-element ${"data-card background-color-brand"}`}>
<h3
className={`w-element ${"text-align-center text-color-alternate"}`}>
{"80%"}
</h3>
<h4
className={`w-element ${"text-align-center text-color-alternate"}`}>
{"Faster Builds"}
</h4>
</div>
<div
className={`w-element ${"data-card background-color-brand"}`}>
<h3
className={`w-element ${"text-align-center text-color-alternate"}`}>
{"15K+"}
</h3>
<h4
className={`w-element ${"text-align-center text-color-alternate"}`}>
{"Users Trust"}
</h4>
</div>
</div>
</div>
<div
className={`w-element ${"carousel_header_rightbox"}`}>
<div
className={`w-element ${"carousel_navigation"}`}>
<a
aria-label={"Previous Slide"}
href={"#"}
className={`w-element ${"carousel_navigation-btn-prev w-inline-block"}`}>
<div
className={`w-element ${"carousel_navigatio-btn_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M20 12L4 12M4 12L10 6M4 12L10 18"}
stroke={"currentColor"}
strokeWidth={"1.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
</a>
<a
aria-label={"Previous Slide"}
href={"#"}
className={`w-element ${"carousel_navigation-btn-next w-inline-block"}`}>
<div
className={`w-element ${"carousel_navigatio-btn_ic w-embed"}`}>
<svg
xmlns={"http://www.w3.org/2000/svg"}
width={"100%"}
height={"100%"}
viewBox={"0 0 24 24"}
fill={"none"}
className={`w-element`}>
<path
d={"M4 12H20M20 12L14 18M20 12L14 6"}
stroke={"currentColor"}
strokeWidth={"1.5"}
strokeLinecap={"round"}
strokeLinejoin={"round"}
className={`w-element`} />
</svg>
</div>
</a>
</div>
</div>
</div>
<div
className={`w-element ${"spacer-40px"}`} />
<div
slides-per-view={"auto"}
free-mode={"false"}
start-slide={"0"}
slides-per-view-portrait={"1"}
loop-value={"false"}
slides-gap-tablet={"40"}
slides-gap={"40"}
slides-per-view-landscape={"auto"}
slides-per-view-tablet={"auto"}
is-centered={"false"}
slides-gap-landscape={"40"}
slides-speed={"600"}
slides-gap-portrait={"24"}
className={`w-element ${"carousel_collection"}`}>
<div
className={`w-element ${"carousel_list swiper-wrapper"}`}>
<div
className={`w-element ${"carousel_item swiper-slide"}`}>
<div
className={`w-element ${"why-choose-turtleci-card"}`}>
<div
className={`w-element ${"why-choose-image-wrapper"}`}>
<Image
src={"/turtleci-import/images/Web_illustration-1_1.avif"}
loading={"lazy"}
width={1178}
alt={"Effortless, Scalable CI/CD For Modern Devops Teams"}
className={`w-image ${"why-choose-image"}`} />
</div>
<h4
className={`w-element ${"text-align-center text-color-brand"}`}>
{"Five-Star Performance"}
</h4>
<h4
className={`w-element ${"text-color-yellow text-align-center"}`}>
{"⭑⭑⭑⭑⭑"}
</h4>
<div
className={`w-element ${"why-choose-text-block text-align-center"}`}>
{"Trusted for speed and reliability, TurtleCI delivers seamless CI/CD with advanced, effortless automation."}
</div>
<div
className={`w-element ${"div-block"}`}>
<a
href={"https://console.turtleci.io/login"}
className={`w-element ${"button-wrap w-inline-block"}`}>
<button
className={`w-element ${"button"}`}>
<div
className={`w-element`}>
{"Start Now"}
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
<div
className={`w-element ${"carousel_item swiper-slide"}`}>
<div
className={`w-element ${"why-choose-turtleci-card"}`}>
<div
className={`w-element ${"why-choose-image-wrapper"}`}>
<Image
src={"/turtleci-import/images/Web_Cost-Effective-Scaling-1.avif"}
loading={"lazy"}
width={702}
alt={"Cost Effective Scaling"}
className={`w-image ${"why-choose-image"}`} />
</div>
<h4
className={`w-element ${"text-align-center text-color-brand"}`}>
{"Cost-Effective Scaling"}
</h4>
<div
className={`w-element ${"why-choose-text-block"}`}>
{"Starting at just $18.3/month after a free trial, TurtleCI helps you save up to 10x your budget. With transparent, scalable pricing, it’s ideal, adapting to your needs."}
</div>
</div>
</div>
<div
className={`w-element ${"carousel_item swiper-slide"}`}>
<div
className={`w-element ${"why-choose-turtleci-card"}`}>
<div
className={`w-element ${"why-choose-image-wrapper"}`}>
<Image
src={"/turtleci-import/images/anyproject-1_1.avif"}
loading={"lazy"}
width={790}
alt={"For any project"}
className={`w-image ${"why-choose-image"}`} />
</div>
<h4
className={`w-element ${"text-align-center text-color-brand"}`}>
{"Scalable for Any Project"}
</h4>
<div
className={`w-element ${"why-choose-text-block"}`}>
{"Designed to manage projects of any scale or complexity, TurtleCI provides a flexible platform that evolves with your team. Supporting both mobile and web development, our platform empowers you to build, test, and deploy confidently."}
</div>
</div>
</div>
<div
className={`w-element ${"carousel_item swiper-slide"}`}>
<div
className={`w-element ${"why-choose-turtleci-card"}`}>
<div
className={`w-element ${"why-choose-image-wrapper"}`}>
<Image
src={"/turtleci-import/images/Multi-platform-1_1.avif"}
loading={"lazy"}
width={850}
alt={"Multi-Platform Support"}
className={`w-image ${"why-choose-image"}`} />
</div>
<h4
className={`w-element ${"text-align-center text-color-brand"}`}>
{"Multi-Platform Support"}
</h4>
<div
className={`w-element ${"why-choose-text-block"}`}>
{"TurtleCI supports iOS, Android, and Linux, making it versatile for mobile and web applications. Whether you’re working on a small project or managing a complex DevOps pipeline, TurtleCI adapts to your needs."}
</div>
</div>
</div>
<div
className={`w-element ${"carousel_item swiper-slide"}`}>
<div
className={`w-element ${"why-choose-turtleci-card no-image"}`}>
<h4
className={`w-element ${"text-align-center text-color-brand"}`}>
{"Ready to Transform Your CI/CD?"}
</h4>
<div
className={`w-element`}>
<span
className={`w-element`}>
{"Get started with TurtleCI today and experience seamless automation, unmatched efficiency, and cost-effective scaling."}
</span>
<br
className={`w-element`} />
<br
className={`w-element`} />
<br
className={`w-element`} />
<span
className={`w-element`}>
{"Join us and elevate your development workflow with ease!"}
</span>
</div>
<div
className={`w-element ${"div-block"}`}>
<a
href={"pricing-plan.html"}
className={`w-element ${"button-wrap w-inline-block"}`}>
<button
className={`w-element ${"button"}`}>
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
</div>
<div
className={`w-element ${"spacer-40px hide-tablet"}`} />
<div
className={`w-element ${"carousel_bottom hide-tablet"}`}>
<div
className={`w-element ${"carousel_pagination"}`}>
<div
className={`w-element ${"swiper-pagination-bullet"}`} />
<div
className={`w-element ${"swiper-pagination-bullet-active"}`} />
</div>
<div
className={`w-element ${"carousel_scrollbar"}`}>
<div
className={`w-element ${"swiper-scrollbar-drag"}`} />
</div>
</div>
<div
className={`w-element ${"hide w-embed"}`}>
<HtmlEmbed
code={"<style>.carousel_card:hover .carousel_img{border-radius:2rem}.carousel_bottom>*:only-child{margin:0 auto}</style>"}
className={`w-html-embed`} />
</div>
<div
className={`w-element ${"hide w-embed w-script"}`}>
<HtmlEmbed
clientOnly={true}
code={"<script>\n// Get the carousel element\nconst carouselElement = document.querySelector('.carousel_collection');\n// Get the Loop value\nconst loopValue = carouselElement && carouselElement.getAttribute('loop-value') === 'true';\n// Get the Centered value\nconst centeredSlides = carouselElement && carouselElement.getAttribute('is-centered') === 'true';\n// Get the Free Mode value\nconst freeModeValue = carouselElement && carouselElement.getAttribute('free-mode') === 'true';\n// Get the Starting Slide value\nconst startingSlide = carouselElement && carouselElement.getAttribute('start-slide');\nconst startingSlideValue = startingSlide ? parseInt(startingSlide, 10) : 0;\n// Set up for Slides per View on different breakpoints\nconst slidesPerViewValue = carouselElement && carouselElement.getAttribute('slides-per-view');\nconst slidesNumber = slidesPerViewValue === 'auto' ? 'auto' : parseInt(slidesPerViewValue, 10);\nconst slidesPerViewTabletValue = carouselElement && carouselElement.getAttribute('slides-per-view-tablet');\nconst slidesNumberTablet = slidesPerViewTabletValue === 'auto' ? 'auto' : parseInt(slidesPerViewTabletValue, 10);\nconst slidesPerViewLandscapeValue = carouselElement && carouselElement.getAttribute('slides-per-view-landscape');\nconst slidesNumberLandscape = slidesPerViewLandscapeValue === 'auto' ? 'auto' : parseInt(slidesPerViewLandscapeValue, 10);\nconst slidesPerViewPortraitValue = carouselElement && carouselElement.getAttribute('slides-per-view-portrait');\nconst slidesNumberPortrait = slidesPerViewPortraitValue === 'auto' ? 'auto' : parseInt(slidesPerViewPortraitValue, 10);\n// Set up for the slide gap\nconst slidesGapValue = carouselElement && carouselElement.getAttribute('slides-gap');\nconst slidesGap = slidesGapValue ? parseInt(slidesGapValue, 10) : 40;\nconst slidesGapTabletValue = carouselElement && carouselElement.getAttribute('slides-gap-tablet');\nconst slidesGapTablet = slidesGapTabletValue ? parseInt(slidesGapTabletValue, 10) : 40;\nconst slidesGapLandscapeValue = carouselElement && carouselElement.getAttribute('slides-gap-landscape');\nconst slidesGapLandscape = slidesGapLandscapeValue ? parseInt(slidesGapLandscapeValue, 10) : 40;\nconst slidesGapPortraitValue = carouselElement && carouselElement.getAttribute('slides-gap-portrait');\nconst slidesGapPortrait = slidesGapPortraitValue ? parseInt(slidesGapPortraitValue, 10) : 40;\n// Set up for the transition speed\nconst slidesSpeed = carouselElement && carouselElement.getAttribute('slides-speed');\nconst speedValue = slidesSpeed ? parseInt(slidesSpeed, 10) : 600;\n// Logs for bug\nconsole.log('Loop value:', loopValue);\nconsole.log('Slides per view:', slidesNumber);\nconsole.log('Slides transition speed:', speedValue);\nconsole.log('First slide:', startingSlideValue);\nconsole.log('Slides centered:', centeredSlides);\n// Initialize Swiper\ndocument.addEventListener(\"DOMContentLoaded\", function () {\nconst carouselSwiper = new Swiper('.carousel_collection', {\n  // Settings\n  speed: speedValue,\n  spaceBetween: slidesGap,\n  slidesPerView: slidesNumber,\n  centeredSlides: centeredSlides,\n  loop: loopValue,  // Use the dynamically set loopValue\n  freeMode: freeModeValue,\n  initialSlide: startingSlideValue,\n  breakpoints: {\n    // when window width is >= 240px\n    240: {\n      slidesPerView: slidesNumberPortrait,\n      spaceBetween: slidesGapPortrait\n    },\n    // when window width is >= 480px\n    479: {\n      slidesPerView: slidesNumberLandscape,\n      spaceBetween: slidesGapLandscape\n    },\n    // when window width is >= 767px\n    767: {\n      slidesPerView: slidesNumberTablet,\n      spaceBetween: slidesGapTablet\n    },\n    // when window width is >= 1024px\n    1024: {\n      slidesPerView: slidesNumber,\n      spaceBetween: slidesGap\n    }\n  },\n  // If we need pagination\n  pagination: {\n    el: '.carousel_pagination',\n    type: 'bullets',\n    clickable: true,\n  },\n  // Navigation arrows\n  navigation: {\n    nextEl: '.carousel_navigation-btn-next',\n    prevEl: '.carousel_navigation-btn-prev',\n  },\n  // If we need scrollbar\n  scrollbar: {\n    el: '.carousel_scrollbar',\n    draggable: true,\n  },\n});\n});\n</script>"}
className={`w-html-embed`} />
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
className={`w-element`}>
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
    