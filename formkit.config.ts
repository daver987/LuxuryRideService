import { DefaultConfigOptions } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

export default {
  theme: 'genesis',
  config: {
    classes: generateClasses({
      global: {
        outer: 'mt-2',
        wrapper: 'w-full rounded-0',
        // label: 'block text-sm text-gray-200 hidden',
        inner: 'max-w-md mt-1 bg-white p-0 rounded-0',
        input:
          'block w-full rounded-0 focus:border-primary focus:ring-primary sm:text-sm placeholder-gray-400',
        help: 'text-sm text-gray-50',
        messages: 'list-none p-0 mt-1 mb-0',
        message: 'text-red-500 mb-1 text-xs',
        disabled: 'opacity-75 cursor-not-allowed',
      },
      text: {
        input: 'h-10',
      },
      email: {
        input: 'h-10',
      },
      select: {
        input:
          'mt-1 block w-full rounded-md pl-3 pr-10 sm:text-sm' +
          ' placeholder-red-400 focus:border-primary focus:outline-none' +
          ' focus:ring-primary sm:text-sm',
      },
    }),
  },
}
