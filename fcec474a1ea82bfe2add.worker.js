!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){let r=0;const n=[];let o=null;const u=({data:e})=>{0!==r||o||(o=setInterval(()=>{n.length&&(postMessage(n.slice(),n.map(e=>e.buffer).filter(Boolean)),n.length=0),0===r&&(clearInterval(o),o=null)},1)),r++,fetch(e.url,e.options).then(e=>e.arrayBuffer()).then(t=>n.push({id:e.id,buffer:t})).catch(t=>n.push({id:e.id,error:t})).then(()=>r--)};self.fetch?(postMessage({support:{fetch:!0}}),self.addEventListener("message",u)):(postMessage({support:{fetch:!1}}),self.addEventListener("message",({data:e})=>{postMessage([{id:e.id,error:new Error("fetch is unavailable")}])}))}]);
//# sourceMappingURL=fcec474a1ea82bfe2add.worker.js.map