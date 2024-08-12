(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const Y=(e,s)=>e===s,U={equals:Y};let J=W;const m=1,A=2,H={owned:null,cleanups:null,context:null,owner:null};var g=null;let O=null,Z=null,c=null,d=null,$=null,N=0;function k(e,s){const t=c,n=g,l=e.length===0,i=s===void 0?n:s,o=l?H:{owned:null,cleanups:null,context:i?i.context:null,owner:i},r=l?e:()=>e(()=>B(()=>P(o)));g=o,c=null;try{return _(r,!0)}finally{c=t,g=n}}function x(e,s){s=s?Object.assign({},U,s):U;const t={value:e,observers:null,observerSlots:null,comparator:s.equals||void 0},n=l=>(typeof l=="function"&&(l=l(t.value)),j(t,l));return[z.bind(t),n]}function b(e,s,t){const n=te(e,s,!1,m);R(n)}function B(e){if(c===null)return e();const s=c;c=null;try{return e()}finally{c=s}}function z(){if(this.sources&&this.state)if(this.state===m)R(this);else{const e=d;d=null,_(()=>C(this),!1),d=e}if(c){const e=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(e)):(c.sources=[this],c.sourceSlots=[e]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function j(e,s,t){let n=e.value;return(!e.comparator||!e.comparator(n,s))&&(e.value=s,e.observers&&e.observers.length&&_(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],o=O&&O.running;o&&O.disposed.has(i),(o?!i.tState:!i.state)&&(i.pure?d.push(i):$.push(i),i.observers&&G(i)),o||(i.state=m)}if(d.length>1e6)throw d=[],new Error},!1)),s}function R(e){if(!e.fn)return;P(e);const s=N;ee(e,e.value,s)}function ee(e,s,t){let n;const l=g,i=c;c=g=e;try{n=e.fn(s)}catch(o){return e.pure&&(e.state=m,e.owned&&e.owned.forEach(P),e.owned=null),e.updatedAt=t+1,V(o)}finally{c=i,g=l}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?j(e,n):e.value=n,e.updatedAt=t)}function te(e,s,t,n=m,l){const i={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:s,owner:g,context:g?g.context:null,pure:t};return g===null||g!==H&&(g.owned?g.owned.push(i):g.owned=[i]),i}function q(e){if(e.state===0)return;if(e.state===A)return C(e);if(e.suspense&&B(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<N);)e.state&&s.push(e);for(let t=s.length-1;t>=0;t--)if(e=s[t],e.state===m)R(e);else if(e.state===A){const n=d;d=null,_(()=>C(e,s[0]),!1),d=n}}function _(e,s){if(d)return e();let t=!1;s||(d=[]),$?t=!0:$=[],N++;try{const n=e();return se(t),n}catch(n){t||($=null),d=null,V(n)}}function se(e){if(d&&(W(d),d=null),e)return;const s=$;$=null,s.length&&_(()=>J(s),!1)}function W(e){for(let s=0;s<e.length;s++)q(e[s])}function C(e,s){e.state=0;for(let t=0;t<e.sources.length;t+=1){const n=e.sources[t];if(n.sources){const l=n.state;l===m?n!==s&&(!n.updatedAt||n.updatedAt<N)&&q(n):l===A&&C(n,s)}}}function G(e){for(let s=0;s<e.observers.length;s+=1){const t=e.observers[s];t.state||(t.state=A,t.pure?d.push(t):$.push(t),t.observers&&G(t))}}function P(e){let s;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const i=l.pop(),o=t.observerSlots.pop();n<l.length&&(i.sourceSlots[o]=n,l[n]=i,t.observerSlots[n]=o)}}if(e.owned){for(s=e.owned.length-1;s>=0;s--)P(e.owned[s]);e.owned=null}if(e.cleanups){for(s=e.cleanups.length-1;s>=0;s--)e.cleanups[s]();e.cleanups=null}e.state=0}function le(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function V(e,s=g){throw le(e)}function K(e,s){return B(()=>e(s||{}))}function ne(e,s,t){let n=t.length,l=s.length,i=n,o=0,r=0,a=s[l-1].nextSibling,y=null;for(;o<l||r<i;){if(s[o]===t[r]){o++,r++;continue}for(;s[l-1]===t[i-1];)l--,i--;if(l===o){const p=i<n?r?t[r-1].nextSibling:t[i-r]:a;for(;r<i;)e.insertBefore(t[r++],p)}else if(i===r)for(;o<l;)(!y||!y.has(s[o]))&&s[o].remove(),o++;else if(s[o]===t[i-1]&&t[r]===s[l-1]){const p=s[--l].nextSibling;e.insertBefore(t[r++],s[o++].nextSibling),e.insertBefore(t[--i],p),s[l]=t[i]}else{if(!y){y=new Map;let u=r;for(;u<i;)y.set(t[u],u++)}const p=y.get(s[o]);if(p!=null)if(r<p&&p<i){let u=o,h=1,f;for(;++u<l&&u<i&&!((f=y.get(s[u]))==null||f!==p+h);)h++;if(h>p-r){const S=s[o];for(;r<p;)e.insertBefore(t[r++],S)}else e.replaceChild(t[r++],s[o++])}else o++;else s[o++].remove()}}}const F="_$DX_DELEGATE";function ie(e,s,t,n={}){let l;return k(i=>{l=i,s===document?e():Q(s,e(),s.firstChild?null:void 0,t)},n.owner),()=>{l(),s.textContent=""}}function w(e,s,t){let n;const l=()=>{const o=document.createElement("template");return o.innerHTML=e,o.content.firstChild},i=()=>(n||(n=l())).cloneNode(!0);return i.cloneNode=i,i}function re(e,s=window.document){const t=s[F]||(s[F]=new Set);for(let n=0,l=e.length;n<l;n++){const i=e[n];t.has(i)||(t.add(i),s.addEventListener(i,oe))}}function Q(e,s,t,n){if(t!==void 0&&!n&&(n=[]),typeof s!="function")return T(e,s,n,t);b(l=>T(e,s(),l,t),n)}function oe(e){const s=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const n=t[s];if(n&&!t.disabled){const l=t[`${s}Data`];if(l!==void 0?n.call(t,l,e):n.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function T(e,s,t,n,l){for(;typeof t=="function";)t=t();if(s===t)return t;const i=typeof s,o=n!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(i==="number"&&(s=s.toString(),s===t))return t;if(o){let r=t[0];r&&r.nodeType===3?r.data!==s&&(r.data=s):r=document.createTextNode(s),t=v(e,t,n,r)}else t!==""&&typeof t=="string"?t=e.firstChild.data=s:t=e.textContent=s}else if(s==null||i==="boolean")t=v(e,t,n);else{if(i==="function")return b(()=>{let r=s();for(;typeof r=="function";)r=r();t=T(e,r,t,n)}),()=>t;if(Array.isArray(s)){const r=[],a=t&&Array.isArray(t);if(D(r,s,t,l))return b(()=>t=T(e,r,t,n,!0)),()=>t;if(r.length===0){if(t=v(e,t,n),o)return t}else a?t.length===0?M(e,r,n):ne(e,t,r):(t&&v(e),M(e,r));t=r}else if(s.nodeType){if(Array.isArray(t)){if(o)return t=v(e,t,n,s);v(e,t,null,s)}else t==null||t===""||!e.firstChild?e.appendChild(s):e.replaceChild(s,e.firstChild);t=s}}return t}function D(e,s,t,n){let l=!1;for(let i=0,o=s.length;i<o;i++){let r=s[i],a=t&&t[e.length],y;if(!(r==null||r===!0||r===!1))if((y=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))l=D(e,r,a)||l;else if(y==="function")if(n){for(;typeof r=="function";)r=r();l=D(e,Array.isArray(r)?r:[r],Array.isArray(a)?a:[a])||l}else e.push(r),l=!0;else{const p=String(r);a&&a.nodeType===3&&a.data===p?e.push(a):e.push(document.createTextNode(p))}}return l}function M(e,s,t=null){for(let n=0,l=s.length;n<l;n++)e.insertBefore(s[n],t)}function v(e,s,t,n){if(t===void 0)return e.textContent="";const l=n||document.createTextNode("");if(s.length){let i=!1;for(let o=s.length-1;o>=0;o--){const r=s[o];if(l!==r){const a=r.parentNode===e;!i&&!o?a?e.replaceChild(l,r):e.insertBefore(l,t):a&&r.remove()}else i=!0}}else e.insertBefore(l,t);return[l]}var ue=w("<div class=container>"),fe=w("<h2>Start Time:<input>"),ce=w("<h2>Seconds elapsed:<input>"),ae=w("<h2>Dollars Made:<input><button>Reset"),he=w("<h2>Secondly Rate:<input>"),pe=w("<h2>Hourly Rate:<input>"),de=w("<h2>Yearly Rate:<input>"),ge=w("<div class=container><h1>Settings</h1><h2>Salary</h2><input><h2>Hours Per Week</h2><input>");const E=new Intl.NumberFormat("en-us",{style:"currency",currency:"USD"});function ye(){return(()=>{var e=ue();return Q(e,K(be,{})),e})()}function be(){let e=new Date,[s,t]=x(0),[n,l]=x(0),[i,o]=x(175e3),[r,a]=x("40"),y=()=>i()/52/parseInt("0"+r()),p=()=>y()/60/60;return setInterval(()=>{t(u=>u+p()),l(u=>u+1)},1e3),[(()=>{var u=fe(),h=u.firstChild,f=h.nextSibling;return f.disabled=!0,b(()=>f.value=e.toLocaleString()),u})(),(()=>{var u=ce(),h=u.firstChild,f=h.nextSibling;return f.disabled=!0,b(()=>f.value=n()+" seconds"),u})(),(()=>{var u=ae(),h=u.firstChild,f=h.nextSibling,S=f.nextSibling;return f.disabled=!0,S.$$click=()=>t(0),b(()=>f.value=E.format(s())),u})(),(()=>{var u=he(),h=u.firstChild,f=h.nextSibling;return f.disabled=!0,b(()=>f.value=E.format(p())+" per second"),u})(),(()=>{var u=pe(),h=u.firstChild,f=h.nextSibling;return f.disabled=!0,b(()=>f.value=E.format(y())+" per hour"),u})(),(()=>{var u=de(),h=u.firstChild,f=h.nextSibling;return f.disabled=!0,b(()=>f.value=E.format(i())+" per year"),u})(),(()=>{var u=ge(),h=u.firstChild,f=h.nextSibling,S=f.nextSibling,X=S.nextSibling,I=X.nextSibling;return S.$$keyup=L=>o(parseFloat(L.target.value)),I.$$keyup=L=>{a(L.target.value),t(0)},b(()=>S.value=i()),b(()=>I.value=r()),u})()]}re(["click","keyup"]);ie(()=>K(ye,{}),document.getElementById("root"));
