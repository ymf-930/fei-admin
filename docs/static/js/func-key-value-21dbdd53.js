import{a9 as m,k as _,j as g,D as n,a as v,w as o,o as x,c as e,d as h,q as I}from"./vendor-4c44c8da.js";import"./chunk-brace-bde7130a.js";const w=`import Sortable from 'sortablejs'
import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * sortable hooks，用于创建拖拽排序列表
 * @param list 列表list<ref>
 * @param endFun 拖拽结束事件函数
 * @param option 其他sortable配置项
 */
export default function useSortable(list, endFun, option = {}) {
  const defaultOptions = {
    animation: 150,
    ghostClass: 'blue-background-class',
    // ************* 拖动对象移动样式
    dragClass: 'drag-item-class',
    // ************* 禁用html5原生拖拽行为
    forceFallback: true,
    handle: '.drag'
  }
  const listRef = ref(null)
  let sortInstance = null
  onMounted(() => {
    if (sortInstance) sortInstance.destroy()
    const el = listRef.value
    if (!el) return
    sortInstance = Sortable.create(el, {
      ...defaultOptions,
      ...option,
      onUpdate: ({ newIndex, oldIndex }) => {
        const $li = el.children[newIndex]
        const $oldLi = el.children[oldIndex]
        // 先删除移动的节点
        el.removeChild($li)
        // 再插入移动的节点到原有节点，还原了移动的操作
        if (newIndex > oldIndex) {
          el.insertBefore($li, $oldLi)
        } else {
          el.insertBefore($li, $oldLi.nextSibling)
        }
        // 更新items数组
        const targetRow = list.value.splice(oldIndex, 1)[0]
        list.value.splice(newIndex, 0, targetRow)
        // 下一个tick就会走patch更新
      },
      onEnd: (evt) => {
        endFun && endFun()
      }
    })
  })
  onBeforeUnmount(() => {
    if (sortInstance) {
      sortInstance.destroy()
      sortInstance = null
    }
  })
  return {
    listRef
  }
}
`,k={name:"FuncKeyValue",setup(){const a=_([{key:"1",value:"a"},{key:"2",value:"b"},{key:"3",value:"c"}]),t=g(()=>JSON.stringify(a.value,null,2));return{mapping:a,mappingJson:t,STR:w}}},y={class:"p16"};function b(a,t,S,l,V,B){const i=n("key-value-mapping"),c=n("f-divider"),s=n("f-ace-editor"),r=n("f-collapse-wrap"),d=n("f-col"),p=n("f-row"),u=n("page-container");return x(),v(u,{desc:"基础映射配置示例，可拖动排序，并封装了通用的hook钩子函数，可进行复用。"},{default:o(()=>[e(p,{gutter:16},{default:o(()=>[e(d,{span:"12"},{default:o(()=>[e(r,{title:"映射配置",shadow:"none"},{default:o(()=>[h("div",y,[e(i,{modelValue:l.mapping,"onUpdate:modelValue":t[0]||(t[0]=f=>l.mapping=f)},null,8,["modelValue"]),e(c,{align:"left"},{default:o(()=>[I("实际存储值")]),_:1}),e(s,{"model-value":l.mappingJson,readonly:""},null,8,["model-value"])])]),_:1})]),_:1}),e(d,{span:"12"},{default:o(()=>[e(r,{title:"useSortable",shadow:"none"},{default:o(()=>[e(s,{"model-value":l.STR,lang:"typescript",readonly:"",theme:"sqlserver",height:"850px",snippets:!1},null,8,["model-value"])]),_:1})]),_:1})]),_:1})]),_:1})}const F=m(k,[["render",b]]);export{F as default};
