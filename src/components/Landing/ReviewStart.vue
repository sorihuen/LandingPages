<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import IcoStar from '@/components/imgComponents/IcoStar.vue';
import FeedbackModal from '@/components/Landing/FeedbackReview.vue'

const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false,
    },
    backgroundClass: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(['close', 'submit']);
const countStar = ref(0);
const isFeedbackVisible = ref(false); // Controla si se muestra el modal de feedback
const router = useRouter(); // Para redirigir al inicio

// Cerrar modal principal
const close = () => {
    emit('close');
};

// Enviar la selección de estrellas
const submit = () => {
    if (countStar.value <= 3) {
        isFeedbackVisible.value = true; // Muestra el modal de feedback
    } else {
        // Redirigir al inicio (suponiendo que la ruta de inicio es '/')
        router.push('/');
    }
};
</script>

<template>
    <!-- Modal principal -->
    <section v-if="isVisible"
        class="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 p-2 flex justify-center items-center z-10 flex-wrap"
        :class="backgroundClass">
        <div class="relative px-6 py-12 bg-[#351716] text-white text-center rounded-lg shadow-lg max-w-sm w-full">
            <!-- Botón de cierre -->
            <button @click="close" class="absolute top-2 right-2 text-2xl font-bold text-white">
                &times;
            </button>

            <div class="mb-4 font-poppins">
                <slot name="content">Default content here</slot>
            </div>

            <template v-for="(star, i) in 5" :key="i">
                <div @click="countStar = i + 1" :class="`inline-block align-top ${i != 0 ? 'ml-1' : ''}`">
                    <IcoStar :width="'40px'" :svgColor="i < countStar ? 'yellow' : 'none'" />
                </div>
            </template>

            <div class="flex justify-center mt-4">
                <button @click="submit"
                    class="bg-sky-700 text-white px-8 py-1 rounded-md hover:bg-sky-400 transition-colors font-poppins">
                    Send to
                </button>
            </div>
        </div>
    </section>

    <!-- Modal de feedback -->
    <FeedbackModal v-if="isFeedbackVisible" :isVisible="true" @close="isFeedbackVisible = false" @submit="(feedback) => {
        isFeedbackVisible = false;
        router.push('/'); // Redirige al inicio después de enviar feedback
    }" />
</template>
