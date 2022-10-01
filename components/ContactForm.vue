<script setup lang="ts">
// import { FormKitSchema } from '@formkit/vue'

const schema = [
  {
    $el: 'h2',
    attrs: { class: 'text-background-dark heading' },
    children: 'Send Us A Message',
  },
  {
    $el: 'div',
    attrs: { class: 'grid grid-cols-2 gap-4' },
    children: [
      {
        $formkit: 'text',
        name: 'first_name',
        label: 'First Name:',
        placeholder: 'Enter your first name...',
        classes: {
          outer: 'col-span-1',
          label: 'text-background-dark',
          input: 'border-2 border-gray-200 rounded-md p-2',
        },
      },
      {
        $formkit: 'text',
        name: 'last_name',
        label: 'Last Name:',
        placeholder: 'Enter your last name...',
      },
    ],
  },
  {
    $el: 'div',
    attrs: { class: 'flex flex-row gap-4' },
    children: [
      {
        $formkit: 'text',
        name: 'email_address',
        label: 'Email Address:',
        placeholder: 'Enter your email...',
      },
      {
        $formkit: 'tel',
        name: 'phone_number',
        label: 'Phone Number:',
        placeholder: 'Enter your phone number...',
      },
    ],
  },
  {
    $formkit: 'textarea',
    name: 'message',
    label: 'Message:',
    placeholder: 'Enter your message...',
  },
]

const data = reactive({
  firstname: null,
  lastname: null,
  email: null,
  message: null,
})

// const handleSubmit = () => alert('Valid submit!')
// const submitHandler = async () => {
//   // Lets pretend this is an ajax request:
//   await new Promise((resolve) => setTimeout(resolve, 1000))
// }
</script>

<template>
  <div>
    <div class="myFormkit">
      <!--      <FormKit type="form" @:submit="handleSubmit" >-->
      <!--        <FormKitSchema :schema="schema" :data="data" />-->
      <!--      </FormKit>-->
    </div>
    <h4>Data</h4>
    <pre>{{ data }}</pre>
  </div>
</template>
