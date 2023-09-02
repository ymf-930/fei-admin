<template>
  <div>
    <page-wrapper v-show="!modalVisible">
      <base-table>
        <template #filter>
          <f-form label-width="95px">
            <f-form-item label="角色名称">
              <f-input v-model="query.roleName" clearable></f-input>
            </f-form-item>
            <f-form-item label="角色状态">
              <f-select v-model="query.status" clearable>
                <f-option v-for="(val, key) in statusMap" :key="key" :label="val" :value="key"></f-option>
              </f-select>
            </f-form-item>
            <f-form-item label-width="16px">
              <f-button>重置</f-button>
              <f-button type="primary" :loading="loading" @click="getListData">查询</f-button>
            </f-form-item>
          </f-form>
        </template>
        <template #action>
          <f-button type="primary" icon="plus-circle" @click="handleCreate">新增</f-button>
        </template>
        <f-table :columns="columns" :data="copyList" :loading="loading" size='small' border>
          <template #status="{ row }">
            {{ statusMap[row.status] }}
          </template>
          <template #action="{ row }">
            <action-button
              type="text"
              icon="edit-square"
              is-icon
              tooltip="编辑"
              @click="handleEdit(row)"
            ></action-button>
            <f-divider type="vertical"></f-divider>
            <action-button
              type="text"
              icon="delete"
              color="danger"
              is-icon
              tooltip="删除"
              confirm
              @click="handleDelete(row)"
            ></action-button>
          </template>
        </f-table>
        <template #page>
          <f-page
            :total="total"
            :current="query.page"
            :page-size="query.size"
            show-sizer
            show-total
            @change="pageChange"
            @size-change="pageSizeChange"
          ></f-page>
        </template>
      </base-table>
    </page-wrapper>

    <page-wrapper
      v-if="modalVisible"
      :title="`${pageStatus.isCreate ? '新增' : '修改'}角色`"
      @back="handleCancel"
      show-close
      @close="handleCancel"
    >
      <template #rightFooter>
        <div flex="main:right">
          <f-button @click="handleCancel">取 消</f-button>
          <f-button type="primary" :loading="editLoading" @click="handleSubmit">确 定</f-button>
        </div>
      </template>

      <f-form ref="formRef" :model="role" :rules="ruleValidate" label-width="100px" label-suffix=":">
        <f-collapse-wrap title="基础信息" shadow="none">
          <div class="p16">
            <f-form-item label="角色名称" prop="roleName">
              <f-input v-model="role.roleName" placeholder="输入角色名称" clearable></f-input>
            </f-form-item>
            <f-form-item label="角色编码" prop="roleCode">
              <f-input v-model="role.roleCode" placeholder="输入角色编码" clearable></f-input>
            </f-form-item>
            <f-form-item label="角色状态">
              <f-switch size="large" v-model="role.status" true-value="1" false-value="0">
                <template #open><span>启用</span></template>
                <template #close><span>禁用</span></template>
              </f-switch>
            </f-form-item>
          </div>
        </f-collapse-wrap>
      </f-form>
    </page-wrapper>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'
import useTable from '@/hooks/service/useTable'
import { getRoleList } from '@/api/modules/role.api'
import useForm from '@/hooks/service/useForm'
import { Message } from 'f-ui-one'

export default {
  name: 'Role',
  setup() {
    const query = reactive({
      page: 1,
      size: 10,
      roleName: '',
      status: '',
    })
    const copyList = ref([])
    const role = ref({})
    const { loading, list, total, getListData, pageChange, pageSizeChange } = useTable(getRoleList, query)
    const {
      formRef,
      editStatus,
      pageStatus,
      editLoading,
      openCreate,
      openEdit,
      backNormal,
      submitForm,
      resetForm,
      setBtnLoading,
      modalVisible,
    } = useForm()

    watch(
      () => list.value,
      val => {
        copyList.value = val
      },
    )

    // 执行一次内容
    getListData()

    function handleCreate() {
      role.value = {
        roleName: '',
        roleCode: '',
        status: '1',
      }
      openCreate()
    }

    function handleEdit(row) {
      role.value = {
        ...row,
      }
      openEdit()
    }

    function handleCancel() {
      role.value = {}
      backNormal()
    }

    function handleDelete() {
      Message.success('删除成功！')
      getListData()
    }

    function handleSubmit() {
      submitForm(() => {
        setBtnLoading(true)
        const status = pageStatus.value
        setTimeout(() => {
          Message.success(`${status.isCreate ? '新增' : '修改'}成功！`)
          setBtnLoading(false)
          backNormal()
          getListData()
        }, 1000)
      })
    }

    return {
      statusMap: {
        0: '禁用',
        1: '启用',
      },
      columns: [
        {
          title: '角色名称',
          key: 'roleName',
        },
        {
          title: '角色编码',
          key: 'roleCode',
        },
        {
          title: '状态',
          slot: 'status',
        },
        {
          title: '创建日期',
          key: 'createDate',
        },
        {
          title: '操作',
          width: 100,
          align: 'center',
          slot: 'action',
        },
      ],
      // form
      formRef,
      role,
      editStatus,
      pageStatus,
      editLoading,
      openCreate,
      openEdit,
      backNormal,
      submitForm,
      resetForm,
      ruleValidate: {
        roleName: [{ required: true, message: '角色名称必填', trigger: 'blur' }],
        roleCode: [{ required: true, message: '角色编码必填', trigger: 'blur' }],
      },
      // list
      query,
      loading,
      total,
      copyList,
      getListData,
      pageChange,
      pageSizeChange,
      modalVisible,
      handleCreate,
      handleCancel,
      handleEdit,
      handleSubmit,
      handleDelete,
    }
  },
}
</script>
