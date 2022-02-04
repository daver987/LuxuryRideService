import { defineStore } from 'pinia'

export const useForm = defineStore('form', {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      phone_number: '',
      from_name: '',
      from_last_name: '',
      from_email: '',
      message: '',
      subject: '',
      response: null,
      showAlert: false,
    }
  },
  actions: {
    async submitForm() {
      this.response = await $fetch(
        'https://hooks.zapier.com/hooks/catch/11770997/b55rtmi',
        {
          method: 'POST',
          params: {
            phone_number: this.phone_number,
            from_name: this.from_name,
            from_last_name: this.from_last_name,
            from_email: this.from_email,
            message: this.message,
            subject: this.subject,
          },
        }
      )
      if ((await this.response.status) === 'success') {
        this.showAlert = true
        this.phone_number = ''
        this.from_name = ''
        this.from_last_name = ''
        this.from_email = ''
        this.message = ''
        this.subject = ''
      }
      return this.response
    },
    submitSuccess() {
      this.showAlert = true
    },
    closeAlert() {
      this.showAlert = false
    },
  },
})
