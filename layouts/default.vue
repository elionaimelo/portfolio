<template>
  <section class="flex min-h-screen overflow-hidden">
    <LayoutsSidebar class="fixed top-0 h-screen" />

    <main
      class="flex items-center justify-center w-full overflow-hidden overflow-y-auto md:ml-[205px] py-8"
    >
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
