<template>
  <div class="main-layout">
    <Navbar class="navbar" />
    <div class="content-wrapper">
      <div class="route-content">
        <router-view v-slot="{ Component }">
          <component v-bind:is="Component" />
        </router-view>
      </div>
      <!-- 根据路由条件决定是否显示 Footer -->
      <Footer v-if="!isPhotoWall" class="footer" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '../components/navbar/navbar.vue';
import Footer from '../components/footer/footer.vue';

const route = useRoute();

// 计算属性，判断当前路由是否为 photoWall
const isPhotoWall = computed(() => {
  return route.name === 'photoWall'; 
});
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.navbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  margin-top: 0%;
}

.route-content {
  flex: 1;
  width: 100%;
}

.footer {
  width: 100%;
}

:global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* 防止body出现水平滚动 */
}

:global(#app) {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* 防止app出现水平滚动 */
}
</style>
