<template>
  <div class="common-layout">
    <el-container>
      <el-main class="main">
        <div class="title-list">
          <span class="title">社区动态</span>
          <el-divider class="divider" />
        </div>
        <ForumList />
      </el-main>
      <el-aside width="500px" class="aside">
        <div class="title-list">
          <span class="title">社区小贴</span>
          <el-divider class="divider" />
        </div>
      </el-aside>
    </el-container>
  </div>
</template>
<script setup>
import ForumList from "@/components/forum/forumList.vue";
</script>

<style lang="scss" scoped>
.common-layout {
  display: flex;
  justify-content: center;
  background-color: rgb(245, 245, 245);

  .el-container {
    margin-top: 50px;
    height: 1000px;

    .main {
      padding: 0;
      margin-left: 200px;
      margin-right: 12px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      .title-list {
        height: 50px;
        line-height: 50px;
        .title {
            margin-left: 20px;
        }
        .divider {
            margin: 0;
        }
      }
    }
  }

  //   .main {
  //     max-width: 1000px;
  //     padding: 20px;
  //     background-color: #fff;
  //     border-radius: 10px;
  //     box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  //   }

  .aside {
    margin-right: 200px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .title-list {
        height: 50px;
        line-height: 50px;
        .title {
            margin-left: 20px;
        }
        .divider {
            margin: 0;
        }
      }
  }
}
</style>