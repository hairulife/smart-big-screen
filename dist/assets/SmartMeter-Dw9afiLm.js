import{c as e,C as s}from"./ChartComp-CRd7s0Fv.js";import{_ as r,g as c,o as d,c as n,h as a,a as p,q as i,s as _}from"./index-CorZdelc.js";const l=t=>(i("data-v-09c9fb29"),t=t(),_(),t),m={class:"module"},h=l(()=>a("div",{class:"top"},"用电量：90.5KW/h",-1)),g={class:"chart"},f={__name:"SmartMeter",setup(t){const o=c({...e.generateBarOption({legend:e.generateLegend({show:!1}),grid:e.generateGrid({top:20}),series:[{...e.generateBarSeries(),color:"rgba(98, 153, 255, .9)",barMaxWidth:e.getSize(15)}]}),dataset:{dimensions:["单位","累计","实时"],source:[{单位:"单位1",累计:33,实时:23},{单位:"单位2",累计:33,实时:23},{单位:"单位3",累计:33,实时:23},{单位:"单位4",累计:33,实时:23}]}});return(u,S)=>(d(),n("div",m,[h,a("div",g,[p(s,{mark:"SmartMeter",option:o.value},null,8,["option"])])]))}},b=r(f,[["__scopeId","data-v-09c9fb29"]]);export{b as default};