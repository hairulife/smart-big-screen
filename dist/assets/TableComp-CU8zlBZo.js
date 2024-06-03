import{_ as w,o as s,c as r,h as l,F as h,r as p,n as y,t as _,k as u,i as b,H as S,j as f,I as k,J as v,K as E,L as R,M as C,q as L,s as A}from"./index-CorZdelc.js";const D={props:{columns:{type:Array,default(){return[]}},dataSource:{type:Array,default(){return[]}}},data(){return{showExpand:!1,bodyShow:!0,nDataSource:[],prevExpandEvent:null,expandRecord:{},isScrolled:!1}},watch:{dataSource:{handler(e){this.bodyShow=!1,this.nDataSource=e,this.$nextTick(()=>{this.bodyShow=!0,this.$nextTick(()=>{this.isScrolled=this.hasScrolled()})})},deep:!0,immediate:!0}},mounted(){this.$refs.bodyWrapper.addEventListener("scroll",e=>{this.$refs.headerWrapper.scrollLeft=e.target.scrollLeft})},computed:{hasExpand(){return this.columns.some(e=>e.type==="expand")}},methods:{hasScrolled(){const e=this.$refs.bodyWrapper;return e.scrollHeight>e.clientHeight},getTitle(e,n,a){return e.type==="expand"||e.customRender&&this.typeOf(e.customRender)==="String"?"":e.customRender&&this.typeOf(e.customRender)==="Function"?e.customRender(a[e.dataIndex],n,a):a[e.dataIndex]},toggleExpand(e,n){this.expandRecord=n;const a=e.target.parentElement.parentElement;this.insertAfter(this.$refs.expandSlot,a),e.target.classList.contains("expand")?(e.target.classList.remove("expand"),this.showExpand=!1,this.prevExpandEvent=null):(e.target.classList.add("expand"),this.showExpand=!0,this.prevExpandEvent&&this.prevExpandEvent.target.classList.remove("expand"),this.prevExpandEvent=e)},rowClick(e,n){this.$emit("rowClick",e,n)},typeOf(e){return Object.prototype.toString.call(e).slice(8,-1)},insertAfter(e,n){var a=n.parentNode;a.lastChild==n?a.appendChild(e):a.insertBefore(e,n.nextSibling)}}},O=e=>(L("data-v-c88f1569"),e=e(),A(),e),T={class:"data-dashboard-table-wrapper"},B={key:0,class:"data-dashboard-table-header"},W=["width"],z=["title"],F={class:"data-dashboard-table-body-wrapper",ref:"bodyWrapper"},H={key:0,class:"data-dashboard-table-body"},N=["width"],P=["onClick"],V=["title"],j=["onClick"],M=O(()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-caret-right-fill",viewBox:"0 0 16 16"},[l("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})],-1)),q=[M],J={key:1},K={key:3},G={key:0,class:"empty"},Q={key:1,ref:"expandSlot",class:"expand-slot"},U=["colspan"];function X(e,n,a,Y,i,c){return s(),r("div",T,[l("div",{class:b(["data-dashboard-table-header-wrapper",{"scrollbar-space":i.isScrolled}]),ref:"headerWrapper"},[i.bodyShow?(s(),r("table",B,[l("colgroup",null,[(s(!0),r(h,null,p(a.columns,(t,o)=>(s(),r("col",{key:o,width:t.width?t.width:t.type=="expand"?50:""},null,8,W))),128))]),l("thead",null,[l("tr",null,[(s(!0),r(h,null,p(a.columns,(t,o)=>(s(),r("th",{key:o,title:t.title,style:y({textAlign:t.align})},_(t.title),13,z))),128))])])])):u("",!0)],2),l("div",F,[i.bodyShow?(s(),r("table",H,[l("colgroup",null,[(s(!0),r(h,null,p(a.columns,(t,o)=>(s(),r("col",{key:o,width:t.width?t.width:t.type=="expand"?50:""},null,8,N))),128))]),l("tbody",null,[(s(!0),r(h,null,p(i.nDataSource,(t,o)=>(s(),r("tr",{key:o,onClick:d=>c.rowClick(t,o)},[(s(!0),r(h,null,p(a.columns,(d,x)=>(s(),r("td",{key:x,title:c.getTitle(d,o,t),style:y({textAlign:d.align})},[d.type==="expand"?(s(),r("div",{key:0,class:"expand-icon",onClick:S(g=>c.toggleExpand(g,t),["stop"])},q,8,j)):d.customRender&&c.typeOf(d.customRender)==="Function"?(s(),r("span",J,_(d.customRender(t[d.dataIndex],o,t)||"-"),1)):d.customRender&&c.typeOf(d.customRender)==="String"?f(e.$slots,d.customRender,k({key:2,ref_for:!0},{text:t[d.dataIndex],record:t}),void 0,!0):(s(),r("span",K,_(t[d.dataIndex]||"-"),1))],12,V))),128))],8,P))),128)),i.nDataSource.length===0?(s(),r("div",G,"暂无数据")):u("",!0),c.hasExpand?v((s(),r("tr",Q,[l("td",{colspan:a.columns.length},[f(e.$slots,"expand",R(C({record:i.expandRecord})),void 0,!0)],8,U)],512)),[[E,i.showExpand]]):u("",!0)])])):u("",!0)],512)])}const $=w(D,[["render",X],["__scopeId","data-v-c88f1569"]]);export{$ as T};
