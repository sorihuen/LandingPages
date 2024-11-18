<script setup>
import { ref } from 'vue';
import imgfondo from '@/assets/img/fondoSabores.jpg';


const props = defineProps({
    isVisible: Boolean,
    backgroundClass: String
});

const emit = defineEmits(['close', 'submit']);
const feedbackText = ref('');

// Función para cerrar el modal
const close = () => {
    emit('close');
};

// Función para enviar el feedback
const submit = () => {
    emit('submit', feedbackText.value);
    feedbackText.value = ''; // Limpia el área de texto después de enviar
};
</script>

<template>
    <!-- Modal -->
    <div v-if="isVisible"
        class="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 p-2 flex justify-center items-center z-10 flex-wrap"
        :style="{
            backgroundImage: `url(${imgfondo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }">
        <div class="relative px-6 py-8 bg-[#FF8C00] rounded-lg shadow-lg max-w-md w-full">
            <!-- Botón de cierre -->
            <button @click="close" class="absolute top-2 right-2 text-2xl font-bold text-white">&times;</button>

            <!-- Título -->
            <h2 class="text-xl font-bold mb-4 text-black">We're sorry about that!</h2>

            <!-- Descripción -->
            <p class="mb-4 text-black focus:outline-none">
                Leave your review and receive your reward! We will make it better next time.
            </p>

            <!-- Área de texto para feedback -->
            <textarea v-model="feedbackText"
                class="w-full p-2 border rounded mb-4 text-black focus:outline-none focus:ring-0"
                placeholder="Write here..." rows="4"></textarea>

            <!-- Botón de envío -->
            <div class="flex justify-center mt-4">
                <button @click="submit"
                    class="bg-red-800 text-white px-8 py-1 rounded-md hover:bg-red-700 transition-colors font-poppins">
                    Send to
                </button>
            </div>
        </div>
    </div>
</template>
