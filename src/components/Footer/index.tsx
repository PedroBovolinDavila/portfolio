import { Flex, Text, useMediaQuery } from '@chakra-ui/react'

export function Footer() {
  const [isWebScreen] = useMediaQuery('(min-width: 30em)')

  return (
    <Flex
      w="100%"
      maxW={1480}
      mx="auto"
      p="8"
      pb={['24', '24', '8']}
      color="gray.300"
      align="center"
      justify="space-between"
    >
      <Text fontWeight="bold" fontSize={['xl', '2xl', '3xl']}>
        Pedro D
        <Text as="span" color="pink.500">
          &apos;
        </Text>{' '}
        Avila
        <Text as="span" color="pink.500">
          .
        </Text>
      </Text>
      <Text color="gray.300" fontSize={['sm', 'md']}>
        &copy; 2023 {isWebScreen && '- Todos direitos reservados'}
      </Text>
    </Flex>
  )
}
