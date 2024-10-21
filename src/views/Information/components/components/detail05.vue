<template>
  <div class="background-container">
    <div class="content-box">
      <h1 class="title">义务教育有保障，山区的孩子有幸福快乐的童年</h1>
      <p class="meta-info">2022年06月18日</p>
      <div class="article-content">
        <p>
          山高路远求学难。山区的教育，多少年来困扰着大山深处的村民，也是脱贫路上“两不愁三保障”的一个“老大难”。
        </p>

        <p>
          2019年4月，习近平总书记赴重庆考察调研。适逢脱贫攻坚战进入决胜的关键阶段，总书记专程到地处武陵山集中连片特困地区的小山村——华溪村去看一看。翻过一道道山、走过一道道梁，一路奔波。总书记深情地对乡亲们说：“换了三种交通工具到这里，就是想实地了解‘两不愁三保障’是不是真落地。”
        </p>

        <p>
          中益乡小学是习近平总书记考察的第一站。他牵挂着大山深处如何阻止贫困现象代际传递的事。总书记嘱咐当地干部：“‘两不愁三保障’，很重要的一条就是义务教育要有保障。再苦不能苦孩子，再穷不能穷教育。要保证贫困山区的孩子上学受教育，有一个幸福快乐的童年。”
        </p>

        <p>
          这是中国共产党人的初心承诺，这是无论多么偏远的村庄都能感受到的和煦春风。
        </p>

        <p>
          如今的中益乡小学，校园面貌和总书记考察时相比有了很大改观。综合楼、宿舍楼、实验室、图书馆一应俱全，教室里配备了电子白板，塑胶操场、篮球场、足球场跃动着孩子们奔跑的身影。读书声、欢笑声，传得很远很远。
        </p>

        <p>
          改变的不仅是硬件设施。来自西南大学的支教老师桂欢欢说，“大山里的孩子们可以通过网络与城市的孩子们同上一堂课。”以教育信息化促进教育现代化，重庆市“宽带网络校校通”开通率、拥有多媒体教室的学校占比均实现100%。
        </p>

        <p>
          乡村孩子的营养餐，习近平总书记挂念在心。考察期间，总书记走进师生食堂，仔细察看餐厅、后厨。师生们的午饭已经出炉，荤素搭配的四菜一汤冒着热气。那一天，总书记同村里乡亲谈到学校见闻时感慨：“我想起咱们开始扶贫的时候，推行每个孩子保证每天一杯牛奶、一个鸡蛋。现在每顿标准涨到了6块钱，比当初丰富多了。”
        </p>

        <p>
          小饭碗影响着下一代的健康和体质。这些年，从脱贫攻坚到乡村振兴，重庆持续实施农村学生营养改善计划。自2021年秋季学期起，重庆为每名农村义务教育学生再补贴1元。“与2011年相比，农村学生营养不良检出率平均降低5个百分点，身高平均增长2厘米。”重庆市教委有关负责人介绍。
        </p>

        <p>
          教育攸关未来。今天的中国，兴办着世界上规模最大的教育。既有春风化雨，也在修枝固本。重庆近年来扎实推进义务教育薄弱环节改善与能力提升专项工作。乡村寄宿制学校和小规模学校建设成效明显，乡村教师岗位生活补助稳步提高，教师队伍也越来越稳定。
        </p>

        <p>
          马影翠在中益乡小学当了20年老师，切身感受着一年年的变化：“我们一定按照总书记的要求，既要当好老师，又要当好临时家长，把学生教好、管好，为乡村振兴贡献一份力量。”
        </p>

        <p>（本报记者 蒋云龙 孙立极）</p>
      </div>

      <p class="source-link">
        <a
          href="http://www.moe.gov.cn/jyb_xwfb/s5147/202206/t20220620_638832.html"
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
