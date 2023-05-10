<template>
  <page-container desc="基础表格的查询列表，带有常规操作。">
    <base-table>
      <template #filter>
        <f-form label-width="95px">
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
            <f-button type="primary" :loading="loading">查询</f-button>
            <f-button type="text" :icon="expand ? 'up' : 'down'" @click="expand = !expand">
              {{ expand ? '收起' : '展开' }}
            </f-button>
          </f-form-item>
        </f-form>
      </template>
      <template #action>
        <div flex="main:justify">
          <f-button type="primary" icon="plus-circle">新增</f-button>
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
        </div>
      </template>
      <f-table :columns="columns" :data="copyList" :loading="loading" border>
        <template #roles="{ row }">
          {{ roleMap[row.roles] }}
        </template>
        <template #action>
          <action-button type="text">编辑</action-button>
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
  </page-container>
</template>

<script>
import { reactive, ref, watch } from 'vue'
import { getUserList } from '@/api/modules/user.api'
import useTable from '@/hooks/service/useTable'

export default {
  name: 'SearchList',
  setup() {
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
    const { loading, list, total, getListData, pageChange, pageSizeChange } = useTable(getUserList, query)
    watch(list, val => {
      copyList.value = val.map(item => ({
        ...item,
        expand: false,
      }))
    })

    // 执行一次内容
    getListData()
    return {
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
        {
          title: '姓名',
          key: 'realName',
        },
        {
          title: '登录名',
          key: 'username',
        },
        {
          title: '邮箱',
          key: 'email',
        },
        {
          title: '角色',
          slot: 'roles',
        },
        {
          title: '出生日期',
          key: 'createDate',
        },
        {
          title: '操作',
          width: 100,
          align: 'center',
          slot: 'action',
        },
      ],
    }
  },
}
</script>
