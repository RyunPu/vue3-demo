(function(e){function t(t){for(var o,r,a=t[0],i=t[1],d=t[2],s=0,l=[];s<a.length;s++)r=a[s],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&l.push(c[r][0]),c[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(l.length)l.shift()();return u.push.apply(u,d||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==c[a]&&(o=!1)}o&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-22ec056f":"79fbf3a9","chunk-2d22d746":"fbaa80fa","chunk-5dcbb7c7":"5aa01b6f","chunk-061af4ae":"0e04d11d","chunk-2d0ac1cc":"a0acac24"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-5dcbb7c7":1,"chunk-061af4ae":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-22ec056f":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-5dcbb7c7":"e66057c3","chunk-061af4ae":"b4ba23e2","chunk-2d0ac1cc":"31d6cfe0"}[e]+".css",c=i.p+o,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var d=u[a],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===o||s===c))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){d=l[a],s=d.getAttribute("data-href");if(s===o||s===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],f.parentNode.removeChild(f),n(u)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=u);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(e);var l=new Error;d=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}c[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue3-demo/dist/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2906:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"},c=Object(o["g"])("Todos"),u=Object(o["g"])(" | "),a=Object(o["g"])("Posts"),i=Object(o["g"])(" | "),d=Object(o["g"])("Images"),s=Object(o["g"])(" | "),l=Object(o["g"])("About");function f(e,t){var n=Object(o["z"])("router-link"),f=Object(o["z"])("router-view");return Object(o["s"])(),Object(o["e"])(o["a"],null,[Object(o["h"])("div",r,[Object(o["h"])(n,{to:"/"},{default:Object(o["G"])((function(){return[c]})),_:1}),u,Object(o["h"])(n,{to:"/posts"},{default:Object(o["G"])((function(){return[a]})),_:1}),i,Object(o["h"])(n,{to:"/images"},{default:Object(o["G"])((function(){return[d]})),_:1}),s,Object(o["h"])(n,{to:"/about"},{default:Object(o["G"])((function(){return[l]})),_:1})]),Object(o["h"])(f)],64)}n("efa2");const p={};p.render=f;var b=p,h=(n("d3b7"),n("6c02")),m=[{path:"/",name:"Home",component:function(){return n.e("chunk-22ec056f").then(n.bind(null,"75cf"))}},{path:"/posts",name:"Posts",component:function(){return Promise.all([n.e("chunk-5dcbb7c7"),n.e("chunk-2d0ac1cc")]).then(n.bind(null,"17c3"))}},{path:"/images",name:"Images",component:function(){return Promise.all([n.e("chunk-5dcbb7c7"),n.e("chunk-061af4ae")]).then(n.bind(null,"ab31"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],v=Object(h["a"])({history:Object(h["b"])("/vue3-demo/dist/"),routes:m}),g=v,j=(n("ac1f"),n("25f0"),n("1276"),n("3835")),O=n("5502"),y=(n("a623"),n("4de4"),n("d81d"),n("5530")),k={todos:[],filter:"all"},w={allCompleted:function(e){return e.todos.length&&e.todos.every((function(e){return e.completed}))},activeTodos:function(e){return e.todos.filter((function(e){return!e.completed}))},compeletedTodos:function(e){return e.todos.filter((function(e){return e.completed}))},filteredTodos:function(e,t){switch(e.filter){case"active":return t.activeTodos;case"completed":return t.compeletedTodos;default:return e.todos}}},P={setState:function(e,t){var n=Object(j["a"])(t,2),o=n[0],r=n[1];e[o]=r},onAdd:function(e,t){var n=t.todo;e.todos.push({id:Date.now(),todo:n,completed:!1})},onRemove:function(e,t){var n=t.id;e.todos=e.todos.filter((function(e){return e.id!==n}))},onUpdate:function(e,t){e.todos=e.todos.map((function(e){return e.id===t.id?Object(y["a"])(Object(y["a"])({},e),t):e}))},onCompleteAll:function(e,t){e.todos=e.todos.map((function(e){return Object(y["a"])(Object(y["a"])({},e),{completed:t})}))}},T={onCompleteAll:function(e){var t=e.getters,n=e.commit;n("onCompleteAll",!t.allCompleted)}},_={namespaced:!0,state:k,getters:w,mutations:P,actions:T},A={setState:function(e,t){var n=Object(j["a"])(t,2),o=n[0],r=n[1],c=o.split("/")[0],u=o.split("/")[1];c&&(u?"[object Object]"===Object.prototype.toString.call(r)?e[c][u]=Object.assign({},r):e[c][u]=r:e[c]=r)}},C=Object(O["a"])({mutations:A,modules:{todos:_}});n("b972"),n("1d55"),n("7e79");Object(o["d"])(b).use(C).use(g).mount("#app")},"7e79":function(e,t,n){},efa2:function(e,t,n){"use strict";n("2906")}});
//# sourceMappingURL=app.50ec42b1.js.map