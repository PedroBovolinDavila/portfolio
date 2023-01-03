import { Button, Flex, Heading, Text, Icon, Textarea } from '@chakra-ui/react'
import { EnvelopeSimple, PaperPlaneRight } from 'phosphor-react'
import { ContactInput } from './ContactInput'

export function Contact() {
  return (
    <Flex
      id="contact"
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
          <Flex gap="1" flexDir="column" maxW={400}>
            <Heading
              bgGradient="linear(to-r, purple.500, pink.500)"
              bgClip="text"
              fontWeight="bold"
              fontSize="5xl"
            >
              Contato
            </Heading>
            <Text fontSize="lg" color="gray.200">
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
              _focus={{
                bg: 'gray.800',
                borderWidth: 1,
                borderColor: 'pink.500',
              }}
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
    </Flex>
  )
}
