<script setup>
import { ref, computed } from 'vue'
import HeaderLanding from '@/shared/HeaderLandig.vue';
import AppFooter from '@/components/Landing/AppFooter.vue';
import OrderModal from '@/components/Modal/OrderModal.vue';
import imgcsushi from '@/assets/img/combosushi.jpg';
import imgvolcano from '@/assets/img/combovolcano.jpg';
import imgmaster from '@/assets/img/master.jpg';


const CABO_COLOR = ref('#FFD700');

const dishes = ref([
    {
        id: 1,
        name: "Friend Combo",
        description: "6 Pieces of Ebi Avocado Roll = 6 Pieces of Latino in California = 6 Pieces of Tiger Eye.",
        price: 27.75,
        image: imgcsushi
    },
    {
        id: 2,
        name: "Volcano Combo",
        description: "5 makis Salmón skin, 5 makis philadelphia tempura, 5 makis arcoiris, 5 makis hernanshi..",
        price: 69.90,
        image: imgvolcano
    },
    {
        id: 3,
        name: "Combo Master",
        description: "5 makis fercho roll,5 makis banana roll, 5 makis borracho roll, 5 makis samba roll, 5 makis hanabi roll,5 makis mechas roll, 5 makis sunshine roll, 5 makis philadelphia roll, 5 makis albert roll, 5 makis tempura sumiday.",
        price: 150.99,
        image: imgmaster
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
        style="background-image: url('/src/assets/img/fondoSabores.jpg');">
        <div class="max-w-7xl mx-auto">
            <h1 class="w-full mx-auto px-4 mt-6 mb-8 text-center text-5xl sm:text-4xl font-bold"
                :style="`color: ${CABO_COLOR};`">
                Combos
            </h1>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="dish in dishes" :key="dish.id"
                    class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
                    <img :src="dish.image" :alt="dish.name" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h2 class="text-xl font-semibold text-amber-900 mb-2">{{ dish.name }}</h2>
                        <p class="text-gray-600 mb-4">{{ dish.description }}</p>
                        <div class="flex justify-between items-center"> <span class="text-amber-600 font-bold">${{
                            dish.price.toFixed(2) }}</span> <button @click="openModal(dish.id)"
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
    <AppFooter />
</template>