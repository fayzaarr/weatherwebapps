<template>
  <div class="bg-white/20 backdrop-blur-sm p-6 rounded-2xl shadow-md text-gray">
    <h2 class="text-2xl font-semibold mb-4">Cuaca Hari Ini</h2>
    <div v-if="weather">
      <p class="text-lg">{{ city }}, {{ weather.sys.country }}</p>
      <div class="flex items-center gap-4 mt-2">
        <img
          :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
          :alt="weather.weather[0].description"
          class="w-16 h-16"
        />
        <div>
          <p class="text-4xl font-bold">{{ Math.round(weather.main.temp) }}°C</p>
          <p class="capitalize">{{ weather.weather[0].description }}</p>
        </div>
      </div>
      <div class="mt-4 space-y-1 text-sm">
        <p>🌡️ Suhu: Min {{ weather.main.temp_min }}°C / Max {{ weather.main.temp_max }}°C</p>
        <p>💧 Kelembapan: {{ weather.main.humidity }}%</p>
        <p>🌬️ Angin: {{ weather.wind.speed }} m/s</p>
      </div>
    </div>
    <div v-else>
      <p class="text-sm italic text-gray-300">Belum ada data cuaca.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  city: string
  weather: any
}>()
</script>
