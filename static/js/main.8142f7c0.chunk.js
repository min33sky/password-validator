(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t){e.exports={upperCase:{message:"Must have at least one upper-case character",pattern:/([A-Z]+)/},lowerCase:{message:"Must have at least one lower-case character",pattern:/([a-z]+)/},special:{message:"Must have at least one special character (#$@!&%...)",pattern:/([\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~]+)/},number:{message:"Must have at least one number",pattern:/([0-9]+)/},over6:{message:"Must be more than 6 characters",pattern:/(.{6,})/}}},,,function(e,t,a){e.exports={container:"Password_container__20EB7",wrapper:"Password_wrapper__1RZil",label:"Password_label__Lp-1J",visible:"Password_visible__2ht1q",buttons:"Password_buttons__1xAOP",save:"Password_save__FvWNp",ok:"Password_ok__2auZ0"}},function(e,t,a){e.exports={wrapper:"PasswordInput_wrapper__3iTA1",input:"PasswordInput_input__A33Fq"}},function(e,t,a){e.exports={wrapper:"PasswordVisible_wrapper__2lBHj",visible:"PasswordVisible_visible__1sJHE"}},function(e,t,a){e.exports={generate:"PasswordGenerate_generate__mBW93"}},,function(e,t,a){e.exports=a(27)},,,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),o=a.n(s);a(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(2),l=a(3),i=a(5),u=a(4),p=a(6),m=a(7),h=a.n(m),d=a(1),v=a.n(d),b=a(10),w=a.n(b),g=a(14),f="!@#$%^&*()_+{}:\"<>?|[]',./`~",_="".concat(f).concat("abcdefghijklmnopqrstuvwxyz").concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ").concat("0123456789"),k=function(e){return Array.from({length:e},function(e,t){return t+1})},E=function(e,t,a){var n=t;return"undefined"!==typeof a&&(n+=Math.floor(Math.random()*(a-t))),k(n).map(function(){return e.charAt(Math.floor(Math.random()*e.length))}).join("")},y=function(){return function(e){var t=e.split(""),a=t.length;return k(a).reverse().reduce(function(e,t,a){var n=Math.floor(Math.random()*t),r=[e[n],e[t-1]];return e[t-1]=r[0],e[n]=r[1],e},Object(g.a)(t)).join("")}(E(f,1)+E("abcdefghijklmnopqrstuvwxyz",1)+E("0123456789",1)+E("ABCDEFGHIJKLMNOPQRSTUVWXYZ",1)+E(_,4,12))},j=a(11),P=a.n(j),O=v.a.bind(P.a),C=function(e){var t=e.name,a=e.value,n=e.onChange,s=e.visible;return r.a.createElement("div",{className:O("wrapper")},r.a.createElement("input",{className:O("input"),type:s?"text":"password",name:t,value:a,onChange:n,placeholder:"Input Password"}))},N=a(12),S=a.n(N),M=v.a.bind(S.a),x=function(e){var t=e.checked,a=e.onToggle;return r.a.createElement("div",{className:M("wrapper")},r.a.createElement("label",null,r.a.createElement("input",{className:M("visible"),type:"checkbox",checked:t,onChange:a}),"Show Password"))},A=function(e){var t=e.rules.map(function(e,t,a){return e.isCompleted?r.a.createElement("li",{key:e.key},r.a.createElement("s",null,e.rule.message)):r.a.createElement("li",{key:e.key},e.rule.message)});return r.a.createElement("div",null,r.a.createElement("h4",null,"Password Strength"),r.a.createElement("ul",null,t))},B=a(13),I=a.n(B),W=v.a.bind(I.a),J=function(e){var t=e.onClick,a=e.children;return r.a.createElement("button",{className:W("generate"),onClick:t},a)},V=v.a.bind(w.a),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={strength:{},password:"",visible:!1,ok:!1},a.checkStrength=function(e){var t=e.target.value;a.setState({password:t});var n={};console.log(a.props),Object.keys(a.props).forEach(function(e,r,s){a.props[e]&&h.a[e].pattern.test(t)&&(n[e]=!0)}),a.setState({strength:n},function(){Object.keys(a.state.strength).length===Object.keys(a.props).length?a.setState({ok:!0}):a.setState({ok:!1})})},a.toggleVisibility=function(){a.setState({visible:!a.state.visible})},a.generate=function(){a.setState({visible:!0,password:y()},function(){a.checkStrength({target:{value:a.state.password}})})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props).map(function(t){if(e.props[t])return{key:t,rule:h.a[t],isCompleted:e.state.strength[t]||!1}}),a=this.state,n=a.visible,s=a.password,o=a.ok,c=this.checkStrength,l=this.toggleVisibility,i=this.generate;return r.a.createElement("div",{className:V("container")},r.a.createElement("h1",null,"Password Input Wiget"),r.a.createElement("div",{className:V("wrapper")},r.a.createElement("label",{className:V("label")},"Password"),r.a.createElement(C,{name:"password",onChange:c,value:s,visible:n}),r.a.createElement(x,{className:V("visible"),checked:n,onToggle:l}),r.a.createElement(A,{rules:t}),r.a.createElement("div",{className:V("buttons")},r.a.createElement(J,{onClick:i},"Generate"),r.a.createElement("button",{className:o?V("save","ok"):V("save"),disabled:!o},"Save"))))}}]),t}(n.Component),Z=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(T,{upperCase:!0,lowerCase:!0,special:!0,number:!0,over6:!0})}}]),t}(n.Component),q=function(){return r.a.createElement(Z,null)};o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,2,1]]]);
//# sourceMappingURL=main.8142f7c0.chunk.js.map