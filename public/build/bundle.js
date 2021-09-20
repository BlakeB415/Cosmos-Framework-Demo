!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e,n,r=(e=function(e,n){!function(e){class n{_parentElement;_childrenElements=new Set;$parent;$children=new Set;constructor(t={}){void 0!==t.mount&&"undefined"!=typeof window&&(t.mount.innerHTML="",this.mount(t.mount))}set_parent(t){this._parentElement=t}add_child(t){t.set_parent(this),this._childrenElements.add(t)}remove_child(t){this._childrenElements.delete(t)}async mount(t,e=!1){this._parentElement=t,i(this),await this.instance(),this.add_child(await this.render()),this.beforeMounted&&await this.beforeMounted();for(let n of this._childrenElements)e?await n.mount(t,e):await n.mount(t);this.mounted&&await this.mounted()}async destroy(){this.beforeUnmount&&await this.beforeUnmount(),this._parentElement&&this._parentElement.remove_child&&this._parentElement.remove_child(this);for(let t of this._childrenElements)await t.destroy();this.unmounted&&await this.unmounted()}createElement(t,e={},...n){if(n=n.filter((t=>!1!==t)),null==e&&(e={}),"string"==typeof t){let r=new h(t,[],e);for(const[t,i]of Object.entries(n))"object"==typeof i&&null==i.subscribe?r.add_child(i):r.add_child(new h("#text",[i],e));return r}return new t(n,e)}condition(t,e){return new p(t,e)}}let r;function i(t){r=t}function o(){return r}function s(t){o().beforeMounted=t}function a(t){o().mounted=t}function c(t){o().beforeUnmount=t}function u(t){o().unmounted=t}function l(t){o().render=t}class h{_parentElement;_childrenElements=new Set;$parent;$children=new Set;_element;_attrs;_updateListeners=new Set;_eventListeners=[];constructor(t,e,n={},r){if("#text"==t)void 0!==e[0].subscribe?(this._element=document.createTextNode(e[0].get()),this._updateListeners.add(e[0].subscribe(((t,e)=>{this._element.textContent=t})))):this._element=document.createTextNode(e[0]);else{this._element=document.createElement(t);for(const[t,n]of Object.entries(e))this.add_child(n);this.set_attributes(n)}}set_attributes(t){for(let[e,n]of Object.entries(t))e.startsWith("on")&&"function"==typeof n?(this._element.addEventListener(e.replace("on","").toLowerCase(),n),this._eventListeners.push({fn:n,e:e.replace("on","").toLowerCase()})):void 0!==n.subscribe?(this._element.setAttribute(e,n.get()),this._updateListeners.add(n.subscribe(((t,n)=>{this._element.setAttribute(e,t)})).bind(this))):this._element.setAttribute(e,n)}set_parent(t){this._parentElement=t}add_child(t){t.set_parent(this),this._childrenElements.add(t)}remove_child(t){this._childrenElements.delete(t)}async mount(t,e=!1){e?t.parentNode.insertBefore(this._element,t):t.appendChild(this._element);for(let t of this._childrenElements)await t.mount(this._element)}async destroy(){for(let t of this._updateListeners)t();for(let t of this._eventListeners)this._element.removeEventListener(t.e,t.fn);this._element.remove(),this._parentElement&&this._parentElement.remove_child(this);for(let t of this._childrenElements)await t.destroy()}}var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function d(t,e){return t(e={exports:{}},e.exports),e.exports}var _=d((function(t,e){var n=200,r="__lodash_hash_undefined__",i=1,o=2,s=9007199254740991,a="[object Arguments]",c="[object Array]",u="[object AsyncFunction]",l="[object Boolean]",h="[object Date]",d="[object Error]",_="[object Function]",p="[object GeneratorFunction]",m="[object Map]",v="[object Number]",b="[object Null]",y="[object Object]",g="[object Promise]",w="[object Proxy]",E="[object RegExp]",j="[object Set]",x="[object String]",A="[object Symbol]",O="[object Undefined]",z="[object WeakMap]",L="[object ArrayBuffer]",S="[object DataView]",T="[object Float64Array]",M="[object Int8Array]",C="[object Int16Array]",k="[object Int32Array]",$="[object Uint8Array]",U="[object Uint8ClampedArray]",I="[object Uint16Array]",P="[object Uint32Array]",F=/[\\^$.*+?()[\]{}|]/g,N=/^\[object .+?Constructor\]$/,R=/^(?:0|[1-9]\d*)$/,V={};V["[object Float32Array]"]=V[T]=V[M]=V[C]=V[k]=V[$]=V[U]=V[I]=V[P]=!0,V[a]=V[c]=V[L]=V[l]=V[S]=V[h]=V[d]=V[_]=V[m]=V[v]=V[y]=V[E]=V[j]=V[x]=V[z]=!1;var B="object"==typeof f&&f&&f.Object===Object&&f,D="object"==typeof self&&self&&self.Object===Object&&self,W=B||D||Function("return this")(),H=e&&!e.nodeType&&e,q=H&&t&&!t.nodeType&&t,G=q&&q.exports===H,J=G&&B.process,K=function(){try{return J&&J.binding&&J.binding("util")}catch(t){}}(),Q=K&&K.isTypedArray;function X(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var s=t[n];e(s,n,t)&&(o[i++]=s)}return o}function Y(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}function Z(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function tt(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function et(t){return function(e){return t(e)}}function nt(t,e){return t.has(e)}function rt(t,e){return null==t?void 0:t[e]}function it(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function ot(t,e){return function(n){return t(e(n))}}function st(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var at,ct=Array.prototype,ut=Function.prototype,lt=Object.prototype,ht=W["__core-js_shared__"],ft=ut.toString,dt=lt.hasOwnProperty,_t=(at=/[^.]+$/.exec(ht&&ht.keys&&ht.keys.IE_PROTO||""))?"Symbol(src)_1."+at:"",pt=lt.toString,mt=RegExp("^"+ft.call(dt).replace(F,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vt=G?W.Buffer:void 0,bt=W.Symbol,yt=W.Uint8Array,gt=lt.propertyIsEnumerable,wt=ct.splice,Et=bt?bt.toStringTag:void 0,jt=Object.getOwnPropertySymbols,xt=vt?vt.isBuffer:void 0,At=ot(Object.keys,Object),Ot=ze(W,"DataView"),zt=ze(W,"Map"),Lt=ze(W,"Promise"),St=ze(W,"Set"),Tt=ze(W,"WeakMap"),Mt=ze(Object,"create"),Ct=Ie(Ot),kt=Ie(zt),$t=Ie(Lt),Ut=Ie(St),It=Ie(Tt),Pt=bt?bt.prototype:void 0,Ft=Pt?Pt.valueOf:void 0;function Nt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Rt(){this.__data__=Mt?Mt(null):{},this.size=0}function Vt(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}function Bt(t){var e=this.__data__;if(Mt){var n=e[t];return n===r?void 0:n}return dt.call(e,t)?e[t]:void 0}function Dt(t){var e=this.__data__;return Mt?void 0!==e[t]:dt.call(e,t)}function Wt(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Mt&&void 0===e?r:e,this}function Ht(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function qt(){this.__data__=[],this.size=0}function Gt(t){var e=this.__data__,n=de(e,t);return!(n<0||(n==e.length-1?e.pop():wt.call(e,n,1),--this.size,0))}function Jt(t){var e=this.__data__,n=de(e,t);return n<0?void 0:e[n][1]}function Kt(t){return de(this.__data__,t)>-1}function Qt(t,e){var n=this.__data__,r=de(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Yt(){this.size=0,this.__data__={hash:new Nt,map:new(zt||Ht),string:new Nt}}function Zt(t){var e=Oe(this,t).delete(t);return this.size-=e?1:0,e}function te(t){return Oe(this,t).get(t)}function ee(t){return Oe(this,t).has(t)}function ne(t,e){var n=Oe(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function re(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Xt;++e<n;)this.add(t[e])}function ie(t){return this.__data__.set(t,r),this}function oe(t){return this.__data__.has(t)}function se(t){var e=this.__data__=new Ht(t);this.size=e.size}function ae(){this.__data__=new Ht,this.size=0}function ce(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function ue(t){return this.__data__.get(t)}function le(t){return this.__data__.has(t)}function he(t,e){var r=this.__data__;if(r instanceof Ht){var i=r.__data__;if(!zt||i.length<n-1)return i.push([t,e]),this.size=++r.size,this;r=this.__data__=new Xt(i)}return r.set(t,e),this.size=r.size,this}function fe(t,e){var n=Ne(t),r=!n&&Fe(t),i=!n&&!r&&Ve(t),o=!n&&!r&&!i&&Ge(t),s=n||r||i||o,a=s?tt(t.length,String):[],c=a.length;for(var u in t)!e&&!dt.call(t,u)||s&&("length"==u||i&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||Me(u,c))||a.push(u);return a}function de(t,e){for(var n=t.length;n--;)if(Pe(t[n][0],e))return n;return-1}function _e(t,e,n){var r=e(t);return Ne(t)?r:Y(r,n(t))}function pe(t){return null==t?void 0===t?O:b:Et&&Et in Object(t)?Le(t):Ue(t)}function me(t){return qe(t)&&pe(t)==a}function ve(t,e,n,r,i){return t===e||(null==t||null==e||!qe(t)&&!qe(e)?t!=t&&e!=e:be(t,e,n,r,ve,i))}function be(t,e,n,r,o,s){var u=Ne(t),l=Ne(e),h=u?c:Te(t),f=l?c:Te(e),d=(h=h==a?y:h)==y,_=(f=f==a?y:f)==y,p=h==f;if(p&&Ve(t)){if(!Ve(e))return!1;u=!0,d=!1}if(p&&!d)return s||(s=new se),u||Ge(t)?Ee(t,e,n,r,o,s):je(t,e,h,n,r,o,s);if(!(n&i)){var m=d&&dt.call(t,"__wrapped__"),v=_&&dt.call(e,"__wrapped__");if(m||v){var b=m?t.value():t,g=v?e.value():e;return s||(s=new se),o(b,g,n,r,s)}}return!!p&&(s||(s=new se),xe(t,e,n,r,o,s))}function ye(t){return!(!He(t)||ke(t))&&(De(t)?mt:N).test(Ie(t))}function ge(t){return qe(t)&&We(t.length)&&!!V[pe(t)]}function we(t){if(!$e(t))return At(t);var e=[];for(var n in Object(t))dt.call(t,n)&&"constructor"!=n&&e.push(n);return e}function Ee(t,e,n,r,s,a){var c=n&i,u=t.length,l=e.length;if(u!=l&&!(c&&l>u))return!1;var h=a.get(t);if(h&&a.get(e))return h==e;var f=-1,d=!0,_=n&o?new re:void 0;for(a.set(t,e),a.set(e,t);++f<u;){var p=t[f],m=e[f];if(r)var v=c?r(m,p,f,e,t,a):r(p,m,f,t,e,a);if(void 0!==v){if(v)continue;d=!1;break}if(_){if(!Z(e,(function(t,e){if(!nt(_,e)&&(p===t||s(p,t,n,r,a)))return _.push(e)}))){d=!1;break}}else if(p!==m&&!s(p,m,n,r,a)){d=!1;break}}return a.delete(t),a.delete(e),d}function je(t,e,n,r,s,a,c){switch(n){case S:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case L:return!(t.byteLength!=e.byteLength||!a(new yt(t),new yt(e)));case l:case h:case v:return Pe(+t,+e);case d:return t.name==e.name&&t.message==e.message;case E:case x:return t==e+"";case m:var u=it;case j:var f=r&i;if(u||(u=st),t.size!=e.size&&!f)return!1;var _=c.get(t);if(_)return _==e;r|=o,c.set(t,e);var p=Ee(u(t),u(e),r,s,a,c);return c.delete(t),p;case A:if(Ft)return Ft.call(t)==Ft.call(e)}return!1}function xe(t,e,n,r,o,s){var a=n&i,c=Ae(t),u=c.length;if(u!=Ae(e).length&&!a)return!1;for(var l=u;l--;){var h=c[l];if(!(a?h in e:dt.call(e,h)))return!1}var f=s.get(t);if(f&&s.get(e))return f==e;var d=!0;s.set(t,e),s.set(e,t);for(var _=a;++l<u;){var p=t[h=c[l]],m=e[h];if(r)var v=a?r(m,p,h,e,t,s):r(p,m,h,t,e,s);if(!(void 0===v?p===m||o(p,m,n,r,s):v)){d=!1;break}_||(_="constructor"==h)}if(d&&!_){var b=t.constructor,y=e.constructor;b==y||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof y&&y instanceof y||(d=!1)}return s.delete(t),s.delete(e),d}function Ae(t){return _e(t,Je,Se)}function Oe(t,e){var n=t.__data__;return Ce(e)?n["string"==typeof e?"string":"hash"]:n.map}function ze(t,e){var n=rt(t,e);return ye(n)?n:void 0}function Le(t){var e=dt.call(t,Et),n=t[Et];try{t[Et]=void 0;var r=!0}catch(t){}var i=pt.call(t);return r&&(e?t[Et]=n:delete t[Et]),i}Nt.prototype.clear=Rt,Nt.prototype.delete=Vt,Nt.prototype.get=Bt,Nt.prototype.has=Dt,Nt.prototype.set=Wt,Ht.prototype.clear=qt,Ht.prototype.delete=Gt,Ht.prototype.get=Jt,Ht.prototype.has=Kt,Ht.prototype.set=Qt,Xt.prototype.clear=Yt,Xt.prototype.delete=Zt,Xt.prototype.get=te,Xt.prototype.has=ee,Xt.prototype.set=ne,re.prototype.add=re.prototype.push=ie,re.prototype.has=oe,se.prototype.clear=ae,se.prototype.delete=ce,se.prototype.get=ue,se.prototype.has=le,se.prototype.set=he;var Se=jt?function(t){return null==t?[]:(t=Object(t),X(jt(t),(function(e){return gt.call(t,e)})))}:Ke,Te=pe;function Me(t,e){return!!(e=null==e?s:e)&&("number"==typeof t||R.test(t))&&t>-1&&t%1==0&&t<e}function Ce(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function ke(t){return!!_t&&_t in t}function $e(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||lt)}function Ue(t){return pt.call(t)}function Ie(t){if(null!=t){try{return ft.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Pe(t,e){return t===e||t!=t&&e!=e}(Ot&&Te(new Ot(new ArrayBuffer(1)))!=S||zt&&Te(new zt)!=m||Lt&&Te(Lt.resolve())!=g||St&&Te(new St)!=j||Tt&&Te(new Tt)!=z)&&(Te=function(t){var e=pe(t),n=e==y?t.constructor:void 0,r=n?Ie(n):"";if(r)switch(r){case Ct:return S;case kt:return m;case $t:return g;case Ut:return j;case It:return z}return e});var Fe=me(function(){return arguments}())?me:function(t){return qe(t)&&dt.call(t,"callee")&&!gt.call(t,"callee")},Ne=Array.isArray;function Re(t){return null!=t&&We(t.length)&&!De(t)}var Ve=xt||Qe;function Be(t,e){return ve(t,e)}function De(t){if(!He(t))return!1;var e=pe(t);return e==_||e==p||e==u||e==w}function We(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=s}function He(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function qe(t){return null!=t&&"object"==typeof t}var Ge=Q?et(Q):ge;function Je(t){return Re(t)?fe(t):we(t)}function Ke(){return[]}function Qe(){return!1}t.exports=Be}));class p{_parentElement;_childrenElements=new Set;$parent;$children=new Set;_anchor;_conditional;_activeElement;_vars=[];_reactiveVars=[];_updateListeners=[];constructor(t,e){this._anchor=document.createTextNode(""),this._conditional=e,this._reactiveVars=t}async update(){let t=await this._conditional(this._vars);null!=t&&null==this._activeElement?(await t.mount(this._anchor,!0),await t.set_parent(this),this._activeElement=t):null==t&&null==t&&void 0!==this._activeElement&&(this._activeElement.destroy(),this._activeElement=void 0)}set_parent(t){this._parentElement=t}remove_child(){}async mount(t,e=!1){t.appendChild(this._anchor);for(let t in this._reactiveVars)this._vars[t]=this._reactiveVars[t].get(),this._updateListeners.push(this._reactiveVars[t].subscribe(((e,n)=>{this._vars[t]=e,this.update()}).bind(this)));await this.update()}async destroy(){for(let t in this._updateListeners)this._updateListeners[t]();this._anchor.remove(),this._activeElement&&this._activeElement.destroy(),this._parentElement&&this._parentElement.remove_child(this)}}function m(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=n.length,i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*r));return e}function v(t){let e,n=new Set,r=t;function i(t){if(!_(t,r)){for(const e of n)e(t,r);e=r,r=t}}function o(t){return n.add(t),()=>{n.delete(t)}}function s(){return r}function a(){return e}return{id:m(5),set:i,subscribe:o,get:s,get_last:a}}function b(){return document.createTextNode("")}function y(t={}){return{name:"cosmos",transform:(t,e)=>t}}e.Compiler=y,e.Component=n,e.Conditional=p,e.Element=h,e.anchor=b,e.beforeMount=s,e.beforeUnmount=c,e.get_current_component=o,e.makeid=m,e.onMount=a,e.onRender=l,e.onUnmount=u,e.set_current_component=i,e.variable=v,Object.defineProperty(e,"__esModule",{value:!0})}(n)},e(n={exports:{}},n.exports),n.exports);class i extends r.Component{instance(){let t=r.variable(0),e=100;t.set(e++),setInterval((()=>{t.set(e++)}),1e3),r.onMount((()=>{console.log("Mounted")})),r.onRender((()=>this.createElement("div",null,this.createElement("div",null,"This is inside a nested component."),t," ",this.createElement("br",null),t," ",this.createElement("br",null))))}}class o extends r.Component{async instance(){let t=r.variable(1),e=r.variable("color: blue;");r.variable(this.createElement("p",null,"Test2")),setInterval((()=>{t.set(t.get()+1)}),1e3),t.subscribe(((t,n)=>{t>10&&e.get()!==e.get_last()&&e.set("color: green")})),r.onMount((()=>{console.log("Mounted")})),r.onRender((()=>{let e=r.variable("\n\t\t\t\t* {\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tletter-spacing: -0.05em !important;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t#app {\n\t\t\t\t\tmin-height: 100vh;\n\t\t\t\t\tmargin:0;\n\t\t\t\t\twidth:100%;\n\t\t\t\t}\n\n\t\t\t\tbody {\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\n\t\t\t\tblockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tbody {\n\t\t\t\t\tfont-family: 'Inter', sans-serif;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tmin-height: 100vh;\n\t\t\t\t}\n\n\t\t\t\thtml, body {\n\t\t\t\t\twidth:100%;\n\t\t\t\t}\n\n\t\t\t\t.test {\n\t\t\t\t\tcolor: green;\n\t\t\t\t}\n\t\t\t");return this.createElement("div",{id:"app",style:"text-align:center;"},this.createElement("style",null,e),this.createElement("div",{style:"width:100%;text-align:center;height:50px;text-align:center;box-shadow: 0px 0px 18px 3px rgba(0,0,0,0.55);margin-bottom:20px;"},this.createElement("p",{style:"height:100%;"},"Header")),this.createElement("h1",{onClick:function(){alert("Test")}},"Click me!"),this.createElement("h2",{class:"test"},"Test ",t,"... ",this.createElement("span",null,t)),t," ",this.createElement("br",null),this.condition([t],(e=>{if(e[0]>=0&&e[0]<=2e4)return this.createElement("h1",null,"Reactivity Test ",t,this.condition([t],(t=>{if(t[0]>=100&&t[0]<=200||t[0]>=400&&t[0]<=600)return this.createElement(i,null)})),this.createElement("br",null))})),t," ",this.createElement("br",null),t," ",this.createElement("br",null),t," ",this.createElement("br",null),t," ",this.createElement("br",null),t," ",this.createElement("br",null))}))}}new o({mount:document.body,props:{bruh:"moment"}})}();
//# sourceMappingURL=bundle.js.map
