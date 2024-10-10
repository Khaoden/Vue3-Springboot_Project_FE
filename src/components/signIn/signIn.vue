<template>
  <div class="container">
    <canvas ref="threeCanvas"></canvas>
    <div class="form-container">
      <div class="form-content">
        <h2>欢迎您的到来</h2>
        <form @submit.prevent="handleSubmit" autocomplete="off">
          <div class="input-group">
            <label for="email">电子邮箱</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="input-group">
            <label for="password">密码</label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">注册</button>
        </form>
        <div class="form-footer">
          <p>已有账号，去登录！<router-link to="/login">登录</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Sky } from "three/examples/jsm/objects/Sky";
import { Water } from "three/examples/jsm/objects/Water";
import { ImprovedNoise } from "three/examples/jsm/math/ImprovedNoise";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const threeCanvas = ref(null);
const email = ref("");
const password = ref("");

const handleSubmit = () => {
  console.log("Submitting:", { email: email.value, password: password.value });
  // 这里添加您的提交逻辑
};

function generateTerrain(width, height, depth, scale) {
  const data = new Float32Array(width * height);
  const perlin = new ImprovedNoise();
  const size = width * height;
  const z = Math.random() * 100;

  let quality = 1;
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < size; i++) {
      const x = i % width;
      const y = Math.floor(i / width);
      data[i] += Math.abs(
        perlin.noise(x / quality / scale, y / quality / scale, z) *
          quality *
          1.75
      );
    }
    quality *= 5;
  }

  const geometry = new THREE.PlaneGeometry(
    width,
    height,
    width - 1,
    height - 1
  );
  geometry.rotateX(-Math.PI / 2);
  const vertices = geometry.attributes.position.array;
  for (let i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
    vertices[j + 1] = data[i] * depth;
  }
  geometry.computeVertexNormals();

  return geometry;
}

onMounted(() => {
  let scene, camera, renderer, controls, water, sun, sky;

  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      1,
      20000
    );
    camera.position.set(30, 30, 100);

    renderer = new THREE.WebGLRenderer({
      canvas: threeCanvas.value,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.5;

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.minDistance = 40;
    controls.maxDistance = 200;
    controls.maxPolarAngle = Math.PI * 0.495;

    sun = new THREE.Vector3();

    // 天空
    sky = new Sky();
    sky.scale.setScalar(10000);
    scene.add(sky);

    const skyUniforms = sky.material.uniforms;
    skyUniforms["turbidity"].value = 10;
    skyUniforms["rayleigh"].value = 2;
    skyUniforms["mieCoefficient"].value = 0.005;
    skyUniforms["mieDirectionalG"].value = 0.8;

    // 水
    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
    water = new Water(waterGeometry, {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load(
        "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/waternormals.jpg",
        function (texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }
      ),
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: scene.fog !== undefined,
    });
    water.rotation.x = -Math.PI / 2;
    scene.add(water);

    // 更新太阳位置
    const parameters = {
      elevation: 2,
      azimuth: 180,
    };

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    function updateSun() {
      const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
      const theta = THREE.MathUtils.degToRad(parameters.azimuth);
      sun.setFromSphericalCoords(1, phi, theta);
      sky.material.uniforms["sunPosition"].value.copy(sun);
      water.material.uniforms["sunDirection"].value.copy(sun).normalize();
      scene.environment = pmremGenerator.fromScene(sky).texture;
    }

    updateSun();

    // 地形
    // const terrainGeometry = generateTerrain(100, 100, 20, 2);
    // const terrainMaterial = new THREE.MeshStandardMaterial({
    //   color: 0x3d9970,
    //   metalness: 0.1,
    //   roughness: 0.8,
    // });
    // const terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
    // terrain.position.y = -5;
    // terrain.scale.set(3, 1, 3);
    // scene.add(terrain);

    // 树木
    // fetch("./models/RobotExpressive.glb")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(
    //         "Network response was not ok: " + response.statusText
    //       );
    //     }
    //     return response.blob();
    //   })
    //   .then((blob) => {
    //     console.log("File is accessible:", blob);
    //   })
    //   .catch((error) => {
    //     console.error("Error accessing file:", error);
    //   });

    window.addEventListener("resize", onWindowResize);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    water.material.uniforms["time"].value += 1.0 / 60.0;
    controls.update();
    renderer.render(scene, camera);
  }

  init();
  animate();
});
</script>

<style scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.form-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.form-content {
  padding: 40px;
}

h2 {
  margin: 0 0 10px;
  color: #333;
  font-size: 28px;
  font-weight: 700;
}

p {
  margin: 0 0 30px;
  color: #666;
  font-size: 16px;
}

form {
  margin-top: 15%;

}

.input-group {
  margin-bottom: 20px;
  width: 95%;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 14px;
  font-weight: 600;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
  background: rgba(255, 255, 255, 0.5);
}

input:focus {
  outline: none;
  background: white;;
}

input:-webkit-autofill {
    background-color: #f0f8ff; 
    color: #000; 
}

input:-webkit-autofill:focus {
    color: white 
}


button {
  width: 100%;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: white;
}

.form-footer {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}

.form-footer a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s;
}

.form-footer a:hover {
  color: white;
}
</style>
