<template>
  <div>
    <h1>Detail Page</h1>
    <!-- 其他内容 -->
  </div>
</template>

<script setup>
import { onBeforeRouteLeave } from "vue-router";
import { inject } from "vue";

// 注入父组件的状态
let isDetailView = inject("isDetailView");

onBeforeRouteLeave((to, from, next) => {
  isDetailView.value = false;
  next(); 
});
</script>

<style scoped>

</style>
