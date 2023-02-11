<template>
    <iframe style="height: 100vh;width:100%" :src="url"></iframe>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const url = ref()

onMounted(() => {
    url.value = new URLSearchParams(location.href).get('url') || 'https://vip.parwix.com:4433/player/?url=https://v.qq.com/x/cover/mzc00200e3unmkf/k0042oaf8y1.html'
})
</script>
