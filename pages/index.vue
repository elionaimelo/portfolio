<template>
  <div class="block overflow-hidden md:flex">
    <div
      class="flex flex-col items-center justify-center p-6 md:p-10 md:w-1/2"
      v-motion
      :initial="motionInitial"
      :enter="motionEnter"
      :leave="motionLeave"
    >
      <h1
        class="pb-0 text-4xl leading-tight text-center uppercase sm:text-5xl md:text-7xl"
        v-motion
        :initial="motionInitial"
        :enter="motionEnter"
        :leave="motionLeave"
      >
        My name<br />
        is
        <span class="font-black">
          Elionai <br />
          Melo...
        </span>
      </h1>

      <div class="pl-0 text-center sm:pl-7">
        <p
          class="mt-4 mb-6 text-lg sm:text-xl md:text-2xl"
          v-motion
          :initial="motionInitial"
          :enter="motionEnter"
          :leave="motionLeave"
        >
          <strong><em>Frontend Developer</em></strong> <br />based in
          <strong><em>Brazil</em></strong>
        </p>

        <button
          class="w-full px-6 py-2 font-semibold text-white transition bg-black border border-black md:w-auto hover:bg-white hover:text-black"
          @click="callWhatsApp"
        >
          Let's talk
        </button>

        <div
          class="flex items-center justify-center my-6"
          v-motion
          :initial="motionInitial"
          :enter="motionEnter"
          :leave="motionLeave"
        >
          <Icon name="ic:outline-email" style="color: black" />
          <a href="mailto:elionai.melo@gmail.com" class="ml-3 text-black">
            elionai.melo@gmail.com
          </a>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-8 md:mt-0 md:w-1/2">
      <img
        src="/assets/images/eli-hero-section.png"
        alt="Photo of Elionai Melo"
        class="max-w-sm md:max-w-lg lg:max-w-xl"
        v-motion
        :initial="motionInitial"
        :enter="motionEnter"
        :leave="motionLeave"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const motionInitial = { opacity: 0, y: 50, scale: 0.98 };
const motionEnter = {
  opacity: 1,
  y: 0,
  scale: 1,
  transition: {
    opacity: { duration: 1.2, ease: "ease-out" },
    transform: { duration: 1, ease: [0.25, 0.8, 0.25, 1] },
  },
};
const motionLeave = {
  opacity: 0,
  y: 50,
  scale: 0.98,
  transition: {
    opacity: { duration: 0.6, ease: "ease-in" },
    transform: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const callWhatsApp = () => {
  window.open("https://wa.me/5584996163845", "_blank");
};
</script>

<style lang="scss" scoped>
h1 {
  background: url("/assets/images/asset.png") top left no-repeat;
  background-size: contain;
}
</style>
