import { Box, Image, useMediaQuery } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface SectionProps {
  bgImage: string
  children: ReactNode
}

export function Section({ bgImage, children }: SectionProps) {
  const [isWebScreen] = useMediaQuery('(min-width: 48em)')

  return (
    <Box as="section" pos="relative">
      {isWebScreen && (
        <Image
          src={bgImage}
          alt=""
          pos="absolute"
          top="0"
          left="0"
          zIndex={-1}
          width="100vw"
          height="100vh"
          opacity={0.2}
        />
      )}
      {children}
    </Box>
  )
}
