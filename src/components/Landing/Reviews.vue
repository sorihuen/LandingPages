<script setup>
import { ref, watch } from 'vue'
import ReviewStart from '@/components/Landing/ReviewStart.vue';
import AppFooter from '@/components/Landing/AppFooter.vue';
import HeaderLanding from '@/shared/HeaderLandig.vue';
import { imgfondomenu } from '@/components/general/Imagen';

const email = ref('')
const emailError = ref('')
const viewReview = ref(false)
const showFeedback = ref(false)
const backgroundUrl = imgfondomenu
const reviewBackgroundUrl = '/src/assets/img/opinion-bg.jpg'

const validateEmail = (value) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (!value) {
    emailError.value = 'El correo es requerido'
    return false
  }

  if (!emailRegex.test(value)) {
    emailError.value = 'Por favor ingresa un correo válido'
    return false
  }

  emailError.value = ''
  return true
}

// Ahora podemos usar watch después de que email está definido
watch(() => email.value, (newValue) => {
  validateEmail(newValue)
})

const viewOpinion = () => {
  if (validateEmail(email.value)) {
    viewReview.value = true
    email.value = '' // Limpiar el campo después de un envío exitoso
  }
}

const handleReviewSubmit = () => {
  console.log('Review submitted')
  viewReview.value = false
  showFeedback.value = true
}

const closeReview = () => {
  viewReview.value = false
}
</script>

<template>
  <div class="fixed top-0 left-0 w-full z-20">
    <HeaderLanding />
  </div>

  <main class="bg-cover pt-20" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <header class="flex justify-center mb-6">
      <img src="/src/assets/img/eternologo.png" alt="Logo" style="width: 150px; height: 150px"
        class="aspect-square select-none" />
    </header>

    <section class="flow-root -mt-2">
      <div class="bg-white bg-opacity-80 p-6 rounded-lg shadow-md max-w-[500px] mx-auto mb-10">
        <h1 :style="`color: ${CABO_COLOR};`" class="text-center mb-8">
          <b>
            <p class="text-5xl mb-2 font-poppins">RATE US</p>
            <span class="text-3xl">
              <span class="font-medium font-poppins"><i>and</i></span>
              <span class="font-poppins"> ENJOY </span>
            </span>
          </b>
          <p class="text-7xl mt-2 font-bold font-poppins"><i>FREE</i></p>
          <p class="text-3xl font-poppins"><i>Dessert On Us!</i></p>
        </h1>

        <div class="text-center">
          <p class="font-bold font-poppins mb-4">Leave your email to get started</p>
          <div class="flex flex-col items-center gap-2">
            <div class="relative w-3/4">
              <input type="email" placeholder="Write Email"
                class="w-full p-1.5 rounded focus:outline-none focus:ring-2 focus:ring-red-800 transition-all duration-200"
                :class="{ 'border-red-500 border-2': emailError }" v-model="email" />
              <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
            </div>
            <button @click="viewOpinion"
              class="bg-red-800 text-white px-8 py-1.5 rounded-md hover:bg-red-700 transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="!!emailError">
              Come In
            </button>
          </div>
        </div>
      </div>
    </section>

    <ReviewStart :isVisible="viewReview" @submit="handleReviewSubmit" @close="closeReview"
      :style="{ backgroundImage: `url(${reviewBackgroundUrl})` }">
      <template #content>
        <p class="font-poppins">Share your opinion and get coupon</p>
      </template>
    </ReviewStart>
    <AppFooter />
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>