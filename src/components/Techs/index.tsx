import { Flex, Heading, Text } from '@chakra-ui/react'
import { TechButton } from './TechButton'

import techsDescriptions from '../../utils/techsDescriptions'

import typescriptLogo from '../../assets/typescript-logo.svg'
import nodeLogo from '../../assets/node-logo.svg'
import fastifyLogo from '../../assets/fastify-logo.svg'
import nestLogo from '../../assets/nest-logo.svg'
import prismaLogo from '../../assets/prisma-logo.svg'
import nextLogo from '../../assets/next-logo.svg'
import tailwindLogo from '../../assets/tailwind-logo.svg'
import vitestLogo from '../../assets/vitest-logo.svg'

import { useState } from 'react'
import { TechDescription } from './TechDescription'
import { Section } from '../Section'

import bottomWave from '../../assets/bottomWave.svg'

export type SelectedTech = keyof typeof techsDescriptions

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
          maxW={400}
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
            Technologies
          </Heading>
          <Text fontSize="lg" color="gray.300">
            Check out the main technologies I use in my projects.
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
            <Text color="gray.400" as="span" textAlign="center">
              Click the buttons below to view details of the technologies.
            </Text>
          )}
        </Flex>
      </Flex>
      <Flex gap="4" flexWrap="wrap" justify={'center'}>
        <TechButton
          icon={typescriptLogo}
          onClick={() => handleSelectTech('typescript')}
          label="Open Typescript description"
        />
        <TechButton
          icon={nodeLogo}
          onClick={() => handleSelectTech('node')}
          label="Open Node.js description"
        />
        <TechButton
          icon={fastifyLogo}
          onClick={() => handleSelectTech('fastify')}
          label="Open Fastify description"
        />
        <TechButton
          icon={nestLogo}
          onClick={() => handleSelectTech('nest')}
          label="Open Nest.js description"
        />
        <TechButton
          icon={prismaLogo}
          onClick={() => handleSelectTech('prisma')}
          label="Open Prisma description"
        />
        <TechButton
          icon={nextLogo}
          onClick={() => handleSelectTech('next')}
          label="Open Next.js description"
        />
        <TechButton
          icon={tailwindLogo}
          onClick={() => handleSelectTech('tailwind')}
          label="Open Tailwind CSS description"
        />
        <TechButton
          icon={vitestLogo}
          onClick={() => handleSelectTech('vitest')}
          label="Open Vitest description"
        />
      </Flex>
    </Section>
  )
}
