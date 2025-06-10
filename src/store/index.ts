import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useCityStore = defineStore('city', () => {
  const favorites = ref<string[]>(JSON.parse(localStorage.getItem('favorites') || '[]'))

  function addFavorite(city: string) {
    if (!favorites.value.includes(city)) {
      favorites.value.push(city)
    }
  }

  function removeFavorite(city: string) {
    favorites.value = favorites.value.filter(c => c !== city)
  }

  // Simpan ke localStorage setiap kali favorites berubah
  watch(favorites, (newFavorites) => {
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }, { deep: true })

  return { favorites, addFavorite, removeFavorite }
})
