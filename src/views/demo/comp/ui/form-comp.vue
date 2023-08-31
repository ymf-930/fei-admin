<template>
  <page-container desc="表单类别的组件...">
    <f-collapse-wrap title="Form 表单输入" shadow="none" class="mb-20">
      <div class="p20" flex="main:center">
        <div style="width: 800px">
          <f-form ref="ruleForm" :model="form" label-width="85px" :rules="ruleValidate">
            <f-form-item prop="name" label="名称">
              <f-input v-model="form.name" placeholder="用户名"></f-input>
            </f-form-item>
            <f-form-item prop="mail" label="邮箱">
              <f-input v-model="form.mail" placeholder="邮箱"></f-input>
            </f-form-item>
            <f-row>
              <f-col :span="12">
                <f-form-item prop="age" label="年龄">
                  <f-input-number style="width: 100%" v-model="form.age" :min="0" :editable="false"></f-input-number>
                </f-form-item>
              </f-col>
              <f-col :span="12">
                <f-form-item label="户籍地" prop="region">
                  <f-select v-model="form.region" placeholder="请选择户籍地" clearable>
                    <f-option
                      v-for="item in cityList"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></f-option>
                  </f-select>
                </f-form-item>
              </f-col>
            </f-row>
            <f-row>
              <f-col :span="12">
                <f-form-item label="出生日期" prop="birthday">
                  <f-date-picker v-model="form.birthday" type="datetime"></f-date-picker>
                </f-form-item>
              </f-col>
              <f-col :span="12">
                <f-form-item label="出生日期" prop="birthday">
                  <f-date-picker
                    v-model="form.birthday"
                    type="date"
                    placeholder="出生日期"
                    :shortcuts="shortcuts"
                  ></f-date-picker>
                </f-form-item>
              </f-col>
            </f-row>
            <f-form-item label="爱好" prop="hobby">
              <f-checkbox-group v-model="form.hobby">
                <f-checkbox label="打游戏" name="hobby"></f-checkbox>
                <f-checkbox label="看电影" name="hobby"></f-checkbox>
                <f-checkbox label="打篮球/运动" name="hobby"></f-checkbox>
                <f-checkbox label="看书" name="hobby"></f-checkbox>
              </f-checkbox-group>
            </f-form-item>
            <f-form-item label="性别" prop="sex">
              <f-radio-group v-model="form.sex">
                <f-radio label="男" value="male"></f-radio>
                <f-radio label="女" value="female"></f-radio>
              </f-radio-group>
            </f-form-item>
            <f-form-item label="状态" prop="status">
              <f-switch v-model="form.status" true-value="enable" false-value="disable" size="large">
                <template #open><span>启用</span></template>
                <template #close><span>禁用</span></template>
              </f-switch>
            </f-form-item>
            <f-form-item>
              <f-button type="primary" @click="submitForm('ruleForm')">提交</f-button>
              <f-button @click="resetForm('ruleForm')">重置</f-button>
            </f-form-item>
          </f-form>
        </div>
      </div>
    </f-collapse-wrap>
  </page-container>
</template>

<script>

export default {
  name: 'FormComp',
  components: {},
  data() {
    return {
      cityList: [
        { value: 'beijing', label: '北京' },
        { value: 'nanjing', label: '南京' },
        { value: 'shanghai', label: '上海' },
        { value: 'xuzhou', label: '徐州' },
        { value: 'guangzhou', label: '广州' },
        { value: 'shenzhen', label: '深圳' },
      ],
      shortcuts: [
        {
          text: '今日',
          value: new Date(),
        },
        {
          text: '昨天',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          })(),
        },
        {
          text: '一周前',
          value: (() => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          })(),
        },
      ],
      form: {
        name: '',
        age: null,
        mail: '',
        region: '',
        hobby: [],
        sex: '',
        status: 'disable',
        birthday: '',
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        region: [{ required: true, message: '户籍地不能为空', trigger: 'change' }],
        age: [
          { required: true, type: 'number', message: '年龄不为空', trigger: 'change' },
          { type: 'number', min: 18, trigger: 'change', message: '年龄必须在18以上' },
        ],
        hobby: [{ type: 'array', required: true, message: '请至少选择一个爱好', trigger: 'change' }],
        sex: [{ required: true, message: '性别必选', trigger: 'change' }],
        birthday: [{ required: true, type: 'date', message: '出生日期必选', trigger: 'blur' }],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>
