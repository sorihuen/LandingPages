<template>
    <header class="w-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 p-2 shadow-md bg-opacity-75">
        <div class="flex justify-between items-center">
            <!-- Logo -->
            <div class="ml-6">
                <img src="../assets/img/eternologo.png" alt="Logo" class="h-12" />
            </div>

            <!-- Enlaces de navegación alineados al centro para pantallas grandes -->
            <nav class="hidden lg:flex lg:flex-1">
                <ul class="flex justify-center space-x-6 w-full">
                    <li v-for="(link, index) in links" :key="index">
                        <router-link :to="link.path" :class="[
                            'text-gray-300 font-semibold transition-colors duration-300 hover:text-gold',
                            { 'text-gold': selectedLink === index }
                        ]" @click="selectLink(index)">
                            {{ link.name }}
                        </router-link>
                    </li>
                </ul>
            </nav>

            <!-- Botón de menú hamburguesa para dispositivos móviles -->
            <div class="lg:hidden">
                <button @click="toggleMenu" class="text-gray-300 hover:text-gold focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Enlaces de navegación desplegables para dispositivos móviles -->
        <nav :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="lg:hidden">
            <ul class="flex flex-col items-center space-y-2 mt-2">
                <li v-for="(link, index) in links" :key="index">
                    <router-link :to="link.path" :class="[
                        'text-gray-300 font-semibold transition-colors duration-300 hover:text-gold',
                        { 'text-gold': selectedLink === index }
                    ]" @click="selectLink(index)">
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderLanding",
    data() {
        return {
            isMenuOpen: false,
            selectedLink: null,
            links: [
                { name: "Inicio", path: "/" },
                { name: "Menu", path: "/landing/menu" },
                { name: "Reseñas", path: "/landing/review" },
                { name: "Código QR", path: "/landing/qrcode" }
            ]
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        selectLink(index) {
            this.selectedLink = index;
            this.toggleMenu();
        }
    }
};
</script>

<style scoped>
/* Define el color dorado para el texto seleccionado */
.text-gold {
    color: #FFD700;
}

/* Cambia el color del texto al pasar el mouse */
.text-gray-300:hover {
    color: #FFD700;
}
</style>