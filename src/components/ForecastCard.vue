<template>
  <div class="bg-white/30 backdrop-blur-sm p-4 rounded-xl shadow text-gray text-center">
    <p class="font-semibold mb-2">{{ formatDate(forecast.dt_txt) }}</p>
    <img
      :src="`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`"
      :alt="forecast.weather[0].description"
      class="mx-auto w-16 h-16"
    />
    <p class="text-lg font-bold mt-2">{{ Math.round(forecast.main.temp) }}°C</p>
    <p class="capitalize text-sm">{{ forecast.weather[0].description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  forecast: any
}>()

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })
}
</script>
