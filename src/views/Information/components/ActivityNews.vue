<template>
  <div class="background">
    <div class="title-content">
      <div class="title">活动新闻</div>
      <div class="subtitle">公益的本质是“唤醒”人的善意，为此我们一直不懈努力</div>
    </div>
    <div class="projects">
      <div class="project-list">
        <router-link
          v-for="item in paginatedProjects"
          :key="item.id"
          :to="item.link"
          class="project-item"
        >
          <!-- 确保每个 project-item 只显示一个图片 -->
          <img :src="item.image" alt="" />
          <div class="description">
            {{ item.title }}
            <div class="data">{{ item.date }}</div>
          </div>
        </router-link>
      </div>
      <!-- Pagination Controls -->
      <div class="page">
        <a
          v-if="currentPage > 1"
          @click.prevent="changePage(currentPage - 1)"
          class="arrow prev"
        >
          &lt;
        </a>
        <a
          v-for="page in totalPages"
          :key="page"
          :href="'/news/list/' + page"
          :class="{ active: currentPage === page }"
          @click.prevent="changePage(page)"
        >
          {{ page }}
        </a>
        <a
          v-if="currentPage < totalPages"
          @click.prevent="changePage(currentPage + 1)"
          class="arrow next"
        >
          &gt;
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import image from '@/assets/background/test.png';
import image1 from '@/assets/information/ActivityNews/1.png';
import image2 from '@/assets/information/ActivityNews/2.png';
import image3 from '@/assets/information/ActivityNews/3.png';
import image4 from '@/assets/information/ActivityNews/4.png';
import image5 from '@/assets/information/ActivityNews/5.png';
import image6 from '@/assets/information/ActivityNews/6.png';
import image7 from '@/assets/information/ActivityNews/7.png';
import image8 from '@/assets/information/ActivityNews/8.png';
import image9 from '@/assets/information/ActivityNews/9.png';

const projects = ref([
  { id: 1, title: '让教育之光照亮贫困山区', date: '2021-02-22', image: image1, link: '' },
  { id: 2, title: '蓝山县易地搬迁助力幸福生活 ', date: '2024-10-11', image: image2, link: '' },
  { id: 3, title: '举国同心 合力攻坚', date: '2022-09-10', image: image3, link: '' },
  { id: 4, title: '乌蒙山区的幸福迁徙', date: '2020-04-12', image: image4, link: '' },
  { id: 5, title: '义务教育有保障，山区的孩...', date: '2022-06-18', image: image5, link: '' },
  { id: 6, title: '大别山区扶贫路', date: '2019-04-19', image: image6, link: '' },
  { id: 7, title: '新华社长篇通讯：中国脱贫...', date: '2021-02-24', image: image7, link: '' },
  { id: 8, title: '决战千山万弄间', date: '2020-10-14', image: image8, link: '' },
  { id: 9, title: '情系山区教育 助力乡村振...', date: '2021-03-30', image: image9, link: '' },
  { id: 10, title: '第八届阿里95公益周启动', date: '2022-12-12', image: image, link: '' },
  { id: 11, title: '第八届阿里95公益周启动', date: '2022-12-12', image: image, link: '' },
  { id: 12, title: '第八届阿里95公益周启动', date: '2022-12-12', image: image, link: '' },
  { id: 13, title: '第八届阿里95公益周启动', date: '2022-12-12', image: image, link: '' },
  { id: 14, title: '第八届阿里95公益周启动', date: '2022-12-12', image: image, link: '' },
  { id: 15, title: '第八届阿里95公益周启动', date: '2022-12-12', image: image, link: '' },
  { id: 16, title: '第八届阿里95公益周启动', date: '2022-12-12', image: image, link: '' },
  { id: 17, title: '第八届阿里95公益周启动', date: '2022-12-12', image: image, link: '' },
  { id: 18, title: '第八届阿里95公益周启动', date: '2022-12-12', image: image, link: '' },
  { id: 19, title: '第八届阿里95公益周启动', date: '2022-12-12', image: image, link: '' }
]);

const itemsPerPage = 9;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(projects.value.length / itemsPerPage));

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return projects.value.slice(start, end);
});

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.background {
  background-color: rgb(245, 245, 245);
  font-size: 18px;
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  background-image: url("../../../assets/background/ActivityNewsBackground.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow-x: hidden;
}

.title-content {
  color: #000000;
  width: 80%;
  padding-top: 80px;
  padding-bottom: 70px;
  margin: 0 auto;
  position: relative;
  top: 0;
  z-index: 10;
  text-align: center;
  background: rgba(255, 255, 255, 0); /* 完全透明的白色背景 */
}

.title {
  font-size: 70px;
  line-height: 1.3;
  letter-spacing: 2px;
  margin-bottom: 30px;
}

.subtitle {
  font-size: 20px;
  line-height: 1.6;
  margin-top: 10px;
  letter-spacing: 1px;
  color: #000000;
}

.projects {
  padding-top: 20px;
  position: relative;
  z-index: 10;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.5);;
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
  margin-top: 30px;
  margin-right: 20px;
  float:left;
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
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #fff;
  z-index: 10;
  text-align: left;
  padding: 15px 35px;
  color: #222;
  transition: background-color 0.3s ease;
  transition: color 0.3s ease;
}

.description .data {
  display: block;
  font-size: 14px;
  margin-top: 5px;
  color: #888;
}

.project-item:hover .description {
  background-color: #fbc934;
  color: #fff;
}

/* Pagination styles */
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1200px;
}

.page a {
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;

}

.page a.arrow {
  font-size: 18px;
}

.page a.active {
  background-color: #fbc934;
  color: #fff;
}

.page a:hover:not(.active) {
  background-color: #eee;
}
</style>
