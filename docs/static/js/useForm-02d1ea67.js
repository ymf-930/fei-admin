import{a as g}from"./chunk-f-ui-one-61767090.js";import{k as i,j as u,J as b}from"./vendor-e5006905.js";function E(){const a=i(null),e=i("normal"),o=i(!1),l=u(()=>({isNormal:e.value==="normal",isCreate:e.value==="create",isEdit:e.value==="edit",isDetail:e.value==="detail"})),n=u(()=>l.value.isCreate||l.value.isEdit);b(()=>e.value,()=>{window.scrollTo(0,0)});function r(){e.value="detail"}function s(){e.value="create",a.value&&a.value.resetFields()}function v(){e.value="edit",a.value&&a.value.resetFields()}function c(){e.value="normal"}function f(t,p="表单校验错误，请填写正确后再次提交！"){a.value&&a.value.validate(F=>{if(F)typeof t=="function"&&t();else return g.error(p),!1})}function d(){a.value&&a.value.resetFields()}function m(t=!0){o.value=t}return{formRef:a,editLoading:o,editStatus:e,pageStatus:l,openDetail:r,modalVisible:n,setBtnLoading:m,openCreate:s,openEdit:v,backNormal:c,submitForm:f,resetForm:d}}export{E as u};
