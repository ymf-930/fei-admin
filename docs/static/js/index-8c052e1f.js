import{a9 as B,D as d,o as v,a as F,w as e,d as o,t as A,m as x,c as t,g as D,h as k,k as p,A as E,q as h,ac as S,ad as O}from"./vendor-e5006905.js";import"./chunk-brace-c1a5251e.js";const C={color10:["#5B8FF9","#61DDAA","#65789B","#F6BD16","#7262fd","#78D3F8","#9661BC","#F6903D","#008685","#F08BB4"],color20:["#5B8FF9","#CDDDFD","#61DDAA","#CDF3E4","#65789B","#CED4DE","#F6BD16","#FCEBB9","#7262fd","#D3CEFD","#78D3F8","#D3EEF9","#9661BC","#DECFEA","#F6903D","#FFE0C7","#008685","#BBDEDE","#F08BB4","#FFE0ED"]};function T(n){return C[n]||C.color10}const N={name:"top-card",props:{header:String,loading:Boolean,count:{type:Number,default:2e3}}},I={flex:"main:justify cross:center"},L={flex:"main:justify cross:center",style:{"border-top":"1px solid #e5e5e5","padding-top":"10px"}},W={class:"center"},V={key:0,class:"count-to"},P={class:"content"},j={class:"bottom"};function X(n,u,g,a,y,b){const s=d("f-skeleton-item"),i=d("f-count-to"),_=d("f-skeleton"),c=d("f-card");return v(),F(c,{bordered:!1,class:"card-panel",shadow:"never","body-style":{padding:"10px"}},{header:e(()=>[o("div",I,[o("span",null,A(g.header),1),x(n.$slots,"right",{},void 0,!0)])]),default:e(()=>[t(_,{loading:g.loading,animation:""},{template:e(()=>[o("div",null,[t(s,{variant:"p",style:{width:"30%","margin-bottom":"16px"}}),t(s,{variant:"p",style:{"margin-bottom":"8px"}}),t(s,{variant:"p",style:{"margin-bottom":"8px"}}),t(s,{variant:"p",style:{"margin-bottom":"8px"}}),o("div",L,[t(s,{variant:"text",style:{width:"10%"}}),t(s,{variant:"text",style:{width:"10%"}})])])]),default:e(()=>[o("div",W,[g.count?(v(),D("div",V,[t(i,{"start-val":0,"end-val":g.count},null,8,["end-val"])])):k("",!0),o("div",P,[x(n.$slots,"default",{},void 0,!0)])]),o("div",j,[x(n.$slots,"bottom",{},void 0,!0)])]),_:3},8,["loading"])]),_:3})}const Y=B(N,[["render",X],["__scopeId","data-v-4391c002"]]);const q={name:"Analysis",components:{TopCard:Y},setup(){const n=T(),u=p(!0),g=p({color:n,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"],show:!1},yAxis:{type:"value",show:!1},series:[{name:"用户注册数",type:"bar",stack:"vistors",barWidth:"60%",data:[22,34,11,24,22,8,12]}]}),a=p({color:["#5B8FF9","#9661BC"],xAxis:{data:["周一","周二","周三","周四","周五","周六","周日"],show:!1},yAxis:{show:!1},grid:{left:-20,right:3,bottom:0,top:0,containLabel:!0},tooltip:{trigger:"axis"},series:[{name:"发布",type:"line",data:[40,32,16,53,70,16,96]},{name:"草稿",type:"line",data:[25,18,99,35,66,94,24]}]}),y=p({color:n,tooltip:{},grid:{left:"3%",right:"4%",bottom:"3%",height:60,containLabel:!0},xAxis:{type:"value",show:!1,max:22},yAxis:{type:"category",show:!1},series:[{name:"反馈数量",type:"bar",stack:"总量",data:[12]},{name:"回复数量",type:"bar",stack:"总量",data:[10]}]}),b=p({tooltip:{},grid:{left:"5%",right:"5%"},xAxis:{show:!1,data:["7.1","7.2","7.3","7.4","7.5","7.6","7.7","7.8","7.9","7.10"]},yAxis:{show:!1},series:[{name:"访问数量",type:"bar",data:[234,634,234,764,88,235,179,152,200,334],itemStyle:{color:"#fa6b9b",borderRadius:3}}]}),s=p({xAxis:{data:["周一","周二","周三","周四","周五","周六","周日"],axisTick:{show:!1}},grid:{left:20,right:30,bottom:20,top:50,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{right:0,data:["浏览量","实际访客"]},series:[{name:"浏览量",itemStyle:{color:"#FF005A"},smooth:!0,type:"line",data:[100,120,161,134,105,160,165]},{name:"实际访客",smooth:!0,type:"line",itemStyle:{color:"#3888fa"},areaStyle:{opacity:.1},data:[120,82,91,154,162,140,145]}]}),i=p({color:n,tooltip:{trigger:"axis"},radar:{radius:"66%",center:["50%","43%"],splitNumber:8,splitArea:{areaStyle:{color:"rgba(127,155,184,0.3)",opacity:1,shadowBlur:45,shadowColor:"rgba(0,0,0,.5)",shadowOffsetX:0,shadowOffsetY:15}},indicator:[{name:"行政"},{name:"管理"},{name:"科技"},{name:"服务"},{name:"开发"},{name:"市场"}]},legend:{left:"center",bottom:"10",data:["北京","上海"]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:13,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[6e3,12e3,14e3,11e3,15e3,14e3],name:"北京"},{value:[4e3,9e3,15e3,15e3,13e3,11e3],name:"上海"}]}]}),_=p({color:n,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"pageA",type:"bar",stack:"vistors",barWidth:"60%",data:[179,52,200,334,390,330,220]},{name:"pageB",type:"bar",stack:"vistors",barWidth:"60%",data:[80,52,200,334,390,330,220]},{name:"pageC",type:"bar",stack:"vistors",barWidth:"60%",data:[66,52,200,334,390,330,220]}]}),c=p({color:n,tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:["搜索引擎","直接访问","邮件营销","联盟广告","公众号"]},calculable:!0,series:[{type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:[{value:320,name:"搜索引擎"},{value:332,name:"直接访问"},{value:211,name:"邮件营销"},{value:176,name:"联盟广告"},{value:66,name:"公众号"}]}]});return E(()=>{setTimeout(()=>{u.value=!1},600)}),{loading:u,topCharts1:g,topCharts2:a,topCharts3:y,topCharts4:b,centerChart:s,radarOptions:i,barOptions:_,roseOptions:c}}},r=n=>(S("data-v-8907c1de"),n=n(),O(),n),z={class:"analysis-wrap"},M={class:"analysis-top"},R=r(()=>o("span",null,"日注册数",-1)),G=r(()=>o("span",null,"343个",-1)),H=r(()=>o("span",null,"日户反馈数",-1)),J=r(()=>o("span",null,"5",-1)),K=r(()=>o("span",null,"日反馈",-1)),Q=r(()=>o("span",null,"34",-1)),U=r(()=>o("span",null,"日访问量",-1)),Z=r(()=>o("span",null,"3242",-1)),$={class:"analysis-center"},tt=r(()=>o("span",null,"最近一周访问情况",-1)),et={class:"analysis-bottom"},ot=r(()=>o("span",null,"服务类别",-1)),at=r(()=>o("span",null,"页面堆叠",-1)),nt=r(()=>o("span",null,"访问占比",-1));function st(n,u,g,a,y,b){const s=d("f-tag"),i=d("b-charts"),_=d("top-card"),c=d("f-col"),w=d("f-row"),m=d("iconfont"),l=d("f-skeleton"),f=d("f-card");return v(),D("div",z,[o("div",M,[t(w,{gutter:16},{default:e(()=>[t(c,{span:"6"},{default:e(()=>[t(_,{header:"注册用户数",count:21189,loading:a.loading},{right:e(()=>[t(s,{type:"success"},{default:e(()=>[h("月")]),_:1})]),bottom:e(()=>[R,G]),default:e(()=>[t(i,{height:"70px",options:a.topCharts1},null,8,["options"])]),_:1},8,["loading"])]),_:1}),t(c,{span:"6"},{default:e(()=>[t(_,{header:"发布文章数",count:2314,loading:a.loading},{right:e(()=>[t(s,{type:"primary"},{default:e(()=>[h("月")]),_:1})]),bottom:e(()=>[H,J]),default:e(()=>[t(i,{height:"70px",options:a.topCharts2},null,8,["options"])]),_:1},8,["loading"])]),_:1}),t(c,{span:"6"},{default:e(()=>[t(_,{header:"用户反馈数",count:322,loading:a.loading},{right:e(()=>[t(s,{type:"warning"},{default:e(()=>[h("日")]),_:1})]),bottom:e(()=>[K,Q]),default:e(()=>[t(i,{height:"70px",options:a.topCharts3},null,8,["options"])]),_:1},8,["loading"])]),_:1}),t(c,{span:"6"},{default:e(()=>[t(_,{header:"网站访问量",count:532121,loading:a.loading},{right:e(()=>[t(s,{type:"danger"},{default:e(()=>[h("次")]),_:1})]),bottom:e(()=>[U,Z]),default:e(()=>[t(i,{height:"70px",options:a.topCharts4},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1})]),o("div",$,[t(f,{bordered:!1,shadow:"never","body-style":{padding:"10px"}},{header:e(()=>[t(m,{icon:"linechart",color:"primary",bg:"",round:""}),h("   "),tt]),default:e(()=>[t(l,{loading:a.loading,animation:""},{template:e(()=>[t(l,{style:{"margin-bottom":"16px"}}),t(l)]),default:e(()=>[t(i,{height:"350px",options:a.centerChart},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),o("div",et,[t(w,{gutter:16},{default:e(()=>[t(c,{span:"8"},{default:e(()=>[t(f,{bordered:!1,shadow:"never","body-style":{padding:"10px"}},{header:e(()=>[t(m,{icon:"smile",color:"warning",bg:"",round:""}),h("   "),ot]),default:e(()=>[t(l,{loading:a.loading,animation:""},{template:e(()=>[t(l,{style:{"margin-bottom":"16px"}}),t(l)]),default:e(()=>[t(i,{height:"300px",options:a.radarOptions},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1}),t(c,{span:"8"},{default:e(()=>[t(f,{bordered:!1,shadow:"never","body-style":{padding:"10px"}},{header:e(()=>[t(m,{icon:"layout",color:"info",bg:"",round:""}),h("   "),at]),default:e(()=>[t(l,{loading:a.loading,animation:""},{template:e(()=>[t(l,{style:{"margin-bottom":"16px"}}),t(l)]),default:e(()=>[t(i,{height:"300px",options:a.barOptions},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1}),t(c,{span:"8"},{default:e(()=>[t(f,{bordered:!1,shadow:"never","body-style":{padding:"10px"}},{header:e(()=>[t(m,{icon:"flag",color:"danger",bg:"",round:""}),h("   "),nt]),default:e(()=>[t(l,{loading:a.loading,animation:""},{template:e(()=>[t(l,{style:{"margin-bottom":"16px"}}),t(l)]),default:e(()=>[t(i,{height:"300px",options:a.roseOptions},null,8,["options"])]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})])])}const dt=B(q,[["render",st],["__scopeId","data-v-8907c1de"]]);export{dt as default};
