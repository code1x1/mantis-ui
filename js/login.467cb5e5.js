(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{3579:function(e,t,r){e.exports={"mantis-logo":"LoginPage_mantis-logo_1Wyf5","login-card":"LoginPage_login-card_3c4s7"}},"62cc":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout vertical center-center full-height flex"},[a("el-card",{class:e.$style["login-card"]},[a("div",{staticClass:"clearfix layout horizontal center-center",attrs:{slot:"header"},slot:"header"},[a("img",{class:e.$style["mantis-logo"],attrs:{src:r("c8d7"),alt:"Mantis Logo"}})]),a("div",[a("el-form",{ref:"loginForm",attrs:{"status-icon":"",model:e.form,rules:e.rules,"label-position":"left"}},[a("el-form-item",{attrs:{label:"Name",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"Email",prop:"email"}},[a("el-input",{attrs:{type:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("el-form-item",{attrs:{label:"Master Name",prop:"masterName"}},[a("el-input",{model:{value:e.form.masterName,callback:function(t){e.$set(e.form,"masterName",t)},expression:"form.masterName"}})],1),a("el-form-item",{attrs:{label:"Mantis Master API URL",prop:"masterUrl"}},[a("el-input",{model:{value:e.form.masterUrl,callback:function(t){e.$set(e.form,"masterUrl",t)},expression:"form.masterUrl"}})],1),a("el-form-item",{attrs:{label:"Mesos URL",prop:"mesosUrl"}},[a("el-input",{model:{value:e.form.mesosUrl,callback:function(t){e.$set(e.form,"mesosUrl",t)},expression:"form.mesosUrl"}})],1),a("el-form-item",[a("el-button",{on:{click:function(t){return e.resetForm("loginForm")}}},[e._v("\n            Reset\n          ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("loginForm")}}},[e._v("\n            Create\n          ")])],1)],1)],1)])],1)},n=[],s=r("eedf"),o=r.n(s),l=r("f3ad"),i=r.n(l),m=r("3787"),u=r.n(m),c=r("4105"),f=r.n(c),d=r("a4c4"),p=r.n(d),g=r("4360"),h=r("63e0"),_={name:"LoginPage",components:{[p.a.name]:p.a,[f.a.name]:f.a,[u.a.name]:u.a,[i.a.name]:i.a,[o.a.name]:o.a},data(){return{form:{name:"",email:"",masterName:"",masterUrl:"",mesosUrl:""},rules:{name:[{required:!0,message:"Please input your name",trigger:"blur"}],email:[{required:!0,message:"Please input your email",trigger:"blur"},{type:"email",message:"Please input a valid email address",trigger:"blur"}],masterName:[{required:!0,message:"Please input your master name",trigger:"blur"}],masterUrl:[{required:!0,message:"Please input your master api url",trigger:"blur"}]}}},created(){},methods:{submitForm(e){this.$refs[e].validate(e=>{if(!e)return!1;{const e=[{name:this.form.masterName,url:this.prependHttpToUrl(this.form.masterUrl)}];g["a"].dispatch(h["a"].LoginUser,{name:this.form.name,email:this.form.email}),g["a"].dispatch(h["a"].SetMantisMasters,e),g["a"].dispatch(h["a"].SetMesosUrl,this.prependHttpToUrl(this.form.mesosUrl)),this.$router.push("/clusters")}})},resetForm(e){this.$refs[e].resetFields()},prependHttpToUrl(e){const t="http://",r=/^((http|https):\/\/)/;return r.test(e)?e:t+e}}},b=_,v=r("e52a"),y=r("2877");function U(e){this["$style"]=v["default"].locals||v["default"]}var x=Object(y["a"])(b,a,n,!1,U,null,null);t["default"]=x.exports},a4c4:function(e,t,r){e.exports=function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=103)}({0:function(e,t,r){"use strict";function a(e,t,r,a,n,s,o,l){var i,m="function"===typeof e?e.options:e;if(t&&(m.render=t,m.staticRenderFns=r,m._compiled=!0),a&&(m.functional=!0),s&&(m._scopeId="data-v-"+s),o?(i=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},m._ssrRegister=i):n&&(i=l?function(){n.call(this,this.$root.$options.shadowRoot)}:n),i)if(m.functional){m._injectStyles=i;var u=m.render;m.render=function(e,t){return i.call(t),u(e,t)}}else{var c=m.beforeCreate;m.beforeCreate=c?[].concat(c,i):[i]}return{exports:e,options:m}}r.d(t,"a",(function(){return a}))},103:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"el-card",class:e.shadow?"is-"+e.shadow+"-shadow":"is-always-shadow"},[e.$slots.header||e.header?r("div",{staticClass:"el-card__header"},[e._t("header",[e._v(e._s(e.header))])],2):e._e(),r("div",{staticClass:"el-card__body",style:e.bodyStyle},[e._t("default")],2)])},n=[];a._withStripped=!0;var s={name:"ElCard",props:{header:{},bodyStyle:{},shadow:{type:String}}},o=s,l=r(0),i=Object(l["a"])(o,a,n,!1,null,null,null);i.options.__file="packages/card/src/main.vue";var m=i.exports;m.install=function(e){e.component(m.name,m)};t["default"]=m}})},c8d7:function(e,t,r){e.exports=r.p+"img/mantis-logo-full-transparent.1cbd8937.png"},e52a:function(e,t,r){"use strict";var a=r("3579"),n=r.n(a);t["default"]=n.a}}]);
//# sourceMappingURL=login.467cb5e5.js.map