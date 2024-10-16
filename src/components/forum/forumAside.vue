<template>
  <div class="function-container">
    <div class="text-area">
      <el-carousel :interval="4000" height="200px">
        <el-carousel-item v-for="project in projects" :key="project.id">
          <div class="project-card">
            <img
              :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'"
              alt="project image"
            />
            <div class="project-info">
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-divider class="divider" />
    <div class="button-container">
      <el-button type="primary" plain @click="handleCreateButtonClick">发帖交流</el-button>
      <el-button type="success" plain>加入益行</el-button>
      <el-button type="warning" plain>助力益行</el-button>
    </div>
    <el-divider class="divider" />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const projects = reactive([
  {
    id: 1,
    name: "益行公益项目1",
    description: "这是一个公益项目1的描述",
    image: "../../assets/background/EnvironmentalProtection01.jpg",
    status: 1,
  },
  {
    id: 2,
    name: "益行公益项目2",
    description: "这是一个公益项目2的描述",
    image: "../../../assets/background/EnvironmentalProtection01.jpg",
    status: 2,
  },
  {
    id: 3,
    name: "益行公益项目3",
    description: "这是一个公益项目2的描述",
    image: "../../../assets/background/EnvironmentalProtection01.jpg",
    status: 3,
  },
]);

const handleCreateButtonClick = () => {
  router.push({ name: "create" });
};

// TODO:
// 1.按钮上方做一个3D效果
// 2.按钮下方塞一点项目item
</script>

<style lang="scss" scoped>
.function-container {
  .text-area {
    height: 200px;
    line-height: 50px;
    font-weight: 800;
  }

  .el-carousel {
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
}
</style>

