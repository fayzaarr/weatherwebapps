<template>
  <form @submit.prevent="submit" class="flex flex-col sm:flex-row gap-2 w-full max-w-[600px] mx-auto">
    <input
      v-model="city"
      type="text"
      placeholder="Cari kota..."
      class="w-full px-4 py-2 rounded border"
    />
    <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Cari
    </button>
  </form>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useCityStore } from '../store'

const emit = defineEmits(['city-selected'])
const city = ref('')
const store = useCityStore()

function submit() {
  if (city.value.trim()) {
    store.addFavorite(city.value.trim())
    emit('city-selected', city.value.trim())
    city.value = ''
  }
}
</script>
