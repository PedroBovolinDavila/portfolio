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
        <Title fontSize={['3xl', '4xl', '4xl', '5xl']}>Hello, welcome!</Title>

        <Text maxW={550} fontSize="lg" color="gray.100">
          My name is <TextHighlight>Pedro</TextHighlight>, I'm {age} year old.
          I've been studying programming since 2020, and I'm constantly striving
          to <TextHighlight>improve myself</TextHighlight> and develop more{' '}
          <TextHighlight>complex projects</TextHighlight>.
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
          Scroll down to see my projects
        </Link>
      </Flex>

      <Image src={rocketImg} alt="" maxW={['75%', '75%', 400, 540]} />
    </Section>
  )
}
