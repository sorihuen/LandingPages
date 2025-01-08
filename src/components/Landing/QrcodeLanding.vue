<script setup>
import { ref } from 'vue';
import QRCodeVue3 from 'qrcode-vue3';
import HeaderLanding from '@/shared/HeaderLandig.vue';
import AppFooter from '@/components/Landing/AppFooter.vue';
import { imgfondomenu } from '@/components/general/Imagen';

const backgroundUrl = imgfondomenu
const CABO_COLOR = ref('#FFD700');

// URL que se codificará en el QR
const qrValue = ref('https://taquerianortena.com/');
</script>

<template>
    <!-- Header/Navbar Fijo en la parte superior -->
    <div class="fixed top-0 left-0 w-full z-20">
        <HeaderLanding />
    </div>

    <!-- Contenido principal con ajuste de margen superior -->
    <main class="bg-cover pt-20" :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <!-- Contenedor del título alineado debajo del HeaderLanding -->
        <div class="text-center mt-6">
            <b class="inline-block transform md:scale-[1.35]">
                <span class="text-2xl sm:text-3xl font-bebas shadow-l-d-2" :style="{ color: CABO_COLOR }">
                    <i>SUSHI</i>
                </span>
                <span class="text-xl sm:text-3xl font-montserrat shadow-l-d-2 px-3 py-1" :style="{ color: CABO_COLOR }">
                    Eternal Flavors
                </span>
            </b>
        </div>

        <!-- Sección principal del QR y contenido adicional -->
        <section class="flow-root mt-4">
            <div class="px-4 py-6 max-w-[430px] mx-auto mb-10">
                <h1 class="w-max mx-auto md:scale-[1.35] mt-6" :style="{ color: CABO_COLOR }">
                    <b>
                        <p class="text-5xl mb-2 font-poppins">FREE</p>
                    </b>
                </h1>

                <div class="px-4 max-w-[430px] mx-auto mt-10 text-center">
                    <p class="font-bold font-poppins mb-4 text-sky-500 ">Scan the QR code to get started</p>
                    <div class="flex justify-center mb-4">
                        <QRCodeVue3 :value="qrValue" :width="200" :height="200" :margin="2"
                            :background-options="{ color: '#ffffff' }"
                            :dotsOptions="{ color: '#000000', type: 'rounded' }"
                            :cornersSquareOptions="{ color: '#000000', type: 'extra-rounded' }"
                            :cornersDotOptions="{ color: '#000000', type: 'dot' }" />
                    </div>
                    <div class="flex justify-center mt-4">
                        <h1 class="w-max mx-auto md:scale-[1.35] text-sky-500 ">
                            Screenshot this and show it to your server to score a free dessert on this visit or your
                            next
                        </h1>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <AppFooter />
    </main>
</template>
