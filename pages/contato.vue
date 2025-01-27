<template>
  <section>
    <header>
      <h3><em>Contato</em></h3>
      <h1 class="text-2xl">Entre em contato comigo</h1>
    </header>

    <p class="mt-3">
      <a
        href="mailto:elionai.melo@gmail.com"
        target="_blank"
        class="text-2xl italic font-bold"
      >
        elionai.melo@gmail.com
      </a>
    </p>

    <div class="mt-8">
      <a
        href="https://linkedin.com/in/elionaimelo"
        class="text-5xl text-black"
        target="_blank"
      >
        <Icon name="mdi:linkedin" style="color: black" />
      </a>
      <a
        href="https://github.com/elionaimelo"
        class="ml-3 text-5xl text-black"
        target="_blank"
      >
        <Icon name="mdi:github" style="color: black" />
      </a>
      <a
        href="https://instagram.com/elionaii_"
        class="ml-3 text-5xl text-black"
        target="_blank"
      >
        <Icon name="mdi:instagram" style="color: black" />
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  ssr: true,
});
</script>
