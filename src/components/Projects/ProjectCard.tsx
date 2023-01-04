import { Flex, Heading, Text } from '@chakra-ui/react'
import { ProjectCardButton } from './ProjectCardButton'
import { ProjectFunction } from './ProjectFunction'
import { ProjectTech } from './ProjectTech'

interface ProjectCardProps {
  project: {
    title: string
    description: string
    functions: string[]
    techs: string[]
    githubUrl: string | undefined
    websiteUrl: string | undefined
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Flex
      flexDir="column"
      maxW={['100%', 740]}
      bgGradient="linear(to-r, blue.500, purple.500, pink.500)"
      p="6"
      borderRadius="md"
      zIndex={1}
      gap="8"
    >
      <Flex gap="4" flexDir="column">
        <Flex flexDir="column" gap="1">
          <Heading fontSize={['2xl', '3xl']}>{project.title}</Heading>
          <Text fontSize="lg" as="h4">
            {project.description}
          </Text>
        </Flex>
        <Flex flexDir="column" gap={1}>
          <Text fontSize={['xl', '2xl']} fontWeight="bold" as="strong">
            Funções
          </Text>
          <Flex flexWrap="wrap" gap="4">
            {project.functions.map((fn) => (
              <ProjectFunction key={fn} title={fn} />
            ))}
          </Flex>
        </Flex>
        <Flex flexDir="column" gap={1}>
          <Text fontSize={['xl', '2xl']} fontWeight="bold" as="strong">
            Tecnologias ultilizadas
          </Text>
          <Flex flexWrap="wrap" gap="4">
            {project.techs.map((tech) => (
              <ProjectTech key={tech} title={tech} />
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Flex gap="2">
        <ProjectCardButton
          title="Ver no Github"
          redirecUrl={project.githubUrl}
        />
        <ProjectCardButton
          title="Ver website"
          redirecUrl={project.websiteUrl}
        />
      </Flex>
    </Flex>
  )
}
