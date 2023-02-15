import { Flex, Text, Icon } from '@chakra-ui/react'
import { IconProps } from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

interface ServiceCardProps {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Flex
      maxW={['100%', '100%', 230]}
      h={250}
      bgGradient="linear(to-r, blue.500, purple.500, pink.500)"
      p="6"
      align="flex-start"
      justify="flex-end"
      borderRadius="md"
      position="relative"
      flexDir="column"
    >
      <Icon as={icon} fontSize="4xl" />
      <Text fontWeight="medium" fontSize="lg" as="h3">
        {title}
      </Text>
      <Flex
        position="absolute"
        bg="blackAlpha.600"
        opacity={0}
        top="0"
        left="0"
        w="100%"
        h="100%"
        align="center"
        justify="center"
        padding="2"
        transition="all"
        textAlign="center"
        transitionDuration="0.2s"
        _hover={{
          opacity: 1,
        }}
      >
        <Text color="gray.300">{description}</Text>
      </Flex>
    </Flex>
  )
}
