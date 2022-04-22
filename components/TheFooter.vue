<template>
  <FooterCta />
  <footer class="bg-background-dark w-full px-8 pt-24 pb-8 lg:pt-16 lg:pb-4">
    <div
      class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:gap-8 lg:grid-cols-3"
    >
      <div class="space-y-10 my-8">
        <NuxtLink to="/" class="max-w-[200px] block">
          <img
            :alt="companyName"
            :src="companyLogo"
            width="1944"
            height="544"
            class="object-cover object-center"
          />
        </NuxtLink>

        <div class="flex flex-row justify-items-center">
          <div class="text-primary mr-8 text-3xl i-zmdi-phone" />
          <a
            :href="`tel:${companyPhone}`"
            class="font-body text-white text-base tracking-wider hover:text-primary cursor-pointer"
            >{{ companyPhone }}
          </a>
        </div>
        <div class="flex flex-row justify-items-center">
          <div class="mr-8 text-primary text-4xl i-ic-outline-mail" />
          <a
            :href="`mailto:${companyEmail}`"
            class="font-body text-white text-base tracking-wider hover:text-primary cursor-pointer"
            >{{ companyEmail }}
          </a>
        </div>
      </div>
      <div class="space-y-4 my-8">
        <h3
          class="font-subheading text-xl text-primary tracking-widest uppercase"
        >
          Quick Links
        </h3>
        <ul
          class="flex flex-col font-bold font-body text-body-light leading-relaxed tracking-wider uppercase"
        >
          <li v-for="myNavigation in nav" :key="myNavigation.id">
            <NuxtLink :to="myNavigation.href">
              {{ myNavigation.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="space-y-6 my-8 lg:space-y-4">
        <h3
          class="font-subheading text-xl text-primary tracking-widest uppercase"
        >
          Sign Up
        </h3>
        <EmailInput />
        <BaseButton kind="btn-solid" label="Subscribe" />
        <p
          class="font-body text-base text-center text-body-light tracking-wider uppercase"
        >
          Socialize With {{ companyName }}
        </p>
        <div class="flex flex-row mx-auto max-w-40 justify-between">
          <div class="text-primary text-3xl i-zmdi-facebook" />
          <div class="text-primary text-3xl i-zmdi-twitter" />
          <div class="text-primary text-3xl i-zmdi-instagram" />
        </div>
      </div>
    </div>
  </footer>
  <SubFooter />
</template>

<script setup lang="ts">
import FooterCta from '~/components/FooterCta.vue'
defineProps({
  companyName: { type: String, default: 'Luxury Ride Service' },
  companyEmail: { type: String, default: 'info@luxuryrideservice.com' },
  companyPhone: { type: String, default: '289.400.9408' },
  companyLogo: {
    type: String,
    default: '/images/Luxury-Ride-Service-Logo.png',
  },
})
const nav = useNavigation()
</script>
