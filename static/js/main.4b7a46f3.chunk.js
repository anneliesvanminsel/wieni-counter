(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),c=n.n(a),i=(n(15),n(4)),l=n(5),u=n(7),f=n(6),s=n(8),m=(n(16),n(1));function p(e,t){var n=Object(r.useState)(function(){if(window.localStorage.getItem(e)){var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}return t}),o=Object(m.a)(n,2),a=o[0],c=o[1];return[a,function(t){if(console.log("counter",t),t){var n=t instanceof Function?t(a):t;c(n),window.localStorage.setItem(e,JSON.stringify(n))}}]}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var O=o.a.createElement("circle",{cx:25,cy:25,r:25,fill:"#43b05c"}),b=o.a.createElement("path",{fill:"none",stroke:"#fff",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,d:"M25 13v25M37.5 25h-25"}),g=function(e){var t=e.svgRef,n=d(e,["svgRef"]);return o.a.createElement("svg",v({viewBox:"0 0 50 50",ref:t},n),O,b)},w=o.a.forwardRef(function(e,t){return o.a.createElement(g,v({svgRef:t},e))});n.p;function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j=o.a.createElement("circle",{cx:25,cy:25,r:25,fill:"#ed8a19"}),E=o.a.createElement("path",{fill:"none",stroke:"#fff",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,d:"M38 25H12"}),k=function(e){var t=e.svgRef,n=y(e,["svgRef"]);return o.a.createElement("svg",h({viewBox:"0 0 50 50",ref:t},n),j,E)},S=o.a.forwardRef(function(e,t){return o.a.createElement(k,h({svgRef:t},e))}),x=(n.p,function(){var e=function(e){var t=Object(r.useState)(e),n=Object(m.a)(t,2),o=n[0],a=n[1],c=p("counter",o),i=Object(m.a)(c,2),l=i[0],u=i[1];return null!==l&&(o=l),{counter:o,decrement:function(){if(!(o-1<0))return u(o-1),a(o-1)},increment:function(){return u(o+1),a(o+1)}}}(10),t=e.counter,n=e.increment,a=e.decrement;return p(t),o.a.createElement("div",{className:"counter--wrapper"},o.a.createElement("button",{onClick:a},o.a.createElement(S,null)),o.a.createElement("div",{className:"counter--count"}," ",t," "),o.a.createElement("button",{onClick:n},o.a.createElement(w,null)))}),R=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(x,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.4b7a46f3.chunk.js.map