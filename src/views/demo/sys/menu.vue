<template>
  <page-container inner-scroll hide-header>
    <page-cube-wrapper>
      <template #left>
        <base-tree
          ref="treeRef"
          tree-title="菜单列表"
          show-filter
          title-key="title"
          :fetch="getMenuTree"
          @select-change="handleSelect"
          @command="handleCommand"
        >
          <template #ctrl>
            <f-dropdown-item name="root" divided>增加根节点</f-dropdown-item>
            <f-dropdown-item name="child" :disabled="!currentNode">增加子节点</f-dropdown-item>
          </template>
        </base-tree>
      </template>
      <div class="pl-16">
        <f-card :bordered="false" class="card-panel" shadow="never">
          <template #header>
            <div flex="main:justify cross:center" style="font-weight: normal">
              <div class="top">
                <iconfont icon="menu" color="primary" bg round></iconfont>
                <span class="ml-5">编辑菜单</span>
              </div>
            </div>
          </template>
          <div style="position: relative; min-height: 100px; overflow: hidden">
            <transition name="fade-in">
              <div style="position: absolute; width: 100%">
                <f-alert v-show="pageStatus.isNormal">点选左侧部门，进行编辑操作</f-alert>
              </div>
            </transition>
            <transition name="fade-transverse">
              <div class="pt-8" v-if="!pageStatus.isNormal">
                <f-row v-if="copyNode.path !== 'root'">
                  <f-col span="14">
                    <f-form ref="formRef" :model="copyNode" :rules="ruleValidate" label-width="100px" label-suffix=":">
                      <f-form-item label="父级菜单">
                        <f-input v-model="copyNode.parentName" disabled></f-input>
                      </f-form-item>
                      <f-form-item label="菜单名称" prop="title">
                        <f-input v-model="copyNode.title" placeholder="输入菜单名称" clearable></f-input>
                      </f-form-item>
                      <f-form-item label="菜单路径" prop="path">
                        <f-input v-model="copyNode.path" placeholder="输入菜单路径" clearable></f-input>
                      </f-form-item>
                      <f-form-item label="菜单图标">
                        <f-icon-select v-model="copyNode.icon"></f-icon-select>
                      </f-form-item>
                      <f-form-item>
                        <f-button type="primary" @click="handleSubmit" :loading="editLoading">
                          {{ pageStatus.isCreate ? '提交数据' : '更新数据' }}
                        </f-button>
                        <f-button @click="handleResetForm">重置</f-button>
                      </f-form-item>
                    </f-form>
                  </f-col>
                </f-row>
                <f-alert v-else type="error" show-icon>系统菜单根节点不可编辑</f-alert>
              </div>
            </transition>
          </div>
        </f-card>
      </div>
    </page-cube-wrapper>
  </page-container>
</template>

<script>
import { getMenuTree } from '@/api/modules/menu.api'
import { ref } from 'vue'
import { deepCopy } from '@/utils/util'
import useForm from '@/hooks/service/useForm'
import { Message } from 'f-ui-one'

export default {
  name: 'Menu',
  setup() {
    const treeRef = ref(null)

    const currentNode = ref(null)
    const copyNode = ref({})

    const flatStateBuffer = ref({})

    const { formRef, editStatus, pageStatus, editLoading, openCreate, openEdit, backNormal, submitForm, resetForm } =
      useForm()

    function handleSelect(node, flatState) {
      if (node.selected) {
        currentNode.value = node
        flatStateBuffer.value = flatState
        handleEdit()
      } else {
        cancel()
      }
    }

    function handleCommand(name) {
      if (name === 'root') {
        handleCreate()
      }
      if (name === 'child') {
        handleCreate()
        const current = currentNode.value
        copyNode.value.parentPath = current.path
        copyNode.value.parentName = current.title
      }
    }

    function resetFormData(edit = 'edit') {
      if (edit === 'edit') {
        const flatState = flatStateBuffer.value
        const current = currentNode.value
        const parentKey = flatState[current.nodeKey].parent
        const parentNode = parentKey || parentKey === 0 ? flatState[parentKey].node : {}
        copyNode.value = current
          ? {
              ...deepCopy(current),
              parentPath: parentKey === 0 ? '' : parentNode.path,
              parentName: parentNode.title,
            }
          : {}
        return
      }
      // 创建模式
      copyNode.value = {
        path: '',
        title: '',
        icon: '',
        parentPath: '',
        parentName: undefined,
      }
    }

    function cancel() {
      currentNode.value = null
      flatStateBuffer.value = null
      copyNode.value = {}
      backNormal()
    }

    function handleCreate() {
      resetFormData('create')
      openCreate()
    }

    function handleEdit() {
      resetFormData('edit')
      openEdit()
    }

    function handleSubmit() {
      submitForm(() => {
        editLoading.value = true
        const status = pageStatus.value
        setTimeout(() => {
          Message.success(`${status.isCreate ? '新增' : '修改'}成功！`)
          backNormal()
          const keys = currentNode.value ? [currentNode.value.nodeKey] : []
          treeRef.value && treeRef.value.reloadTree(keys)
          editLoading.value = false
        }, 1000)
      })
    }

    function handleResetForm() {
      resetFormData(editStatus.value)
      resetForm()
    }

    return {
      // tree
      treeRef,
      getMenuTree,
      currentNode,
      copyNode,
      handleSelect,
      handleSubmit,
      handleResetForm,
      handleCommand,

      // form
      formRef,
      pageStatus,
      editLoading,
      submitForm,
      resetForm,
      ruleValidate: {
        path: [{ required: true, message: '菜单路径必填', trigger: 'blur' }],
        title: [{ required: true, message: '菜单名称必填', trigger: 'blur' }],
      },
    }
  },
}
</script>
