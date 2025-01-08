<script setup>
import { ref, onMounted } from 'vue';
import AppFooter from '@/components/Landing/AppFooter.vue';
import HeaderLanding from '@/shared/HeaderLandig.vue';
import { imgfondo, imgsashimi, imguramaki, imgonigiri, imgcombo, images } from '@/components/general/Imagen';
import { useHead } from '@vueuse/head';





// Configuración del head de la página
useHead({
    title: 'Taqueria Milear - Comida Mexicana Auténtica',
    meta: [
        { name: 'description', content: 'Disfruta de la auténtica comida mexicana en Taqueria Milear. Descubre nuestros platos especiales como nachos, tamales y más.' },
        { property: 'og:title', content: 'Taqueria Milear - Comida Mexicana Auténtica' },
        { property: 'og:description', content: 'Disfruta de nachos, enchiladas, tamales y platos especiales en Brooklyn.' },
        { property: 'og:image', content: '/src/assets/img/platoprincipal.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
    ]
});

// Variables reactivas
const CABO_COLOR = ref('#FFD700');

// Función para generar una URL de imagen de placeholder
const getPlaceholderImage = (width, height, text) =>
    `https://via.placeholder.com/${width}x${height}.png?text=${encodeURIComponent(text)}`;

// Datos de los platos
const dishes = ref([
    { name: 'Sashimi', price: '$7.50', image: imgsashimi },
    { name: 'Makis', price: '$9.99', image: imguramaki },
    { name: 'Onigiri', price: '$6.50', image: imgonigiri },
]);

// Plato promocional
const promotionalDish = ref({
    name: 'Friend Combo',
    price: '$27.75',
    image: imgcombo,
    url: 'https://order.online/business/taqueria-milear-75598'
});

const currentIndex = ref(0);

// Métodos para el carrusel de imágenes
const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

// Avanzar automáticamente las imágenes
onMounted(() => {
    setInterval(nextImage, 3000);
});
</script>
<template>
    <main :class="`bg-cover bg-[url('${imgfondo}')]`">
        <HeaderLanding />
        <h1 class="w-full mx-auto px-4 mt-6 mb-8 text-center" :style="`color: ${CABO_COLOR};`">
            <div class="inline-block transform md:scale-[1.35]">
                <b class="flex flex-col sm:flex-row items-center gap-2">
                    <span class="text-2xl sm:text-3xl font-bebas whitespace-nowrap shadow-l-d-2">
                        <i>SUSHI</i>
                    </span>
                    <span
                        class="text-xl sm:text-3xl font-montserrat shadow-l-d-2 px-3 py-1 max-w-full break-words font-montserrat">
                        Eternal Flavors
                    </span>
                </b>
            </div>
        </h1>
        <section class="flow-root -mt-2">
            <div class="px-2 max-w-[3000px] mx-auto mb-10">
                <div class="flex justify-center gap-1 mb-4 w-full">
                    <!-- Imagen 1 -->
                    <img :src="images[currentIndex]" class="w-[45%] h-auto object-contain select-none" draggable="false"
                        :alt="'Banner Image ' + (currentIndex + 1)" />
                    <!-- Imagen 2 -->
                    <img :src="images[(currentIndex + 1) % images.length]"
                        class="w-[45%] h-auto object-contain select-none" draggable="false"
                        :alt="'Banner Image ' + ((currentIndex + 1) % images.length + 1)" />
                </div>

                <!-- Botón centrado -->
                <div class="relative flex justify-center">
                    <router-link to="/landing/menu">
                        <button class="relative group overflow-hidden">
                            <div
                                class="relative px-8 py-3 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-500 text-white min-w-[200px] transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:from-red-600 group-hover:via-sky-500 group-hover:to-sky-600">
                                <div class="text-center">
                                    <span class="block text-2xl font-bold tracking-wide">ORDER HERE</span>
                                    <span class="text-sm">No Extra Fees, Support Local</span>
                                </div>
                                <div class="absolute right-2 bottom-2 w-5 h-5 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-full h-full">
                                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                                    </svg>
                                </div>
                            </div>
                            <div
                                class="absolute -left-1 top-0 bottom-0 w-2 bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-500">
                            </div>
                            <div
                                class="absolute -right-1 top-0 bottom-0 w-2 bg-gradient-to-b from-yellow-500 via-yellow-600 to-yellow-500">
                            </div>
                        </button>
                    </router-link>

                </div>
            </div>
            <ul class="flex justify-evenly max-md:flex-col md:w-96 w-max mx-auto mb-10">
                <!-- Uber One -->
                <li>
                    <a class="inline-block md:w-24 sm:w-[400px] max-sm:w-[280px] py-2 rounded-full cursor-pointer bg-black"
                        href="https://www.ubereats.com/store/taqueria-milear/nyAm3wtsTLup-QwQ13MN8w?utm_source=menu-maker"
                        target="_blank">
                        <img class="md:block max-md:hidden h-6 w-6 mx-auto select-none" draggable="false"
                            src="/src/assets/icons/uberone-icon.svg" alt="Uber One" />
                        <img class="md:hidden max-md:block h-6 mx-auto select-none" draggable="false"
                            src="/src/assets/icons/uberone-title.svg" alt="Uber One" />
                    </a>
                </li>
                <!-- DashPass -->
                <li>
                    <a class="inline-block md:w-24 sm:w-[400px] max-sm:w-[280px] py-2 rounded-full cursor-pointer bg-black"
                        href="https://www.doordash.com/es-US/store/taqueria-milear-brooklyn-133345/2239805/?preview=1"
                        target="_blank">
                        <img class="md:block max-md:hidden h-6 w-6 mx-auto select-none scale-[1.4]" draggable="false"
                            src="/src/assets/icons/dashpass-icon.svg" alt="DashPass" />
                        <img class="md:hidden max-md:block h-6 mx-auto select-none" draggable="false"
                            src="/src/assets/icons/dashpass-title.svg" alt="DashPass" />
                    </a>
                </li>
                <!-- GRUBHUB -->
                <li>
                    <a class="inline-block md:w-24 sm:w-[400px] max-sm:w-[280px] py-2 rounded-full cursor-pointer bg-black"
                        href="https://www.grubhub.com/restaurant/taqueria-milear-752-nostrand-ave-ste-a-brooklyn/5205672?proof=true"
                        target="_blank">
                        <img class="md:block max-md:hidden h-6 w-6 mx-auto select-none" draggable="false"
                            src="/src/assets/icons/grubhub-icon.svg" alt="GRUBHUB" />
                        <img class="md:hidden max-md:block h-6 mx-auto select-none" draggable="false"
                            src="/src/assets/icons/grubhub-title.svg" alt="GRUBHUB" />
                    </a>
                </li>
            </ul>
            <div class="flex flex-wrap justify-between w-full max-w-screen-xl mx-auto">
                <!-- Columna izquierda: Platos -->
                <div class="w-full sm:w-[48%] mb-10">
                    <!-- Título antes de las imágenes -->
                    <h1 class="flex flex-wrap justify-center w-full mx-auto text-center mb-8"
                        :style="`color: ${CABO_COLOR};`">
                        <div class="flex flex-wrap justify-center items-center">
                            <span
                                class="pl-[11px] text-4xl translate-y-2 font-bold mr-4 flex items-center font-lilitaone">
                                <i>KNOW OUR</i>
                            </span>
                            <p class="text-right text-5xl -translate-y-1 font-dolliescript mt-2 text-sky-500">
                                <i>Special dishes</i>
                            </p>
                        </div>
                    </h1>

                    <!-- Dishes List -->
                    <ul
                        class="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between w-full max-w-[500px] mx-auto mb-10 space-x-4 transform transition-transform duration-300 hover:scale-105 hover:opacity-90">
                        <li v-for="dish in dishes" :key="dish.name" class="text-center mb-4 sm:mb-0">
                            <!-- Contenedor con fondo blanco y tamaño fijo -->
                            <div class="w-[150px] rounded-lg shadow-lg">
                                <img :src="dish.image || getPlaceholderImage(150, 100, dish.name)" :alt="dish.name"
                                    class="w-full h-[100px] object-cover rounded-t-md" />
                                <div class="bg-white p-2 h-[100px] rounded-b-md font-montserrat">
                                    <p class="mt-2 font-bold text-gray-800 text-sm">{{ dish.name }}</p>
                                    <p class="text-gray-800">{{ dish.price }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <!-- Título del plato promocional -->
                    <h1 class="flex flex-wrap justify-center w-full mx-auto text-center mb-8"
                        :style="`color: ${CABO_COLOR};`">
                        <div class="flex flex-wrap justify-center items-center">
                            <img src="/src/assets/icons/vector.svg" alt="icono" class="w-7 h-6 mr-2" />
                            <span class="text-2xl sm:text-3xl md:text-4xl mr-4 font-bold font-lilitaone">
                                <i>KNOW OUR</i>
                            </span>
                            <p
                                class="text-right text-5xl -translate-y-1 font-scout tracking-wider text-sky-500 font-dolliescript">
                                <i>Promotional Dish</i>
                            </p>
                        </div>
                    </h1>

                    <!-- Sección del plato promocional -->
                    <div
                        class="w-[150px] mx-auto rounded-lg shadow-lg mb-10 transform transition-transform duration-300 hover:scale-105 hover:opacity-90">
                        <img :src="promotionalDish.image || getPlaceholderImage(150, 100, 'Promo Dish')"
                            :alt="promotionalDish.name" class="w-full h-[100px] object-cover rounded-t-md" />
                        <div class="bg-white p-2 h-[100px] rounded-b-md text-center font-montserrat">
                            <p class="mt-2 font-bold text-gray-800 text-sm">{{ promotionalDish.name }}</p>
                            <p class="text-gray-800">{{ promotionalDish.price }}</p>
                            <router-link :to="{ name: 'Combo' }"
                                class="font-semibold transition duration-300 ease-in-out text-sm"
                                :style="`color: ${CABO_COLOR};`">
                                View more details
                            </router-link>

                        </div>
                    </div>
                </div>

                <!-- Columna derecha: Mapa -->
                <div class="w-full sm:w-[48%] mb-10">
                    <!-- Texto promocional -->
                    <div class="w-full sm:w-[48%] mb-10 mx-auto">
                        <div class="text-center mb-6">
                            <span class="text-2xl sm:text-3xl md:text-4xl font-bold font-lilitaone"
                                :style="`color: ${CABO_COLOR};`">
                                <i>Unique Flavors</i>
                            </span>
                        </div>
                        <div class="text-center mb-6">
                            <p class="text-5xl font-scout tracking-wider text-sky-500 font-dolliescript">
                                <i>Unmatched</i>
                            </p>
                        </div>
                        <p
                            class="text-xl sm:text-2xl font-semibold text-white mb-4 mx-auto max-w-3xl text-center leading-relaxed">
                            <span>Sushi lovers, welcome!</span><br />
                            Indulge in the finest sushi and Japanese delicacies at our restaurant. Fresh ingredients,
                            traditional recipes,
                            and a warm atmosphere await you. Join us and experience the best sushi in town!
                        </p>
                    </div>

                    <!-- Google Maps -->
                    <article class="relative max-w-[430px] h-[230px] mx-auto mb-14 px-2">
                        <div
                            class="absolute flex flex-col justify-center items-center gap-2 rounded-3xl z-0 h-full w-full left-0">
                            <img class="w-20 h-max" :src="getPlaceholderImage(80, 80, 'Maps')" alt="Maps Icon" />
                            <span class="text-2xl text-white">
                                <i>Loading location...</i>
                            </span>
                        </div>
                        <div class="relative w-full h-0 overflow-hidden pb-[56.25%]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509474!2d144.95373531531695!3d-37.816279179751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c44c19b9631b!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1633043886868!5m2!1sen!2sus"
                                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>

                        </div>
                    </article>
                </div>
            </div>
        </section>
        <AppFooter />
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

@font-face {
    font-family: DollieScript;
    src: url('@/assets/font/DollieScript_PersonalUse.ttf') format('truetype'),
        url('@/assets/font/DollieScript_PersonalUse.woff') format('woff'),
        url('@/assets/font/DollieScript_PersonalUse.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

.font-montserrat {
    font-family: 'Montserrat', sans-serif;
}

.font-bebas {
    font-family: 'Bebas Neue', cursive;
}

.font-dolliescript {
    font-family: 'DollieScript', sans-serif;
}

.font-lilitaone {
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-style: normal;
}


.bg-custom {
    background-color: #882E26;
    padding: 0.05rem 0.05rem;
    border-radius: 0.25rem;
    max-width: 100%;
}

.shadow-l-d-2 {
    text-shadow: -2px 2px 0 black;
}

button::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 0;
    right: 0;
    bottom: -2px;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
}
</style>
