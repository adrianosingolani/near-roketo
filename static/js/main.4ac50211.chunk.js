(this["webpackJsonpnear-roketo"]=this["webpackJsonpnear-roketo"]||[]).push([[0],{133:function(t,e,n){},134:function(t,e){},141:function(t,e){},200:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(107),r=n.n(i),o=(n(133),n(16)),s=n(42),l=n(82),d=n(15),j=n.n(d),u=n(46),p="streaming-r-v2.dcversus.testnet",b="wrap.testnet",h="adriano.testnet";var m=function(t){switch(t){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",roketoAccount:p,wrapAccount:b,dappAccount:h,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",roketoAccount:p,wrapAccount:b,dappAccount:h,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error('Unknown environment "'.concat(t,'".'))}},x=m("testnet");function g(){return(g=Object(l.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.connect)(Object.assign({deps:{keyStore:new u.keyStores.BrowserLocalStorageKeyStore}},x));case 2:e=t.sent,window.walletConnection=new u.WalletConnection(e),window.accountId=window.walletConnection.getAccountId(),window.roketoContract=new u.Contract(window.walletConnection.account(),x.roketoAccount,{viewMethods:["get_stream","get_account","get_account_incoming_streams","get_account_outgoing_streams","get_stats"],changeMethods:["start_stream","pause_stream","stop_stream","withdraw"]}),window.wrapContract=new u.Contract(window.walletConnection.account(),x.wrapAccount,{viewMethods:["ft_balance_of"],changeMethods:["near_deposit","ft_transfer_call","ft_transfer"]});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var O=n(229),f=n(230),w=n(232),y=n(233),v=n(227),k=n(1);function _(){var t=window.walletConnection.account(),e=Object(a.useState)(0),n=Object(o.a)(e,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){window.accountId&&window.wrapContract&&window.wrapContract.ft_balance_of({account_id:"".concat(window.accountId)}).then((function(t){i(t)})).catch((function(t){console.log(t)}))}),[]),Object(k.jsx)(O.a,{sx:{flexGrow:1},children:Object(k.jsx)(f.a,{position:"static",children:Object(k.jsxs)(w.a,{children:[Object(k.jsx)(y.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"NNap"}),t.accountId?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(O.a,{style:{display:"flex",flexDirection:"column",textAlign:"right"},children:[Object(k.jsx)(y.a,{variant:"caption",children:t.accountId}),Object(k.jsxs)(y.a,{variant:"caption",children:[Object(s.formatNearAmount)(c,4)," wNEAR"]})]}),Object(k.jsx)(v.a,{sx:{marginLeft:2},variant:"outlined",color:"inherit",onClick:function(){return window.walletConnection.signOut(),void window.location.reload()},children:"Logout"})]}):Object(k.jsx)(v.a,{color:"inherit",onClick:function(){window.walletConnection.requestSignIn(x.dappAccount)},children:"Login"})]})})})}var C=n(234),S=n(225),A=n(235),I=n(236),R=n(237),B=n(238),N=n(115),F=n.n(N),P=n(112),M=n.n(P),U=n(116),E=n.n(U),L=n(117),z=n.n(L),D=n(114),J=n.n(D),T=n(113),q=n.n(T),G=n.p+"static/media/freedrinks.88738208.jpg",W=n.p+"static/media/insidesleepstation.8b0bd196.jpg",H=n.p+"static/media/lobby.0e1ae949.jpg",K=n.p+"static/media/lockers.39539d6c.jpg",Q=n.p+"static/media/sleepstationdetail.94727617.jpg",V=n.p+"static/media/sleepstations.c24ab402.jpg",X=[{img:H,title:"Lobby"},{img:n.p+"static/media/stairs.8883686a.jpg",title:"Stairs"},{img:K,title:"Lockers"},{img:V,title:"Sleep stations"},{img:Q,title:"Sleep station detail"},{img:W,title:"Inside station"},{img:n.p+"static/media/storage.f1f84c9e.jpg",title:"Storage inside sleep stations"},{img:G,title:"Free drinks"}];var Y=function(){return Object(k.jsxs)(O.a,{style:{display:"flex",flexDirection:"row"},children:[Object(k.jsxs)(O.a,{style:{display:"flex",flexDirection:"column",marginTop:"1em",paddingRight:"1em",flex:1},children:[Object(k.jsx)(y.a,{variant:"h5",children:"Pay per minute bed and all day breakfast"}),Object(k.jsxs)(C.a,{style:{marginTop:16},children:[Object(k.jsxs)(S.a,{disablePadding:!0,children:[Object(k.jsx)(A.a,{children:Object(k.jsx)(M.a,{})}),Object(k.jsx)(I.a,{primary:"Open 24/7"})]}),Object(k.jsxs)(S.a,{disablePadding:!0,children:[Object(k.jsx)(A.a,{children:Object(k.jsx)(q.a,{})}),Object(k.jsx)(I.a,{primary:"Contactless check in"})]}),Object(k.jsxs)(S.a,{disablePadding:!0,children:[Object(k.jsx)(A.a,{children:Object(k.jsx)(J.a,{})}),Object(k.jsx)(I.a,{primary:"Comfortable beds"})]}),Object(k.jsxs)(S.a,{disablePadding:!0,children:[Object(k.jsx)(A.a,{children:Object(k.jsx)(F.a,{})}),Object(k.jsx)(I.a,{primary:"Wi-fi"})]}),Object(k.jsxs)(S.a,{disablePadding:!0,children:[Object(k.jsx)(A.a,{children:Object(k.jsx)(E.a,{})}),Object(k.jsx)(I.a,{primary:"Free locker"})]}),Object(k.jsxs)(S.a,{disablePadding:!0,children:[Object(k.jsx)(A.a,{children:Object(k.jsx)(z.a,{})}),Object(k.jsx)(I.a,{primary:"Shared bathroom"})]})]})]}),Object(k.jsx)(R.a,{style:{flex:2},cols:4,rowHeight:180,children:X.map((function(t,e){return Object(k.jsx)(B.a,{children:Object(k.jsx)("img",{src:"".concat(t.img,"?w=130&h=86&fit=crop&auto=format"),srcSet:"".concat(t.img,"?w=130&h=86&fit=crop&auto=format&dpr=2 2x"),alt:t.title,loading:"lazy"})},e)}))})]})},Z=n(69),$=n.n(Z),tt=(n(198),n(239)),et=n(240),nt=n(241),at=n(242),ct=n.p+"static/media/sleepstation.00b86089.jpg",it=n.p+"static/media/relaxation.56f08de9.jpg",rt=n.p+"static/media/restaurant.ae40d7c9.jpg",ot=m("testnet");var st=function(){var t=Object(a.useState)(!0),e=Object(o.a)(t,2),n=(e[0],e[1]),c=Object(a.useState)([]),i=Object(o.a)(c,2),r=(i[0],i[1]);Object(a.useEffect)((function(){window.accountId?n(!1):n(!0),d()}),[]);var l=function(t){var e=Object(s.parseNearAmount)(t.price.toString()),n=$()(e).div(60).toFixed(0),a=$()(e).div(3600).toFixed(0),c=$()(n).times(t.minutes).toFixed(0),i={receiver_id:ot.roketoAccount,amount:c,memo:"memo",msg:JSON.stringify({Create:{request:{owner_id:window.accountId,receiver_id:ot.dappAccount,tokens_per_sec:parseInt(a),description:JSON.stringify(t)}}})};window.wrapContract.ft_transfer_call(i,3e14,1).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},d=function(){window.roketoContract.get_account_outgoing_streams({account_id:window.accountId,from:0,limit:10}).then((function(t){r(t)})).catch((function(t){console.log(t)}))};return Object(k.jsx)(O.a,{children:Object(k.jsxs)(O.a,{style:{display:"flex",marginBottom:"1em"},children:[Object(k.jsxs)(tt.a,{style:{marginRight:"1em",flex:1},children:[Object(k.jsx)(et.a,{component:"img",height:"300",image:ct,alt:"Sleep station"}),Object(k.jsxs)(nt.a,{children:[Object(k.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Sleep station"}),Object(k.jsx)(y.a,{variant:"body1",color:"text.secondary",children:"Absolute silence station with comfortable bed and pillow under artificial twinkling stars and live plants."}),Object(k.jsx)(y.a,{variant:"subtitle2",color:"text.secondary",children:Object(k.jsxs)("ul",{style:{paddingInlineStart:"1em"},children:[Object(k.jsx)("li",{children:"2 NEAR per hour"}),Object(k.jsx)("li",{children:"Minimum of 15 minutes"}),Object(k.jsx)("li",{children:"5 spaces left"})]})})]}),Object(k.jsx)(at.a,{children:Object(k.jsx)(v.a,{size:"small",variant:"contained",onClick:function(){return l({room:"sleepstation",price:2,minutes:15})},children:"Book"})})]}),Object(k.jsxs)(tt.a,{style:{marginRight:"1em",flex:1},children:[Object(k.jsx)(et.a,{component:"img",height:"300",image:it,alt:"Relaxation room"}),Object(k.jsxs)(nt.a,{children:[Object(k.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Relaxation room"}),Object(k.jsx)(y.a,{variant:"body1",color:"text.secondary",children:"Casual relaxation space filled with cozy moon pods and yoga mats for meditation classes."}),Object(k.jsx)(y.a,{variant:"subtitle2",color:"text.secondary",children:Object(k.jsxs)("ul",{style:{paddingInlineStart:"1em"},children:[Object(k.jsx)("li",{children:"1 NEAR per hour"}),Object(k.jsx)("li",{children:"Minimum of 15 minutes"}),Object(k.jsx)("li",{children:"5 spaces left"})]})})]}),Object(k.jsx)(at.a,{children:Object(k.jsx)(v.a,{size:"small",variant:"contained",onClick:function(){return l({room:"relaxation",price:1,minutes:15})},children:"Book"})})]}),Object(k.jsxs)(tt.a,{style:{flex:1},children:[Object(k.jsx)(et.a,{component:"img",height:"300",image:rt,alt:"Restaurant"}),Object(k.jsxs)(nt.a,{children:[Object(k.jsx)(y.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Restaurant"}),Object(k.jsx)(y.a,{variant:"body1",color:"text.secondary",children:"All you can eat restaurant serving healthy meals, juices, coffee and tea."}),Object(k.jsx)(y.a,{variant:"subtitle2",color:"text.secondary",children:Object(k.jsxs)("ul",{style:{paddingInlineStart:"1em"},children:[Object(k.jsx)("li",{children:"3 NEAR per hour"}),Object(k.jsx)("li",{children:"Minimum of 30 minutes"}),Object(k.jsx)("li",{children:"5 spaces left"})]})})]}),Object(k.jsx)(at.a,{children:Object(k.jsx)(v.a,{size:"small",variant:"contained",onClick:function(){return l({room:"restaurant",price:3,minutes:30})},children:"Book"})})]})]})})};var lt=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(_,{}),Object(k.jsxs)(O.a,{style:{margin:"0 1em"},children:[Object(k.jsx)(Y,{}),Object(k.jsx)(st,{})]})]})},dt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,244)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))},jt=n(243),ut=n(118),pt=n(228),bt=Object(ut.a)({palette:{mode:"dark"},components:{MuiButton:{styleOverrides:{root:{margin:"8px"}}}}});window.nearInitPromise=function(){return g.apply(this,arguments)}().then((function(){r.a.createRoot(document.getElementById("root")).render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsxs)(pt.a,{theme:bt,children:[Object(k.jsx)(jt.a,{}),Object(k.jsx)(lt,{})]})}))})).catch(console.error),dt()}},[[200,1,2]]]);
//# sourceMappingURL=main.4ac50211.chunk.js.map