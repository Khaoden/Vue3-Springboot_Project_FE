<template>
  <div class="create">
    <div class="container">
      <div class="title">
        <el-icon size="30"><Document /></el-icon>
        <span class="title-text">发表帖子</span>
      </div>
      <el-input
        class="title-input"
        v-model="input"
        style="width: 1px'; height: 40px; margin-bottom: 20px; "
        placeholder="请输入标题"
      />
      <InputArea class="create-blog" />
    </div>
  </div>
</template>

<script setup>
import InputArea from "@/components/forum/inputArea.vue";
</script>

<style lang="scss" scoped>
.create {
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgb(245, 245, 245);
  .container {
    width: 1500px;
    height: 70%;
    margin-top: 50px;
    // padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .title {
      padding: 20px;
      display: flex;
      margin-top: 100px;
      margin-bottom: 20px;
      .title-text {
        line-height: 30px;
        font-weight: 600;
        font-size: 30px;
      }
    }

    .create-blog {
      margin: 0;
      padding: 0;
    }
  }
}
</style>