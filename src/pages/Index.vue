<script lang="ts" setup>
import { ref } from 'vue';
import FancyButton from '@/components/FancyButton.vue'
import AwesomeIcon from '@/components/AwesomeIcon.vue'
import PropsDemoVue from './PropsDemo.vue'
import ReactiveDemoVue from './ReactiveDemo.vue'
import SlotDemoVue from './SlotDemo.vue'
import ComputedDemoVue from './ComputedDemo.vue'
import ClassBindingVue from '@/components/ClassBinding.vue';
import Form from '@/components/Form.vue'
import EmitPage from './EmitPage.vue'
import AttrDemo from '@/components/AttrsAndListeners/Level1.vue'
import IframeVue from './Iframe.vue'
import InjectDemo from '@/components/ProvideAndInject/Level1.vue'
import LifecycleVue from '@/components/Lifecycle/Lifecycle.vue'
import KeepAliveDemo from '@/components/KeepAlive/index.vue'

const tabs = {
  PropsDemoVue,
  ReactiveDemoVue,
  SlotDemoVue,
  ComputedDemoVue,
  ClassBindingVue,
  Form,
  EmitPage,
  AttrDemo,
  IframeVue,
  InjectDemo,
  LifecycleVue,
  KeepAliveDemo
}

const tabNames = {
  PropsDemoVue: "Props",
  ReactiveDemoVue: 'reactive',
  SlotDemoVue: '插槽',
  ComputedDemoVue: '计算属性',
  ClassBindingVue: '属性绑定',
  Form: '表单',
  EmitPage: '自定义事件',
  AttrDemo: 'attr',
  IframeVue: 'Iframe',
  InjectDemo: 'Provide and Inject',
  LifecycleVue: '生命周期',
  KeepAliveDemo: 'KeepAliveDemo'
}

const currentTab = ref('PropsDemoVue')
</script>
<template>
  <FancyButton v-for="(_, tab) in tabs" @click="currentTab = tab">
    {{ tabNames[tab] || tab }}
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
