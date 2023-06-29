"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[691],{383:function(n,e,t){t.d(e,{T:function(){return u}});var r=t(861),a=t(687),c=t.n(a),o=t(243),u={API_KEY:"de43d67db1c628887eb86e6b3184ef59",BASE_URL:"https://api.themoviedb.org/3/",getTrending:function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u.BASE_URL,"/trending/all/day?api_key=").concat(u.API_KEY)).catch((function(n){throw new Error(n.message)}));case 2:return e=n.sent,n.next=5,e.data.results;case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),getMovieByName:function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u.BASE_URL,"search/movie?api_key=").concat(u.API_KEY,"&query=").concat(e)).catch((function(n){throw new Error(n.message)}));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getMovieDetails:function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u.BASE_URL,"movie/").concat(e,"?api_key=").concat(u.API_KEY)).catch((function(n){throw new Error(n.message)}));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getMovieCredits:function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u.BASE_URL,"movie/").concat(e,"/credits?api_key=").concat(u.API_KEY)).catch((function(n){throw new Error(n.message)}));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getMovieReviews:function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u.BASE_URL,"movie/").concat(e,"/reviews?api_key=").concat(u.API_KEY)).catch((function(n){throw new Error(n.message)}));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},691:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,c,o=t(861),u=t(439),i=t(687),s=t.n(i),p=t(383),f=t(791),d=t(87),l=t(689),v=t(168),h=t(686),m=h.Z.input(r||(r=(0,v.Z)(["\n  border: 2px solid black;\n  border-radius: 15px;\n  padding: 15px;\n  margin: 0 15px 0px 0;\n"]))),g=h.Z.input(a||(a=(0,v.Z)(["\n  cursor: pointer;\n\n  border-radius: 15px;\n  padding: 15px;\n  border: 2px solid black;\n  &:hover,\n  &:focus {\n    background-color: transparent;\n  }\n"]))),x=h.Z.ul(c||(c=(0,v.Z)(["\n  margin: 0;\n  margin-top: 10px;\n  list-style: none;\n  padding: 0;\n\n  li:not(:last-child) {\n    margin-bottom: 10px;\n  }\n\n  a {\n    color: #000000;\n    text-decoration: none;\n    &:hover,\n    :focus {\n      color: red;\n    }\n  }\n"]))),w=t(184),_=function(){var n,e=(0,f.useState)([]),t=(0,u.Z)(e,2),r=t[0],a=t[1],c=(0,d.lr)(""),i=(0,u.Z)(c,2),v=i[0],h=i[1],_=null!==(n=v.get("query"))&&void 0!==n?n:"",y=(0,f.useState)(_),b=(0,u.Z)(y,2),Z=b[0],k=b[1],E=(0,l.TH)();(0,f.useEffect)((function(){Z&&(0,o.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=a,n.next=3,p.T.getMovieByName(Z);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))()}),[Z]);var A=function(){var n=(0,o.Z)(s().mark((function n(e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),k(_.trim());case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("form",{autoComplete:"off",onSubmit:A,children:[(0,w.jsx)(m,{type:"text",name:"query",value:_,onChange:function(n){var e=n.target;if(""!==e.value)return h({query:e.value});h({})},placeholder:"input film name to search",required:!0}),(0,w.jsx)(g,{type:"submit",value:"Find my film"})]}),0!==r.length&&(0,w.jsx)(x,{children:r.map((function(n){return(0,w.jsx)("li",{children:(0,w.jsx)(d.rU,{to:"".concat(n.id),state:{from:E},children:n.title||n.name})},n.id)}))})]})}}}]);
//# sourceMappingURL=691.bf130301.chunk.js.map