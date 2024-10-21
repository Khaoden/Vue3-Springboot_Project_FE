<template>
  <div class="background-container">
    <div class="content-box">
      <h1 class="title">大别山区扶贫路</h1>
      <div class="article-content">
        <p class="meta-info">2019年04月19日</p>
        <p>新华社照片，霍山（安徽），2019年4月19日</p>

        <p>大别山区扶贫路</p>

        <p>
          这是在霍山县太阳乡拍摄的大别山旅游扶贫快速通道（4月19日无人机拍摄）。大别山旅游扶贫快速通道位于安徽省六安市境内，全长259公里，连接霍山县、金寨县15个乡镇，将沿线多个旅游景区连接起来，推动了大别山区乡村旅游的发展，成为山区贫困群众的脱贫致富路。新华社记者刘军喜摄
        </p>

        <p>新华社照片，霍山（安徽），2019年4月19日</p>

        <p>大别山区扶贫路</p>

        <p>
          这是在霍山县磨子潭镇拍摄的大别山旅游扶贫快速通道（4月18日无人机拍摄）。大别山旅游扶贫快速通道位于安徽省六安市境内，全长259公里，连接霍山县、金寨县15个乡镇，将沿线多个旅游景区连接起来，推动了大别山区乡村旅游的发展，成为山区贫困群众的脱贫致富路。新华社记者刘军喜摄
        </p>

        <p>新华社照片，霍山（安徽），2019年4月19日</p>

        <p>大别山区扶贫路</p>

        <p>
          这是在霍山县太阳乡拍摄的大别山旅游扶贫快速通道（4月19日无人机拍摄）。大别山旅游扶贫快速通道位于安徽省六安市境内，全长259公里，连接霍山县、金寨县15个乡镇，将沿线多个旅游景区连接起来，推动了大别山区乡村旅游的发展，成为山区贫困群众的脱贫致富路。新华社记者刘军喜摄
        </p>

        <p>新华社照片，霍山（安徽），2019年4月19日</p>

        <p>大别山区扶贫路</p>

        <p>
          这是在霍山县磨子潭镇拍摄的大别山旅游扶贫快速通道（4月18日无人机拍摄）。大别山旅游扶贫快速通道位于安徽省六安市境内，全长259公里，连接霍山县、金寨县15个乡镇，将沿线多个旅游景区连接起来，推动了大别山区乡村旅游的发展，成为山区贫困群众的脱贫致富路。新华社记者刘军喜摄
        </p>
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
