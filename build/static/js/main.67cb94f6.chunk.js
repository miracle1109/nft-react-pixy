(this["webpackJsonppixy-web-app"]=this["webpackJsonppixy-web-app"]||[]).push([[0],{114:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return k}));var a=n(0),c=n.n(a),r=n(30),i=n(14),o=n(10),l=n(672),s=n(682),d=n(666),b=n(671),u=n(670),j=n(1),x=function(e){e.children;var t=c.a.useState(null),n=Object(o.a)(t,2),a=n[0],r=n[1],x=c.a.useState(null),p=Object(o.a)(x,2),h=p[0],g=p[1];return console.log("launchValue: ",a),console.log("completionValue: ",h),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"Start your Campaign"}),Object(j.jsx)(s.a,{children:Object(j.jsx)(l.a,{id:"outlined-basic",label:"Name",variant:"outlined"})}),Object(j.jsxs)(s.a,{children:[Object(j.jsxs)(d.b,{dateAdapter:b.a,children:[Object(j.jsx)(u.a,{label:"Launch Date",value:a,onChange:function(e){r(e)},renderInput:function(e){return Object(j.jsx)(l.a,Object(i.a)({},e))}})," ",Object(j.jsx)(u.a,{label:"Completion Date",value:h,onChange:function(e){g(e)},renderInput:function(e){return Object(j.jsx)(l.a,Object(i.a)({},e))}})," "]}),Object(j.jsx)(l.a,{id:"outlined-basic",disabled:!0,value:(console.log("launchValue: ",a),console.log("completionValue: ",h),a&&h?Math.round((h-a)/864e4)/10+" days":"0 days"),variant:"outlined"})]})]})},p=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,708))})),h=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,704))})),g=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,699))})),O=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,705))})),f=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,709))})),m=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,706))})),v={campaignPath:function(e){return Object(r.e)("/campaign/:campaignSlug",e)},campaignNFTPath:function(e){return Object(r.e)("/campaign/:campaignSlug/nft/:nftSlug",e)},campaignVideoPath:function(){return Object(r.e)("/campaign/video")}},k=function(){return Object(j.jsx)(a.Suspense,{fallback:"loading",children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",component:p}),Object(j.jsx)(r.a,{exact:!0,path:"/campaign/:campaignSlug/nft/:nftSlug",component:f}),Object(j.jsx)(r.a,{exact:!0,path:"/campaign/video",component:m}),Object(j.jsx)(r.a,{exact:!0,path:"/create",component:function(){return Object(j.jsx)(x,{})}}),Object(j.jsx)(r.a,{exact:!0,path:"/catalog",component:h}),Object(j.jsx)(r.a,{exact:!0,path:"/how-it-works",component:g}),Object(j.jsx)(r.a,{exact:!0,path:"/about",component:O})]})})}},141:function(e,t){},153:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));var a={name:"localterra",chainID:"localterra",lcd:"http://localhost:1317",ADDRESSES:{}},c={name:"testnet",chainID:"bombay-12",lcd:"https://bombay-lcd.terra.dev",ADDRESSES:{adapter:"terra1mkg5hu9h5l9n59ngp9vmd4n9ypz6p8g8fe2kyx",nft:"terra103xm0paasxqnm75a3p5klxcjgjv4yflydgwmp6",factory:"terra1zgakvquz0zc8pc4vep9me7txwmcdm05mrwx932",campaign:"terra1t4q9mn8kkledyc4cz22856ktcx5mdsuqwjzt90",test_account:"terra1x46rqay4d3cssq8gxxvqz8xt6nwlz4td20k38v"}},r={name:"mainnet",chainID:"columbus-4",lcd:"https://lcd.terra.dev",ADDRESSES:{}}},301:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t){return e.length>t?e.substring(0,t-3)+"...":e}},357:function(e,t,n){},426:function(e,t){},428:function(e,t){},438:function(e,t){},440:function(e,t){},453:function(e,t){},455:function(e,t){},536:function(e,t){},538:function(e,t){},553:function(e,t){},576:function(e,t,n){},577:function(e,t,n){},578:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(31),i=n.n(r),o=(n(357),n(7)),l=n.n(o),s=n(15),d=n(302),b=n(14),u=n(329),j=Object(u.a)(Object(b.a)(Object(b.a)({},{values:{xs:0,sm:600,md:960,lg:1280,xl:1920}}),{},{typography:{fontFamily:"San Francisco,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"},shape:{borderRadius:5},palette:{mode:"dark",primary:{main:"hsl(335, 63%, 52%)",dark:"hsl(335, 63%, 42%)",light:"hsl(335, 63%, 62%)"},secondary:{main:"#EEE",dark:"#CCC",light:"#FFF"},text:{primary:"#FFF",secondary:"#FFF"},action:{active:"#FFF",disabledBackground:"#BBB",disabled:"#FFF"},error:{main:"#E00",dark:"#C00",light:"#F00"},success:{main:"#A1E571"}}})),x=n(52),p=n(679),h=n(90),g=n(153),O=n(1),f={0:g.a,1:g.b,2:g.c},m=function(e){var t=e.children;return Object(O.jsx)(p.a,{theme:j,children:Object(O.jsx)(x.a,{children:Object(O.jsx)(h.f,{defaultNetwork:f[0],walletConnectChainIds:f,children:t})})})},v=n(114),k=n(3),w=n(10),y=n(30),C=n(678),S=n(668),F=n(330),L=n(675),P=n(324),T=n.n(P),I=n(194),B=n.n(I),E=n(301),z=n(82),N=function(){var e=Object(h.i)(),t=Object(h.h)();console.log("wallet: ",e),console.log("connected wallet: ",t);var n=Object(a.useState)(null),c=Object(w.a)(n,2),r=c[0],i=c[1],o=Boolean(r),l=function(e){i(e.currentTarget)},s=function(){i(null)};switch(e.status){case h.g.INITIALIZING:return Object(O.jsx)(C.a,{color:"primary",label:"Loading...",variant:"outlined"});case h.g.WALLET_CONNECTED:return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(z.a,{navButton:!0,upperCase:!1,fullWidth:!0,id:"basic-menu","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":o?"true":void 0,onClick:l,endIcon:Object(O.jsx)(T.a,{}),sx:Object(k.a)({},"@media(min-width: 738px)",{width:"250px"}),children:["\ud83d\udc64 ",Object(E.a)((null===t||void 0===t?void 0:t.walletAddress)||"",12)," ("+((null===t||void 0===t?void 0:t.network.name)||""),")"]}),Object(O.jsx)(F.a,{anchorEl:r,open:o,onClose:s,MenuListProps:{"aria-labelledby":"basic-button"},children:Object(O.jsxs)(L.a,{sx:{color:"black"},onClick:function(){e.disconnect(),s()},children:[Object(O.jsx)(B.a,{}),"Disconnect"]})})]});case h.g.WALLET_NOT_CONNECTED:return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(z.a,{navButton:!0,upperCase:!1,fullWidth:!0,id:"basic-menu","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":o?"true":void 0,variant:"contained",onClick:l,sx:Object(k.a)({},"@media(min-width: 738px)",{width:"250px"}),children:"Connect Wallet"}),Object(O.jsx)(F.a,{anchorEl:r,open:o,onClose:s,PaperProps:{style:{background:"#280625"}},MenuListProps:{"aria-labelledby":"basic-button"},sx:{mt:1},TransitionComponent:S.a,children:Object(O.jsxs)(L.a,{sx:{color:"#CCC",width:170},onClick:function(){e.connect(e.availableConnectTypes[1]),s()},children:[Object(O.jsx)(B.a,{})," Terra Station"]})})]});default:return Object(O.jsxs)("span",{children:["Unexpected wallet status: ",e.status]})}},D=n(692),H=n(684),W=n(683),M=n(676),V=n(693),R=n(195),A=n.n(R),q=n(8),G=n(325),U=n.n(G),_=n(682),X=n(673),Y=n.p+"static/media/Pixy_Logo.439c7747.png",J=function(e){switch(e){case 1:return{opacity:.6,MixBlendMode:"multiply",background:"linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)"};case 2:return{background:"linear-gradient(81.42deg, rgba(255, 0, 199, 0.6) 0.43%,rgba(0, 240, 255, 0.6) 97.99%)",backgroundBlendMode:"multiply"}}},Z=function(e){var t=e.layer;return Object(O.jsx)("div",{style:Object(b.a)(Object(b.a)({},J(t)),{},{position:"absolute",width:"100%",height:204,top:0,left:0,zIndex:t})})},K=Object(q.a)("div")((function(e){e.theme;return{margin:"0 auto",flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}})),Q=Object(q.a)("div")((function(e){e.theme;return{marginLeft:0,display:"flex",alignItems:"flex-end",width:"100%",justifyContent:"space-evenly",flexGrow:1}})),$=[{text:"Home",to:"",isHashLink:!1},{text:"Catalog",to:"catalog",isHashLink:!0},{text:"How It Works",to:"how-it-works",isHashLink:!0},{text:"Governance",to:"governance",isHashLink:!1}],ee=function(e){var t=e.children,n=Object(a.useState)({mobileView:!1,drawerOpen:!1}),c=Object(w.a)(n,2),r=c[0],i=c[1],o=r.mobileView,l=r.drawerOpen;Object(a.useEffect)((function(){var e=function(){return window.innerWidth<900?i((function(e){return Object(b.a)(Object(b.a)({},e),{},{mobileView:!0})})):i((function(e){return Object(b.a)(Object(b.a)({},e),{},{mobileView:!1})}))};return e(),window.addEventListener("resize",(function(){return e()})),function(){window.removeEventListener("resize",(function(){return e()}))}}),[]);var s=Object(y.g)(),d=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(K,{sx:{display:"block",width:"73%"},children:[Object(O.jsx)(W.a,{children:$.map((function(e){var t=e.to,n=e.text,a=e.isHashLink;return Object(O.jsx)(M.a,{style:{whiteSpace:"nowrap"},children:Object(O.jsx)(z.d,{isHashLink:a,to:"/".concat(a?"#":"").concat(t),children:n})},t)}))}),Object(O.jsx)("br",{}),Object(O.jsx)(N,{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(z.a,{onClick:function(){return s.push("/create")},navButton:!0,fullWidth:!0,endIcon:Object(O.jsx)(A.a,{}),children:"Launch Project"})]})})};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(V.a,{color:"transparent",sx:{display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"none",height:204,top:0,left:0},position:"absolute",children:o?Object(O.jsxs)(D.a,{variant:"regular",sx:{width:"100%",background:"transparent",top:20,height:91,position:"absolute"},children:[Object(O.jsx)(H.a,{variant:"h6",color:"inherit",component:"div",children:Object(O.jsx)(x.b,{to:"/",children:Object(O.jsx)("img",{src:Y,height:25,alt:"PIXY",width:"50%"})})}),Object(O.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),i((function(e){return Object(b.a)(Object(b.a)({},e),{},{drawerOpen:!0})}))}(e)},children:Object(O.jsx)(U.a,{style:{color:"white"}})}),Object(O.jsx)(X.a,{anchor:"right",open:l,onClose:function(){return i((function(e){return Object(b.a)(Object(b.a)({},e),{},{drawerOpen:!1})}))},color:"black",children:Object(O.jsx)(_.a,{children:d()})})]}):(console.log("desktop"),Object(O.jsxs)(D.a,{variant:"regular",sx:Object(k.a)({width:"100%",background:"transparent",top:20,height:91,position:"absolute",padding:"0px 70px !important"},"@media(min-width: 1400px)",{padding:"0px 150px !important"}),children:[Object(O.jsx)(H.a,{variant:"h6",color:"inherit",component:"div",children:Object(O.jsx)(x.b,{to:"/",children:Object(O.jsx)("img",{src:Y,height:25,alt:"PIXY"})})}),t,Object(O.jsx)(K,{children:Object(O.jsx)(W.a,{className:"flex",children:$.map((function(e){var t=e.to,n=e.text,a=e.isHashLink;return Object(O.jsx)(M.a,{style:{whiteSpace:"nowrap"},children:Object(O.jsx)(z.d,{isHashLink:a,to:"/".concat(a?"#":"").concat(t),children:n})},t)}))})}),Object(O.jsxs)(Q,{children:[Object(O.jsx)(N,{}),Object(O.jsx)(z.a,{onClick:function(){return s.push("/create")},navButton:!0,fullWidth:!0,endIcon:Object(O.jsx)(A.a,{}),sx:Object(k.a)({},"@media(min-width: 738px)",{width:"250px"}),children:"Launch Project"})]})]}))}),Object(O.jsx)(Z,{layer:1})]})},te=n.p+"static/media/body-back.30cf97f7.png",ne=function(e){var t=e.children;return Object(O.jsx)(_.a,{component:"main",sx:{filter:"drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.8))"},children:Object(O.jsx)(_.a,{sx:{background:"linear-gradient(90deg, rgba(0, 0, 0, 0.5) 11.6%,rgba(0, 0, 0, 0) 52.99%)",backgroundBlendMode:"darken"},children:Object(O.jsx)(_.a,{sx:{background:"linear-gradient(81.42deg, rgba(255, 0, 199, 0.6) 0.43%, rgba(0, 240, 255, 0.6) 97.99%)",backgroundBlendMode:"multiply"},children:Object(O.jsx)(_.a,{sx:{background:"#000"},children:Object(O.jsx)(_.a,{sx:{display:"flex",paddingTop:"128px",background:"linear-gradient(81.42deg, rgba(255, 0, 199, 0.6) 0.43%,rgba(0, 240, 255, 0.6) 97.99%),url(".concat(te,")"),backgroundBlendMode:"multiply",backgroundSize:"cover",minHeight:"100vH",width:"100%",justifyContent:"center"},children:Object(O.jsx)(_.a,{sx:{flexGrow:1,flexDirection:"column",display:"flex"},children:t})})})})})})},ae=function(){var e=Object(y.h)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null};n(576),n(577);Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))();var ce=function(){return Object(O.jsxs)(m,{children:[Object(O.jsx)(d.a,{titleTemplate:"%s \u2022 ".concat("PIXY")}),Object(O.jsx)(ae,{}),Object(O.jsx)(ee,{}),Object(O.jsx)(ne,{children:Object(O.jsx)(v.a,{})})]})},re=function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,707)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(ce,{})}),document.getElementById("root")),re()},82:function(e,t,n){"use strict";n.d(t,"d",(function(){return x})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return C})),n.d(t,"b",(function(){return T})),n.d(t,"e",(function(){return B}));var a,c=n(14),r=n(45),i=n(0),o=n(323),l=n(52),s=n(687),d=n(1),b=Object(i.forwardRef)((function(e,t){var n=e.isHashLink,a=Object(r.a)(e,["isHashLink"]);return Object(d.jsx)(d.Fragment,{children:n?Object(d.jsx)(o.a,Object(c.a)({ref:t,scroll:function(e){return e.scrollIntoView({behavior:"smooth"})}},a)):Object(d.jsx)(l.b,Object(c.a)({ref:t},a))})})),u=function(e){var t=e.children,n=e.to,a=Object(r.a)(e,["children","to"]);return Object(d.jsx)(s.a,Object(c.a)(Object(c.a)({to:n,component:b},a),{},{children:t}))},j=n(30),x=function(e){var t=e.children,n=e.to,a=Object(r.a)(e,["children","to"]),i=Object(j.h)().pathname===n;return Object(d.jsx)(u,Object(c.a)(Object(c.a)({className:"NavLink".concat(i?"-active":""),to:n,color:"secondary.dark",underline:"none",sx:{fontWeight:600,letterSpacing:"1.2px",lineHeight:"24px"}},a),{},{children:t}))},p=n(686),h=function(e){var t=e.children,n=e.navButton,a=void 0!==n&&n,i=e.sx,o=void 0===i?{}:i,l=e.upperCase,s=void 0===l||l,b=e.variant,u=void 0===b?"contained":b,j=e.kind,x=void 0===j?"primary":j,h=Object(r.a)(e,["children","navButton","sx","upperCase","variant","kind"]);return Object(d.jsx)(p.a,Object(c.a)(Object(c.a)({disableRipple:!0,disableElevation:!0,sx:Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({},o),{},{fontWeight:a?void 0:400,padding:"15px 25px",letterSpacing:"1.2px",height:52},"outlined"===u&&{borderColor:"#FFF",color:"#FFF","&:hover":{borderColor:"#FFF"}}),!s&&{textTransform:"capitalize"}),!a&&"outlined"!==u&&{background:"linear-gradient(360deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #D13677",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 1px 1px rgba(255, 255,255, 0.1)"}),a&&{mx:2,background:"linear-gradient(360deg, rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0) 100%), #D13677",boxShadow:"0px 1px 2px rgba(0, 0, 0, 0.5), inset 0px 1px 1px rgba(255, 255, 255, 0.25)"}),"secondary"===x&&{background:"linear-gradient(360deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(0deg, #3C3C3C, #3C3C3C)",borderRadius:"5px",textTransform:"capitalize"}),variant:u},h),{},{children:t}))},g=n(3),O=n(688),f=n(690),m=n(689),v=n(684),k=n(67);!function(e){e.Price="Price",e.NFTTitle="NFTTitle"}(a||(a={}));var w=function(e){var t=e.kind,n=void 0===t?a.Price:t,i=e.center,o=void 0!==i&&i,l=e.sx,s=void 0===l?{}:l,b=e.children,u=Object(r.a)(e,["kind","center","sx","children"]),j=Object(k.a)(),x=j.typography,p=j.palette;return Object(d.jsx)(v.a,Object(c.a)(Object(c.a)({component:"div",sx:Object(c.a)(Object(c.a)(Object(c.a)({},n===a.Price?{textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",lineHeight:"24px",color:p.success.main}:{letterSpacing:"1.2px",color:p.common.white,lineHeight:"30px"}),{},{fontFamily:x.fontFamily,fontWeight:700,fontSize:30},o&&{display:"flex",alignItems:"center",justifyContent:"center"}),s)},u),{},{children:b}))},y=n(114),C=function(e){var t,n=e.campaignSlug,c=e.nftSlug,r=e.image,i=e.title,o=e.ustPrice,l=e.isVariablePrice,s=e.shortDescription;return Object(d.jsx)(O.a,{sx:(t={boxShadow:"10px 10px 30px rgba(0, 0, 0, 0.25), -5px -5px 15px rgba(255, 255, 255, 0.04)",background:"linear-gradient(101.73deg, rgba(255, 255, 255, 0.05) -6.48%, rgba(0, 0, 0, 0.05) 106.74%), rgba(255, 255, 255, 0.02)",borderRadius:"20px",border:"1px solid rgba(255, 255, 255, 0.04)",width:"384px"},Object(g.a)(t,"@media(max-width: 780px)",{width:"100%"}),Object(g.a)(t,"@media(min-width: 780px)",{minHeight:580}),t),children:Object(d.jsxs)(x,{to:y.b.campaignNFTPath({campaignSlug:n,nftSlug:c}),children:[Object(d.jsx)(m.a,{component:"img",height:"331",image:r,alt:i}),Object(d.jsxs)(f.a,{children:[Object(d.jsxs)(w,{center:!0,gutterBottom:!0,kind:a.NFTTitle,children:["#",i.toUpperCase()]}),Object(d.jsxs)(w,{center:!0,gutterBottom:!0,kind:a.Price,children:[o.toLocaleString(),l&&"+"," UST"]}),Object(d.jsx)(v.a,{sx:{fontSize:"21px",fontWeight:400,lineHeight:"30px",letterSpacing:"0px",textAlign:"center"},children:s})]})]})})},S=n(667),F=n(685),L=n(590),P=function(e){return Object(d.jsx)(L.a,Object(c.a)(Object(c.a)({sx:{opacity:.85,filter:"drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.8))"}},e),{},{children:Object(d.jsx)("div",{className:"w-full h-full",style:{background:"linear-gradient(81.42deg, rgba(255, 0, 199, 0.6) 0.43%, rgba(0, 240, 255, 0.6) 97.99%)",backgroundBlendMode:"multiply"},children:Object(d.jsx)("div",{className:"w-full h-full",style:{background:"linear-gradient(90deg, rgba(0, 0, 0, 0.5) 11.6%, rgba(0, 0, 0, 0) 52.99%)",backgroundBlendMode:"darken"},children:Object(d.jsx)("div",{className:"w-full h-full",style:{backdropFilter:"blur(20px)",background:"rgba(0, 0, 0, 0.5)"}})})})}))},T=function(e){var t=e.children,n=e.open,a=e.onClose,i=Object(r.a)(e,["children","open","onClose"]);return Object(d.jsx)(S.a,Object(c.a)(Object(c.a)({scroll:"body",PaperProps:{sx:{mt:16,background:"linear-gradient(101.73deg, rgba(255, 255, 255, 0.05) -6.48%, rgba(0, 0, 0, 0.05) 106.74%),\n            linear-gradient(0deg, rgba(87, 150, 209, 0.3), rgba(87, 150, 209, 0.3)),\n            linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))",boxSizing:"border-box",boxShadow:"10px 10px 30px 0px rgba(0, 0, 0, 0.25),0px 4px 4px 0px rgba(0, 0, 0, 0.25)",borderRadius:"5px",border:"1px solid rgba(255, 255, 255, 0.04)"}},BackdropComponent:P,open:n,onClose:a,fullWidth:!0,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",maxWidth:"md"},i),{},{children:Object(d.jsx)(F.a,{className:"flex flex-col items-center",children:t})}))},I=n(691),B=function(e){e.campaignSlug,e.videoSlug;var t=e.image,n=e.title,c=(e.ustPrice,e.isVariablePrice,e.shortDescription,e.description);return Object(d.jsx)(O.a,{sx:{boxShadow:"10px 10px 30px rgba(0, 0, 0, 0.25), -5px -5px 15px rgba(255, 255, 255, 0.04)",background:"linear-gradient(101.73deg, rgba(255, 255, 255, 0.05) -6.48%, rgba(0, 0, 0, 0.05) 106.74%), rgba(255, 255, 255, 0.02)",borderRadius:"0px",border:"1px solid rgba(255, 255, 255, 0.04)"},children:Object(d.jsx)(I.a,{disableRipple:!0,children:Object(d.jsxs)(x,{to:y.b.campaignVideoPath(),sx:{width:"100%"},children:[Object(d.jsx)("img",{src:t,style:{width:"100%"}}),Object(d.jsxs)(f.a,{sx:{backgroundColor:"black"},children:[Object(d.jsx)(w,{center:!0,gutterBottom:!0,kind:a.NFTTitle,sx:{display:"block"},children:n}),Object(d.jsx)(v.a,{sx:{fontSize:"21px",fontWeight:400,lineHeight:"30px",letterSpacing:"0px",textAlign:"left"},children:c})]})]})})})}}},[[578,1,2]]]);
//# sourceMappingURL=main.67cb94f6.chunk.js.map