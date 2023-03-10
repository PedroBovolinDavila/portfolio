import { Flex, Image, Link, Text, Icon } from '@chakra-ui/react'
import { differenceInYears } from 'date-fns'
import { ArrowDown } from 'phosphor-react'

import rocketImg from '../../assets/rocket.svg'
import { Section } from '../Section'
import { Title } from '../Title'
import { TextHighlight } from './TextHighlight'

export function Hero() {
  const today = new Date()
  const birthday = new Date('2007-06-16')
  const age = differenceInYears(today, birthday)

  return (
    <Section
      id="home"
      alignItems="center"
      justifyContent={['center', 'center', 'space-between']}
      gap={['16']}
      h="calc(100vh - 80px)"
      flexDir={['column', 'column', 'row']}
      noSpacing
    >
      <Flex flexDir="column" gap="8" textAlign={['center', 'center', 'start']}>
        <Title fontSize={['3xl', '4xl', '4xl', '5xl']}>
          Olá, seja bem-vindo
        </Title>

        <Text maxW={550} fontSize="lg" color="gray.100">
          Me chamo <TextHighlight>Pedro</TextHighlight>, tenho {age} anos.
          Estudo programação desde 2020 e estou a todo momento buscando me{' '}
          <TextHighlight>aprimorar</TextHighlight> e desenvolver projetos mais{' '}
          <TextHighlight>complexos</TextHighlight>.
        </Text>

        <Link
          display="flex"
          alignItems="center"
          gap="1"
          color="gray.300"
          alignSelf={['center', 'center', 'flex-start']}
          href="#techs"
        >
          <Icon as={ArrowDown} />
          desça para ver meus projetos
        </Link>
      </Flex>

      <Image src={rocketImg} alt="" maxW={['75%', '75%', 400, 540]} />
    </Section>
  )
}
