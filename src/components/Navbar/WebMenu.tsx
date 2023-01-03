import { Box, Divider, Link } from '@chakra-ui/react'
import { ContactButton } from './ContactButton'

export function WebMenu() {
  return (
    <Box
      gap="4"
      alignItems="center"
      color="gray.300"
      display={['none', 'none', 'flex']}
    >
      <Link href="#home">Home</Link>
      <Link href="#techs">Techs</Link>
      <Link href="#services">Serviços</Link>
      <Link href="#projects">Projetos</Link>
      <Link href="#contact">Contato</Link>

      <Divider h="4" bg="gray.300" orientation="vertical" />

      <ContactButton />
    </Box>
  )
}
