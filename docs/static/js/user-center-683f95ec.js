import{b as C,a as N}from"./list.api-6246416c.js";import{b as B}from"./index-7fbf4c2e.js";import{a9 as I,g as r,c as t,w as e,D as a,o as n,d as _,q as s,F as b,N as v,a as h,h as g,ac as S,ad as F}from"./vendor-3647c542.js";import"./chunk-f-ui-one-208e726e.js";import"./chunk-brace-c1a5251e.js";const U={name:"UserCenter",data(){return{tabs:[{key:"tab1",title:"项目"},{key:"tab2",title:"应用"},{key:"tab3",title:"文章"}],activeTab:"tab1",articleList:[],projectList:[],loading:!1}},async created(){this.loading=!0;const c=await C(),d=await N();this.tabs[0].title=`项目(${d.rows.length})`,this.tabs[1].title=`应用(${d.rows.length})`,this.tabs[2].title=`文章(${c.rows.length})`,this.articleList=c.rows,this.projectList=d.rows,this.loading=!1}},w=c=>(S("data-v-d60e8cdb"),c=c(),F(),c),q={class:"center-wrap"},A=w(()=>_("div",{class:"avatar"},[_("img",{src:B,class:"avatar-img",alt:"avatar"})],-1)),D=w(()=>_("h2",null,"Yang",-1)),E=w(()=>_("p",null,"让花成花，让树成树。",-1)),P={class:"desc"},Y={class:"desc"},z={class:"desc"},G={key:0,class:"pt-16 pl-16"},H={key:1,class:"p16"},J={key:2,class:"p16"};function K(c,d,M,O,o,Q){const m=a("f-icon"),f=a("f-divider"),l=a("f-tag"),k=a("f-card"),y=a("f-col"),x=a("f-tabs"),L=a("img-item"),T=a("app-item"),u=a("f-skeleton"),V=a("article-item"),j=a("f-row");return n(),r("div",q,[t(j,{gutter:16},{default:e(()=>[t(y,{span:"7"},{default:e(()=>[t(k,{class:"info-pane",bordered:!1,shadow:"never"},{default:e(()=>[A,D,E,_("div",P,[t(m,{name:"flag"}),s(" 前端工程师 ")]),_("div",Y,[t(m,{name:"apartment"}),s(" xxx软件有限公司-前端事业部-前端架构组 ")]),_("div",z,[t(m,{name:"location"}),s(" 徐州市泉山区 ")]),t(f,{dashed:""}),t(l,null,{default:e(()=>[s("搬砖者 👐")]),_:1}),t(l,null,{default:e(()=>[s("小有想法 😈")]),_:1}),t(l,null,{default:e(()=>[s("前端开发 ⛲")]),_:1}),t(l,null,{default:e(()=>[s("vue3 🍀")]),_:1}),t(l,null,{default:e(()=>[s("专注前端 🌟")]),_:1}),t(l,null,{default:e(()=>[s("菜鸟 🙋")]),_:1}),t(l,null,{default:e(()=>[s("懂点设计 💎")]),_:1}),t(l,null,{default:e(()=>[s("交互内容 🔖")]),_:1})]),_:1})]),_:1}),t(y,{span:"17"},{default:e(()=>[t(k,{bordered:!1,shadow:"never","body-style":{padding:"8px 0 0"}},{default:e(()=>[t(x,{modelValue:o.activeTab,"onUpdate:modelValue":d[0]||(d[0]=i=>o.activeTab=i),data:o.tabs},null,8,["modelValue","data"]),o.activeTab==="tab1"?(n(),r("div",G,[(n(!0),r(b,null,v(o.projectList,(i,p)=>(n(),h(L,{key:p,item:i},null,8,["item"]))),128))])):g("",!0),o.activeTab==="tab2"?(n(),r("div",H,[(n(!0),r(b,null,v(o.projectList,(i,p)=>(n(),h(T,{key:p,item:i},null,8,["item"]))),128))])):g("",!0),o.activeTab==="tab3"?(n(),r("div",J,[t(u,{loading:o.loading,animation:""},{template:e(()=>[t(u),t(f),t(u),t(f),t(u)]),default:e(()=>[(n(!0),r(b,null,v(o.articleList,(i,p)=>(n(),h(V,{key:p,item:i},null,8,["item"]))),128))]),_:1},8,["loading"])])):g("",!0)]),_:1})]),_:1})]),_:1})])}const tt=I(U,[["render",K],["__scopeId","data-v-d60e8cdb"]]);export{tt as default};
