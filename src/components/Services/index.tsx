import { Button, Flex, Heading, Text, Icon } from '@chakra-ui/react'
import {
  AndroidLogo,
  Database,
  EnvelopeSimple,
  GlobeHemisphereWest,
} from 'phosphor-react'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return (
    <Flex
      id="services"
      h="100vh"
      flexDir="column"
      align="center"
      justify="center"
      gap="24"
      mt="16"
      pb="8"
    >
      <Flex gap="16" align="center" flexDir={['column', 'column', 'row']}>
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
            href="mailto:pedrodavila.bovolin@gmail.com"
            size="md"
            colorScheme="pink"
            leftIcon={<Icon as={EnvelopeSimple} fontSize="lg" color="white" />}
          >
            Entre em contato
          </Button>
        </Flex>
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
      </Flex>
    </Flex>
  )
}
