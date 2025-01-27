<template>
  <section class="flex min-h-screen overflow-hidden">
    <LayoutsSidebar class="top-0 h-screen md:fixed" />

    <main
      class="flex items-center justify-center w-full overflow-hidden overflow-y-auto md:ml-[205px] py-8 mt-5 md:mt-0"
      @click="closeSidebar"
    >
      <slot />
    </main>
  </section>
</template>

<script setup>
import { useSidebar } from "@/composables/useSidebar";

useHead({
  titleTemplate: (title) =>
    title
      ? `${title} - Frontend developer - Elionai Melo - Brasil`
      : "Frontend developer - Elionai Melo - Brasil",
});

const { closeSidebar } = useSidebar();
</script>
