import {
  Text,
  Icon,
  IconButton,
  useMediaQuery,
  useDisclosure,
} from '@chakra-ui/react'
import { List } from 'phosphor-react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { Section } from '../Section'
import { MobileMenu } from './MobileMenu'
import { WebMenu } from './WebMenu'

export function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  const [isWebScreen] = useMediaQuery('(min-width: 48em)')
  const scrollPosition = useScrollPosition()

  return (
    <Section
      h="20"
      align="center"
      justify="space-between"
      zIndex={3}
      position="sticky"
      bg={scrollPosition > 0 ? 'gray.900' : 'transparent'}
      top={0}
      isNavbar
    >
      <Text fontWeight="bold" fontSize="3xl" as="h1">
        Pedro D
        <Text as="span" color="pink.500">
          &apos;
        </Text>{' '}
        Avila
        <Text as="span" color="pink.500">
          .
        </Text>
      </Text>

      {isWebScreen ? (
        <WebMenu />
      ) : (
        <MobileMenu isOpen={isOpen} onToggle={onToggle} />
      )}

      <IconButton
        display={['flex', 'flex', 'none']}
        icon={<Icon as={List} fontSize="2xl" />}
        colorScheme="pink"
        aria-label="Abrir menu de navegação"
        onClick={onToggle}
      />
    </Section>
  )
}
