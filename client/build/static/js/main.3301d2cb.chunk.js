(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{69:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"fetchUser",(function(){return m})),n.d(r,"handleToken",(function(){return g}));var c=n(1),a=n(0),s=n(18),i=n.n(s),o=n(12),u=n(13),l=n(15),j=n(14),d=(n(45),n(20)),h=n(3),p=n(9),b=n(17),O=n.n(b),f=n(24),v=n(25),x=n.n(v),y="fetch_user",m=function(){return function(){var e=Object(f.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/current_user");case 2:n=e.sent,t({type:y,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(f.a)(O.a.mark((function t(n){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.post("/api/stripe",e);case 2:r=t.sent,n({type:y,payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=n(38),w=n.n(k),E=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsx)(w.a,{name:"Emaily",description:"$5 USD for 5 email credits",amount:5,token:function(t){return e.props.handleToken(t)},stripeKey:"pk_test_51HuUPpIVRHEaVG2ngRfHPre6GcrIpjqLOdpSnAeeD2R1eohiBMPIU74e6Rkw4g5vMdMEZtdEGjEmPsdkt2oL1lZi00eP0jqWvv",children:Object(c.jsx)("button",{className:"btn",children:"Add Credits"})})}}]),n}(a.Component),P=Object(p.b)(null,r)(E),C=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderContent",value:function(){switch(this.props.auth){case null:return"still deciding";case!1:return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/auth/google",children:"Login with Google"})});default:return[Object(c.jsx)("li",{children:Object(c.jsx)(P,{})},"1"),Object(c.jsxs)("li",{style:{margin:"0 10px"},children:["Credits: ",this.props.auth.credits]},"2"),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/api/logout",children:"Logout"})},"3")]}}},{key:"render",value:function(){return console.log("header",this.props),Object(c.jsx)("nav",{children:Object(c.jsxs)("div",{className:"nav-wrapper",children:[Object(c.jsx)(d.b,{to:this.props.auth?"/surveys":"/",className:"left brand-logo",children:"Emaily"}),Object(c.jsx)("ul",{className:"right",children:this.renderContent()})]})})}}]),n}(a.Component);var M=Object(p.b)((function(e){return{auth:e.auth}}))(C);var R=function(){return Object(c.jsx)("div",{style:{textAlign:"center"},children:Object(c.jsx)("h4",{children:"Collect feedback from your users"})})},G=function(){return Object(c.jsx)("h1",{children:"Dashboard"})},U=function(){return Object(c.jsx)("h1",{children:"Survey"})},D=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser(),console.log("inside componentDidMount")}},{key:"render",value:function(){return Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(M,{}),Object(c.jsx)(h.a,{exact:!0,path:"/",component:R}),Object(c.jsx)(h.a,{exact:!0,path:"/surveys",component:G}),Object(c.jsx)(h.a,{exact:!0,path:"/surveys/new",component:U})]})})}}]),n}(a.Component),H=Object(p.b)(null,r)(D),I=n(11),L=Object(I.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(console.log("inside authreducer",t),t.type){case y:return t.payload||!1;default:return e}}}),_=n(39),q=Object(I.d)(L,{},Object(I.a)(_.a));i.a.render(Object(c.jsx)(p.a,{store:q,children:Object(c.jsx)(H,{})}),document.querySelector("#root")),console.log("stripe key is","pk_test_51HuUPpIVRHEaVG2ngRfHPre6GcrIpjqLOdpSnAeeD2R1eohiBMPIU74e6Rkw4g5vMdMEZtdEGjEmPsdkt2oL1lZi00eP0jqWvv"),console.log("Environment is","production")}},[[69,1,2]]]);
//# sourceMappingURL=main.3301d2cb.chunk.js.map