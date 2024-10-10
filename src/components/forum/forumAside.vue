<template>
  <div class="function-container">
    <div class="text-area"></div>
    <div class="button-container">
      <el-button type="primary" plain>发帖交流</el-button>
      <el-button type="success" plain>加入益行</el-button>
      <el-button type="warning" plain>助力益行</el-button>
    </div>
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
</script>

<style lang="scss" scoped>
.function-container {
  .text-area {
    height: 200px;
    background-color: rgba(0, 0, 0, 0.1);
    line-height: 50px;
    font-weight: 800;
  }

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: #f2f3f5;
  }
}
</style>