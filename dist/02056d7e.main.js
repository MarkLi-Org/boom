webpackJsonp([1,2],{115:function(o,n,e){"use strict";function t(o){return o&&o.__esModule?o:{default:o}}var r=e(117),u=(t(r),e(85),[{name:"liben",sex:"male"},{name:"jinxue",sex:"female"}]);u=u.map(function(o){return o.name+="--human",o}),console.log(u);var c=document.querySelector.partial("div");console.log(c)},117:function(o,n,e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r=arguments;Function.prototype.partial=function(){var o=void 0,n=Array.from(r);return console.log("undefined"==typeof n?"undefined":t(n)),function(){return o.bind(n.concat.call(Array.from(r)))}}},301:function(o,n,e){o.exports=e(115)}},[301]);