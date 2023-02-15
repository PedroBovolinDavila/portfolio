import { Text, useMediaQuery } from '@chakra-ui/react'
import bottomWave from '../../assets/bottomWave.svg'
import { Section } from '../Section'

export function Footer() {
  const [isWebScreen] = useMediaQuery('(min-width: 30em)')

  return (
    <Section
      bgImage={bottomWave}
      p="8"
      pb={['24', '24', '8']}
      mb={['16', 0]}
      color="gray.300"
      align="center"
      justify="space-between"
      as="footer"
    >
      <Text fontWeight="bold" fontSize={['xl', '2xl', '3xl']} as="h4">
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
    </Section>
  )
}
