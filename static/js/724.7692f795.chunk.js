"use strict";(self.webpackChunkpet_team02=self.webpackChunkpet_team02||[]).push([[724],{5351:function(n,t,e){e.d(t,{Z:function(){return l}});var r,o=e(168),i=e(6444),a=e(1607),s=(0,i.ZP)("h1")(r||(r=(0,o.Z)(["\n  margin: 0;\n  margin-bottom: 30px;\n\n  text-align: center;\n  font-family: ",";\n  font-weight: ",";\n  font-size: 24px;\n  line-height: 1.375;\n  color: ",";\n\n  "," {\n    margin-bottom: 40px;\n    font-size: 48px;\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.black}),a.r.mq.tablet),c=e(184),l=function(n){var t=n.children;return(0,c.jsx)(s,{children:t})}},4724:function(n,t,e){e.r(t),e.d(t,{default:function(){return V}});var r,o,i,a,s,c,l,u,p,d,f,h,x,g,m=e(9439),b=e(1413),w=e(5861),Z=e(4687),v=e.n(Z),j=e(168),y=e(6444),P=e(1607),k=(0,y.ZP)("ul")(r||(r=(0,j.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n\n  "," {\n    display: flex;\n    flex-wrap: wrap;\n    column-gap: 32px;\n    row-gap: 32px;\n  }\n"])),P.r.mq.tablet),q=(0,y.ZP)("li")(o||(o=(0,j.Z)(["\n  width: 100%;\n  margin-bottom: 40px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  "," {\n    margin-bottom: 28px;\n    flex-basis: calc((100% - 32px) / 2);\n  }\n\n  "," {\n    flex-basis: calc((100% - 64px) / 3);\n  }\n"])),P.r.mq.tablet,P.r.mq.desktop),C=e(2791),S=e(1243),W=(0,y.ZP)("div")(i||(i=(0,j.Z)(["\n  margin-bottom: 4px;\n  background: linear-gradient(0.25turn, #ff634e, #ffdf48);\n  height: 4px;\n  width: 200px;\n  border-radius: 40px;\n\n  "," {\n    height: 8px;\n    width: 280px;\n  }\n\n  "," {\n    width: 340px;\n  }\n"])),P.r.mq.tablet,P.r.mq.desktop),z=(0,y.ZP)("h2")(a||(a=(0,j.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 24px;\n  line-height: 1.37;\n  margin-bottom: 16px;\n"])),P.r.fonts.manrope,P.r.fontWeights.bold),D=(0,y.ZP)("p")(s||(s=(0,j.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 16px;\n  line-height: 1.37;\n\n  color: ",";\n\n  margin-bottom: 20px;\n\n  "," {\n    margin-bottom: 40px;\n  }\n"])),P.r.fonts.manrope,P.r.fontWeights.normal,P.r.colors.textNews,P.r.mq.tablet),O=(0,y.ZP)("div")(c||(c=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),L=(0,y.ZP)("p")(l||(l=(0,j.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 16px;\n  line-height: 1.37;\n  color: ",";\n"])),P.r.fonts.manrope,P.r.fontWeights.normal,P.r.colors.grey),_=(0,y.ZP)("a")(u||(u=(0,j.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: 16px;\n  line-height: 1.37;\n\n  text-decoration: underline;\n  color: ",";\n"])),P.r.fonts.manrope,P.r.fontWeights.medium,P.r.colors.accent),F=e(184),N=function(n){var t=n.title,e=n.url,r=n.description,o=n.date;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(W,{}),(0,F.jsx)(z,{children:function(n){if(n.length>42){var t=n.slice(0,42);return"".concat(t," ...")}return n}(t)}),(0,F.jsx)(D,{children:function(n){if(n.length>213){var t=n.slice(0,213);return"".concat(t," ...")}return n}(r)}),(0,F.jsxs)(O,{children:[(0,F.jsx)(L,{children:function(n){if(!n)return"----/----/--------";var t=new Date(n),e=t.getDate().toString().padStart(2,"0"),r=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getFullYear();return"".concat(e,"/").concat(r,"/").concat(o)}(o)}),(0,F.jsx)(_,{href:e,target:"_blank",children:"Read more"})]})]})},B=function(n){var t=n.notify,e=n.searchWord,r=(0,C.useState)([]),o=(0,m.Z)(r,2),i=o[0],a=o[1],s=(0,C.useState)([]),c=(0,m.Z)(s,2),l=c[0],u=c[1];return(0,C.useEffect)((function(){var n=function(){var n=(0,w.Z)(v().mark((function n(){var t,e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S.Z.get("https://tiny-hare-cowboy-hat.cyclic.app/api/news");case 2:t=n.sent,(e=t.data.result).sort((function(n,t){var e=n.date?new Date(n.date):new Date(0);return(t.date?new Date(t.date):new Date(0))-e})),a(e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,C.useEffect)((function(){var n=i.filter((function(n){return n.title.toLowerCase().includes(e.toLowerCase())}));if(n.length>0)return u(n);var r=i.filter((function(n){return n.description.toLowerCase().includes(e.toLowerCase())}));if(r.length>0)return u(r);0===n.length&&0===r.length&&e&&t("No news were found for your request")}),[t,i,e]),l.length>0?(0,F.jsx)(k,{children:l.map((function(n){return(0,F.jsx)(q,{children:(0,F.jsx)(N,(0,b.Z)({},n))},n._id)}))}):(0,F.jsx)(k,{children:i.map((function(n){return(0,F.jsx)(q,{children:(0,F.jsx)(N,(0,b.Z)({},n))},n._id)}))})},E=e(9085),H=(e(5462),e(2070)),I=e(7692),Y=e(5880),A=(0,y.ZP)("form")(p||(p=(0,j.Z)(["\n  position: relative;\n  width: 100%;\n  margin-bottom: 40px;\n  margin-left: auto;\n  margin-right: auto;\n\n  "," {\n    margin-bottom: 60px;\n    width: 608px;\n  }\n"])),P.r.mq.tablet),M=(0,y.ZP)("input")(d||(d=(0,j.Z)(["\n  padding: 9px 48px 9px 12px;\n  width: 100%;\n\n  font-family: ",";\n  font-weight: ",";\n  font-size: 16px;\n  line-height: 1.375;\n  letter-spacing: 0.04em;\n  color: #535353;\n\n  background-color: ",";\n  border: ",";\n  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);\n  border-radius: ",";\n\n  "," {\n    padding: 9px 56px 9px 20px;\n    font-size: 20px;\n  }\n\n  &:focus,\n  &:focus-visible {\n    outline: 1px solid rgba(245, 146, 86, 0.5);\n  }\n"])),(function(n){return n.theme.fonts.manrope}),(function(n){return n.theme.fontWeights.medium}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.radii.small}),P.r.mq.tablet),R=(0,y.ZP)("button")(f||(f=(0,j.Z)(["\n  cursor: pointer;\n  padding: 0;\n  width: 20px;\n  height: 20px;\n\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n\n  background-color: transparent;\n  border: none;\n\n  "," {\n    width: 24px;\n    height: 24px;\n  }\n\n  &:focus,\n  &:focus-visible {\n    box-shadow: none;\n  }\n"])),P.r.mq.tablet),T=(0,y.ZP)(I.wnI)(h||(h=(0,j.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),G=(0,y.ZP)(Y.dc5)(x||(x=(0,j.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),J=function(n){var t=n.setSearchWord,e=(0,C.useState)(""),r=(0,m.Z)(e,2),o=r[0],i=r[1];return(0,F.jsxs)(A,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.search.value;t(e)},children:[(0,F.jsx)(M,{type:"text",name:"search",placeholder:"Search",onChange:function(n){var e=n.target.value;i(e),t(e)},value:o}),o?(0,F.jsx)(R,{type:"button",children:(0,F.jsx)(G,{onClick:function(){i(""),t("")}})}):(0,F.jsx)(R,{type:"submit",children:(0,F.jsx)(T,{})})]})},K=e(5351),Q=(0,y.ZP)("div")(g||(g=(0,j.Z)(["\n  padding-top: 40px;\n  padding-bottom: 100px;\n\n  "," {\n    padding-top: 90px;\n  }\n\n  "," {\n    padding-top: 70px;\n    padding-bottom: 200px;\n  }\n"])),P.r.mq.tablet,P.r.mq.desktop),U=function(){var n=(0,C.useState)(""),t=(0,m.Z)(n,2),e=t[0],r=t[1];return(0,F.jsx)(Q,{children:(0,F.jsxs)(H.Z,{children:[(0,F.jsx)(E.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),(0,F.jsx)(K.Z,{children:"News"}),(0,F.jsx)(J,{setSearchWord:r}),(0,F.jsx)(B,{notify:function(n){return E.Am.error(n,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},searchWord:e})]})})},V=function(){return(0,F.jsx)("div",{children:(0,F.jsx)(U,{})})}}}]);
//# sourceMappingURL=724.7692f795.chunk.js.map