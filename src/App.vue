<template>
  <router-view />
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false); // 这里可以根据实际情况管理登录状态
</script>

<style scoped></style>
