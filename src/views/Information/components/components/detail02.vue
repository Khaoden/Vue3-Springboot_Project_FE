<template>
  <div class="background-container">
    <div class="content-box">
      <h1 class="title">从山区到城市：蓝山县易地搬迁助力幸福生活</h1>
      <p class="meta-info">2024-10-11 15:40 发布于：北京市</p>
      <div class="article-content">
        <p>
          近几年，中国的易地扶贫搬迁政策给无数山区居民带来了新生活的希望。蓝山县浆洞瑶族乡的集中安置点，正是这一政策成功实施的生动缩影。10月10日，我们走进这个新社区，整齐的楼房、宽阔的道路以及设施完善的休闲广场，无不彰显出美好的新生活。在这里，居民们面带笑容，享受着难得的安宁与幸福。
        </p>

        <p>
          节目中，我们见到了63岁的全五秀。2019年，她通过易地扶贫搬迁政策成功搬入了上洞村的新家。原本生活在偏远的山区，交通不便、水电不稳，全五秀和家人的生活可谓举步维艰。然而，如今的她却搬进了宽敞明亮的四室一厅的新居，一边在帮扶车间工作，一边照顾孙子，生活条件极大改善。"真是一举两得！"这是她对于新生活的真实感受。
        </p>

        <p>
          易地搬迁不仅仅是简单的搬迁，它在背后考量着每个搬迁家庭的具体困难。蓝山县政府特别关注特殊家庭的安置问题，优先为他们提供公益性岗位。比如，茶源坪村的盘大爷因家庭变故被纳入低保，并得到了环境保洁的工作，确保了他和家人的基本生活需求。
        </p>

        <p>
          随着政府对易地搬迁的支持，居民的就业问题也得到了解决。蓝山县城易地搬迁集中安置点的第一书记谭盛明表示，政府正在积极促进搬迁群众的就业技能培训，希望通过技能提升和创业支持，帮助他们拓展就业渠道。比如，通过一系列的文化活动，让搬迁群众社交并融入新环境，生活变得更加丰富多彩。
        </p>

        <p>
          此外，县就业服务中心还定期为搬迁群众提供就业信息和技能培训。搬迁的村民们表示，能在家门口工作，既解决了生活问题，也方便照顾家庭，这种便利的生活条件让他们倍感珍惜。59岁的陈桂兰就是其中一个成功的例子。她在易地搬迁后搬进新的五室一厅住宅，几乎与此同时，她的生活质量和家庭的幸福感都有了显著提升。
        </p>

        <p>
          随着搬迁工作的持续推进，蓝山县与地方产业的发展也逐渐对接，致力于吸引更多企业和人才回乡，带动村民的创业热情。在这样的背景下，越来越多的村民就像从"山里人"变成了"城里人"，享受到以前无法想象的幸福生活。
        </p>

        <p>
          蓝山县的成功案例，为其他地区的易地搬迁提供了宝贵的经验，也展现了政府在脱贫攻坚中所做出的努力。未来，随着政策的不断完善和落实，我们有理由相信，越来越多的易地搬迁群众将迎来更加美好的明天。
        </p>

        <p>
          在新时代的背景下，除了政策和资金支持，科技和智能化手段的运用同样不可忽视。通过智能工具的辅助，我们可以更好地规划和实施发展方案。例如，简单AI作为一款全能型AI创作助手，能够为我们提供创意美图和文章生成等服务，助力乡村振兴与产业发展。
        </p>
      </div>
      <p class="source-link">
        <a href="https://www.sohu.com/a/815597581_121956425" target="_blank"
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
