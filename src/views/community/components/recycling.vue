<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-4">
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

    <div class="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full relative z-10 backdrop-blur-sm">
      <h1 class="text-3xl font-bold text-center mb-6 text-green-700">旧物回收</h1>
      <p class="text-center mb-8 text-gray-600">请将您的旧物信息填写完整，我们将尽快处理。</p>
      <form @submit="handleSubmit" class="space-y-6">
        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">旧物分类</label>
          <select
            id="category"
            name="category"
            v-model="formData.category"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 hover:border-green-600 transition-all"
          >
            <option value="">请选择</option>
            <option value="电子产品">电子产品</option>
            <option value="衣物">衣物</option>
            <option value="书籍">书籍</option>
            <option value="其他">其他</option>
          </select>
        </div>
        <div>
          <label for="description" class="block text-sm font-medium text-gray-700">旧物描述</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            v-model="formData.description"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 hover:border-green-600 transition-all"
          ></textarea>
        </div>
        <div>
          <label for="image" class="block text-sm font-medium text-gray-700">上传图片</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            @change="handleFileUpload"
            class="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-green-50 file:text-green-700
              hover:file:bg-green-100 transition-all"
          />
        </div>
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">您的姓名</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="formData.name"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 hover:border-green-600 transition-all"
          />
        </div>
        <div>
          <label for="contact" class="block text-sm font-medium text-gray-700">联系方式</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            v-model="formData.contact"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 hover:border-green-600 transition-all"
          />
        </div>
        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all"
          >
            提交
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';

const emojis = ['♻️', '🌱', '🌿', '🍃', '🌳', '🌴', '🌲', '🍀', '🌵', '🌼', '🌻', '🌸'];
const backgroundEmojis = ref([]);

onMounted(() => {
  for (let i = 0; i < 100; i++) {
    backgroundEmojis.value.push({
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: 3 + Math.random() * 3 // 随机速度，范围在 3s 到 6s 之间
    });
  }
});

const formData = reactive({
  category: '',
  description: '',
  name: '',
  contact: '',
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
  console.log('Form submitted:', formData);
  alert('表单提交成功！');
  Object.assign(formData, {
    category: '',
    description: '',
    name: '',
    contact: '',
    image: null,
  });
};
</script>

<style scoped>
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
input, select, textarea {
  transition: all 0.3s ease;
}

input:hover,
select:hover,
textarea:hover {
  border-color: #4CAF50; /* 悬停时边框颜色 */
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5); /* 悬停时阴影效果 */
}

input:focus,
select:focus,
textarea:focus {
  border-color: #4CAF50; /* 聚焦时边框颜色 */
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5); /* 聚焦时阴影效果 */
}
</style>
