<template>
  <div class="background-container">
    <div class="content-box">
      <h1 class="title">情系乡村教育 助力乡村振兴</h1>
      <p class="meta-info">2023年12月16日</p>
      <div class="article-content">
        <p>
          2023年是全面贯彻落实党的二十大精神的开局之年，是巩固拓展脱贫攻坚成果同乡村振兴有效衔接的关键之年。为认真落实华东空管局党委关于乡村振兴工作的整体部署和要求，11月30日上午，华东空管局在华东空管希望小学（位于江西省上饶市弋阳县樟树墩镇大坝村）举行“情系乡村教育
          助力乡村振兴”爱心捐赠活动。
        </p>

        <p>
          华东空管局党委常委、工会主席孟磊，弋阳县委常委、宣传部部长韩敏出席捐赠活动，华东空管局、江西空管分局和弋阳县各级政府相关领导以及全校师生参加捐赠活动。
        </p>

        <p>
          捐赠活动上，孟磊主席一行带着局党委和全体职工的关心与关爱，为华东空管希望小学捐赠了10架无人机、60余套文具、1000余册图书等学习用品。孟磊主席向弋阳县各级政府、教师对学校的支持和坚守致以诚挚的感谢，同时勉励同学们要学习方志敏精神，心怀感恩、珍惜时光、努力学习，在崭新的校园里，带着对知识的渴望和对未来的憧憬，成⻓为对国家、对人⺠、对社会有用的人。
        </p>

        <p>
          韩敏部长代表弋阳县委、县政府对华东空管局的无私捐赠及长期支持关怀乡村教育事业的发展表示崇高的敬意，镇政府和校方向我局表达谢意并赠送写有“心系教育弘美德
          助学圆梦恩义长”的锦旗。
        </p>

        <p>
          学生代表为出席捐赠活动的领导们佩戴红领巾并行少先队礼，高年级学生进行了篮球操表演，以表达对华东空管局、弋阳县各级政府的感激之情。孩子们清澈的目光、青涩的动作流露出质朴的情感，展现出少年儿童的生命活力，更体现了千山万水间爱的联系。
        </p>

        <p>
          乡村要振兴，教育必先行。华东空管局一行在校长的介绍下，调研了学校教学情况以及整修后的教学楼、食堂、教师宿舍等情况，了解我局帮扶工作计划实施进展。孟磊主席表示，华东空管局将持续关注华东空管希望小学，做好后续帮扶工作，为全面推进乡村振兴贡献华东空管力量。
        </p>

        <p>
          为了拓宽孩子们的视野，激发孩子们的蓝天热情，华东空管局青年志愿者服务队组织开展民航（空管）知识进校园活动，以知识科普助力乡村振兴。
        </p>

        <p>
          操场上，青年讲师手持无人机，向孩子们介绍无人机的飞行原理、主要构造、主要用途等。青年讲师操控无人机拔地而起，孩子们追随者无人机的视角，一起领略校园全貌和家乡美景，孩子们欢快的笑声响彻云霄。
        </p>
      </div>

      <p class="source-link">
        <a
          href="https://mp.weixin.qq.com/s?__biz=MzIwNTQyNTYyNA==&mid=2247494427&idx=1&sn=f6ace1b906767c9212b6017778601125&chksm=9733b5aca0443cbababf7e308b6f34df776aea271aaba705cacce29f1173ddbad3791ef3754f&scene=27"
          target="_blank"
          >查看原文</a
        >
      </p>
      <!-- 添加返回按钮 -->
      <div class="back-button-container">
        <button class="back-button" @click="goBack">返回上一页</button>
      </div>
    </div>
  </div>
</template>

  <script setup>
import { onBeforeRouteLeave, useRouter } from "vue-router";
import { inject } from "vue";

let isDetailView = inject("isDetailView");
const router = useRouter();

onBeforeRouteLeave((to, from, next) => {
  isDetailView.value = false;
  next();
});

// 添加返回函数
const goBack = () => {
  isDetailView.value = false;
  router.push("/main/information/activity-news");
};
</script>

  <style scoped>
.background-container {
  background-image: url("@/assets/background/ActivityNewsBackground.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-box {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  margin: 20px;
  border-radius: 10px;
  max-width: 800px;
  width: 90%;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.meta-info {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.article-content {
  font-size: 1rem;
  line-height: 1.6;
}

.source-link {
  font-size: 0.8rem;
  text-align: right;
  margin-top: 1rem;
}

.source-link a {
  color: #007bff;
  text-decoration: none;
}

.source-link a:hover {
  text-decoration: underline;
}

.back-button-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.back-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
