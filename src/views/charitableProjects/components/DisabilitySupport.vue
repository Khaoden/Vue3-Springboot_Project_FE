<template>
  <div class="background">
    <div class="banner">
      <div class="title-content">
        <div class="title">助残扶弱</div>
        <div class="subtitle">提供物质、精神、教育、就业、康复等多方面的支持和服务<br />我们可以帮助残疾人和弱势群体更好地融入社会，实现自我价值和社会价值。</div>
      </div>
    </div>
    <div class="projects">
      <div class="project-list">
        <router-link to="" class="project-item">
          <img src="../../../assets/background/DisabilitySupport01.jpg" alt="" />
          <div class="description">关怀</div>
        </router-link>
        <router-link to="" class="project-item">
          <img src="../../../assets/background/DisabilitySupport02.jpg" alt="" />
          <div class="description">直播助残</div>
        </router-link>
        <router-link to="" class="project-item">
          <img src="../../../assets/background/DisabilitySupport03.jpg" alt="" />
          <div class="description">扶弱</div>
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

/* .background {
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
  background-image: url("../../../assets/background/zcfr.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow-x: hidden;
}

.banner {
  position: relative;
  height: 560px;
  /* background-image: url("../../../assets/background/DisabilitySupportBackground.jpg"); */
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
  color: #000000;
  width: 80%;
  padding-top: px;
  padding-bottom: 70px;
  margin: 0 auto;
  position: relative;
  top: 0;
  z-index: 10;
  text-align: center;
  font-size: 70px;
  line-height: 1.3;
  letter-spacing: 2px;
}
.subtitle {
  font-size: 20px;
  line-height: 1.6;
  margin-top: 10px;
  letter-spacing: 1px;
  color: #000000;
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
  height: 400px;
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
    