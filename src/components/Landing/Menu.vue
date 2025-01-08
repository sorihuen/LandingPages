<!-- Menu.vue -->
<script setup>
import { ref, computed } from 'vue'
import HeaderLanding from '@/shared/HeaderLandig.vue';
import AppFooter from '@/components/Landing/AppFooter.vue';
import OrderModal from '@/components/Modal/OrderModal.vue';
import imgjapan from '@/assets/img/japan.jpg';
import sashimi from '@/assets/img/sashimi.jpg';
import imgmakis from '@/assets/img/Makis.jpg';
import uramaki from '@/assets/img/uramaki.jpg';
import gunkan from '@/assets/img/gunkan.jpg';
import onigiri from '@/assets/img/onigiri.jpg';
import { imgfondomenu } from '@/components/general/Imagen';

const CABO_COLOR = ref('#FFD700')

const dishes = ref([
    {
        id: 1,
        name: "Sushi Sakura",
        description: "Fresh slices of fish, seasoned rice, wrapped in nori, garnished with sakura flowers.",
        price: 18.99,
        image: imgjapan
    },
    {
        id: 2,
        name: "Sashimi",
        description: "Delicate slices of fresh fish, served with soy sauce and wasabi.",
        price: 7.50,
        image: sashimi
    },
    {
        id: 3,
        name: "Makis",
        description: "Rolls of rice filled with fresh fish, vegetables, and wrapped in nori seaweed, served with soy sauce.",
        price: 9.99,
        image: imgmakis
    },
    {
        id: 4,
        name: "Uramakis",
        description: "Inside-out rolls filled with fresh fish and vegetables, topped with sesame seeds and served with soy sauce.",
        price: 22.50,
        image: uramaki
    },
    {
        id: 5,
        name: "Gunkan",
        description: "Rice balls wrapped in nori seaweed, topped with fresh seafood, and served with soy sauce.",
        price: 8.75,
        image: gunkan
    },
    {
        id: 6,
        name: "Onigiri",
        description: "Rice balls filled with various ingredients and wrapped in nori seaweed, served with soy sauce.",
        price: 6.50,
        image: onigiri
    }
])
// botton ordenar
const isModalOpen = ref(false)
const selectedDishId = ref(null)

// Computada para encontrar el plato seleccionado
const selectedDish = computed(() => {
    return dishes.value.find(dish => dish.id === selectedDishId.value) || {}
})

const openModal = (dishId) => {
    selectedDishId.value = dishId; // Guardar ID del plato
    isModalOpen.value = true;
};

const closeModal = () => {
    selectedDishId.value = null
    isModalOpen.value = false
}

const handleAddToOrder = (orderData) => {
    console.log(orderData)
    closeModal()
}

</script>
<template>
    <HeaderLanding />
    <div class="bg-amber-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        :style="{ backgroundImage: `url(${imgfondomenu})` }">
        <div class="max-w-7xl mx-auto">
            <h1 class="w-full mx-auto px-4 mt-6 mb-8 text-center text-5xl sm:text-4xl font-bold"
                :style="`color: ${CABO_COLOR};`">
                Menú
            </h1>
            <div class="flex justify-end mb-8">
                <router-link :to="{ name: 'Combo' }"
                    class="bg-amber-500 text-white text-sm px-4 py-2 rounded-full shadow-md hover:bg-amber-600 transition duration-300 ease-in-out">
                    Ver Combos
                </router-link>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="dish in dishes" :key="dish.id"
                    class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                    <img :src="dish.image" :alt="dish.name" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h2 class="text-xl font-semibold text-amber-900 mb-2">{{ dish.name }}</h2>
                        <p class="text-gray-600 mb-4">{{ dish.description }}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-amber-600 font-bold">${{ dish.price.toFixed(2) }}</span>
                            <button @click="openModal(dish.id)"
                                class="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition duration-300 ease-in-out">
                                Ordenar
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <OrderModal :is-open="isModalOpen" :dish="selectedDish" @close="closeModal" @add-to-order="handleAddToOrder" />

    />
    <AppFooter />

</template>
