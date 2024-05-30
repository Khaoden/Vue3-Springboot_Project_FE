<script>
import {ElMessage} from 'element-plus'
export default {
    data(){
        return{}
    },
    methods:{
        showMessage(){
            ElMessage({type: 'success',message:'测试成功'})
        }
    }
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <el-button @click="showMessage" type="primary">ElementUI-Plus</el-button>
  <el-button @click="showMessage" type="primary" icon="Check">ElementUI-Plus</el-button>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
