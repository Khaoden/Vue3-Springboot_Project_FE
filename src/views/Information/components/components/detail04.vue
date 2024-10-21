  <template>
  <div class="background-container">
    <div class="content-box">
      <h1 class="title">乌蒙山上的大迁徙：毕节32万移民搬进新家</h1>
      <p class="meta-info">2020年04月12日</p>
      <div class="article-content">
        <p>
          这是乌蒙山历史上一个惊天动地的壮举，是一次能够载入史册的全民幸福大迁徙。10万山区贫困群众离开故园，进入城市生活，实现了华丽蜕变。
        </p>

        <p>
          乌蒙山位于滇东高原北部和贵州高原西北部，是金沙江及北盘江分水岭。地势呈东北—西南走向，海拔约2000米，最高峰4000米，山间多盆地和深谷，人居环境恶劣。
        </p>

        <p>
          云南会泽，一座位于中国西南大地上的边陲古城，地处乌蒙山腹地，是国家级扶贫开发重点县和乌蒙山片区集中连片特困县，是全省27个国家级深度贫困县之一。这里山高、坡陡、谷深，泥石流多发。山里人穷，求学不易，交通不便，求医困难。大山给了他们坚韧的脊梁，却也彻底地蒙住了他们的眼睛，让他们无法看到外面的世界。良禽择木而栖，良居择地而建，走出大山，成了山里人世世代代的向往。
        </p>

        <p>
          会泽县总人口106万，2017年底仍有建档立卡贫困人口20.67万，贫困发生率22.76%，这些贫困人口绝大多数居住在高寒冷凉、干热河谷等生态环境脆弱的地区，脱贫难度大、脱贫成本高、容易返贫。为让大山人断穷根、挪穷窝，解决“一方水土养育不了一方人”的实际困难，会泽县委、县政府制定了一系列易地扶贫搬迁措施，把易地扶贫搬迁县城安置工作作为脱贫攻坚的重中之重，作为阻断贫困代际传递、恢复生态的治本之策，作为加快城镇化发展的突破口，推进扶贫攻坚与城市发展“两个轮子一起转”，以城镇化带动脱贫攻坚。
        </p>

        <p>
          整个易地扶贫搬迁县城安置区建设分两期进行，总投资约150亿元，总占地面积218公顷，总建筑面积226万平方米。按照人均20平方米的标准，建安置房281栋共162.17万平方米，搬迁安置贫困群众19872户81085人。其中，2018年项目安置建档立卡贫困群众5140户20361人，已经搬迁入住。2019年项目安置14732户60724人，年底搬迁入住。
        </p>

        <p>
          “南风知我意，吹梦到新城。”会泽新城位于县城西面，头枕金钟夕照，脚踏温泉柳浪，左观蔓海秋成，右赏龙幕桃花。这里交通方便，风光旖旎，气候怡人。虽然正在建设中，但已颇具规模：一幢幢高楼鳞次栉比，一条条街道宽敞明亮，一面面文化墙丰韵雅致。晨曦中，夕照里，落霞处，随处可见新城的居民们聚在一起，一边闲聊外面世界的日新月异，一边回味自己以前几十年一成不变的旧砖土坯房，情不自禁地发出“党的政策好、赶上新时代”的感叹。
        </p>
      </div>

      <p class="source-link">
        <a
          href="https://news.gmw.cn/2020-04/12/content_33733138.htm"
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
