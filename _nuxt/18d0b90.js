(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{308:function(e,t,n){var content=n(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(70).default)("45aee154",content,!0,{sourceMap:!1})},309:function(e,t,n){"use strict";n.r(t);n(1),n(16),n(21);var r={name:"createForm",data:function(){return{user:{name:null,username:null,email:null,website:null,company:{name:null}},newTodo:null}},computed:{users:function(){return this.$store.getters["users/users"]},names:function(){return this.users.map((function(e){return{value:e.name,text:e.name}})).reduce((function(e,t){return e.some((function(e){return e.value===t.value}))||e.push(t),e}),[])},userNames:function(){return this.users.map((function(e){return{value:e.username,text:e.username}})).reduce((function(e,t){return e.some((function(e){return e.value===t.value}))||e.push(t),e}),[])},userEmails:function(){return this.users.map((function(e){return{value:e.email,text:e.email}})).reduce((function(e,t){return e.some((function(e){return e.value===t.value}))||e.push(t),e}),[])},userWebsites:function(){return this.users.map((function(e){return{value:e.website,text:e.website}})).reduce((function(e,t){return e.some((function(e){return e.value===t.value}))||e.push(t),e}),[])},userCompanies:function(){return this.users.map((function(e){return{value:e.company.name,text:e.company.name}})).reduce((function(e,t){return e.some((function(e){return e.value===t.value}))||e.push(t),e}),[])},simpleValidation:function(){return this.user.name&&this.user.username&&this.user.email&&this.user.website&&this.user.company.name&&this.newTodo}},methods:{createNewTodo:function(){this.simpleValidation&&(this.$emit("input",{todo:this.newTodo,user:this.user}),this.resetForm())},resetForm:function(){this.user={name:null,username:null,email:null,website:null,company:{name:null}},this.newTodo=null}}},o=n(48),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form",{on:{submit:function(t){return t.preventDefault(),e.createNewTodo.apply(null,arguments)},reset:e.resetForm}},[n("div",{staticClass:"mb-3"},[n("b-form-textarea",{attrs:{placeholder:"Enter todo",rows:"3"},model:{value:e.newTodo,callback:function(t){e.newTodo=t},expression:"newTodo"}})],1),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-auto mb-3"},[n("b-form-group",{attrs:{"label-size":"md",label:"Name","label-for":"user-name"}},[n("b-form-select",{attrs:{id:"user-name",options:e.names},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1)],1),e._v(" "),n("div",{staticClass:"col-auto mb-3"},[n("b-form-group",{attrs:{"label-size":"md",label:"Username","label-for":"user-username"}},[n("b-form-select",{attrs:{id:"user-username",options:e.userNames},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1)],1),e._v(" "),n("div",{staticClass:"col-auto mb-3"},[n("b-form-group",{attrs:{"label-size":"md",label:"Email","label-for":"user-email"}},[n("b-form-select",{attrs:{id:"user-email",options:e.userEmails},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1),e._v(" "),n("div",{staticClass:"col-auto mb-3"},[n("b-form-group",{attrs:{"label-size":"md",label:"Website","label-for":"user-website"}},[n("b-form-select",{attrs:{id:"user-website",options:e.userWebsites},model:{value:e.user.website,callback:function(t){e.$set(e.user,"website",t)},expression:"user.website"}})],1)],1),e._v(" "),n("div",{staticClass:"col-auto mb-3"},[n("b-form-group",{attrs:{"label-size":"md",label:"Company name","label-for":"user-company"}},[n("b-form-select",{attrs:{id:"user-company",options:e.userCompanies},model:{value:e.user.company.name,callback:function(t){e.$set(e.user.company,"name",t)},expression:"user.company.name"}})],1)],1)]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-auto mb-3"},[n("b-button",{attrs:{type:"submit",variant:"primary",disabled:!e.simpleValidation}},[e._v("Create")])],1)])])}),[],!1,null,"fd825346",null);t.default=component.exports},312:function(e,t,n){"use strict";var r=n(12),o=n(82).findIndex,l=n(83),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l(c)},313:function(e,t,n){"use strict";n(308)},314:function(e,t,n){var r=n(69)(!1);r.push([e.i,"ol[data-v-3e545167]{max-height:400px;overflow-y:auto}.isCompleted[data-v-3e545167]{text-decoration:line-through}",""]),e.exports=r},317:function(e,t,n){"use strict";n.r(t);var r=n(23),o=(n(312),n(62),{middleware:["auth"],components:{createTodo:n(309).default},fetch:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(n=e.store).getters["todos/todos"].length){t.next=4;break}return t.next=4,n.dispatch("todos/loadTodos");case 4:if(0!==n.getters["users/users"].length){t.next=7;break}return t.next=7,n.dispatch("users/loadUsers");case 7:case"end":return t.stop()}}),t)})))()},data:function(){return{newTodo:""}},computed:{todos:function(){return this.$store.getters["todos/todos"]},users:function(){return this.$store.getters["users/users"]},customID:function(){return this.$store.getters["customCountID/id"]}},methods:{moreInfoAboutTodo:function(e){this.$router.push("/todos/".concat(e.userId))},updateTask:function(e){var t=this.todos.findIndex((function(t){return+t.id==+e}));(t||0===t)&&this.$store.dispatch("todos/updateTask",t)},createNewTodo:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l,c,d,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.todo,o=e.user,l=JSON.stringify(o),n.prev=2,n.next=5,t.$axios.$post("https://jsonplaceholder.typicode.com/users",l,{headers:{"Content-type":"application/json; charset=UTF-8"}});case 5:return c=n.sent,console.log(c),n.next=9,t.$store.dispatch("customCountID/addCountID");case 9:return c.id=10+t.customID,n.next=12,t.$store.dispatch("users/setNewUser",c);case 12:return d=JSON.stringify({userId:c.id,title:r,completed:!1}),n.next=15,t.$axios.$post("https://jsonplaceholder.typicode.com/todos",d,{headers:{"Content-type":"application/json; charset=UTF-8"}});case 15:return(m=n.sent).id=200+t.customID,n.next=19,t.$store.dispatch("todos/setNewTodo",m);case 19:console.log("newTodo",m),t.freezeObject(),n.next=26;break;case 23:n.prev=23,n.t0=n.catch(2),console.log(n.t0);case 26:case"end":return n.stop()}}),n,null,[[2,23]])})))()}},watch:{newTodo:function(e){e&&(console.log(e),this.createNewTodo(e))}}}),l=(n(313),n(48)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h1",[e._v("Todos page")]),e._v(" "),n("hr"),e._v(" "),n("ol",e._l(e.todos,(function(t){return n("li",{key:t.id},[n("div",{staticClass:"form-check"},[n("input",{staticClass:"form-check-input",attrs:{id:t.id,type:"checkbox",value:""},domProps:{checked:t.completed},on:{change:function(n){return e.updateTask(t.id)}}}),e._v(" "),n("label",{staticClass:"form-check-label",attrs:{for:t.id}},[n("a",{class:{isCompleted:t.completed},attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),e.moreInfoAboutTodo(t)}}},[e._v(e._s(t.title))])])])])})),0),e._v(" "),n("hr"),e._v(" "),n("h3",[e._v("Create new todo")]),e._v(" "),n("create-todo",{model:{value:e.newTodo,callback:function(t){e.newTodo=t},expression:"newTodo"}})],1)}),[],!1,null,"3e545167",null);t.default=component.exports}}]);