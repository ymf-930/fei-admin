import{n as z,r as L,t as y}from"./index-81afa469.js";import{m as o,B as C,C as R}from"./vendor-23852376.js";function S(l,t={},r=!0,c="rows"){const a=o(null),f=o(!1),i=o(0),u=o([]);async function n(){if(!!l){try{s(!0);const e=await l(t);u.value=c?e[c]:e,i.value=r?e.total||0:e.list.length}catch(e){y("userTable/getListData",e)}s(!1)}}async function v(){r&&t.page&&(t.page=1),await n()}function s(e){f.value=e}async function h(e){t.page=e,await n()}async function p(e){t.page=1,t.size=e,await n()}function g(){var d;const e=(d=a.value.value)==null?void 0:d.getBoundingClientRect();e.width,e.height}function w(){i.value=0,u.value=[]}return C(()=>{z(a.value,g)}),R(()=>{L(a.value,g)}),{tableWrapRef:a,loading:f,total:i,list:u,getListData:n,handleSearch:v,setLoading:s,pageChange:h,pageSizeChange:p,closePage:w}}export{S as u};
