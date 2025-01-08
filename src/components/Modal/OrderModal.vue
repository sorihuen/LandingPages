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
    if (!props.dish || !props.dish.price) return formatPrice(0);
    return formatPrice(props.dish.price * quantity.value);
});

const addToOrder = () => {
    emit('add-to-order', {
        quantity: quantity.value,
        sauces: sauces.value,
        dish: props.dish
    })
    closeModal()
}

const closeModal = () => {
    emit('close')
}
</script>

<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div
            class="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative">
            <!-- Imagen del plato -->
            <div class="w-full md:w-1/2">
                <img :src="props.dish.image" :alt="props.dish.name"
                    class="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg" />
            </div>

            <!-- Contenido del modal -->
            <div class="w-full md:w-1/2 p-6 flex flex-col">
                <!-- Botón Cerrar -->
                <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <XIcon class="h-6 w-6" />
                </button>

                <!-- Cabecera del modal -->
                <h2 class="text-xl md:text-2xl font-bold">{{ props.dish.name }}</h2>
                <p class="text-sm md:text-base text-gray-600 mt-2">{{ props.dish.description }}</p>

                <!-- Selección de salsas -->
                <div class="mb-6 mt-4">
                    <h3 class="text-base md:text-lg font-semibold mb-3 flex items-center">
                        Agregar salsas
                        <span class="ml-2 text-xs bg-black text-white px-2 py-1 rounded">Opcional</span>
                    </h3>
                    <p class="text-sm text-gray-600 mb-4">Seleccione:</p>
                    <div class="space-y-2">
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
                            <span class="ml-2">Salsa de soya</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="form-checkbox rounded border-gray-300"
                                v-model="sauces.wasabi">
                            <span class="ml-2">Wasabi - Jengibre</span>
                        </label>
                        <label class="flex items-center">
                            <input type="checkbox" class="form-checkbox rounded border-gray-300"
                                v-model="sauces.sriracha">
                            <span class="ml-2">Sriracha</span>
                        </label>
                    </div>
                </div>

                <!-- Cantidad y botón agregar -->
                <div class="flex items-center justify-between mt-6">
                    <div class="flex items-center border rounded-lg">
                        <button @click="decrementQuantity" class="px-4 py-2 text-gray-600 hover:bg-gray-100"
                            :disabled="quantity <= 1">−</button>
                        <span class="px-4 py-2 border-x">{{ quantity }}</span>
                        <button @click="incrementQuantity" class="px-4 py-2 text-gray-600 hover:bg-gray-100">+</button>
                    </div>
                    <button @click="addToOrder"
                        class="bg-red-500 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300">
                        Agregar {{ totalPrice }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
