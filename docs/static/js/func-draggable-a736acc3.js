import{a9 as f,az as h,a as b,w as a,D as l,o as V,c as t,d as s,Q as _,t as d,q as v,ac as w,ad as D}from"./vendor-3647c542.js";import"./chunk-brace-c1a5251e.js";const S={name:"FuncDraggable",components:{draggable:h},data(){return{data:["item1","item2","item3","item4","item5","item6"],data1:["item1","item2","item3","item4","item5","item6"],data2:["item a1","item a2","item a3","item a4","item a5","item a6"],data3:["item b1","item b2","item b3","item b4","item b5","item b6"]}},methods:{start(){console.log("on-drag-start")},end(){console.log("on-drag-end")}}},y=i=>(w("data-v-76875fe9"),i=i(),D(),i),k={class:"p16"},x={class:"item"},C={class:"item"},E=y(()=>s("i",{class:"f-iconfont f-icon-drag drag-handle"},null,-1)),I={class:"p16"},U={class:"item"},B={class:"item"};function N(i,n,q,z,o,m){const r=l("draggable"),g=l("f-col"),c=l("f-row"),p=l("f-collapse-wrap"),u=l("page-container");return V(),b(u,{desc:"Draggable 拖拽组件模块，依赖vuedraggable。"},{default:a(()=>[t(p,{title:"Draggable 更通用的拖拽排序模块，无额外样式和默认值等配置",shadow:"none"},{default:a(()=>[s("div",k,[t(c,{gutter:16},{default:a(()=>[t(g,{span:"12"},{default:a(()=>[t(r,_({modelValue:o.data,"onUpdate:modelValue":n[0]||(n[0]=e=>o.data=e),class:"drag-area","item-key":"element"},{animation:0,group:"data",ghostClass:"ghost"},{onStart:m.start,onEnd:m.end}),{item:a(({element:e})=>[s("div",x,d(e),1)]),_:1},16,["modelValue","onStart","onEnd"])]),_:1}),t(g,{span:"12"},{default:a(()=>[t(r,_({modelValue:o.data1,"onUpdate:modelValue":n[1]||(n[1]=e=>o.data1=e),class:"drag-area","item-key":"element"},{animation:200,group:"data1",ghostClass:"ghost",handle:".drag-handle"},{onStart:m.start,onEnd:m.end}),{item:a(({element:e})=>[s("div",C,[E,v(" "+d(e),1)])]),_:1},16,["modelValue","onStart","onEnd"])]),_:1})]),_:1})])]),_:1}),t(p,{title:"Draggable group",shadow:"none"},{default:a(()=>[s("div",I,[t(c,{gutter:16},{default:a(()=>[t(g,{span:"12"},{default:a(()=>[t(r,_({modelValue:o.data2,"onUpdate:modelValue":n[2]||(n[2]=e=>o.data2=e),class:"drag-area","item-key":"element"},{animation:200,group:"group",ghostClass:"ghost"}),{item:a(({element:e})=>[s("div",U,d(e),1)]),_:1},16,["modelValue"])]),_:1}),t(g,{span:"12"},{default:a(()=>[t(r,_({modelValue:o.data3,"onUpdate:modelValue":n[3]||(n[3]=e=>o.data3=e),class:"drag-area","item-key":"element"},{animation:200,group:"group",ghostClass:"ghost"}),{item:a(({element:e})=>[s("div",B,d(e),1)]),_:1},16,["modelValue"])]),_:1})]),_:1}),s("p",null,"data left:"+d(o.data2),1),s("p",null,"data right:"+d(o.data3),1)])]),_:1})]),_:1})}const Q=f(S,[["render",N],["__scopeId","data-v-76875fe9"]]);export{Q as default};
