(this["webpackJsonpintroduccion-react"]=this["webpackJsonpintroduccion-react"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(3),r=n.n(a),l=(n(12),n(6)),s=n(2);var u=function(e,t){var n=c.a.useState(!1),o=Object(s.a)(n,2),a=o[0],r=o[1],l=c.a.useState(!0),u=Object(s.a)(l,2),i=u[0],d=u[1],j=c.a.useState(t),m=Object(s.a)(j,2),b=m[0],O=m[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),O(n),d(!1)}catch(a){r(a)}}),3e3)})),{item:b,saveItem:function(t){try{localStorage.setItem(e,JSON.stringify(t)),O(t)}catch(a){r(a)}},loading:i,error:a}},i=n(0),d=c.a.createContext();function j(e){var t=u("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,j=c.a.useState(""),m=Object(s.a)(j,2),b=m[0],O=m[1],f=c.a.useState(!1),h=Object(s.a)(f,2),x=h[0],p=h[1],v=n.filter((function(e){return!!e.completed})).length,T=n.length,g=[];g=!b.length>=1?n:n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)}));return Object(i.jsx)(d.Provider,{value:{error:r,loading:a,totalTodos:T,completedTodos:v,searchValue:b,setSearchValue:O,searchedTodos:g,addTodo:function(e){var t=Object(l.a)(n);t.push({completed:!1,text:e}),o(t)},completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(l.a)(n);c[t].completed=!c[t].completed,o(c)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(l.a)(n);c.splice(t,1),o(c)},openModal:x,setOpenModal:p},children:e.children})}n(14);var m=function(){var e=c.a.useContext(d),t=e.totalTodos,n=e.completedTodos;return Object(i.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," TODOs"]})},b=(n(15),function(){var e=c.a.useContext(d),t=e.searchValue,n=e.setSearchValue;return Object(i.jsx)("input",{className:"TodoSearch",placeholder:"Search your To Do",value:t,onChange:function(e){n(e.target.value)}})}),O=(n(16),function(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})}),f=(n(17),function(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u221a"}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(i.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:"X"})]})}),h=(n(18),function(e){return Object(i.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})});n(19);function x(e){var t=e.children;return r.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(20);function p(){var e=c.a.useState(""),t=Object(s.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(d),r=a.addTodo,l=a.setOpenModal;return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n),l((function(e){return!e}))},children:[Object(i.jsx)("label",{children:"Escribe tu nuevo To Do"}),Object(i.jsx)("textarea",{value:n,onChange:function(e){o(e.target.value)},placeholder:"Escribe una nueva tarea"}),Object(i.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(i.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button-cancel",onClick:function(){l((function(e){return!e}))},children:"Cancelar"}),Object(i.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})}var v=function(){var e=c.a.useContext(d),t=e.error,n=e.loading,o=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,l=e.openModal,s=e.setOpenModal;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m,{}),Object(i.jsx)(b,{}),Object(i.jsxs)(O,{children:[t&&Object(i.jsx)("p",{children:"ERROR"}),n&&Object(i.jsx)("p",{children:"Loading..."}),!n&&!o.length&&Object(i.jsx)("p",{children:"Crea tu primer TODO"}),o.map((function(e){return Object(i.jsx)(f,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),!!l&&Object(i.jsx)(x,{children:Object(i.jsx)(p,{})}),Object(i.jsx)(h,{setOpenModal:s})]})};var T=function(){return Object(i.jsx)(j,{children:Object(i.jsx)(v,{})})};r.a.render(Object(i.jsx)(T,{}),document.getElementById("root")),document.getElementById("modal")}],[[21,1,2]]]);
//# sourceMappingURL=main.c33d787d.chunk.js.map