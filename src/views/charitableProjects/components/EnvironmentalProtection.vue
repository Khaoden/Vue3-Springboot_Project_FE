<template>
  <div class="background">
    <div class="banner">
      <div class="title-content">
        <div class="title">绿水青山</div>
        <div class="subtitle">帮助地球减负</div>
      </div>
    </div>
    <div class="projects">
      <div class="project-list">
        <router-link to="" class="project-item">
          <img src="../../../assets/background/test.png" alt="">
          <div class="description">广州绿网</div>
        </router-link>
        <router-link to="" class="project-item">
          <img src="../../../assets/background/test.png" alt="">
          <div class="description">水保护</div>
        </router-link>
        <router-link to="" class="project-item">
          <img src="../../../assets/background/test.png" alt="">
          <div class="description">清源行动</div>
        </router-link>
        <router-link to="" class="project-item">
          <img src="../../../assets/background/test.png" alt="">
          <div class="description">千岛湖水基金</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.background {
  background: rgb(245, 245, 245);
  font-size: 18px;
}

.banner {
  position: relative;
  height: 560px;
  background-image: url("../../../assets/background/test1.png");
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
