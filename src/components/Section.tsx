import { Box, Flex, FlexProps, Image, useMediaQuery } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface SectionProps extends FlexProps {
  bgImage?: string
  isNavbar?: boolean
  noSpacing?: boolean
  topImage?: boolean
  children: ReactNode
}

export function Section({
  bgImage,
  isNavbar = false,
  noSpacing = false,
  topImage = false,
  children,
  ...rest
}: SectionProps) {
  const [isWebScreen] = useMediaQuery('(min-width: 48em)')

  return (
    <Box pos="relative">
      {bgImage && isWebScreen && (
        <Image
          src={bgImage}
          alt=""
          pos="absolute"
          left="0"
          w="full"
          opacity={0.2}
          sx={{
            ...(topImage ? { top: 0 } : { bottom: 0 }),
          }}
        />
      )}
      <Flex
        as={isNavbar ? 'header' : 'section'}
        px="6"
        py={isNavbar ? '6' : '8'}
        pb={noSpacing || isNavbar ? '0' : ['6rem', '26rem']}
        pos="relative"
        w="100%"
        maxW={1480}
        mx="auto"
        {...rest}
      >
        {children}
      </Flex>
    </Box>
  )
}
