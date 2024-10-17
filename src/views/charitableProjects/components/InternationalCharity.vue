<template>
  <div class="background">
    <div class="banner">
      <div class="title-content">
        <div class="title">国际公益</div>
        <div class="subtitle">为世界带来<br />微小而美好的改变</div>
      </div>
    </div>
    <div class="projects">
      <div class="project-list">
        <router-link to="" class="project-item">
          <img
            src="../../../assets/background/InternationalCharity01.png"
            alt=""
          />
          <div class="description">世界饥饿</div>
        </router-link>
        <router-link to="" class="project-item">
          <img
            src="../../../assets/background/InternationalCharity02.png"
            alt=""
          />
          <div class="description">爱心包裹</div>
        </router-link>
        <router-link to="" class="project-item">
          <img
            src="../../../assets/background/InternationalCharity03.png"
            alt=""
          />
          <div class="description">国际组织与国际公益项目</div>
        </router-link>
        <router-link to="" class="project-item">
          <img
            src="../../../assets/background/InternationalCharity04.png"
            alt=""
          />
          <div class="description">国际公益组织的类型与宗旨</div>
        </router-link>
        <router-link to="" class="project-item">
          <img
            src="../../../assets/background/InternationalCharity05.png"
            alt=""
          />
          <div class="description">国际公益活动的形式与内容</div>
        </router-link>
        <router-link to="" class="project-item">
          <img
            src="../../../assets/background/InternationalCharity06.png"
            alt=""
          />
          <div class="description">国际公益的影响与挑战</div>
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
/*   
  .background {
    background: rgb(245, 245, 245);
    font-size: 18px;
  } */
.background {
  background-color: rgb(245, 245, 245);
  font-size: 18px;
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  background-image: url("../../../assets/background/InternationalCharityBackground.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow-x: hidden;
}

.banner {
  position: relative;
  height: 560px;
  /* background-image: url("../../../assets/background/InternationalCharityBackground.png"); */
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
  width: calc(100% + 120px);
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
  height: 450px;
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
