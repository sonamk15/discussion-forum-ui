(this["webpackJsonpprograming-discussion-forum"]=this["webpackJsonpprograming-discussion-forum"]||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},120:function(e,t,n){},125:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),o=n(11),s=n.n(o),i=(n(111),n(112),n(16)),l=n(181),j=n(184),u=n(186),b=n(187),d=n(91),h=n(198),m=n(66),O=n(84),x=n.n(O),p=n(188),g=(n(113),Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}))),f=function(){var e=g(),t=r.a.useState(null),n=Object(i.a)(t,2),c=n[0],o=n[1],s=function(){o(null)},l=localStorage.getItem("userDetails");return Object(a.jsx)("div",{className:"forum-header",children:Object(a.jsx)(j.a,{position:"static",style:{backgroundColor:"#28abe5"},children:Object(a.jsxs)(u.a,{children:[Object(a.jsxs)(b.a,{edge:"start",onClick:function(e){o(e.currentTarget)},className:e.menuButton,color:"inherit","aria-label":"Menu",children:[Object(a.jsx)(x.a,{}),Object(a.jsxs)(d.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:s,children:[Object(a.jsx)(h.a,{onClick:s,children:"About us"}),Object(a.jsx)(h.a,{onClick:s,children:"Contact us"})]})]}),Object(a.jsx)(m.a,{variant:"h6",className:e.title,children:Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"})}),l?Object(a.jsx)("a",{href:"/logout",children:Object(a.jsx)(p.a,{color:"inherit",children:"Logout"})}):Object(a.jsxs)("div",{children:[Object(a.jsx)("a",{href:"/login",children:Object(a.jsx)(p.a,{color:"inherit",children:"Login"})}),Object(a.jsx)("a",{href:"/signup",children:Object(a.jsx)(p.a,{color:"inherit",children:"Sign Up"})})]})]})})})},y=n(190),v=n(189),w=(n(120),Object(l.a)((function(e){return{footer:{padding:e.spacing(3,2),position:"fixed",bottom:0,left:0,right:0,width:"100%",backgroundColor:"#28abe5"}}})));function A(){return Object(a.jsxs)(m.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(v.a,{color:"inherit",href:"#",children:"Technologies Pvt Ltd"})," ",(new Date).getFullYear(),"."]})}var N=function(){var e=w();return Object(a.jsx)("div",{className:"forum-footer",children:Object(a.jsx)("footer",{className:e.footer,children:Object(a.jsx)(y.a,{maxWidth:"sm",children:Object(a.jsx)(A,{})})})})},C=n(191),k=n(94),S=n(12),I=n(57),B=localStorage.getItem("userDetails"),Q=function(e){var t=e.component,n=Object(I.a)(e,["component"]);return Object(a.jsx)(C.b,Object(S.a)(Object(S.a)({},n),{},{component:function(e){return B?Object(a.jsx)(C.a,{to:"/query"}):Object(a.jsx)(t,Object(S.a)({},e))}}))},U=localStorage.getItem("userDetails"),W=function(e){var t=e.component,n=Object(I.a)(e,["component"]);return Object(a.jsx)(C.b,Object(S.a)(Object(S.a)({},n),{},{component:function(e){return U?Object(a.jsx)(t,Object(S.a)({},e)):Object(a.jsx)(C.a,{to:"/"})}}))},F=n(87),q=n(88),D=n(93),T=n(92),E=(n(125),function(e){Object(D.a)(n,e);var t=Object(T.a)(n);function n(){return Object(F.a)(this,n),t.apply(this,arguments)}return Object(q.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"forum-home"})}}]),n}(c.Component)),z=n(38),L=n(30),V=n.n(L),H=n(46),Y=n(47),R=n.n(Y);function G(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(H.a)(V.a.mark((function e(t){var n,a,c,r,o,s,i=arguments;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",a=i.length>2&&void 0!==i[2]?i[2]:{},c=!(i.length>3&&void 0!==i[3])||i[3],r=Object(S.a)({url:t,method:n},a),c&&(o=localStorage.getItem("jwt"),r.headers?r.headers.Authorization=o:r.headers={Authorization:o}),e.prev=5,e.next=8,R()(r);case 8:return s=e.sent,console.log(s),e.abrupt("return",{sucess:!0,data:s.data});case 13:return e.prev=13,e.t0=e.catch(5),e.abrupt("return",{sucess:!1,error_message:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[5,13]])})))).apply(this,arguments)}n(80);var M=function(e){var t=e.allQueries;console.log("allQueries==>",t);var n=Object(c.useState)(""),r=Object(i.a)(n,2),o=r[0],s=r[1];return console.log(o),Object(a.jsx)("div",{className:"all-queries",children:Object(a.jsx)("div",{className:"commentbox",children:Object(a.jsx)("ul",{className:"ul",children:0!==t.length&&t.map((function(e){return Object(a.jsxs)("div",{className:"queries",children:[Object(a.jsxs)("li",{className:"query",style:{},children:["Q: ",e.issue]}),Object(a.jsx)("li",{className:"comment",style:{},children:e.comment}),Object(a.jsx)("textarea",{id:e.id,className:"reply",name:"comment",placeholder:"Write your ans here",onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("button",{className:"",type:"submit",onClick:function(){return function(e){G("api/comment","POST",{data:{comment:o,userId:e.userId,queryId:e.id}}).then((function(e){s("")(e?window.location.reload():"")})).catch((function(e){return e}))}(e)},children:"REPLY"}),e.comments.length>0&&Object(a.jsx)("ul",{className:"reply-on-comment",children:e.comments.map((function(e){return Object(a.jsxs)("p",{children:[Object(a.jsxs)("span",{style:{"font-weight":"bold"},children:["User Name:- ",e.user.name]}),Object(a.jsxs)("li",{className:"comment",children:[e.comment,Object(a.jsx)("br",{})]})]})}))})]})}))})})})},X=(n(145),["Category","mongoDB","mySQL","javascript","Python","java","node","react","express","postgres","php"]);var J=function(e){var t=e.handleClose,n=e.show,c=e.addQuery,r=e.handelChange,o=e.category,s=e.query_text,i=n?"modal display-block":"modal display-none";return Object(a.jsx)("div",{className:i,children:Object(a.jsxs)("section",{className:"modal-main",children:[Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsx)("label",{className:"label",children:"Select Category"}),Object(a.jsx)("select",{name:"category",value:o,className:"queri-raiser-dropdown",onChange:r,children:X.map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},t)}))}),Object(a.jsx)("textarea",{name:"query_text",value:s,className:"texarea",style:{width:"30%",borderRadius:"5px"},placeholder:"Ask Your query",onChange:r})]}),Object(a.jsxs)("div",{className:"modal-button",children:[Object(a.jsx)("button",{className:"btn1",type:"submit",onClick:c,children:"Post"}),Object(a.jsx)("button",{type:"btn2",onClick:t,children:"Close"})]})]})})},P=(n(146),function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)({id:null,name:null,profile:null}),s=Object(i.a)(o,2),l=s[0],j=s[1],u=Object(c.useState)({category:"",query_text:""}),b=Object(i.a)(u,2),d=b[0],h=b[1],m=Object(c.useState)([]),O=Object(i.a)(m,2),x=O[0],p=O[1];Object(c.useEffect)((function(){g()}),[]);var g=function(){var e=Object(H.a)(V.a.mark((function e(){var t,n,a,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("userDetails")),n=t.id,a=t.name,c=t.profile,e.next=3,f(n);case 3:j((function(e){return Object(S.a)(Object(S.a)({},e),{},{id:n,name:a,profile:c})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(H.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G("api/query/getAllQueriesByUserId/".concat(t)).then((function(e){e.data?p(e.data):alert("Somethig went wrong")})).catch((function(e){alert(e.message)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){r(!n)},v=d.category,w=d.query_text;return Object(a.jsxs)("div",{className:"comment-box",children:[Object(a.jsx)("h1",{className:"heading",children:"Welcome to the Discussion Forum"}),Object(a.jsx)("button",{onClick:y,children:"Raise Query"}),Object(a.jsx)(M,{allQueries:x}),Object(a.jsx)(J,{show:n,handleClose:y,category:v,query_text:w,handelChange:function(e){var t=e.target,n=t.value,a=t.name;h((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(z.a)({},a,n))}))},addQuery:function(){var e=d.query_text;G("api/query","POST",{data:{topic:d.category,issue:e,userId:l.id}}).then((function(e){h((function(e){return Object(S.a)(Object(S.a)({},e),{},{query_text:"",category:""})})),r(!n)})).catch((function(e){return console.log(e)}))}})]})}),K=n(192),_=n(151),$=n(197),ee=n(195),te=n(193),ne=n(56),ae=n.n(ne),ce=n(90),re=n.n(ce),oe=n(89),se=n.n(oe),ie=n(194),le=n(196),je=(n(147),function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],o=(n[1],Object(c.useState)("")),s=Object(i.a)(o,2),l=s[0],j=s[1],u=Object(c.useState)(""),d=Object(i.a)(u,2),h=d[0],O=d[1];return Object(a.jsxs)(K.a,{className:"login-form",children:[Object(a.jsx)("div",{className:"sub-class"}),Object(a.jsxs)(_.a,{elevation:10,style:{padding:20,height:"65vh",width:"300px",margin:"20px auto"},children:[Object(a.jsxs)(K.a,{align:"center",children:[Object(a.jsx)($.a,{style:{backgroundColor:"#28abe5"},children:Object(a.jsx)(ae.a,{})}),Object(a.jsx)("h3",{style:{color:"grey"},children:"Sign In"})]}),Object(a.jsx)(ee.a,{id:"input-with-icon-textfield",label:"Email",placeholder:"Enter email",type:"text",onChange:function(e){return j(e.target.value)},fullWidth:!0,required:!0,InputProps:{startAdornment:Object(a.jsx)(te.a,{position:"start",children:Object(a.jsx)(se.a,{})})}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(ee.a,{id:"input-with-icon-textfield",label:"Password",placeholder:"Enter Password",type:r?"text":"password",onChange:function(e){return O(e.target.value)},fullWidth:!0,required:!0,InputProps:{startAdornment:Object(a.jsx)(te.a,{position:"start",children:Object(a.jsx)(re.a,{})}),endAdornment:Object(a.jsx)(te.a,{position:"end",children:Object(a.jsx)(b.a,{"aria-label":"toggle password visibility"})})}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(ie.a,{control:Object(a.jsx)(le.a,{name:"checkedB",color:"blue"}),label:"Remember me"}),Object(a.jsx)("br",{}),Object(a.jsx)(p.a,{variant:"contained",style:{margin:"8px 0",backgroundColor:"#28abe5",borderRadius:3,padding:"20px",height:10,width:150},fullWidth:!0,onClick:function(){var t={email:l,password:h};R.a.post("api/user/login",t).then((function(t){void 0!==t.data.token&&(localStorage.setItem("token",t.data.token),R.a.post("api/user/token/verify",{token:t.data.token}).then((function(t){t.data?(localStorage.setItem("userDetails",JSON.stringify(t.data)),console.log(e),e.history.push("/query")):alert("User not found")})))})).catch((function(e){return console.log(e)}))},children:"Sign In"}),Object(a.jsxs)(m.a,{align:"right",children:[" ",Object(a.jsx)(v.a,{href:"#",children:"Forgot Password"})]})]})]})}),ue=(n(148),function(e){var t=Object(c.useState)({name:"",email:"",password:""}),n=Object(i.a)(t,2),r=n[0],o=n[1],s=function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(z.a)({},n,a))}))};return Object(a.jsxs)(K.a,{className:"signup-form",children:[Object(a.jsx)("div",{className:"sub-class"}),Object(a.jsxs)(_.a,{elevation:10,style:{padding:20,height:"65vh",width:"280px",margin:"20px auto"},children:[Object(a.jsxs)(K.a,{align:"center",children:[Object(a.jsx)($.a,{style:{backgroundColor:"#28abe5"},children:Object(a.jsx)(ae.a,{})}),Object(a.jsx)("h3",{style:{color:"grey"},children:"Sign Up"})]}),Object(a.jsx)(ee.a,{label:"Name",value:r.name,name:"name",placeholder:"Name",fullWidth:!0,required:!0,onChange:s}),Object(a.jsx)(ee.a,{label:"Email",value:r.email,name:"email",placeholder:"Enter email",fullWidth:!0,required:!0,onChange:s}),Object(a.jsx)(ee.a,{label:"Password",value:r.password,name:"password",placeholder:"Enter password",type:"password",fullWidth:!0,required:!0,onChange:s}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(ie.a,{align:"left",control:Object(a.jsx)(le.a,{name:"checkedB",color:"blue"}),label:"Remember me"}),Object(a.jsx)("br",{}),Object(a.jsx)(p.a,{variant:"contained",onClick:function(){var t=r.name,n=r.email,a=r.password;t&&n&&a?G("api/user/signup","POST",{data:{name:t,email:n,password:a}}).then((function(t){t.data&&console.log(e)})):alert("All feilds are required!")},style:{margin:"8px 0",backgroundColor:"#28abe5",borderRadius:3,padding:"20px",height:10,width:150},fullWidth:!0,children:"Sign Up"})]})]})}),be=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[localStorage.getItem("token")?Object(a.jsx)("button",{className:"btn btn-outline-primary my-2 my-sm-0",style:{color:"black",float:"right",marginRight:"30px",width:"6%"},type:"submit",onClick:function(){localStorage.removeItem("userDetails"),localStorage.removeItem("token"),r(!0)},children:"OK"}):Object(a.jsx)("div",{children:Object(a.jsx)(v.a,{to:"/",children:Object(a.jsx)("button",{type:"button",style:{marginLeft:"10px"},className:"btn btn-primary btn-arrow-right ",children:"Home"})})}),n?Object(a.jsx)(C.a,{to:"/"}):null]})},de=n(25),he=Object(de.a)(),me=Object(k.a)((function(){return Object(a.jsx)(C.c,{history:he,children:Object(a.jsxs)(C.d,{children:[Object(a.jsx)(Q,{path:"/",component:E,exact:!0}),Object(a.jsx)(Q,{path:"/login",component:je,exact:!0}),Object(a.jsx)(Q,{path:"/signup",component:ue,exact:!0}),Object(a.jsx)(W,{path:"/logout",component:be}),Object(a.jsx)(W,{path:"/query",component:P})]})})}));var Oe=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(f,{}),Object(a.jsx)(me,{}),Object(a.jsx)(N,{})]})};s.a.render(Object(a.jsx)(Oe,{}),document.getElementById("root"))},80:function(e,t,n){}},[[149,1,2]]]);
//# sourceMappingURL=main.389c37bc.chunk.js.map