<template>
  <div class="perspective">
    <div class="wrap" id="imgwrap" ref="oWrap">
      <!-- 第一层图片，使用 topImgList -->
      <template v-for="(item, index) in topImgList" :key="item.name">
        <img
          v-if="getImageUrl(item.src)"
          :src="getImageUrl(item.src)"
          :alt="item.name"
          class="f1 user-image"
          :style="getImageStyle(index, 0)"
        />
      </template>

      <!-- 第二层图片，使用 middleImgList -->
      <template v-for="(item, index) in middleImgList" :key="item.name">
        <img
          v-if="getImageUrl(item.src)"
          :src="getImageUrl(item.src)"
          :alt="item.name"
          class="f2 user-image"
          :style="getImageStyle(index, 1)"
        />
      </template>

      <!-- 第三层图片，使用 bottomImgList -->
      <template v-for="(item, index) in bottomImgList" :key="item.name">
        <img
          v-if="getImageUrl(item.src)"
          :src="getImageUrl(item.src)"
          :alt="item.name"
          class="f3 user-image"
          :style="getImageStyle(index, 2)"
        />
      </template>
      
      <p></p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { topImgList, middleImgList, bottomImgList } from "@/assets/js/imgList";

const images = import.meta.glob("@/assets/background/*.{png,jpg,jpeg}", {
  eager: true,
  import: 'default',
});

const getImageUrl = (filename) => {
  const keys = Object.keys(images);
  const matchingKey = keys.find(key => key.toLowerCase().includes(filename.toLowerCase()));
  return matchingKey ? images[matchingKey] : null;
};

const oWrap = ref(null);
const rotX = ref(-20);
const rotY = ref(0);

const getImageStyle = (index, layer) => {
  const len = topImgList.length;
  const deg = 360 / len;
  const translateZ = 645.75;
  const translateY = layer * 240;
  return {
    transform: `rotateY(${deg * index}deg) translateZ(${translateZ}px) translateY(${translateY}px)`,
    transition: `1s ${(len - index) * 0.1}s`,
  };
};

const wrapStyle = computed(() => {
  return `rotateX(${rotX.value}deg) rotateY(${rotY.value}deg)`;
});

onMounted(() => {
  let lastX, lastY, isMouseDown = false;
  let rafId = null;

  const updateRotation = () => {
    if (oWrap.value) {
      oWrap.value.style.transform = wrapStyle.value;
    }
    rafId = null;
  };

  const onMouseMove = (e) => {
    if (!isMouseDown) return;
    
    const newX = e.clientX;
    const newY = e.clientY;
    const minusX = newX - lastX;
    const minusY = newY - lastY;

    rotX.value -= minusY * 0.2;
    rotY.value += minusX * 0.1;
    
    lastX = newX;
    lastY = newY;

    if (!rafId) {
      rafId = requestAnimationFrame(updateRotation);
    }
  };

  const onMouseDown = (e) => {
    isMouseDown = true;
    lastX = e.clientX;
    lastY = e.clientY;
  };

  const onMouseUp = () => {
    isMouseDown = false;
  };

  window.addEventListener('mousemove', onMouseMove, { passive: true });
  window.addEventListener('mousedown', onMouseDown, { passive: true });
  window.addEventListener('mouseup', onMouseUp, { passive: true });
  window.addEventListener('mouseleave', onMouseUp, { passive: true });

  // Cleanup function
  return () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mousedown', onMouseDown);
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mouseleave', onMouseUp);
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  };
});
</script>

<style scoped>
.perspective {
  perspective: 600px; 
}

.wrap {
  width: 135px;
  height: 240px;
  margin: 100px auto;
  position: relative;
  transform: rotateX(-20deg) rotateY(0deg);
  transform-style: preserve-3d;
  will-change: transform;
}

.wrap img {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  box-shadow: 0 0 4px #fff;
  border-radius: 5px;
  will-change: transform;
}

.user-image {
  width: 150px;
  height: auto;
  object-fit: cover;
}
</style>