<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import BlogPost from '@/components/BlogPost.vue'

const posts = ref([
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' }
])

const postFontSize = ref(1);
const count = ref(0)
function add(c: number) {
    count.value = count.value + c
}

</script>

<template>
    <div :style="{ fontSize: postFontSize + 'em' }">
        <BlogPost :count="count" v-for="post in posts" :key="post.id" :title="post.title" :title2="post.title + post.id"
            @enlarge-text="postFontSize += 0.1" @add="add"></BlogPost>
    </div>
</template>

<style>
</style>
