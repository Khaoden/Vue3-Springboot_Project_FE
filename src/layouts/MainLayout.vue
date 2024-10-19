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


let detail = [ 'detail01', 'detail02', 'detail03', 'detail04', 'detail05', 'detail06', 'detail07', 'detail08', 'detail09' ];

// 计算属性，判断当前路由是否为 photoWall
const isPhotoWall = computed(() => {
  return (
    route.name === 'photoWall' ||
    route.name === 'recycling' ||
    route.name === 'forum' ||
    route.name === 'map' ||
    detail.some(item => item === route.name) // 使用 some 方法
  );
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.content-wrapper {
  margin-top: 10vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
}

.route-content {
  flex: 1;
  width: 100%;
}

.footer {
  margin-top: 0%;
  width: 100%;
  height: 10%;
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
