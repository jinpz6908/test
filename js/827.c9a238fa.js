"use strict";(self["webpackChunkproject_one"]=self["webpackChunkproject_one"]||[]).push([[827],{40827:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login"},[t("el-card",{staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("i",{staticClass:"el-icon-s-platform"}),t("span",[e._v("通用后台管理系统")])]),t("el-form",{ref:"form",attrs:{"label-width":"80px",model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.login("form")}}},[e._v("登录")])],1)],1)],1)],1)},o=[];r(57658);function s(e,t,r){let n=/(^[a-zA-Z0-9]{4,10}$)/;""===t?r(new Error("请输入用户名！")):n.test(t)?r():r(new Error("用户名格式错误！"))}function a(e,t,r){let n=/(^[a-zA-Z0-9]{6,10}$)/;""===t?r(new Error("请输入密码！")):n.test(t)?r():r(new Error("密码格式错误！"))}var u=r(59672),l=r(38898),i={name:"UserLogin",data(){return{form:{username:"",password:""},rules:{username:[{validator:s,trigger:"blur"}],password:[{validator:a,trigger:"blur"}]}}},methods:{login(e){this.$refs[e].validate((e=>{e&&(0,l.x4)(this.form).then((e=>{200===e.data.status?((0,u.o4)("token",e.data.token),(0,u.o4)("username",e.data.username),this.$message({message:e.data.message,type:"success"}),this.$router.push("/home")):this.$message(e.data.message)})).catch((e=>{console.error(e)}))}))}}},f=i,m=r(1001),c=(0,m.Z)(f,n,o,!1,null,null,null),d=c.exports},38898:function(e,t,r){r.d(t,{C5:function(){return i},Hm:function(){return m},eM:function(){return f},nJ:function(){return u},qH:function(){return a},um:function(){return l},x4:function(){return s}});var n=r(37182),o=r(95410);function s(e){return(0,n.Z)({method:"post",url:"/login",data:e})}function a(e){return(0,n.Z)({method:"get",url:"/students",params:e})}function u(e){return(0,n.Z)({method:"delete",url:`/students/${e}`})}function l(e,t){t=(0,o.stringify)(t);let r={method:e,url:"/info",data:t};return(0,n.Z)(r)}function i(){return(0,n.Z)({method:"get",url:"/info"})}function f(e){return(0,n.Z)({method:"delete",url:`/info/${e}`})}function m(){return(0,n.Z)({method:"get",url:"/travel"})}}}]);
//# sourceMappingURL=827.c9a238fa.js.map