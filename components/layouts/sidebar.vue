<template>
  <section class="flex min-h-screen">
    <aside
      :class="[
        'fixed top-0 left-0 h-screen bg-black text-white p-6 transition-transform duration-300 z-20',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'md:relative md:translate-x-0 md:w-[385px] md:pl-12',
      ]"
    >
      <h3 class="mt-10 text-3xl font-black">EM.</h3>
      <div class="mt-16 uppercase">
        <NuxtLink
          to="/"
          class="block mb-3 text-xl md:text-2xl"
          @click="closeSidebar"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/sobre"
          class="block mb-3 text-xl md:text-2xl"
          @click="closeSidebar"
          >Sobre</NuxtLink
        >
        <NuxtLink
          to="/projetos"
          class="block mb-3 text-xl md:text-2xl"
          @click="closeSidebar"
          >Projetos</NuxtLink
        >
        <NuxtLink
          to="/contato"
          class="block mb-3 text-xl md:text-2xl"
          @click="closeSidebar"
          >Contato</NuxtLink
        >
      </div>
    </aside>

    <button
      class="fixed z-50 p-2 text-white bg-black rounded top-4 left-4 md:hidden"
      @click="isOpen = !isOpen"
    >
      ☰
    </button>

    <main class="flex items-center justify-center w-full h-full">
      <slot />
    </main>
  </section>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const closeSidebar = () => {
  isOpen.value = false;
};
</script>
