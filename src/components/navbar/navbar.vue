<template>
  <div class="navbar">
    <img class="logo" src="../../assets/logo.png" alt="Logo" />
    <nav class="nav-menu">
      <router-link 
        v-for="item in menuItems" 
        :key="item.name" 
        :to="{ name: item.name }" 
        class="nav-item"
        :class="{ active: activeItem === item.name }"
      >
        {{ item.label }}
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const menuItems = [
  { label: '公益项目', name: 'charitable-project' },
  { label: '社区', name: 'community' },
  { label: '资讯', name: 'information' },
  { label: '关于我们', name: 'about-us' },
  { label: '个人中心', name: 'personal-center' },
];

const activeItem = computed(() => route.name);
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  min-height: 50px;
  padding: 0 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  z-index: 1000;
  box-sizing: border-box;
  box-shadow: 0 2px 2px #ddd;
}

.logo {
  height: 80%; 
  width: auto; 
  max-height: 150px;
  object-fit: contain;
}

.nav-menu {
  display: flex;
  justify-content: flex-end;
  width: 70%;
}

.nav-item {
  font-size: 1vw;
  padding: 0 1vw;
  height: 100%;
  line-height: 10vh;
  white-space: nowrap;
  margin-right: 3vw;
  text-decoration: none;
  color: #333;
  transition: color 0.3s;

  &:last-child {
    margin-right: 0;
  }

  &.active {
    color: #409EFF;
  }

  &:hover {
    color: #409EFF;
  }
}

@media (max-width: 768px) {
  .nav-item {
    font-size: 3vw; 
    padding: 0 1vw;
    margin-right: 2vw;
  }
}
</style>
