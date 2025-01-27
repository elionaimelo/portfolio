<template>
  <div class="flex items-center">
    <div
      class="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text animate-text-gradient"
    >
      {{ number }}
    </div>
    <div class="ml-3 font-bold max-w-17">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { number, text } = defineProps<{
  number: string;
  text: string;
}>();
</script>
