(this["webpackJsonpreact-material-dashboard"]=this["webpackJsonpreact-material-dashboard"]||[]).push([[0],{303:function(e,a,t){e.exports=t(425)},401:function(e,a,t){},425:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(14),l=t.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(258),i=t(259),s=t(295),m=t(294),u=t(97),d=t(46),g=t(27),p=t(51),h=t(484),f=t(136),b=t.n(f);var E={draw:function(){var e,a,t,n,r,o,l,c,i=this._chart.ctx,s=this._view,m=s.borderWidth,u=this._chart.config.options.cornerRadius;if(u<0&&(u=0),"undefined"===typeof u&&(u=0),s.horizontal?(e=s.base,a=s.x,t=s.y-s.height/2,n=s.y+s.height/2,r=a>e?1:-1,o=1,l=s.borderSkipped||"left"):(e=s.x-s.width/2,a=s.x+s.width/2,t=s.y,r=1,o=(n=s.base)>t?1:-1,l=s.borderSkipped||"bottom"),m){var d=Math.min(Math.abs(e-a),Math.abs(t-n)),g=(m=m>d?d:m)/2,p=e+("left"!==l?g*r:0),h=a+("right"!==l?-g*r:0),f=t+("top"!==l?g*o:0),b=n+("bottom"!==l?-g*o:0);p!==h&&(t=f,n=b),f!==b&&(e=p,a=h)}i.beginPath(),i.fillStyle=s.backgroundColor,i.strokeStyle=s.borderColor,i.lineWidth=m;var E=[[e,n],[e,t],[a,t],[a,n]],v=["bottom","left","top","right"].indexOf(l,0);function x(e){return E[(v+e)%4]}-1===v&&(v=0);var y=x(0);i.moveTo(y[0],y[1]);for(var O=1;O<4;O+=1){y=x(O);var j=O+1;4===j&&(j=0);var N=E[2][0]-E[1][0],C=E[0][1]-E[1][1],S=E[1][0],T=E[1][1];if((c=u)>Math.abs(C)/2&&(c=Math.floor(Math.abs(C)/2)),c>Math.abs(N)/2&&(c=Math.floor(Math.abs(N)/2)),C<0){var k=S,w=S+N,A=T+C,I=T+C,B=S,D=S+N,z=T,R=T;i.moveTo(B+c,z),i.lineTo(D-c,R),i.quadraticCurveTo(D,R,D,R-c),i.lineTo(w,I+c),i.quadraticCurveTo(w,I,w-c,I),i.lineTo(k+c,A),i.quadraticCurveTo(k,A,k,A+c),i.lineTo(B,z-c),i.quadraticCurveTo(B,z,B+c,z)}else if(N<0){var W=S+N,F=S,L=T,_=T,M=S+N,q=S,H=T+C,G=T+C;i.moveTo(M+c,H),i.lineTo(q-c,G),i.quadraticCurveTo(q,G,q,G-c),i.lineTo(F,_+c),i.quadraticCurveTo(F,_,F-c,_),i.lineTo(W+c,L),i.quadraticCurveTo(W,L,W,L+c),i.lineTo(M,H-c),i.quadraticCurveTo(M,H,M+c,H)}else i.moveTo(S+c,T),i.lineTo(S+N-c,T),i.quadraticCurveTo(S+N,T,S+N,T+c),i.lineTo(S+N,T+C-c),i.quadraticCurveTo(S+N,T+C,S+N-c,T+C),i.lineTo(S+c,T+C),i.quadraticCurveTo(S,T+C,S,T+C-c),i.lineTo(S,T+c),i.quadraticCurveTo(S,T,S+c,T)}i.fill(),m&&i.stroke()}},v=t(293),x=t(7),y="#FFFFFF",O={black:"#000000",white:y,primary:{contrastText:y,dark:x.a.indigo[900],main:x.a.indigo[500],light:x.a.indigo[100]},secondary:{contrastText:y,dark:x.a.blue[900],main:x.a.blue.A400,light:x.a.blue.A400},success:{contrastText:y,dark:x.a.green[900],main:x.a.green[600],light:x.a.green[400]},info:{contrastText:y,dark:x.a.blue[900],main:x.a.blue[600],light:x.a.blue[400]},warning:{contrastText:y,dark:x.a.orange[900],main:x.a.orange[600],light:x.a.orange[400]},error:{contrastText:y,dark:x.a.red[900],main:x.a.red[600],light:x.a.red[400]},text:{primary:x.a.blueGrey[900],secondary:x.a.blueGrey[600],link:x.a.blue[600]},background:{default:"#F4F6F8",paper:y},icon:x.a.blueGrey[600],divider:x.a.grey[200]},j={h1:{color:O.text.primary,fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{color:O.text.primary,fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:O.text.primary,fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:O.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:O.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:O.text.primary,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:O.text.primary,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:O.text.secondary,fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:O.text.primary,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:O.text.secondary,fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:O.text.primary,fontSize:"14px"},caption:{color:O.text.secondary,fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{color:O.text.secondary,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}},N={MuiButton:{contained:{boxShadow:"0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",backgroundColor:"#FFFFFF"}},MuiIconButton:{root:{color:O.icon,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.03)"}}},MuiPaper:{elevation1:{boxShadow:"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"}},MuiTableCell:{root:Object(u.a)({},j.body1,{borderBottom:"1px solid ".concat(O.divider)})},MuiTableHead:{root:{backgroundColor:x.a.grey[50]}},MuiTypography:{gutterBottom:{marginBottom:8}}},C=Object(v.a)({palette:O,typography:j,overrides:N,zIndex:{appBar:1200,drawer:1100}}),S=(t(400),t(401),{checked:function(e,a){if(!0!==e)return a.message||"must be checked"}}),T=t(8),k=t(2),w=t(485),A=(t(83),t(297),t(265),Object(w.a)((function(e){return{root:{borderRadius:"4px",alignItems:"center",padding:e.spacing(1),display:"flex",flexBasis:420},icon:{marginRight:e.spacing(1),color:e.palette.text.secondary},input:{flexGrow:1,fontSize:"14px",lineHeight:"16px",letterSpacing:"-0.05px"}}})),t(24)),I=Object(w.a)((function(e){return{root:{display:"inline-block",borderRadius:"50%",flexGrow:0,flexShrink:0},sm:{height:e.spacing(1),width:e.spacing(1)},md:{height:e.spacing(2),width:e.spacing(2)},lg:{height:e.spacing(3),width:e.spacing(3)},neutral:{backgroundColor:e.palette.neutral},primary:{backgroundColor:e.palette.primary.main},info:{backgroundColor:e.palette.info.main},warning:{backgroundColor:e.palette.warning.main},danger:{backgroundColor:e.palette.error.main},success:{backgroundColor:e.palette.success.main}}})),B=function(e){var a,t=e.className,n=e.size,o=e.color,l=Object(T.a)(e,["className","size","color"]),c=I();return r.a.createElement("span",Object.assign({},l,{className:Object(k.a)((a={},Object(A.a)(a,c.root,!0),Object(A.a)(a,c[n],n),Object(A.a)(a,c[o],o),a),t)}))};B.defaultProps={size:"md",color:"default"};var D=B,z=function(e){var a=e.layout,t=e.component,n=Object(T.a)(e,["layout","component"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},R=t(23),W=t(111),F=t(431),L=t(40),_=t(455),M=Object(w.a)((function(e){return{root:{padding:e.spacing(4)}}})),q=function(e){var a=e.className,t=Object(T.a)(e,["className"]),n=M();return r.a.createElement("div",Object.assign({},t,{className:Object(k.a)(n.root,a)}),r.a.createElement(L.a,{variant:"body1"},"\xa9"," ",r.a.createElement(_.a,{component:"a",href:"https://",target:"_blank"},"Set Tarefas"),". 2020"),r.a.createElement(L.a,{variant:"caption"},"Criado e desenvolvido por Equipe QXD"))},H=t(457),G=t(458),U=t(268),P=t.n(U),V=t(270),Y=t.n(V),$=t(269),J=t.n($),K=t(29),Q=t(487),X=Object(w.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",minHeight:"fit-content"},avatar:{width:60,height:60},name:{marginTop:e.spacing(1)}}})),Z=function(e){var a=e.className,t=Object(T.a)(e,["className"]),n=X(),o={name:localStorage.getItem("email_usuario_logado"),avatar:"/images/avatars/avatar_11.png",bio:"Logado no sistema"};return r.a.createElement("div",Object.assign({},t,{className:Object(k.a)(n.root,a)}),r.a.createElement(Q.a,{alt:"Person",className:n.avatar,component:K.a,src:o.avatar,to:"/settings"}),r.a.createElement(L.a,{className:n.name,variant:"h4"},o.name),r.a.createElement(L.a,{variant:"body2"},o.bio))},ee=t(427),ae=t(428),te=t(456),ne=Object(w.a)((function(e){return{root:{},item:{display:"flex",paddingTop:0,paddingBottom:0},button:{color:x.a.blueGrey[800],padding:"10px 8px",justifyContent:"flex-start",textTransform:"none",letterSpacing:0,width:"100%",fontWeight:e.typography.fontWeightMedium},icon:{color:e.palette.icon,width:24,height:24,display:"flex",alignItems:"center",marginRight:e.spacing(1)},active:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightMedium,"& $icon":{color:e.palette.primary.main}}}})),re=Object(n.forwardRef)((function(e,a){return r.a.createElement("div",{ref:a,style:{flexGrow:1}},r.a.createElement(K.b,e))})),oe=function(e){var a=e.pages,t=e.className,n=Object(T.a)(e,["pages","className"]),o=ne();return r.a.createElement(ee.a,Object.assign({},n,{className:Object(k.a)(o.root,t)}),a.map((function(e){return r.a.createElement(ae.a,{className:o.item,disableGutters:!0,key:e.title},r.a.createElement(te.a,{activeClassName:o.active,className:o.button,component:re,to:e.href},r.a.createElement("div",{className:o.icon},e.icon),e.title))})))},le=(Object(w.a)((function(e){return{root:{backgroundColor:x.a.grey[50]},media:{paddingTop:e.spacing(2),height:80,textAlign:"center","& > img":{height:"100%",width:"auto"}},content:{padding:e.spacing(1,2)},actions:{padding:e.spacing(1,2),display:"flex",justifyContent:"center"}}})),Object(w.a)((function(e){return{drawer:Object(A.a)({width:240},e.breakpoints.up("lg"),{marginTop:64,height:"calc(100% - 64px)"}),root:{backgroundColor:e.palette.white,display:"flex",flexDirection:"column",height:"100%",padding:e.spacing(2)},divider:{margin:e.spacing(2,0)},nav:{marginBottom:e.spacing(2)}}}))),ce=function(e){var a=e.open,t=e.variant,n=e.onClose,o=e.className,l=Object(T.a)(e,["open","variant","onClose","className"]),c=le(),i=[{title:"Painel Administrativo",href:"/dashboard",icon:r.a.createElement(P.a,null)},{title:"Tarefas",href:"/tarefas",icon:r.a.createElement(J.a,null)},{title:"Login",href:"/login",icon:r.a.createElement(Y.a,null)}];return r.a.createElement(H.a,{anchor:"left",classes:{paper:c.drawer},onClose:n,open:a,variant:t},r.a.createElement("div",Object.assign({},l,{className:Object(k.a)(c.root,o)}),r.a.createElement(Z,null),r.a.createElement(G.a,{className:c.divider}),r.a.createElement(oe,{className:c.nav,pages:i})))},ie=t(459),se=t(460),me=t(486),ue=t(462),de=t(463),ge=t(274),pe=t.n(ge),he=t(272),fe=t.n(he),be=t(273),Ee=t.n(be),ve=Object(w.a)((function(e){return{root:{boxShadow:"none"},flexGrow:{flexGrow:1},signOutButton:{marginLeft:e.spacing(1)}}})),xe=Object(d.g)((function(e){var a=e.className,t=e.onSidebarOpen,o=Object(T.a)(e,["className","onSidebarOpen"]),l=ve(),c=Object(n.useState)([]),i=Object(R.a)(c,1)[0];return r.a.createElement(ie.a,Object.assign({},o,{className:Object(k.a)(l.root,a)}),r.a.createElement(se.a,null,r.a.createElement(K.a,{to:"/"},r.a.createElement("img",{alt:"Logo",src:"/images/logos/logo--white.svg"})),r.a.createElement("div",{className:l.flexGrow}),r.a.createElement(me.a,{mdDown:!0},r.a.createElement(ue.a,{color:"inherit"},r.a.createElement(de.a,{badgeContent:i.length,color:"primary",variant:"dot"},r.a.createElement(fe.a,null))),r.a.createElement(ue.a,{onClick:function(){localStorage.removeItem("email_usuario_logado"),e.history.push("/login")},className:l.signOutButton,color:"inherit"},r.a.createElement(Ee.a,null))),r.a.createElement(me.a,{lgUp:!0},r.a.createElement(ue.a,{color:"inherit",onClick:t},r.a.createElement(pe.a,null)))))})),ye=Object(w.a)((function(e){return{root:Object(A.a)({paddingTop:56,height:"100%"},e.breakpoints.up("sm"),{paddingTop:64}),shiftContent:{paddingLeft:240},content:{height:"100%"}}})),Oe=function(e){var a,t=e.children,o=ye(),l=Object(W.a)(),c=Object(F.a)(l.breakpoints.up("lg"),{defaultMatches:!0}),i=Object(n.useState)(!1),s=Object(R.a)(i,2),m=s[0],u=s[1],d=!!c||m;return r.a.createElement("div",{className:Object(k.a)((a={},Object(A.a)(a,o.root,!0),Object(A.a)(a,o.shiftContent,c),a))},r.a.createElement(xe,{onSidebarOpen:function(){u(!0)}}),r.a.createElement(ce,{onClose:function(){u(!1)},open:d,variant:c?"persistent":"temporary"}),r.a.createElement("main",{className:o.content},t,r.a.createElement(q,null)))},je=Object(w.a)((function(){return{root:{boxShadow:"none"}}})),Ne=function(e){var a=e.className,t=Object(T.a)(e,["className"]),n=je();return r.a.createElement(ie.a,Object.assign({},t,{className:Object(k.a)(n.root,a),color:"primary",position:"fixed"}),r.a.createElement(se.a,null,r.a.createElement(K.a,{to:"/"},r.a.createElement("img",{alt:"Logo",src:"/images/logos/logo--white.svg"}))))},Ce=Object(w.a)((function(){return{root:{paddingTop:64,height:"100%"},content:{height:"100%"}}})),Se=function(e){var a=e.children,t=Ce();return r.a.createElement("div",{className:t.root},r.a.createElement(Ne,null),r.a.createElement("main",{className:t.content},a))},Te=t(466),ke=t(464),we=t(465),Ae=t(276),Ie=t.n(Ae),Be=t(275),De=t.n(Be),ze=Object(w.a)((function(e){return{root:{height:"100%"},content:{alignItems:"center",display:"flex"},title:{fontWeight:700},avatar:{backgroundColor:e.palette.error.main,height:56,width:56},icon:{height:32,width:32},difference:{marginTop:e.spacing(2),display:"flex",alignItems:"center"},differenceIcon:{color:e.palette.error.dark},differenceValue:{color:e.palette.error.dark,marginRight:e.spacing(1)}}})),Re=function(e){var a=e.className,t=Object(T.a)(e,["className"]),n=ze();return r.a.createElement(ke.a,Object.assign({},t,{className:Object(k.a)(n.root,a)}),r.a.createElement(we.a,null,r.a.createElement(Te.a,{container:!0,justify:"space-between"},r.a.createElement(Te.a,{item:!0},r.a.createElement(L.a,{className:n.title,color:"textSecondary",gutterBottom:!0,variant:"body2"},"BUDGET"),r.a.createElement(L.a,{variant:"h3"},"$24,000")),r.a.createElement(Te.a,{item:!0},r.a.createElement(Q.a,{className:n.avatar},r.a.createElement(De.a,{className:n.icon})))),r.a.createElement("div",{className:n.difference},r.a.createElement(Ie.a,{className:n.differenceIcon}),r.a.createElement(L.a,{className:n.differenceValue,variant:"body2"},"12%"),r.a.createElement(L.a,{className:n.caption,variant:"caption"},"Since last month"))))},We=t(43),Fe=t.n(We),Le=t(106),_e=t.n(Le),Me=t(467),qe=t(468),He=t(469),Ge=t(470),Ue=t(471),Pe=t(488),Ve=t(489),Ye=t(473),$e=t(474),Je=t(69),Ke=t.n(Je),Qe=t(31),Xe=t.n(Qe),Ze=[{id:Xe()(),ref:"CDD1049",amount:30.5,customer:{name:"Ekaterina Tankova"},createdAt:15550164e5,status:"pending"},{id:Xe()(),ref:"CDD1048",amount:25.1,customer:{name:"Cao Yu"},createdAt:15550164e5,status:"delivered"},{id:Xe()(),ref:"CDD1047",amount:10.99,customer:{name:"Alexa Richardson"},createdAt:155493e7,status:"refunded"},{id:Xe()(),ref:"CDD1046",amount:96.43,customer:{name:"Anje Keizer"},createdAt:15547572e5,status:"pending"},{id:Xe()(),ref:"CDD1045",amount:32.54,customer:{name:"Clarke Gillebert"},createdAt:15546708e5,status:"delivered"},{id:Xe()(),ref:"CDD1044",amount:16.76,customer:{name:"Adam Denisov"},createdAt:15546708e5,status:"delivered"}],ea=Object(w.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:800},statusContainer:{display:"flex",alignItems:"center"},status:{marginRight:e.spacing(1)},actions:{justifyContent:"flex-end"}}})),aa={delivered:"success",pending:"info",refunded:"danger"},ta=function(e){var a=e.className,t=Object(T.a)(e,["className"]),o=ea(),l=Object(n.useState)(Ze),c=Object(R.a)(l,1)[0];return r.a.createElement(ke.a,Object.assign({},t,{className:Object(k.a)(o.root,a)}),r.a.createElement(Me.a,{action:r.a.createElement(te.a,{color:"primary",size:"small",variant:"outlined"},"New entry"),title:"Latest Orders"}),r.a.createElement(G.a,null),r.a.createElement(we.a,{className:o.content},r.a.createElement(_e.a,null,r.a.createElement("div",{className:o.inner},r.a.createElement(qe.a,null,r.a.createElement(He.a,null,r.a.createElement(Ge.a,null,r.a.createElement(Ue.a,null,"Order Ref"),r.a.createElement(Ue.a,null,"Customer"),r.a.createElement(Ue.a,{sortDirection:"desc"},r.a.createElement(Pe.a,{enterDelay:300,title:"Sort"},r.a.createElement(Ve.a,{active:!0,direction:"desc"},"Date"))),r.a.createElement(Ue.a,null,"Status"))),r.a.createElement(Ye.a,null,c.map((function(e){return r.a.createElement(Ge.a,{hover:!0,key:e.id},r.a.createElement(Ue.a,null,e.ref),r.a.createElement(Ue.a,null,e.customer.name),r.a.createElement(Ue.a,null,Fe()(e.createdAt).format("DD/MM/YYYY")),r.a.createElement(Ue.a,null,r.a.createElement("div",{className:o.statusContainer},r.a.createElement(D,{className:o.status,color:aa[e.status],size:"sm"}),e.status)))}))))))),r.a.createElement(G.a,null),r.a.createElement($e.a,{className:o.actions},r.a.createElement(te.a,{color:"primary",size:"small",variant:"text"},"View all ",r.a.createElement(Ke.a,null))))},na=t(475),ra=t(476),oa=t(278),la=t.n(oa),ca=[{id:Xe()(),name:"Dropbox",imageUrl:"/images/products/product_1.png",updatedAt:Fe()().subtract(2,"hours")},{id:Xe()(),name:"Medium Corporation",imageUrl:"/images/products/product_2.png",updatedAt:Fe()().subtract(2,"hours")},{id:Xe()(),name:"Slack",imageUrl:"/images/products/product_3.png",updatedAt:Fe()().subtract(3,"hours")},{id:Xe()(),name:"Lyft",imageUrl:"/images/products/product_4.png",updatedAt:Fe()().subtract(5,"hours")},{id:Xe()(),name:"GitHub",imageUrl:"/images/products/product_5.png",updatedAt:Fe()().subtract(9,"hours")}],ia=Object(w.a)((function(){return{root:{height:"100%"},content:{padding:0},image:{height:48,width:48},actions:{justifyContent:"flex-end"}}})),sa=function(e){var a=e.className,t=Object(T.a)(e,["className"]),o=ia(),l=Object(n.useState)(ca),c=Object(R.a)(l,1)[0];return r.a.createElement(ke.a,Object.assign({},t,{className:Object(k.a)(o.root,a)}),r.a.createElement(Me.a,{subtitle:"".concat(c.length," in total"),title:"Latest products"}),r.a.createElement(G.a,null),r.a.createElement(we.a,{className:o.content},r.a.createElement(ee.a,null,c.map((function(e,a){return r.a.createElement(ae.a,{divider:a<c.length-1,key:e.id},r.a.createElement(na.a,null,r.a.createElement("img",{alt:"Product",className:o.image,src:e.imageUrl})),r.a.createElement(ra.a,{primary:e.name,secondary:"Updated ".concat(e.updatedAt.fromNow())}),r.a.createElement(ue.a,{edge:"end",size:"small"},r.a.createElement(la.a,null)))})))),r.a.createElement(G.a,null),r.a.createElement($e.a,{className:o.actions},r.a.createElement(te.a,{color:"primary",size:"small",variant:"text"},"View all ",r.a.createElement(Ke.a,null))))},ma=t(279),ua=t.n(ma),da={labels:["1 Aug","2 Aug","3 Aug","4 Aug","5 Aug","6 Aug"],datasets:[{label:"This year",backgroundColor:O.primary.main,data:[18,5,19,27,29,19,20]},{label:"Last year",backgroundColor:O.neutral,data:[11,20,12,29,30,25,13]}]},ga={responsive:!0,maintainAspectRatio:!1,animation:!1,legend:{display:!1},cornerRadius:20,tooltips:{enabled:!0,mode:"index",intersect:!1,borderWidth:1,borderColor:O.divider,backgroundColor:O.white,titleFontColor:O.text.primary,bodyFontColor:O.text.secondary,footerFontColor:O.text.secondary},layout:{padding:0},scales:{xAxes:[{barThickness:12,maxBarThickness:10,barPercentage:.5,categoryPercentage:.5,ticks:{fontColor:O.text.secondary},gridLines:{display:!1,drawBorder:!1}}],yAxes:[{ticks:{fontColor:O.text.secondary,beginAtZero:!0,min:0},gridLines:{borderDash:[2],borderDashOffset:[2],color:O.divider,drawBorder:!1,zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2],zeroLineColor:O.divider}}]}},pa=Object(w.a)((function(){return{root:{},chartContainer:{height:400,position:"relative"},actions:{justifyContent:"flex-end"}}})),ha=function(e){var a=e.className,t=Object(T.a)(e,["className"]),n=pa();return r.a.createElement(ke.a,Object.assign({},t,{className:Object(k.a)(n.root,a)}),r.a.createElement(Me.a,{action:r.a.createElement(te.a,{size:"small",variant:"text"},"Last 7 days ",r.a.createElement(ua.a,null)),title:"Latest Sales"}),r.a.createElement(G.a,null),r.a.createElement(we.a,null,r.a.createElement("div",{className:n.chartContainer},r.a.createElement(p.a,{data:da,options:ga}))),r.a.createElement(G.a,null),r.a.createElement($e.a,{className:n.actions},r.a.createElement(te.a,{color:"primary",size:"small",variant:"text"},"Overview ",r.a.createElement(Ke.a,null))))},fa=t(477),ba=t(280),Ea=t.n(ba),va=Object(w.a)((function(e){return{root:{height:"100%"},content:{alignItems:"center",display:"flex"},title:{fontWeight:700},avatar:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,height:56,width:56},icon:{height:32,width:32},progress:{marginTop:e.spacing(3)}}})),xa=function(e){var a=e.className,t=Object(T.a)(e,["className"]),n=va();return r.a.createElement(ke.a,Object.assign({},t,{className:Object(k.a)(n.root,a)}),r.a.createElement(we.a,null,r.a.createElement(Te.a,{container:!0,justify:"space-between"},r.a.createElement(Te.a,{item:!0},r.a.createElement(L.a,{className:n.title,color:"textSecondary",gutterBottom:!0,variant:"body2"},"TASKS PROGRESS"),r.a.createElement(L.a,{variant:"h3"},"75.5%")),r.a.createElement(Te.a,{item:!0},r.a.createElement(Q.a,{className:n.avatar},r.a.createElement(Ea.a,{className:n.icon})))),r.a.createElement(fa.a,{className:n.progress,value:75.5,variant:"determinate"})))},ya=t(281),Oa=t.n(ya),ja=Object(w.a)((function(e){return{root:{height:"100%",backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},content:{alignItems:"center",display:"flex"},title:{fontWeight:700},avatar:{backgroundColor:e.palette.white,color:e.palette.primary.main,height:56,width:56},icon:{height:32,width:32}}})),Na=function(e){var a=e.className,t=Object(T.a)(e,["className"]),n=ja();return r.a.createElement(ke.a,Object.assign({},t,{className:Object(k.a)(n.root,a)}),r.a.createElement(we.a,null,r.a.createElement(Te.a,{container:!0,justify:"space-between"},r.a.createElement(Te.a,{item:!0},r.a.createElement(L.a,{className:n.title,color:"inherit",gutterBottom:!0,variant:"body2"},"TOTAL PROFIT"),r.a.createElement(L.a,{color:"inherit",variant:"h3"},"$23,200")),r.a.createElement(Te.a,{item:!0},r.a.createElement(Q.a,{className:n.avatar},r.a.createElement(Oa.a,{className:n.icon}))))))},Ca=t(283),Sa=t.n(Ca),Ta=t(282),ka=t.n(Ta),wa=Object(w.a)((function(e){return{root:{height:"100%"},content:{alignItems:"center",display:"flex"},title:{fontWeight:700},avatar:{backgroundColor:e.palette.success.main,height:56,width:56},icon:{height:32,width:32},difference:{marginTop:e.spacing(2),display:"flex",alignItems:"center"},differenceIcon:{color:e.palette.success.dark},differenceValue:{color:e.palette.success.dark,marginRight:e.spacing(1)}}})),Aa=function(e){var a=e.className,t=Object(T.a)(e,["className"]),n=wa();return r.a.createElement(ke.a,Object.assign({},t,{className:Object(k.a)(n.root,a)}),r.a.createElement(we.a,null,r.a.createElement(Te.a,{container:!0,justify:"space-between"},r.a.createElement(Te.a,{item:!0},r.a.createElement(L.a,{className:n.title,color:"textSecondary",gutterBottom:!0,variant:"body2"},"TOTAL de USU\xc1RIOS"),r.a.createElement(L.a,{variant:"h3"},"1,600")),r.a.createElement(Te.a,{item:!0},r.a.createElement(Q.a,{className:n.avatar},r.a.createElement(ka.a,{className:n.icon})))),r.a.createElement("div",{className:n.difference},r.a.createElement(Sa.a,{className:n.differenceIcon}),r.a.createElement(L.a,{className:n.differenceValue,variant:"body2"},"16%"),r.a.createElement(L.a,{className:n.caption,variant:"caption"},"Since last month"))))},Ia=t(284),Ba=t.n(Ia),Da=t(286),za=t.n(Da),Ra=t(287),Wa=t.n(Ra),Fa=t(285),La=t.n(Fa),_a=Object(w.a)((function(e){return{root:{height:"100%"},chartContainer:{position:"relative",height:"300px"},stats:{marginTop:e.spacing(2),display:"flex",justifyContent:"center"},device:{textAlign:"center",padding:e.spacing(1)},deviceIcon:{color:e.palette.icon}}})),Ma=function(e){var a=e.className,t=Object(T.a)(e,["className"]),n=_a(),o=Object(W.a)(),l={datasets:[{data:[63,15,22],backgroundColor:[o.palette.primary.main,o.palette.error.main,o.palette.warning.main],borderWidth:8,borderColor:o.palette.white,hoverBorderColor:o.palette.white}],labels:["Desktop","Tablet","Mobile"]},c={legend:{display:!1},responsive:!0,maintainAspectRatio:!1,animation:!1,cutoutPercentage:80,layout:{padding:0},tooltips:{enabled:!0,mode:"index",intersect:!1,borderWidth:1,borderColor:o.palette.divider,backgroundColor:o.palette.white,titleFontColor:o.palette.text.primary,bodyFontColor:o.palette.text.secondary,footerFontColor:o.palette.text.secondary}},i=[{title:"Desktop",value:"63",icon:r.a.createElement(Ba.a,null),color:o.palette.primary.main},{title:"Tablet",value:"15",icon:r.a.createElement(La.a,null),color:o.palette.error.main},{title:"Mobile",value:"23",icon:r.a.createElement(za.a,null),color:o.palette.warning.main}];return r.a.createElement(ke.a,Object.assign({},t,{className:Object(k.a)(n.root,a)}),r.a.createElement(Me.a,{action:r.a.createElement(ue.a,{size:"small"},r.a.createElement(Wa.a,null)),title:"Users By Device"}),r.a.createElement(G.a,null),r.a.createElement(we.a,null,r.a.createElement("div",{className:n.chartContainer},r.a.createElement(p.c,{data:l,options:c})),r.a.createElement("div",{className:n.stats},i.map((function(e){return r.a.createElement("div",{className:n.device,key:e.title},r.a.createElement("span",{className:n.deviceIcon},e.icon),r.a.createElement(L.a,{variant:"body1"},e.title),r.a.createElement(L.a,{style:{color:e.color},variant:"h2"},e.value,"%"))})))))},qa=Object(w.a)((function(e){return{root:{padding:e.spacing(4)}}})),Ha=function(){var e=qa();return r.a.createElement("div",{className:e.root},r.a.createElement(Te.a,{container:!0,spacing:4},r.a.createElement(Te.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(Re,null)),r.a.createElement(Te.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(Aa,null)),r.a.createElement(Te.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(xa,null)),r.a.createElement(Te.a,{item:!0,lg:3,sm:6,xl:3,xs:12},r.a.createElement(Na,null)),r.a.createElement(Te.a,{item:!0,lg:8,md:12,xl:9,xs:12},r.a.createElement(ha,null)),r.a.createElement(Te.a,{item:!0,lg:4,md:6,xl:3,xs:12},r.a.createElement(Ma,null)),r.a.createElement(Te.a,{item:!0,lg:4,md:6,xl:3,xs:12},r.a.createElement(sa,null)),r.a.createElement(Te.a,{item:!0,lg:8,md:12,xl:9,xs:12},r.a.createElement(ta,null))))},Ga=(Object(w.a)((function(e){return{root:{padding:e.spacing(4)},content:{paddingTop:150,textAlign:"center"},image:{marginTop:50,display:"inline-block",maxWidth:"100%",width:560}}})),t(478)),Ua=Object(w.a)((function(e){return{root:{backgroundColor:e.palette.background.default,height:"100%"},grid:{height:"100%"},quoteContainer:Object(A.a)({},e.breakpoints.down("md"),{display:"none"}),quote:{backgroundColor:e.palette.neutral,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"url(/images/auth.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},quoteInner:{textAlign:"center",flexBasis:"600px"},quoteText:{color:e.palette.white,fontWeight:300},name:{marginTop:e.spacing(3),color:e.palette.white},bio:{color:e.palette.white},contentContainer:{},content:{height:"100%",display:"flex",flexDirection:"column"},contentHeader:{display:"flex",alignItems:"center",paddingTop:e.spacing(5),paddingBototm:e.spacing(2),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},logoImage:{marginLeft:e.spacing(4)},contentBody:Object(A.a)({flexGrow:1,display:"flex",alignItems:"center"},e.breakpoints.down("md"),{justifyContent:"center"}),form:Object(A.a)({paddingLeft:100,paddingRight:100,paddingBottom:125,flexBasis:700},e.breakpoints.down("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),title:{marginTop:e.spacing(3)},socialButtons:{marginTop:e.spacing(3)},socialIcon:{marginRight:e.spacing(1)},sugestion:{marginTop:e.spacing(2)},textField:{marginTop:e.spacing(2)},signInButton:{margin:e.spacing(2,0)}}})),Pa=Object(d.g)((function(e){var a=e.history,t=Ua(),o=Object(n.useState)(""),l=Object(R.a)(o,2),c=l[0],i=l[1];return r.a.createElement("div",{className:t.root},r.a.createElement(Te.a,{className:t.grid,container:!0},r.a.createElement(Te.a,{className:t.quoteContainer,item:!0,lg:5},r.a.createElement("div",{className:t.quote},r.a.createElement("div",{className:t.quoteInner},r.a.createElement(L.a,{className:t.quoteText,variant:"h2"},"Cadastre suas tarefas no sistema e tenha melhor controle e gerenciamento delas. Basta logar com seu email e cadastr\xe1-las na p\xe1gina."),r.a.createElement("div",{className:t.person},r.a.createElement(L.a,{className:t.name,variant:"body1"},"SetTAREFAS"),r.a.createElement(L.a,{className:t.bio,variant:"body2"},"Gerenciamento de Tarefas Online"))))),r.a.createElement(Te.a,{className:t.content,item:!0,lg:7,xs:12},r.a.createElement("div",{className:t.content}),r.a.createElement("div",{className:t.contentBody},r.a.createElement("form",{className:t.form,onSubmit:function(e){e.preventDefault(),localStorage.setItem("email_usuario_logado",c),a.push("/")}},r.a.createElement(Ga.a,{className:t.textField,fullWidth:!0,label:"Seu e-mail",name:"email",onChange:function(e){return i(e.target.value)},type:"email",value:c,variant:"outlined"}),r.a.createElement(te.a,{className:t.signInButton,color:"primary",fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Entrar"))))))})),Va=t(139),Ya=t(291),$a=t.n(Ya),Ja=t(290),Ka=t.n(Ja),Qa=t(292),Xa=t.n(Qa),Za=Object(w.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:1050},nameContainer:{display:"flex",alignItems:"center"},avatar:{marginRight:e.spacing(2)},actions:{justifyContent:"flex-end"}}})),et=function(e){var a=e.className,t=e.tarefas,n=Object(T.a)(e,["className","tarefas"]),o=Za();return r.a.createElement(ke.a,Object.assign({},n,{className:Object(k.a)(o.root,a)}),r.a.createElement(we.a,{className:o.content},r.a.createElement(_e.a,null,r.a.createElement("div",{className:o.inner},r.a.createElement(qe.a,null,r.a.createElement(He.a,null,r.a.createElement(Ge.a,null,r.a.createElement(Ue.a,null,"C\xf3digo"),r.a.createElement(Ue.a,null,"Descri\xe7\xe3o"),r.a.createElement(Ue.a,null,"Categoria"),r.a.createElement(Ue.a,null,"Status"),r.a.createElement(Ue.a,null),r.a.createElement(Ue.a,null))),r.a.createElement(Ye.a,null,t.map((function(a){return r.a.createElement(Ge.a,{key:a.id},r.a.createElement(Ue.a,null,a.id),r.a.createElement(Ue.a,null,a.descricao),r.a.createElement(Ue.a,null,a.categoria),r.a.createElement(Ue.a,null,a.done?"Feito":"Pendente"),r.a.createElement(Ue.a,null,r.a.createElement(ue.a,{onClick:function(t){return e.alterarStatus(a.id)},color:"secondary"},a.done?r.a.createElement(Ka.a,null):r.a.createElement($a.a,null))),r.a.createElement(Ue.a,null,r.a.createElement(ue.a,{onClick:function(t){return e.deleteAction(a.id)}},r.a.createElement(Xa.a,null))))}))))))))},at=t(434),tt=t(435),nt=t(441),rt=t(479),ot=Object(w.a)((function(e){return{root:{},row:{height:"42px",display:"flex",alignItems:"center",marginTop:e.spacing(1)},spacer:{flexGrow:1},importButton:{marginRight:e.spacing(1)},exportButton:{marginRight:e.spacing(1)},searchInput:{marginRight:e.spacing(1)}}})),lt=function(e){var a=e.className,t=Object(T.a)(e,["className"]),o=Object(n.useState)(""),l=Object(R.a)(o,2),c=l[0],i=l[1],s=Object(n.useState)(""),m=Object(R.a)(s,2),u=m[0],d=m[1],g=ot();return r.a.createElement("div",Object.assign({},t,{className:Object(k.a)(g.root,a)}),r.a.createElement("div",{className:g.row},r.a.createElement("span",{className:g.spacer})),r.a.createElement("div",{className:g.row},r.a.createElement(Te.a,{container:!0},r.a.createElement(Te.a,{item:!0,md:4,xs:12,sm:6},r.a.createElement(Ga.a,{className:g.searchInput,placeholder:"Descri\xe7\xe3o da tarefa",label:"Descri\xe7\xe3o:",value:c,fullWidth:!0,onChange:function(e){return i(e.target.value)}})),r.a.createElement(Te.a,{item:!0,md:4,xs:12,sm:6},r.a.createElement(at.a,{fullWidth:!0},r.a.createElement(tt.a,null,"Categoria: "),r.a.createElement(nt.a,{onChange:function(e){return d(e.target.value)},value:u},r.a.createElement(rt.a,{value:""},"Selecionar categoria..."),r.a.createElement(rt.a,{value:"TRABALHO"},"Trabalho"),r.a.createElement(rt.a,{value:"ESTUDOS"},"Estudos"),r.a.createElement(rt.a,{value:"OUTROS"},"Outros")))),r.a.createElement(Te.a,null,r.a.createElement(te.a,{onClick:function(a){a.preventDefault();var t={descricao:c,categoria:u};e.salvar(t),i(""),d("")},variant:"contained",color:"secondary"},"Adicionar")))))},ct=t(82),it=t.n(ct),st=t(480),mt=t(481),ut=t(482),dt=t(483),gt=Object(w.a)((function(e){return{root:{padding:e.spacing(3)},content:{marginTop:e.spacing(2)}}})),pt="https://minhastarefas-api.herokuapp.com/tarefas",ht=function(){var e=gt(),a=Object(n.useState)([]),t=Object(R.a)(a,2),o=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(R.a)(c,2),s=i[0],m=i[1],u=Object(n.useState)(""),d=Object(R.a)(u,2),g=d[0],p=d[1];return Object(n.useEffect)((function(){it.a.get(pt,{headers:{"x-tenant-id":localStorage.getItem("email_usuario_logado")}}).then((function(e){var a=e.data;l(a)})).catch((function(e){p("Ocorreu um erro",e),m(!0)}))}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(lt,{salvar:function(e){it.a.post(pt,e,{headers:{"x-tenant-id":localStorage.getItem("email_usuario_logado")}}).then((function(e){var a=e.data;l([].concat(Object(Va.a)(o),[a])),p("Item adicionado com sucesso"),m(!0)})).catch((function(e){p("Ocorreu um erro"),m(!0)}))}}),r.a.createElement("div",{className:e.content},r.a.createElement(et,{alterarStatus:function(e){it.a.patch("".concat(pt,"/").concat(e),null,{headers:{"x-tenant-id":localStorage.getItem("email_usuario_logado")}}).then((function(a){var t=Object(Va.a)(o);t.forEach((function(a){a.id===e&&(a.done=!0)})),l(t),p("Status atualizado com sucesso!"),m(!0)})).catch((function(e){p("Ocorreu um erro ao mudar o status da tarefa. Tente novamente!"),m(!0)}))},deleteAction:function(e){it.a.delete("".concat(pt,"/").concat(e),{headers:{"x-tenant-id":localStorage.getItem("email_usuario_logado")}}).then((function(a){var t=o.filter((function(a){return a.id!==e}));l(t),p("Item removido com sucesso"),m(!0)})).catch((function(e){m(!0),p("Erro ao remover item")}))},tarefas:o})),r.a.createElement(st.a,{open:s,onClose:function(e){return m(!1)}},r.a.createElement(mt.a,null,"Aten\xe7\xe3o"),r.a.createElement(ut.a,null,g),r.a.createElement(dt.a,null,r.a.createElement(te.a,{onClick:function(e){return m(!1)}},"FECHAR"))))},ft=function(){return r.a.createElement(d.d,null,r.a.createElement(d.a,{exact:!0,from:"/",to:"/dashboard"}),r.a.createElement(z,{component:Ha,exact:!0,layout:Oe,path:"/dashboard"}),r.a.createElement(z,{component:ht,exact:!0,layout:Oe,path:"/tarefas"}),r.a.createElement(z,{component:Pa,exact:!0,layout:Se,path:"/login"}),r.a.createElement(d.a,{to:"/not-found"}))},bt=Object(g.a)();p.b.helpers.extend(p.b.elements.Rectangle.prototype,{draw:E.draw}),b.a.validators=Object(u.a)({},b.a.validators,{},S);var Et=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{theme:C},r.a.createElement(d.c,{history:bt},r.a.createElement(ft,null)))}}]),t}(n.Component);l.a.render(r.a.createElement(Et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[303,1,2]]]);
//# sourceMappingURL=main.7a338e64.chunk.js.map