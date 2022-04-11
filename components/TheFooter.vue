<template>
  <footer class="bg-background">
    <div class="bg-background px-6">
      <div
        class="container bg-background-light flex flex-col mx-auto space-y-4 shadow-xl -mb-28 max-w-7xl py-10 px-8 z-10 relative lg:flex-row lg:space-y-0 lg:-mb-12 lg:justify-between"
      >
        <div class="lg:self-center">
          <h2 class="text-center heading lg:text-4xl">
            interested in our services?
          </h2>
        </div>
        <div class="self-center">
          <BaseButton
            kind="btn-dark"
            label="Reserve Now"
            to="/reservations"
            :nuxtLink="true"
          />
        </div>
      </div>
    </div>
    <div class="bg-background-dark w-full px-8 pt-24 pb-8 lg:pt-16 lg:pb-4">
      <div
        class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:gap-8 lg:grid-cols-3"
      >
        <div class="space-y-10 my-8">
          <NuxtLink to="/" class="max-w-[200px] block">
            <img
              alt="Luxury Ride Service"
              src="/images/Luxury-Ride-Service-Logo.png"
              width="1944"
              height="544"
              class="object-cover object-center"
            />
          </NuxtLink>

          <div class="flex flex-row justify-items-center">
            <div class="text-primary mr-8 text-3xl i-zmdi-phone" />
            <a
              href="tel:2894009408"
              class="font-body text-body-light text-base tracking-wider"
              >289.400.9408
            </a>
          </div>
          <div class="flex flex-row justify-items-center">
            <div class="mr-8 text-primary text-4xl i-ic-outline-mail" />
            <a
              href="mailto:info@luxuryrideservice.com"
              class="font-body text-body-light text-base tracking-wider"
              >info@luxuryrideservice.com
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
            Socialize With Luxury Ride Service
          </p>
          <div class="flex flex-row mx-auto max-w-40 justify-between">
            <div class="text-primary text-3xl i-zmdi-facebook" />
            <div class="text-primary text-3xl i-zmdi-twitter" />
            <div class="text-primary text-3xl i-zmdi-instagram" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary flex h-16 justify-center">
      <p class="font-body text-xs text-center text-body-light self-center">
        © LUXURY RIDE SERVICE - ALL RIGHTS RESERVED 2022
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useNavigation as navigation } from '@/composables/useNavigation'
const nav = navigation()
</script>
