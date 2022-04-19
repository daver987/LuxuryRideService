<template>
  <div>
    <!-- Global site tag (gtag.js) - Google Ads: 304531348 -->
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-304531348"
    ></Script>
    <Script>
      window.dataLayer = window.dataLayer || []; function
      gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config',
      'AW-304531348');
    </Script>
    <TheNavbar />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
<script setup lang="ts"></script>
