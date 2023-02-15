import { Flex, Text, Icon, Fade, IconButton } from '@chakra-ui/react'
import { Clock, X } from 'phosphor-react'
import React from 'react'
import { SelectedTech } from '.'

import techsDescriptions from '../../utils/techsDescriptions'

interface TechDescriptionProps {
  activeTech: SelectedTech
  isOpen: boolean
  closeFunction: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedTech: React.Dispatch<
    React.SetStateAction<SelectedTech | undefined>
  >
}

export function TechDescription({
  activeTech,
  isOpen,
  closeFunction,
  setSelectedTech,
}: TechDescriptionProps) {
  function handleCloseTechDescription() {
    setSelectedTech(undefined)
    closeFunction(false)
  }

  return (
    <Fade in={isOpen}>
      <Flex
        bgGradient="linear(to-r, blue.500, purple.500, pink.500)"
        padding="8"
        borderRadius="md"
        flexDir="column"
        position="relative"
        w={['100%', 'auto']}
      >
        <IconButton
          aria-label="Fechar descrição de liguagens"
          icon={<Icon as={X} fontSize="lg" />}
          variant="ghost"
          position="absolute"
          top="4"
          right="4"
          onClick={handleCloseTechDescription}
          _hover={{
            bg: 'blue.400',
          }}
        />

        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="white"
          mr="auto"
          mb="1"
          as="h3"
        >
          {techsDescriptions[activeTech]?.title}
        </Text>
        <Text fontSize="lg">{techsDescriptions[activeTech]?.description}</Text>
        <Text
          mr="auto"
          color="gray.300"
          display="flex"
          alignItems="center"
          gap="2"
          mt="4"
        >
          <Icon as={Clock} />
          Estudos iniciados em: {techsDescriptions[activeTech]?.startDate}
        </Text>
      </Flex>
    </Fade>
  )
}
