import{a as g}from"./chunk-f-ui-one-61767090.js";import{a9 as B,k as V,a as j,w as o,D as r,o as N,c as e,q as y,d as h}from"./vendor-e5006905.js";import"./chunk-brace-c1a5251e.js";const z={name:"BaseForm",setup(){const m=V(null),a=V({name:"",age:null,mail:"",region:"",hobby:[],sex:"",status:"disable",birthday:""});function f(){m.value.validate(i=>{if(i)g.success("success submit!!");else return g.error("error submit!!"),!1})}function l(){m.value.resetFields()}return{formRef:m,form:a,submitForm:f,resetForm:l,ruleValidate:{name:[{required:!0,message:"用户名不能为空",trigger:"blur"}],region:[{required:!0,message:"户籍地不能为空",trigger:"change"}],age:[{required:!0,type:"number",message:"年龄不为空",trigger:"change"},{type:"number",min:18,trigger:"change",message:"年龄必须在18以上"}],hobby:[{type:"array",required:!0,message:"请至少选择一个爱好",trigger:"change"}],sex:[{required:!0,message:"性别必选",trigger:"change"}],birthday:[{required:!0,type:"date",message:"出生日期必选",trigger:"blur"}],mail:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]}}}},R=h("span",null,"启用",-1),D=h("span",null,"禁用",-1);function M(m,a,f,l,i,T){const _=r("f-input"),n=r("f-form-item"),x=r("f-input-number"),s=r("f-col"),u=r("f-option"),k=r("f-select"),b=r("f-row"),v=r("f-date-picker"),d=r("f-checkbox"),q=r("f-checkbox-group"),p=r("f-radio"),w=r("f-radio-group"),U=r("f-switch"),c=r("f-button"),F=r("f-form"),C=r("page-container");return N(),j(C,{desc:"基础表单常见于数据项较少的表单场景。",bg:""},{default:o(()=>[e(b,{type:"flex",justify:"center"},{default:o(()=>[e(s,{span:"12"},{default:o(()=>[e(F,{ref:"formRef",model:l.form,"label-width":"85px",rules:l.ruleValidate},{default:o(()=>[e(n,{prop:"name",label:"名称"},{default:o(()=>[e(_,{modelValue:l.form.name,"onUpdate:modelValue":a[0]||(a[0]=t=>l.form.name=t),placeholder:"用户名"},null,8,["modelValue"])]),_:1}),e(n,{prop:"mail",label:"邮箱"},{default:o(()=>[e(_,{modelValue:l.form.mail,"onUpdate:modelValue":a[1]||(a[1]=t=>l.form.mail=t),placeholder:"邮箱"},null,8,["modelValue"])]),_:1}),e(b,null,{default:o(()=>[e(s,{span:12},{default:o(()=>[e(n,{prop:"age",label:"年龄"},{default:o(()=>[e(x,{style:{width:"100%"},modelValue:l.form.age,"onUpdate:modelValue":a[2]||(a[2]=t=>l.form.age=t),min:0,editable:!1},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{span:12},{default:o(()=>[e(n,{label:"户籍地",prop:"region"},{default:o(()=>[e(k,{modelValue:l.form.region,"onUpdate:modelValue":a[3]||(a[3]=t=>l.form.region=t),placeholder:"请选择户籍地",clearable:""},{default:o(()=>[e(u,{label:"上海",value:"shanghai"}),e(u,{label:"北京",value:"beijing"}),e(u,{label:"南京",value:"nanjing"}),e(u,{label:"徐州",value:"xuzhou"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,{label:"出生日期",prop:"birthday"},{default:o(()=>[e(v,{modelValue:l.form.birthday,"onUpdate:modelValue":a[4]||(a[4]=t=>l.form.birthday=t),type:"date",placeholder:"出生日期"},null,8,["modelValue"])]),_:1}),e(n,{label:"爱好",prop:"hobby"},{default:o(()=>[e(q,{modelValue:l.form.hobby,"onUpdate:modelValue":a[5]||(a[5]=t=>l.form.hobby=t)},{default:o(()=>[e(d,{label:"打游戏",name:"hobby"}),e(d,{label:"看电影",name:"hobby"}),e(d,{label:"打篮球/运动",name:"hobby"}),e(d,{label:"看书",name:"hobby"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"性别",prop:"sex"},{default:o(()=>[e(w,{modelValue:l.form.sex,"onUpdate:modelValue":a[6]||(a[6]=t=>l.form.sex=t)},{default:o(()=>[e(p,{label:"男",value:"male"}),e(p,{label:"女",value:"female"})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"状态",prop:"status"},{default:o(()=>[e(U,{modelValue:l.form.status,"onUpdate:modelValue":a[7]||(a[7]=t=>l.form.status=t),"true-value":"enable","false-value":"disable",size:"large"},{open:o(()=>[R]),close:o(()=>[D]),_:1},8,["modelValue"])]),_:1}),e(n,null,{default:o(()=>[e(c,{type:"primary",onClick:l.submitForm},{default:o(()=>[y("提交")]),_:1},8,["onClick"]),e(c,{onClick:l.resetForm},{default:o(()=>[y("重置")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1})}const H=B(z,[["render",M]]);export{H as default};
