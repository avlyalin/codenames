(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{121:function(e,t,n){"use strict";var a=n(46),i=n(14),o=n(29),r=n(30),s=n(69),u=n(79),l=n(37),c=n(80),g=n(191),p=n(189),f=n(127),h={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){var n;console&&console[e]&&(n=console)[e].apply(n,Object(g.a)(t))}},d=new(function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(o.a)(this,e),this.init(t,n)}return Object(r.a)(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||h,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,n,a){return a&&!this.debug?null:("string"==typeof e[0]&&(e[0]="".concat(n).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,Object(i.a)({},{prefix:"".concat(this.prefix,":").concat(t,":")},this.options))}}]),e}()),v=function(){function e(){Object(o.a)(this,e),this.observers={}}return Object(r.a)(e,[{key:"on",value:function(e,t){var n=this;return e.split(" ").forEach((function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)})),this}},{key:"off",value:function(e,t){this.observers[e]&&(t?this.observers[e]=this.observers[e].filter((function(e){return e!==t})):delete this.observers[e])}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];if(this.observers[e]){var i=[].concat(this.observers[e]);i.forEach((function(e){e.apply(void 0,n)}))}if(this.observers["*"]){var o=[].concat(this.observers["*"]);o.forEach((function(t){t.apply(t,[e].concat(n))}))}}}]),e}();function y(){var e,t,n=new Promise((function(n,a){e=n,t=a}));return n.resolve=e,n.reject=t,n}function m(e){return null==e?"":""+e}function b(e,t,n){e.forEach((function(e){t[e]&&(n[e]=t[e])}))}function k(e,t,n){function a(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function i(){return!e||"string"==typeof e}for(var o="string"!=typeof t?[].concat(t):t.split(".");o.length>1;){if(i())return{};var r=a(o.shift());!e[r]&&n&&(e[r]=new n),e=e[r]}return i()?{}:{obj:e,k:a(o.shift())}}function x(e,t,n){var a=k(e,t,Object);a.obj[a.k]=n}function O(e,t){var n=k(e,t),a=n.obj,i=n.k;if(a)return a[i]}function w(e,t,n){var a=O(e,n);return void 0!==a?a:O(t,n)}function j(e,t,n){for(var a in t)a in e?"string"==typeof e[a]||e[a]instanceof String||"string"==typeof t[a]||t[a]instanceof String?n&&(e[a]=t[a]):j(e[a],t[a],n):e[a]=t[a];return e}function S(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function R(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,(function(e){return L[e]})):e}var N="undefined"!=typeof window&&window.navigator&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,C=function(e){function t(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return Object(o.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this)),N&&v.call(Object(l.a)(n)),n.data=e||{},n.options=a,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=void 0!==a.keySeparator?a.keySeparator:this.options.keySeparator,o=[e,t];return n&&"string"!=typeof n&&(o=o.concat(n)),n&&"string"==typeof n&&(o=o.concat(i?n.split(i):n)),e.indexOf(".")>-1&&(o=e.split(".")),O(this.data,o)}},{key:"addResource",value:function(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},o=this.options.keySeparator;void 0===o&&(o=".");var r=[e,t];n&&(r=r.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(a=t,t=(r=e.split("."))[1]),this.addNamespaces(t),x(this.data,r,a),i.silent||this.emit("added",e,t,n,a)}},{key:"addResources",value:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var i in n)"string"!=typeof n[i]&&"[object Array]"!==Object.prototype.toString.apply(n[i])||this.addResource(e,t,i,n[i],{silent:!0});a.silent||this.emit("added",e,t,n)}},{key:"addResourceBundle",value:function(e,t,n,a,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},s=[e,t];e.indexOf(".")>-1&&(a=n,n=t,t=(s=e.split("."))[1]),this.addNamespaces(t);var u=O(this.data,s)||{};a?j(u,n,o):u=Object(i.a)({},u,n),x(this.data,s,u),r.silent||this.emit("added",e,t,n)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?Object(i.a)({},{},this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"toJSON",value:function(){return this.data}}]),t}(v),P={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,a,i){var o=this;return e.forEach((function(e){o.processors[e]&&(t=o.processors[e].process(t,n,a,i))})),t}},E={},F=function(e){function t(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this)),N&&v.call(Object(l.a)(n)),b(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,Object(l.a)(n)),n.options=a,void 0===n.options.keySeparator&&(n.options.keySeparator="."),n.logger=d.create("translator"),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=this.resolve(e,t);return n&&void 0!==n.res}},{key:"extractFromKey",value:function(e,t){var n=t.nsSeparator||this.options.nsSeparator;void 0===n&&(n=":");var a=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,i=t.ns||this.options.defaultNS;if(n&&e.indexOf(n)>-1){var o=e.split(n);(n!==a||n===a&&this.options.ns.indexOf(o[0])>-1)&&(i=o.shift()),e=o.join(a)}return"string"==typeof i&&(i=[i]),{key:e,namespaces:i}}},{key:"translate",value:function(e,t){var n=this;if("object"!==Object(a.a)(t)&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);var o=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,r=this.extractFromKey(e[e.length-1],t),s=r.key,u=r.namespaces,l=u[u.length-1],c=t.lng||this.language,g=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&"cimode"===c.toLowerCase()){if(g){var p=t.nsSeparator||this.options.nsSeparator;return l+p+s}return s}var f=this.resolve(e,t),h=f&&f.res,d=f&&f.usedKey||s,v=f&&f.exactUsedKey||s,y=Object.prototype.toString.apply(h),m=["[object Number]","[object Function]","[object RegExp]"],b=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,k=!this.i18nFormat||this.i18nFormat.handleAsObject,x="string"!=typeof h&&"boolean"!=typeof h&&"number"!=typeof h;if(k&&h&&x&&m.indexOf(y)<0&&("string"!=typeof b||"[object Array]"!==y)){if(!t.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(d,h,t):"key '".concat(s," (").concat(this.language,")' returned an object instead of string.");if(o){var O="[object Array]"===y,w=O?[]:{},j=O?v:d;for(var S in h)if(Object.prototype.hasOwnProperty.call(h,S)){var L="".concat(j).concat(o).concat(S);w[S]=this.translate(L,Object(i.a)({},t,{joinArrays:!1,ns:u})),w[S]===L&&(w[S]=h[S])}h=w}}else if(k&&"string"==typeof b&&"[object Array]"===y)(h=h.join(b))&&(h=this.extendTranslation(h,e,t));else{var R=!1,N=!1;if(!this.isValidLookup(h)&&void 0!==t.defaultValue){if(R=!0,void 0!==t.count){var C=this.pluralResolver.getSuffix(c,t.count);h=t["defaultValue".concat(C)]}h||(h=t.defaultValue)}this.isValidLookup(h)||(N=!0,h=s);var P=t.defaultValue&&t.defaultValue!==h&&this.options.updateMissing;if(N||R||P){this.logger.log(P?"updateKey":"missingKey",c,l,s,P?t.defaultValue:h);var E=[],F=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&F&&F[0])for(var V=0;V<F.length;V++)E.push(F[V]);else"all"===this.options.saveMissingTo?E=this.languageUtils.toResolveHierarchy(t.lng||this.language):E.push(t.lng||this.language);var T=function(e,a){n.options.missingKeyHandler?n.options.missingKeyHandler(e,l,a,P?t.defaultValue:h,P,t):n.backendConnector&&n.backendConnector.saveMissing&&n.backendConnector.saveMissing(e,l,a,P?t.defaultValue:h,P,t),n.emit("missingKey",e,l,a,h)};if(this.options.saveMissing){var A=void 0!==t.count&&"string"!=typeof t.count;this.options.saveMissingPlurals&&A?E.forEach((function(e){n.pluralResolver.getPluralFormsOfKey(e,s).forEach((function(t){return T([e],t)}))})):T(E,s)}}h=this.extendTranslation(h,e,t,f),N&&h===s&&this.options.appendNamespaceToMissingKey&&(h="".concat(l,":").concat(s)),N&&this.options.parseMissingKeyHandler&&(h=this.options.parseMissingKeyHandler(h))}return h}},{key:"extendTranslation",value:function(e,t,n,a){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,n,a.usedLng,a.usedNS,a.usedKey,{resolved:a});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(Object(i.a)({},n,{interpolation:Object(i.a)({},this.options.interpolation,n.interpolation)}));var r=n.replace&&"string"!=typeof n.replace?n.replace:n;this.options.interpolation.defaultVariables&&(r=Object(i.a)({},this.options.interpolation.defaultVariables,r)),e=this.interpolator.interpolate(e,r,n.lng||this.language,n),!1!==n.nest&&(e=this.interpolator.nest(e,(function(){return o.translate.apply(o,arguments)}),n)),n.interpolation&&this.interpolator.reset()}var s=n.postProcess||this.options.postProcess,u="string"==typeof s?[s]:s;return null!=e&&u&&u.length&&!1!==n.applyPostProcessor&&(e=P.handle(u,e,t,this.options&&this.options.postProcessPassResolved?Object(i.a)({i18nResolved:a},n):n,this)),e}},{key:"resolve",value:function(e){var t,n,a,i,o,r=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach((function(e){if(!r.isValidLookup(t)){var u=r.extractFromKey(e,s),l=u.key;n=l;var c=u.namespaces;r.options.fallbackNS&&(c=c.concat(r.options.fallbackNS));var g=void 0!==s.count&&"string"!=typeof s.count,p=void 0!==s.context&&"string"==typeof s.context&&""!==s.context,f=s.lngs?s.lngs:r.languageUtils.toResolveHierarchy(s.lng||r.language,s.fallbackLng);c.forEach((function(e){r.isValidLookup(t)||(o=e,!E["".concat(f[0],"-").concat(e)]&&r.utils&&r.utils.hasLoadedNamespace&&!r.utils.hasLoadedNamespace(o)&&(E["".concat(f[0],"-").concat(e)]=!0,r.logger.warn('key "'.concat(n,'" for namespace "').concat(o,'" for languages "').concat(f.join(", "),"\" won't get resolved as namespace was not yet loaded"),"This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),f.forEach((function(n){if(!r.isValidLookup(t)){i=n;var o,u,c=l,f=[c];if(r.i18nFormat&&r.i18nFormat.addLookupKeys)r.i18nFormat.addLookupKeys(f,l,n,e,s);else g&&(o=r.pluralResolver.getSuffix(n,s.count)),g&&p&&f.push(c+o),p&&f.push(c+="".concat(r.options.contextSeparator).concat(s.context)),g&&f.push(c+=o);for(;u=f.pop();)r.isValidLookup(t)||(a=u,t=r.getResource(n,e,u,s))}})))}))}})),{res:t,usedKey:n,exactUsedKey:a,usedLng:i,usedNS:o}}},{key:"isValidLookup",value:function(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,a):this.resourceStore.getResource(e,t,n,a)}}]),t}(v);function V(e){return e.charAt(0).toUpperCase()+e.slice(1)}var T=function(){function e(t){Object(o.a)(this,e),this.options=t,this.whitelist=this.options.whitelist||!1,this.logger=d.create("languageUtils")}return Object(r.a)(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return this.options.lowerCaseLng?n=n.map((function(e){return e.toLowerCase()})):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=V(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=V(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=V(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isWhitelisted",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitWhitelist)&&(e=this.getLanguagePartFromCode(e)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(e)>-1}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}},{key:"toResolveHierarchy",value:function(e,t){var n=this,a=this.getFallbackCodes(t||this.options.fallbackLng||[],e),i=[],o=function(e){e&&(n.isWhitelisted(e)?i.push(e):n.logger.warn("rejecting non-whitelisted language code: ".concat(e)))};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&o(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&o(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&o(this.getLanguagePartFromCode(e))):"string"==typeof e&&o(this.formatLanguageCode(e)),a.forEach((function(e){i.indexOf(e)<0&&o(n.formatLanguageCode(e))})),i}}]),e}(),A=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he"],nr:[1,2,20,21],fc:22}],U={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0===e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0===e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0===e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1===e?0:2===e?1:(e<0||e>10)&&e%10==0?2:3)}};function D(){var e={};return A.forEach((function(t){t.lngs.forEach((function(n){e[n]={numbers:t.nr,plurals:U[t.fc]}}))})),e}var H=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(o.a)(this,e),this.languageUtils=t,this.options=n,this.logger=d.create("pluralResolver"),this.rules=D()}return Object(r.a)(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=this.getRule(e);return t&&t.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var n=this,a=[],i=this.getRule(e);return i?(i.numbers.forEach((function(i){var o=n.getSuffix(e,i);a.push("".concat(t).concat(o))})),a):a}},{key:"getSuffix",value:function(e,t){var n=this,a=this.getRule(e);if(a){var i=a.noAbs?a.plurals(t):a.plurals(Math.abs(t)),o=a.numbers[i];this.options.simplifyPluralSuffix&&2===a.numbers.length&&1===a.numbers[0]&&(2===o?o="plural":1===o&&(o=""));var r=function(){return n.options.prepend&&o.toString()?n.options.prepend+o.toString():o.toString()};return"v1"===this.options.compatibilityJSON?1===o?"":"number"==typeof o?"_plural_".concat(o.toString()):r():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===a.numbers.length&&1===a.numbers[0]?r():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}return this.logger.warn("no plural rule found for: ".concat(e)),""}}]),e}(),I=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(o.a)(this,e),this.logger=d.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(e){return e},this.init(t)}return Object(r.a)(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:R,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?S(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?S(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?S(t.nestingPrefix):t.nestingPrefixEscaped||S("$t("),this.nestingSuffix=t.nestingSuffix?S(t.nestingSuffix):t.nestingSuffixEscaped||S(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=void 0!==t.alwaysFormat&&t.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var n="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(n,"g")}},{key:"interpolate",value:function(e,t,n,a){var i,o,r,s=this,u=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function l(e){return e.replace(/\$/g,"$$$$")}var c=function(e){if(e.indexOf(s.formatSeparator)<0){var i=w(t,u,e);return s.alwaysFormat?s.format(i,void 0,n):i}var o=e.split(s.formatSeparator),r=o.shift().trim(),l=o.join(s.formatSeparator).trim();return s.format(w(t,u,r),l,n,a)};this.resetRegExp();var g=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler;for(r=0;i=this.regexpUnescape.exec(e);){if(void 0===(o=c(i[1].trim())))if("function"==typeof g){var p=g(e,i,a);o="string"==typeof p?p:""}else this.logger.warn("missed to pass in variable ".concat(i[1]," for interpolating ").concat(e)),o="";else"string"==typeof o||this.useRawValueToEscape||(o=m(o));if(e=e.replace(i[0],l(o)),this.regexpUnescape.lastIndex=0,++r>=this.maxReplaces)break}for(r=0;i=this.regexp.exec(e);){if(void 0===(o=c(i[1].trim())))if("function"==typeof g){var f=g(e,i,a);o="string"==typeof f?f:""}else this.logger.warn("missed to pass in variable ".concat(i[1]," for interpolating ").concat(e)),o="";else"string"==typeof o||this.useRawValueToEscape||(o=m(o));if(o=this.escapeValue?l(this.escape(o)):l(o),e=e.replace(i[0],o),this.regexp.lastIndex=0,++r>=this.maxReplaces)break}return e}},{key:"nest",value:function(e,t){var n,a,o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=Object(i.a)({},r);function u(e,t){var n=this.nestingOptionsSeparator;if(e.indexOf(n)<0)return e;var a=e.split(new RegExp("".concat(n,"[ ]*{"))),o="{".concat(a[1]);e=a[0],o=(o=this.interpolate(o,s)).replace(/'/g,'"');try{s=JSON.parse(o),t&&(s=Object(i.a)({},t,s))}catch(t){return this.logger.warn("failed parsing options string in nesting for key ".concat(e),t),"".concat(e).concat(n).concat(o)}return delete s.defaultValue,e}for(s.applyPostProcessor=!1,delete s.defaultValue;n=this.nestingRegexp.exec(e);){var l=[],c=!1;if(n[0].includes(this.formatSeparator)&&!/{.*}/.test(n[1])){var g=n[1].split(this.formatSeparator).map((function(e){return e.trim()})),f=Object(p.a)(g);n[1]=f[0],l=f.slice(1),c=!0}if((a=t(u.call(this,n[1].trim(),s),s))&&n[0]===e&&"string"!=typeof a)return a;"string"!=typeof a&&(a=m(a)),a||(this.logger.warn("missed to resolve ".concat(n[1]," for nesting ").concat(e)),a=""),c&&(a=l.reduce((function(e,t){return o.format(e,t,r.lng,r)}),a.trim())),e=e.replace(n[0],a),this.regexp.lastIndex=0}return e}}]),e}();var K=function(e){function t(e,n,a){var i,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Object(o.a)(this,t),i=Object(s.a)(this,Object(u.a)(t).call(this)),N&&v.call(Object(l.a)(i)),i.backend=e,i.store=n,i.services=a,i.languageUtils=a.languageUtils,i.options=r,i.logger=d.create("backendConnector"),i.state={},i.queue=[],i.backend&&i.backend.init&&i.backend.init(a,r.backend,r),i}return Object(c.a)(t,e),Object(r.a)(t,[{key:"queueLoad",value:function(e,t,n,a){var i=this,o=[],r=[],s=[],u=[];return e.forEach((function(e){var a=!0;t.forEach((function(t){var s="".concat(e,"|").concat(t);!n.reload&&i.store.hasResourceBundle(e,t)?i.state[s]=2:i.state[s]<0||(1===i.state[s]?r.indexOf(s)<0&&r.push(s):(i.state[s]=1,a=!1,r.indexOf(s)<0&&r.push(s),o.indexOf(s)<0&&o.push(s),u.indexOf(t)<0&&u.push(t)))})),a||s.push(e)})),(o.length||r.length)&&this.queue.push({pending:r,loaded:{},errors:[],callback:a}),{toLoad:o,pending:r,toLoadLanguages:s,toLoadNamespaces:u}}},{key:"loaded",value:function(e,t,n){var a=e.split("|"),i=Object(f.a)(a,2),o=i[0],r=i[1];t&&this.emit("failedLoading",o,r,t),n&&this.store.addResourceBundle(o,r,n),this.state[e]=t?-1:2;var s={};this.queue.forEach((function(n){var a,i,u,l,c,g;a=n.loaded,i=r,l=k(a,[o],Object),c=l.obj,g=l.k,c[g]=c[g]||[],u&&(c[g]=c[g].concat(i)),u||c[g].push(i),function(e,t){for(var n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t)}(n.pending,e),t&&n.errors.push(t),0!==n.pending.length||n.done||(Object.keys(n.loaded).forEach((function(e){s[e]||(s[e]=[]),n.loaded[e].length&&n.loaded[e].forEach((function(t){s[e].indexOf(t)<0&&s[e].push(t)}))})),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())})),this.emit("loaded",s),this.queue=this.queue.filter((function(e){return!e.done}))}},{key:"read",value:function(e,t,n){var a=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:350,r=arguments.length>5?arguments[5]:void 0;return e.length?this.backend[n](e,t,(function(s,u){s&&u&&i<5?setTimeout((function(){a.read.call(a,e,t,n,i+1,2*o,r)}),o):r(s,u)})):r(null,{})}},{key:"prepareLoading",value:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var o=this.queueLoad(e,t,a,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach((function(e){n.loadOne(e)}))}},{key:"load",value:function(e,t,n){this.prepareLoading(e,t,{},n)}},{key:"reload",value:function(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}},{key:"loadOne",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=e.split("|"),i=Object(f.a)(a,2),o=i[0],r=i[1];this.read(o,r,"read",void 0,void 0,(function(a,i){a&&t.logger.warn("".concat(n,"loading namespace ").concat(r," for language ").concat(o," failed"),a),!a&&i&&t.logger.log("".concat(n,"loaded namespace ").concat(r," for language ").concat(o),i),t.loaded(e,a,i)}))}},{key:"saveMissing",value:function(e,t,n,a,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t)?this.logger.warn('did not save key "'.concat(n,'" for namespace "').concat(t,'" as the namespace was not yet loaded'),"This means something IS WRONG in your application setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"):null!=n&&""!==n&&(this.backend&&this.backend.create&&this.backend.create(e,t,n,a,null,Object(i.a)({},r,{isUpdate:o})),e&&e[0]&&this.store.addResource(e[0],t,n,a))}}]),t}(v);function M(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var t={};if("object"===Object(a.a)(e[1])&&(t=e[1]),"string"==typeof e[1]&&(t.defaultValue=e[1]),"string"==typeof e[2]&&(t.tDescription=e[2]),"object"===Object(a.a)(e[2])||"object"===Object(a.a)(e[3])){var n=e[3]||e[2];Object.keys(n).forEach((function(e){t[e]=n[e]}))}return t},interpolation:{escapeValue:!0,format:function(e,t,n,a){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3}}}function B(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.whitelist&&e.whitelist.indexOf("cimode")<0&&(e.whitelist=e.whitelist.concat(["cimode"])),e}function z(){}var q=new(function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(Object(o.a)(this,t),e=Object(s.a)(this,Object(u.a)(t).call(this)),N&&v.call(Object(l.a)(e)),e.options=B(n),e.services={},e.logger=d,e.modules={external:[]},a&&!e.isInitialized&&!n.isClone){if(!e.options.initImmediate)return e.init(n,a),Object(s.a)(e,Object(l.a)(e));setTimeout((function(){e.init(n,a)}),0)}return e}return Object(c.a)(t,e),Object(r.a)(t,[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;function a(e){return e?"function"==typeof e?new e:e:null}if("function"==typeof t&&(n=t,t={}),this.options=Object(i.a)({},M(),this.options,B(t)),this.format=this.options.interpolation.format,n||(n=z),!this.options.isClone){this.modules.logger?d.init(a(this.modules.logger),this.options):d.init(null,this.options);var o=new T(this.options);this.store=new C(this.options.resources,this.options);var r=this.services;r.logger=d,r.resourceStore=this.store,r.languageUtils=o,r.pluralResolver=new H(o,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),r.interpolator=new I(this.options),r.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},r.backendConnector=new K(a(this.modules.backend),r.resourceStore,r,this.options),r.backendConnector.on("*",(function(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];e.emit.apply(e,[t].concat(a))})),this.modules.languageDetector&&(r.languageDetector=a(this.modules.languageDetector),r.languageDetector.init(r,this.options.detection,this.options)),this.modules.i18nFormat&&(r.i18nFormat=a(this.modules.i18nFormat),r.i18nFormat.init&&r.i18nFormat.init(this)),this.translator=new F(this.services,this.options),this.translator.on("*",(function(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];e.emit.apply(e,[t].concat(a))})),this.modules.external.forEach((function(t){t.init&&t.init(e)}))}this.modules.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");var s=["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle","getDataByLanguage"];s.forEach((function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments)}}));var u=y(),l=function(){e.changeLanguage(e.options.lng,(function(t,a){e.isInitialized=!0,e.logger.log("initialized",e.options),e.emit("initialized",e.options),u.resolve(a),n(t,a)}))};return this.options.resources||!this.options.initImmediate?l():setTimeout(l,0),u}},{key:"loadResources",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z,a=n,i="string"==typeof e?e:this.language;if("function"==typeof e&&(a=e),!this.options.resources||this.options.partialBundledLanguages){if(i&&"cimode"===i.toLowerCase())return a();var o=[],r=function(e){e&&t.services.languageUtils.toResolveHierarchy(e).forEach((function(e){o.indexOf(e)<0&&o.push(e)}))};if(i)r(i);else{var s=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);s.forEach((function(e){return r(e)}))}this.options.preload&&this.options.preload.forEach((function(e){return r(e)})),this.services.backendConnector.load(o,this.options.ns,a)}else a(null)}},{key:"reloadResources",value:function(e,t,n){var a=y();return e||(e=this.languages),t||(t=this.options.ns),n||(n=z),this.services.backendConnector.reload(e,t,(function(e){a.resolve(),n(e)})),a}},{key:"use",value:function(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&P.addPostProcessor(e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"changeLanguage",value:function(e,t){var n=this;this.isLanguageChangingTo=e;var a=y();this.emit("languageChanging",e);var i=function(e){e&&(n.language||(n.language=e,n.languages=n.services.languageUtils.toResolveHierarchy(e)),n.translator.language||n.translator.changeLanguage(e),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage(e)),n.loadResources(e,(function(i){!function(e,i){i?(n.language=i,n.languages=n.services.languageUtils.toResolveHierarchy(i),n.translator.changeLanguage(i),n.isLanguageChangingTo=void 0,n.emit("languageChanged",i),n.logger.log("languageChanged",i)):n.isLanguageChangingTo=void 0,a.resolve((function(){return n.t.apply(n,arguments)})),t&&t(e,(function(){return n.t.apply(n,arguments)}))}(i,e)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(i):i(e):i(this.services.languageDetector.detect()),a}},{key:"getFixedT",value:function(e,t){var n=this,o=function e(t,o){var r;if("object"!==Object(a.a)(o)){for(var s=arguments.length,u=new Array(s>2?s-2:0),l=2;l<s;l++)u[l-2]=arguments[l];r=n.options.overloadTranslationOptionHandler([t,o].concat(u))}else r=Object(i.a)({},o);return r.lng=r.lng||e.lng,r.lngs=r.lngs||e.lngs,r.ns=r.ns||e.ns,n.t(t,r)};return"string"==typeof e?o.lng=e:o.lngs=e,o.ns=t,o}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"hasLoadedNamespace",value:function(e){var t=this;if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var n=this.languages[0],a=!!this.options&&this.options.fallbackLng,i=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;var o=function(e,n){var a=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===a||2===a};return!!this.hasResourceBundle(n,e)||(!this.services.backendConnector.backend||!(!o(n,e)||a&&!o(i,e)))}},{key:"loadNamespaces",value:function(e,t){var n=this,a=y();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach((function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)})),this.loadResources((function(e){a.resolve(),t&&t(e)})),a):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var n=y();"string"==typeof e&&(e=[e]);var a=this.options.preload||[],i=e.filter((function(e){return a.indexOf(e)<0}));return i.length?(this.options.preload=a.concat(i),this.loadResources((function(e){n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){if(e||(e=this.languages&&this.languages.length>0?this.languages[0]:this.language),!e)return"rtl";return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e))>=0?"rtl":"ltr"}},{key:"createInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new t(e,n)}},{key:"cloneInstance",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z,o=Object(i.a)({},this.options,n,{isClone:!0}),r=new t(o),s=["store","services","language"];return s.forEach((function(t){r[t]=e[t]})),r.services=Object(i.a)({},this.services),r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r.translator=new F(r.services,r.options),r.translator.on("*",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];r.emit.apply(r,[e].concat(n))})),r.init(o,a),r.translator.options=r.options,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}}]),t}(v));t.a=q}}]);