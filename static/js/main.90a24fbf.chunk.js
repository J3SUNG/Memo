(this.webpackJsonpmemo=this.webpackJsonpmemo||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),o=c(4),s=c.n(o),r=c(2),i=function(){var e="currentUser",t=Object(a.useState)(""),c=Object(r.a)(t,2),o=c[0],s=c[1],i=Object(a.useState)(""),l=Object(r.a)(i,2),u=l[0],j=l[1],d=Object(a.useRef)(null),f="display_none",b="display_none",m=function(e){f="display_none",b="display_block",o!==e&&s(e)};return function(){var t=localStorage.getItem(e);null===t?f="display_block":m(t)}(),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("form",{className:f+" greetingForm",onSubmit:function(t){t.preventDefault();var c,n=u;m(n),c=n,localStorage.setItem(e,c),d.current.focus()},children:Object(n.jsx)("input",{className:"greetingInput",ref:d,placeholder:"Type your name here",onChange:function(e){j(e.target.value)},value:u})}),Object(n.jsxs)("div",{className:b+" greetingText",children:["Hello ",o]})]})},l=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),c=t[0],o=t[1],s=Object(a.useState)(),i=Object(r.a)(s,2),l=i[0],u=i[1],j=Object(a.useState)(),d=Object(r.a)(j,2),f=d[0],b=d[1],m=function(){var e=new Date,t=e.getHours(),c=e.getMinutes(),n=e.getSeconds();o(t),u(c),b(n),t<10&&o("0".concat(t)),c<10&&u("0".concat(c)),n<10&&b("0".concat(n))};return Object(a.useEffect)((function(){m()}),[]),Object(a.useEffect)((function(){setTimeout(m,1e3)}),[f]),Object(n.jsxs)("h1",{className:"clock",children:[c,":",l,":",f]})},u=c.p+"static/media/1.dcd9e70b.jpg",j=c.p+"static/media/2.294149b7.jpg",d=c.p+"static/media/3.13dfcceb.jpg",f=c.p+"static/media/4.bc6446b9.jpg",b=c.p+"static/media/5.ade94f59.jpg",m=(c(10),{1:u,2:j,3:d,4:f,5:b}),O=function(){var e,t=Math.floor(5*Math.random())+1;return e=m[t],document.body.style.background="url(".concat(e,") no-repeat center center fixed"),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Jua",rel:"stylesheet"})})},g=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],o=t[1],s=Object(a.useState)(1),i=Object(r.a)(s,2),l=i[0],u=i[1],j=Object(a.useRef)(null),d=Object(a.useRef)(null),f="toDos",b=[],m=function(e){var t=e.target.parentNode,c=b.filter((function(e){return e.id!==parseInt(t.id)}));b=c,u(-1*l),o(""),O()},O=function(){localStorage.setItem(f,JSON.stringify(b))},g=function(e){var t={text:e,id:b.length+1};b.push(t),O()},p=function(e){g(e.text)};!function(){var e=localStorage.getItem(f);null!==e&&JSON.parse(e).forEach(p)}();var h=b.map((function(e,t){return Object(n.jsxs)("li",{id:e.id,className:"toDoLi",children:[Object(n.jsx)("div",{className:"toDoText",children:e.text}),Object(n.jsx)("button",{onClick:m,className:"delBtn",children:"X"})]},t)}));return Object(n.jsxs)("div",{className:"toDo",children:[Object(n.jsx)("form",{className:"toDoForm",onSubmit:function(e){e.preventDefault(),g(c),u(-1*l),o(""),j.current.focus()},children:Object(n.jsx)("input",{className:"toDoInput",ref:j,onChange:function(e){o(e.target.value)},value:c,placeholder:"write a memo"})}),Object(n.jsx)("div",{className:"toDoList",children:Object(n.jsx)("ul",{ref:d,className:"toDoUl",children:h})})]})},p=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),c=t[0],o=t[1],s="coords",i=function(e,t){fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat("114434551f59912465565c1f88d4157c")).then((function(e){return e.json()})).then((function(e){var t=e.main.temp,c=e.name;o("".concat(t," @ ").concat(c))}))},l=function(e){var t=e.coords.latitude,c=e.coords.longitude;!function(e){localStorage.setItem(s,JSON.stringify(e))}({latitude:t,longitude:c}),i(t,c)},u=function(){console.log("Can't access geo location.")};return function(){var e=localStorage.getItem(s);if(null===e)navigator.geolocation.getCurrentPosition(l,u);else{var t=JSON.parse(e);i(t.latitude,t.longitude)}}(),Object(n.jsx)("div",{className:"footer",children:c})};c(11);var h=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),Object(n.jsx)(l,{}),Object(n.jsx)(i,{}),Object(n.jsx)(g,{}),Object(n.jsx)(p,{})]})};s.a.render(Object(n.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.90a24fbf.chunk.js.map