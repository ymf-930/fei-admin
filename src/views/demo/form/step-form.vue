<template>
  <page-container desc="将一个冗长或用户不熟悉的表单任务分成多个步骤，分布提交，确保用户操作面板的精简。" bg>
    <f-row type="flex" justify="center" class="mb-20">
      <f-col span="12">
        <f-steps :current="step">
          <f-step title="填写转账信息"></f-step>
          <f-step title="确认转账信息"></f-step>
          <f-step title="完成"></f-step>
        </f-steps>
      </f-col>
    </f-row>
    <template v-if="step === 0">
      <f-row type="flex" justify="center">
        <f-col span="12">
          <f-form :model="form1" :rules="rules1" ref="form1Ref" label-width="100px" label-suffix=":">
            <f-form-item prop="payment" label="付款账户">
              <f-select v-model="form1.payment" placeholder="请选择付款账户" clearable>
                <f-option label="1950714773@qq.com" value="1950714773@qq.com"></f-option>
              </f-select>
            </f-form-item>
            <f-form-item prop="collection" label="收款账户">
              <f-input v-model="form1.collection">
                <template #prepend>
                  <f-select v-model="form1.collectionType" style="width: 100px">
                    <f-option label="wechat" value="微信"></f-option>
                    <f-option label="alipay" value="支付宝"></f-option>
                  </f-select>
                </template>
              </f-input>
            </f-form-item>
            <f-form-item prop="name" label="收款人名称">
              <f-input v-model="form1.name"></f-input>
            </f-form-item>
            <f-form-item prop="money" label="金额">
              <f-input-number
                :max="10000"
                v-model="form1.money"
                :formatter="value => `¥ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
                :parser="value => value.replace(/¥s?|(,*)/g, '')"
              ></f-input-number>
            </f-form-item>
            <f-form-item>
              <f-button type="primary" @click="next">下一步</f-button>
            </f-form-item>
          </f-form>
        </f-col>
      </f-row>
    </template>
    <template v-if="step === 1">
      <f-row type="flex" justify="center">
        <f-col span="12">
          <f-alert show-icon closable>确认支付后，资金会直接打入对方账户，无法退回。</f-alert>
          <f-form :model="form2" ref="form2Ref" label-width="100px" label-suffix=":">
            <f-form-item label="付款账户">
              <label>{{ form1.payment }}</label>
            </f-form-item>
            <f-form-item label="收款账户">
              <label>{{ form1.collection }}</label>
            </f-form-item>
            <f-form-item label="收款人名称">
              <label>{{ form1.name }}</label>
            </f-form-item>
            <f-form-item label="金额">
              <label>¥ {{ form1.money }}</label>
            </f-form-item>
            <f-divider></f-divider>
            <f-form-item
              label="支付密码"
              prop="password"
              :rules="{ required: true, message: '域名不能为空', trigger: 'blur' }"
            >
              <f-input v-model="form2.password" type="password"></f-input>
            </f-form-item>
            <f-form-item>
              <f-button type="primary" :loading="loading" @click="submitForm">提 交</f-button>
              <f-button @click="prev">上一步</f-button>
            </f-form-item>
          </f-form>
        </f-col>
      </f-row>
    </template>
    <template v-if="step === 2">
      <result status="success">
        <template #desc>预计2小时内到账</template>
        <template #extra>
          <f-form label-width="100px" label-suffix=":">
            <f-form-item label="付款账户">
              <label>{{ form1.payment }}</label>
            </f-form-item>
            <f-form-item label="收款账户">
              <label>{{ form1.collection }}</label>
            </f-form-item>
            <f-form-item label="收款人名称">
              <label>{{ form1.name }}</label>
            </f-form-item>
            <f-form-item label="金额">
              <label>¥ {{ form1.money }}</label>
            </f-form-item>
          </f-form>
        </template>
        <template #actions>
          <f-button type="primary" @click="step = 0">再转一笔</f-button>
          <f-button>查看账单</f-button>
        </template>
      </result>
    </template>

    <!--表单的说明信息等-->
    <div v-if="step === 0">
      <f-divider></f-divider>
      <f-alert>
        说明
        <template #desc>
          <p>如果需要，这里可以放置一些表单字段的解释或者说明信息。</p>
          <p>如果需要，这里可以放置一些表单字段的解释或者说明信息。</p>
        </template>
      </f-alert>
    </div>
  </page-container>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'StepForm',
  setup() {
    const step = ref(0)
    const form1Ref = ref(null)
    const form2Ref = ref(null)
    const form1 = ref({
      payment: '1950714773@qq.com',
      collectionType: 'wechat',
      collection: 'bin@.admin',
      name: 'Yang',
      money: 100,
    })
    const form2 = ref({
      password: '123456',
    })
    const loading = ref(false)

    function next() {
      if (!form1Ref.value) return
      form1Ref.value.validate(valid => {
        if (valid) {
          step.value = 1
        }
      })
    }

    function prev() {
      step.value = 0
    }

    function submitForm() {
      if (!form2Ref.value) return
      form2Ref.value.validate(valid => {
        if (valid) {
          loading.value = true
          setTimeout(() => {
            step.value = 2
            loading.value = false
          }, 1500)
        }
      })
    }

    return {
      step,
      form1Ref,
      form2Ref,
      form1,
      rules1: {
        payment: [{ required: true, message: '请选择付款账户', trigger: 'change' }],
        collection: [{ required: true, message: '请输入收款账户', trigger: 'blur' }],
        name: [{ required: true, message: '请输入收款人姓名', trigger: 'blur' }],
        money: [{ required: true, type: 'number', message: '请输入正确的金额', trigger: 'blur' }],
      },
      form2,
      loading,
      next,
      prev,
      submitForm,
    }
  },
}
</script>
