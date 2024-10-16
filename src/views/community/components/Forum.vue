<template>
  <div class="common-layout">
    <el-container>
      <el-main class="main">
        <div class="title-list">
          <span class="title">益论坛</span>
          <el-divider class="divider" />
        </div>
        <ForumList />
        <Pagination />
      </el-main>
      <el-aside width="500px" class="aside">
        <div class="title-list">
          <span class="title">益动态</span>
           <ForumAside />
        </div>
      </el-aside>
    </el-container>
  </div>
</template>
<script setup>
import ForumList from "@/components/forum/forumList.vue";
import Pagination from "@/components/pagination/pagination.vue";
import ForumAside from '@/components/forum/forumAside.vue';
</script>

<style lang="scss" scoped>
.common-layout {
  display: flex;
  justify-content: center;
  background-color: rgb(245, 245, 245);
    
  .el-container {
    display: flex;
    margin-top: 50px;
    margin-bottom: 100px;
    .main {
      padding: 0;
      margin-left: 200px;
      margin-right: 12px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

      .forum-list {
        padding: 20px;
        padding-top: 0;
      }

      .title-list {
        height: 50px;
        line-height: 50px;
        .title {
          margin-left: 20px;
          font-weight: 800;
        }
        .divider {
          margin: 0;
        }
      }
    }
  }

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
        font-weight: 800;
      }
      .divider {
        margin: 0;
      }
    }
  }
}
</style>