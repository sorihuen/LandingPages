<script setup lang="ts">
import Networks from '@/components/Landing/Networks.vue';
</script>

<template>
    <footer
        class="relative flex justify-between sm:items-center max-sm:flex-col md:h-[160px] sm:h-[219px] xl:px-8 px-4 max-sm:pt-4 bg-gray-200 font-montserrat pb-4">
        <aside>
            <img src="/src/assets/img/eternologo.png" class="w-28" />
        </aside>

        <ul
            class="md:flex md:justify-evenly md:gap-2 max-md:grid max-md:grid-cols-2 max-sm:flex max-sm:flex-col gap-y-2 max-md:self-start w-full max-w-[900px] md:mt-0 sm:px-4 sm:mt-4 max-sm:mb-8">
            <li>
                <p class="pb-1.5 font-bold">Opening hours</p>
                <p>
                    <span class="inline-block w-max">11:00 am</span> -{{ " " }}
                    <span class="inline-block w-max">3:00 am</span>
                </p>
            </li>
            <li>
                <p class="pb-1.5 font-bold">Address</p>
                <p class="max-w-72 md:h-6 sm:h-12 max-md:overflow-y-hidden">
                    Address: 123 Main Street, Springfield, IL 62701, United States
                </p>
            </li>
            <li>
                <p class="pb-1.5 font-bold">Our Social Media</p>
                <Networks />
            </li>
        </ul>

        <aside class="md:bottom-0 sm:bottom-4 max-sm:top-10 max-sm:right-4 max-md:right-[10vw] flex flex-col gap-3">
            <button
                class="flex items-center justify-start gap-4 w-full max-w-[240px] py-2 px-4 rounded-xl text-white font-bold bg-sky-500 overflow-hidden"
                type="button">
                <img src="/src/assets/icons/phone.svg" alt="Phone" class="w-6 h-6 flex-shrink-0">
                <span class="whitespace-nowrap overflow-hidden text-ellipsis">+1 478-391-8585</span>
            </button>
            <div>
                <p>
                    <a class="text-green-700" href="" target="_blank">
                        sorihuen
                    </a>
                </p>
                <p class="w-max">
                    ©
                    <NuxtTime :datetime="Date.now()" year="numeric" /> All rights reserved.
                </p>
            </div>
        </aside>
    </footer>
</template>
