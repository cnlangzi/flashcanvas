/*
 * FlashCanvas
 *
 * Copyright (c) 2009      Tim Cameron Ryan
 * Copyright (c) 2009-2010 FlashCanvas Project
 * Released under the MIT/X License
 */
window.ActiveXObject&&!window.CanvasRenderingContext2D&&function(){function n(a){var b=a.d;arguments.callee[b]||(arguments.callee[b]=0);return arguments.callee[b]++}function o(){if(document.readyState==="complete"){document.detachEvent(p,o);for(var a=document.getElementsByTagName("canvas"),b=0,c=a.length;b<c;++b){var e=a[b];e.getContext||k.initElement(e)}}}function q(){var a=window.event,b=a.propertyName;if(b==="width"||b==="height"){a=a.srcElement;var c=a.getContext("2d"),e=parseInt(a[b]);if(isNaN(e)||
e<0)e=b==="width"?300:150;a.style[b]=e+"px";c.H(a.clientWidth,a.clientHeight)}}function r(){var a=window.event.srcElement,b=a.parentNode;a.blur();b.focus()}function s(){window.detachEvent(t,s);for(var a=document.getElementsByTagName("canvas"),b=0,c=a.length;b<c;++b){var e=a[b],f=e.firstChild,g;for(g in f)if(typeof f[g]==="function")f[g]=null;for(g in e)if(typeof e[g]==="function")e[g]=null;e.detachEvent(u,q);f.detachEvent(v,r)}window[w]=null;window[x]=null;window[y]=null;window[z]=null;window[A]=
null}var w="CanvasRenderingContext2D",x="CanvasGradient",y="CanvasPattern",z="FlashCanvas",A="G_vmlCanvasManager",v="onfocus",u="onpropertychange",p="onreadystatechange",t="onunload",l=function(){var a=document.getElementsByTagName("script");return a[a.length-1].getAttribute("src",4)}().replace(/[^\/]+$/,"flashcanvas.swf"),d=new function(a){for(var b=0,c=a.length;b<c;b++)this[a[b]]=b}(["toDataURL","save","restore","scale","rotate","translate","transform","setTransform","globalAlpha","globalCompositeOperation",
"strokeStyle","fillStyle","createLinearGradient","createRadialGradient","createPattern","lineWidth","lineCap","lineJoin","miterLimit","shadowOffsetX","shadowOffsetY","shadowBlur","shadowColor","clearRect","fillRect","strokeRect","beginPath","closePath","moveTo","lineTo","quadraticCurveTo","bezierCurveTo","arcTo","rect","arc","fill","stroke","clip","isPointInPath","font","textAlign","textBaseline","fillText","strokeText","measureText","drawImage","createImageData","getImageData","putImageData","addColorStop"]),
i={},h={};function m(a,b){this.canvas=a;this.i=b;this.d=a.uniqueID;this.D();var c=this;window.setInterval(function(){h[c.d]===0&&c.f()},30)}m.prototype={save:function(){this.v.push({globalAlpha:this.globalAlpha,globalCompositeOperation:this.globalCompositeOperation,strokeStyle:this.strokeStyle,fillStyle:this.fillStyle,lineWidth:this.lineWidth,lineCap:this.lineCap,lineJoin:this.lineJoin,miterLimit:this.miterLimit,shadowOffsetX:this.shadowOffsetX,shadowOffsetY:this.shadowOffsetY,shadowBlur:this.shadowBlur,
shadowColor:this.shadowColor,font:this.font,textAlign:this.textAlign,textBaseline:this.textBaseline});this.b();this.c();this.h();this.g();this.q();this.p();this.a.push(d.save)},restore:function(){if(this.v.length>0){var a=this.v.pop();this.globalAlpha=a.globalAlpha;this.globalCompositeOperation=a.globalCompositeOperation;this.strokeStyle=a.strokeStyle;this.fillStyle=a.fillStyle;this.lineWidth=a.lineWidth;this.lineCap=a.lineCap;this.lineJoin=a.lineJoin;this.miterLimit=a.miterLimit;this.shadowOffsetX=
a.shadowOffsetX;this.shadowOffsetY=a.shadowOffsetY;this.shadowBlur=a.shadowBlur;this.shadowColor=a.shadowColor;this.font=a.font;this.textAlign=a.textAlign;this.textBaseline=a.textBaseline}this.a.push(d.restore)},scale:function(a,b){this.a.push(d.scale,a,b)},rotate:function(a){this.a.push(d.rotate,a)},translate:function(a,b){this.a.push(d.translate,a,b)},transform:function(a,b,c,e,f,g){this.a.push(d.transform,a,b,c,e,f,g)},setTransform:function(a,b,c,e,f,g){this.a.push(d.setTransform,a,b,c,e,f,g)},
b:function(){var a=this.a;if(this.j!==this.globalAlpha){this.j=this.globalAlpha;a.push(d.globalAlpha,this.j)}if(this.k!==this.globalCompositeOperation){this.k=this.globalCompositeOperation;a.push(d.globalCompositeOperation,this.k)}},h:function(){if(this.F!==this.strokeStyle){var a=this.F=this.strokeStyle;this.a.push(d.strokeStyle,typeof a==="object"?a.id:a)}},g:function(){if(this.B!==this.fillStyle){var a=this.B=this.fillStyle;this.a.push(d.fillStyle,typeof a==="object"?a.id:a)}},createLinearGradient:function(a,
b,c,e){this.a.push(d.createLinearGradient,a,b,c,e);this.e.push(d.createLinearGradient,a,b,c,e);return new j(this)},createRadialGradient:function(a,b,c,e,f,g){this.a.push(d.createRadialGradient,a,b,c,e,f,g);this.e.push(d.createRadialGradient,a,b,c,e,f,g);return new j(this)},createPattern:function(a,b){if(a.tagName.toUpperCase()==="IMG"){this.a.push(d.createPattern,a.src,b);if(i[this.d]){this.f();++h[this.d]}return new B(this)}},q:function(){var a=this.a;if(this.n!==this.lineWidth){this.n=this.lineWidth;
a.push(d.lineWidth,this.n)}if(this.l!==this.lineCap){this.l=this.lineCap;a.push(d.lineCap,this.l)}if(this.m!==this.lineJoin){this.m=this.lineJoin;a.push(d.lineJoin,this.m)}if(this.o!==this.miterLimit){this.o=this.miterLimit;a.push(d.miterLimit,this.o)}},c:function(){var a=this.a;if(this.t!==this.shadowOffsetX){this.t=this.shadowOffsetX;a.push(d.shadowOffsetX,this.t)}if(this.u!==this.shadowOffsetY){this.u=this.shadowOffsetY;a.push(d.shadowOffsetY,this.u)}if(this.r!==this.shadowBlur){this.r=this.shadowBlur;
a.push(d.shadowBlur,this.r)}if(this.s!==this.shadowColor){this.s=this.shadowColor;a.push(d.shadowColor,this.s)}},clearRect:function(a,b,c,e){this.a.push(d.clearRect,a,b,c,e)},fillRect:function(a,b,c,e){this.b();this.c();this.g();this.a.push(d.fillRect,a,b,c,e)},strokeRect:function(a,b,c,e){this.b();this.c();this.h();this.q();this.a.push(d.strokeRect,a,b,c,e)},beginPath:function(){this.a.push(d.beginPath)},closePath:function(){this.a.push(d.closePath)},moveTo:function(a,b){this.a.push(d.moveTo,a,b)},
lineTo:function(a,b){this.a.push(d.lineTo,a,b)},quadraticCurveTo:function(a,b,c,e){this.a.push(d.quadraticCurveTo,a,b,c,e)},bezierCurveTo:function(a,b,c,e,f,g){this.a.push(d.bezierCurveTo,a,b,c,e,f,g)},arcTo:function(a,b,c,e,f){this.a.push(d.arcTo,a,b,c,e,f)},rect:function(a,b,c,e){this.a.push(d.rect,a,b,c,e)},arc:function(a,b,c,e,f,g){g=g?1:0;this.a.push(d.arc,a,b,c,e,f,g)},fill:function(){this.b();this.c();this.g();this.a.push(d.fill)},stroke:function(){this.b();this.c();this.h();this.q();this.a.push(d.stroke)},
clip:function(){this.a.push(d.clip)},p:function(){var a=this.a;if(this.C!==this.font){this.C=this.font;try{this.i.style.font=this.font}catch(b){}var c=this.i.currentStyle;a.push(d.font,[c.fontStyle,c.fontWeight,c.fontSize,c.fontFamily].join(" "))}if(this.w!==this.textAlign){this.w=this.textAlign;a.push(d.textAlign,this.w)}if(this.z!==this.textBaseline){this.z=this.textBaseline;a.push(d.textBaseline,this.z)}},fillText:function(a,b,c,e){this.b();this.g();this.c();this.p();this.a.push(d.fillText,a,b,
c,e)},strokeText:function(a,b,c,e){this.b();this.h();this.c();this.p();this.a.push(d.strokeText,a,b,c,e)},drawImage:function(){var a=arguments,b=a.length;if(a[0].tagName.toUpperCase()==="IMG"){this.b();this.c();if(b===3)this.a.push(d.drawImage,b,a[0].src,a[1],a[2]);else if(b===5)this.a.push(d.drawImage,b,a[0].src,a[1],a[2],a[3],a[4]);else if(b===9)this.a.push(d.drawImage,b,a[0].src,a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);else return;if(i[this.d]){this.f();++h[this.d]}}},D:function(){this.globalAlpha=
this.j=1;this.globalCompositeOperation=this.k="source-over";this.fillStyle=this.B=this.strokeStyle=this.F="#000000";this.lineWidth=this.n=1;this.lineCap=this.l="butt";this.lineJoin=this.m="miter";this.miterLimit=this.o=10;this.shadowBlur=this.r=this.shadowOffsetY=this.u=this.shadowOffsetX=this.t=0;this.shadowColor=this.s="rgba(0,0,0,0)";this.font=this.C="10px sans-serif";this.textAlign=this.w="start";this.textBaseline=this.z="alphabetic";this.a=[];this.e=[];this.v=[]},G:function(){var a=this.a;this.a=
[];this.e=[];return a},f:function(){var a=this.G();if(a.length>0)return eval(this.i.CallFunction('<invoke name="postCommands" returntype="javascript"><arguments><string>'+a.join("&#0;")+"</string></arguments></invoke>"))},H:function(a,b){this.i.resize(a,b);if(this.e.length){this.a=this.e;this.f()}this.D()}};function j(a){this.A=a;this.id=n(a)}j.prototype={addColorStop:function(a,b){this.A.a.push(d.addColorStop,this.id,a,b);this.A.e.push(d.addColorStop,this.id,a,b)}};function B(a){this.id=n(a)}var k=
{initElement:function(a){var b=parseInt(a.getAttribute("width")),c=parseInt(a.getAttribute("height"));if(isNaN(b)||b<0)b=300;if(isNaN(c)||c<0)c=150;a.style.width=b+"px";a.style.height=c+"px";b=a.uniqueID;i[b]=false;h[b]=1;a.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="external'+b+'"><param name="allowScriptAccess" value="always"><param name="movie" value="'+
l+'"><param name="quality" value="high"><param name="wmode" value="transparent"></object>';b=a.firstChild;var e=new m(a,b);a.getContext=function(f){return f==="2d"?e:null};a.toDataURL=function(){var f=arguments,g=f[0]?f[0].toLowerCase():"image/png";g==="image/jpeg"?e.a.push(d.toDataURL,g,f[1]||0.5):e.a.push(d.toDataURL,g);return e.f()};b.attachEvent(v,r);return a},unlock:function(a,b){h[a]&&--h[a];if(b){var c=document.getElementById("external"+a);c.parentNode.attachEvent(u,q);c.resize(c.clientWidth,
c.clientHeight);i[a]=true}},trigger:function(a,b){document.getElementById("external"+a).parentNode.fireEvent("on"+b)}};document.createElement("canvas");document.createStyleSheet().cssText="canvas{display:inline-block;overflow:hidden;width:300px;height:150px}";document.attachEvent(p,o);window.attachEvent(t,s);if(l.indexOf(location.protocol+"//"+location.host+"/")===0){var C=new ActiveXObject("Microsoft.XMLHTTP");C.open("GET",l,false);C.send(null)}window[w]=m;window[x]=j;window[y]=B;window[z]=k;window[A]=
{init:function(){},init_:function(){},initElement:k.initElement}}();
