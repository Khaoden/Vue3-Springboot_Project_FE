<template>
  <div class="background">
    <div class="banner">
      <div class="title-content">
        <div class="title">乡村振兴</div>
        <div class="subtitle">产业振兴 科技振兴<br />人才振兴 巩固脱贫攻坚</div>
      </div>
    </div>
    <div class="projects">
      <div class="project-list">
        <router-link to="" class="project-item">
          <img src="../../../assets/background/RuralRevitalization01.png" alt=""/>
          <div class="description">山区风景展示</div>
        </router-link>
        <router-link to="" class="project-item">
          <img src="../../../assets/background/RuralRevitalization02.png" alt=""/>
          <div class="description">山区农作物</div>
        </router-link>
        <router-link to="" class="project-item">
          <img src="../../../assets/background/RuralRevitalization03.png" alt=""/>
          <div class="description">智慧育种</div>
        </router-link>
        <router-link to="" class="project-item">
          <img src="../../../assets/background/RuralRevitalization04.png" alt=""/>
          <div class="description">农作物种植技术培训</div>
        </router-link>
        <router-link to="" class="project-item">
          <img src="../../../assets/background/RuralRevitalization05.png" alt="" />
          <div class="description">益行山区—乡村振兴技术人员介绍</div>
        </router-link>
        <router-link to="" class="project-item">
          <img
            src="../../../assets/background/RuralRevitalization06.png"
            alt=""
          />
          <div class="description">寻找远方的美好</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

/* .background {
    background: rgb(245, 245, 245);
    font-size: 18px;
  } */
.background {
  background: rgb(245, 245, 245);
  font-size: 18px;
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  background-image: url("../../../assets/background/bg11.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow-x: hidden;
}

.banner {
  position: relative;
  height: 560px;
  /* background-image: url("../../../assets/background/RuralRevitalizationBackground.png"); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.title-content {
  color: #fff;
  width: 80%;
  padding-top: 160px;
  margin: 0 auto;
  position: relative;
  top: 0;
  z-index: 10;
  text-align: left;
}

.title {
  font-size: 70px;
  line-height: 1.3;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 20px;
  line-height: 1.6;
  margin-top: 10px;
  letter-spacing: 1px;
}

.projects {
  padding-top: 0;
  position: relative;
  z-index: 10;
  min-height: 60vh;
  padding-bottom: 90px;
  width: 80%;
  margin: 0 auto;
  margin-top: -110px;
}

.project-list {
  font-size: 0;
  margin-bottom: 50px;
  width: calc(100% + 20px);
}

.project-item {
  overflow: hidden;
  position: relative;
  background: #fff;
  border-radius: 20px;
  margin-bottom: 30px;
  margin-right: 20px;
  float: left;
  width: calc(33.333% - 20px);
  height: 350px;
}

.project-item img {
  width: 100%;
  height: 360px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-item:hover img {
  transform: scale(1.05);
}

.description {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 18px;
  width: 100%;
  height: 90px;
  line-height: 90px;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #fff;
  z-index: 10;
  text-align: left;
  padding: 0 35px;
  color: #222;
  transition: background-color 0.3s ease;
  transition: color 0.3s ease;
}

.project-item:hover .description {
  background-color: #fbc934;
  color: #fff;
}
</style>
