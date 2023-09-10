import { Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface TextHighlightProps {
  children: ReactNode
}

export function TextHighlight({ children }: TextHighlightProps) {
  return (
    <Text
      as="span"
      color="pink.500"
      fontWeight="bold"
      bgGradient="linear(to-r, purple.500, pink.400)"
      bgClip="text"
    >
      {children}
    </Text>
  )
}
