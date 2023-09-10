import { Button, Flex, Heading, Text, Icon, Textarea } from '@chakra-ui/react'
import { EnvelopeSimple, PaperPlaneRight } from 'phosphor-react'
import { Section } from '../Section'
import { ContactInput } from './ContactInput'

export function Contact() {
  return (
    <Section
      id="contact"
      flexDir="column"
      align="center"
      justify="center"
      gap="24"
      noSpacing
      mb="15rem"
    >
      <Flex gap="16" align="center" flexDir={['column', 'column', 'row']}>
        <Flex flexDir="column" gap="8" textAlign={['center', 'left']}>
          <Flex gap="1" flexDir="column" maxW={400}>
            <Heading
              bgGradient="linear(to-r, purple.500, pink.500)"
              bgClip="text"
              fontWeight="bold"
              fontSize="5xl"
              as="h3"
            >
              Contato
            </Heading>
            <Text fontSize="lg" color="gray.300">
              Entre em contato comigo preenchendo o formulario ou clicando no
              botão abaixo
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDir={['column', 'column', 'row']}
          gap="4"
          w={['100%', '100%', 500, 600]}
          boxShadow="base"
        >
          <Button
            as="a"
            href="mailto:pedrod.bovolin@gmail.com"
            size="md"
            bg="gray.800"
            zIndex={1}
            flexDir="column"
            w="100%"
            p="8"
            borderRadius="md"
            gap="4"
            colorScheme="pink"
            leftIcon={<Icon as={EnvelopeSimple} fontSize="lg" color="white" />}
          >
            Entre em contato comigo pelo meu email: pedrod.bovolin@gmail.com
          </Button>
        </Flex>
      </Flex>
    </Section>
  )
}
