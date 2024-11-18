<script setup lang="ts">
import imgInstagram from '@/assets/icons/instagram.svg';
import imgFace from '@/assets/icons/facebook.svg';
import imgTik from '@/assets/icons/tiktok.svg';


const AvailableNetworks = {
    "Instagram": imgInstagram,
    "Facebook": imgFace,
    "Tiktok": imgTik,
};

type Network = {
    name: keyof (typeof AvailableNetworks);
    url: string;
}

const networks: Network[] = [
    {
        name: "Instagram",
        url: "https://www.example.com/instagram",
    },
    {
        name: "Facebook",
        url: "https://www.example.com/facebook",
    },
    {
        name: "Tiktok",
        url: "https://www.example.com/tiktok",
    },
];

</script>

<template>
    <ul class="flex gap-4">
        <li v-for="network in networks" :key="network.name">
            <a :href="network.url" target="_blank">
                <img class="w-6 h-6" draggable="false" :src="AvailableNetworks[network.name]" :alt="network.name">
            </a>
        </li>
    </ul>
</template>