webpackJsonp([1,2],{115:function(n,o,e){"use strict";function r(n){return n&&n.__esModule?n:{default:n}}var t=e(117),c=(r(t),e(85),[{name:"liben",sex:"male"},{name:"jinxue",sex:"female"}]);c=c.map(function(n){return n.name+="--human",n}),console.log(c);var u=document.querySelector.partial("div");console.log(u)},117:function(n,o,e){"use strict";var r=arguments;Function.prototype.partial=function(){console.log(r.constructor);var n=void 0,o=Array.from(r);return console.log(o.constructor),function(){return n.bind(o.concat.call(Array.from(r)))}}},301:function(n,o,e){n.exports=e(115)}},[301]);