<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="用户名" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="开始工作" required>
      <el-col :span="24">
        <el-form-item prop="date1">
          <el-date-picker
            v-model="ruleForm.date1"
            type="date"
            aria-label="Pick a date"
            placeholder="选择日期"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="职业方向" prop="company_path">
      <el-input
        v-model="ruleForm.company_path"
        placeholder="填写您的职业方向"
        :options="options"
      />
    </el-form-item>
    <el-form-item label="职位">
      <el-input
        v-model="ruleForm.job_name"
        placeholder="填写您的职位"
        :options="options"
      />
    </el-form-item>
    <el-form-item label="公司">
      <el-input
        v-model="ruleForm.company_name"
        placeholder="填写您的公司"
        :options="options"
      />
    </el-form-item>
    <el-form-item label="个人主页">
      <el-input
        v-model="ruleForm.personal_homepage"
        placeholder="填写您的个人主页"
        :options="options"
      />
    </el-form-item>
    <el-form-item label="个人介绍">
      <el-input v-model="ruleForm.desc" placeholder="填写您的个人介绍" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >保存修改</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from "vue";

const formSize = ref("default");
const ruleFormRef = ref(null);
const ruleForm = reactive({
  name: "Hello",
  date1: "",
  company_path: "",
  job_name: "",
  company_name: "",
  personal_homepage: "",
  desc: "",
});

const rules = reactive({
  name: [
    { required: true, message: "请输入用户名", trigger: "blur" },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "请选择开始工作日期",
      trigger: "change",
    },
  ],
  company_path: [
    { required: true, message: "请输入职业方向", trigger: "blur" },
  ],
  job_name: [
    { required: true, message: "请输入职位", trigger: "blur" },
  ],
  company_name: [
    { required: true, message: "请输入公司名称", trigger: "blur" },
  ],
  personal_homepage: [
    { required: true, message: "请输入个人主页", trigger: "blur" },
  ],
  desc: [
    { required: true, message: "请输入个人介绍", trigger: "blur" },
  ],
});

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("提交成功!");
    } else {
      console.log("提交失败!", fields);
    }
  });
};

const options = Array.from({ length: 10000 }, (_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));
</script>

<style scoped>
.demo-ruleForm {
  max-width: 600px;
  position: relative;
  left: 30%;
  transform: translateX(-50%);
  top: 10%;
}
</style>
