/*
SPF 24 (v2.4.1)
(c) 2012-2016 Google Inc.
https://ajax.googleapis.com/ajax/libs/spf/2.4.1/LICENSE
*/
(function(){function g(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var c=d.slice();c.push.apply(c,arguments);return a.apply(b,c)}};function l(a,b){for(var c=0,d=a.length;c<d;c++)c in a&&b.call(void 0,a[c],c,a)}function m(a,b){for(var c=0,d=a.length;c<d;c++)if(c in a&&!b.call(void 0,a[c],c,a))return!1;return!0}function n(a,b){var c=[];l(a,function(a,f,k){b.call(void 0,a,f,k)&&c.push(a)});return c};(window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()})();var p=window._spf_state||{};window._spf_state=p;function q(a,b){a&&b&&(a in r||(r[a]=[]),r[a].push(b))}function t(a){a in r&&l(r[a],function(a,c,d){d[c]=null;a&&a()})}var r={};p["ps-s"]=r;var u={};"config"in p||(p.config=u);u=p.config;function v(a){var b=document.createElement("a");b.href=a;b.href=b.href;return b.href.split("#")[0]};function w(a,b,c){var d=x;a=y(d,a);var f=b||"^"+a,k=z(d,f),h;h=z(d,a);if((h=A[h])&&f!=h){var e=z(d,h);delete B[e];e=z(d,a);delete A[e];(e=z(d,h))&&k&&e in r&&(r[k]=(r[k]||[]).concat(r[e]),delete r[e])}e=z(d,a);A[e]=f;var e=a,Q=z(d,f);B[Q]=e;q(k,c);c=g(C,null,d);D(d,a)?(h&&f!=h&&(a=a?String(a).replace(/[^\w]/g,""):"",d="."+z(d,a),a=document,(d=(a.querySelectorAll?a.querySelectorAll(d):[])[0])&&d.setAttribute("name",b||"")),c()):(d=E(d,a,c,void 0,void 0))&&b&&d.setAttribute("name",b)}
function C(a){var b=z(a,""),c;for(c in r)0==c.indexOf(b)&&m(c.substring(b.length).split("|"),g(F,null,a))&&t(c)}
function E(a,b,c,d,f){function k(){D(a,b,f)&&G(H,a,b,f);e&&e.parentNode&&h==document&&e.parentNode.removeChild(e);c&&setTimeout(c,0);return null}b=y(a,b);G(I,a,b,f);var h=d||document,e=h.createElement("script");if(!b)return k();d=b?String(b).replace(/[^\w]/g,""):"";e.className=z(a,d);"onload"in e?e.onerror=e.onload=k:e.onreadystatechange=function(){/^c|loade/.test(e.readyState)&&k()};d=h.getElementsByTagName("head")[0]||h.body;e.async=!0;e.src=b;d.insertBefore(e,d.firstChild);return e}
function y(a,b){var c="rsrc-p-"+a;if(b){var d=b.indexOf("//");if(0>d){if(0==b.lastIndexOf("hash-",0))return b;c=p[c]||"";if("string"==typeof c)b=c+b;else for(var f in c)b=b.replace(f,c[f]);a!=J&&(b=0>b.indexOf("."+a)?b+"."+a:b);b=v(b)}else 0==d&&(b=v(b))}return b}function z(a,b,c){return a+"-"+b+(c?"-"+c:"")}function G(a,b,c,d){b=z(b,c,d);K[b]=a}function D(a,b,c){a=z(a,b,c);return K[a]}function L(a,b){var c=z(a,b);return B[c]}
function F(a,b){var c=L(a,b),d;if(d=void 0!=c)d=D(a,c),d=""==c||d==H;return d}var K={},A={},B={},I=1,H=2,J="img",x="js";p["rsrc-s"]=K;p["rsrc-n"]=A;p["rsrc-u"]=B;function M(a,b,c){a=a&&a.push?a:[a];a=n(a,function(a){return!!a});var d=[];l(a,function(a){void 0==L(x,a)&&d.push(a)});var f=!d.length;if(b){var k=m(a,g(F,null,x));f&&k?b():(a=z(x,a.sort().join("|")),q(a,b))}c&&!f&&c(d)}function N(a,b){M(a,b,O)}function O(a){l(a,function(a){function c(){w(f,a,void 0)}var d=P[a],f=R[a]||a;d?N(d,c):c()})}var P={};p["js-d"]=P;var R={};p["js-u"]=R;var S={script:{load:function(a,b,c){w(a,b,c)},get:function(a,b){E(x,a,b)},ready:M,done:function(a){a=z(x,a);B[a]="";C(x)},require:N,declare:function(a,b){if(a){for(var c in a)P[c]=a[c];if(b)for(c in b)R[c]=b[c]}},path:function(a){p["rsrc-p-"+x]=a}}},T=this.spf=this.spf||{},U;for(U in S)T[U]=S[U];})();
