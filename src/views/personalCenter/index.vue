<template>
    <div class="personal-center">
      <div class="menu-container">
        <Menu class="menu"></Menu>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script setup>
  import Menu from './components/menu.vue'; 
  </script>
  
  <style scoped>
  .personal-center {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }

  .menu-container {
    height: 100%;
    width: 15%;
  }

  .menu {
    width: 100%;
  }

  .content {
    position: absolute;
    left: 15%;
    height: 100%;
    width: 85%;
  }
  </style>