<script setup lang="ts">
const tabs = useFleetTabs()

definePageMeta({
  layout: false
})
</script>

<template>
    <NuxtLayout name='fleet-layout'>
      <div class="container px-6 pt-4 md:px-0">
        <div class="bg-background w-full lg:-mt-20">
          <div
            class="mb-12 grid z-10 gap-1 grid-cols-2 relative md:grid-cols-3 lg:grid-cols-6"
          >
            <template v-for="tab in tabs" :key="tab.id">
              <NuxtLink
                :to="tab.to"
                class="flex flex-col space-y-4 w-full py-16 col-span-1 items-center justify-center hover:bg-primary bg-white text-black"
              >
                <img :src="`/icons/${tab.icon}.svg`" alt="icon" class="w-16" />
                <span class="text-sm text-center tracking-widest uppercase">
                  {{ tab.title }}
                </span>
              </NuxtLink>
            </template>
          </div>
          <NuxtPage />
        </div>
      </div>
    </NuxtLayout>
</template>


<style scoped>
.router-link-active {
  background-color: rgba(187, 136, 15);
  color: #fff;
}
</style>
