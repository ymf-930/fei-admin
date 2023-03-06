<template>
  <page-container inner-scroll>
    <template #header>
      <f-form label-width="95px" label-position="left">
        <f-form-item label="用户名称">
          <f-input v-model="query.name" clearable></f-input>
        </f-form-item>
        <f-form-item label="用户角色">
          <f-select v-model="query.roles" clearable>
            <f-option v-for="(val, key) in roleMap" :key="key" :label="val" :value="key"></f-option>
          </f-select>
        </f-form-item>
        <template v-if="expand">
          <f-form-item label="状态">
            <f-select v-model="query.status" clearable>
              <f-option label="启用" value="1"></f-option>
              <f-option label="禁用" value="0"></f-option>
            </f-select>
          </f-form-item>
          <f-form-item label="邮箱">
            <f-input v-model="query.email" clearable></f-input>
          </f-form-item>
          <f-form-item label="日期">
            <f-date-picker v-model="query.date" clearable></f-date-picker>
          </f-form-item>
        </template>
        <f-form-item>
          <f-button>重置</f-button>
          <f-button type="primary" :loading="loading" @click="getListData">查询</f-button>
          <f-button type="text" :icon="expand ? 'up' : 'down'" @click="expand = !expand">
            {{ expand ? '收起' : '展开' }}
          </f-button>
        </f-form-item>
      </f-form>
    </template>
    <template #footer>
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

    <page-cube-wrapper>
      <template #left>
        <base-tree
          ref="treeRef"
          tree-title="部门列表"
          show-filter
          :fetch="getDepartTree"
          @select-change="handleSelect"
          width="240px"
        ></base-tree>
      </template>
      <base-table class="pl-16">
        <template #action>
          <f-button type="primary" icon="plus-circle" @click="handleCreate">新增</f-button>
        </template>
        <template #actionRight>
          <f-dropdown style="margin-left: 20px">
            <f-button>
              更多操作
              <f-icon name="down"></f-icon>
            </f-button>
            <template #dropdown>
              <f-dropdown-menu>
                <f-dropdown-item>刷新</f-dropdown-item>
                <f-dropdown-item>删除</f-dropdown-item>
              </f-dropdown-menu>
            </template>
          </f-dropdown>
        </template>
        <f-table :columns="columns" :data="copyList" :loading="loading" border>
          <template #roles="{ row }">
            {{ roleMap[row.roles] }}
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
      </base-table>
    </page-cube-wrapper>

    <f-modal :model-value="modalVisible" :title="`${pageStatus.isCreate ? '新增' : '修改'}用户`" @closed="handleCancel">
      <div v-if="modalVisible">
        <f-form ref="formRef" :model="user" :rules="ruleValidate" label-width="100px" label-suffix=":">
          <f-form-item label="所属部门">
            <f-tree-select v-model="user.depart" :data="deptTree" title-key="text"></f-tree-select>
          </f-form-item>
          <f-form-item label="姓名" prop="realName">
            <f-input v-model="user.realName" placeholder="输入姓名" clearable></f-input>
          </f-form-item>
          <f-form-item label="用户名" prop="username">
            <f-input v-model="user.username" placeholder="输入登录名" clearable></f-input>
          </f-form-item>
          <f-form-item label="邮箱">
            <f-input v-model="user.email" placeholder="输入邮箱" clearable></f-input>
          </f-form-item>
          <f-form-item label="角色">
            <f-select v-model="user.roles" placeholder="选择角色" clearable>
              <f-option v-for="(val, key) in roleMap" :key="key" :label="val" :value="key"></f-option>
            </f-select>
          </f-form-item>
        </f-form>
      </div>
      <template #footer>
        <div>
          <f-button @click="handleCancel">取 消</f-button>
          <f-button type="primary" :loading="editLoading" @click="handleSubmit">确 定</f-button>
        </div>
      </template>
    </f-modal>
  </page-container>
</template>

<script>
import { reactive, ref, watch } from 'vue'
import useTable from '@/hooks/service/useTable'
import { getUserList } from '@/api/modules/user.api'
import { getDepartTree } from '@/api/modules/depart.api'
import useForm from '@/hooks/service/useForm'
import { Message } from 'f-ui-one'
import useTree from '@/hooks/service/useTree'

export default {
  name: 'UserAccount',
  setup() {
    const treeRef = ref(null)
    const currentTreeNode = ref({})
    const query = reactive({
      page: 1,
      size: 10,
      name: '',
      roles: '',
      status: '',
      date: '',
      email: '',
    })
    const expand = ref(false)
    const copyList = ref([])
    const user = ref({})

    const { treeData: deptTree, getTreeData } = useTree(getDepartTree)
    getTreeData().then(() => console.log(deptTree.value))
    const { loading, list, total, getListData, pageChange, pageSizeChange } = useTable(getUserList, query)
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
    watch(list, val => {
      copyList.value = val.map(item => ({
        ...item,
        expand: false,
      }))
    })

    function handleSelect(node) {
      if (node.selected) {
        currentTreeNode.value = node
      }
    }

    function handleCreate() {
      user.value = {
        realName: '',
        username: '',
        email: '',
        roles: '',
        depart: '',
      }
      openCreate()
    }

    function handleEdit(row) {
      user.value = {
        ...row,
        depart: '',
      }
      openEdit()
    }

    function handleCancel() {
      user.value = {}
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

    // 执行一次内容
    getListData()

    return {
      // tree,
      treeRef,
      currentTreeNode,
      handleSelect,
      getDepartTree,
      deptTree,
      // list
      expand,
      query,
      loading,
      roleMap: {
        admin: '管理员',
        user: '普通用户',
        op: '实施人员',
      },
      total,
      copyList,
      getListData,
      pageChange,
      pageSizeChange,
      columns: [
        { title: '姓名', key: 'realName' },
        { title: '登录名', key: 'username' },
        { title: '邮箱', key: 'email' },
        { title: '角色', slot: 'roles' },
        { title: '出生日期', key: 'createDate' },
        { title: '操作', width: 100, align: 'center', slot: 'action' },
      ],
      // form
      user,
      formRef,
      editStatus,
      pageStatus,
      editLoading,
      openCreate,
      openEdit,
      backNormal,
      submitForm,
      resetForm,
      ruleValidate: {
        realName: [{ required: true, message: '真实名称必填', trigger: 'blur' }],
        username: [{ required: true, message: '用户名必填', trigger: 'blur' }],
      },
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
