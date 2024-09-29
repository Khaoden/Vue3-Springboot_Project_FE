<template>
  <el-row>
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>用户设置</span>
          </template>
          <router-link
            v-for="item in menuItems"
            :key="item.name"
            :to="{ name: item.name }"
          >
            <el-menu-item :index="item.name">{{ item.label }}</el-menu-item>
          </router-link>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

const menuItems = [
  {
    name: "personal-data",
    label: "个人资料",
  },
  {
    name: "account-setting",
    label: "账户设置",
  },
];
</script>

<style scoped></style>
