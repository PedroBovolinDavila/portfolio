import { Button, Flex, Heading, Text, Icon } from '@chakra-ui/react'
import { ArrowCircleRight, GithubLogo } from 'phosphor-react'
import { useState } from 'react'
import { TextHighlight } from '../Hero/TextHighlight'
import { ProjectCard } from './ProjectCard'

import projects from '../../utils/projects'
import { Section } from '../Section'
import cirlceBackground from '../../assets/cirlceBackground.svg'

export function Projects() {
  const [project, setProject] = useState(projects[0])

  function handleChangeProject() {
    const currentProjectIndex = projects.findIndex(
      (currentProject) => currentProject.title === project.title,
    )

    if (currentProjectIndex === projects.length - 1) {
      setProject(projects[0])
    } else {
      setProject(projects[currentProjectIndex + 1])
    }
  }

  return (
    <Section
      id="projects"
      flexDir="column"
      align="center"
      justify="center"
      gap="24"
      bgImage={cirlceBackground}
    >
      <Flex gap="16" align="center" flexDir={['column', 'column', 'row']}>
        <Flex flexDir="column" gap="8" textAlign={['center', 'left']}>
          <Flex gap="1" flexDir="column" maxW={400}>
            <Heading
              bgGradient="linear(to-r, purple.500, pink.500)"
              bgClip="text"
              fontWeight="bold"
              fontSize="5xl"
              as="h2"
            >
              Projetos
            </Heading>
            <Text fontSize="lg" color="gray.300">
              Veja meus principais projetos, ou clique no botão abaixo para
              visualizar todos os projetos no{' '}
              <TextHighlight>GitHub</TextHighlight>
            </Text>
          </Flex>

          <Flex flexDir="column" gap="2">
            <Button
              size="md"
              colorScheme="pink"
              leftIcon={
                <Icon as={ArrowCircleRight} fontSize="lg" color="white" />
              }
              onClick={handleChangeProject}
            >
              Avançar projetos
            </Button>

            <Button
              as="a"
              href="https://github.com/PedroBovolinDavila?tab=repositories"
              target="_blank"
              size="md"
              colorScheme="pink"
              leftIcon={<Icon as={GithubLogo} fontSize="lg" color="white" />}
            >
              Ver todos os projetos
            </Button>
          </Flex>
        </Flex>
        <Flex flexDir="column">
          <ProjectCard project={project} />
        </Flex>
      </Flex>
    </Section>
  )
}
