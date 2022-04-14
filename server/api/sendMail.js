import { useRuntimeConfig } from '#nitro'

const config = useRuntimeConfig()

export default async (emailBody) => {
  const result = await $fetch(config.BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${config.ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      emailBody,
    }),
  })
  console.log(result)
}
