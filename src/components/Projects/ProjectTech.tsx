import { Flex, Icon } from '@chakra-ui/react'
import { Code } from 'phosphor-react'

interface ProjectTechProps {
  title: string
}

export function ProjectTech({ title }: ProjectTechProps) {
  return (
    <Flex gap="1" align="center" fontSize="md" as="span">
      <Icon as={Code} fontSize="lg" />
      {title}
    </Flex>
  )
}
