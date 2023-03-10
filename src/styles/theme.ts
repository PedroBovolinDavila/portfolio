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
