<template>
  <section class="h-full">
    <header class="text-center md:text-left">
      <p
        class="text-lg mt-9 sm:text-xl md:mt-0"
        v-motion
        :initial="motionInitial"
        :enter="motionEnter"
        :leave="motionLeave"
      >
        It's great to have your visit!
      </p>
      <h1
        class="mt-3 text-3xl font-bold mb-9 sm:text-4xl md:text-5xl"
        v-motion
        :initial="motionInitial"
        :enter="motionEnter"
        :leave="motionLeave"
      >
        Welcome...
      </h1>
    </header>

    <section class="flex flex-col md:flex-row md:justify-between">
      <div class="mb-1 text-center md:text-left md:mb-0">
        <img
          src="assets/images/img-sobre.png"
          alt="Photo of Elionai Melo"
          class="mx-auto md:mx-0 md:max-w-[300px] lg:max-w-[400px] max-w-full h-auto"
          v-motion
          :initial="motionInitial"
          :enter="motionEnter"
          :leave="motionLeave"
        />
        <h1
          class="mt-4 text-4xl font-bold text-transparent sm:text-5xl bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text animate-text-gradient"
          v-motion
          :initial="motionInitial"
          :enter="motionEnter"
          :leave="motionLeave"
        >
          Elionai Melo
        </h1>
        <p
          class="mt-4 mb-6 text-lg sm:text-xl md:text-1xl"
          v-motion
          :initial="motionInitial"
          :enter="motionEnter"
          :leave="motionLeave"
        >
          <strong><em>Frontend Developer</em></strong> lives in
          <strong><em>Brazil</em></strong>
        </p>

        <button class="underline">
          Download CV
          <div class="inline-block p-1 pb-0 ml-2 bg-black">
            <Icon name="mdi:arrow-top-right" style="color: white" />
          </div>
        </button>
      </div>

      <div class="md:w-[400px] mt-8 md:mt-0 md:ml-8">
        <div
          class="flex items-center justify-center mb-4 md:justify-start"
          v-motion
          :initial="motionInitial"
          :enter="motionEnter"
          :leave="motionLeave"
        >
          <span class="px-2 py-1 rounded-full bg-slate-100">
            <Icon name="ic:outline-email" style="color: black" />
          </span>
          <em
            class="mb-2 ml-2"
            v-motion
            :initial="motionInitial"
            :enter="motionEnter"
            :leave="motionLeave"
          >
            elionai.melo@gmail.com
          </em>
        </div>

        <hr class="w-full mt-5" />

        <div class="justify-between mt-6 md:flex">
          <UiBoxInforNumber
            number="10+"
            text="Years of experience..."
            v-motion
            :initial="motionInitial"
            :enter="motionEnter"
            :leave="motionLeave"
          />
          <UiBoxInforNumber
            number="10+"
            text="Projects"
            v-motion
            :initial="motionInitial"
            :enter="motionEnter"
            :leave="motionLeave"
          />
        </div>

        <div
          class="mt-6 text-sm md:text-base"
          v-motion
          :initial="motionInitial"
          :enter="motionEnter"
          :leave="motionLeave"
        >
          Javascript | Vue.js | Vuex | Pinia | Typescript | GraphQL | SOLID |
          React.js | Next.js | Docker | GitLab | Microservices | API Rest | MVC
          | SOLID | Clean Architecture | System Design | Wordpress | MySQL |
          PostgreSQL | MongoDB | NoSQL | Insomnia | Python | Cypress | Vitest |
          Jest | SEO | Accessibility
        </div>

        <blockquote
          class="p-6 mt-12 text-white bg-black"
          v-motion
          :initial="motionInitial"
          :enter="motionEnter"
          :leave="motionLeave"
        >
          <p>
            "Technology moves the world, and I am part of it, developing
            solutions for real problems."
          </p>
        </blockquote>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
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
</script>
