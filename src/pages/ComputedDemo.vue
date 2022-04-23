<script setup lang="ts">
import { reactive, computed, ref } from 'vue'

const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
    // getter
    get() {
        return firstName.value + ' ' + lastName.value
    },
    // setter
    set(newValue: string) {
        // Note: we are using destructuring assignment syntax here.
        [firstName.value, lastName.value] = newValue.split(' ')
    }
});

const changeFullName = () => {
    //现在当你再运行 fullName.value = 'JanNext DoeNext' 时，
    // setter 会被调用而 firstName 和 lastName 会随之更新。
    fullName.value = 'JanNext DoeNext';
}

</script>

<template>
    <p :onclick="changeFullName">Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <p>{{ fullName }}</p>
</template>