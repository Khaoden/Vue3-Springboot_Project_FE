<template>
  <div class="function-container">
    <div class="text-area"></div>
    <el-divider class="divider" />
    <div class="button-container">
      <el-button type="primary" plain>发帖交流</el-button>
      <el-button type="success" plain>加入益行</el-button>
      <el-button type="warning" plain>助力益行</el-button>
    </div>
    <el-divider class="divider" />
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    name: "益行公益项目1",
    description: "这是一个公益项目1的描述",
    image: "../../assets/background/test.png",
    status: 1,
  },
  {
    id: 2,
    name: "益行公益项目2",
    description: "这是一个公益项目2的描述",
    image: "../../assets/background/test2.png",
    status: 2,
  },
  {
    id: 3,
    name: "益行公益项目3",
    description: "这是一个公益项目2的描述",
    image: "../../assets/background/test3.png",
    status: 3,
  },
];

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

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
}
</style>

