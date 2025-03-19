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
    {{ $translate('greetings.hello') }}
    <div class="container">
      <div>1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>
      <div class="item4">4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </div>
  </div>
</template>

<style>
.container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 20px 1fr;
  row-gap: 20px;
  column-gap: 20px;


  div {
    border: 1px solid green;
    background-color: lime;
  }
  .item2 {
    grid-column-end:span 3;
  }
  .item3 {
    grid-column: 1;
  }
}
</style>
