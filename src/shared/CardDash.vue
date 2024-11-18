<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    value: {
        type: [String, Number],
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    icon: {
        type: [Object, Function],
        required: true
    }
});
</script>

<template>
    <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-700">{{ title }}</h3>
            <component :is="icon" class="w-6 h-6 text-gray-400" />
        </div>
        <p class="text-3xl font-bold text-gray-800">{{ value }}</p>
        <p class="text-sm text-gray-500 mt-2">{{ description }}</p>
    </div>
</template>
