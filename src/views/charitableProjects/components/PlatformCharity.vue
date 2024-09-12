<template>
    <div class="test">
      <div class="background">
        <div class="main">
          <div class="title-content">
            <div class="title">公益项目</div>
            <div class="subtitle">
              <p>为改善人们的生活和创造一个更美好的社会</p>
            </div>
          </div>
          <div class="projects">
            <a href="" class="project-li">
              <img src="../../../assets/background/test.png" alt="Example Image">
            </a>
            <a href="" class="project-li">
              <img src="../../../assets/background/test.png" alt="Example Image">
            </a>
            <a href="" class="project-li">
              <img src="../../../assets/background/test.png" alt="Example Image">
            </a>
            <a href="" class="project-li">
              <img src="../../../assets/background/test.png" alt="Example Image">
            </a>
            <a href="" class="project-li">
              <img src="../../../assets/background/test.png" alt="Example Image">
            </a>
            <a href="" class="project-li">
              <img src="../../../assets/background/test.png" alt="Example Image">
            </a>
            <a href="" class="project-li">
              <img src="../../../assets/background/test.png" alt="Example Image">
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .test {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .background {
    background-color: rgb(245, 245, 245);
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
  
  .main {
    padding: 100px 0;
    min-height: 60vh;
    margin: 0 auto;
    width: 92%;
    max-width: 1300px;
  }
  
  .title-content {
    color: #333;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    text-align: left;
  }
  
  
  .title {
    font-size: 37px;
    font-weight: 400;
  }
  
  .subtitle {
    color: #666;
  }
  
  .projects {
    margin-top: 90px;
    overflow: hidden;
    width: calc(100% + 20px);
    padding: 0;
    display: block;
  }
  
  .project-li {
      border-radius: 20px;
      display: inline-block;
      float: left;
      height: 410px;
      margin-bottom: 20px;
      margin-right: 20px;
      overflow: hidden;
      width: calc(50% - 20px);
      background-color: #222;
      overflow: hidden;
  }
  
  .project-li:nth-child(3) {
      border-radius: 20px;
      display: inline-block;
      float: left;
      height: 410px;
      margin-bottom: 20px;
      margin-right: 20px\\;
      overflow: hidden;
      width: calc(100% - 20px);
      background-color: #222;
  }
  
  .project-li:nth-child(4) {
      border-radius: 20px;
      display: inline-block;
      float: left;
      height: 840px;
      margin-bottom: 20px;
      margin-right: 20px\\;
      overflow: hidden;
      width: calc(50% - 20px);
      background-color: #222;
  }
  
  .project-li:nth-child(7) {
      border-radius: 20px;
      display: inline-block;
      float: left;
      height: 410px;
      margin-bottom: 20px;
      margin-right: 20px\\;
      overflow: hidden;
      width: calc(100% - 20px);
      background-color: #222;
  }
  .project-li img {
    height: 420px;
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .project-li:hover img {
    transform: scale(1.2); 
  }
  </style>
  