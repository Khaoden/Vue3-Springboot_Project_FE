<template>
  <div class="container">
    <v-md-editor v-model="text" height="400px" class="editor"></v-md-editor>
    <el-button type="primary">发表</el-button>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
  button {
    margin-top: 20px;
    margin-left: 20px;
  }
  .editor {
    margin-bottom: 20px;
  }
}
</style>