webpackJsonp([3],{KzU9:function(t,e){},rwFZ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",[t._v(t._s(t.$store.state.position.name)+"美团")]),t._v(" "),s("el-breadcrumb-item",[t._v(t._s(t.$store.state.position.name)+t._s(t.$route.params.name))])],1)},staticRenderFns:[]},n=s("VU/8")({created:function(){}},a,!1,null,null,null).exports,r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-product-select"},[s("dl",{staticClass:"tab"},[s("dt",[t._v("\n      "+t._s(t.name)+"\n      "),s("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),s("dd",[s("dt",{staticClass:"select-title"},[t._v(t._s(t.name))]),t._v(" "),t._l(t.list,function(e,a){return s("span",{key:a},[t._v(t._s(e.name))])})],2)])])},staticRenderFns:[]},l=s("VU/8")({props:["name","list"]},r,!1,null,null,null).exports,i=s("gyMJ"),c={created:function(){var t=this;i.a.getCategoryList().then(function(e){t.classicList=e})},data:function(){return{classicList:[],areaList:[{title:"推荐商圈",subList:[{name:"望京",id:12e4},{name:"昌平",id:12222}]}]}},components:{MSelect:l}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-product-categroy"},[s("dl",{staticClass:"classic"},[s("dt",[t._v("分类")]),t._v(" "),s("dt",[t._v("全部")]),t._v(" "),t._l(t.classicList,function(t){return s("dd",{key:t.type},[s("m-select",{attrs:{name:t.title,list:t.subList}})],1)})],2),t._v(" "),s("dl",{staticClass:"classic"},[s("dt",[t._v("区域")]),t._v(" "),s("dt",[t._v("全部")]),t._v(" "),t._l(t.areaList,function(t){return s("dd",{key:t.type},[s("m-select",{attrs:{name:t.title,list:t.subList}})],1)})],2)])},staticRenderFns:[]},_=s("VU/8")(c,o,!1,null,null,null).exports,u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dl",{staticClass:"s-item"},[s("dt",[s("img",{attrs:{src:t.meta.image,alt:"图片"}})]),t._v(" "),s("dd",[s("h3",[s("router-link",{attrs:{to:{name:"ProductDeatil"}}},[t._v(t._s(t.meta.title))])],1),t._v(" "),s("p",[s("el-rate",{attrs:{disabled:"","text-color":"#ff9900","score-template":t.meta.score.toString()},model:{value:t.meta.score,callback:function(e){t.$set(t.meta,"score",e)},expression:"meta.score"}}),t._v(" "),t.meta.score>4.5?s("span",[t._v("很好")]):t.meta.score>4?s("span",[t._v("好")]):t.meta.score>3.5?s("span",[t._v("不错")]):t.meta.score>3?s("span",[t._v("一般")]):s("span",[t._v("很差")]),t._v(" "),s("span",[t._v(t._s(t.meta.score)+"分")]),t._v(" "),s("span",{staticClass:"s-item-comment-total"},[t._v(t._s(t.meta.commentNum)+"人评论")])],1),t._v(" "),s("p",[s("span",{staticClass:"s-item-tab"},t._l(t.meta.tab,function(e,a){return s("span",{key:e},[t._v(t._s(e+(a<t.meta.tab.length-1?" | ":"")))])}),0),t._v(" "),s("span",{staticClass:"s-item-addr"},[t._v(t._s(t.meta.address))]),t._v(" "),t._m(0)]),t._v(" "),s("p",[s("span",{staticClass:"s-item-price"},[t._v("\n        人均￥"+t._s(t.meta.avg_price)+"\n      ")])]),t._v(" "),s("ul",{staticClass:"deal-items"},t._l(t.meta.dealItems.slice(0,2),function(e,a){return s("li",{key:a,staticClass:"items"},[s("p",{staticClass:"deal-title"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),s("p",[s("span",{staticClass:"deal-price"},[t._v("\n            ￥"+t._s(e.price)+"\n          ")]),t._v(" "),s("span",{staticClass:"deal-old-price"},[t._v("门市价￥"+t._s(e.counterPrice))]),t._v(" "),s("span",{staticClass:"deal-sales"},[t._v("已售"+t._s(e.saleNum))])])])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"el-icon-location"}),this._v("\n          查看地图\n        ")])])}]},m={data:function(){return{nav:[{key:"s-default",name:"智能排序",active:!0},{key:"s-price",name:"价格最低",active:!1},{key:"s-score",name:"人气最高",active:!1},{key:"s-comment",name:"评价最高",active:!1}],productList:[]}},created:function(){var t=this;i.a.getProductList().then(function(e){t.productList=e})},components:{Item:s("VU/8")({props:["meta"]},u,!1,null,null,null).exports}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"m-products-list"},[s("ul",t._l(t.nav,function(e){return s("li",{key:e.key,class:{"s-nav-active":e.active}},[t._v(t._s(e.name))])}),0),t._v(" "),s("el-row",t._l(t.productList,function(t,e){return s("item",{key:t.title+t.score,attrs:{meta:t}})}),1)],1)},staticRenderFns:[]},d={components:{crumbs:n,categroy:_,list:s("VU/8")(m,v,!1,null,null,null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-product"},[e("el-row",{staticClass:"m-crumbs"},[e("crumbs")],1),this._v(" "),e("el-row",[e("el-col",{attrs:{span:19}},[e("el-row",[e("categroy")],1),this._v(" "),e("el-row",[e("list")],1)],1),this._v(" "),e("el-col",{attrs:{span:5}},[this._v("\n      map + fav\n    ")])],1)],1)},staticRenderFns:[]};var f=s("VU/8")(d,p,!1,function(t){s("KzU9")},null,null);e.default=f.exports}});
//# sourceMappingURL=3.a2f9fbb0af97b446a7c0.js.map