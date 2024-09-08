<template>
  <div class="main-layout">
    <Navbar />
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/navbar/navbar.vue';
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
}

.content-wrapper {
  position: absolute;
  top: 10vh; /* 与导航栏高度相同 */
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto; /* 允许内容滚动 */
}
</style>
