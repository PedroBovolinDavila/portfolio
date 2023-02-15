import { Flex } from '@chakra-ui/react'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { SocialMediaBox } from './components/SocialMediaBox'

import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Techs } from './components/Techs'

export function App() {
  return (
    <Flex flexDir="column">
      <Navbar />

      <Flex
        flexDir="column"
        zIndex={1}
        as="main"
        gap={['16', '8', '0']}
        pb="32"
      >
        <SocialMediaBox />
        <Hero />

        <Techs />

        <Services />

        <Projects />

        <Contact />
      </Flex>

      <Footer />
    </Flex>
  )
}
