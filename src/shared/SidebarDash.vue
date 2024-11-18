<script setup>
import { ref, onMounted } from 'vue';
import { HomeIcon, ChartBarIcon, UsersIcon, CogIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: true
    },
    urls: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['toggle']);

const user = ref({
    name: 'Usuario'
});

const menuItems = ref([]);

onMounted(async () => {
    user.value = await fetchUserData();
    menuItems.value = await fetchMenuItems(props.urls);
});

const fetchUserData = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ name: 'Suyin Orihuen' });
        }, 500);
    });
};

const fetchMenuItems = async (urls) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, label: 'Dashboard', icon: HomeIcon, link: urls.dashboard },
                { id: 2, label: 'Onboarding', icon: ChartBarIcon, link: urls.onboarding },
                { id: 3, label: 'Users', icon: UsersIcon, link: urls.users },
                { id: 4, label: 'Settings', icon: CogIcon, link: urls.settings },
            ]);
        }, 500);
    });
};


const toggleSidebar = () => {
    emit('toggle');
};
</script>

<template>
    <div class="bg-gradient-to-r from-green-500 to-green-700 text-white min-h-screen flex-shrink-0 transition-all duration-300 ease-in-out"
        :class="{ 'w-64': isOpen, 'w-16': !isOpen }">
        <div class="p-4">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-semibold" :class="{ 'hidden': !isOpen }">{{ user.name }}</h2>
                <button @click="toggleSidebar"
                    class="p-1 rounded-full hover:bg-green-600 transition-colors duration-200">
                    <ChevronLeftIcon v-if="isOpen" class="w-6 h-6" />
                    <ChevronRightIcon v-else class="w-6 h-6" />
                </button>
            </div>
            <nav>
                <ul>
                    <li v-for="item in menuItems" :key="item.id" class="mb-2">
                        <a :href="item.link"
                            class="block py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200 flex items-center">
                            <component :is="item.icon" class="inline-block w-5 h-5 mr-2" />
                            <span :class="{ 'hidden': !isOpen }">{{ item.label }}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>