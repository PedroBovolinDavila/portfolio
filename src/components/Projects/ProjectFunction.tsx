import { Flex, Icon } from '@chakra-ui/react'
import { CaretCircleRight } from 'phosphor-react'

interface ProjectFunctionProps {
  title: string
}

export function ProjectFunction({ title }: ProjectFunctionProps) {
  return (
    <Flex gap="1" align="center" fontSize="md" as="span">
      <Icon as={CaretCircleRight} fontSize="lg" />
      {title}
    </Flex>
  )
}
