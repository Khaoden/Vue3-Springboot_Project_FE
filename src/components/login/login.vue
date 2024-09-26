<template>
    <div class="login">
      <div class="container">
        <div class="tit">登录</div>
        <input type="text" placeholder="账号" id="text" />
        <input type="password" placeholder="密码" id="password" />
        <button @click="verify">登录</button>
        <span>没有账号？<a href="#">去注册</a></span>
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
  const verify = () => {
    console.log('登录按钮被点击');
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
  }
  
  .login {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(200deg, #e3c5eb, #a9c1ed);
    overflow: hidden;
  }
  
  .container {
    position: relative;
    z-index: 1;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 400px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
  
  .container .tit {
    font-size: 26px;
    margin: 65px auto 70px auto;
  }
  
  .container input {
    width: 280px;
    height: 30px;
    text-indent: 8px;
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
    margin: 12px auto;
  }
  
  .container button {
    width: 280px;
    height: 40px;
    margin: 3px auto 40px auto;
    border: none;
    background: linear-gradient(-200deg, #fac0e7, #aac2ee);
    color: #fff;
    font-weight: bold;
    letter-spacing: 8px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
  }
  
  .container button:hover {
    background: linear-gradient(-200deg, #aac2ee, #fac0e7);
  }
  
  .container span {
    font-size: 14px;
  }
  
  .container a {
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
    animation: square 10s linear infinite;
  }
  
  .circle li {
    animation: circle 10s linear infinite;
  }
  
  @keyframes square {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: scale(5) rotate(1000deg);
      opacity: 0;
    }
  }
  
  @keyframes circle {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 1;
      bottom: 0;
      border-radius: 0;
    }
    100% {
      transform: scale(5) rotate(1000deg);
      opacity: 0;
      bottom: 90vh;
      border-radius: 50%;
    }
  }
  </style>
  