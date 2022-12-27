<script lang="ts" setup>
import { onMounted } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';

onMounted(async () => {
  const result: any = await axios.post('/api/login', { user: 'admin', password: '123456' })
  console.log(result);
  const { code, msg } = result.data
  if (code != 200) {
    ElMessage({
      message: msg,
      type: 'error',
    })
  } else {
    ElMessage({
      message: msg,
      type: 'success',
    })
  }
})
</script>

<template>
  <div>home</div>
</template>

<style scoped lang="">

</style>