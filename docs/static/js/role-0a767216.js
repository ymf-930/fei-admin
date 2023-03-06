import{a9 as M,A as R,m as z,K as T,E as a,o as k,a as L,k as j,v as A,c as o,w as l,f as D,j as K,F as O,O as G,e as c,t as H,b as V}from"./vendor-23852376.js";import{u as I}from"./useTable-ad617043.js";import{j as J}from"./index-81afa469.js";import{u as P}from"./useForm-0126ab8a.js";import{a as B}from"./chunk-bin-ui-next-2203239f.js";import"./chunk-brace-bd816051.js";function Q(){return J({url:"/role/list",method:"get"})}const W={name:"Role",setup(){const v=R({page:1,size:10,roleName:"",status:""}),n=z([]),u=z({}),{loading:e,list:S,total:q,getListData:r,pageChange:i,pageSizeChange:y}=I(Q,v),{formRef:w,editStatus:s,pageStatus:m,editLoading:N,openCreate:_,openEdit:p,backNormal:b,submitForm:g,resetForm:h,setBtnLoading:C,modalVisible:x}=P();T(()=>S.value,f=>{n.value=f}),r();function t(){u.value={roleName:"",roleCode:"",status:"1"},_()}function d(f){u.value={...f},p()}function E(){u.value={},b()}function F(){B.success("\u5220\u9664\u6210\u529F\uFF01"),r()}function U(){g(()=>{C(!0);const f=m.value;setTimeout(()=>{B.success(`${f.isCreate?"\u65B0\u589E":"\u4FEE\u6539"}\u6210\u529F\uFF01`),C(!1),b(),r()},1e3)})}return{statusMap:{0:"\u7981\u7528",1:"\u542F\u7528"},columns:[{title:"\u89D2\u8272\u540D\u79F0",key:"roleName"},{title:"\u89D2\u8272\u7F16\u7801",key:"roleCode"},{title:"\u72B6\u6001",slot:"status"},{title:"\u521B\u5EFA\u65E5\u671F",key:"createDate"},{title:"\u64CD\u4F5C",width:100,align:"center",slot:"action"}],formRef:w,role:u,editStatus:s,pageStatus:m,editLoading:N,openCreate:_,openEdit:p,backNormal:b,submitForm:g,resetForm:h,ruleValidate:{roleName:[{required:!0,message:"\u89D2\u8272\u540D\u79F0\u5FC5\u586B",trigger:"blur"}],roleCode:[{required:!0,message:"\u89D2\u8272\u7F16\u7801\u5FC5\u586B",trigger:"blur"}]},query:v,loading:e,total:q,copyList:n,getListData:r,pageChange:i,pageSizeChange:y,modalVisible:x,handleCreate:t,handleCancel:E,handleEdit:d,handleSubmit:U,handleDelete:F}}},X=c("\u91CD\u7F6E"),Y=c("\u67E5\u8BE2"),Z=c("\u65B0\u589E"),$={flex:"main:right"},ee=c("\u53D6 \u6D88"),oe=c("\u786E \u5B9A"),le={class:"p16"},te=V("span",null,"\u542F\u7528",-1),ae=V("span",null,"\u7981\u7528",-1);function ne(v,n,u,e,S,q){const r=a("b-input"),i=a("b-form-item"),y=a("b-option"),w=a("b-select"),s=a("b-button"),m=a("b-form"),N=a("b-page"),_=a("action-button"),p=a("b-divider"),b=a("b-table"),g=a("base-table"),h=a("page-container"),C=a("b-switch"),x=a("b-collapse-wrap");return k(),L("div",null,[j(o(h,{"inner-scroll":""},{header:l(()=>[o(m,{"label-width":"95px"},{default:l(()=>[o(i,{label:"\u89D2\u8272\u540D\u79F0"},{default:l(()=>[o(r,{modelValue:e.query.roleName,"onUpdate:modelValue":n[0]||(n[0]=t=>e.query.roleName=t),clearable:""},null,8,["modelValue"])]),_:1}),o(i,{label:"\u89D2\u8272\u72B6\u6001"},{default:l(()=>[o(w,{modelValue:e.query.status,"onUpdate:modelValue":n[1]||(n[1]=t=>e.query.status=t),clearable:""},{default:l(()=>[(k(!0),L(O,null,G(e.statusMap,(t,d)=>(k(),D(y,{key:d,label:t,value:d},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(i,null,{default:l(()=>[o(s,null,{default:l(()=>[X]),_:1}),o(s,{type:"primary",loading:e.loading,onClick:e.getListData},{default:l(()=>[Y]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),footer:l(()=>[o(N,{total:e.total,current:e.query.page,"page-size":e.query.size,"show-sizer":"","show-total":"",onChange:e.pageChange,onSizeChange:e.pageSizeChange},null,8,["total","current","page-size","onChange","onSizeChange"])]),default:l(()=>[o(g,null,{action:l(()=>[o(s,{type:"primary",icon:"plus-circle",onClick:e.handleCreate},{default:l(()=>[Z]),_:1},8,["onClick"])]),default:l(()=>[o(b,{columns:e.columns,data:e.copyList,loading:e.loading,border:""},{status:l(({row:t})=>[c(H(e.statusMap[t.status]),1)]),action:l(({row:t})=>[o(_,{type:"text",icon:"edit-square","is-icon":"",tooltip:"\u7F16\u8F91",onClick:d=>e.handleEdit(t)},null,8,["onClick"]),o(p,{type:"vertical"}),o(_,{type:"text",icon:"delete",color:"danger","is-icon":"",tooltip:"\u5220\u9664",confirm:"",onClick:d=>e.handleDelete(t)},null,8,["onClick"])]),_:1},8,["columns","data","loading"])]),_:1})]),_:1},512),[[A,!e.modalVisible]]),e.modalVisible?(k(),D(h,{key:0,"inner-scroll":"",title:`${e.pageStatus.isCreate?"\u65B0\u589E":"\u4FEE\u6539"}\u89D2\u8272`,"show-back":"",onBack:e.handleCancel,"show-close":"",onClose:e.handleCancel},{footer:l(()=>[V("div",$,[o(s,{onClick:e.handleCancel},{default:l(()=>[ee]),_:1},8,["onClick"]),o(s,{type:"primary",loading:e.editLoading,onClick:e.handleSubmit},{default:l(()=>[oe]),_:1},8,["loading","onClick"])])]),default:l(()=>[o(m,{ref:"formRef",model:e.role,rules:e.ruleValidate,"label-width":"100px","label-suffix":":"},{default:l(()=>[o(x,{title:"\u57FA\u7840\u4FE1\u606F",shadow:"none"},{default:l(()=>[V("div",le,[o(i,{label:"\u89D2\u8272\u540D\u79F0",prop:"roleName"},{default:l(()=>[o(r,{modelValue:e.role.roleName,"onUpdate:modelValue":n[2]||(n[2]=t=>e.role.roleName=t),placeholder:"\u8F93\u5165\u89D2\u8272\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),o(i,{label:"\u89D2\u8272\u7F16\u7801",prop:"roleCode"},{default:l(()=>[o(r,{modelValue:e.role.roleCode,"onUpdate:modelValue":n[3]||(n[3]=t=>e.role.roleCode=t),placeholder:"\u8F93\u5165\u89D2\u8272\u7F16\u7801",clearable:""},null,8,["modelValue"])]),_:1}),o(i,{label:"\u89D2\u8272\u72B6\u6001"},{default:l(()=>[o(C,{size:"large",modelValue:e.role.status,"onUpdate:modelValue":n[4]||(n[4]=t=>e.role.status=t),"true-value":"1","false-value":"0"},{open:l(()=>[te]),close:l(()=>[ae]),_:1},8,["modelValue"])]),_:1})])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","onBack","onClose"])):K("",!0)])}const me=M(W,[["render",ne]]);export{me as default};
