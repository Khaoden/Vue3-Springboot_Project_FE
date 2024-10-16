<template>
  <div class="login">
    <div class="container">
      <div class="tit">登录</div>
      <input type="text" placeholder="账号" v-model="username" id="text" />
      <input
        type="password"
        placeholder="密码"
        v-model="password"
        id="password"
      />
      <button @click="verify">登录</button>
      <span>没有账号？<router-link to="/signIn">去注册</router-link></span>
    </div>
    <div class="square">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="circle">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { login } from '@/api/auth.js';

const username = ref("");
const password = ref("");
const router = useRouter();

const verify = () => {
  router.push("/main");
}

// const verify = async () => {
//   if (!username.value || !password.value) {
//     return alert("请输入有效的账号和密码");
//   }
//   try {
//     const response = await login(username.value, password.value);
//     localStorage.setItem('token', response.data.token);
//     console.log('登录成功', response.data);
//     // Assuming the backend returns a user object with a token
//     localStorage.setItem('user', JSON.stringify(response.data));
//     router.push("/main");
//   } catch (error) {
//     console.error('登录失败', error.response?.data);
//     alert(error.response?.data || "登录失败，请重试");
//   }
// };

const logout = () => {
  localStorage.removeItem('token');
  // 重定向到登录页面或首页
  router.push('/login');
};
</script>
<style scoped>
*{
    /* 初始化 */
    margin: 0;
    padding: 0;
}
.login{
    /* 100%窗口高度 */
    height: 100vh;
    width: 100vw;
    /* 弹性布局 居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    background: linear-gradient(200deg,#e3c5eb,#a9c1ed);
    /* 溢出隐藏 */
    /* overflow: hidden; */
}
.container{
    /* 相对定位 */
    position: relative;
    z-index: 1;
    background-color: #fff;
    border-radius: 15px;
    /* 弹性布局 垂直排列 */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 400px;
    /* 阴影 */
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}
.container .tit{
    font-size: 26px;
    margin: 65px auto 70px auto;
}
.container input{
    width: 280px;
    height: 30px;
    text-indent: 8px;
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
    margin: 12px auto;
}
.container button{
    width: 280px;
    height: 40px;
    margin: 3px auto 40px auto;
    border: none;
    background: linear-gradient(-200deg,#fac0e7,#aac2ee);
    color: #fff;
    font-weight: bold;
    letter-spacing: 8px;
    border-radius: 10px;
    cursor: pointer;
    /* 画过渡 */
    transition: 0.5s;
}
.container button:hover{
    background: linear-gradient(-200deg,#aac2ee,#fac0e7);
    background-position-x: -280px;
}
.container span{
    font-size: 14px;
}
.container a{
    color: plum;
    text-decoration: none;
}

ul li {
  position: absolute;
  border: 1px solid #fff;
  background-color: #fff;
  width: 40px;
  height: 40px;
  list-style: none;
  opacity: 0;
}
.square li {
  top: 40vh;
  left: 60vw;
  /* 执行动画：动画名 时长 线性的 无限次播放 */
  animation: square 10s linear infinite;
}
.square li:nth-child(2) {
  top: 80vh;
  left: 10vw;
  /* 设置动画延迟时间 */
  animation-delay: 2s;
}
.square li:nth-child(3) {
  top: 80vh;
  left: 85vw;
  /* 设置动画延迟时间 */
  animation-delay: 4s;
}
.square li:nth-child(4) {
  top: 10vh;
  left: 70vw;
  /* 设置动画延迟时间 */
  animation-delay: 6s;
}
.square li:nth-child(5) {
  top: 10vh;
  left: 10vw;
  /* 设置动画延迟时间 */
  animation-delay: 8s;
}
.circle li {
  bottom: 0;
  left: 15vw;
  /* 执行动画 */
  animation: circle 10s linear infinite;
}
.circle li:nth-child(2) {
  left: 35vw;
  /* 设置动画延迟时间 */
  animation-delay: 2s;
}
.circle li:nth-child(3) {
  left: 55vw;
  /* 设置动画延迟时间 */
  animation-delay: 6s;
}
.circle li:nth-child(4) {
  left: 75vw;
  /* 设置动画延迟时间 */
  animation-delay: 4s;
}
.circle li:nth-child(5) {
  left: 90vw;
  /* 设置动画延迟时间 */
  animation-delay: 8s;
}

/* 定义动画 */
@keyframes square {
  0% {
    transform: scale(0) rotateY(0deg);
    opacity: 1;
  }
  100% {
    transform: scale(5) rotateY(1000deg);
    opacity: 0;
  }
}
@keyframes circle {
  0% {
    transform: scale(0) rotateY(0deg);
    opacity: 1;
    bottom: 0;
    border-radius: 0;
  }
  100% {
    transform: scale(5) rotateY(1000deg);
    opacity: 0;
    bottom: 90vh;
    border-radius: 50%;
  }
}
</style>
