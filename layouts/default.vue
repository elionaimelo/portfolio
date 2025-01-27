<template>
  <section class="flex min-h-screen">
    <LayoutsSidebar />

    <main class="flex items-center justify-center w-full">
      <slot />
    </main>
  </section>
</template>

<script setup>
useHead({
  titleTemplate: (title) =>
    title
      ? `${title} - Frontend developer - Elionai Melo - Brasil`
      : "Frontend developer - Elionai Melo - Brasil",
});
</script>
