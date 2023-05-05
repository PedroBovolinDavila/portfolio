import { Button, Flex, Heading, Text, Icon } from '@chakra-ui/react'
import {
  AndroidLogo,
  Database,
  EnvelopeSimple,
  GlobeHemisphereWest,
} from 'phosphor-react'
import { Section } from '../Section'
import { ServiceCard } from './ServiceCard'

import topWave from '../../assets/topWave.svg'

export function Services() {
  return (
    <Section
      id="services"
      flexDir="column"
      align="center"
      justify="center"
      gap="24"
      bgImage={topWave}
      topImage
    >
      <Flex
        gap="16"
        align="center"
        flexDir={['column-reverse', 'column-reverse', 'row']}
      >
        <Flex
          flexDir={['column', 'column', 'row']}
          gap="4"
          w={['100%', '100%', 'auto']}
        >
          <ServiceCard
            icon={AndroidLogo}
            title="Aplicativos de celular"
            description="Aplicativo feito em React-Native para Android e IOS"
          />

          <ServiceCard
            icon={GlobeHemisphereWest}
            title="Sites responsivos"
            description="Sistemas, portfolios, sites para empresa, landing pages"
          />

          <ServiceCard
            icon={Database}
            title="Backend completo"
            description="Backend para seus apps com tudo que você precisar"
          />
        </Flex>
        <Flex flexDir="column" gap="8" textAlign={['center', 'left']}>
          <Flex gap="1" flexDir="column">
            <Heading
              bgGradient="linear(to-r, purple.500, pink.500)"
              bgClip="text"
              fontWeight="bold"
              fontSize="5xl"
              as="h2"
            >
              Serviços
            </Heading>
            <Text fontSize="lg" color="gray.300">
              Serviços desponiveis para contratar
            </Text>
          </Flex>

          <Button
            as="a"
            href="mailto:pedrod.bovolin@gmail.com"
            size="md"
            colorScheme="pink"
            leftIcon={<Icon as={EnvelopeSimple} fontSize="lg" color="white" />}
          >
            Entre em contato
          </Button>
        </Flex>
      </Flex>
    </Section>
  )
}
