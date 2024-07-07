<template>
    <div class="navbar">
      <img class="logo" src="../../assets/logo.jpg" />
      <el-tabs v-model="activeTab" class="navbar-tabs" @tab-click="handleTabClick">
        <el-tab-pane label="公益项目" name="first"></el-tab-pane>
        <el-tab-pane label="社区" name="second"></el-tab-pane>
        <el-tab-pane label="资讯" name="third"></el-tab-pane>
        <el-tab-pane label="关于我们" name="fourth"></el-tab-pane>
        <el-tab-pane label="个人中心" name="fifth"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="content-section">
      <div v-show="activeTab === 'first'">
        <CharitableProject />
      </div>
      <div v-show="activeTab === 'second'">
        <Community />
      </div>
      <div v-show="activeTab === 'third'">
        <Information />
      </div>
      <div v-show="activeTab === 'fourth'">
        <AbouUS />
      </div>
      <div v-show="activeTab === 'fifth'">
        <PersonalCenter />
      </div>
    </div>
  </template>

<script setup>
import { ref } from 'vue';
import AbouUS from '../../views/aboutUs/index.vue';
import CharitableProject from '../../views/charitableProjects/index.vue';
import Community from '../../views/community/index.vue';
import PersonalCenter from '../../views/personalCenter/index.vue';
import Information from '../../views/Information/index.vue';

let activeTab = ref('first');

const handleTabClick = (tab) => {
  activeTab.value = tab.name;
};
</script>

<style lang="scss">
.logo {
  height: 5%;
  width: 5%;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aqua;
}

.navbar-tabs {
    margin-right: 10%;
    width: 60%;
}

.navbar-tabs .el-tabs__item {
  margin-right: 35%;
  font-size: 15px;
}
</style>
