<template>
  <div class="background-container">
    <div class="content-box">
      <h1 class="title">新华社长篇通讯：中国脱贫攻坚全纪实</h1>
      <p class="meta-info">2021年02月24日</p>
      <div class="article-content">
        <p>
          当史学家书写21世纪第三个10年的开篇，在记录百年一遇大疫肆虐全球的同时，一定会标注一个奇迹。
        </p>

        <p>
          过去8年，在以习近平同志为核心的党中央坚强领导下，经过世界规模最大、力度最强的脱贫攻坚战，近1亿人摆脱绝对贫困，提前10年实现联合国可持续发展议程确定的减贫目标，14亿人即将迈入全面小康生活……
        </p>

        <p>（一）庄严的承诺</p>

        <p>
          雨水时节，太行山深处的河北阜平春和日暖。群山脚下的村庄，簇新的民居错落有致，灯笼高挂，一派喜庆。
        </p>

        <p>
          阜平，夏商时期，境内就有人居住。现代史上，阜平的名字曾牵动无数人的目光——包括阜平在内的晋察冀边区被称为“新中国的雏形”，为中国抗战和中国革命的胜利作出重要贡献。
        </p>

        <p>自然条件恶劣、资源条件匮乏，阜平群众常年与贫困抗争。</p>

        <p>
          农民唐宗秀保留了一张摄于2012年的照片：村里一片黄土色，房子是上世纪五十年代的土坯房。她形容“它黑你也黑，说不上谁最黑”，下雨时“外头大下，屋里小下”。
        </p>

        <p>
          2012年12月29日至30日，习近平总书记顶风冒雪来到阜平县骆驼湾村和顾家台村，进村入户看真贫，向全党全国发出脱贫攻坚的动员令。“全面建成小康社会，最艰巨最繁重的任务在农村、特别是在贫困地区。没有农村的小康，特别是没有贫困地区的小康，就没有全面建成小康社会。”
        </p>

        <p>
          这是一次特殊的看望——1个多月前，党的十八大召开，作出全面建成小康社会战略部署，脱贫攻坚是实现第一个百年奋斗目标的底线任务和标志性指标。
        </p>

        <p>
          2021年2月4日，农历小年，江西井冈山，白银湖村村民邱冬华贴上新对联——
        </p>

        <p>上联：“脱贫全靠惠民策”；</p>

        <p>下联：“致富迎来幸福春”；</p>

        <p>横批：“共产党万岁”。</p>

        <p>
          90多年前的1928年，邱冬华的曾祖父、当过教书先生的邱启山也写下一副对联，那一年中国共产党人打土豪分田地，制定《井冈山土地法》，穷苦农民获得梦寐以求的土地——
        </p>

        <p>上联：“分田不忘共产党”；</p>

        <p>下联：“幸福牢记毛委员”；</p>

        <p>横批：“共产党万岁”。</p>

        <p>两副对联，一样的横批，铭记着共产党人的不变承诺。</p>

        <p>
          从土地改革到新中国成立，中国共产党历史性扫除了导致中国人深陷贫困的制度根源。
        </p>

        <p>
          从以“五保”制度和特困群体救济为主的基本社会保障体系，到实施农村经济体制改革推动减贫，中国实现绝对贫困人口的急剧减少。
        </p>

        <p>
          “剁开一粒黄土，半粒在喊渴，半粒在喊饿。”甘肃的定西、河西和宁夏西海固，合称“三西”，曾是中国最穷的地方。
        </p>
      </div>

      <p class="source-link">
        <a
          href="https://mp.weixin.qq.com/s?__biz=MzIxNjc1MzIzOA==&mid=2247502741&idx=1&sn=dca2e7b76f67bb3284382f5f845d27df&chksm=9786beaca0f137ba3532daa5c95ed0916802373bd9cf2a51e0f9e6221d689044c81609972497&scene=27"
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
