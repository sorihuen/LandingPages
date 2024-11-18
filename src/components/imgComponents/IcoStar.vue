<script setup>
const props = defineProps({
    svgColor: {
        type: String,
        default: "none",
    },
    height: {
        type: String,
        default: undefined,
    },
    width: {
        type: String,
        default: "100%",
    },
    svgBorderColor: {
        type: String,
        default: "white",
    },
});
</script>

<template>
    <svg :width="width" :height="height ? height : width" viewBox="0 0 47 47" :fill="svgBorderColor"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M23.4998 3.91663L29.5511 16.1758L43.0832 18.1537L33.2915 27.6908L35.6023 41.1641L23.4998 34.7995L11.3973 41.1641L13.7082 27.6908L3.9165 18.1537L17.4486 16.1758L23.4998 3.91663Z"
            :fill="svgColor" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
