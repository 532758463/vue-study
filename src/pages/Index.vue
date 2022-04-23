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

const tabNames = {
  PropsDemoVue: "Props",
  ReactiveDemoVue: 'reactive',
  SlotDemoVue: '插槽',
  ComputedDemoVue: '计算属性'
}

const currentTab = ref('PropsDemoVue')
</script>
<template>
  <FancyButton v-for="(_, tab) in tabs" @click="currentTab = tab">
    {{ tabNames[tab] }}
    <AwesomeIcon v-if="currentTab === tab" />
  </FancyButton>
  <component :is="tabs[currentTab]" class="tab"></component>
</template>

<style>
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
