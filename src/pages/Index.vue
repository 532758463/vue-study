<script lang="ts" setup>
import { ref } from 'vue';
import FancyButton from '@/components/FancyButton.vue'
import AwesomeIcon from '@/components/AwesomeIcon.vue'
import PropsDemoVue from './PropsDemo.vue'
import ReactiveDemoVue from './ReactiveDemo.vue'
import SlotDemoVue from './SlotDemo.vue'
import ComputedDemoVue from './ComputedDemo.vue'

const tabs = {
  PropsDemoVue,
  ReactiveDemoVue,
  SlotDemoVue,
  ComputedDemoVue
}
const currentTab = ref('Home')
</script>
<template>
  <FancyButton>
    Click me
  </FancyButton>
  <FancyButton v-for="(_, tab) in tabs" @click="currentTab = tab">
    {{ tab }}
    <AwesomeIcon />
  </FancyButton>
  <component :is="tabs[currentTab]" class="tab"></component>
</template>

<style>
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
