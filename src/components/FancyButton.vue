<template>
    <button class="flex-auto px-0 bg-current border-red-600 rounded-sm shadow-lg filter fill-light-50 fancy-btn">
        <slot></slot> <!-- slot outlet -->
    </button>
</template>
<style scoped>
.fancy-btn {
    color: #fff;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    padding: 5px 10px;
    margin: 5px;
    border-radius: 8px;
    cursor: pointer;
}
</style>