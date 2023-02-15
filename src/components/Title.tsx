import { Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
  fontSize: string | string[]
}

export function Title({ children, fontSize }: TitleProps) {
  return (
    <Heading
      fontSize={fontSize} // 5Xl
      fontWeight="bold"
      pos="relative"
      as="strong"
      _before={{
        content: '""',
        pos: 'absolute',
        w: 160,
        h: '3px',
        bottom: '-7px',
        borderRadius: 'md',
        margin: 'auto',

        bgGradient: 'linear(to-r, purple.500, blue.500, pink.500)',
      }}
    >
      {children}
    </Heading>
  )
}
