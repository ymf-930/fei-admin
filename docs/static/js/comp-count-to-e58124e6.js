import{a9 as f,E as i,o as V,f as x,w as u,c as n,b as s,e as l}from"./vendor-23852376.js";import"./chunk-brace-bd816051.js";const b={name:"CompCountTo",data(){return{startVal:0,endVal:2021,duration:4e3,prefix:"\xA5",suffix:"rmb"}},methods:{restart(){this.$refs.countTo.restart()},togglePlay(){this.$refs.countTo.pauseResume()}}},v={class:"count-wrap p10"},h={style:{"font-size":"60px"}},C={flex:""},y={class:"input-item"},g=l(" startVal: "),T={class:"input-item"},k=l(" endVal: "),w={class:"input-item"},U=l(" duration: "),B=l("\u5F00\u59CB"),N=l("\u6682\u505C/\u542F\u52A8"),P={flex:""},z={class:"input-item"},E=l(" prefix: "),I={class:"input-item"},R=l(" suffix: ");function j(q,o,A,D,e,a){const p=i("b-count-to"),_=i("b-input-number"),d=i("b-button"),r=i("b-input"),c=i("b-collapse-wrap"),m=i("page-container");return V(),x(m,{desc:"\u6570\u5B57\u52A8\u753B\u7EC4\u4EF6\uFF0C\u73B0\u5DF2\u6536\u5F55\u81F3bin-ui-next\uFF0C\u6B64\u4E3A\u793A\u4F8B"},{default:u(()=>[n(c,{title:"\u6570\u5B57\u52A8\u753B",shadow:"none"},{default:u(()=>[s("div",v,[s("h1",h,[n(p,{"start-val":e.startVal,"end-val":e.endVal,duration:e.duration,prefix:e.prefix,suffix:e.suffix,autoplay:!1,ref:"countTo"},null,8,["start-val","end-val","duration","prefix","suffix"])]),s("div",C,[s("div",y,[g,n(_,{modelValue:e.startVal,"onUpdate:modelValue":o[0]||(o[0]=t=>e.startVal=t),min:0},null,8,["modelValue"])]),s("div",T,[k,n(_,{modelValue:e.endVal,"onUpdate:modelValue":o[1]||(o[1]=t=>e.endVal=t),min:0},null,8,["modelValue"])]),s("div",w,[U,n(_,{modelValue:e.duration,"onUpdate:modelValue":o[2]||(o[2]=t=>e.duration=t),min:0},null,8,["modelValue"])]),n(d,{type:"primary",onClick:a.restart},{default:u(()=>[B]),_:1},8,["onClick"]),n(d,{type:"info",onClick:a.togglePlay},{default:u(()=>[N]),_:1},8,["onClick"])]),s("div",P,[s("div",z,[E,n(r,{modelValue:e.prefix,"onUpdate:modelValue":o[3]||(o[3]=t=>e.prefix=t)},null,8,["modelValue"])]),s("div",I,[R,n(r,{modelValue:e.suffix,"onUpdate:modelValue":o[4]||(o[4]=t=>e.suffix=t)},null,8,["modelValue"])])])])]),_:1})]),_:1})}const H=f(b,[["render",j],["__scopeId","data-v-1b61fc12"]]);export{H as default};
