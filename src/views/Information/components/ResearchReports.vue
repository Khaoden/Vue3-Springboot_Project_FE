<template>
  <div class="background">
    <div class="title-content">
      <div class="title-content">
        <div class="title">研究报告</div>
        <div class="subtitle">
          为了深入理解社会问题、评估公益活动成效、提供政策建议、促进公众参与与意识提升以及推动学术研究与理论创新。这些目的共同构成了公益研究报告的核心价值和意义。
        </div>
      </div>
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
import { ref, computed } from "vue";
import image1 from "@/assets/background/ActivityNews01.jpeg";
import image2 from "@/assets/background/ActivityNews06.jpeg";
import image3 from "@/assets/background/ActivityNews03.jpeg";
import image4 from "@/assets/background/ActivityNews04.jpeg";
import image5 from "@/assets/background/ActivityNews05.jpeg";
import image6 from "@/assets/background/ActivityNews06.jpeg";
import image7 from "@/assets/background/ActivityNews07.jpeg";
import image8 from "@/assets/background/ActivityNews08.jpeg";
import image9 from "@/assets/background/ActivityNews09.jpeg";
import image10 from "@/assets/background/ActivityNews10.jpeg";
import image11 from "@/assets/background/ActivityNews11.jpeg";
import image12 from "@/assets/background/ActivityNews12.jpeg";
import image13 from "@/assets/background/ActivityNews13.jpeg";
import image14 from "@/assets/background/ActivityNews05.jpeg";
import image15 from "@/assets/background/ActivityNews08.jpeg";
import image16 from "@/assets/background/ActivityNews09.jpeg";
import image17 from "@/assets/background/ActivityNews03.jpeg";
import image18 from "@/assets/background/ActivityNews07.jpeg";
import image19 from "@/assets/background/ActivityNews01.jpeg";

const projects = ref([
  {
    id: 1,
    title: "理解社会问题与需求",
    date: "2022-12-12",
    image: image1,
    link: "",
  },
  {
    id: 2,
    title: "评估公益活动的成效",
    date: "2022-12-12",
    image: image2,
    link: "",
  },
  {
    id: 3,
    title: "提供政策建议与改进方向",
    date: "2022-12-12",
    image: image3,
    link: "",
  },
  {
    id: 4,
    title: "促进公众参与与意识提升",
    date: "2022-12-12",
    image: image4,
    link: "",
  },
  {
    id: 5,
    title: "推动学术研究与理论创新",
    date: "2022-12-12",
    image: image5,
    link: "",
  },
  {
    id: 6,
    title: "提供政策建议与改进方向",
    date: "2022-12-12",
    image: image6,
    link: "",
  },
  {
    id: 7,
    title: "评估公益活动的成效与影响",
    date: "2022-12-12",
    image: image7,
    link: "",
  },
  {
    id: 8,
    title: "促进公众意识提升与参与",
    date: "2022-12-12",
    image: image8,
    link: "",
  },
  {
    id: 9,
    title: "揭示社会问题与挑战",
    date: "2022-12-12",
    image: image9,
    link: "",
  },
  {
    id: 10,
    title: "第一届益行山区公益周启动",
    date: "2022-12-12",
    image: image10,
    link: "",
  },
  {
    id: 11,
    title: "第一届益行山区公益周启动",
    date: "2022-12-12",
    image: image11,
    link: "",
  },
  {
    id: 12,
    title: "第一届益行山区公益周启动",
    date: "2022-12-12",
    image: image12,
    link: "",
  },
  {
    id: 13,
    title: "第一届益行山区公益周启动",
    date: "2022-12-12",
    image: image13,
    link: "",
  },
  {
    id: 14,
    title: "第一届益行山区公益周启动",
    date: "2022-12-12",
    image: image14,
    link: "",
  },
  {
    id: 15,
    title: "第一届益行山区公益周启动",
    date: "2022-12-12",
    image: image15,
    link: "",
  },
  {
    id: 16,
    title: "第一届益行山区公益周启动",
    date: "2022-12-12",
    image: image16,
    link: "",
  },
  {
    id: 17,
    title: "第一届益行山区公益周启动",
    date: "2022-12-12",
    image: image17,
    link: "",
  },
  {
    id: 18,
    title: "第一届益行山区公益周启动",
    date: "2022-12-12",
    image: image18,
    link: "",
  },
  {
    id: 19,
    title: "第一届益行山区公益周启动",
    date: "2022-12-12",
    image: image19,
    link: "",
  },
]);

const itemsPerPage = 9;
const currentPage = ref(1);

const totalPages = computed(() =>
  Math.ceil(projects.value.length / itemsPerPage)
);

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

/* .background {
  background: #f6f6f6;
  font-size: 18px;
  min-height: 100vh;
  overflow: hidden;
} */
.background {
  background-color: rgb(245, 245, 245);
  font-size: 18px;
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  background-image: url("../../../assets/background/ResearchReportsBackground.jpg");
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
