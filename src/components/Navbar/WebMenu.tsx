import { Box, Divider, Link } from '@chakra-ui/react'
import { ContactButton } from './ContactButton'

export function WebMenu() {
  return (
    <Box
      gap="4"
      alignItems="center"
      color="gray.300"
      display={['none', 'none', 'flex']}
      as="nav"
    >
      <Link href="#home">Home</Link>
      <Link href="#techs">Techs</Link>
      <Link href="#services">Services</Link>
      <Link href="#projects">Projects</Link>
      <Link href="#contact">Contact</Link>

      <Divider h="4" bg="gray.300" orientation="vertical" />

      <ContactButton />
    </Box>
  )
}
