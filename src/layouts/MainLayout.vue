<template>
  <div class="main-layout">
    <Navbar class="navbar" />
    <div class="content-wrapper">
      <div class="route-content">
        <router-view></router-view>
      </div>
      <Footer class="footer"/>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/navbar/navbar.vue';
import Footer from '../components/footer/footer.vue';

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