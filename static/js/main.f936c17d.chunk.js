(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(8),i=n.n(a),r=(n(28),n(29),n(6)),o=n(7),l=n.n(o),d=n(55),u=n(56),j=n(58),p=n(57),b={jawgAccsessToken:"0n72W4O70irXH3A3yoCzKq7PmB2W93GoD314nXn4qZAdljJv7XNzHezazG5JdKXW",ipifyAPIKey:"at_3PAmfXnwSRCYlSpf4fBC3Rqx43yoA"},v=n.p+"static/media/icon-location.7e6459d2.svg",O=n(5),f=n.n(O),x=n(11),m=n(4),h=n(14),g=n.n(h),N=n(1),y=s.a.createContext();function k(){return Object(c.useContext)(y)}function w(e){var t=e.children,n=Object(c.useState)(),s=Object(m.a)(n,2),a=s[0],i=s[1],r=Object(c.useState)(!0),o=Object(m.a)(r,2),l=o[0],d=o[1],u=function(){var e=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.ipify.org",e.next=3,g.a.get("https://api.ipify.org");case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){j()}),[]);var p=function(){var e=Object(x.a)(f.a.mark((function e(t){var n,c,s,a,r,o,l,u,j,p,b,O;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),n=!0,c=v(t),e.prev=3,e.next=6,g.a.get(c);case 6:s=e.sent,a=s.data,r=a.location,o=r.city,l=r.country,u=r.geonameId,j=r.timezone,p=r.lat,b=r.lng,O={city:o,country:l,geonameId:u,timezone:j,isp:a.isp,ip:a.ip,position:[p,b]},i(O),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),n=!1;case 16:return d(!1),console.log(n),e.abrupt("return",n);case 19:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t="https://geo.ipify.org/api/v1?apiKey=".concat(b.ipifyAPIKey);return isNaN(e[e.length-1])?"".concat(t,"&domain=").concat(e):"".concat(t,"&ipAddress=").concat(e)},O={isLoading:l,details:a,trackAddress:p};return Object(N.jsx)(y.Provider,{value:O,children:t})}function A(){var e=k().details,t="https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=".concat(b.jawgAccsessToken),n=l.a.icon({iconUrl:v}),c={center:null===e||void 0===e?void 0:e.position,zoom:13,scrollWheelZoom:!0,zoomControl:!1};function s(){return Object(d.a)().flyTo(e.position,15,2),null}return e?Object(N.jsxs)(u.a,Object(r.a)(Object(r.a)({className:"map"},c),{},{children:[Object(N.jsx)(j.a,{url:t}),Object(N.jsx)(s,{}),Object(N.jsx)(p.a,{position:e.position,icon:n})]})):Object(N.jsx)("div",{className:"map-mockup"})}function C(){return Object(N.jsxs)("div",{className:"background",children:[Object(N.jsx)("div",{className:"top-bg"}),Object(N.jsx)(A,{})]})}n(50);function I(){return Object(N.jsxs)("div",{class:"lds-ellipsis",children:[Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{})]})}function P(){var e=k(),t=e.details,n=e.isLoading;return Object(N.jsx)("div",{className:"details",children:n?Object(N.jsx)(I,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("div",{className:"details-section",children:[Object(N.jsx)("div",{className:"details-title",children:"IP Address"}),Object(N.jsx)("div",{className:"details-section-value",children:null===t||void 0===t?void 0:t.ip})]}),Object(N.jsxs)("div",{className:"details-section",children:[Object(N.jsx)("div",{className:"details-title",children:" Location"}),Object(N.jsx)("div",{className:"details-section-value",children:"".concat(null===t||void 0===t?void 0:t.city,", ").concat(null===t||void 0===t?void 0:t.country,", ").concat(null===t||void 0===t?void 0:t.geonameId)})]}),Object(N.jsxs)("div",{className:"details-section",children:[Object(N.jsx)("div",{className:"details-title",children:"Timezone"}),Object(N.jsxs)("div",{className:"details-section-value",children:["UTC ",null===t||void 0===t?void 0:t.timezone]})]}),Object(N.jsxs)("div",{className:"details-section",children:[Object(N.jsx)("div",{className:"details-title",children:"ISP"}),Object(N.jsx)("div",{className:"details-section-value",children:null===t||void 0===t?void 0:t.isp})]})]})})}var z=n(15);n(51);function S(){return Object(N.jsx)(z.a,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})}function T(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],s=t[1],a=k(),i=a.trackAddress,r=a.isLoading,o=function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i(n);case 3:e.sent||z.b.error("Input correct IP or domain"),s("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsxs)("form",{onSubmit:function(e){return o(e)},className:"tracker-form",children:[Object(N.jsx)(S,{}),Object(N.jsx)("input",{value:n,onChange:function(e){return s(e.target.value)},className:"tracker-input",placeholder:"Search for any IP address or domain"}),Object(N.jsx)("button",{type:"submit",className:"tracker-submit",disabled:r,children:Object(N.jsx)("i",{className:"arrow right"})})]})}function L(){return Object(N.jsxs)("div",{className:"tracker",children:[Object(N.jsx)("h1",{className:"tracker-title",children:"IP Address Tracker"}),Object(N.jsx)(T,{}),Object(N.jsx)(P,{})]})}var F=function(){return Object(N.jsxs)(w,{children:[Object(N.jsx)(C,{}),Object(N.jsx)(L,{})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(F,{})}),document.getElementById("root")),B()}},[[52,1,2]]]);
//# sourceMappingURL=main.f936c17d.chunk.js.map