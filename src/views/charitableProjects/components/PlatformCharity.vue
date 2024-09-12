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
          <router-link
            to="/charitable-projects/platform-charity"
            class="project-li"
          >
            <img
              src="../../../assets/background/test.png"
              alt="Example Image"
            />
            <div class="project-info">
              <div class="info1">平台公益</div>
              <div class="info2">人人可参与的<br />互联网公益</div>
            </div>
          </router-link>
          <router-link
            to="/charitable-projects/environmental-protection"
            class="project-li"
          >
            <img
              src="../../../assets/background/test.png"
              alt="Example Image"
            />
            <div class="project-info">
              <div class="info1">绿水青山</div>
              <div class="info2">帮助地球减负</div>
            </div>
          </router-link>
          <router-link
            to="/charitable-projects/rural-revitalization"
            class="project-li"
          >
            <img
              src="../../../assets/background/test.png"
              alt="Example Image"
            />
            <div class="project-info">
              <div class="info1">乡村振兴</div>
              <div class="info2">
                产业振兴 科技振兴<br />人才振兴 巩固脱贫攻坚
              </div>
            </div>
          </router-link>
          <router-link
            to="/charitable-projects/disaster-relief"
            class="project-li"
          >
            <img
              src="../../../assets/background/test.png"
              alt="Example Image"
            />
            <div class="project-info">
              <div class="info1">应急救灾</div>
              <div class="info2">
                才能最大限度地减少人员<br />伤亡和财产损失
              </div>
            </div>
          </router-link>
          <router-link
            to="/charitable-projects/disability-support"
            class="project-li"
          >
            <img
              src="../../../assets/background/test.png"
              alt="Example Image"
            />
            <div class="project-info">
              <div class="info1">助残扶弱</div>
              <div class="info2">用有温度的技术<br />助残扶弱</div>
            </div>
          </router-link>
          <router-link
            to="/charitable-projects/health-charity"
            class="project-li"
          >
            <img
              src="../../../assets/background/test.png"
              alt="Example Image"
            />
            <div class="project-info">
              <div class="info1">健康公益</div>
              <div class="info2">
                提高公众健康水平<br />而展开的各种公益活动和服务
              </div>
            </div>
          </router-link>
          <router-link
            to="/charitable-projects/international-charity"
            class="project-li"
          >
            <img
              src="../../../assets/background/test.png"
              alt="Example Image"
            />
            <div class="project-info">
              <div class="info1">国际公益</div>
              <div class="info2">为世界带来<br />微小而美好的改变</div>
            </div>
          </router-link>
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
  padding: 170px 0;
  min-height: 60vh;
  margin: 0 auto;
  width: 92%;
  max-width: 1300px;
  letter-spacing: 2px;
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
  font-weight: 500;
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
  transition: transform 0.5s ease;
}

.project-li:hover img {
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
  color: grey;
}

.info2 {
  font-size: 18px;
  margin: 0;
  padding: 0;
  margin-top: 5px;
  color: grey;
}
</style>
  