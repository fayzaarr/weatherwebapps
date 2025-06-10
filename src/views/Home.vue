<template>
  <div>
    <CitySearch @city-selected="goToCity" />

    <h2 class="mt-6 text-lg font-bold text-gray">Kota Favorit</h2>
    <ul class="mt-2 space-y-2">
      <li
        v-for="city in favorites"
        :key="city"
        class="flex items-center justify-between bg-white/50 p-2 rounded text-white"
      >
        <RouterLink
          :to="`/city/${city}`"
          class="text-black hover:opacity-40"
        >
          {{ city }}
        </RouterLink>
        <button
          @click="removeCity(city)"
          class="text-red-400 hover:text-red-600 text-sm ml-4"
          title="Hapus dari favorit"
        >
          ❌
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCityStore } from '../store'
import CitySearch from '../components/CitySearch.vue'
import { useRouter } from 'vue-router'

const store = useCityStore()
const favorites = computed(() => store.favorites)
const router = useRouter()

function goToCity(city: string) {
  router.push(`/city/${city}`)
}

function removeCity(city: string) {
  store.removeFavorite(city)
}
</script>

