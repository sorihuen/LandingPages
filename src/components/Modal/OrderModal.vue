<script setup>
import { ref, computed } from 'vue'
import { XIcon } from 'lucide-vue-next'

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    dish: {
        type: Object,
        default: () => ({})
    }
})

const emit = defineEmits(['close', 'add-to-order'])

const quantity = ref(1)
const sauces = ref({
    teriyaki: false,
    hanashi: false,
    soya: false,
    wasabi: false,
    sriracha: false,
    // Aquí puedes agregar más opciones de salsas
})

const incrementQuantity = () => {
    quantity.value++
}

const decrementQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--
    }
}

const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(price)
}

const totalPrice = computed(() => {
    // Verifica si 'dish' tiene un precio válido
    if (!props.dish || !props.dish.price) return formatPrice(0);

    return formatPrice(props.dish.price * quantity.value);
});

const addToOrder = () => {
    emit('add-to-order', {
        quantity: quantity.value,
        sauces: sauces.value, // Cambiado a 'sauces'
        dish: props.dish // Agregar datos completos del plato
    })
    closeModal()
}

const closeModal = () => {
    emit('close')
}
</script>

<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto flex relative">
            <!-- Imagen del plato -->
            <div class="w-1/2">
                <img :src="props.dish.image" :alt="props.dish.name" class="w-full h-full object-cover rounded-l-lg" />
            </div>

            <!-- Contenido del modal -->
            <div class="w-1/2 p-6">
                <!-- Close Button -->
                <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <XIcon class="h-6 w-6" />
                </button>

                <!-- Modal Header -->
                <h2 class="text-2xl font-bold">{{ props.dish.name }}</h2>
                <p class="text-gray-600 mt-2">{{ props.dish.description }}</p>

                <!-- Modal Body -->
                <div class="mb-6 mt-4">
                    <h3 class="text-lg font-semibold mb-3 flex items-center">
                        Add sauce to your order
                        <span class="ml-2 text-xs bg-black text-white px-2 py-1 rounded">
                            Optional</span>
                    </h3>
                    <p class="text-sm text-gray-600 mb-4">Select:</p>

                    <div class="space-y-3">
                        <label class="flex items-center">
                            <input type="checkbox" class="form-checkbox rounded border-gray-300"
                                v-model="sauces.teriyaki">
                            <span class="ml-2">Teriyaki</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="form-checkbox rounded border-gray-300"
                                v-model="sauces.hanashi">
                            <span class="ml-2">Hanashi</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="form-checkbox rounded border-gray-300" v-model="sauces.soya">
                            <span class="ml-2">Soy Sauce</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="form-checkbox rounded border-gray-300"
                                v-model="sauces.wasabi">
                            <span class="ml-2">Wasabi - Ginger</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="form-checkbox rounded border-gray-300"
                                v-model="sauces.sriracha">
                            <span class="ml-2">Sriracha</span>
                        </label>
                        <!-- Agregar más opciones de salsas aquí -->
                    </div>
                </div>

                <!-- Quantity and Add Button -->
                <div class="flex items-center justify-between mt-6">
                    <div class="flex items-center border rounded-lg">
                        <button @click="decrementQuantity" class="px-4 py-2 text-gray-600 hover:bg-gray-100"
                            :disabled="quantity <= 1">
                            −
                        </button>
                        <span class="px-4 py-2 border-x">{{ quantity }}</span>
                        <button @click="incrementQuantity" class="px-4 py-2 text-gray-600 hover:bg-gray-100">
                            +
                        </button>
                    </div>
                    <button @click="addToOrder"
                        class="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300">
                        Agregar {{ totalPrice }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>