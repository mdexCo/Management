(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1810bd49"],{"162e":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("el-container",{staticClass:"layout"},[n("el-header",{staticClass:"header"},[n("div",{staticClass:"left"},[n("img",{staticClass:"img",attrs:{src:e("cf05"),alt:""},on:{click:function(a){t.isCollapse=!t.isCollapse}}}),n("span",{staticClass:"title"},[t._v("MDEX 后台管理系统")])]),n("div",{staticClass:"right"},[n("img",{attrs:{src:e("cf05"),alt:""}}),n("span",{staticClass:"name"},[t._v(t._s(t.username)+" 欢迎您")]),n("el-button",{attrs:{type:"primary"},on:{click:t.logout}},[t._v("退出")])],1)]),n("el-container",[n("el-aside",{attrs:{width:"auto"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:"","default-active":t.defaultActive,collapse:t.isCollapse,"background-color":"#344155","text-color":"rgb(191, 203, 217)","active-text-color":"#579df8"}},[n("el-menu-item",{attrs:{index:"/layout/data"}},[n("i",{staticClass:"iconfont icon-lanlvtubiaozhizuomoban-30"}),n("span",{staticStyle:{"margin-left":"10px"},attrs:{slot:"title"},slot:"title"},[t._v("数据看板")])]),n("el-menu-item",{attrs:{index:"/layout/record"}},[n("i",{staticClass:"iconfont icon-tupian"}),n("span",{staticStyle:{"margin-left":"10px"},attrs:{slot:"title"},slot:"title"},[t._v("banner管理")])]),n("el-menu-item",{attrs:{index:"/layout/money"}},[n("i",{staticClass:"iconfont icon-jinqian1"}),n("span",{staticStyle:{"margin-left":"10px"},attrs:{slot:"title"},slot:"title"},[t._v("佣金管理")])]),n("el-submenu",{attrs:{index:"/layout"}},[n("template",{slot:"title"},[n("i",{staticClass:"iconfont icon-renwu"}),n("span",{staticStyle:{"margin-left":"10px"}},[t._v("董事管理")])]),n("el-menu-item-group",[n("el-menu-item",{staticStyle:{"padding-left":"55px"},attrs:{index:"/layout/director"}},[t._v("节点管理")]),n("el-menu-item",{staticStyle:{"padding-left":"55px"},attrs:{index:"/layout/suggestion"}},[t._v("社区提案")]),n("el-menu-item",{staticStyle:{"padding-left":"55px"},attrs:{index:"/layout/referendum"}},[t._v("公投提案")])],1)],2),n("el-submenu",{attrs:{index:"/layout/info"}},[n("template",{slot:"title"},[n("i",{staticClass:"iconfont icon-icon-safe-bluefuben"}),n("span",{staticStyle:{"margin-left":"10px"}},[t._v("币种管理")])]),n("el-menu-item-group",[n("el-menu-item",{staticStyle:{"padding-left":"55px"},attrs:{index:"/layout/info"}},[t._v("行情上下架")]),n("el-menu-item",{staticStyle:{"padding-left":"55px"},attrs:{index:"/layout/hotcoin"}},[t._v("热门币种")]),n("el-menu-item",{staticStyle:{"padding-left":"55px"},attrs:{index:"/layout/vote"}},[t._v("投票上流动性")]),n("el-menu-item",{staticStyle:{"padding-left":"55px"},attrs:{index:"/layout/pair"}},[t._v("info管理")])],1)],2),n("el-menu-item",{attrs:{index:"/layout/orderBook"}},[n("i",{staticClass:"iconfont icon-taizhangzhangbushezhi"}),n("span",{staticStyle:{"margin-left":"10px"},attrs:{slot:"title"},slot:"title"},[t._v("订单簿管理")])])],1)],1),n("el-main",{staticStyle:{"background-color":"#e8e9ec",padding:"10px"}},[n("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[n("router-view")],1)],1)],1)],1)},i=[],l=(e("b0c0"),e("cc33")),s={name:"layout",data:function(){return{avatar:"",username:"",isCollapse:!1,defaultActive:""}},created:function(){this.username=this.$route.query.name,this.defaultActive=this.$route.fullPath,this.$route.fullPath},methods:{logout:function(){var t=this;this.$confirm("确定退出吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["b"])(),t.$router.push("/gfgxdza")}))}}},o=s,A=(e("d1df"),e("2877")),c=Object(A["a"])(o,n,i,!1,null,null,null);a["default"]=c.exports},5012:function(t,a,e){},b0c0:function(t,a,e){var n=e("83ab"),i=e("9bf2").f,l=Function.prototype,s=l.toString,o=/^\s*function ([^ (]*)/,A="name";n&&!(A in l)&&i(l,A,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})},cf05:function(t,a){t.exports="data:image/png;base64,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"},d1df:function(t,a,e){"use strict";e("5012")}}]);