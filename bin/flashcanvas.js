/*
 * FlashCanvas
 *
 * Copyright (c) 2009      Tim Cameron Ryan
 * Copyright (c) 2009-2010 FlashCanvas Project
 * Released under the MIT/X License
 */
window.ActiveXObject&&!window.CanvasRenderingContext2D&&function(h,i){function P(a){this.width=a}function y(a){this.id=a.C++}function q(a){this.G=a;this.id=a.C++}function r(a,b){this.canvas=a;this.B=b;this.d=a.uniqueID;this.D();this.C=0;this.t="";var c=this;setInterval(function(){m[c.d]===0&&c.e()},30)}function z(){if(i.readyState==="complete"){i.detachEvent(A,z);for(var a=i.getElementsByTagName(v),b=0,c=a.length;b<c;++b)w.initElement(a[b])}}function B(){var a=event.srcElement,b=a.parentNode;a.blur();
b.focus()}function C(){var a=event.propertyName;if(a==="width"||a==="height"){var b=event.srcElement,c=b.getContext("2d"),d=parseInt(b[a]);if(isNaN(d)||d<0)d=a==="width"?300:150;else if(d===0)d=1;b.style[a]=d+"px";c.I(b.clientWidth,b.clientHeight)}}function D(){h.detachEvent(E,D);for(var a in p){var b=p[a],c=b.firstChild,d;for(d in c)if(typeof c[d]==="function")c[d]=k;for(d in b)if(typeof b[d]==="function")b[d]=k;c.detachEvent(F,B);b.detachEvent(G,C)}h[H]=k;h[I]=k;h[J]=k;h[K]=k;h[L]=k}function M(a){return(""+
a).replace(/&/g,"&amp;").replace(/</g,"&lt;")}var k=null,v="canvas",H="CanvasRenderingContext2D",I="CanvasGradient",J="CanvasPattern",K="FlashCanvas",L="G_vmlCanvasManager",F="onfocus",G="onpropertychange",A="onreadystatechange",E="onunload",s=function(){var a=i.getElementsByTagName("script");a=a[a.length-1];return i.documentMode>=8?a.src:a.getAttribute("src",4)}().replace(/[^\/]+$/,"flashcanvas.swf"),e=new function(a){for(var b=0,c=a.length;b<c;b++)this[a[b]]=b}(["toDataURL","save","restore","scale",
"rotate","translate","transform","setTransform","globalAlpha","globalCompositeOperation","strokeStyle","fillStyle","createLinearGradient","createRadialGradient","createPattern","lineWidth","lineCap","lineJoin","miterLimit","shadowOffsetX","shadowOffsetY","shadowBlur","shadowColor","clearRect","fillRect","strokeRect","beginPath","closePath","moveTo","lineTo","quadraticCurveTo","bezierCurveTo","arcTo","rect","arc","fill","stroke","clip","isPointInPath","font","textAlign","textBaseline","fillText","strokeText",
"measureText","drawImage","createImageData","getImageData","putImageData","addColorStop","direction","resize"]),t={},m={},p={},u={};r.prototype={save:function(){this.b();this.c();this.m();this.l();this.z();this.w();this.F.push([this.f,this.g,this.A,this.u,this.j,this.h,this.i,this.k,this.p,this.q,this.n,this.o,this.v,this.r,this.s]);this.a.push(e.save)},restore:function(){var a=this.F;if(a.length){a=a.pop();this.globalAlpha=a[0];this.globalCompositeOperation=a[1];this.strokeStyle=a[2];this.fillStyle=
a[3];this.lineWidth=a[4];this.lineCap=a[5];this.lineJoin=a[6];this.miterLimit=a[7];this.shadowOffsetX=a[8];this.shadowOffsetY=a[9];this.shadowBlur=a[10];this.shadowColor=a[11];this.font=a[12];this.textAlign=a[13];this.textBaseline=a[14]}this.a.push(e.restore)},scale:function(a,b){this.a.push(e.scale,a,b)},rotate:function(a){this.a.push(e.rotate,a)},translate:function(a,b){this.a.push(e.translate,a,b)},transform:function(a,b,c,d,f,g){this.a.push(e.transform,a,b,c,d,f,g)},setTransform:function(a,b,
c,d,f,g){this.a.push(e.setTransform,a,b,c,d,f,g)},b:function(){var a=this.a;if(this.f!==this.globalAlpha){this.f=this.globalAlpha;a.push(e.globalAlpha,this.f)}if(this.g!==this.globalCompositeOperation){this.g=this.globalCompositeOperation;a.push(e.globalCompositeOperation,this.g)}},m:function(){if(this.A!==this.strokeStyle){var a=this.A=this.strokeStyle;this.a.push(e.strokeStyle,typeof a==="object"?a.id:a)}},l:function(){if(this.u!==this.fillStyle){var a=this.u=this.fillStyle;this.a.push(e.fillStyle,
typeof a==="object"?a.id:a)}},createLinearGradient:function(a,b,c,d){this.a.push(e.createLinearGradient,a,b,c,d);return new q(this)},createRadialGradient:function(a,b,c,d,f,g){this.a.push(e.createRadialGradient,a,b,c,d,f,g);return new q(this)},createPattern:function(a,b){var c=a.tagName,d=this.d;if(c)if(c.toLowerCase()==="img")c=a.getAttribute("src",2);else return;else if(a.src)c=a.src;else return;this.a.push(e.createPattern,c,b);if(t[d]){this.e();++m[d]}return new y(this)},z:function(){var a=this.a;
if(this.j!==this.lineWidth){this.j=this.lineWidth;a.push(e.lineWidth,this.j)}if(this.h!==this.lineCap){this.h=this.lineCap;a.push(e.lineCap,this.h)}if(this.i!==this.lineJoin){this.i=this.lineJoin;a.push(e.lineJoin,this.i)}if(this.k!==this.miterLimit){this.k=this.miterLimit;a.push(e.miterLimit,this.k)}},c:function(){var a=this.a;if(this.p!==this.shadowOffsetX){this.p=this.shadowOffsetX;a.push(e.shadowOffsetX,this.p)}if(this.q!==this.shadowOffsetY){this.q=this.shadowOffsetY;a.push(e.shadowOffsetY,this.q)}if(this.n!==
this.shadowBlur){this.n=this.shadowBlur;a.push(e.shadowBlur,this.n)}if(this.o!==this.shadowColor){this.o=this.shadowColor;a.push(e.shadowColor,this.o)}},clearRect:function(a,b,c,d){this.a.push(e.clearRect,a,b,c,d)},fillRect:function(a,b,c,d){this.b();this.c();this.l();this.a.push(e.fillRect,a,b,c,d)},strokeRect:function(a,b,c,d){this.b();this.c();this.m();this.z();this.a.push(e.strokeRect,a,b,c,d)},beginPath:function(){this.a.push(e.beginPath)},closePath:function(){this.a.push(e.closePath)},moveTo:function(a,
b){this.a.push(e.moveTo,a,b)},lineTo:function(a,b){this.a.push(e.lineTo,a,b)},quadraticCurveTo:function(a,b,c,d){this.a.push(e.quadraticCurveTo,a,b,c,d)},bezierCurveTo:function(a,b,c,d,f,g){this.a.push(e.bezierCurveTo,a,b,c,d,f,g)},arcTo:function(a,b,c,d,f){this.a.push(e.arcTo,a,b,c,d,f)},rect:function(a,b,c,d){this.a.push(e.rect,a,b,c,d)},arc:function(a,b,c,d,f,g){this.a.push(e.arc,a,b,c,d,f,g?1:0)},fill:function(){this.b();this.c();this.l();this.a.push(e.fill)},stroke:function(){this.b();this.c();
this.m();this.z();this.a.push(e.stroke)},clip:function(){this.a.push(e.clip)},w:function(){var a=this.a;if(this.v!==this.font)try{var b=u[this.d];b.style.font=this.v=this.font;var c=b.currentStyle;a.push(e.font,[c.fontStyle,c.fontWeight,b.offsetHeight,c.fontFamily].join(" "))}catch(d){}if(this.r!==this.textAlign){this.r=this.textAlign;a.push(e.textAlign,this.r)}if(this.s!==this.textBaseline){this.s=this.textBaseline;a.push(e.textBaseline,this.s)}if(this.t!==this.canvas.currentStyle.direction){this.t=
this.canvas.currentStyle.direction;a.push(e.direction,this.t)}},fillText:function(a,b,c,d){this.b();this.l();this.c();this.w();this.a.push(e.fillText,M(a),b,c,d===void 0?Infinity:d)},strokeText:function(a,b,c,d){this.b();this.m();this.c();this.w();this.a.push(e.strokeText,M(a),b,c,d===void 0?Infinity:d)},measureText:function(a){var b=u[this.d];try{b.style.font=this.font}catch(c){}b.innerText=a.replace(/[ \n\f\r]/g,"\t");return new P(b.offsetWidth)},drawImage:function(a,b,c,d,f,g,n,j,x){var l=a.tagName,
o=arguments.length,N=this.d;if(l)if(l.toLowerCase()==="img")l=a.getAttribute("src",2);else return;else if(a.src)l=a.src;else return;this.b();this.c();if(o===3)this.a.push(e.drawImage,o,l,b,c);else if(o===5)this.a.push(e.drawImage,o,l,b,c,d,f);else if(o===9)this.a.push(e.drawImage,o,l,b,c,d,f,g,n,j,x);else return;if(t[N]){this.e();++m[N]}},D:function(){this.globalAlpha=this.f=1;this.globalCompositeOperation=this.g="source-over";this.fillStyle=this.u=this.strokeStyle=this.A="#000000";this.lineWidth=
this.j=1;this.lineCap=this.h="butt";this.lineJoin=this.i="miter";this.miterLimit=this.k=10;this.shadowBlur=this.n=this.shadowOffsetY=this.q=this.shadowOffsetX=this.p=0;this.shadowColor=this.o="rgba(0,0,0,0)";this.font=this.v="10px sans-serif";this.textAlign=this.r="start";this.textBaseline=this.s="alphabetic";this.a=[];this.F=[]},H:function(){var a=this.a;this.a=[];return a},e:function(){var a=this.H();if(a.length>0)return eval(this.B.CallFunction('<invoke name="executeCommand" returntype="javascript"><arguments><string>'+
a.join("&#0;")+"</string></arguments></invoke>"))},I:function(a,b){this.e();this.D();this.B.width=a;this.B.height=b;this.a.push(e.resize,a,b)}};q.prototype={addColorStop:function(a,b){this.G.a.push(e.addColorStop,this.id,a,b)}};var w={initElement:function(a){if(a.getContext)return a;var b=a.uniqueID,c="external"+b;t[b]=false;m[b]=1;a.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+location.protocol+'//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="'+
c+'"><param name="allowScriptAccess" value="always"><param name="flashvars" value="id='+c+'"><param name="wmode" value="transparent"></object><span style="margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap"></span>';p[b]=a;var d=a.firstChild;u[b]=a.lastChild;var f=i.body.contains;if(f(a))d.movie=s;else var g=setInterval(function(){if(f(a)){clearInterval(g);d.movie=s}},0);if(i.compatMode==="BackCompat"||!h.XMLHttpRequest)u[b].style.overflow=
"hidden";var n=new r(a,d);a.getContext=function(j){return j==="2d"?n:k};a.toDataURL=function(j,x){j=j?j.toLowerCase():"image/png";j==="image/jpeg"?n.a.push(e.toDataURL,j,x||0.5):n.a.push(e.toDataURL,j);return n.e()};d.attachEvent(F,B);return a},saveImage:function(a){a.firstChild.saveImage()},setOptions:function(){},trigger:function(a,b){p[a].fireEvent("on"+b)},unlock:function(a,b){m[a]&&--m[a];if(b){var c=p[a],d=c.firstChild,f=parseInt(c.width),g=parseInt(c.height);if(isNaN(f)||f<0)f=300;if(isNaN(g)||
g<0)g=150;c.style.width=f+"px";c.style.height=g+"px";d.width=c.width=f;d.height=c.height=g;d.resize(f,g);c.attachEvent(G,C);t[a]=true}}};i.createElement(v);i.createStyleSheet().cssText=v+"{display:inline-block;overflow:hidden;width:300px;height:150px}";i.attachEvent(A,z);h.attachEvent(E,D);if(s.indexOf(location.protocol+"//"+location.host+"/")===0){var O=new ActiveXObject("Microsoft.XMLHTTP");O.open("GET",s,false);O.send(k)}h[H]=r;h[I]=q;h[J]=y;h[K]=w;h[L]={init:function(){},init_:function(){},initElement:w.initElement};
keep=r.measureText}(window,document);
