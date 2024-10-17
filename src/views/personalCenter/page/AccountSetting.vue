<template>
  <div class="page-wrapper">
    <div class="account-settings">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>账号设置</span>
          </div>
        </template>

        <el-row
          v-for="(item, index) in accountItems"
          :key="index"
          class="account-row"
        >
          <el-col :span="8">{{ item.name }}</el-col>
          <el-col :span="8">{{ item.status }}</el-col>
          <el-col :span="8">
            <el-button
              v-if="item.buttonText"
              :type="item.buttonType"
              size="small"
              @click="handleClick(item)"
            >
              {{ item.buttonText }}
            </el-button>
          </el-col>
        </el-row>
      </el-card>

      <!-- 手机换绑的弹出框 -->
      <el-dialog v-model="dialogVisible" title="手机换绑" width="30%" center>
        <span>原手机号 {{ currentPhone }}</span>
        <el-input
          v-model="verificationCode"
          placeholder="验证码"
          class="verification-input"
        >
          <template #append>
            <el-button @click="getVerificationCode">获取验证码</el-button>
          </template>
        </el-input>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="submitChange">下一步</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const dialogVisible = ref(false);
const currentPhone = ref("19******0219");
const verificationCode = ref("");

const accountItems = reactive([
  {
    name: "手机",
    status: "19******0219",
    buttonText: "换绑",
    buttonType: "primary",
  },
  { name: "微信", status: "未绑定", buttonText: "绑定", buttonType: "primary" },
  {
    name: "邮箱",
    status: "未绑定",
    buttonText: "绑定",
    buttonType: "primary",
  },
  {
    name: "GitHub",
    status: "未绑定",
    buttonText: "绑定",
    buttonType: "primary",
  },
  { name: "密码", status: "", buttonText: "重置", buttonType: "primary" },
  { name: "账号注销", status: "", buttonText: "注销", buttonType: "danger" },
]);

const handleClick = (item) => {
  if (item.name === "手机") {
    dialogVisible.value = true;
  }
  console.log(`${item.name} 操作: ${item.buttonText}`);
};

const getVerificationCode = () => {
  console.log("获取验证码");
};

const submitChange = () => {
  console.log("提交验证码", verificationCode.value);
  dialogVisible.value = false;
};
</script>

<style scoped>
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.page-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/background/image02.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: backgroundZoom 20s ease-in-out infinite; /* 修改动画 */
}

.page-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, transparent 70%, white 100%);
}

.account-settings {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-card {
  width: 60%;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
}

.card-header {
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
}

.account-row {
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid #ebeef5;
}

.account-row:last-child {
  border-bottom: none;
}

.el-col {
  display: flex;
  align-items: center;
}

.el-button {
  margin-left: auto;
}

.verification-input {
  width: 100%;
  margin: 15px 0;
}

.dialog-footer {
  text-align: right;
}

@keyframes backgroundZoom {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
