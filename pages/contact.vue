<template>
  <div>
    <TheHeader
      :aboveHeading="headerInfo.aboveHeading"
      :body="headerInfo.body"
      :heading="headerInfo.heading"
      :image="headerInfo.image"
    />
    <section class="bg-background -mt-12 px-6 pb-12 md:-mt-16 md:pb-16">
      <div class="container bg-white mx-auto shadow-xl z-10 relative">
        <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
          <h3 class="mb-4 subheading">Tell Us Something</h3>
          <h2 class="text-background-dark heading">Send Us A Message</h2>
          <FormKit
            type="form"
            class="mt-6 grid gap-y-6 grid-cols-1 sm:gap-x-8 sm:grid-cols-2"
            submit-label="Send Message"
          >
            <div>
              <FormKit
                label="Full Name"
                type="text"
                name="full-name"
                id="full-name"
                autocomplete="full-name"
                :classes="formClasses"
                v-model="store.from_name"
                validation="required"
              />
            </div>
            <div>
              <FormKit
                label="Email Address"
                id="email"
                name="from_email"
                type="email"
                autocomplete="email"
                :classes="formClasses"
                validation="required"
                v-model="store.from_email"
              />
            </div>
            <div>
              <FormKit
                label="Phone Number"
                type="text"
                name="phone_number"
                id="phone"
                autocomplete="tel"
                :classes="formClasses"
                aria-describedby="phone-optional"
                v-model="store.phone_number"
              />
            </div>
            <div class="sm:col-span-2">
              <FormKit
                label="Subject"
                type="text"
                name="subject"
                id="subject"
                :classes="formClasses"
                validation="required"
                maxlength="500"
                v-model="store.subject"
              />
            </div>
            <FormKit
              label="Message"
              type="textarea"
              id="message"
              name="message"
              rows="4"
              :classes="formClasses"
              aria-describedby="message-max"
              validation="required"
              maxlength="500"
              v-model="store.message"
            />
          </FormKit>
        </div>
      </div>
    </section>
    <section class="bg-background mt-16 px-6">
      <div
        class="container bg-white mx-auto space-y-10 shadow-xl mb-16 py-20 px-12"
      >
        <h3 class="text-center subheading">OR REACH US</h3>
        <h2 class="text-center heading">CONTACT INFORMATION</h2>
        <div
          class="flex flex-col justify-center items-center md:grid md:grid-cols-12 md:place-items-center"
        >
          <div
            class="mb-12 md:mb-0 md:col-span-5 md:col-start-2 md:row-start-1"
          >
            <a
              href="mailto:info@luxuryrideservice.com"
              class="text-heading text-lg tracking-wide"
            >
              <div class="mx-auto text-body mb-8 text-9xl i-carbon-email" />
              info@luxuryrideservice.com</a
            >
          </div>
          <div class="col-span-4 col-start-7 row-start-1">
            <a href="tel:2894009408" class="text-lg tracking-wide text-heading">
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

const formClasses = {
  outer: 'mb-2',
  label: 'block text-sm font-body text-body sm:mt-px sm:pt-2',
  inner: 'max-w-lg flex rounded-md shadow-sm',
  input:
    'flex-1 block w-full focus:ring-primary focus:border focus:border-primary min-w-0 rounded-none sm:text-sm border border-body p-2',
  help: 'text-body',
  message: 'text-red-600',
}
</script>
