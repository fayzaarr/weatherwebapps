<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-blue-300 text-gray-800">
    <header class="p-4 text-center text-2xl font-semibold">🌤️ Weather Dashboard</header>

    <main class="p-4 max-w-2xl mx-auto flex-grow">
      <router-view />
    </main>

    <footer class="text-center text-sm text-gray-600 py-4">
      © 2025 Ri.Weather — Dibuat dengan ❤️ oleh Rifasya Ayu
    </footer>
  </div>
</template>

<script setup lang="ts">
// masih belum butuh logic tambahan
</script>
