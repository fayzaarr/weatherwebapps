<template>
  <div class="space-y-6">
    <!-- Tombol Kembali -->
    <button
      @click="goBack"
      class="text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded shadow"
    >
      ← Kembali
    </button>

    <!-- Pencarian kota -->
    <CitySearch />

    <!-- Cuaca hari ini -->
    <div v-if="weatherData">
      <WeatherToday :city="city" :weather="weatherData" />
    </div>

    <!-- Prakiraan 5 hari -->
    <div v-if="dailyForecasts.length" class="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-md">
      <h3 class="text-xl font-semibold text-gray mb-4 text-center">Prakiraan 5 Hari</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <ForecastCard
          v-for="(forecast, index) in dailyForecasts"
          :key="index"
          :forecast="forecast"
        />
      </div>
    </div>

    <!-- Loading -->
    <p v-if="!weatherData" class="text-center text-white/70 mt-4 italic">Loading data cuaca...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import CitySearch from '../components/CitySearch.vue'
import WeatherToday from '../components/WeatherToday.vue'
import ForecastCard from '../components/ForecastCard.vue'

const route = useRoute()
const router = useRouter()
const city = route.params.name as string

const weatherData = ref<any>(null)
const dailyForecasts = ref<any[]>([])

const API_KEY = 'ca3434be1f706aad916a5e09bc7771e5' // Ganti kalau perlu

async function fetchWeather() {
  try {
    // Cuaca saat ini
    const resNow = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=id`
    )
    weatherData.value = await resNow.json()

    // Prakiraan
    const resForecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=id`
    )
    const forecastData = await resForecast.json()

    // Ambil 1 per hari (sekitar jam 12 siang)
    dailyForecasts.value = forecastData.list.filter((item: any) =>
      item.dt_txt.includes('12:00:00')
    )
  } catch (err) {
    console.error('Gagal fetch data:', err)
  }
}

function goBack() {
  router.back()
}

onMounted(fetchWeather)
</script>
