<template>
  <div class="background">
    <div class="banner">
      <div class="title-content">
        <div class="title">提高公众健康水平</div>
        <div class="subtitle">而开展的各种公益活动和服务</div>
      </div>
    </div>
    <div class="projects">
      <div class="project-list">
        <router-link to="" class="project-item">
          <img src="../../../assets/background/test.png" alt="" />
          <div class="description">爱豆银铃关怀</div>
        </router-link>
        <router-link to="" class="project-item">
          <img src="../../../assets/background/test.png" alt="" />
          <div class="description">直播助残</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<<<<<<< Updated upstream
    
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
  background-image: url("../../../assets/background/test2.png");
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
    
=======


<script setup>
  // No specific logic needed, this is purely for layout purposes
</script>

<style scoped>
  .health-public-service {
    text-align: center;
    background: url('../../../assets/background/test.jpg') no-repeat center center;
    background-size: cover;
    padding: 150px 0;
    color: white;
    overflow-x: hidden;

  }

  .header {
    margin-bottom: 30px;
  }

  .header h1 {
    font-size: 3rem;
    margin: 0;
  }

  .header p {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  .card-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    max-width: 100%;
    margin-top: -100px;
  }

  .card {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .card p {
    background-color: #ff6600;
    color: white;
    margin: 0;
    padding: 10px;
    font-size: 1.1rem;
  }
</style>
>>>>>>> Stashed changes
