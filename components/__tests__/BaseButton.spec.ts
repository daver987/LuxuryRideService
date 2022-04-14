import { describe, it, expect } from 'vitest'
import { setup } from '@nuxt/test-utils-edge'
import { render } from '@testing-library/vue'
// @ts-ignore
import BaseButton from 'BaseButton'

describe('BaseButton', async () => {
  await setup({
    //setup options
  })
  const label = 'test'
  const { getByText } = render(BaseButton, {
    props: { label },
  })

  it('should render a label', async (

  ) => {
    expect(getByText(BaseButton))
  })
})
