import{u as x}from"./useTable-15f15030.js";import{g as L}from"./user.api-2e2dfda2.js";import{a as q}from"./chunk-f-ui-one-61767090.js";import{a9 as w,z as S,k as N,J as D,a as M,w as a,D as i,o as f,c as t,d as n,g as h,N as B,t as d,q as r,h as R,F as V}from"./vendor-e5006905.js";import"./index-08f965e5.js";import"./chunk-brace-c1a5251e.js";import"./chunk-mockjs-e9202629.js";const I={name:"UserList",setup(){const y=S({page:1,size:10}),c=N([]),{loading:C,list:o,total:b,getListData:k,pageChange:p,pageSizeChange:l}=x(L,y);function u(s){q.success(`复制ID：${s}成功！`)}function m(s,_){c.value[_].roles=s}return D(()=>o.value,s=>{c.value=s.map(_=>({..._,expand:!1}))}),k(),{query:y,roleMap:{admin:"管理员",user:"普通用户",op:"实施人员"},roleMapStyle:{admin:"purple",user:"blue",op:"volcano"},loading:C,list:o,copyList:c,total:b,pageChange:p,pageSizeChange:l,handleCopy:u,setRole:m}}},U={class:"list-wrap"},F={class:"list-item-meta"},T=["src"],E={class:"list-item-meta-name"},J={class:"list-item-id"},j={class:"list-item-email mt-8"},A={class:"list-item-action mt-8",flex:"cross:center"},G={key:0,class:"list-item-action mt-8"},H={class:"mt-16 t-center"};function K(y,c,C,o,b,k){const p=i("f-skeleton"),l=i("f-divider"),u=i("f-button"),m=i("f-tag"),s=i("action-button"),_=i("f-page"),z=i("page-container");return f(),M(z,{desc:"包含信息的列表，带有常规操作。本页面也用作示例，实际操作以业务需求自行编写。",bg:""},{default:a(()=>[t(p,{loading:o.loading},{template:a(()=>[t(p,{animation:""}),t(l),t(p,{animation:""}),t(l),t(p,{animation:""}),t(l)]),default:a(()=>[n("ul",U,[(f(!0),h(V,null,B(o.copyList,(e,v)=>(f(),h("li",{key:e.id,class:"user-list-item"},[n("div",F,[n("img",{src:e.avatar,alt:"",class:"avatar"},null,8,T),n("div",E,d(e.realName),1)]),n("div",J,[n("span",null,"ID:"+d(e.id),1),t(u,{size:"mini",icon:"file-copy",onClick:g=>o.handleCopy(e.id)},{default:a(()=>[r("复制")]),_:2},1032,["onClick"])]),n("div",j,"邮箱地址："+d(e.email),1),n("div",A,[t(m,{type:e.verify?"success":"danger"},{default:a(()=>[r(d(e.verify?"已认证":"未认证"),1)]),_:2},1032,["type"]),t(m,{type:o.roleMapStyle[e.roles]},{default:a(()=>[r(d(o.roleMap[e.roles]),1)]),_:2},1032,["type"]),t(u,{icon:e.expand?"minus-square":"plus-square",size:"small",style:{"margin-left":"16px"},onClick:g=>e.expand=!e.expand},{default:a(()=>[r(d(e.expand?"收起操作":"展开操作"),1)]),_:2},1032,["icon","onClick"])]),e.expand?(f(),h("div",G,[t(s,{"button-props":{type:e.roles!=="admin"?"primary":null,size:"mini",disabled:e.roles==="admin"},onClick:g=>o.setRole("admin",v),message:"设置角色为管理员吗？",confirm:""},{default:a(()=>[r(" 管理员 ")]),_:2},1032,["button-props","onClick"]),t(l,{type:"vertical"}),t(s,{"button-props":{type:e.roles!=="user"?"primary":null,size:"mini",disabled:e.roles==="user"},onClick:g=>o.setRole("user",v),message:"设置角色为普通用户吗？",confirm:""},{default:a(()=>[r(" 普通用户 ")]),_:2},1032,["button-props","onClick"]),t(l,{type:"vertical"}),t(s,{"button-props":{type:e.roles!=="op"?"primary":null,size:"mini",disabled:e.roles==="op"},onClick:g=>o.setRole("op",v),message:"设置角色为实施人员吗？",confirm:""},{default:a(()=>[r(" 实施人员 ")]),_:2},1032,["button-props","onClick"])])):R("",!0)]))),128))])]),_:1},8,["loading"]),n("div",H,[t(_,{total:o.total,current:o.query.page,"onUpdate:current":c[0]||(c[0]=e=>o.query.page=e),"page-size":o.query.size,"show-elevator":"","show-sizer":"","show-total":"",onChange:o.pageChange,onSizeChange:o.pageSizeChange},null,8,["total","current","page-size","onChange","onSizeChange"])])]),_:1})}const $=w(I,[["render",K],["__scopeId","data-v-c4716b4e"]]);export{$ as default};
