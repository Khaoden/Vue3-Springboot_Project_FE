<template>
  <div class="background">
    <div class="main">
      <section class="sec">
          <div class="title">
            公益项目<br />
            为改善人们的生活和创造一个更美好的社会
          </div>
      </section>
      <div class="projects">
        <router-link
          to="/main/charitable-projects/platform-charity"
          class="project-li"
        >
          <img src="../../../assets/background/PlatformCharity01.jpg" alt="Example Image" />
          <div class="project-info">
            <div class="info1">平台公益</div>
            <div class="info2">互联网公益<br />通过非营利的方式，改善社会问题、提升社会福利、保护环境或促进文化传承</div>
            
          </div>
        </router-link>
        <router-link
          to="/main/charitable-projects/environmental-protection"
          class="project-li"
        >
          <img src="../../../assets/background/bg1.png" alt="Example Image" />
          <div class="project-info">
            <div class="info1">绿水青山</div>
            <div class="info2">环境保护、绿色发展</div>
          </div>
        </router-link>
        <router-link
          to="/main/charitable-projects/rural-revitalization"
          class="project-li"
        >
          <img src="../../../assets/background/bg11.png" alt="Example Image" />
          <div class="project-info">
            <div class="info1">乡村振兴</div>
            <div class="info2">
              产业振兴 科技振兴<br />人才振兴 巩固脱贫攻坚
            </div>
          </div>
        </router-link>
        <router-link to="/main/charitable-projects/disaster-relief" class="project-lia4">
          <img src="../../../assets/background/PlatformCharity04.jpg" alt="Example Image" />
          <div class="project-info">
            <div class="info1">应急救灾</div>
            <div class="info2">才能最大限度地减少人员<br />伤亡和财产损失</div>
          </div>
        </router-link>
        <router-link
          to="/main/charitable-projects/disability-support"
          class="project-li"
        >
          <img src="../../../assets/background/PlatformCharity05.jpg" alt="Example Image" />
          <div class="project-info">
            <div class="info1">助残扶弱</div>
            <div class="info2">用有温度的技术<br />助残扶弱</div>
          </div>
        </router-link>
        <router-link
          to="/main/charitable-projects/health-charity"
          class="project-li"
        >
          <img src="../../../assets/background/bg12.png" alt="Example Image" />
          <div class="project-info">
            <div class="info1">健康公益</div>
            <div class="info2">
              提高公众健康水平<br />而展开的各种公益活动和服务
            </div>
          </div>
        </router-link>
        <router-link
          to="/main/charitable-projects/international-charity"
          class="project-li"
        >
          <img src="../../../assets/background/PlatformCharity07.jpg" alt="Example Image" />
          <div class="project-info">
            <div class="info1">国际公益</div>
            <div class="info2">为世界带来<br />微小而美好的改变</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.background {
  background-color: rgb(245, 245, 245);
  font-size: 18px;
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  background-image: url("../../../assets/background/bg10.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow-x: hidden;
}

.main {
  padding: 170px 0;
  min-height: 60vh;
  margin: 0 auto;
  width: 92%;
  max-width: 1300px;
  letter-spacing: 2px;
}

.title-content {
  color: #9d1c1c;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  text-align: left;
}

.title {
  font-size: 37px;
  font-weight: 500;
  color: #f3ebeb;
}

.subtitle {
  font-size: 19px;
  margin-top: 5px;
  color: #666;
}

.subtitle p {
  margin: 0;
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
  float: left;
  height: 410px;
  margin-bottom: 20px;
  margin-right: 20px;
  overflow: hidden;
  width: calc(50% - 20px);
  background-color: #222;
  overflow: hidden;
  position: relative;
}

.project-lia4 {
  border-radius: 20px;
  float: left;
  height: 410px;
  margin-bottom: 20px;
  margin-right: 20px;
  overflow: hidden;
  width: calc(50% - 20px);
  background-color: #222;
  overflow: hidden;
  position: relative;
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

.project-lia4:nth-child(4) {
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
  margin-right: 20px;
  overflow: hidden;
  width: calc(100% - 20px);
  background-color: #222;
}
.project-li img {
  height: 420px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-lia4 img {
  height: 920px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}


.project-li:hover img {
  transform: scale(1.05);
}
.project-lia4:hover img {
  transform: scale(1.05);
}

.project-info {
  bottom: 0;
  left: 0;
  position: absolute;
  width: calc(50% - 20px);
  margin: 0;
  padding: 30px;
  text-align: left;
}
.info1 {
  font-size: 40px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  color: rgb(114, 30, 30);
}
.project-info {
  bottom: 0;
  left: 0;
  position: absolute;
  width: calc(50% - 20px);
  margin: 0;
  padding: 30px;
  text-align: left;
}
.info1 {
  font-size: 40px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  color: rgb(234, 225, 225);
}

.info2 {
  font-size: 18px;
  margin: 0;
  padding: 0;
  margin-top: 5px;
  color: rgb(245, 241, 241);
}
</style>
