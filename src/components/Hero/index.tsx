import { Flex, Image, Link, Text, Icon } from '@chakra-ui/react'
import { ArrowDown } from 'phosphor-react'

import rocketImg from '../../assets/rocket.svg'
import { Title } from '../Title'
import { TextHighlight } from './TextHighlight'

export function Hero() {
  return (
    <Flex
      id="home"
      alignItems="center"
      justifyContent="space-between"
      pt="8"
      h="calc(100vh - 93px)"
      flexDir={['column', 'column', 'row']}
    >
      <Flex flexDir="column" gap="8" textAlign={['center', 'center', 'start']}>
        <Title fontSize={['3xl', '4xl', '4xl', '5xl']}>
          Olá, seja bem-vindo
        </Title>

        <Text maxW={550} fontSize="lg" color="gray.100">
          Me chamo <TextHighlight>Pedro</TextHighlight>, tenho 15 anos. Estudo
          programação desde 2020 e estou a todo momento buscando me{' '}
          <TextHighlight>aprimorar</TextHighlight> e desenvolver projetos mais{' '}
          <TextHighlight>complexos</TextHighlight>.
        </Text>

        <Link
          display="flex"
          alignItems="center"
          gap="1"
          color="gray.300"
          alignSelf={['center', 'center', 'flex-start']}
        >
          <Icon as={ArrowDown} />
          desça para ver meus projetos
        </Link>
      </Flex>

      <Image src={rocketImg} alt="" maxW={['100%', 450, 450, 540]} />
      {/* 540 */}
    </Flex>
  )
}
