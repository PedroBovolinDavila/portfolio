import { IconButton, Icon } from '@chakra-ui/react'
import { IconProps } from 'phosphor-react'
import React from 'react'

interface SocialMediaButtonProps {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  link: string
}

export function SocialMediaButton({ icon, link }: SocialMediaButtonProps) {
  return (
    <IconButton
      icon={<Icon as={icon} color="white" fontSize="2xl" />}
      as="a"
      href={link}
      target="_blank"
      colorScheme="pink"
      aria-label="Abrir rede social"
      variant="unstyled"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="all"
      transitionDuration="2s"
      _hover={{
        bgGradient: 'linear(to-r, purple.500, pink.500)',
        border: 0,
      }}
    />
  )
}
