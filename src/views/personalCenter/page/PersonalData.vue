<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
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
          <el-input
            v-model="ruleForm.desc"
            placeholder="填写您的个人介绍"
            type="textarea"
          />
        </el-form-item>
        <el-form-item label="兴趣标签" prop="interests">
          <div class="interest-tags">
            <el-check-tag
              v-for="tag in interestOptions"
              :key="tag.value"
              :checked="ruleForm.interests.includes(tag.value)"
              @change="(checked) => handleChange(tag.value, checked)"
            >
              {{ tag.label }}
            </el-check-tag>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >保存修改</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
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
  interests: [], // 新增兴趣标签字段
});

const rules = reactive({
  name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
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
  job_name: [{ required: true, message: "请输入职位", trigger: "blur" }],
  company_name: [
    { required: true, message: "请输入公司名称", trigger: "blur" },
  ],
  personal_homepage: [
    { required: true, message: "请输入个人主页", trigger: "blur" },
  ],
  desc: [{ required: true, message: "请输入个人介绍", trigger: "blur" }],
  interests: [
    {
      type: "array",
      required: true,
      message: "���至少选择一个兴趣标签",
      trigger: "change",
    },
  ],
});

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("提交成功!");
      console.log(ruleForm); // 打印表单数据，包括兴趣标签
    } else {
      console.log("提交失败!", fields);
    }
  });
};

const options = Array.from({ length: 10000 }, (_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));

// 更新后的兴趣标签选项
const interestOptions = [
  { value: "环保倡导", label: "环保倡导" },
  { value: "教育扶贫", label: "教育扶贫" },
  { value: "动物保护", label: "动物保护" },
  { value: "志愿服务", label: "志愿服务" },
  { value: "健康与卫生", label: "健康与卫生" },
  { value: "文化传播", label: "文化传播" },
  { value: "灾害救援", label: "灾害救援" },
  { value: "社会公平", label: "社会公平" },
  { value: "心理援助", label: "心理援助" },
  { value: "可再生能源", label: "可再生能源" },
  { value: "国际援助", label: "国际援助" },
  { value: "残障人士关爱", label: "残障人士关爱" },
  { value: "老年人关怀", label: "老年人关怀" },
  { value: "儿童权益保护", label: "儿童权益保护" },
  { value: "性别平等", label: "性别平等" },
];

const handleChange = (value, checked) => {
  const index = ruleForm.interests.indexOf(value);
  if (checked && index === -1) {
    ruleForm.interests.push(value);
  } else if (!checked && index !== -1) {
    ruleForm.interests.splice(index, 1);
  }
};
</script>

<style scoped>
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.page-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/background/image02.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: zoomInOut 14s ease-in-out infinite;
}

@keyframes zoomInOut {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.page-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, transparent 70%, white 100%);
}

.content-wrapper {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-ruleForm {
  max-width: 600px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.interest-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.el-check-tag {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
