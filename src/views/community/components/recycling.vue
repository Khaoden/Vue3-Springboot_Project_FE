<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-4"
  >
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <transition-group name="emoji">
        <div
          v-for="(item, index) in backgroundEmojis"
          :key="index"
          class="absolute text-4xl"
          :style="{
            left: item.x + '%',
            top: item.y + '%',
            animation: `rotate ${item.speed}s linear infinite`,
          }"
        >
          {{ item.emoji }}
        </div>
      </transition-group>
    </div>

    <div
      class="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full relative z-10 backdrop-blur-sm"
    >
      <h1 class="text-3xl font-bold text-center mb-6 text-green-700">
        💞益回收
      </h1>
      <p class="text-center mb-8 text-gray-600">
        请将您的旧物信息填写完整，我们将尽快处理。
      </p>
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="✨️旧物分类">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="💻️电子产品" value="electronicProduct" />
            <el-option label="👕衣物" value="clothes" />
            <el-option label="📖书籍" value="book" />
            <el-option label="🧸其他" value="another" />
          </el-select>
        </el-form-item>

        <el-form-item label="📃旧物描述">
          <el-input type="textarea" />
        </el-form-item>

        <el-form-item label="📸上传图片">
          <el-upload
            class="upload-demo"
            drag
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">将图片拖至此处或<em>点击上传</em></div>
            <template #tip>
              <div class="el-upload__tip">小于500kb的jpg/png文件</div>
            </template>
          </el-upload>
        </el-form-item>

        <el-form-item label="😁您的姓名">
          <el-input />
        </el-form-item>

        <el-form-item label="🤗您的性别">
          <el-radio-group>
            <el-radio value="1">🙋‍♂️男</el-radio>
            <el-radio value="0">🙋‍♀️女</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="📞电话号码">
          <el-input />
        </el-form-item>

        <el-form-item label="📧邮箱地址">
          <el-input />
        </el-form-item>

        <el-form-item label="💌爱心寄语">
          <el-input type="textarea" />
        </el-form-item>
      </el-form>
      <el-button type="success" round size="large">提交</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";

const emojis = [
  "♻️",
  "🌱",
  "🌿",
  "🍃",
  "🌳",
  "🌴",
  "🌲",
  "🍀",
  "🌵",
  "🌼",
  "🌻",
  "🌸",
];
const backgroundEmojis = ref([]);

onMounted(() => {
  for (let i = 0; i < 100; i++) {
    backgroundEmojis.value.push({
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 3 + Math.random() * 3, // 随机速度，范围在 3s 到 6s 之间
    });
  }
});

const formData = reactive({
  category: "",
  description: "",
  name: "",
  contact: "",
  image: null,
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  formData[name] = value;
};

const handleFileUpload = (e) => {
  formData.image = e.target.files[0];
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
  alert("表单提交成功！");
  Object.assign(formData, {
    category: "",
    description: "",
    name: "",
    contact: "",
    image: null,
  });
};

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.emoji-enter-active,
.emoji-leave-active {
  transition: all 0.1s ease;
}
.emoji-enter-from,
.emoji-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fixed {
  overflow: hidden; /* 确保 emoji 不会超出父容器 */
}

/* 交互效果 */
input,
select,
textarea {
  transition: all 0.3s ease;
}

input:hover,
select:hover,
textarea:hover {
  border-color: #4caf50; /* 悬停时边框颜色 */
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5); /* 悬停时阴影效果 */
}

input:focus,
select:focus,
textarea:focus {
  border-color: #4caf50; /* 聚焦时边框颜色 */
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5); /* 聚焦时阴影效果 */
}
</style>
