"use strict";(self.webpackChunkweather=self.webpackChunkweather||[]).push([[724],{724:function(n,e,i){i.r(e),i.d(e,{default:function(){return J}});var t,r,a,c,s,o,l,d,p,u,h=i(885),x=i(2791),f=i(4003),m=i(1856),g=i(168),j=i(2322),w=j.Z.div(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 20px;\n  padding: 20px;\n  width: min(90vw, 600px);\n  aspect-ratio: 2/1;\n  border-radius: 10px;\n  box-shadow: 0 0 25px 0\n    ",";\n  background-color: ",";\n"])),(function(n){return n.theme.shadow}),(function(n){return n.theme.card})),y=j.Z.div(r||(r=(0,g.Z)(["\n  display: grid;\n  place-items: center;\n  gap: 20px;\n"]))),Z=j.Z.div(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: ",";\n  justify-content: center;\n  gap: 10px;\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.alignItems})),b=i(184),v=function(n){var e=n.children,i=n.alignItems;return(0,b.jsx)(Z,{alignItems:i,children:e})},k=j.Z.div(c||(c=(0,g.Z)(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  min-width: 150px;\n  padding: 10px 15px;\n  border-radius: 10px;\n  user-select: none;\n  transition: background-color 200ms;\n  background-color: ",";\n  &:active {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.input}),(function(n){return n.theme.button})),z=(0,j.Z)(f.E.div)(s||(s=(0,g.Z)(["\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-radius: 10px;\n  user-select: none;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background-color: ",";\n  box-shadow: 0 0 20px 0\n    ",";\n"])),(function(n){return n.theme.input}),(function(n){return n.theme.shadow})),C=k,T=j.Z.span(o||(o=(0,g.Z)(['\n  font-family: "Segoe Fluent Icons", sans-serif;\n']))),E=function(n){var e=n.header,i=n.children,t=(0,x.useState)(!1),r=(0,h.Z)(t,2),a=r[0],c=r[1];return(0,b.jsxs)(C,{onClick:function(){return c(!a)},children:[(0,b.jsx)("span",{children:e}),(0,b.jsx)(T,{children:a?"\ue010":"\ue011"}),(0,b.jsx)(z,{initial:{opacity:0,height:0},animate:{opacity:a?1:0,height:a?250:0},transition:{type:"spring",mass:.3,stiffness:150,damping:10},onMouseLeave:function(){return c(!1)},children:a&&i})]})},I=i(1413),S=i(4925),M=(0,j.Z)(f.E.div)(l||(l=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px 15px;\n  border-radius: 10px;\n  user-select: none;\n  transition: background-color 200ms;\n  background-color: ",";\n  &:active {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.input}),(function(n){return n.theme.button})),W=["children"],G=function(n){var e=n.children,i=(0,S.Z)(n,W);return(0,b.jsx)(M,(0,I.Z)((0,I.Z)({},i),{},{children:e}))},K=i(5522),L=["Bydgoszcz","Che\u0142m","Elbl\u0105g","Gda\u0144sk","Katowice","Ko\u0142obrzeg","Krak\xf3w","Lublin","\u0141\xf3d\u017a","Olsztyn","Opole","Pozna\u0144","Rybnik","Rzesz\xf3w","Sosnowiec","Starogard","Szczecin","Tarnowskie G\xf3ry","Tarn\xf3w","Toru\u0144","Tychy","Warszawa","Wroc\u0142aw","Zielona G\xf3ra"],P=j.Z.div(d||(d=(0,g.Z)(["\n  padding: 10px 15px;\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.card})),O=function(n){var e=n.city,i=n.setCity,t=n.setPicker;return(0,b.jsx)(f.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,scale:0},children:(0,b.jsxs)(w,{children:[(0,b.jsx)(y,{children:(0,b.jsx)(K.Z,{src:"./images/Map.webp",alt:"Map"})}),(0,b.jsxs)(v,{alignItems:"flex-end",children:[(0,b.jsx)(E,{header:e||"Choose a city",children:L.map((function(n,e){return(0,b.jsx)(P,{onClick:function(){return i(n)},children:n},e)}))}),e&&(0,b.jsxs)(G,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},onClick:function(){return t(!1)},children:[(0,b.jsx)("span",{children:"Check weather"}),(0,b.jsx)(T,{children:"\ue00f"})]})]})]})})},R=i(8214),q=i(5861),B=i(9066),F=i(1933),Q=i(763),U=j.Z.div(p||(p=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n"]))),A=j.Z.div(u||(u=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.2rem;\n  padding: 10px 15px;\n  background-color: ",";\n  border-radius: 10px;\n"])),(function(n){return n.theme.input})),D=function(){return(0,b.jsxs)(w,{children:[(0,b.jsx)(y,{children:(0,b.jsx)(K.Z,{src:"./images/Turtel.webp",alt:"Turtel"})}),(0,b.jsx)(v,{alignItems:"center",children:(0,b.jsx)("h1",{children:"Unable to get a response from the server"})})]})},H=function(n){var e=n.city,i=(0,F.useQuery)([e],(0,q.Z)((0,R.Z)().mark((function n(){var i;return(0,R.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=6967cc85728d1a5a59fa0fdd6086595e"));case 2:return i=n.sent,n.next=5,i.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))),t=i.isLoading,r=i.error,a=i.data;return r?(0,b.jsx)(f.E.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},children:(0,b.jsx)(D,{})}):t?(0,b.jsx)(B.Z,{}):(0,b.jsx)(f.E.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},children:(0,b.jsxs)(w,{children:[(0,b.jsx)(y,{children:(0,b.jsx)(K.Z,{src:"./images/".concat(a?a.weather[0].main:"weather",".webp"),alt:a?a.weather[0].main:""})}),(0,b.jsxs)(v,{alignItems:"center",children:[(0,b.jsx)("h1",{children:a?a.name:""}),(0,b.jsx)("h2",{children:a?(0,Q.capitalize)(a.weather[0].description):""}),(0,b.jsxs)(U,{children:[(0,b.jsxs)(A,{children:[(0,b.jsx)(K.Z,{src:"./images/Thermometer.webp",alt:"Thermometer"}),(0,b.jsx)("span",{children:a?"".concat(Math.floor(a.main.temp-273.15)," \xb0C"):""})]}),(0,b.jsxs)(A,{children:[(0,b.jsx)(K.Z,{src:"./images/Windsock.webp",alt:"Windsock"}),(0,b.jsx)("span",{children:a?a.wind.speed:""})]})]})]})]})})},J=function(){var n=(0,x.useState)(""),e=(0,h.Z)(n,2),i=e[0],t=e[1],r=(0,x.useState)(!0),a=(0,h.Z)(r,2),c=a[0],s=a[1];return(0,b.jsx)(f.E.div,{initial:{opacity:0,scale:"0%"},animate:{opacity:1,scale:"100%"},children:(0,b.jsxs)(m.M,{initial:!1,children:[c&&(0,b.jsx)(O,{city:i,setCity:t,setPicker:s}),!c&&i&&(0,b.jsx)(H,{city:i})]})})}}}]);
//# sourceMappingURL=724.3c73d812.chunk.js.map