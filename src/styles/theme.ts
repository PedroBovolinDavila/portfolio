import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: `'Roboto'`,
    body: `'Roboto'`,
  },
  styles: {
    global: {
      '*': {
        boxSizing: 'border-box',
        '-webkit-font-smoothing': 'antialiased',
      },
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
})
