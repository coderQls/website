<script lang="ts" setup>
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(async () => {
  console.log(111);

  const result: any = axios.post('/api/login', { user: 'admin', password: '123456' })
  if (result.code != 200) {
    console.log('登录失败');
  } else {
    console.log('登录成功');
  }
})
</script>

<template>
  <div>home</div>
</template>

<style scoped lang="">

</style>