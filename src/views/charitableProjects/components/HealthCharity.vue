<template>
  <div class="health-public-service">
    <div class="header">
      <h1>健康公益</h1>
      <p>提高公众健康水平 而开展的各种公益活动和服务</p>
    </div>
  </div>
  <div class="card-container">
    <div class="card">
      <img src="../../../assets/background/test.png" alt="小鹿灯">
      <p>“小鹿灯”儿童重症救助平台</p>
    </div>
    <div class="card">
      <img src="../../../assets/background/test.png" alt="军见病就诊地图">
      <p>军见病就诊地图</p>
    </div>
    <div class="card">
      <img src="../../../assets/background/test.png" alt="基层医生">
      <p>基层医生</p>
    </div>
  </div>
</template>


<script setup>
// No specific logic needed, this is purely for layout purposes
</script>

<style scoped>
.health-public-service {
  text-align: center;
  background: url('../../../assets/background/test.jpg') no-repeat center center;
  background-size:cover;
  padding: 150px 0; 
  color: white;
  overflow-x: hidden;
  
}

.header {
  margin-bottom: 30px;
}

.header h1 {
  font-size: 3rem;
  margin: 0;
}

.header p {
  font-size: 1.2rem;
  margin: 10px 0;
}

.card-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: -100px;
}

.card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card p {
  background-color: #ff6600;
  color: white;
  margin: 0;
  padding: 10px;
  font-size: 1.1rem;
}
</style>
