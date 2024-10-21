<template>
  <div class="container">
    <canvas ref="threeCanvas"></canvas>
    <div class="form-container">
      <div class="form-content">
        <h2>欢迎您的到来</h2>
        <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }">
          <div class="input-group">
            <label for="username">用户名</label>
            <div class="input-wrapper">
              <Field name="username" v-slot="{ field, errors }">
                <input v-bind="field" type="text" placeholder="输入用户名" />
                <span class="error-message" :class="{ show: errors[0] }">{{ errors[0] }}</span>
              </Field>
            </div>
          </div>

          <div class="input-group">
            <label for="email">电子邮箱</label>
            <div class="input-wrapper">
              <Field name="email" v-slot="{ field, errors }">
                <input v-bind="field" type="email" placeholder="输入您的邮箱" />
                <span class="error-message" :class="{ show: errors[0] }">{{ errors[0] }}</span>
              </Field>
            </div>
          </div>

          <div class="input-group">
            <label for="password">密码</label>
            <div class="input-wrapper">
              <Field v-slot="{ field, errors }" name="password" :rules="passwordRules">
                <input v-bind="field" type="password" placeholder="输入您的密码" />
                <span class="error-message" :class="{ show: errors[0] }">{{ errors[0] }}</span>
              </Field>
            </div>
          </div>

          <button type="submit" :disabled="Object.keys(errors).length > 0">注册</button>
        </Form>

        <div class="form-footer">
          <p>已有账号，去登录！<router-link to="/login">登录</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Sky } from "three/examples/jsm/objects/Sky";
import { Water } from "three/examples/jsm/objects/Water";
import { useRouter } from "vue-router";
import { register } from '@/api/auth.js';

const threeCanvas = ref(null);
const router = useRouter();

const schema = yup.object({
  username: yup.string().required('用户名是必填的').min(3, '用户名至少需要3个字符'),
  email: yup.string().required('邮箱是必填的').email('请输入有效的邮箱地址'),
  password: yup.string()
    .required('密码是必填的')
    .min(6, '密码至少需要6个字符')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)/, '密码必须包含至少一个字母和一个数字')
});


const handleSubmit = async (values, { resetForm }) => {
  try {
    const response = await register(values.username, values.email, values.password);
    console.log('Registration response:', response);
    alert('注册成功！请检查您的邮箱以验证账户。验证后您就可以登录了。');
    // resetForm();
  } catch (error) {
    console.error('Registration error:', error);
    if (error.response) {
      console.error('Error response:', error.response.data);
      alert(`注册失败：${error.response.data || '未知错误'}`);
    } else if (error.request) {
      console.error('No response received:', error.request);
      alert('注册失败：服务器无响应');
    } else {
      console.error('Error setting up request:', error.message);
      alert(`注册失败：${error.message}`);
    }
  }
};



// 这里是您的 Three.js 初始化代码
onMounted(() => {
  // 初始化 Three.js 场��
  // ...（您的 Three.js 代码）
});

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

const passwordRules = (value) => {
  if (!value) return '密码是必填的';
  if (value.length < 6) return '密码至少需要6个字符';
  if (!/^(?=.*[A-Za-z])(?=.*\d)/.test(value)) return '密码必须包含至少一个字母和一个数字';
  return true;
};
</script>
<style scoped>
.error-message {
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 12px;
  color: #ff4d4f;
  padding: 2px 5px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.error-message.show {
  opacity: 1;
  transform: translateY(5px);
}

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

canvas {
  position: absolute;
  top: 0;
  right: 0;
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
  width: 85%;
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
  margin-bottom: 25px; /* 增加间距，确保错误消息有足够的空间 */
  position: relative;
}

.input-wrapper {
  position: relative;
  width: 100%;
  min-height: 50px; /* 减少最小高度 */
}

input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 5px; /* 添加一些底部边距 */
}

.error-message {
  position: absolute;
  bottom: -200px; /* 调整位置，使其更贴近输入框 */
  left: 0;
  font-size: 12px;
  color: #ff4d4f;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2px 5px;
  border-radius: 3px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.error-message.show {
  opacity: 1;
  transform: translateY(0); /* 移除 Y 轴的位移 */
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #ddd;
}


.icon {
  margin-left: 10px;
  font-size: 18px;
  flex-shrink: 0; 
  margin-left: 10px; 
  font-size: 18px; 
}

.green-check {
  color: green;
}

.red-cross {
  color: red;
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

input:not(:placeholder-shown) {
    background-color: #f8f9fa; /* 可选：改变背景颜色 */
}

/* input:valid {

} */

input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
    background-color: #fff !important;
    color: #333 !important;
    box-shadow: 0 0 0px 1000px white inset !important; /* 消除默认的黄色阴影 */
    -webkit-text-fill-color: #333 !important; /* 文字颜色 */
    transition: background-color 5000s ease-in-out 0s; /* 防止闪烁 */
}


button {
  width: 95%;
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

.error-message {
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 12px;
  color: #ff4d4f;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2px 5px;
  border-radius: 3px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.error-message.show {
  opacity: 1;
  transform: translateY(5px);
}

.input-wrapper {
  position: relative;
  margin-bottom: 25px;
}
</style>
















