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
          w={['100%', '100%', 500, 600]}
          boxShadow="base"
        >
          <Flex
            as="form"
            action="https://mailthis.to/pedrodavila.bovolin@gmail.com"
            method="POST"
            bg="gray.800"
            zIndex={1}
            flexDir="column"
            w="100%"
            p="8"
            borderRadius="md"
            gap="4"
          >
            <ContactInput name="name" placeholder="Informe seu nome" />
            <ContactInput
              type="email"
              name="email"
              placeholder="Informe seu Email"
            />

            <Textarea
              variant="outline"
              size="lg"
              borderColor="pink.500"
              bg="gray.800"
              _hover={{
                bg: 'gray.800',
              }}
              focusBorderColor="pink.500"
              name="message"
              placeholder="Sua mensagem/proposta"
              height="90px"
              required
            />

            <Button
              type="submit"
              colorScheme="pink"
              leftIcon={<Icon as={PaperPlaneRight} fontSize="lg" />}
            >
              Enviar
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  )
}
