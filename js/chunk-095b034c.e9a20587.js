(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-095b034c"],{2588:function(e,t,a){},7885:function(e,t,a){"use strict";a.d(t,"g",(function(){return l})),a.d(t,"d",(function(){return r})),a.d(t,"e",(function(){return o})),a.d(t,"h",(function(){return i})),a.d(t,"i",(function(){return s})),a.d(t,"f",(function(){return u})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return p}));var n=a("b775"),l=function(e){return Object(n["a"])({url:"dao/list",method:"get",params:e})},r=function(e){return Object(n["a"])({url:"dao/apply",method:"post",params:e})},o=function(e){return Object(n["a"])({url:"dao/refuse",method:"post",params:e})},i=function(e){return Object(n["a"])({url:"dao/proposal/list",method:"get",params:e})},s=function(e){return Object(n["a"])({url:"dao/referendum/list",method:"get",params:e})},u=function(e){return Object(n["a"])({url:"dao/proposal/process",method:"post",params:e})},c=function(e){return Object(n["a"])({url:"dao/referendum/process",method:"post",params:e})},d=function(e){return Object(n["a"])({url:"dao/proposal/lang",method:"post",params:e})},p=function(e){return Object(n["a"])({url:"/dao/proposal/delete",method:"post",params:e})}},a141:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",[a("div",{staticClass:"main"},[a("div",{staticClass:"item",staticStyle:{"margin-right":"10px",width:"120px"}},[a("span",[e._v("网络：")]),a("el-select",{attrs:{placeholder:"网络"},model:{value:e.form.chain_id,callback:function(t){e.$set(e.form,"chain_id",t)},expression:"form.chain_id"}},[a("el-option",{attrs:{label:"全部网络",value:""}}),a("el-option",{attrs:{label:"Bsc",value:"56"}}),a("el-option",{attrs:{label:"Heco",value:"128"}})],1)],1),a("div",{staticClass:"item"},[a("span",[e._v("提交日期：")]),a("el-date-picker",{staticStyle:{"margin-right":"10px"},attrs:{type:"daterange",align:"left","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"timestamp"},model:{value:e.form.query_date,callback:function(t){e.$set(e.form,"query_date",t)},expression:"form.query_date"}})],1),a("div",{staticStyle:{"margin-right":"10px"}},[a("span",[e._v("发起人地址：")]),a("el-input",{attrs:{placeholder:"请输入地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("div",{staticClass:"item",staticStyle:{"margin-right":"10px",width:"120px"}},[a("span",[e._v("提案类型：")]),a("el-select",{model:{value:e.form.proposal_type,callback:function(t){e.$set(e.form,"proposal_type",t)},expression:"form.proposal_type"}},[a("el-option",{attrs:{label:"全部",value:"0"}}),a("el-option",{attrs:{label:"社区提案",value:"1"}}),a("el-option",{attrs:{label:"董事提案",value:"2"}})],1)],1),a("div",{staticClass:"item",staticStyle:{"margin-right":"10px",width:"120px"}},[a("span",[e._v("提案状态：")]),a("el-select",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[a("el-option",{attrs:{label:"全部",value:"0"}}),a("el-option",{attrs:{label:"即将开始",value:"1"}}),a("el-option",{attrs:{label:"进行中",value:"2"}}),a("el-option",{attrs:{label:"已结束",value:"3"}}),a("el-option",{attrs:{label:"已执行",value:"4"}}),a("el-option",{attrs:{label:"未执行",value:"5"}})],1)],1),a("div",{staticStyle:{width:"250px",margin:"20px 10px 0 0"}},[a("el-input",{attrs:{placeholder:"输入提案名称"},model:{value:e.form.keywords,callback:function(t){e.$set(e.form,"keywords",t)},expression:"form.keywords"}})],1),a("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isloading,expression:"isloading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",fit:!0,"header-cell-style":e.getRowClass}},[e._l(e.suggestHead,(function(t,n){return a("el-table-column",{key:n,attrs:{align:"center",prop:t.value,label:t.label,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[["start_time","end_time"].includes(t.column.property)?a("span",[e._v(e._s(e.formatDate(t.row[t.column.property])))]):"proposal_type"==t.column.property?a("span",[e._v(e._s("1"==t.row[t.column.property]?"社区提案":"董事提案"))]):"status"==t.column.property?a("span",[e._v(e._s(e.Referendum(t.row[t.column.property])))]):"proposal_tag"==t.column.property?a("span",[e._v(e._s(e.status(t.row[t.column.property])))]):a("span",[e._v(e._s(t.row[t.column.property]))])]}}],null,!0)})})),a("el-table-column",{attrs:{label:"支持的董事",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(a){return e.handleLook(t.row.directors)}}},[e._v("查看")]),a("br")]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(a){return e.handleInfo(t.row.content)}}},[e._v("提案内容")]),a("br"),3==t.row.status?a("el-button",{staticStyle:{"margin-top":"5px"},attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.row.id)}}},[e._v("变更执行状态")]):e._e()]}}])})],2),a("el-dialog",{attrs:{title:"提案内容",visible:e.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("span",[e._v(e._s(e.content))])]),a("el-dialog",{attrs:{title:"执行状态变更",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[e._l(e.buttonName,(function(t,n){return a("el-button",{key:n,attrs:{type:n==e.btnIndex?"danger":"info"},on:{click:function(t){return e.btnCick(n)}}},[e._v(" "+e._s(t.name)+" ")])})),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.statusChange}},[e._v("确 定")])],1)],2),a("el-dialog",{attrs:{title:"支持的董事",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-table",{attrs:{data:e.boradData}},e._l(e.borderHead,(function(t,n){return a("el-table-column",{key:n,attrs:{prop:t.value,label:t.label,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["support_status"==t.column.property?a("span",[e._v(e._s(1==t.row[t.column.property]?"支持":"反对"))]):a("span",[e._v(e._s(t.row[t.column.property]))])]}}],null,!0)})})),1)],1),a("el-pagination",{attrs:{align:"center","page-size":15,layout:"total, prev, pager, next",total:e.totalPage},on:{"current-change":e.handleCurrentChange}})],1)},l=[],r=a("5530"),o=a("1da1"),i=(a("96cf"),a("7885")),s=a("f3ce"),u=a("61f7"),c=a("5a0c"),d=a("0ecf"),p={name:"referendum",data:function(){return{boradData:[],borderHead:s["a"],referendum_id:"",dialogTableVisible:!1,btnIndex:-1,centerDialogVisible:!1,dialogVisible:!1,content:"",tableData:[],totalPage:0,form:{chain_id:"",query_date:"",keywords:"",status:"",address:"",proposal_type:""},formatDate:u["d"],isloading:!1,suggestHead:s["b"],buttonName:[{name:"无需执行",id:4},{name:"待执行",id:1},{name:"执行中",id:2},{name:"已执行",id:3},{name:"不通过",id:5}]}},created:function(){this.referendum()},computed:{status:function(){return function(e){return 1==e?"待执行":2==e?"执行中":3==e?"已执行":4==e?"无需执行":5==e?"不通过":"-"}},Referendum:function(){return function(e){return 1==e?"即将开始":2==e?"进行中":"已结束"}}},methods:{referendum:function(){var e=arguments,t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,l,o,s,u,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=e.length>0&&void 0!==e[0]?e[0]:1,c.extend(d),s=c(null===(n=t.form["query_date"])||void 0===n?void 0:n[0]).utc().format("YYYY-MM-DD HH:mm:ss"),u=c((null===(l=t.form["query_date"])||void 0===l?void 0:l[1])+86399999).utc().format("YYYY-MM-DD HH:mm:ss"),t.isloading=!0,a.next=7,Object(i["i"])(Object(r["a"])(Object(r["a"])({},t.form),{},{start_time:s,end_time:u,page:o}));case 7:p=a.sent,t.tableData=p.data.result.data,t.isloading=!1,t.totalPage=p.data.result.total;case 12:case"end":return a.stop()}}),a)})))()},getRowClass:function(e){var t=e.rowIndex;return 0==t?"background:RGB(238,239,246)":""},handleCurrentChange:function(e){this.referendum(e)},search:function(){this.referendum()},handleInfo:function(e){this.centerDialogVisible=!0,this.content=e},handleDelete:function(e){this.btnIndex=-1,this.dialogVisible=!0,this.referendum_id=e},btnCick:function(e){e!==this.btnIndex?this.btnIndex=e:this.btnIndex=-1},statusChange:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.dialogVisible=!1,-1===e.btnIndex){t.next=5;break}return t.next=4,Object(i["c"])({referendum_id:e.referendum_id,proposal_tag:e.buttonName[e.btnIndex].id});case 4:e.referendum();case 5:case"end":return t.stop()}}),t)})))()},handleLook:function(e){this.dialogTableVisible=!0,this.boradData=e}}},b=p,f=(a("b600"),a("2877")),m=Object(f["a"])(b,n,l,!1,null,"d3fa787a",null);t["default"]=m.exports},b600:function(e,t,a){"use strict";a("2588")},f3ce:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}));var n=[{label:"提案名称",value:"dao_name"},{label:"发起提案地址",value:"address"},{label:"申请时间",value:"created_at"},{label:"质押凭证数",value:"deposit_amount"},{label:"发起提案的区块高度",value:"block_number"},{label:"实时票数",value:"dao_votes"},{label:"30日均票数",value:"avg_votes"},{label:"是否为正式节点",value:"is_official"},{label:"董事状态",value:"status"}],l=[{label:"提案名称",value:"title"},{label:"发起人地址",value:"address"},{label:"heco快照高度",value:"heco_snap_block"},{label:"bsc快照高度",value:"bsc_snap_block"},{label:"提案状态",value:"status"},{label:"提案类型",value:"proposal_type"}],r=[{label:"提案名称",value:"title"},{label:"发起人地址",value:"address"},{label:"heco快照高度",value:"heco_snap_block"},{label:"bsc快照高度",value:"bsc_snap_block"},{label:"提案状态",value:"status"},{label:"执行状态",value:"proposal_tag"},{label:"提案类型",value:"proposal_type"},{label:"投票开始时间",value:"start_time"},{label:"投票结束时间",value:"end_time"}],o=[{label:"日期",value:"updated_at"},{label:"关联社区提案ID",value:"proposal_id"},{label:"董事地址",value:"dao_address"},{label:"董事名称",value:"dao_name"},{label:"支持状态",value:"support_status"}]}}]);