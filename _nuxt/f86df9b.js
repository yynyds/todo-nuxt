(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{307:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("783e5a5c",content,!0,{sourceMap:!1})},310:function(t,e,n){"use strict";n(307)},311:function(t,e,n){var r=n(69)(!1);r.push([t.i,"form[data-v-a78731b6]{width:500px;margin:0 auto}",""]),t.exports=r},316:function(t,e,n){"use strict";n.r(e);var r={layout:"empty",data:function(){return{username:""}},methods:{onSubmit:function(){this.username&&this.$store.dispatch("login",this.username)}}},o=(n(310),n(48)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.$route.query.msg?n("div",{staticClass:"alert alert-danger mb-3"},[t._v("\n    Authorization required\n  ")]):t._e(),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("h1",[t._v("Login page")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"form-group"},[n("b-form-input",{attrs:{placeholder:"Enter your name"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),n("p",[n("nuxt-link",{attrs:{to:"/"}},[t._v("To home page")])],1),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:!t.username}},[t._v("Login")])])])}),[],!1,null,"a78731b6",null);e.default=component.exports}}]);