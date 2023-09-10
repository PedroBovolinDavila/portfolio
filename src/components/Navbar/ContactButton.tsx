import { Button, Icon } from '@chakra-ui/react'
import { EnvelopeSimple } from 'phosphor-react'

interface ContactButtonProps {
  isMobile?: boolean
}

export function ContactButton({ isMobile = false }: ContactButtonProps) {
  return (
    <Button
      leftIcon={<Icon as={EnvelopeSimple} fontSize="md" />}
      size={isMobile ? 'md' : 'sm'}
      colorScheme="pink"
      as="a"
      href="mailto:pedrod.bovolin@gmail.com"
      bgGradient="linear(to-r, purple.500, pink.500)"
      _hover={{
        bgGradient: 'linear(to-r, purple.500, pink.500)',
      }}
    >
      Contact me!
    </Button>
  )
}
