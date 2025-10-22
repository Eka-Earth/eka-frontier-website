import type { Preview } from '@storybook/svelte-vite'
import '../src/app.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f5f5f4',
        },
        {
          name: 'dark',
          value: '#002430',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
      ],
    },
  },
}

export default preview