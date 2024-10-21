<template>
    <iframe
      src="https://tbox.alipay.com/share/202410APxemY00094526?platform=WebService"
      style="
        border: none;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
      "
      frameborder="0"
      scrolling="no"
    ></iframe>
    <div class="hid"></div>
</template>

<script setup></script>

<style scoped>
.iframe-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.hid {
  position: absolute;
  bottom: 1vh;
  left: 8vh;
  width: 20vh;
  height: 8vh; /* 或者你想要的高度 */
  z-index: 9999;
  background-color: white; /* 添加背景色以便于看到div的位置 */
}
</style>
