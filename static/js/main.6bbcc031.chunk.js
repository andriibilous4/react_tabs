(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(4),d=n(1),s=n(0),o=function(t){var e=t.tabs,n=t.onTabSelected,c=t.selectedTabId;return Object(s.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(s.jsx)("div",{className:"tabs is-boxed",children:Object(s.jsx)("ul",{children:e.map((function(t){return Object(s.jsx)("li",{className:c===t.id?"is-active":"","data-cy":"Tab",children:Object(s.jsx)("a",{onClick:function(){c!==t.id&&n(t)},href:"#".concat(t.id),"data-cy":"TabLink",children:t.title})})}))})}),Object(s.jsx)("div",{className:"block","data-cy":"TabContent",children:function(t){var n;return null===(n=e.find((function(e){return e.id===t})))||void 0===n?void 0:n.content}(c)})]})},r=(n(10),n(11),n(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),b=function(){var t=Object(d.useState)(r[0].id),e=Object(a.a)(t,2),n=e[0],c=e[1];return Object(s.jsxs)("div",{className:"section",children:[Object(s.jsxs)("h1",{className:"title",children:["Selected tab is"," ".concat(function(t){var e;return null===(e=r.find((function(e){return e.id===t})))||void 0===e?void 0:e.title}(n))]}),Object(s.jsx)(o,{tabs:r,selectedTabId:n,onTabSelected:function(t){var e=t.id;e!==n&&(r.filter((function(t){return t.id===n})).length?c(e):c(r[0].id))}})]})};i.a.render(Object(s.jsx)(b,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.6bbcc031.chunk.js.map