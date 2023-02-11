<script setup>
import { ref } from 'vue'
import CustomInput from '@/components/CustomInput.vue'
import UserName from '@/components/UserName.vue'

const message = ref('hello')
const firstName = ref('John')
const lastName = ref('Doe')
</script>

<template>
    <div>
        <h1>v-modal</h1>
        <CustomInput v-model="message" /> {{ message }}
        <br />
        <h1>{{ firstName }} {{ lastName }}</h1>
        <UserName v-model:first-name="firstName" v-model:last-name="lastName" />
    </div>
</template>