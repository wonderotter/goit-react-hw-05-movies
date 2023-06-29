"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{383:function(t,e,n){n.d(e,{T:function(){return o}});var r=n(861),a=n(687),c=n.n(a),s=n(243),o={API_KEY:"de43d67db1c628887eb86e6b3184ef59",BASE_URL:"https://api.themoviedb.org/3/",getTrending:function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o.BASE_URL,"/trending/all/day?api_key=").concat(o.API_KEY)).catch((function(t){throw new Error(t.message)}));case 2:return e=t.sent,t.next=5,e.data.results;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),getMovieByName:function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o.BASE_URL,"search/movie?api_key=").concat(o.API_KEY,"&query=").concat(e)).catch((function(t){throw new Error(t.message)}));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getMovieDetails:function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o.BASE_URL,"movie/").concat(e,"?api_key=").concat(o.API_KEY)).catch((function(t){throw new Error(t.message)}));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getMovieCredits:function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o.BASE_URL,"movie/").concat(e,"/credits?api_key=").concat(o.API_KEY)).catch((function(t){throw new Error(t.message)}));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),getMovieReviews:function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o.BASE_URL,"movie/").concat(e,"/reviews?api_key=").concat(o.API_KEY)).catch((function(t){throw new Error(t.message)}));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},736:function(t,e,n){n.r(e),n.d(e,{default:function(){return i}});var r,a=n(439),c=n(168),s=n(686).Z.ul(r||(r=(0,c.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  li {\n    border-bottom: 1px solid #000000;\n  }\n"]))),o=n(709),u=n(184),i=function(){var t=(0,o.B)("Cast"),e=(0,a.Z)(t,1)[0];return(0,u.jsx)(s,{children:0!==e.length&&e.cast.map((function(t){return(0,u.jsxs)("li",{children:[(0,u.jsx)("h4",{children:t.name}),(0,u.jsxs)("p",{children:["Character: ",t.original_name,"/",t.character]})]},t.id)}))})}},709:function(t,e,n){n.d(e,{B:function(){return f}});var r=n(861),a=n(439),c=n(687),s=n.n(c),o=n(791),u=n(689),i=n(383),f=function(t){var e=(0,o.useState)("Details"===t?{}:[]),n=(0,a.Z)(e,2),c=n[0],f=n[1],p=(0,u.UO)().movieId;return(0,o.useEffect)((function(){try{if("Cast"===t)return void(0,r.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,i.T.getMovieCredits(p);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))();if("Reviews"===t)return void(0,r.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,i.T.getMovieReviews(p);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))();if("Details"===t)return void(0,r.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,i.T.getMovieDetails(p);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))()}catch(e){throw console.log(e),new Error(e.message)}}),[p,t]),[c]}}}]);
//# sourceMappingURL=736.da538bf6.chunk.js.map