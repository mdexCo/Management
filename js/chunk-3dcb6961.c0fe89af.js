(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dcb6961"],{1148:function(e,t,a){"use strict";var l=a("a691"),n=a("1d80");e.exports=function(e){var t=String(n(this)),a="",r=l(e);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(a+=t);return a}},"408a":function(e,t,a){var l=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=l(e))throw TypeError("Incorrect invocation");return+e}},a434:function(e,t,a){"use strict";var l=a("23e7"),n=a("23cb"),r=a("a691"),i=a("50c4"),o=a("7b0b"),s=a("65f0"),u=a("8418"),c=a("1dde"),d=c("splice"),p=Math.max,m=Math.min,b=9007199254740991,f="Maximum allowed length exceeded";l({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var a,l,c,d,v,g,h=o(this),k=i(h.length),y=n(e,k),_=arguments.length;if(0===_?a=l=0:1===_?(a=0,l=k-y):(a=_-2,l=m(p(r(t),0),k-y)),k+a-l>b)throw TypeError(f);for(c=s(h,l),d=0;d<l;d++)v=y+d,v in h&&u(c,d,h[v]);if(c.length=l,a<l){for(d=y;d<k-l;d++)v=d+l,g=d+a,v in h?h[g]=h[v]:delete h[g];for(d=k;d>k-l+a;d--)delete h[d-1]}else if(a>l)for(d=k-l;d>y;d--)v=d+l-1,g=d+a-1,v in h?h[g]=h[v]:delete h[g];for(d=0;d<a;d++)h[d+y]=arguments[d+2];return h.length=k-l+a,c}})},ae36:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",[a("div",{staticClass:"main"},[a("div",{staticClass:"item",staticStyle:{"margin-right":"10px"}},[a("span",[e._v("状态：")]),a("el-select",{model:{value:e.form.queryType,callback:function(t){e.$set(e.form,"queryType",e._n(t))},expression:"form.queryType"}},[a("el-option",{attrs:{label:"全部",value:parseInt(0)}}),a("el-option",{attrs:{label:"未开始",value:parseInt(1)}}),a("el-option",{attrs:{label:"进行中",value:parseInt(2)}}),a("el-option",{attrs:{label:"已结束",value:parseInt(3)}})],1)],1),a("div",{staticClass:"item",staticStyle:{"margin-right":"10px"}},[a("span",[e._v("网络")]),a("el-select",{model:{value:e.form.chain_id,callback:function(t){e.$set(e.form,"chain_id",e._n(t))},expression:"form.chain_id"}},[a("el-option",{attrs:{label:"全部",value:parseInt(0)}}),a("el-option",{attrs:{label:"bsc",value:parseInt(56)}}),a("el-option",{attrs:{label:"heco",value:parseInt(128)}})],1)],1),a("div",{staticStyle:{"margin-right":"10px"}},[a("span",[e._v("项目昵称：")]),a("el-input",{attrs:{placeholder:"项目名称"},model:{value:e.form.keyword,callback:function(t){e.$set(e.form,"keyword",t)},expression:"form.keyword"}})],1),a("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),a("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:e.addPoll}},[e._v("新增矿池")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isloading,expression:"isloading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",fit:!0,"header-cell-style":e.getRowClass}},[e._l(e.tabelHead,(function(t,l){return a("el-table-column",{key:l,attrs:{align:"center",prop:t.value,label:t.label,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[["title","tokenName","seriesName"].includes(t.column.property)?a("span",[e._v(e._s(t.row[t.column.property].ch))]):["createdTime"].includes(t.column.property)?a("span",[e._v(e._s(e.formatDate(t.row[t.column.property]/1e3)))]):["chain_id"].includes(t.column.property)?a("span",[e._v(e._s("56"==t.row[t.column.property]?"bsc":"heco"))]):["tokenLogoPath"].includes(t.column.property)?a("div",{staticClass:"img_contain"},[a("el-card",{attrs:{"body-style":{padding:"0px",height:"100px",display:"flex"}}},[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.row.tokenLogoPath,"preview-src-list":[].concat(t.row.tokenLogoPath)}})],1)],1):["officialWebsiteUrl"].includes(t.column.property)?a("span",[a("a",{attrs:{href:t.row.officialWebsiteUrl,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(t.row.officialWebsiteUrl))])]):"status"==t.column.property?a("span",[e._v(e._s(e.status(t.row[t.column.property])))]):a("span",[e._v(e._s(t.row[t.column.property]))])]}}],null,!0)})})),a("el-table-column",{attrs:{label:"操作",align:"center",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.edit(t.row.nftPoolId)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){return e.rank(t.row.nftPoolId,t.row.setting)}}},[e._v("稀有度排名")]),a("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(a){return e.publish(t.row.nftPoolId)}}},[e._v("发布")])]}}])})],2),a("el-pagination",{attrs:{align:"center","page-size":15,layout:"total, prev, pager, next",total:e.totalPage},on:{"current-change":e.handleCurrentChange}}),a("el-dialog",{attrs:{title:"稀有度排行",visible:e.dialogVisibleRank,width:"1000px"},on:{"update:visible":function(t){e.dialogVisibleRank=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.ranktableData,border:""}},[a("el-table-column",{attrs:{label:"nft稀有度",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{model:{value:t.row.rarity,callback:function(a){e.$set(t.row,"rarity",e._n(a))},expression:"scope.row.rarity"}},[a("el-option",{attrs:{label:"选择稀有度",value:""}}),a("el-option",{attrs:{label:"SSR",value:"SSR"}}),a("el-option",{attrs:{label:"SR",value:"SR"}}),a("el-option",{attrs:{label:"R",value:"R"}}),a("el-option",{attrs:{label:"N",value:"N"}})],1)]}}])}),a("el-table-column",{attrs:{label:"稀有度字段",align:"center",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[void 0!==t.row.rarityField?a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.row.rarityField,callback:function(a){e.$set(t.row,"rarityField",a)},expression:"scope.row.rarityField"}}):e._e()]}}])}),a("el-table-column",{attrs:{label:"概率(小数点)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{min:"0",type:"number"},model:{value:t.row.probability,callback:function(a){e.$set(t.row,"probability",a)},expression:"scope.row.probability"}})]}}])}),a("el-table-column",{attrs:{label:"挖矿效率",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{min:"0",type:"number"},model:{value:t.row.efficiency,callback:function(a){e.$set(t.row,"efficiency",a)},expression:"scope.row.efficiency"}})]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0!==t.$index?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.deleteRow(t.$index,e.ranktableData)}}},[e._v("删除")]):a("el-button",{staticStyle:{"margin-top":"10px"},attrs:{size:"primary"},on:{click:e.addRankRow}},[e._v("新增稀有度")])]}}])})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisibleRank=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.ranksure}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"编辑",visible:e.dialogVisible,width:"1000px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"from"},[a("el-form",{ref:"form",attrs:{model:e.inputForm,"label-width":"200px"}},[a("el-form-item",{staticStyle:{width:"800px"},attrs:{label:"网络"}},[a("el-select",{attrs:{placeholder:"请选择网络"},model:{value:e.inputForm.chain_id,callback:function(t){e.$set(e.inputForm,"chain_id",t)},expression:"inputForm.chain_id"}},[a("el-option",{attrs:{label:"Heco",value:parseInt(128)}}),a("el-option",{attrs:{label:"Bsc",value:parseInt(56)}})],1)],1),e._l(e.list,(function(t,l){return a("el-form-item",{key:l,staticStyle:{width:"800px"},attrs:{label:t.label,prop:t.value}},["title_en"==t.value?a("el-input",{model:{value:e.inputForm.title["en"],callback:function(t){e.$set(e.inputForm.title,"en",t)},expression:"inputForm.title['en']"}}):"title_ch"==t.value?a("el-input",{model:{value:e.inputForm.title["ch"],callback:function(t){e.$set(e.inputForm.title,"ch",t)},expression:"inputForm.title['ch']"}}):"tokenName_ch"==t.value?a("el-input",{model:{value:e.inputForm.tokenName["ch"],callback:function(t){e.$set(e.inputForm.tokenName,"ch",t)},expression:"inputForm.tokenName['ch']"}}):"tokenName_en"==t.value?a("el-input",{model:{value:e.inputForm.tokenName["en"],callback:function(t){e.$set(e.inputForm.tokenName,"en",t)},expression:"inputForm.tokenName['en']"}}):"seriesName_en"==t.value?a("el-input",{model:{value:e.inputForm.seriesName["en"],callback:function(t){e.$set(e.inputForm.seriesName,"en",t)},expression:"inputForm.seriesName['en']"}}):"seriesName_ch"==t.value?a("el-input",{model:{value:e.inputForm.seriesName["ch"],callback:function(t){e.$set(e.inputForm.seriesName,"ch",t)},expression:"inputForm.seriesName['ch']"}}):["tokenNum","tokenAmount","startBlock","endBlock"].includes(t.value)?a("el-input",{model:{value:e.inputForm[t.value],callback:function(a){e.$set(e.inputForm,t.value,e._n(a))},expression:"inputForm[item.value]"}}):a("el-input",{model:{value:e.inputForm[t.value],callback:function(a){e.$set(e.inputForm,t.value,a)},expression:"inputForm[item.value]"}})],1)})),e._l(e.logoList,(function(t,l){return a("el-form-item",{key:t.name,attrs:{label:t.name}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isloading,expression:"item.isloading"}],staticClass:"upload"},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadAction,headers:e.tokens,"show-file-list":!1,"with-credentials":!1,name:"file","on-success":function(a,n){return e.handleAvatarSuccess(a,n,t.key,l)},"before-upload":function(t){return e.beforeAvatarUpload(t,l)},"on-error":function(t){return e.avatarErr(t,l)}}},[e.inputForm[t.key]?a("img",{staticClass:"avatar",attrs:{src:e.inputForm[t.key]}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)])})),a("el-form-item",{staticStyle:{"margin-left":"-200px"},attrs:{align:"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),a("el-button",{on:{click:e.reset}},[e._v("取消")])],1)],2)],1)])],1)},n=[],r=a("5530"),i=a("1da1"),o=(a("159b"),a("a9e3"),a("b680"),a("d81d"),a("d3b7"),a("a434"),a("96cf"),a("7f33")),s=a("d00b"),u=a("61f7"),c=a("cc33"),d={name:"nftpoll",data:function(){return{logoLoading:!1,seriesLogoPath:!1,seriesBackgroundImage:!1,uploadAction:u["g"]+"/admin/file/upload",tokens:{"X-Token":Object(c["a"])(),ContentType:"multipart/form-data"},logoList:[{name:"系列logo",key:"seriesLogoPath",isloading:!1},{name:"系列背景图",key:"seriesBackgroundImage",isloading:!1},{name:"奖励代币logo",key:"tokenLogoPath",isloading:!1}],inputForm:{chain_id:56,title:{ch:"",en:""},tokenName:{ch:"",en:""},tokenContractAddress:"",tokenNum:"",tokenAmount:"",tokenLogoPath:"",officialWebsiteUrl:"",seriesName:{ch:"",en:""},seriesContractAddress:"",seriesUrl:"",seriesLogoPath:"",seriesBackgroundImage:"",nftMiningContractAddress:"",startBlock:"",endBlock:""},nftPoolId:"",formatDate:u["f"],list:s["c"],dialogVisibleRank:!1,dialogVisible:!1,ranktableData:[{rarity:"",probability:.5,efficiency:1,rarityField:"properties.attributes.description"}],tableData:[],totalPage:0,form:{chain_id:0,queryType:0,keyword:""},rankFrom:{},isloading:!1,tabelHead:s["d"],page:1}},created:function(){this.fnGetPollList()},computed:{status:function(){return function(e){return 0==e?"未发布":1==e?"已发布":void 0}}},methods:{fnGetPollList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,Object(o["i"])(Object(r["a"])(Object(r["a"])({},e.form),{},{page:e.page,pageSize:20,sortDirection:"DESC",sortBy:"createdTime"}));case 3:a=t.sent,e.tableData=a.data.result,e.totalPage=a.data.total,e.isloading=!1;case 7:case"end":return t.stop()}}),t)})))()},ranksure:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,l,n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=0,e.ranktableData.forEach((function(e){a+=Number(e.probability)})),"1.00"===a.toFixed(2)){t.next=6;break}return e.$message.error("概率之和必须等于1"),t.abrupt("return");case 6:return l=e.ranktableData.map((function(e){return{efficiency:Number(e.efficiency),rarity:e.rarity,probability:Number(e.probability)}})),n={setting:{rarityField:e.ranktableData[0].rarityField,details:l}},t.prev=9,t.next=12,Object(o["k"])(e.nftPoolId,n);case 12:r=t.sent,200==r.status&&(e.$message({message:"创建成功",type:"success"}),e.dialogVisible=!1,e.fnGetPollList()),e.dialogVisibleRank=!1,t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](9),e.$message.error((null===(i=err.response)||void 0===i?void 0:i.data.message)||"创建失败");case 20:case"end":return t.stop()}}),t,null,[[9,17]])})))()},onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!e.nftPoolId){t.next=7;break}return t.next=4,Object(o["e"])(e.nftPoolId,e.inputForm);case 4:a=t.sent,t.next=10;break;case 7:return t.next=9,Object(o["a"])(e.inputForm);case 9:a=t.sent;case 10:201==a.status||200==a.status?(e.$message({message:"创建成功",type:"success"}),e.dialogVisible=!1,e.fnGetPollList()):e.$message.error("创建失败"),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),e.$message.error((null===(l=t.t0.response)||void 0===l?void 0:l.data.message[0].msg)||"创建失败");case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()},reset:function(){this.dialogVisible=!1},publish:function(e){var t=this;this.$confirm("矿池发布后，将展示在前端，确定发布嘛?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["j"])(e).then((function(e){t.$message({message:"发布成功",type:"success"})})).catch((function(e){t.$message.error(e.response.data.message)})).finally((function(){t.fnGetPollList()}))}))},edit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.dialogVisible=!0,a.next=3,Object(o["h"])(e);case 3:l=a.sent,t.nftPoolId=e,t.inputForm=l.data;case 6:case"end":return a.stop()}}),a)})))()},addPoll:function(){this.nftPoolId="",this.inputForm={chain_id:56,title:{ch:"",en:""},tokenName:{ch:"",en:""},tokenContractAddress:"",tokenNum:"",tokenAmount:"",tokenLogoPath:"",officialWebsiteUrl:"",seriesName:{ch:"",en:""},seriesContractAddress:"",seriesUrl:"",seriesLogoPath:"",startBlock:"",endBlock:""},this.dialogVisible=!0},rank:function(e,t){this.nftPoolId=e,this.dialogVisibleRank=!0,t&&t.rarityField?(this.ranktableData=t.details,this.ranktableData[0].rarityField=t.rarityField):this.ranktableData=[{rarity:"",probability:.5,efficiency:1,rarityField:"properties.attributes.description"}]},addRankRow:function(){this.ranktableData.push({rarity:"",probability:"",efficiency:1})},deleteRow:function(e,t){t.splice(e,1)},more:function(){this.dialogVisible=!0},getRowClass:function(e){var t=e.rowIndex;return 0==t?"background:RGB(238,239,246)":""},handleCurrentChange:function(e){this.page=e,this.fnGetPollList()},search:function(){this.fnGetPollList()},handleAvatarSuccess:function(e,t,a,l){this.inputForm[a]=e.result.url,this.logoList[l].isloading=!1},avatarErr:function(e,t){this.logoList[t].isloading=!1},beforeAvatarUpload:function(e,t){this.logoList[t].isloading=!0;var a="image/jpeg"===e.type||"image/png"===e.type||"image/gif"===e.type,l=e.size/1024/1024<2;return a||(this.$message.error("上传头像图片只能是 JPG/PNG 格式!"),this.logoList[t].isloading=!1),l||(this.$message.error("上传图片大小不能超过 2MB!"),this.logoList[t].isloading=!1),a&&l}}},p=d,m=(a("bc31"),a("2877")),b=Object(m["a"])(p,l,n,!1,null,"5ae1b8c4",null);t["default"]=b.exports},b680:function(e,t,a){"use strict";var l=a("23e7"),n=a("a691"),r=a("408a"),i=a("1148"),o=a("d039"),s=1..toFixed,u=Math.floor,c=function(e,t,a){return 0===t?a:t%2===1?c(e,t-1,a*e):c(e*e,t/2,a)},d=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},p=function(e,t,a){var l=-1,n=a;while(++l<6)n+=t*e[l],e[l]=n%1e7,n=u(n/1e7)},m=function(e,t){var a=6,l=0;while(--a>=0)l+=e[a],e[a]=u(l/t),l=l%t*1e7},b=function(e){var t=6,a="";while(--t>=0)if(""!==a||0===t||0!==e[t]){var l=String(e[t]);a=""===a?l:a+i.call("0",7-l.length)+l}return a},f=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){s.call({})}));l({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,a,l,o,s=r(this),u=n(e),f=[0,0,0,0,0,0],v="",g="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(v="-",s=-s),s>1e-21)if(t=d(s*c(2,69,1))-69,a=t<0?s*c(2,-t,1):s/c(2,t,1),a*=4503599627370496,t=52-t,t>0){p(f,0,a),l=u;while(l>=7)p(f,1e7,0),l-=7;p(f,c(10,l,1),0),l=t-1;while(l>=23)m(f,1<<23),l-=23;m(f,1<<l),p(f,1,1),m(f,2),g=b(f)}else p(f,0,a),p(f,1<<-t,0),g=b(f)+i.call("0",u);return u>0?(o=g.length,g=v+(o<=u?"0."+i.call("0",u-o)+g:g.slice(0,o-u)+"."+g.slice(o-u))):g=v+g,g}})},bc31:function(e,t,a){"use strict";a("d6a5")},d00b:function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"g",(function(){return n})),a.d(t,"f",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return u}));var l=[{label:"NFT系列名称",value:"title"},{label:"创建人地址",value:"address"},{label:"创建时间",value:"heco_snap_block"},{label:"合约地址",value:"bsc_snap_block"},{label:"创建时间",value:"status"},{label:"NFT个数",value:"proposal_type"},{label:"持有人数",value:"dao_name"},{label:"系列状态",value:"start_time"},{label:"在售NFT数",value:"end_time"},{label:"地板价",value:"dao_name"},{label:"总成交额",value:"dao_name"},{label:"版权税比例",value:"dao_name"},{label:"所属链",value:"dao_name"},{label:"是否认证",value:"dao_name"},{label:"是否首页",value:"dao_name"}],n=[{label:"用户昵称",value:"dao_name"},{label:"地址",value:"dao_name"},{label:"首次登陆时间",value:"dao_name"},{label:"拥有NFT数",value:"dao_name"},{label:"拥有系列数",value:"dao_name"},{label:"成交额(USD)",value:"dao_name"},{label:"是否创作者",value:"dao_name"}],r=[{label:"事件",value:"dao_name"},{label:"价格",value:"dao_name"},{label:"从",value:"dao_name"},{label:"到",value:"dao_name"},{label:"时间",value:"dao_name"},{label:"交易hash",value:"dao_name"}],i=[{label:"成交价格",value:"dao_name"},{label:"版权费",value:"dao_name"},{label:"费率",value:"dao_name"},{label:"从",value:"dao_name"},{label:"到",value:"dao_name"},{label:"时间",value:"dao_name"},{label:"交易hash",value:"dao_name"}],o=[{label:"项目名称",value:"title"},{label:"创建时间",value:"createdTime"},{label:"奖励代币名称",value:"tokenName"},{label:"代币合约地址",value:"tokenContractAddress"},{label:"奖励代币数量",value:"tokenNum"},{label:"奖励代币金额",value:"tokenAmount"},{label:"项目官网URL",value:"officialWebsiteUrl"},{label:"奖励代币logo",value:"tokenLogoPath"},{label:"NFT系列名称",value:"seriesName"},{label:"系列合约地址",value:"seriesContractAddress"},{label:"开始区块高度",value:"startBlock"},{label:"结束区块高度",value:"endBlock"},{label:"网络",value:"chain_id"},{label:"状态",value:"status"}],s=[{label:"项目名称",value:"dao_name"},{label:"项目描述",value:"dao_name"},{label:"创建日期",value:"dao_name"},{label:"开始时间",value:"dao_name"},{label:"结束时间",value:"dao_name"},{label:"状态",value:"dao_name"}],u=[{label:"项目名称(中文)",value:"title_ch"},{label:"项目名称(英文)",value:"title_en"},{label:"奖励代币名称(中文)",value:"tokenName_ch"},{label:"奖励代币名称(英文)",value:"tokenName_en"},{label:"代币合约地址",value:"tokenContractAddress"},{label:"奖励代币数量",value:"tokenNum"},{label:"奖励代币金额",value:"tokenAmount"},{label:"项目官网URL",value:"officialWebsiteUrl"},{label:"NFT系列名称(中文)",value:"seriesName_ch"},{label:"NFT系列名称(英文)",value:"seriesName_en"},{label:"系列合约地址",value:"seriesContractAddress"},{label:"系列URL",value:"seriesUrl"},{label:"质押池合约地址",value:"nftMiningContractAddress"},{label:"开始区块高度",value:"startBlock"},{label:"结束区块高度",value:"endBlock"}]},d6a5:function(e,t,a){},d81d:function(e,t,a){"use strict";var l=a("23e7"),n=a("b727").map,r=a("1dde"),i=r("map");l({target:"Array",proto:!0,forced:!i},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);