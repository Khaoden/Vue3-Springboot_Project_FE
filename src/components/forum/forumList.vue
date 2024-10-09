<template>
    <div class="forum-list">
        <template class="forum-item" v-for="item in data" :key="item.id">
            <div class="main">
                <div class="avatar">

                </div>
                <div class="description">

                </div>
                <div div="create-user">

                </div>
            </div>
            <el-divider />
        </template>
    </div>
</template>

<script setup>
const data = [
  {
    user: {
      avatar: "null",
      nickname: "sam1",
      id: 1,
      name: "sam wang",
      email: "12345@qq.com",
      sex: 1,
      create_time: "2020-07-10T03:13:22.000000Z",
      update_time: "2023-04-24T07:50:56.000000Z",
    },
    description: "Hello World!",
    id: 1,
    causer_id: 1,
    event: "created",
    create_time: "2024-10-09T00:40:30.000000Z",
    update_time: "2024-10-09T00:40:30.000000Z",
  },
  {
    user: {
      avatar: "null",
      nickname: "lily1",
      id: 2,
      name: "lily",
      email: "12345@qq.com",
      sex: 0,
      create_time: "2020-07-10T03:13:22.000000Z",
      update_time: "2023-04-24T07:50:56.000000Z",
    },
    description: "Hello World!",
    id: 2,
    causer_id: 2,
    event: "created",
    create_time: "2024-10-09T00:40:30.000000Z",
    update_time: "2024-10-09T00:40:30.000000Z",
  },
  {
    user: {
      avatar: "null",
      nickname: "sam2",
      id: 3,
      name: "sam wang",
      email: "12345@qq.com",
      sex: 1,
      create_time: "2020-07-10T03:13:22.000000Z",
      update_time: "2023-04-24T07:50:56.000000Z",
    },
    description: "Hello World!",
    id: 3,
    causer_id: 3,
    event: "created",
    create_time: "2024-10-09T00:40:30.000000Z",
    update_time: "2024-10-09T00:40:30.000000Z",
  },
  {
    user: {
      avatar: "null",
      nickname: "lily2",
      id: 4,
      name: "lily",
      email: "12345@qq.com",
      sex: 0,
      create_time: "2020-07-10T03:13:22.000000Z",
      update_time: "2023-04-24T07:50:56.000000Z",
    },
    description: "Hello World!",
    id: 4,
    causer_id: 4,
    event: "created",
    create_time: "2024-10-09T00:40:30.000000Z",
    update_time: "2024-10-09T00:40:30.000000Z",
  },
  {
    user: {
      avatar: "null",
      nickname: "sam3",
      id: 5,
      name: "sam wang",
      email: "12345@qq.com",
      sex: 1,
      create_time: "2020-07-10T03:13:22.000000Z",
      update_time: "2023-04-24T07:50:56.000000Z",
    },
    description: "Hello World!",
    id: 5,
    causer_id: 5,
    event: "created",
    create_time: "2024-10-09T00:40:30.000000Z",
    update_time: "2024-10-09T00:40:30.000000Z",
  },
];
</script>

<style lang="scss" scoped>

</style>