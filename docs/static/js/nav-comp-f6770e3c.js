import{T as j}from"./theme-color-panel-94cc15fe.js";import{a9 as B,a as D,w as t,D as o,o as P,c as e,d as l,q as n,b,v as h}from"./vendor-3647c542.js";import"./index-5b318f5b.js";import"./chunk-f-ui-one-cbea08f4.js";import"./chunk-brace-c1a5251e.js";const q={name:"NavComp",components:{ThemeColorPanel:j},data(){return{isCollapse:!1,tabs:[{key:"tab0",title:"首页",noClose:!0},{key:"tab1",title:"用户管理"},{key:"tab2",title:"组织管理"},{key:"tab3",title:"系统管理"}],activeTab:"tab0",current:0}},methods:{next(){this.current===3?this.current=0:this.current+=1}}},A={class:"p10"},S={flex:"main:justify"},U={style:{width:"220px"}},E=l("span",null,"导航一",-1),L={style:{width:"calc(100% - 240px)"}},M=l("span",null,"导航一",-1),F={class:"p10"},G={style:{width:"220px"}},H={class:"p10"},I={class:"p10"},J={href:"javascript:void(0)"},K={class:"p10"};function O(Q,d,R,W,i,w){const y=o("theme-color-panel"),x=o("f-button"),g=o("f-button-group"),a=o("f-icon"),s=o("f-menu-item"),u=o("f-menu-item-group"),r=o("f-submenu"),v=o("f-menu"),c=o("f-collapse-wrap"),_=o("f-anchor-link"),C=o("f-anchor"),k=o("f-tabs"),f=o("f-dropdown-item"),T=o("f-dropdown-menu"),V=o("f-dropdown"),m=o("f-step"),z=o("f-steps"),N=o("page-container");return P(),D(N,{desc:"导航类别的组件，可验证不同主题色的正确性。"},{default:t(()=>[e(y),e(c,{title:"Menu 导航菜单",shadow:"none",class:"mb-20"},{default:t(()=>[l("div",A,[e(g,{modelValue:i.isCollapse,"onUpdate:modelValue":d[2]||(d[2]=p=>i.isCollapse=p),style:{"margin-bottom":"20px"}},{default:t(()=>[e(x,{type:i.isCollapse?"default":"primary",onClick:d[0]||(d[0]=p=>i.isCollapse=!1)},{default:t(()=>[n("展开")]),_:1},8,["type"]),e(x,{type:i.isCollapse?"primary":"default",onClick:d[1]||(d[1]=p=>i.isCollapse=!0)},{default:t(()=>[n("收起")]),_:1},8,["type"])]),_:1},8,["modelValue"]),l("div",S,[l("div",U,[e(v,{"default-active":"1",class:"b-menu-vertical-demo border",collapse:i.isCollapse},{default:t(()=>[e(r,{index:"1"},{title:t(()=>[e(a,{name:"location-fill"}),E]),default:t(()=>[e(u,null,{title:t(()=>[n("分组一")]),default:t(()=>[e(s,{index:"1-1"},{default:t(()=>[n("选项1")]),_:1}),e(s,{index:"1-2"},{default:t(()=>[n("选项2")]),_:1})]),_:1}),e(u,{title:"分组2"},{default:t(()=>[e(s,{index:"1-3"},{default:t(()=>[n("选项3")]),_:1})]),_:1}),e(r,{index:"1-4"},{title:t(()=>[n("选项4")]),default:t(()=>[e(s,{index:"1-4-1"},{default:t(()=>[n("选项1")]),_:1})]),_:1})]),_:1}),e(s,{index:"2"},{title:t(()=>[n("导航二")]),default:t(()=>[e(a,{name:"appstore-fill"})]),_:1}),e(s,{index:"3",disabled:""},{title:t(()=>[n("导航三")]),default:t(()=>[e(a,{name:"file-text"})]),_:1}),e(s,{index:"4"},{title:t(()=>[n("导航四")]),default:t(()=>[e(a,{name:"setting-fill"})]),_:1})]),_:1},8,["collapse"])]),l("div",L,[e(v,{"default-active":"1",class:"b-menu-vertical-demo border",mode:"horizontal"},{default:t(()=>[e(r,{index:"1"},{title:t(()=>[e(a,{name:"location-fill"}),M]),default:t(()=>[e(u,null,{title:t(()=>[n("分组一")]),default:t(()=>[e(s,{index:"1-1"},{default:t(()=>[n("选项1")]),_:1}),e(s,{index:"1-2"},{default:t(()=>[n("选项2")]),_:1})]),_:1}),e(u,{title:"分组2"},{default:t(()=>[e(s,{index:"1-3"},{default:t(()=>[n("选项3")]),_:1})]),_:1}),e(r,{index:"1-4"},{title:t(()=>[n("选项4")]),default:t(()=>[e(s,{index:"1-4-1"},{default:t(()=>[n("选项1")]),_:1})]),_:1})]),_:1}),e(s,{index:"2"},{title:t(()=>[n("导航二")]),default:t(()=>[e(a,{name:"appstore-fill"})]),_:1}),e(s,{index:"3",disabled:""},{title:t(()=>[n("导航三")]),default:t(()=>[e(a,{name:"file-text"})]),_:1}),e(s,{index:"4"},{title:t(()=>[n("导航四")]),default:t(()=>[e(a,{name:"setting-fill"})]),_:1})]),_:1})])])])]),_:1}),e(c,{title:"Anchor 锚点",shadow:"none",class:"mb-20"},{default:t(()=>[l("div",F,[l("div",G,[e(C,{"show-ink":"",style:{"margin-left":"20px"},"scroll-offset":100},{default:t(()=>[e(_,{href:"#ji-chu-yong-fa",title:"基础用法"}),e(_,{href:"#zi-ding-yi-tu-biao",title:"自定义图标"}),e(_,{href:"#zi-ding-yi-yan-se",title:"自定义颜色"}),e(_,{href:"#zhi-ding-gun-dong-rong-qi",title:"指定滚动容器"}),e(_,{href:"#props",title:"Props"}),e(_,{href:"#events",title:"Events"}),e(_,{href:"#anchorlink-props",title:"AnchorLink Props"})]),_:1})])])]),_:1}),e(c,{title:"Tabs 标签页",shadow:"none",class:"mb-20"},{default:t(()=>[l("div",H,[e(k,{modelValue:i.activeTab,"onUpdate:modelValue":d[3]||(d[3]=p=>i.activeTab=p),data:i.tabs},null,8,["modelValue","data"]),b(l("p",null,"首页",512),[[h,i.activeTab==="tab0"]]),b(l("p",null,"用户管理",512),[[h,i.activeTab==="tab1"]]),b(l("p",null,"组织管理",512),[[h,i.activeTab==="tab2"]]),b(l("p",null,"系统管理",512),[[h,i.activeTab==="tab3"]])])]),_:1}),e(c,{title:"Dropdown 下拉菜单",shadow:"none",class:"mb-20"},{default:t(()=>[l("div",I,[e(V,{trigger:"click",style:{"margin-left":"20px"}},{dropdown:t(()=>[e(T,null,{default:t(()=>[e(f,{selected:""},{default:t(()=>[n("选项一")]),_:1}),e(f,{disabled:""},{default:t(()=>[n("选项二")]),_:1}),e(f,null,{default:t(()=>[n("选项三")]),_:1}),e(f,{divided:""},{default:t(()=>[n("选项四")]),_:1}),e(f,null,{default:t(()=>[n("选项五")]),_:1})]),_:1})]),default:t(()=>[l("a",J,[n(" click 触发 "),e(a,{name:"down"})])]),_:1})])]),_:1}),e(c,{title:"Steps 步骤条",shadow:"none",class:"mb-20"},{default:t(()=>[l("div",K,[e(z,{current:i.current},{default:t(()=>[e(m,{title:"已完成",content:"这里是该步骤的描述信息"}),e(m,{title:"进行中",content:"这里是该步骤的描述信息"}),e(m,{title:"待进行",content:"这里是该步骤的描述信息"}),e(m,{title:"待进行",content:"这里是该步骤的描述信息"})]),_:1},8,["current"]),e(x,{type:"primary",onClick:w.next},{default:t(()=>[n("下一步")]),_:1},8,["onClick"])])]),_:1})]),_:1})}const te=B(q,[["render",O]]);export{te as default};
