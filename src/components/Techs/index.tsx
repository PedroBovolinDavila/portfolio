import { Flex, Heading, Text } from '@chakra-ui/react'
import { TechButton } from './TechButton'

import reactLogo from '../../assets/react-logo.svg'
import nextLogo from '../../assets/next-logo.svg'
import nodeLogo from '../../assets/node-logo.svg'
import prismaLogo from '../../assets/prisma-logo.svg'
import tailwindLogo from '../../assets/tailwind-logo.svg'
import typescriptLogo from '../../assets/typescript-logo.svg'

import { useState } from 'react'
import { TechDescription } from './TechDescription'
import { Section } from '../Section'

import bottomWave from '../../assets/bottomWave.svg'

export type SelectedTech =
  | 'react'
  | 'typescript'
  | 'node'
  | 'tailwind'
  | 'prisma'
  | 'next'

export function Techs() {
  const [seletedTech, setSelectedTech] = useState<SelectedTech | undefined>()
  const [isTechDescriptionOpen, setIsTechDescriptionOpen] = useState(false)

  function handleSelectTech(tech: SelectedTech) {
    setSelectedTech(tech)
    setIsTechDescriptionOpen(true)
  }

  return (
    <Section
      id="techs"
      flexDir="column"
      align="center"
      justify="center"
      gap="24"
      bgImage={bottomWave}
    >
      <Flex
        display="flex"
        gap="16"
        alignItems="center"
        flexDir={['column', 'column', 'row']}
      >
        <Flex
          flexDir="column"
          maxW={350}
          gap="2"
          textAlign={['center', 'left']}
        >
          <Heading
            bgGradient="linear(to-r, purple.500, pink.500)"
            bgClip="text"
            fontWeight="bold"
            fontSize="5xl"
            as="h2"
          >
            Tecnologias
          </Heading>
          <Text fontSize="lg" color="gray.300">
            Confira as principais tecnologias que uso em meus projetos
          </Text>
        </Flex>
        <Flex align="center" justify="center" maxW={550}>
          {seletedTech ? (
            <TechDescription
              activeTech={seletedTech}
              isOpen={isTechDescriptionOpen}
              closeFunction={setIsTechDescriptionOpen}
              setSelectedTech={setSelectedTech}
            />
          ) : (
            <Text color="gray.400" as="span">
              Clique nas tecnolgias para ver detalhes
            </Text>
          )}
        </Flex>
      </Flex>
      <Flex gap="4">
        <TechButton
          icon={typescriptLogo}
          onClick={() => handleSelectTech('typescript')}
        />
        <TechButton
          icon={reactLogo}
          onClick={() => handleSelectTech('react')}
        />
        <TechButton icon={nextLogo} onClick={() => handleSelectTech('next')} />
        <TechButton
          icon={tailwindLogo}
          onClick={() => handleSelectTech('tailwind')}
        />
        <TechButton icon={nodeLogo} onClick={() => handleSelectTech('node')} />
        <TechButton
          icon={prismaLogo}
          onClick={() => handleSelectTech('prisma')}
        />
      </Flex>
    </Section>
  )
}
