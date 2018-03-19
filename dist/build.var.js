var HcAddressParcelForm=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=3)}([function(e,t,r){"use strict";var n=r(5),o=r(1);t.a={name:"address-form",data:function(){return{inputAddress:"",isSearching:!1,suggestions:[]}},methods:{submitForm:function(e){this.isSearching=!0,this.suggestions=[],this.$emit("submit",new n.a(this.inputAddress,this.returnParcelGeometry)),this.isSearching=!1},suggestLocations:function(e){var t=this;this.inputAddress.length>=3&&o.a.suggestLocations(this.inputAddress).then(function(e){t.suggestions=e})}},props:{placeholder:{type:String,default:"Your Street Address..."},returnParcelGeometry:{type:Boolean,default:!1}},computed:{btnText:function(){return"Find"},btnClass:function(){return this.isSearching?"btn-warning":"btn-secondary"},btnIcon:function(){return this.isSearching?"fa fa-fw fa-spinner fa-spin":"fa fa-fw fa-search"}}}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=r(2),i=(r.n(o),function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(){function e(){n(this,e)}return s(e,null,[{key:"initLocator",value:function(){return o.loadModules(["esri/tasks/Locator"]).then(function(t){return new(0,i(t,1)[0])({url:e.esri.url,outSpatialReference:{wkid:e.esri.wkid}})})}},{key:"findAddressLocation",value:function(t){return e.initLocator().then(function(e){return e.addressToLocations({address:{SingleLine:t},maxLocations:1}).then(function(e){if(e.length)return e[0].location;throw new Error("That address was not found in our records.")})})}},{key:"suggestLocations",value:function(t){return e.initLocator().then(function(e){return e.suggestLocations({text:t}).then(function(e){return e}).catch(function(e){return console.error(e),[]})})}},{key:"esri",get:function(){return{url:"https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/Composite_Address_Locator_WebApps/GeocodeServer",wkid:102659}}}]),e}();t.a=u},function(e,t,r){!function(e,r){r(t)}(0,function(e){"use strict";function t(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.setAttribute("data-esri-loader","loading"),t}function r(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}function n(e,t,r){var n;r&&(n=o(e,r));var i=function(){t(e),e.removeEventListener("load",i,!1),n&&e.removeEventListener("error",n,!1)};e.addEventListener("load",i,!1)}function o(e,t){var r=function(n){t(n.error||new Error("There was an error attempting to load "+e.src)),e.removeEventListener("error",r,!1)};return e.addEventListener("error",r,!1),r}function i(){return document.querySelector("script[data-esri-loader]")}function s(e){return document.querySelector('link[href*="'+e+'"]')}function u(){var e=window.require;return e&&e.on}function a(e){var t=s(e);return t||(t=r(e),document.head.appendChild(t)),t}function c(e){return void 0===e&&(e={}),e.url||(e.url=h),new v.Promise(function(r,o){var s=i();if(s){var c=s.getAttribute("src");c!==e.url?o(new Error("The ArcGIS API for JavaScript is already loaded ("+c+").")):u()?r(s):n(s,r,o)}else u()?o(new Error("The ArcGIS API for JavaScript is already loaded.")):(e.css&&a(e.css),e.dojoConfig&&(window.dojoConfig=e.dojoConfig),s=t(e.url),f=e.url,n(s,function(){s.setAttribute("data-esri-loader","loaded"),r(s)},o),document.body.appendChild(s))})}function l(e){return new v.Promise(function(t,r){var n=window.require.on("error",r);window.require(e,function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];n.remove(),t(e)})})}function d(e,t){return void 0===t&&(t={}),u()?l(e):(!t.url&&f&&(t.url=f),c(t).then(function(){return l(e)}))}var f,p="undefined"!=typeof window,h="https://js.arcgis.com/4.6/",v={Promise:p?window.Promise:void 0},g={getScript:i,isLoaded:u,loadModules:d,loadScript:c,utils:v};e.utils=v,e.getScript=i,e.isLoaded=u,e.loadCss=a,e.loadScript=c,e.loadModules=d,e.default=g,Object.defineProperty(e,"__esModule",{value:!0})})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(7),i=r(4),s=i(n.a,o.a,!1,null,null,null);t.default=s.exports},function(e,t){e.exports=function(e,t,r,n,o,i){var s,u=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,u=e.default);var c="function"==typeof u?u.options:u;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId=o);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):n&&(l=n),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:s,exports:u,options:c}}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=r(1),i=r(6),s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n(this,e),this.inputAddress=t,this.locationData=null,this.parcelData=null,this.getResult(r)}return s(e,[{key:"getResult",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return o.a.findAddressLocation(this.inputAddress).then(function(r){return e.locationData=r,i.a.findParcel(e.locationData,t).then(function(t){return e.parcelData=t,e})})}}]),e}();t.a=u},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=r(2),i=(r.n(o),function(){function e(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(){function e(t){n(this,e),this.folio=t.attributes.FOLIO,this.address=t.attributes.SITE_ADDR,this.geometry=t.geometry}return s(e,null,[{key:"findParcel",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o.loadModules(["esri/tasks/QueryTask","esri/tasks/support/Query"]).then(function(n){var o=i(n,2),s=o[0],u=o[1],a=new s({url:e.esri.url}),c=new u;return c.outFields=e.esri.fields,c.outSpatialReference={wkid:e.esri.wkid},c.returnGeometry=r,c.geometry=t,a.execute(c).then(function(t){if(t.features.length)return new e(t.features[0]);throw new Error("A parcel could not be matched to that address.")})})}},{key:"esri",get:function(){return{url:"https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/HC_Parcels/MapServer/0",fields:["FOLIO","SITE_ADDR"],wkid:102659}}}]),e}();t.a=u},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[r("div",{staticClass:"form-group"},[r("div",{staticClass:"input-group input-group-lg"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.inputAddress,expression:"inputAddress"}],staticClass:"form-control",attrs:{list:"suggestions",placeholder:e.placeholder,autocomplete:"off",required:""},domProps:{value:e.inputAddress},on:{keyup:e.suggestLocations,input:function(t){t.target.composing||(e.inputAddress=t.target.value)}}}),e._v(" "),r("datalist",{attrs:{id:"suggestions"}},e._l(e.suggestions,function(e,t){return r("option",{key:t,domProps:{value:e.text}})})),e._v(" "),r("span",{staticClass:"input-group-append"},[r("button",{staticClass:"btn text-white",class:e.btnClass,attrs:{type:"submit"}},[r("i",{class:e.btnIcon}),e._v(" "),r("span",{staticClass:"d-none d-sm-inline-block"},[e._v("\n            "+e._s(e.btnText)+"\n          ")])])])])])])},o=[],i={render:n,staticRenderFns:o};t.a=i}]).default;