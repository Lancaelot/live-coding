(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),a=n.n(r),s=n(9),i=n.n(s),u=(n(16),n(10)),o=n(4),j=(n(17),n(8)),d=function(t){var e=t.Title,n=t.Plot,r=t.imdbID,a=t.Poster;return Object(c.jsxs)("div",{className:"Movie",children:[Object(c.jsx)("img",{alt:"poste",src:a}),Object(c.jsx)("div",{children:e}),Object(c.jsx)("p",{children:n}),Object(c.jsx)("div",{children:r})]})},b=function(t){var e=t.movies,n=t.handleAdd;return Object(c.jsx)("ul",{className:"MoviseList",children:e.map((function(t){return Object(c.jsx)("li",{className:"MoviesItem",children:Object(c.jsx)(d,Object(j.a)(Object(j.a)({},t),{},{handleAdd:n}))},t.imdbId)}))})},l=n(2),p=n.n(l),O=n(6);function h(t){return f.apply(this,arguments)}function f(){return(f=Object(O.a)(p.a.mark((function t(e){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://www.omdbapi.com/?apikey=287c70f0&t=[".concat(e,"]"));case 2:return n=t.sent,t.next=5,n.json();case 5:return c=t.sent,t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=function(t){var e=t.handleAdd,n=Object(r.useState)(null),a=Object(o.a)(n,2),s=a[0],i=a[1],u=Object(r.useState)(null),j=Object(o.a)(u,2),d=j[0],b=j[1];function l(){return(l=Object(O.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(d);case 2:e=t.sent,i(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.jsxs)("form",{className:"FindMovieForm",children:[Object(c.jsx)("input",{onChange:function(t){return b(t.target.value)}}),Object(c.jsx)("button",{type:"button",onClick:function(){return function(){return l.apply(this,arguments)}()},children:"Find Movie"}),Object(c.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),e(s)},children:"Add Movie"})]})},x=function(){var t=Object(r.useState)([]),e=Object(o.a)(t,2),n=e[0],a=e[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(v,{handleAdd:function(t){a([].concat(Object(u.a)(n),[t]))}}),Object(c.jsx)(b,{movies:n})]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1ad37471.chunk.js.map