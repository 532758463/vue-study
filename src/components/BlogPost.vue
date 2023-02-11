<script setup  lang="ts">

// 1. 此方式获取props需要script标签上面lang="ts"
defineProps<{
    title: string,
    title2: string,
    count: number
}>();

// 2.
// defineProps({
//   title: String,
//   title2: Number
// })

// 3.
// defineProps(['title','title2'])

// 自定义事件
defineEmits(['enlarge-text', 'add'])
</script>

<template>
    <div class="blog-post">
        <h4>{{ title }}</h4>
        <h4>
            {{ title2 }}
        </h4>
        <h2 @click="$emit('add', 2)">{{ count }}</h2>
        <button @click="$emit('enlarge-text')">Enlarge text</button>
    </div>
</template>