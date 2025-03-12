(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=i(a);fetch(a.href,l)}})();var An={},di={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),Ms=Symbol.for("react.strict_mode"),Us=Symbol.for("react.profiler"),xs=Symbol.for("react.provider"),Fs=Symbol.for("react.context"),js=Symbol.for("react.forward_ref"),Bs=Symbol.for("react.suspense"),Vs=Symbol.for("react.memo"),Hs=Symbol.for("react.lazy"),Or=Symbol.iterator;function $s(n){return n===null||typeof n!="object"?null:(n=Or&&n[Or]||n["@@iterator"],typeof n=="function"?n:null)}var pi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gi=Object.assign,mi={};function Dt(n,e,i){this.props=n,this.context=e,this.refs=mi,this.updater=i||pi}Dt.prototype.isReactComponent={};Dt.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Dt.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function yi(){}yi.prototype=Dt.prototype;function Sn(n,e,i){this.props=n,this.context=e,this.refs=mi,this.updater=i||pi}var bn=Sn.prototype=new yi;bn.constructor=Sn;gi(bn,Dt.prototype);bn.isPureReactComponent=!0;var Dr=Array.isArray,vi=Object.prototype.hasOwnProperty,Cn={current:null},_i={key:!0,ref:!0,__self:!0,__source:!0};function Ei(n,e,i){var o,a={},l=null,d=null;if(e!=null)for(o in e.ref!==void 0&&(d=e.ref),e.key!==void 0&&(l=""+e.key),e)vi.call(e,o)&&!_i.hasOwnProperty(o)&&(a[o]=e[o]);var _=arguments.length-2;if(_===1)a.children=i;else if(1<_){for(var w=Array(_),I=0;I<_;I++)w[I]=arguments[I+2];a.children=w}if(n&&n.defaultProps)for(o in _=n.defaultProps,_)a[o]===void 0&&(a[o]=_[o]);return{$$typeof:ne,type:n,key:l,ref:d,props:a,_owner:Cn.current}}function zs(n,e){return{$$typeof:ne,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Rn(n){return typeof n=="object"&&n!==null&&n.$$typeof===ne}function Gs(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(i){return e[i]})}var Lr=/\/+/g;function ln(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Gs(""+n.key):e.toString(36)}function Ae(n,e,i,o,a){var l=typeof n;(l==="undefined"||l==="boolean")&&(n=null);var d=!1;if(n===null)d=!0;else switch(l){case"string":case"number":d=!0;break;case"object":switch(n.$$typeof){case ne:case Ds:d=!0}}if(d)return d=n,a=a(d),n=o===""?"."+ln(d,0):o,Dr(a)?(i="",n!=null&&(i=n.replace(Lr,"$&/")+"/"),Ae(a,e,i,"",function(I){return I})):a!=null&&(Rn(a)&&(a=zs(a,i+(!a.key||d&&d.key===a.key?"":(""+a.key).replace(Lr,"$&/")+"/")+n)),e.push(a)),1;if(d=0,o=o===""?".":o+":",Dr(n))for(var _=0;_<n.length;_++){l=n[_];var w=o+ln(l,_);d+=Ae(l,e,i,w,a)}else if(w=$s(n),typeof w=="function")for(n=w.call(n),_=0;!(l=n.next()).done;)l=l.value,w=o+ln(l,_++),d+=Ae(l,e,i,w,a);else if(l==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return d}function we(n,e,i){if(n==null)return n;var o=[],a=0;return Ae(n,o,"","",function(l){return e.call(i,l,a++)}),o}function Ks(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(i){(n._status===0||n._status===-1)&&(n._status=1,n._result=i)},function(i){(n._status===0||n._status===-1)&&(n._status=2,n._result=i)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var X={current:null},Se={transition:null},Xs={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:Se,ReactCurrentOwner:Cn};function wi(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:we,forEach:function(n,e,i){we(n,function(){e.apply(this,arguments)},i)},count:function(n){var e=0;return we(n,function(){e++}),e},toArray:function(n){return we(n,function(e){return e})||[]},only:function(n){if(!Rn(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};A.Component=Dt;A.Fragment=Ls;A.Profiler=Us;A.PureComponent=Sn;A.StrictMode=Ms;A.Suspense=Bs;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xs;A.act=wi;A.cloneElement=function(n,e,i){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var o=gi({},n.props),a=n.key,l=n.ref,d=n._owner;if(e!=null){if(e.ref!==void 0&&(l=e.ref,d=Cn.current),e.key!==void 0&&(a=""+e.key),n.type&&n.type.defaultProps)var _=n.type.defaultProps;for(w in e)vi.call(e,w)&&!_i.hasOwnProperty(w)&&(o[w]=e[w]===void 0&&_!==void 0?_[w]:e[w])}var w=arguments.length-2;if(w===1)o.children=i;else if(1<w){_=Array(w);for(var I=0;I<w;I++)_[I]=arguments[I+2];o.children=_}return{$$typeof:ne,type:n.type,key:a,ref:l,props:o,_owner:d}};A.createContext=function(n){return n={$$typeof:Fs,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:xs,_context:n},n.Consumer=n};A.createElement=Ei;A.createFactory=function(n){var e=Ei.bind(null,n);return e.type=n,e};A.createRef=function(){return{current:null}};A.forwardRef=function(n){return{$$typeof:js,render:n}};A.isValidElement=Rn;A.lazy=function(n){return{$$typeof:Hs,_payload:{_status:-1,_result:n},_init:Ks}};A.memo=function(n,e){return{$$typeof:Vs,type:n,compare:e===void 0?null:e}};A.startTransition=function(n){var e=Se.transition;Se.transition={};try{n()}finally{Se.transition=e}};A.unstable_act=wi;A.useCallback=function(n,e){return X.current.useCallback(n,e)};A.useContext=function(n){return X.current.useContext(n)};A.useDebugValue=function(){};A.useDeferredValue=function(n){return X.current.useDeferredValue(n)};A.useEffect=function(n,e){return X.current.useEffect(n,e)};A.useId=function(){return X.current.useId()};A.useImperativeHandle=function(n,e,i){return X.current.useImperativeHandle(n,e,i)};A.useInsertionEffect=function(n,e){return X.current.useInsertionEffect(n,e)};A.useLayoutEffect=function(n,e){return X.current.useLayoutEffect(n,e)};A.useMemo=function(n,e){return X.current.useMemo(n,e)};A.useReducer=function(n,e,i){return X.current.useReducer(n,e,i)};A.useRef=function(n){return X.current.useRef(n)};A.useState=function(n){return X.current.useState(n)};A.useSyncExternalStore=function(n,e,i){return X.current.useSyncExternalStore(n,e,i)};A.useTransition=function(){return X.current.useTransition()};A.version="18.3.1";di.exports=A;var Ws=di.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Js=Ws,qs=Symbol.for("react.element"),Ys=Symbol.for("react.fragment"),Qs=Object.prototype.hasOwnProperty,Zs=Js.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,to={key:!0,ref:!0,__self:!0,__source:!0};function Ti(n,e,i){var o,a={},l=null,d=null;i!==void 0&&(l=""+i),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(d=e.ref);for(o in e)Qs.call(e,o)&&!to.hasOwnProperty(o)&&(a[o]=e[o]);if(n&&n.defaultProps)for(o in e=n.defaultProps,e)a[o]===void 0&&(a[o]=e[o]);return{$$typeof:qs,type:n,key:l,ref:d,props:a,_owner:Zs.current}}An.Fragment=Ys;An.jsx=Ti;An.jsxs=Ti;const eo=()=>{};var Mr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=function(n){const e=[];let i=0;for(let o=0;o<n.length;o++){let a=n.charCodeAt(o);a<128?e[i++]=a:a<2048?(e[i++]=a>>6|192,e[i++]=a&63|128):(a&64512)===55296&&o+1<n.length&&(n.charCodeAt(o+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++o)&1023),e[i++]=a>>18|240,e[i++]=a>>12&63|128,e[i++]=a>>6&63|128,e[i++]=a&63|128):(e[i++]=a>>12|224,e[i++]=a>>6&63|128,e[i++]=a&63|128)}return e},no=function(n){const e=[];let i=0,o=0;for(;i<n.length;){const a=n[i++];if(a<128)e[o++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[i++];e[o++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[i++],d=n[i++],_=n[i++],w=((a&7)<<18|(l&63)<<12|(d&63)<<6|_&63)-65536;e[o++]=String.fromCharCode(55296+(w>>10)),e[o++]=String.fromCharCode(56320+(w&1023))}else{const l=n[i++],d=n[i++];e[o++]=String.fromCharCode((a&15)<<12|(l&63)<<6|d&63)}}return e.join("")},Ai={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let a=0;a<n.length;a+=3){const l=n[a],d=a+1<n.length,_=d?n[a+1]:0,w=a+2<n.length,I=w?n[a+2]:0,L=l>>2,M=(l&3)<<4|_>>4;let N=(_&15)<<2|I>>6,z=I&63;w||(z=64,d||(N=64)),o.push(i[L],i[M],i[N],i[z])}return o.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ii(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):no(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let a=0;a<n.length;){const l=i[n.charAt(a++)],_=a<n.length?i[n.charAt(a)]:0;++a;const I=a<n.length?i[n.charAt(a)]:64;++a;const M=a<n.length?i[n.charAt(a)]:64;if(++a,l==null||_==null||I==null||M==null)throw new ro;const N=l<<2|_>>4;if(o.push(N),I!==64){const z=_<<4&240|I>>2;if(o.push(z),M!==64){const C=I<<6&192|M;o.push(C)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ro extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const io=function(n){const e=Ii(n);return Ai.encodeByteArray(e,!0)},Si=function(n){return io(n).replace(/\./g,"")},bi=function(n){try{return Ai.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=()=>so().__FIREBASE_DEFAULTS__,ao=()=>{if(typeof process>"u"||typeof Mr>"u")return;const n=Mr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ho=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bi(n[1]);return e&&JSON.parse(e)},uo=()=>{try{return eo()||oo()||ao()||ho()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lo=n=>{var e;return(e=uo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function co(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function fo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function po(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function go(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mo(){try{return typeof indexedDB=="object"}catch{return!1}}function yo(){return new Promise((n,e)=>{try{let i=!0;const o="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(o);a.onsuccess=()=>{a.result.close(),i||self.indexedDB.deleteDatabase(o),n(!0)},a.onupgradeneeded=()=>{i=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(i){e(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="FirebaseError";class mt extends Error{constructor(e,i,o){super(i),this.code=e,this.customData=o,this.name=vo,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,re.prototype.create)}}class re{constructor(e,i,o){this.service=e,this.serviceName=i,this.errors=o}create(e,...i){const o=i[0]||{},a=`${this.service}/${e}`,l=this.errors[e],d=l?_o(l,o):"Error",_=`${this.serviceName}: ${d} (${a}).`;return new mt(a,_,o)}}function _o(n,e){return n.replace(Eo,(i,o)=>{const a=e[o];return a!=null?String(a):`<${o}?>`})}const Eo=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n){const e=[];for(const[i,o]of Object.entries(n))Array.isArray(o)?o.forEach(a=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(o));return e.length?"&"+e.join("&"):""}function wo(n,e){const i=new To(n,e);return i.subscribe.bind(i)}class To{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(o=>{this.error(o)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,o){let a;if(e===void 0&&i===void 0&&o===void 0)throw new Error("Missing Observer.");Io(e,["next","error","complete"])?a=e:a={next:e,error:i,complete:o},a.next===void 0&&(a.next=cn),a.error===void 0&&(a.error=cn),a.complete===void 0&&(a.complete=cn);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Io(n,e){if(typeof n!="object"||n===null)return!1;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}function cn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n){return n&&n._delegate?n._delegate:n}class Nt{constructor(e,i,o){this.name=e,this.instanceFactory=i,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const Ao={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},So=P.INFO,bo={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Co=(n,e,...i)=>{if(e<n.logLevel)return;const o=new Date().toISOString(),a=bo[e];if(a)console[a](`[${o}]  ${n.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pn{constructor(e){this.name=e,this._logLevel=So,this._logHandler=Co,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ao[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const Ro=(n,e)=>e.some(i=>n instanceof i);let Ur,xr;function Po(){return Ur||(Ur=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ko(){return xr||(xr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ri=new WeakMap,_n=new WeakMap,Pi=new WeakMap,fn=new WeakMap,kn=new WeakMap;function No(n){const e=new Promise((i,o)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",d)},l=()=>{i(gt(n.result)),a()},d=()=>{o(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",d)});return e.then(i=>{i instanceof IDBCursor&&Ri.set(i,n)}).catch(()=>{}),kn.set(e,n),e}function Oo(n){if(_n.has(n))return;const e=new Promise((i,o)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",d),n.removeEventListener("abort",d)},l=()=>{i(),a()},d=()=>{o(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",d),n.addEventListener("abort",d)});_n.set(n,e)}let En={get(n,e,i){if(n instanceof IDBTransaction){if(e==="done")return _n.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Pi.get(n);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return gt(n[e])},set(n,e,i){return n[e]=i,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Do(n){En=n(En)}function Lo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const o=n.call(dn(this),e,...i);return Pi.set(o,e.sort?e.sort():[e]),gt(o)}:ko().includes(n)?function(...e){return n.apply(dn(this),e),gt(Ri.get(this))}:function(...e){return gt(n.apply(dn(this),e))}}function Mo(n){return typeof n=="function"?Lo(n):(n instanceof IDBTransaction&&Oo(n),Ro(n,Po())?new Proxy(n,En):n)}function gt(n){if(n instanceof IDBRequest)return No(n);if(fn.has(n))return fn.get(n);const e=Mo(n);return e!==n&&(fn.set(n,e),kn.set(e,n)),e}const dn=n=>kn.get(n);function Uo(n,e,{blocked:i,upgrade:o,blocking:a,terminated:l}={}){const d=indexedDB.open(n,e),_=gt(d);return o&&d.addEventListener("upgradeneeded",w=>{o(gt(d.result),w.oldVersion,w.newVersion,gt(d.transaction),w)}),i&&d.addEventListener("blocked",w=>i(w.oldVersion,w.newVersion,w)),_.then(w=>{l&&w.addEventListener("close",()=>l()),a&&w.addEventListener("versionchange",I=>a(I.oldVersion,I.newVersion,I))}).catch(()=>{}),_}const xo=["get","getKey","getAll","getAllKeys","count"],Fo=["put","add","delete","clear"],pn=new Map;function Fr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(pn.get(e))return pn.get(e);const i=e.replace(/FromIndex$/,""),o=e!==i,a=Fo.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(a||xo.includes(i)))return;const l=async function(d,..._){const w=this.transaction(d,a?"readwrite":"readonly");let I=w.store;return o&&(I=I.index(_.shift())),(await Promise.all([I[i](..._),a&&w.done]))[0]};return pn.set(e,l),l}Do(n=>({...n,get:(e,i,o)=>Fr(e,i)||n.get(e,i,o),has:(e,i)=>!!Fr(e,i)||n.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Bo(i)){const o=i.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(i=>i).join(" ")}}function Bo(n){const e=n.getComponent();return e?.type==="VERSION"}const wn="@firebase/app",jr="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Pn("@firebase/app"),Vo="@firebase/app-compat",Ho="@firebase/analytics-compat",$o="@firebase/analytics",zo="@firebase/app-check-compat",Go="@firebase/app-check",Ko="@firebase/auth",Xo="@firebase/auth-compat",Wo="@firebase/database",Jo="@firebase/data-connect",qo="@firebase/database-compat",Yo="@firebase/functions",Qo="@firebase/functions-compat",Zo="@firebase/installations",ta="@firebase/installations-compat",ea="@firebase/messaging",na="@firebase/messaging-compat",ra="@firebase/performance",ia="@firebase/performance-compat",sa="@firebase/remote-config",oa="@firebase/remote-config-compat",aa="@firebase/storage",ha="@firebase/storage-compat",ua="@firebase/firestore",la="@firebase/vertexai",ca="@firebase/firestore-compat",fa="firebase",da="11.4.0",pa={[wn]:"fire-core",[Vo]:"fire-core-compat",[$o]:"fire-analytics",[Ho]:"fire-analytics-compat",[Go]:"fire-app-check",[zo]:"fire-app-check-compat",[Ko]:"fire-auth",[Xo]:"fire-auth-compat",[Wo]:"fire-rtdb",[Jo]:"fire-data-connect",[qo]:"fire-rtdb-compat",[Yo]:"fire-fn",[Qo]:"fire-fn-compat",[Zo]:"fire-iid",[ta]:"fire-iid-compat",[ea]:"fire-fcm",[na]:"fire-fcm-compat",[ra]:"fire-perf",[ia]:"fire-perf-compat",[sa]:"fire-rc",[oa]:"fire-rc-compat",[aa]:"fire-gcs",[ha]:"fire-gcs-compat",[ua]:"fire-fst",[ca]:"fire-fst-compat",[la]:"fire-vertex","fire-js":"fire-js",[fa]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new Map,ma=new Map,Br=new Map;function Vr(n,e){try{n.container.addComponent(e)}catch(i){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,i)}}function Ot(n){const e=n.name;if(Br.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;Br.set(e,n);for(const i of ga.values())Vr(i,n);for(const i of ma.values())Vr(i,n);return!0}function wt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new re("app","Firebase",ya);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=da;function It(n,e,i){var o;let a=(o=pa[n])!==null&&o!==void 0?o:n;i&&(a+=`-${i}`);const l=a.match(/\s|\//),d=e.match(/\s|\//);if(l||d){const _=[`Unable to register library "${a}" with version "${e}":`];l&&_.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&d&&_.push("and"),d&&_.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(_.join(" "));return}Ot(new Nt(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="firebase-heartbeat-database",_a=1,ee="firebase-heartbeat-store";let gn=null;function ki(){return gn||(gn=Uo(va,_a,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ee)}catch(i){console.warn(i)}}}}).catch(n=>{throw Nn.create("idb-open",{originalErrorMessage:n.message})})),gn}async function Ea(n){try{const i=(await ki()).transaction(ee),o=await i.objectStore(ee).get(Ni(n));return await i.done,o}catch(e){if(e instanceof mt)ht.warn(e.message);else{const i=Nn.create("idb-get",{originalErrorMessage:e?.message});ht.warn(i.message)}}}async function Hr(n,e){try{const o=(await ki()).transaction(ee,"readwrite");await o.objectStore(ee).put(e,Ni(n)),await o.done}catch(i){if(i instanceof mt)ht.warn(i.message);else{const o=Nn.create("idb-set",{originalErrorMessage:i?.message});ht.warn(o.message)}}}function Ni(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=1024,Ta=30;class Ia{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Sa(i),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,i;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=$r();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(d=>d.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>Ta){const d=ba(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){ht.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=$r(),{heartbeatsToSend:o,unsentEntries:a}=Aa(this._heartbeatsCache.heartbeats),l=Si(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=i,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(i){return ht.warn(i),""}}}function $r(){return new Date().toISOString().substring(0,10)}function Aa(n,e=wa){const i=[];let o=n.slice();for(const a of n){const l=i.find(d=>d.agent===a.agent);if(l){if(l.dates.push(a.date),zr(i)>e){l.dates.pop();break}}else if(i.push({agent:a.agent,dates:[a.date]}),zr(i)>e){i.pop();break}o=o.slice(1)}return{heartbeatsToSend:i,unsentEntries:o}}class Sa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mo()?yo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await Ea(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const a=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const a=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function zr(n){return Si(JSON.stringify({version:2,heartbeats:n})).length}function ba(n){if(n.length===0)return-1;let e=0,i=n[0].date;for(let o=1;o<n.length;o++)n[o].date<i&&(i=n[o].date,e=o);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n){Ot(new Nt("platform-logger",e=>new jo(e),"PRIVATE")),Ot(new Nt("heartbeat",e=>new Ia(e),"PRIVATE")),It(wn,jr,n),It(wn,jr,"esm2017"),It("fire-js","")}Ca("");function Oi(n,e){var i={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(i[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(n);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(n,o[a])&&(i[o[a]]=n[o[a]]);return i}function Di(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ra=Di,Li=new re("auth","Firebase",Di());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new Pn("@firebase/auth");function Pa(n,...e){Re.logLevel<=P.WARN&&Re.warn(`Auth (${Le}): ${n}`,...e)}function be(n,...e){Re.logLevel<=P.ERROR&&Re.error(`Auth (${Le}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(n,...e){throw On(n,...e)}function Mi(n,...e){return On(n,...e)}function Ui(n,e,i){const o=Object.assign(Object.assign({},Ra()),{[e]:i});return new re("auth","Firebase",o).create(e,{appName:n.name})}function Ce(n){return Ui(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function On(n,...e){if(typeof n!="string"){const i=e[0],o=[...e.slice(1)];return o[0]&&(o[0].appName=n.name),n._errorFactory.create(i,...o)}return Li.create(n,...e)}function R(n,e,...i){if(!n)throw On(e,...i)}function Yt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw be(e),new Error(e)}function Pe(n,e){n||Yt(e)}function ka(){return Kr()==="http:"||Kr()==="https:"}function Kr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ka()||po()||"connection"in navigator)?navigator.onLine:!0}function Oa(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,i){this.shortDelay=e,this.longDelay=i,Pe(i>e,"Short delay should be less than long delay!"),this.isMobile=co()||go()}get(){return Na()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n,e){Pe(n.emulator,"Emulator should always be set here");const{url:i}=n.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{static initialize(e,i,o){this.fetchImpl=e,i&&(this.headersImpl=i),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new ie(3e4,6e4);function Fi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Me(n,e,i,o,a={}){return ji(n,a,async()=>{let l={},d={};o&&(e==="GET"?d=o:l={body:JSON.stringify(o)});const _=Ci(Object.assign({key:n.config.apiKey},d)).slice(1),w=await n._getAdditionalHeaders();w["Content-Type"]="application/json",n.languageCode&&(w["X-Firebase-Locale"]=n.languageCode);const I=Object.assign({method:e,headers:w},l);return fo()||(I.referrerPolicy="no-referrer"),xi.fetch()(Bi(n,n.config.apiHost,i,_),I)})}async function ji(n,e,i){n._canInitEmulator=!1;const o=Object.assign(Object.assign({},La),e);try{const a=new Ua(n),l=await Promise.race([i(),a.promise]);a.clearNetworkTimeout();const d=await l.json();if("needConfirmation"in d)throw Te(n,"account-exists-with-different-credential",d);if(l.ok&&!("errorMessage"in d))return d;{const _=l.ok?d.errorMessage:d.error.message,[w,I]=_.split(" : ");if(w==="FEDERATED_USER_ID_ALREADY_LINKED")throw Te(n,"credential-already-in-use",d);if(w==="EMAIL_EXISTS")throw Te(n,"email-already-in-use",d);if(w==="USER_DISABLED")throw Te(n,"user-disabled",d);const L=o[w]||w.toLowerCase().replace(/[_\s]+/g,"-");if(I)throw Ui(n,L,I);Gr(n,L)}}catch(a){if(a instanceof mt)throw a;Gr(n,"network-request-failed",{message:String(a)})}}function Bi(n,e,i,o){const a=`${e}${i}?${o}`;return n.config.emulator?Da(n.config,a):`${n.config.apiScheme}://${a}`}class Ua{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,o)=>{this.timer=setTimeout(()=>o(Mi(this.auth,"network-request-failed")),Ma.get())})}}function Te(n,e,i){const o={appName:n.name};i.email&&(o.email=i.email),i.phoneNumber&&(o.phoneNumber=i.phoneNumber);const a=Mi(n,e,o);return a.customData._tokenResponse=i,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(n,e){return Me(n,"POST","/v1/accounts:delete",e)}async function Vi(n,e){return Me(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fa(n,e=!1){const i=De(n),o=await i.getIdToken(e),a=Hi(o);R(a&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,d=l?.sign_in_provider;return{claims:a,token:o,authTime:Qt(mn(a.auth_time)),issuedAtTime:Qt(mn(a.iat)),expirationTime:Qt(mn(a.exp)),signInProvider:d||null,signInSecondFactor:l?.sign_in_second_factor||null}}function mn(n){return Number(n)*1e3}function Hi(n){const[e,i,o]=n.split(".");if(e===void 0||i===void 0||o===void 0)return be("JWT malformed, contained fewer than 3 sections"),null;try{const a=bi(i);return a?JSON.parse(a):(be("Failed to decode base64 JWT payload"),null)}catch(a){return be("Caught error parsing JWT payload as JSON",a?.toString()),null}}function Xr(n){const e=Hi(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(n,e,i=!1){if(i)return e;try{return await e}catch(o){throw o instanceof mt&&ja(o)&&n.auth.currentUser===n&&await n.auth.signOut(),o}}function ja({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const o=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),o}else{this.errorBackoff=3e4;const a=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qt(this.lastLoginAt),this.creationTime=Qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(n){var e;const i=n.auth,o=await n.getIdToken(),a=await Tn(n,Vi(i,{idToken:o}));R(a?.users.length,i,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const d=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?$i(l.providerUserInfo):[],_=Ha(n.providerData,d),w=n.isAnonymous,I=!(n.email&&l.passwordHash)&&!_?.length,L=w?I:!1,M={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:_,metadata:new In(l.createdAt,l.lastLoginAt),isAnonymous:L};Object.assign(n,M)}async function Va(n){const e=De(n);await ke(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ha(n,e){return[...n.filter(o=>!e.some(a=>a.providerId===o.providerId)),...e]}function $i(n){return n.map(e=>{var{providerId:i}=e,o=Oi(e,["providerId"]);return{providerId:i,uid:o.rawId||"",displayName:o.displayName||null,email:o.email||null,phoneNumber:o.phoneNumber||null,photoURL:o.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $a(n,e){const i=await ji(n,{},async()=>{const o=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,d=Bi(n,a,"/v1/token",`key=${l}`),_=await n._getAdditionalHeaders();return _["Content-Type"]="application/x-www-form-urlencoded",xi.fetch()(d,{method:"POST",headers:_,body:o})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function za(n,e){return Me(n,"POST","/v2/accounts:revokeToken",Fi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){R(e.length!==0,"internal-error");const i=Xr(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:o,refreshToken:a,expiresIn:l}=await $a(e,i);this.updateTokensAndExpiration(o,a,Number(l))}updateTokensAndExpiration(e,i,o){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(e,i){const{refreshToken:o,accessToken:a,expirationTime:l}=i,d=new Pt;return o&&(R(typeof o=="string","internal-error",{appName:e}),d.refreshToken=o),a&&(R(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),l&&(R(typeof l=="number","internal-error",{appName:e}),d.expirationTime=l),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pt,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pt{constructor(e){var{uid:i,auth:o,stsTokenManager:a}=e,l=Oi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ba(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=o,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new In(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const i=await Tn(this,this.stsTokenManager.getToken(this.auth,e));return R(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return Fa(this,e)}reload(){return Va(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let o=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),o=!0),i&&await ke(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(Ce(this.auth));const e=await this.getIdToken();return await Tn(this,xa(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var o,a,l,d,_,w,I,L;const M=(o=i.displayName)!==null&&o!==void 0?o:void 0,N=(a=i.email)!==null&&a!==void 0?a:void 0,z=(l=i.phoneNumber)!==null&&l!==void 0?l:void 0,C=(d=i.photoURL)!==null&&d!==void 0?d:void 0,x=(_=i.tenantId)!==null&&_!==void 0?_:void 0,D=(w=i._redirectEventId)!==null&&w!==void 0?w:void 0,it=(I=i.createdAt)!==null&&I!==void 0?I:void 0,J=(L=i.lastLoginAt)!==null&&L!==void 0?L:void 0,{uid:j,emailVerified:Q,isAnonymous:yt,providerData:W,stsTokenManager:m}=i;R(j&&m,e,"internal-error");const u=Pt.fromJSON(this.name,m);R(typeof j=="string",e,"internal-error"),dt(M,e.name),dt(N,e.name),R(typeof Q=="boolean",e,"internal-error"),R(typeof yt=="boolean",e,"internal-error"),dt(z,e.name),dt(C,e.name),dt(x,e.name),dt(D,e.name),dt(it,e.name),dt(J,e.name);const f=new pt({uid:j,auth:e,email:N,emailVerified:Q,displayName:M,isAnonymous:yt,photoURL:C,phoneNumber:z,tenantId:x,stsTokenManager:u,createdAt:it,lastLoginAt:J});return W&&Array.isArray(W)&&(f.providerData=W.map(p=>Object.assign({},p))),D&&(f._redirectEventId=D),f}static async _fromIdTokenResponse(e,i,o=!1){const a=new Pt;a.updateFromServerResponse(i);const l=new pt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o});return await ke(l),l}static async _fromGetAccountInfoResponse(e,i,o){const a=i.users[0];R(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?$i(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!l?.length,_=new Pt;_.updateFromIdToken(o);const w=new pt({uid:a.localId,auth:e,stsTokenManager:_,isAnonymous:d}),I={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new In(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(w,I),w}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Map;function Tt(n){Pe(n instanceof Function,"Expected a class definition");let e=Wr.get(n);return e?(Pe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wr.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}zi.type="NONE";const Jr=zi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n,e,i){return`firebase:${n}:${e}:${i}`}class kt{constructor(e,i,o){this.persistence=e,this.auth=i,this.userKey=o;const{config:a,name:l}=this.auth;this.fullUserKey=yn(this.userKey,a.apiKey,l),this.fullPersistenceKey=yn("persistence",a.apiKey,l),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,o="authUser"){if(!i.length)return new kt(Tt(Jr),e,o);const a=(await Promise.all(i.map(async I=>{if(await I._isAvailable())return I}))).filter(I=>I);let l=a[0]||Tt(Jr);const d=yn(o,e.config.apiKey,e.name);let _=null;for(const I of i)try{const L=await I._get(d);if(L){const M=pt._fromJSON(e,L);I!==l&&(_=M),l=I;break}}catch{}const w=a.filter(I=>I._shouldAllowMigration);return!l._shouldAllowMigration||!w.length?new kt(l,e,o):(l=w[0],_&&await l._set(d,_.toJSON()),await Promise.all(i.map(async I=>{if(I!==l)try{await I._remove(d)}catch{}})),new kt(l,e,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ga(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qa(e))return"Blackberry";if(Ya(e))return"Webos";if(Ka(e))return"Safari";if((e.includes("chrome/")||Xa(e))&&!e.includes("edge/"))return"Chrome";if(Ja(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=n.match(i);if(o?.length===2)return o[1]}return"Other"}function Ga(n=rt()){return/firefox\//i.test(n)}function Ka(n=rt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xa(n=rt()){return/crios\//i.test(n)}function Wa(n=rt()){return/iemobile/i.test(n)}function Ja(n=rt()){return/android/i.test(n)}function qa(n=rt()){return/blackberry/i.test(n)}function Ya(n=rt()){return/webos/i.test(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n,e=[]){let i;switch(n){case"Browser":i=qr(rt());break;case"Worker":i=`${qr(rt())}-${n}`;break;default:i=n}const o=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${Le}/${o}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const o=l=>new Promise((d,_)=>{try{const w=e(l);d(w)}catch(w){_(w)}});o.onAbort=i,this.queue.push(o);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const o of this.queue)await o(e),o.onAbort&&i.push(o.onAbort)}catch(o){i.reverse();for(const a of i)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(n,e={}){return Me(n,"GET","/v2/passwordPolicy",Fi(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=6;class eh{constructor(e){var i,o,a,l;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=d.minPasswordLength)!==null&&i!==void 0?i:th,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(o=e.allowedNonAlphanumericCharacters)===null||o===void 0?void 0:o.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,o,a,l,d,_;const w={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,w),this.validatePasswordCharacterOptions(e,w),w.isValid&&(w.isValid=(i=w.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),w.isValid&&(w.isValid=(o=w.meetsMaxPasswordLength)!==null&&o!==void 0?o:!0),w.isValid&&(w.isValid=(a=w.containsLowercaseLetter)!==null&&a!==void 0?a:!0),w.isValid&&(w.isValid=(l=w.containsUppercaseLetter)!==null&&l!==void 0?l:!0),w.isValid&&(w.isValid=(d=w.containsNumericCharacter)!==null&&d!==void 0?d:!0),w.isValid&&(w.isValid=(_=w.containsNonAlphanumericCharacter)!==null&&_!==void 0?_:!0),w}validatePasswordLengthOptions(e,i){const o=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;o&&(i.meetsMinPasswordLength=e.length>=o),a&&(i.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let o;for(let a=0;a<e.length;a++)o=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(i,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(e,i,o,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,i,o,a){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=o,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yr(this),this.idTokenSubscription=new Yr(this),this.beforeStateQueue=new Qa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Li,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Tt(i)),this._initializationPromise=this.queue(async()=>{var o,a;if(!this._deleted&&(this.persistenceManager=await kt.create(this,e),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Vi(this,{idToken:e}),o=await pt._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(o)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(wt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(_=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(_,_))}):this.directlySetCurrentUser(null)}const o=await this.assertedPersistence.getCurrentUser();let a=o,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,_=a?._redirectEventId,w=await this.tryRedirectSignIn(e);(!d||d===_)&&w?.user&&(a=w.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=o,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await ke(e)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Oa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(Ce(this));const i=e?De(e):null;return i&&R(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(Ce(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(Ce(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Za(this),i=new eh(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new re("auth","Firebase",e())}onAuthStateChanged(e,i,o){return this.registerStateListener(this.authStateSubscription,e,i,o)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,o){return this.registerStateListener(this.idTokenSubscription,e,i,o)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const o=this.onAuthStateChanged(()=>{o(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(o.tenantId=this.tenantId),await za(this,o)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const o=await this.getOrInitRedirectPersistenceManager(i);return e===null?o.removeCurrentUser():o.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Tt(e)||this._popupRedirectResolver;R(i,this,"argument-error"),this.redirectPersistenceManager=await kt.create(this,[Tt(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,o;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((o=this.redirectUser)===null||o===void 0?void 0:o._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const o=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==o&&(this.lastNotifiedUid=o,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,o,a){if(this._deleted)return()=>{};const l=typeof i=="function"?i:i.next.bind(i);let d=!1;const _=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(_,this,"internal-error"),_.then(()=>{d||l(this.currentUser)}),typeof i=="function"){const w=e.addObserver(i,o,a);return()=>{d=!0,w()}}else{const w=e.addObserver(i);return()=>{d=!0,w()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const o=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());o&&(i["X-Firebase-Client"]=o);const a=await this._getAppCheckToken();return a&&(i["X-Firebase-AppCheck"]=a),i}async _getAppCheckToken(){var e;if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i?.error&&Pa(`Error while retrieving App Check token: ${i.error}`),i?.token}}function rh(n){return De(n)}class Yr{constructor(e){this.auth=e,this.observer=null,this.addObserver=wo(i=>this.observer=i)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ih(n,e){const i=e?.persistence||[],o=(Array.isArray(i)?i:[i]).map(Tt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(o,e?.popupRedirectResolver)}new ie(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ie(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ie(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ie(5e3,15e3);var Qr="@firebase/auth",Zr="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(o=>{e(o?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ah(n){Ot(new Nt("auth",(e,{options:i})=>{const o=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:d,authDomain:_}=o.options;R(d&&!d.includes(":"),"invalid-api-key",{appName:o.name});const w={apiKey:d,authDomain:_,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gi(n)},I=new nh(o,a,l,w);return ih(I,i),I},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,o)=>{e.getProvider("auth-internal").initialize()})),Ot(new Nt("auth-internal",e=>{const i=rh(e.getProvider("auth").getImmediate());return(o=>new sh(o))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(Qr,Zr,oh(n)),It(Qr,Zr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=5*60;lo("authIdTokenMaxAge");ah("Browser");var ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ki;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,u){function f(){}f.prototype=u.prototype,m.D=u.prototype,m.prototype=new f,m.prototype.constructor=m,m.C=function(p,g,v){for(var c=Array(arguments.length-2),st=2;st<arguments.length;st++)c[st-2]=arguments[st];return u.prototype[g].apply(p,c)}}function i(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(o,i),o.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(m,u,f){f||(f=0);var p=Array(16);if(typeof u=="string")for(var g=0;16>g;++g)p[g]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(g=0;16>g;++g)p[g]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=m.g[0],f=m.g[1],g=m.g[2];var v=m.g[3],c=u+(v^f&(g^v))+p[0]+3614090360&4294967295;u=f+(c<<7&4294967295|c>>>25),c=v+(g^u&(f^g))+p[1]+3905402710&4294967295,v=u+(c<<12&4294967295|c>>>20),c=g+(f^v&(u^f))+p[2]+606105819&4294967295,g=v+(c<<17&4294967295|c>>>15),c=f+(u^g&(v^u))+p[3]+3250441966&4294967295,f=g+(c<<22&4294967295|c>>>10),c=u+(v^f&(g^v))+p[4]+4118548399&4294967295,u=f+(c<<7&4294967295|c>>>25),c=v+(g^u&(f^g))+p[5]+1200080426&4294967295,v=u+(c<<12&4294967295|c>>>20),c=g+(f^v&(u^f))+p[6]+2821735955&4294967295,g=v+(c<<17&4294967295|c>>>15),c=f+(u^g&(v^u))+p[7]+4249261313&4294967295,f=g+(c<<22&4294967295|c>>>10),c=u+(v^f&(g^v))+p[8]+1770035416&4294967295,u=f+(c<<7&4294967295|c>>>25),c=v+(g^u&(f^g))+p[9]+2336552879&4294967295,v=u+(c<<12&4294967295|c>>>20),c=g+(f^v&(u^f))+p[10]+4294925233&4294967295,g=v+(c<<17&4294967295|c>>>15),c=f+(u^g&(v^u))+p[11]+2304563134&4294967295,f=g+(c<<22&4294967295|c>>>10),c=u+(v^f&(g^v))+p[12]+1804603682&4294967295,u=f+(c<<7&4294967295|c>>>25),c=v+(g^u&(f^g))+p[13]+4254626195&4294967295,v=u+(c<<12&4294967295|c>>>20),c=g+(f^v&(u^f))+p[14]+2792965006&4294967295,g=v+(c<<17&4294967295|c>>>15),c=f+(u^g&(v^u))+p[15]+1236535329&4294967295,f=g+(c<<22&4294967295|c>>>10),c=u+(g^v&(f^g))+p[1]+4129170786&4294967295,u=f+(c<<5&4294967295|c>>>27),c=v+(f^g&(u^f))+p[6]+3225465664&4294967295,v=u+(c<<9&4294967295|c>>>23),c=g+(u^f&(v^u))+p[11]+643717713&4294967295,g=v+(c<<14&4294967295|c>>>18),c=f+(v^u&(g^v))+p[0]+3921069994&4294967295,f=g+(c<<20&4294967295|c>>>12),c=u+(g^v&(f^g))+p[5]+3593408605&4294967295,u=f+(c<<5&4294967295|c>>>27),c=v+(f^g&(u^f))+p[10]+38016083&4294967295,v=u+(c<<9&4294967295|c>>>23),c=g+(u^f&(v^u))+p[15]+3634488961&4294967295,g=v+(c<<14&4294967295|c>>>18),c=f+(v^u&(g^v))+p[4]+3889429448&4294967295,f=g+(c<<20&4294967295|c>>>12),c=u+(g^v&(f^g))+p[9]+568446438&4294967295,u=f+(c<<5&4294967295|c>>>27),c=v+(f^g&(u^f))+p[14]+3275163606&4294967295,v=u+(c<<9&4294967295|c>>>23),c=g+(u^f&(v^u))+p[3]+4107603335&4294967295,g=v+(c<<14&4294967295|c>>>18),c=f+(v^u&(g^v))+p[8]+1163531501&4294967295,f=g+(c<<20&4294967295|c>>>12),c=u+(g^v&(f^g))+p[13]+2850285829&4294967295,u=f+(c<<5&4294967295|c>>>27),c=v+(f^g&(u^f))+p[2]+4243563512&4294967295,v=u+(c<<9&4294967295|c>>>23),c=g+(u^f&(v^u))+p[7]+1735328473&4294967295,g=v+(c<<14&4294967295|c>>>18),c=f+(v^u&(g^v))+p[12]+2368359562&4294967295,f=g+(c<<20&4294967295|c>>>12),c=u+(f^g^v)+p[5]+4294588738&4294967295,u=f+(c<<4&4294967295|c>>>28),c=v+(u^f^g)+p[8]+2272392833&4294967295,v=u+(c<<11&4294967295|c>>>21),c=g+(v^u^f)+p[11]+1839030562&4294967295,g=v+(c<<16&4294967295|c>>>16),c=f+(g^v^u)+p[14]+4259657740&4294967295,f=g+(c<<23&4294967295|c>>>9),c=u+(f^g^v)+p[1]+2763975236&4294967295,u=f+(c<<4&4294967295|c>>>28),c=v+(u^f^g)+p[4]+1272893353&4294967295,v=u+(c<<11&4294967295|c>>>21),c=g+(v^u^f)+p[7]+4139469664&4294967295,g=v+(c<<16&4294967295|c>>>16),c=f+(g^v^u)+p[10]+3200236656&4294967295,f=g+(c<<23&4294967295|c>>>9),c=u+(f^g^v)+p[13]+681279174&4294967295,u=f+(c<<4&4294967295|c>>>28),c=v+(u^f^g)+p[0]+3936430074&4294967295,v=u+(c<<11&4294967295|c>>>21),c=g+(v^u^f)+p[3]+3572445317&4294967295,g=v+(c<<16&4294967295|c>>>16),c=f+(g^v^u)+p[6]+76029189&4294967295,f=g+(c<<23&4294967295|c>>>9),c=u+(f^g^v)+p[9]+3654602809&4294967295,u=f+(c<<4&4294967295|c>>>28),c=v+(u^f^g)+p[12]+3873151461&4294967295,v=u+(c<<11&4294967295|c>>>21),c=g+(v^u^f)+p[15]+530742520&4294967295,g=v+(c<<16&4294967295|c>>>16),c=f+(g^v^u)+p[2]+3299628645&4294967295,f=g+(c<<23&4294967295|c>>>9),c=u+(g^(f|~v))+p[0]+4096336452&4294967295,u=f+(c<<6&4294967295|c>>>26),c=v+(f^(u|~g))+p[7]+1126891415&4294967295,v=u+(c<<10&4294967295|c>>>22),c=g+(u^(v|~f))+p[14]+2878612391&4294967295,g=v+(c<<15&4294967295|c>>>17),c=f+(v^(g|~u))+p[5]+4237533241&4294967295,f=g+(c<<21&4294967295|c>>>11),c=u+(g^(f|~v))+p[12]+1700485571&4294967295,u=f+(c<<6&4294967295|c>>>26),c=v+(f^(u|~g))+p[3]+2399980690&4294967295,v=u+(c<<10&4294967295|c>>>22),c=g+(u^(v|~f))+p[10]+4293915773&4294967295,g=v+(c<<15&4294967295|c>>>17),c=f+(v^(g|~u))+p[1]+2240044497&4294967295,f=g+(c<<21&4294967295|c>>>11),c=u+(g^(f|~v))+p[8]+1873313359&4294967295,u=f+(c<<6&4294967295|c>>>26),c=v+(f^(u|~g))+p[15]+4264355552&4294967295,v=u+(c<<10&4294967295|c>>>22),c=g+(u^(v|~f))+p[6]+2734768916&4294967295,g=v+(c<<15&4294967295|c>>>17),c=f+(v^(g|~u))+p[13]+1309151649&4294967295,f=g+(c<<21&4294967295|c>>>11),c=u+(g^(f|~v))+p[4]+4149444226&4294967295,u=f+(c<<6&4294967295|c>>>26),c=v+(f^(u|~g))+p[11]+3174756917&4294967295,v=u+(c<<10&4294967295|c>>>22),c=g+(u^(v|~f))+p[2]+718787259&4294967295,g=v+(c<<15&4294967295|c>>>17),c=f+(v^(g|~u))+p[9]+3951481745&4294967295,m.g[0]=m.g[0]+u&4294967295,m.g[1]=m.g[1]+(g+(c<<21&4294967295|c>>>11))&4294967295,m.g[2]=m.g[2]+g&4294967295,m.g[3]=m.g[3]+v&4294967295}o.prototype.u=function(m,u){u===void 0&&(u=m.length);for(var f=u-this.blockSize,p=this.B,g=this.h,v=0;v<u;){if(g==0)for(;v<=f;)a(this,m,v),v+=this.blockSize;if(typeof m=="string"){for(;v<u;)if(p[g++]=m.charCodeAt(v++),g==this.blockSize){a(this,p),g=0;break}}else for(;v<u;)if(p[g++]=m[v++],g==this.blockSize){a(this,p),g=0;break}}this.h=g,this.o+=u},o.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var u=1;u<m.length-8;++u)m[u]=0;var f=8*this.o;for(u=m.length-8;u<m.length;++u)m[u]=f&255,f/=256;for(this.u(m),m=Array(16),u=f=0;4>u;++u)for(var p=0;32>p;p+=8)m[f++]=this.g[u]>>>p&255;return m};function l(m,u){var f=_;return Object.prototype.hasOwnProperty.call(f,m)?f[m]:f[m]=u(m)}function d(m,u){this.h=u;for(var f=[],p=!0,g=m.length-1;0<=g;g--){var v=m[g]|0;p&&v==u||(f[g]=v,p=!1)}this.g=f}var _={};function w(m){return-128<=m&&128>m?l(m,function(u){return new d([u|0],0>u?-1:0)}):new d([m|0],0>m?-1:0)}function I(m){if(isNaN(m)||!isFinite(m))return M;if(0>m)return D(I(-m));for(var u=[],f=1,p=0;m>=f;p++)u[p]=m/f|0,f*=4294967296;return new d(u,0)}function L(m,u){if(m.length==0)throw Error("number format error: empty string");if(u=u||10,2>u||36<u)throw Error("radix out of range: "+u);if(m.charAt(0)=="-")return D(L(m.substring(1),u));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=I(Math.pow(u,8)),p=M,g=0;g<m.length;g+=8){var v=Math.min(8,m.length-g),c=parseInt(m.substring(g,g+v),u);8>v?(v=I(Math.pow(u,v)),p=p.j(v).add(I(c))):(p=p.j(f),p=p.add(I(c)))}return p}var M=w(0),N=w(1),z=w(16777216);n=d.prototype,n.m=function(){if(x(this))return-D(this).m();for(var m=0,u=1,f=0;f<this.g.length;f++){var p=this.i(f);m+=(0<=p?p:4294967296+p)*u,u*=4294967296}return m},n.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(C(this))return"0";if(x(this))return"-"+D(this).toString(m);for(var u=I(Math.pow(m,6)),f=this,p="";;){var g=Q(f,u).g;f=it(f,g.j(u));var v=((0<f.g.length?f.g[0]:f.h)>>>0).toString(m);if(f=g,C(f))return v+p;for(;6>v.length;)v="0"+v;p=v+p}},n.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function C(m){if(m.h!=0)return!1;for(var u=0;u<m.g.length;u++)if(m.g[u]!=0)return!1;return!0}function x(m){return m.h==-1}n.l=function(m){return m=it(this,m),x(m)?-1:C(m)?0:1};function D(m){for(var u=m.g.length,f=[],p=0;p<u;p++)f[p]=~m.g[p];return new d(f,~m.h).add(N)}n.abs=function(){return x(this)?D(this):this},n.add=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0,g=0;g<=u;g++){var v=p+(this.i(g)&65535)+(m.i(g)&65535),c=(v>>>16)+(this.i(g)>>>16)+(m.i(g)>>>16);p=c>>>16,v&=65535,c&=65535,f[g]=c<<16|v}return new d(f,f[f.length-1]&-2147483648?-1:0)};function it(m,u){return m.add(D(u))}n.j=function(m){if(C(this)||C(m))return M;if(x(this))return x(m)?D(this).j(D(m)):D(D(this).j(m));if(x(m))return D(this.j(D(m)));if(0>this.l(z)&&0>m.l(z))return I(this.m()*m.m());for(var u=this.g.length+m.g.length,f=[],p=0;p<2*u;p++)f[p]=0;for(p=0;p<this.g.length;p++)for(var g=0;g<m.g.length;g++){var v=this.i(p)>>>16,c=this.i(p)&65535,st=m.i(g)>>>16,Lt=m.i(g)&65535;f[2*p+2*g]+=c*Lt,J(f,2*p+2*g),f[2*p+2*g+1]+=v*Lt,J(f,2*p+2*g+1),f[2*p+2*g+1]+=c*st,J(f,2*p+2*g+1),f[2*p+2*g+2]+=v*st,J(f,2*p+2*g+2)}for(p=0;p<u;p++)f[p]=f[2*p+1]<<16|f[2*p];for(p=u;p<2*u;p++)f[p]=0;return new d(f,0)};function J(m,u){for(;(m[u]&65535)!=m[u];)m[u+1]+=m[u]>>>16,m[u]&=65535,u++}function j(m,u){this.g=m,this.h=u}function Q(m,u){if(C(u))throw Error("division by zero");if(C(m))return new j(M,M);if(x(m))return u=Q(D(m),u),new j(D(u.g),D(u.h));if(x(u))return u=Q(m,D(u)),new j(D(u.g),u.h);if(30<m.g.length){if(x(m)||x(u))throw Error("slowDivide_ only works with positive integers.");for(var f=N,p=u;0>=p.l(m);)f=yt(f),p=yt(p);var g=W(f,1),v=W(p,1);for(p=W(p,2),f=W(f,2);!C(p);){var c=v.add(p);0>=c.l(m)&&(g=g.add(f),v=c),p=W(p,1),f=W(f,1)}return u=it(m,g.j(u)),new j(g,u)}for(g=M;0<=m.l(u);){for(f=Math.max(1,Math.floor(m.m()/u.m())),p=Math.ceil(Math.log(f)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),v=I(f),c=v.j(u);x(c)||0<c.l(m);)f-=p,v=I(f),c=v.j(u);C(v)&&(v=N),g=g.add(v),m=it(m,c)}return new j(g,m)}n.A=function(m){return Q(this,m).h},n.and=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)&m.i(p);return new d(f,this.h&m.h)},n.or=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)|m.i(p);return new d(f,this.h|m.h)},n.xor=function(m){for(var u=Math.max(this.g.length,m.g.length),f=[],p=0;p<u;p++)f[p]=this.i(p)^m.i(p);return new d(f,this.h^m.h)};function yt(m){for(var u=m.g.length+1,f=[],p=0;p<u;p++)f[p]=m.i(p)<<1|m.i(p-1)>>>31;return new d(f,m.h)}function W(m,u){var f=u>>5;u%=32;for(var p=m.g.length-f,g=[],v=0;v<p;v++)g[v]=0<u?m.i(v+f)>>>u|m.i(v+f+1)<<32-u:m.i(v+f);return new d(g,m.h)}o.prototype.digest=o.prototype.v,o.prototype.reset=o.prototype.s,o.prototype.update=o.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=I,d.fromString=L,Ki=d}).apply(typeof ti<"u"?ti:typeof self<"u"?self:typeof window<"u"?window:{});var Ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,r,s){return t==Array.prototype||t==Object.prototype||(t[r]=s.value),t};function i(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ie=="object"&&Ie];for(var r=0;r<t.length;++r){var s=t[r];if(s&&s.Math==Math)return s}throw Error("Cannot find global object")}var o=i(this);function a(t,r){if(r)t:{var s=o;t=t.split(".");for(var h=0;h<t.length-1;h++){var y=t[h];if(!(y in s))break t;s=s[y]}t=t[t.length-1],h=s[t],r=r(h),r!=h&&r!=null&&e(s,t,{configurable:!0,writable:!0,value:r})}}function l(t,r){t instanceof String&&(t+="");var s=0,h=!1,y={next:function(){if(!h&&s<t.length){var E=s++;return{value:r(E,t[E]),done:!1}}return h=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}a("Array.prototype.values",function(t){return t||function(){return l(this,function(r,s){return s})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},_=this||self;function w(t){var r=typeof t;return r=r!="object"?r:t?Array.isArray(t)?"array":r:"null",r=="array"||r=="object"&&typeof t.length=="number"}function I(t){var r=typeof t;return r=="object"&&t!=null||r=="function"}function L(t,r,s){return t.call.apply(t.bind,arguments)}function M(t,r,s){if(!t)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,h),t.apply(r,y)}}return function(){return t.apply(r,arguments)}}function N(t,r,s){return N=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?L:M,N.apply(null,arguments)}function z(t,r){var s=Array.prototype.slice.call(arguments,1);return function(){var h=s.slice();return h.push.apply(h,arguments),t.apply(this,h)}}function C(t,r){function s(){}s.prototype=r.prototype,t.aa=r.prototype,t.prototype=new s,t.prototype.constructor=t,t.Qb=function(h,y,E){for(var T=Array(arguments.length-2),k=2;k<arguments.length;k++)T[k-2]=arguments[k];return r.prototype[y].apply(h,T)}}function x(t){const r=t.length;if(0<r){const s=Array(r);for(let h=0;h<r;h++)s[h]=t[h];return s}return[]}function D(t,r){for(let s=1;s<arguments.length;s++){const h=arguments[s];if(w(h)){const y=t.length||0,E=h.length||0;t.length=y+E;for(let T=0;T<E;T++)t[y+T]=h[T]}else t.push(h)}}class it{constructor(r,s){this.i=r,this.j=s,this.h=0,this.g=null}get(){let r;return 0<this.h?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function J(t){return/^[\s\xa0]*$/.test(t)}function j(){var t=_.navigator;return t&&(t=t.userAgent)?t:""}function Q(t){return Q[" "](t),t}Q[" "]=function(){};var yt=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function W(t,r,s){for(const h in t)r.call(s,t[h],h,t)}function m(t,r){for(const s in t)r.call(void 0,t[s],s,t)}function u(t){const r={};for(const s in t)r[s]=t[s];return r}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(t,r){let s,h;for(let y=1;y<arguments.length;y++){h=arguments[y];for(s in h)t[s]=h[s];for(let E=0;E<f.length;E++)s=f[E],Object.prototype.hasOwnProperty.call(h,s)&&(t[s]=h[s])}}function g(t){var r=1;t=t.split(":");const s=[];for(;0<r&&t.length;)s.push(t.shift()),r--;return t.length&&s.push(t.join(":")),s}function v(t){_.setTimeout(()=>{throw t},0)}function c(){var t=xe;let r=null;return t.g&&(r=t.g,t.g=t.g.next,t.g||(t.h=null),r.next=null),r}class st{constructor(){this.h=this.g=null}add(r,s){const h=Lt.get();h.set(r,s),this.h?this.h.next=h:this.g=h,this.h=h}}var Lt=new it(()=>new qi,t=>t.reset());class qi{constructor(){this.next=this.g=this.h=null}set(r,s){this.h=r,this.g=s,this.next=null}reset(){this.next=this.g=this.h=null}}let Mt,Ut=!1,xe=new st,Ln=()=>{const t=_.Promise.resolve(void 0);Mt=()=>{t.then(Yi)}};var Yi=()=>{for(var t;t=c();){try{t.h.call(t.g)}catch(s){v(s)}var r=Lt;r.j(t),100>r.h&&(r.h++,t.next=r.g,r.g=t)}Ut=!1};function ut(){this.s=this.s,this.C=this.C}ut.prototype.s=!1,ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function B(t,r){this.type=t,this.g=this.target=r,this.defaultPrevented=!1}B.prototype.h=function(){this.defaultPrevented=!0};var Qi=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var t=!1,r=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const s=()=>{};_.addEventListener("test",s,r),_.removeEventListener("test",s,r)}catch{}return t}();function xt(t,r){if(B.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var s=this.type=t.type,h=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=r,r=t.relatedTarget){if(yt){t:{try{Q(r.nodeName);var y=!0;break t}catch{}y=!1}y||(r=null)}}else s=="mouseover"?r=t.fromElement:s=="mouseout"&&(r=t.toElement);this.relatedTarget=r,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Zi[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xt.aa.h.call(this)}}C(xt,B);var Zi={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var se="closure_listenable_"+(1e6*Math.random()|0),ts=0;function es(t,r,s,h,y){this.listener=t,this.proxy=null,this.src=r,this.type=s,this.capture=!!h,this.ha=y,this.key=++ts,this.da=this.fa=!1}function oe(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ae(t){this.src=t,this.g={},this.h=0}ae.prototype.add=function(t,r,s,h,y){var E=t.toString();t=this.g[E],t||(t=this.g[E]=[],this.h++);var T=je(t,r,h,y);return-1<T?(r=t[T],s||(r.fa=!1)):(r=new es(r,this.src,E,!!h,y),r.fa=s,t.push(r)),r};function Fe(t,r){var s=r.type;if(s in t.g){var h=t.g[s],y=Array.prototype.indexOf.call(h,r,void 0),E;(E=0<=y)&&Array.prototype.splice.call(h,y,1),E&&(oe(r),t.g[s].length==0&&(delete t.g[s],t.h--))}}function je(t,r,s,h){for(var y=0;y<t.length;++y){var E=t[y];if(!E.da&&E.listener==r&&E.capture==!!s&&E.ha==h)return y}return-1}var Be="closure_lm_"+(1e6*Math.random()|0),Ve={};function Mn(t,r,s,h,y){if(Array.isArray(r)){for(var E=0;E<r.length;E++)Mn(t,r[E],s,h,y);return null}return s=Fn(s),t&&t[se]?t.K(r,s,I(h)?!!h.capture:!1,y):ns(t,r,s,!1,h,y)}function ns(t,r,s,h,y,E){if(!r)throw Error("Invalid event type");var T=I(y)?!!y.capture:!!y,k=$e(t);if(k||(t[Be]=k=new ae(t)),s=k.add(r,s,h,T,E),s.proxy)return s;if(h=rs(),s.proxy=h,h.src=t,h.listener=s,t.addEventListener)Qi||(y=T),y===void 0&&(y=!1),t.addEventListener(r.toString(),h,y);else if(t.attachEvent)t.attachEvent(xn(r.toString()),h);else if(t.addListener&&t.removeListener)t.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return s}function rs(){function t(s){return r.call(t.src,t.listener,s)}const r=is;return t}function Un(t,r,s,h,y){if(Array.isArray(r))for(var E=0;E<r.length;E++)Un(t,r[E],s,h,y);else h=I(h)?!!h.capture:!!h,s=Fn(s),t&&t[se]?(t=t.i,r=String(r).toString(),r in t.g&&(E=t.g[r],s=je(E,s,h,y),-1<s&&(oe(E[s]),Array.prototype.splice.call(E,s,1),E.length==0&&(delete t.g[r],t.h--)))):t&&(t=$e(t))&&(r=t.g[r.toString()],t=-1,r&&(t=je(r,s,h,y)),(s=-1<t?r[t]:null)&&He(s))}function He(t){if(typeof t!="number"&&t&&!t.da){var r=t.src;if(r&&r[se])Fe(r.i,t);else{var s=t.type,h=t.proxy;r.removeEventListener?r.removeEventListener(s,h,t.capture):r.detachEvent?r.detachEvent(xn(s),h):r.addListener&&r.removeListener&&r.removeListener(h),(s=$e(r))?(Fe(s,t),s.h==0&&(s.src=null,r[Be]=null)):oe(t)}}}function xn(t){return t in Ve?Ve[t]:Ve[t]="on"+t}function is(t,r){if(t.da)t=!0;else{r=new xt(r,this);var s=t.listener,h=t.ha||t.src;t.fa&&He(t),t=s.call(h,r)}return t}function $e(t){return t=t[Be],t instanceof ae?t:null}var ze="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fn(t){return typeof t=="function"?t:(t[ze]||(t[ze]=function(r){return t.handleEvent(r)}),t[ze])}function V(){ut.call(this),this.i=new ae(this),this.M=this,this.F=null}C(V,ut),V.prototype[se]=!0,V.prototype.removeEventListener=function(t,r,s,h){Un(this,t,r,s,h)};function G(t,r){var s,h=t.F;if(h)for(s=[];h;h=h.F)s.push(h);if(t=t.M,h=r.type||r,typeof r=="string")r=new B(r,t);else if(r instanceof B)r.target=r.target||t;else{var y=r;r=new B(h,t),p(r,y)}if(y=!0,s)for(var E=s.length-1;0<=E;E--){var T=r.g=s[E];y=he(T,h,!0,r)&&y}if(T=r.g=t,y=he(T,h,!0,r)&&y,y=he(T,h,!1,r)&&y,s)for(E=0;E<s.length;E++)T=r.g=s[E],y=he(T,h,!1,r)&&y}V.prototype.N=function(){if(V.aa.N.call(this),this.i){var t=this.i,r;for(r in t.g){for(var s=t.g[r],h=0;h<s.length;h++)oe(s[h]);delete t.g[r],t.h--}}this.F=null},V.prototype.K=function(t,r,s,h){return this.i.add(String(t),r,!1,s,h)},V.prototype.L=function(t,r,s,h){return this.i.add(String(t),r,!0,s,h)};function he(t,r,s,h){if(r=t.i.g[String(r)],!r)return!0;r=r.concat();for(var y=!0,E=0;E<r.length;++E){var T=r[E];if(T&&!T.da&&T.capture==s){var k=T.listener,F=T.ha||T.src;T.fa&&Fe(t.i,T),y=k.call(F,h)!==!1&&y}}return y&&!h.defaultPrevented}function jn(t,r,s){if(typeof t=="function")s&&(t=N(t,s));else if(t&&typeof t.handleEvent=="function")t=N(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(r)?-1:_.setTimeout(t,r||0)}function Bn(t){t.g=jn(()=>{t.g=null,t.i&&(t.i=!1,Bn(t))},t.l);const r=t.h;t.h=null,t.m.apply(null,r)}class ss extends ut{constructor(r,s){super(),this.m=r,this.l=s,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:Bn(this)}N(){super.N(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ft(t){ut.call(this),this.h=t,this.g={}}C(Ft,ut);var Vn=[];function Hn(t){W(t.g,function(r,s){this.g.hasOwnProperty(s)&&He(r)},t),t.g={}}Ft.prototype.N=function(){Ft.aa.N.call(this),Hn(this)},Ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ge=_.JSON.stringify,os=_.JSON.parse,as=class{stringify(t){return _.JSON.stringify(t,void 0)}parse(t){return _.JSON.parse(t,void 0)}};function Ke(){}Ke.prototype.h=null;function $n(t){return t.h||(t.h=t.i())}function hs(){}var jt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xe(){B.call(this,"d")}C(Xe,B);function We(){B.call(this,"c")}C(We,B);var At={},zn=null;function Je(){return zn=zn||new V}At.La="serverreachability";function Gn(t){B.call(this,At.La,t)}C(Gn,B);function Bt(t){const r=Je();G(r,new Gn(r))}At.STAT_EVENT="statevent";function Kn(t,r){B.call(this,At.STAT_EVENT,t),this.stat=r}C(Kn,B);function K(t){const r=Je();G(r,new Kn(r,t))}At.Ma="timingevent";function Xn(t,r){B.call(this,At.Ma,t),this.size=r}C(Xn,B);function Vt(t,r){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){t()},r)}function Ht(){this.g=!0}Ht.prototype.xa=function(){this.g=!1};function us(t,r,s,h,y,E){t.info(function(){if(t.g)if(E)for(var T="",k=E.split("&"),F=0;F<k.length;F++){var b=k[F].split("=");if(1<b.length){var H=b[0];b=b[1];var $=H.split("_");T=2<=$.length&&$[1]=="type"?T+(H+"="+b+"&"):T+(H+"=redacted&")}}else T=null;else T=E;return"XMLHTTP REQ ("+h+") [attempt "+y+"]: "+r+`
`+s+`
`+T})}function ls(t,r,s,h,y,E,T){t.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+y+"]: "+r+`
`+s+`
`+E+" "+T})}function St(t,r,s,h){t.info(function(){return"XMLHTTP TEXT ("+r+"): "+fs(t,s)+(h?" "+h:"")})}function cs(t,r){t.info(function(){return"TIMEOUT: "+r})}Ht.prototype.info=function(){};function fs(t,r){if(!t.g)return r;if(!r)return null;try{var s=JSON.parse(r);if(s){for(t=0;t<s.length;t++)if(Array.isArray(s[t])){var h=s[t];if(!(2>h.length)){var y=h[1];if(Array.isArray(y)&&!(1>y.length)){var E=y[0];if(E!="noop"&&E!="stop"&&E!="close")for(var T=1;T<y.length;T++)y[T]=""}}}}return Ge(s)}catch{return r}}var qe={NO_ERROR:0,TIMEOUT:8},ds={},Ye;function ue(){}C(ue,Ke),ue.prototype.g=function(){return new XMLHttpRequest},ue.prototype.i=function(){return{}},Ye=new ue;function lt(t,r,s,h){this.j=t,this.i=r,this.l=s,this.R=h||1,this.U=new Ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wn}function Wn(){this.i=null,this.g="",this.h=!1}var Jn={},Qe={};function Ze(t,r,s){t.L=1,t.v=de(ot(r)),t.m=s,t.P=!0,qn(t,null)}function qn(t,r){t.F=Date.now(),le(t),t.A=ot(t.v);var s=t.A,h=t.R;Array.isArray(h)||(h=[String(h)]),lr(s.i,"t",h),t.C=0,s=t.j.J,t.h=new Wn,t.g=Rr(t.j,s?r:null,!t.m),0<t.O&&(t.M=new ss(N(t.Y,t,t.g),t.O)),r=t.U,s=t.g,h=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(Vn[0]=y.toString()),y=Vn);for(var E=0;E<y.length;E++){var T=Mn(s,y[E],h||r.handleEvent,!1,r.h||r);if(!T)break;r.g[T.key]=T}r=t.H?u(t.H):{},t.m?(t.u||(t.u="POST"),r["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,r)):(t.u="GET",t.g.ea(t.A,t.u,null,r)),Bt(),us(t.i,t.u,t.A,t.l,t.R,t.m)}lt.prototype.ca=function(t){t=t.target;const r=this.M;r&&at(t)==3?r.j():this.Y(t)},lt.prototype.Y=function(t){try{if(t==this.g)t:{const $=at(this.g);var r=this.g.Ba();const Rt=this.g.Z();if(!(3>$)&&($!=3||this.g&&(this.h.h||this.g.oa()||yr(this.g)))){this.J||$!=4||r==7||(r==8||0>=Rt?Bt(3):Bt(2)),tn(this);var s=this.g.Z();this.X=s;e:if(Yn(this)){var h=yr(this.g);t="";var y=h.length,E=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vt(this),$t(this);var T="";break e}this.h.i=new _.TextDecoder}for(r=0;r<y;r++)this.h.h=!0,t+=this.h.i.decode(h[r],{stream:!(E&&r==y-1)});h.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=s==200,ls(this.i,this.u,this.A,this.l,this.R,$,s),this.o){if(this.T&&!this.K){e:{if(this.g){var k,F=this.g;if((k=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(k)){var b=k;break e}}b=null}if(s=b)St(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,en(this,s);else{this.o=!1,this.s=3,K(12),vt(this),$t(this);break t}}if(this.P){s=!0;let Z;for(;!this.J&&this.C<T.length;)if(Z=ps(this,T),Z==Qe){$==4&&(this.s=4,K(14),s=!1),St(this.i,this.l,null,"[Incomplete Response]");break}else if(Z==Jn){this.s=4,K(15),St(this.i,this.l,T,"[Invalid Chunk]"),s=!1;break}else St(this.i,this.l,Z,null),en(this,Z);if(Yn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||T.length!=0||this.h.h||(this.s=1,K(16),s=!1),this.o=this.o&&s,!s)St(this.i,this.l,T,"[Invalid Chunked Response]"),vt(this),$t(this);else if(0<T.length&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.ba&&!H.M&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),hn(H),H.M=!0,K(11))}}else St(this.i,this.l,T,null),en(this,T);$==4&&vt(this),this.o&&!this.J&&($==4?Ar(this.j,this):(this.o=!1,le(this)))}else Ns(this.g),s==400&&0<T.indexOf("Unknown SID")?(this.s=3,K(12)):(this.s=0,K(13)),vt(this),$t(this)}}}catch{}finally{}};function Yn(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function ps(t,r){var s=t.C,h=r.indexOf(`
`,s);return h==-1?Qe:(s=Number(r.substring(s,h)),isNaN(s)?Jn:(h+=1,h+s>r.length?Qe:(r=r.slice(h,h+s),t.C=h+s,r)))}lt.prototype.cancel=function(){this.J=!0,vt(this)};function le(t){t.S=Date.now()+t.I,Qn(t,t.I)}function Qn(t,r){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vt(N(t.ba,t),r)}function tn(t){t.B&&(_.clearTimeout(t.B),t.B=null)}lt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(cs(this.i,this.A),this.L!=2&&(Bt(),K(17)),vt(this),this.s=2,$t(this)):Qn(this,this.S-t)};function $t(t){t.j.G==0||t.J||Ar(t.j,t)}function vt(t){tn(t);var r=t.M;r&&typeof r.ma=="function"&&r.ma(),t.M=null,Hn(t.U),t.g&&(r=t.g,t.g=null,r.abort(),r.ma())}function en(t,r){try{var s=t.j;if(s.G!=0&&(s.g==t||nn(s.h,t))){if(!t.K&&nn(s.h,t)&&s.G==3){try{var h=s.Da.g.parse(r)}catch{h=null}if(Array.isArray(h)&&h.length==3){var y=h;if(y[0]==0){t:if(!s.u){if(s.g)if(s.g.F+3e3<t.F)_e(s),ye(s);else break t;an(s),K(18)}}else s.za=y[1],0<s.za-s.T&&37500>y[2]&&s.F&&s.v==0&&!s.C&&(s.C=Vt(N(s.Za,s),6e3));if(1>=er(s.h)&&s.ca){try{s.ca()}catch{}s.ca=void 0}}else Et(s,11)}else if((t.K||s.g==t)&&_e(s),!J(r))for(y=s.Da.g.parse(r),r=0;r<y.length;r++){let b=y[r];if(s.T=b[0],b=b[1],s.G==2)if(b[0]=="c"){s.K=b[1],s.ia=b[2];const H=b[3];H!=null&&(s.la=H,s.j.info("VER="+s.la));const $=b[4];$!=null&&(s.Aa=$,s.j.info("SVER="+s.Aa));const Rt=b[5];Rt!=null&&typeof Rt=="number"&&0<Rt&&(h=1.5*Rt,s.L=h,s.j.info("backChannelRequestTimeoutMs_="+h)),h=s;const Z=t.g;if(Z){const Ee=Z.g?Z.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ee){var E=h.h;E.g||Ee.indexOf("spdy")==-1&&Ee.indexOf("quic")==-1&&Ee.indexOf("h2")==-1||(E.j=E.l,E.g=new Set,E.h&&(rn(E,E.h),E.h=null))}if(h.D){const un=Z.g?Z.g.getResponseHeader("X-HTTP-Session-Id"):null;un&&(h.ya=un,O(h.I,h.D,un))}}s.G=3,s.l&&s.l.ua(),s.ba&&(s.R=Date.now()-t.F,s.j.info("Handshake RTT: "+s.R+"ms")),h=s;var T=t;if(h.qa=Cr(h,h.J?h.ia:null,h.W),T.K){nr(h.h,T);var k=T,F=h.L;F&&(k.I=F),k.B&&(tn(k),le(k)),h.g=T}else Tr(h);0<s.i.length&&ve(s)}else b[0]!="stop"&&b[0]!="close"||Et(s,7);else s.G==3&&(b[0]=="stop"||b[0]=="close"?b[0]=="stop"?Et(s,7):on(s):b[0]!="noop"&&s.l&&s.l.ta(b),s.v=0)}}Bt(4)}catch{}}var gs=class{constructor(t,r){this.g=t,this.map=r}};function Zn(t){this.l=t||10,_.PerformanceNavigationTiming?(t=_.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(_.chrome&&_.chrome.loadTimes&&_.chrome.loadTimes()&&_.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tr(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function er(t){return t.h?1:t.g?t.g.size:0}function nn(t,r){return t.h?t.h==r:t.g?t.g.has(r):!1}function rn(t,r){t.g?t.g.add(r):t.h=r}function nr(t,r){t.h&&t.h==r?t.h=null:t.g&&t.g.has(r)&&t.g.delete(r)}Zn.prototype.cancel=function(){if(this.i=rr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rr(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let r=t.i;for(const s of t.g.values())r=r.concat(s.D);return r}return x(t.i)}function ms(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(w(t)){for(var r=[],s=t.length,h=0;h<s;h++)r.push(t[h]);return r}r=[],s=0;for(h in t)r[s++]=t[h];return r}function ys(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(w(t)||typeof t=="string"){var r=[];t=t.length;for(var s=0;s<t;s++)r.push(s);return r}r=[],s=0;for(const h in t)r[s++]=h;return r}}}function ir(t,r){if(t.forEach&&typeof t.forEach=="function")t.forEach(r,void 0);else if(w(t)||typeof t=="string")Array.prototype.forEach.call(t,r,void 0);else for(var s=ys(t),h=ms(t),y=h.length,E=0;E<y;E++)r.call(void 0,h[E],s&&s[E],t)}var sr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vs(t,r){if(t){t=t.split("&");for(var s=0;s<t.length;s++){var h=t[s].indexOf("="),y=null;if(0<=h){var E=t[s].substring(0,h);y=t[s].substring(h+1)}else E=t[s];r(E,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function _t(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof _t){this.h=t.h,ce(this,t.j),this.o=t.o,this.g=t.g,fe(this,t.s),this.l=t.l;var r=t.i,s=new Kt;s.i=r.i,r.g&&(s.g=new Map(r.g),s.h=r.h),or(this,s),this.m=t.m}else t&&(r=String(t).match(sr))?(this.h=!1,ce(this,r[1]||"",!0),this.o=zt(r[2]||""),this.g=zt(r[3]||"",!0),fe(this,r[4]),this.l=zt(r[5]||"",!0),or(this,r[6]||"",!0),this.m=zt(r[7]||"")):(this.h=!1,this.i=new Kt(null,this.h))}_t.prototype.toString=function(){var t=[],r=this.j;r&&t.push(Gt(r,ar,!0),":");var s=this.g;return(s||r=="file")&&(t.push("//"),(r=this.o)&&t.push(Gt(r,ar,!0),"@"),t.push(encodeURIComponent(String(s)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s=this.s,s!=null&&t.push(":",String(s))),(s=this.l)&&(this.g&&s.charAt(0)!="/"&&t.push("/"),t.push(Gt(s,s.charAt(0)=="/"?ws:Es,!0))),(s=this.i.toString())&&t.push("?",s),(s=this.m)&&t.push("#",Gt(s,Is)),t.join("")};function ot(t){return new _t(t)}function ce(t,r,s){t.j=s?zt(r,!0):r,t.j&&(t.j=t.j.replace(/:$/,""))}function fe(t,r){if(r){if(r=Number(r),isNaN(r)||0>r)throw Error("Bad port number "+r);t.s=r}else t.s=null}function or(t,r,s){r instanceof Kt?(t.i=r,As(t.i,t.h)):(s||(r=Gt(r,Ts)),t.i=new Kt(r,t.h))}function O(t,r,s){t.i.set(r,s)}function de(t){return O(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zt(t,r){return t?r?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Gt(t,r,s){return typeof t=="string"?(t=encodeURI(t).replace(r,_s),s&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _s(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ar=/[#\/\?@]/g,Es=/[#\?:]/g,ws=/[#\?]/g,Ts=/[#\?@]/g,Is=/#/g;function Kt(t,r){this.h=this.g=null,this.i=t||null,this.j=!!r}function ct(t){t.g||(t.g=new Map,t.h=0,t.i&&vs(t.i,function(r,s){t.add(decodeURIComponent(r.replace(/\+/g," ")),s)}))}n=Kt.prototype,n.add=function(t,r){ct(this),this.i=null,t=bt(this,t);var s=this.g.get(t);return s||this.g.set(t,s=[]),s.push(r),this.h+=1,this};function hr(t,r){ct(t),r=bt(t,r),t.g.has(r)&&(t.i=null,t.h-=t.g.get(r).length,t.g.delete(r))}function ur(t,r){return ct(t),r=bt(t,r),t.g.has(r)}n.forEach=function(t,r){ct(this),this.g.forEach(function(s,h){s.forEach(function(y){t.call(r,y,h,this)},this)},this)},n.na=function(){ct(this);const t=Array.from(this.g.values()),r=Array.from(this.g.keys()),s=[];for(let h=0;h<r.length;h++){const y=t[h];for(let E=0;E<y.length;E++)s.push(r[h])}return s},n.V=function(t){ct(this);let r=[];if(typeof t=="string")ur(this,t)&&(r=r.concat(this.g.get(bt(this,t))));else{t=Array.from(this.g.values());for(let s=0;s<t.length;s++)r=r.concat(t[s])}return r},n.set=function(t,r){return ct(this),this.i=null,t=bt(this,t),ur(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[r]),this.h+=1,this},n.get=function(t,r){return t?(t=this.V(t),0<t.length?String(t[0]):r):r};function lr(t,r,s){hr(t,r),0<s.length&&(t.i=null,t.g.set(bt(t,r),x(s)),t.h+=s.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],r=Array.from(this.g.keys());for(var s=0;s<r.length;s++){var h=r[s];const E=encodeURIComponent(String(h)),T=this.V(h);for(h=0;h<T.length;h++){var y=E;T[h]!==""&&(y+="="+encodeURIComponent(String(T[h]))),t.push(y)}}return this.i=t.join("&")};function bt(t,r){return r=String(r),t.j&&(r=r.toLowerCase()),r}function As(t,r){r&&!t.j&&(ct(t),t.i=null,t.g.forEach(function(s,h){var y=h.toLowerCase();h!=y&&(hr(this,h),lr(this,y,s))},t)),t.j=r}function Ss(t,r){const s=new Ht;if(_.Image){const h=new Image;h.onload=z(ft,s,"TestLoadImage: loaded",!0,r,h),h.onerror=z(ft,s,"TestLoadImage: error",!1,r,h),h.onabort=z(ft,s,"TestLoadImage: abort",!1,r,h),h.ontimeout=z(ft,s,"TestLoadImage: timeout",!1,r,h),_.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=t}else r(!1)}function bs(t,r){const s=new Ht,h=new AbortController,y=setTimeout(()=>{h.abort(),ft(s,"TestPingServer: timeout",!1,r)},1e4);fetch(t,{signal:h.signal}).then(E=>{clearTimeout(y),E.ok?ft(s,"TestPingServer: ok",!0,r):ft(s,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(y),ft(s,"TestPingServer: error",!1,r)})}function ft(t,r,s,h,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),h(s)}catch{}}function Cs(){this.g=new as}function Rs(t,r,s){const h=s||"";try{ir(t,function(y,E){let T=y;I(y)&&(T=Ge(y)),r.push(h+E+"="+encodeURIComponent(T))})}catch(y){throw r.push(h+"type="+encodeURIComponent("_badmap")),y}}function pe(t){this.l=t.Ub||null,this.j=t.eb||!1}C(pe,Ke),pe.prototype.g=function(){return new ge(this.l,this.j)},pe.prototype.i=function(t){return function(){return t}}({});function ge(t,r){V.call(this),this.D=t,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ge,V),n=ge.prototype,n.open=function(t,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=r,this.readyState=1,Wt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const r={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(r.body=t),(this.D||_).fetch(new Request(this.A,r)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xt(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Wt(this)),this.g&&(this.readyState=3,Wt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof _.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cr(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function cr(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var r=t.value?t.value:new Uint8Array(0);(r=this.v.decode(r,{stream:!t.done}))&&(this.response=this.responseText+=r)}t.done?Xt(this):Wt(this),this.readyState==3&&cr(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,Xt(this))},n.Qa=function(t){this.g&&(this.response=t,Xt(this))},n.ga=function(){this.g&&Xt(this)};function Xt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Wt(t)}n.setRequestHeader=function(t,r){this.u.append(t,r)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],r=this.h.entries();for(var s=r.next();!s.done;)s=s.value,t.push(s[0]+": "+s[1]),s=r.next();return t.join(`\r
`)};function Wt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ge.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function fr(t){let r="";return W(t,function(s,h){r+=h,r+=":",r+=s,r+=`\r
`}),r}function sn(t,r,s){t:{for(h in s){var h=!1;break t}h=!0}h||(s=fr(s),typeof t=="string"?s!=null&&encodeURIComponent(String(s)):O(t,r,s))}function U(t){V.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(U,V);var Ps=/^https?$/i,ks=["POST","PUT"];n=U.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,r,s,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ye.g(),this.v=this.o?$n(this.o):$n(Ye),this.g.onreadystatechange=N(this.Ea,this);try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(E){dr(this,E);return}if(t=s||"",s=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var y in h)s.set(y,h[y]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const E of h.keys())s.set(E,h.get(E));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(s.keys()).find(E=>E.toLowerCase()=="content-type"),y=_.FormData&&t instanceof _.FormData,!(0<=Array.prototype.indexOf.call(ks,r,void 0))||h||y||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[E,T]of s)this.g.setRequestHeader(E,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{mr(this),this.u=!0,this.g.send(t),this.u=!1}catch(E){dr(this,E)}};function dr(t,r){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=r,t.m=5,pr(t),me(t)}function pr(t){t.A||(t.A=!0,G(t,"complete"),G(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,G(this,"complete"),G(this,"abort"),me(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),me(this,!0)),U.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?gr(this):this.bb())},n.bb=function(){gr(this)};function gr(t){if(t.h&&typeof d<"u"&&(!t.v[1]||at(t)!=4||t.Z()!=2)){if(t.u&&at(t)==4)jn(t.Ea,0,t);else if(G(t,"readystatechange"),at(t)==4){t.h=!1;try{const T=t.Z();t:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}var s;if(!(s=r)){var h;if(h=T===0){var y=String(t.D).match(sr)[1]||null;!y&&_.self&&_.self.location&&(y=_.self.location.protocol.slice(0,-1)),h=!Ps.test(y?y.toLowerCase():"")}s=h}if(s)G(t,"complete"),G(t,"success");else{t.m=6;try{var E=2<at(t)?t.g.statusText:""}catch{E=""}t.l=E+" ["+t.Z()+"]",pr(t)}}finally{me(t)}}}}function me(t,r){if(t.g){mr(t);const s=t.g,h=t.v[0]?()=>{}:null;t.g=null,t.v=null,r||G(t,"ready");try{s.onreadystatechange=h}catch{}}}function mr(t){t.I&&(_.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function at(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var r=this.g.responseText;return t&&r.indexOf(t)==0&&(r=r.substring(t.length)),os(r)}};function yr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Ns(t){const r={};t=(t.g&&2<=at(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<t.length;h++){if(J(t[h]))continue;var s=g(t[h]);const y=s[0];if(s=s[1],typeof s!="string")continue;s=s.trim();const E=r[y]||[];r[y]=E,E.push(s)}m(r,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jt(t,r,s){return s&&s.internalChannelParams&&s.internalChannelParams[t]||r}function vr(t){this.Aa=0,this.i=[],this.j=new Ht,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jt("baseRetryDelayMs",5e3,t),this.cb=Jt("retryDelaySeedMs",1e4,t),this.Wa=Jt("forwardChannelMaxRetries",2,t),this.wa=Jt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Zn(t&&t.concurrentRequestLimit),this.Da=new Cs,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=vr.prototype,n.la=8,n.G=1,n.connect=function(t,r,s,h){K(0),this.W=t,this.H=r||{},s&&h!==void 0&&(this.H.OSID=s,this.H.OAID=h),this.F=this.X,this.I=Cr(this,null,this.W),ve(this)};function on(t){if(_r(t),t.G==3){var r=t.U++,s=ot(t.I);if(O(s,"SID",t.K),O(s,"RID",r),O(s,"TYPE","terminate"),qt(t,s),r=new lt(t,t.j,r),r.L=2,r.v=de(ot(s)),s=!1,_.navigator&&_.navigator.sendBeacon)try{s=_.navigator.sendBeacon(r.v.toString(),"")}catch{}!s&&_.Image&&(new Image().src=r.v,s=!0),s||(r.g=Rr(r.j,null),r.g.ea(r.v)),r.F=Date.now(),le(r)}br(t)}function ye(t){t.g&&(hn(t),t.g.cancel(),t.g=null)}function _r(t){ye(t),t.u&&(_.clearTimeout(t.u),t.u=null),_e(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&_.clearTimeout(t.s),t.s=null)}function ve(t){if(!tr(t.h)&&!t.s){t.s=!0;var r=t.Ga;Mt||Ln(),Ut||(Mt(),Ut=!0),xe.add(r,t),t.B=0}}function Os(t,r){return er(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=r.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=Vt(N(t.Ga,t,r),Sr(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new lt(this,this.j,t);let E=this.o;if(this.S&&(E?(E=u(E),p(E,this.S)):E=this.S),this.m!==null||this.O||(y.H=E,E=null),this.P)t:{for(var r=0,s=0;s<this.i.length;s++){e:{var h=this.i[s];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(r+=h,4096<r){r=s;break t}if(r===4096||s===this.i.length-1){r=s+1;break t}}r=1e3}else r=1e3;r=wr(this,y,r),s=ot(this.I),O(s,"RID",t),O(s,"CVER",22),this.D&&O(s,"X-HTTP-Session-Id",this.D),qt(this,s),E&&(this.O?r="headers="+encodeURIComponent(String(fr(E)))+"&"+r:this.m&&sn(s,this.m,E)),rn(this.h,y),this.Ua&&O(s,"TYPE","init"),this.P?(O(s,"$req",r),O(s,"SID","null"),y.T=!0,Ze(y,s,null)):Ze(y,s,r),this.G=2}}else this.G==3&&(t?Er(this,t):this.i.length==0||tr(this.h)||Er(this))};function Er(t,r){var s;r?s=r.l:s=t.U++;const h=ot(t.I);O(h,"SID",t.K),O(h,"RID",s),O(h,"AID",t.T),qt(t,h),t.m&&t.o&&sn(h,t.m,t.o),s=new lt(t,t.j,s,t.B+1),t.m===null&&(s.H=t.o),r&&(t.i=r.D.concat(t.i)),r=wr(t,s,1e3),s.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),rn(t.h,s),Ze(s,h,r)}function qt(t,r){t.H&&W(t.H,function(s,h){O(r,h,s)}),t.l&&ir({},function(s,h){O(r,h,s)})}function wr(t,r,s){s=Math.min(t.i.length,s);var h=t.l?N(t.l.Na,t.l,t):null;t:{var y=t.i;let E=-1;for(;;){const T=["count="+s];E==-1?0<s?(E=y[0].g,T.push("ofs="+E)):E=0:T.push("ofs="+E);let k=!0;for(let F=0;F<s;F++){let b=y[F].g;const H=y[F].map;if(b-=E,0>b)E=Math.max(0,y[F].g-100),k=!1;else try{Rs(H,T,"req"+b+"_")}catch{h&&h(H)}}if(k){h=T.join("&");break t}}}return t=t.i.splice(0,s),r.D=t,h}function Tr(t){if(!t.g&&!t.u){t.Y=1;var r=t.Fa;Mt||Ln(),Ut||(Mt(),Ut=!0),xe.add(r,t),t.v=0}}function an(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=Vt(N(t.Fa,t),Sr(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,Ir(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Vt(N(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,K(10),ye(this),Ir(this))};function hn(t){t.A!=null&&(_.clearTimeout(t.A),t.A=null)}function Ir(t){t.g=new lt(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var r=ot(t.qa);O(r,"RID","rpc"),O(r,"SID",t.K),O(r,"AID",t.T),O(r,"CI",t.F?"0":"1"),!t.F&&t.ja&&O(r,"TO",t.ja),O(r,"TYPE","xmlhttp"),qt(t,r),t.m&&t.o&&sn(r,t.m,t.o),t.L&&(t.g.I=t.L);var s=t.g;t=t.ia,s.L=1,s.v=de(ot(r)),s.m=null,s.P=!0,qn(s,t)}n.Za=function(){this.C!=null&&(this.C=null,ye(this),an(this),K(19))};function _e(t){t.C!=null&&(_.clearTimeout(t.C),t.C=null)}function Ar(t,r){var s=null;if(t.g==r){_e(t),hn(t),t.g=null;var h=2}else if(nn(t.h,r))s=r.D,nr(t.h,r),h=1;else return;if(t.G!=0){if(r.o)if(h==1){s=r.m?r.m.length:0,r=Date.now()-r.F;var y=t.B;h=Je(),G(h,new Xn(h,s)),ve(t)}else Tr(t);else if(y=r.s,y==3||y==0&&0<r.X||!(h==1&&Os(t,r)||h==2&&an(t)))switch(s&&0<s.length&&(r=t.h,r.i=r.i.concat(s)),y){case 1:Et(t,5);break;case 4:Et(t,10);break;case 3:Et(t,6);break;default:Et(t,2)}}}function Sr(t,r){let s=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(s*=2),s*r}function Et(t,r){if(t.j.info("Error code "+r),r==2){var s=N(t.fb,t),h=t.Xa;const y=!h;h=new _t(h||"//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||ce(h,"https"),de(h),y?Ss(h.toString(),s):bs(h.toString(),s)}else K(2);t.G=0,t.l&&t.l.sa(r),br(t),_r(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),K(2)):(this.j.info("Failed to ping google.com"),K(1))};function br(t){if(t.G=0,t.ka=[],t.l){const r=rr(t.h);(r.length!=0||t.i.length!=0)&&(D(t.ka,r),D(t.ka,t.i),t.h.i.length=0,x(t.i),t.i.length=0),t.l.ra()}}function Cr(t,r,s){var h=s instanceof _t?ot(s):new _t(s);if(h.g!="")r&&(h.g=r+"."+h.g),fe(h,h.s);else{var y=_.location;h=y.protocol,r=r?r+"."+y.hostname:y.hostname,y=+y.port;var E=new _t(null);h&&ce(E,h),r&&(E.g=r),y&&fe(E,y),s&&(E.l=s),h=E}return s=t.D,r=t.ya,s&&r&&O(h,s,r),O(h,"VER",t.la),qt(t,h),h}function Rr(t,r,s){if(r&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return r=t.Ca&&!t.pa?new U(new pe({eb:s})):new U(t.pa),r.Ha(t.J),r}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pr(){}n=Pr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Y(t,r){V.call(this),this.g=new vr(r),this.l=t,this.h=r&&r.messageUrlParams||null,t=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(t?t["X-WebChannel-Content-Type"]=r.messageContentType:t={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.va&&(t?t["X-WebChannel-Client-Profile"]=r.va:t={"X-WebChannel-Client-Profile":r.va}),this.g.S=t,(t=r&&r.Sb)&&!J(t)&&(this.g.m=t),this.v=r&&r.supportsCrossDomainXhr||!1,this.u=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!J(r)&&(this.g.D=r,t=this.h,t!==null&&r in t&&(t=this.h,r in t&&delete t[r])),this.j=new Ct(this)}C(Y,V),Y.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Y.prototype.close=function(){on(this.g)},Y.prototype.o=function(t){var r=this.g;if(typeof t=="string"){var s={};s.__data__=t,t=s}else this.u&&(s={},s.__data__=Ge(t),t=s);r.i.push(new gs(r.Ya++,t)),r.G==3&&ve(r)},Y.prototype.N=function(){this.g.l=null,delete this.j,on(this.g),delete this.g,Y.aa.N.call(this)};function kr(t){Xe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var r=t.__sm__;if(r){t:{for(const s in r){t=s;break t}t=void 0}(this.i=t)&&(t=this.i,r=r!==null&&t in r?r[t]:void 0),this.data=r}else this.data=t}C(kr,Xe);function Nr(){We.call(this),this.status=1}C(Nr,We);function Ct(t){this.g=t}C(Ct,Pr),Ct.prototype.ua=function(){G(this.g,"a")},Ct.prototype.ta=function(t){G(this.g,new kr(t))},Ct.prototype.sa=function(t){G(this.g,new Nr)},Ct.prototype.ra=function(){G(this.g,"b")},Y.prototype.send=Y.prototype.o,Y.prototype.open=Y.prototype.m,Y.prototype.close=Y.prototype.close,qe.NO_ERROR=0,qe.TIMEOUT=8,qe.HTTP_ERROR=6,ds.COMPLETE="complete",hs.EventType=jt,jt.OPEN="a",jt.CLOSE="b",jt.ERROR="c",jt.MESSAGE="d",V.prototype.listen=V.prototype.K,U.prototype.listenOnce=U.prototype.L,U.prototype.getLastError=U.prototype.Ka,U.prototype.getLastErrorCode=U.prototype.Ba,U.prototype.getStatus=U.prototype.Z,U.prototype.getResponseJson=U.prototype.Oa,U.prototype.getResponseText=U.prototype.oa,U.prototype.send=U.prototype.ea,U.prototype.setWithCredentials=U.prototype.Ha}).apply(typeof Ie<"u"?Ie:typeof self<"u"?self:typeof window<"u"?window:{});const ei="@firebase/firestore",ni="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}q.UNAUTHENTICATED=new q(null),q.GOOGLE_CREDENTIALS=new q("google-credentials-uid"),q.FIRST_PARTY=new q("first-party-uid"),q.MOCK_USER=new q("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ue="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new Pn("@firebase/firestore");function nt(n,...e){if(Ne.logLevel<=P.DEBUG){const i=e.map(Wi);Ne.debug(`Firestore (${Ue}): ${n}`,...i)}}function Xi(n,...e){if(Ne.logLevel<=P.ERROR){const i=e.map(Wi);Ne.error(`Firestore (${Ue}): ${n}`,...i)}}function Wi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n="Unexpected state"){const e=`FIRESTORE (${Ue}) INTERNAL ASSERTION FAILED: `+n;throw Xi(e),new Error(e)}function Zt(n,e){n||Ji()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class et extends mt{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(q.UNAUTHENTICATED))}shutdown(){}}class ch{constructor(e){this.t=e,this.currentUser=q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){Zt(this.o===void 0);let o=this.i;const a=w=>this.i!==o?(o=this.i,i(w)):Promise.resolve();let l=new te;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new te,e.enqueueRetryable(()=>a(this.currentUser))};const d=()=>{const w=l;e.enqueueRetryable(async()=>{await w.promise,await a(this.currentUser)})},_=w=>{nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=w,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(w=>_(w)),setTimeout(()=>{if(!this.auth){const w=this.t.getImmediate({optional:!0});w?_(w):(nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new te)}},0),d()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(o=>this.i!==e?(nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(Zt(typeof o.accessToken=="string"),new uh(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Zt(e===null||typeof e=="string"),new q(e)}}class fh{constructor(e,i,o){this.l=e,this.h=i,this.P=o,this.type="FirstParty",this.user=q.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class dh{constructor(e,i,o){this.l=e,this.h=i,this.P=o}getToken(){return Promise.resolve(new fh(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ri{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ph{constructor(e,i){this.A=i,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,wt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,i){Zt(this.o===void 0);const o=l=>{l.error!=null&&nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const d=l.token!==this.R;return this.R=l.token,nt("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>o(l))};const a=l=>{nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?a(l):nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ri(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(Zt(typeof i.token=="string"),this.R=i.token,new ri(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function gh(n){return n.name==="IndexedDbTransactionError"}const ii="(default)";class Oe{constructor(e,i){this.projectId=e,this.database=i||ii}static empty(){return new Oe("","")}get isDefaultDatabase(){return this.database===ii}isEqual(e){return e instanceof Oe&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var si,S;(S=si||(si={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ki([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=1048576;function vn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,i,o=1e3,a=1.5,l=6e4){this.Ti=e,this.timerId=i,this.Go=o,this.zo=a,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const i=Math.floor(this.Ho+this.e_()),o=Math.max(0,Date.now()-this.Yo),a=Math.max(0,i-o);a>0&&nt("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${o} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,i,o,a,l){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=o,this.op=a,this.removalCallback=l,this.deferred=new te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,o,a,l){const d=Date.now()+o,_=new Dn(e,i,d,a,l);return _.start(o),_}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new et(tt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var oi,ai;(ai=oi||(oi={}))._a="default",ai.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new Map;function Eh(n,e,i,o){if(e===!0&&o===!0)throw new et(tt.INVALID_ARGUMENT,`${n} and ${i} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="firestore.googleapis.com",ui=!0;class li{constructor(e){var i,o;if(e.host===void 0){if(e.ssl!==void 0)throw new et(tt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wh,this.ssl=ui}else this.host=e.host,this.ssl=(i=e.ssl)!==null&&i!==void 0?i:ui;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=mh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<yh)throw new et(tt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Eh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_h((o=e.experimentalLongPollingOptions)!==null&&o!==void 0?o:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new et(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new et(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new et(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(o,a){return o.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Th{constructor(e,i,o,a){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=o,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new li({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new et(tt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new et(tt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new li(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(o){if(!o)return new lh;switch(o.type){case"firstParty":return new dh(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new et(tt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const o=hi.get(i);o&&(nt("ComponentProvider","Removing Datastore"),hi.delete(i),o.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="AsyncQueue";class fi{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new vh(this,"async_queue_retry"),this.bu=()=>{const o=vn();o&&nt(ci,"Visibility state changed to "+o.visibilityState),this.a_.t_()},this.Su=e;const i=vn();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const i=vn();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const i=new te;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!gh(e))throw e;nt(ci,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const i=this.Su.then(()=>(this.pu=!0,e().catch(o=>{this.gu=o,this.pu=!1;const a=function(d){let _=d.message||"";return d.stack&&(_=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),_}(o);throw Xi("INTERNAL UNHANDLED ERROR: ",a),o}).then(o=>(this.pu=!1,o))));return this.Su=i,i}enqueueAfterDelay(e,i,o){this.Du(),this.wu.indexOf(e)>-1&&(i=0);const a=Dn.createAndSchedule(this,e,i,o,l=>this.Fu(l));return this.fu.push(a),a}Du(){this.gu&&Ji()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const i of this.fu)if(i.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((i,o)=>i.targetTimeMs-o.targetTimeMs);for(const i of this.fu)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const i=this.fu.indexOf(e);this.fu.splice(i,1)}}class Ih extends Th{constructor(e,i,o,a){super(e,i,o,a),this.type="firestore",this._queue=new fi,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fi(e),this._firestoreClient=void 0,await e}}}(function(e,i=!0){(function(a){Ue=a})(Le),Ot(new Nt("firestore",(o,{instanceIdentifier:a,options:l})=>{const d=o.getProvider("app").getImmediate(),_=new Ih(new ch(o.getProvider("auth-internal")),new ph(d,o.getProvider("app-check-internal")),function(I,L){if(!Object.prototype.hasOwnProperty.apply(I.options,["projectId"]))throw new et(tt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oe(I.options.projectId,L)}(d,a),d);return l=Object.assign({useFetchStreams:i},l),_._setSettings(l),_},"PUBLIC").setMultipleInstances(!0)),It(ei,ni,e),It(ei,ni,"esm2017")})();
