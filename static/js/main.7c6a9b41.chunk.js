(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),a=n.n(s),o=(n(12),n(4)),i=n(5),h=n(7),l=n(6),b=n(0),d=function(e){var t=e.id,n=e.name,r=e.email;return Object(b.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(t,"?200\xd7200"),alt:"Robot.png"})," ",Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{children:r})]})]})},j=function(e){var t=e.robots,n=t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}));return Object(b.jsx)("div",{children:n})},u=function(e){e.searchField;var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa2 mb3 ba b--green bw2 bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},f=function(e){return Object(b.jsxs)("div",{style:{overflowY:"scroll",border:"2px solid black",height:"800px"},children:[" ",e.children," "]})},m=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"mb3 f1",children:"Robofriends"}),Object(b.jsx)(u,{searchChange:this.onSearchChange}),Object(b.jsxs)(f,{children:[" ",Object(b.jsx)(j,{robots:r})," "]})]}):Object(b.jsx)("h1",{className:"tc f1",children:"LOADING..."})}}]),n}(r.Component));n(15);a.a.render(Object(b.jsxs)(c.a.StrictMode,{children:[" ",Object(b.jsx)(m,{})]}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7c6a9b41.chunk.js.map