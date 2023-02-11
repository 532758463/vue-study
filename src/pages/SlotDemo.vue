<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import SlotDemo from '@/components/SlotDemo.vue';


const dynamicSlotName = ref('header');

function changeSlotName() {
    dynamicSlotName.value = dynamicSlotName.value === 'footer' ? 'header' : 'footer'
}

</script>

<template>
    <SlotDemo msg="Hello Vue 3 + TypeScript + Vite">
        <template #[dynamicSlotName]="slotProps">
            <h1>Here might be a page title</h1>
            <router-link to='/slot'>Go to slot page.</router-link>
            <h2>{{ slotProps.text }}</h2>
            <h2>{{ slotProps.count }}</h2>
        </template>

        <!-- implicit default slot -->
        <p class="bg-red-500">A paragraph for the main content.</p>
        <p>And another one.</p>
        <button class="border bg-sky-400" :onclick="changeSlotName">动态改变插槽</button>

        <template #footer>
            <p>Here's some contact info</p>
        </template>
    </SlotDemo>
</template>