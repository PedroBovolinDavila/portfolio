import { Button, Flex, Heading, Text, Icon } from '@chakra-ui/react'
import { Database, EnvelopeSimple, GlobeHemisphereWest } from 'phosphor-react'
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
            icon={GlobeHemisphereWest}
            title="Websites"
            description="Responsive websites to boost your company."
          />

          <ServiceCard
            icon={Database}
            title="Backend (server)"
            description="Full backends with all available services."
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
              Services
            </Heading>
            <Text fontSize="lg" color="gray.300">
              Check out my available services for hire.
            </Text>
          </Flex>

          <Button
            as="a"
            href="mailto:pedrod.bovolin@gmail.com"
            size="md"
            colorScheme="pink"
            leftIcon={<Icon as={EnvelopeSimple} fontSize="lg" color="white" />}
          >
            Contact me!
          </Button>
        </Flex>
      </Flex>
    </Section>
  )
}
