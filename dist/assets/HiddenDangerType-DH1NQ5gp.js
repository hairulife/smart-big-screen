/* empty css                  *//* empty css                  */import{c as e,C as d}from"./ChartComp-7Gvzdd2j.js";import{_ as i,i as a,o as p,c as m,j as r,m as s,H as u}from"./index-DzhlJRwF.js";const _={class:"module"},f={class:"top"},g={class:"chart"},h={__name:"HiddenDangerType",setup(v){const t=a([new Date,new Date]),n=a({...e.generatePieOption({series:e.generatePieSeries({radius:["40%","55%"],label:{show:!1}})}),legend:e.generateLegend({orient:"vertical",top:"auto",bottom:e.getPercentage(10)}),title:{text:"0",subtext:"总数",left:"center",top:e.getPercentage(44),textStyle:{color:"#02fdff",fontSize:30},subtextStyle:{fontSize:20,lineHeight:1,color:"#fff"}},dataset:{source:[["product","sales"],["一号区域",0],["二号区域",0],["三号区域",0],["四号区域",0]]}});return(x,o)=>{const l=u;return p(),m("div",_,[r("div",f,[s(l,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=c=>t.value=c),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),r("div",g,[s(d,{mark:"NonConformity",option:n.value},null,8,["option"])])])}}},k=i(h,[["__scopeId","data-v-eabdc758"]]);export{k as default};