import { Flex, IconButton, Link, Slide, Icon, Divider } from '@chakra-ui/react'
import { X } from 'phosphor-react'
import { ContactButton } from './ContactButton'

interface MobileMenuProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <Slide in={isOpen} style={{ zIndex: 10 }}>
      <Flex
        position="absolute"
        top={0}
        left={0}
        w="100vw"
        h="100vh"
        bg="gray.900"
        flexDir="column"
        alignItems="center"
        justify="center"
        fontSize="2xl"
        gap="6"
        fontWeight="bold"
      >
        <Link href="#home">Home</Link>
        <Link href="#techs">Techs</Link>
        <Link href="#services">Serviços</Link>
        <Link href="#projects">Projetos</Link>
        <Link href="#contact">Contato</Link>

        <Divider w="24" />

        <ContactButton isMobile />

        <IconButton
          display={['flex', 'flex', 'none']}
          icon={<Icon as={X} fontSize="2xl" />}
          colorScheme="pink"
          aria-label="Abrir menu de navegação"
          onClick={onToggle}
          position="absolute"
          top="6"
          right="6"
          variant="outline"
        />
      </Flex>
    </Slide>
  )
}
