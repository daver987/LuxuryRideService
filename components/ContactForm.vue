<script setup lang="ts">
import { FormKitSchema } from '@formkit/vue'
import { ref, reactive } from 'vue'

// const options = [
//   { label: 'Every page load', value: 'refresh' },
//   { label: 'Ever hour', value: 'hourly' },
//   { label: 'Every day', value: 'daily' },
// ]

const schema = [
  {
    $formkit: 'text',
    name: 'name',
    label: 'Full Name',
    placeholder: 'Enter your name...',
  },
  {
    $formkit: 'checkbox',
    name: 'hasEmail',
    label: 'Has Email?',
  },
  {
    $el: 'p',
    children: ['Email enabled? ', '$hasEmail'],
  },
  {
    $formkit: 'email',
    name: 'email',
    label: 'Email',
    if: '$hasEmail',
    validation: 'required|email',
  },
]

const data = ref({
  name: null,
  email: null,
  hasEmail: false,
})

const handleSubmit = () => alert('Valid submit!')
// const submitHandler = async () => {
//   // Lets pretend this is an ajax request:
//   await new Promise((resolve) => setTimeout(resolve, 1000))
// }
</script>

<template>
  <div>
    <div class="myFormkit">
      <!--      <FormKit-->
      <!--        id="form"-->
      <!--        v-model="data"-->
      <!--        type="form"-->
      <!--        :submit-attrs="{-->
      <!--          inputClass: 'btn',-->
      <!--        }"-->
      <!--        @submit="handleSubmit"-->
      <!--      >-->
      <FormKit type="form" v-model="data" @submit="handleSubmit">
        <FormKitSchema :schema="schema" :data="data" />
      </FormKit>

      <!--        <FormKitSchema :schema="schema" :data="data" />-->
      <!--      </FormKit>-->
    </div>
    <h4>Data</h4>
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped></style>
