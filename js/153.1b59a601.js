"use strict";(self["webpackChunkproject_one"]=self["webpackChunkproject_one"]||[]).push([[153],{46153:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var n=function(){var e=this,t=e._self._c;return t("div",[t("el-tree",{ref:"tree",attrs:{data:e.menus,"show-checkbox":"","node-key":"name","default-expanded-keys":["学生管理"],"default-checked-keys":["学生列表"],props:e.defaultProps}}),t("el-button",{on:{click:e.getCheckedNodes}},[e._v("通过 node 获取")]),t("el-button",{on:{click:e.getCheckedKeys}},[e._v("通过 key 获取")])],1)},o=[],d={data(){return{menus:[],defaultProps:{children:"children",label:"name"}}},created(){this.menus=[...this.$router.options.routes],this.menus=this.menus.filter((e=>!e.hidden))},methods:{getCheckedNodes(){console.log(this.$refs.tree.getCheckedNodes())},getCheckedKeys(){console.log(this.$refs.tree.getCheckedKeys())}}},r=d,c=s(1001),l=(0,c.Z)(r,n,o,!1,null,"34ed794d",null),u=l.exports}}]);
//# sourceMappingURL=153.1b59a601.js.map