<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-column">
          <h2 class="footer-title">益行山区</h2>
          <p class="footer-subtitle">携手共创美好未来</p>
        </div>
        <div class="footer-column">
          <h3 class="footer-heading">
            <Home class="footer-icon" :size="20" />
            公益项目
          </h3>
          <ul class="footer-list">
            <li><router-link to="/main/charitable-projects/platform-charity" class="footer-link">平台公益</router-link></li>
            <li><router-link to="/main/charitable-projects/environmental-protection" class="footer-link">绿水青山</router-link></li>
            <li><router-link to="/main/charitable-projects/rural-revitalization" class="footer-link">乡村振兴</router-link></li>
            <li><router-link to="/main/charitable-projects/disaster-relief" class="footer-link">应急救灾</router-link></li>
            <li><router-link to="/main/charitable-projects/disability-support" class="footer-link">助残扶弱</router-link></li>
            <li><router-link to="/main/charitable-projects/health-charity" class="footer-link">健康公益</router-link></li>
            <li><router-link to="/main/charitable-projects/international-charity" class="footer-link">国际公益</router-link></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="footer-heading">
            <Heart class="footer-icon" :size="20" />
            关于我们
          </h3>
          <ul class="footer-list">
            <li><router-link to="/main/about-us/foundation-intro" class="footer-link">基金会简介</router-link></li>
            <li><router-link to="/main/about-us/board-intro" class="footer-link">理事会简介</router-link></li>
            <li><router-link to="/main/about-us/honors" class="footer-link">荣誉表彰</router-link></li>
            <li><router-link to="/main/about-us/contact-us" class="footer-link">联系我们</router-link></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="footer-heading">
            <Users class="footer-icon" :size="20" />
            社区
          </h3>
          <ul class="footer-list">
            <li><router-link to="/main/community/forum" class="footer-link">论坛</router-link></li>
            <li><router-link to="/main/community/recycling" class="footer-link">旧物回收</router-link></li>
            <li><router-link to="/main/community/photoWall" class="footer-link">照片墙</router-link></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 益行山区 版权所有</p>
        <p>
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" class="footer-link">浙ICP备号xxxxxx</a>
          |
          <a href="https://www.beian.gov.cn/" target="_blank" class="footer-link">浙公网安备xxxxx</a>
        </p>
      </div>
    </div>
    <div class="footer-decoration footer-decoration-bottom"></div>
    <div class="footer-decoration footer-decoration-top-right"></div>
    <div class="footer-decoration footer-decoration-bottom-left"></div>
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="scroll-top-button"
    >
      <ChevronUp :size="24" />
    </button>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Home, Heart, Users, ChevronUp } from 'lucide-vue-next';

const showScrollTop = ref(false);

const checkScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.footer {
  overflow-x: hidden;
  background: linear-gradient(to right, #e6f7ff, #e6ffed);
  padding: 4rem;
  position: relative;
  overflow: hidden;
}

.footer-container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.875rem;
  font-weight: bold;
  color: #2c5282;
  margin-bottom: 0.5rem;
}

.footer-subtitle {
  color: #4a5568;
}

.footer-heading {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.footer-icon {
  margin-right: 0.5rem;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: #4a5568;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #74b5f1;
}

.footer-bottom {
  text-align: center;
  color: #4a5568;
  font-size: 0.875rem;
}

.footer-decoration {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
}

.footer-decoration-bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  background: linear-gradient(to top, #a7f3d0, transparent);
  opacity: 0.3;
}

.footer-decoration-top-right {
  top: 0;
  right: 0;
  width: 16rem;
  height: 16rem;
  background-color: #bfdbfe;
  opacity: 0.2;
  transform: translate(50%, -50%);
}

.footer-decoration-bottom-left {
  bottom: 0;
  left: 0;
  width: 12rem;
  height: 12rem;
  background-color: #a7f3d0;
  opacity: 0.2;
  transform: translate(-50%, 50%);
}

.scroll-top-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #2c5282;
  color: white;
  padding: 0.75rem;
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: background-color 0.3s ease;
  border: none;
  cursor: pointer;
}

.scroll-top-button:hover {
  background-color: #2b6cb0;
}

.scroll-top-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-column {
    text-align: center;
  }

  .footer-heading {
    justify-content: center;
  }
}
</style>