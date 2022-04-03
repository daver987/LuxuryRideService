<template>
  <div>
    <TheHeader
      :aboveHeading="headerInfo.aboveHeading"
      :body="headerInfo.body"
      :heading="headerInfo.heading"
      :image="headerInfo.image"
    />
    <section class="bg-background -mt-12 px-6 pb-12 md:-mt-16 md:pb-16">
      <div class="container bg-white shadow-xl z-10 relative">
        <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
          <h3 class="mb-4 subheading">Tell Us Something</h3>
          <h2 class="text-background-dark">Send Us A Message</h2>
          <form
            class="mt-6 grid gap-y-6 grid-cols-1 sm:gap-x-8 sm:grid-cols-2"
            @submit.prevent="store.submitForm"
          >
            <div>
              <label
                for="first-name"
                class="font-medium text-sm text-warm-gray-900 block"
                >First name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="first-name"
                  class="rounded-md border-warm-gray-300 shadow-sm w-full py-3 px-4 text-warm-gray-900 form-input block focus:border-primary focus:ring-primary"
                  v-model="store.from_name"
                  required
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="font-medium text-sm text-warm-gray-900 block"
                >Last name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="from_last_name"
                  id="last-name"
                  autocomplete="family-name"
                  class="rounded-md border-warm-gray-300 shadow-sm w-full py-3 px-4 text-warm-gray-900 block focus:border-primary focus:ring-primary"
                  required
                  v-model="store.from_last_name"
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                class="font-medium text-sm text-warm-gray-900 block"
                >Email</label
              >
              <div class="mt-1">
                <input
                  id="email"
                  name="from_email"
                  type="email"
                  autocomplete="email"
                  class="rounded-md border-warm-gray-300 shadow-sm w-full py-3 px-4 text-warm-gray-900 block focus:border-primary focus:ring-primary"
                  required
                  v-model="store.from_email"
                />
              </div>
            </div>
            <div>
              <div class="flex justify-between">
                <label
                  for="phone"
                  class="font-medium text-sm text-warm-gray-900 block"
                  >Phone</label
                >
                <span id="phone-optional" class="text-sm text-warm-gray-500"
                  >Optional</span
                >
              </div>
              <div class="mt-1">
                <input
                  type="text"
                  name="phone_number"
                  id="phone"
                  autocomplete="tel"
                  class="rounded-md border-warm-gray-300 shadow-sm w-full py-3 px-4 text-warm-gray-900 block focus:border-primary focus:ring-primary/75"
                  aria-describedby="phone-optional"
                  v-model="store.phone_number"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="subject"
                class="font-medium text-sm text-warm-gray-900 block"
                >Subject</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  class="rounded-md border-warm-gray-300 shadow-sm w-full py-3 px-4 text-warm-gray-900 block focus:border-primary focus:ring-primary"
                  required
                  maxlength="500"
                  v-model="store.subject"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label
                  for="message"
                  class="font-medium text-sm text-warm-gray-900 block"
                  >Message</label
                >
                <span id="message-max" class="text-sm text-warm-gray-500"
                  >Max. 500 characters</span
                >
              </div>
              <div class="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="border rounded-md border-warm-gray-300 shadow-sm w-full py-3 px-4 text-warm-gray-900 block focus:border-primary focus:ring-primary"
                  aria-describedby="message-max"
                  required
                  maxlength="500"
                  v-model="store.message"
                />
              </div>
            </div>
            <div class="sm:flex sm:col-span-2 sm:justify-end">
              <BaseButton
                label="submit"
                type="submit"
                value="Send"
                class="btn-primary inline-flex items-center justify-center sm:w-auto focus:outline-none focus:ring-primary focus:ring-2 focus:ring-offset-2"
                @click="store.submitForm"
                kind="btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
    <section class="bg-background mt-16 px-6">
      <div class="container bg-white space-y-10 shadow-xl mb-16 py-20 px-12">
        <h3 class="text-center subheading">OR REACH US</h3>
        <h2 class="text-center">CONTACT INFORMATION</h2>
        <div
          class="flex flex-col justify-center items-center md:grid md:grid-cols-12 md:place-items-center"
        >
          <div
            class="mb-12 md:mb-0 md:col-span-5 md:col-start-2 md:row-start-1"
          >
            <a
              href="mailto:info@luxuryrideservice.com"
              class="font-bold text-xl tracking-wide"
            >
              <div class="mx-auto text-body mb-8 text-9xl i-carbon-email" />
              info@luxuryrideservice.com</a
            >
          </div>
          <div class="col-span-4 col-start-7 row-start-1">
            <a href="tel:2894009408" class="font-bold text-xl tracking-wide">
              <div
                class="mx-auto text-center text-body mb-6 text-9xl i-carbon-phone"
              />
              289.400.9408</a
            >
          </div>
        </div>
      </div>
    </section>
    <ContactAlert />
  </div>
</template>

<script setup lang="ts">
import { useForm } from '~/stores/useForm'

const headerInfo = {
  aboveHeading: 'GET IN TOUCH',
  heading: 'CONTACT US',
  body: "Your chauffeur is just a phone call away! Don't hesitate to contact us or get an online quote for rates and availability.",
  image: 'background-image: url("/images/View-City-Of-Toronto.jpg")',
}

const store = useForm()
definePageMeta({
  layout: 'default',
})
</script>
