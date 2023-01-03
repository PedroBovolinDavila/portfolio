import { Box, Flex, Image, useMediaQuery } from '@chakra-ui/react'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { SocialMediaBox } from './components/SocialMediaBox'

import waveSvg from './assets/background.svg'
import techBackgroundSvg from './assets/techBackground.svg'
import servicesBackgroundSvg from './assets/servicesBackground.svg'
import projectsBackgroundSvg from './assets/projectsBackground.svg'
import contactBackgroundSvg from './assets/contactBackground.svg'

import { Techs } from './components/Techs'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  const [isWebScreen] = useMediaQuery('(min-width: 48em)')

  return (
    <Flex flexDir="column">
      {isWebScreen && (
        <Image
          src={waveSvg}
          alt=""
          pos="absolute"
          top="0"
          left="0"
          zIndex={0}
          width="100vw"
          height="100vh"
          opacity={0.2}
        />
      )}
      <Navbar />

      <Flex
        w="100%"
        maxW={1480}
        mx="auto"
        px="8"
        pt="10"
        pb="24"
        flexDir="column"
        zIndex={1}
        gap="32"
      >
        <SocialMediaBox />
        <Hero />
        <Box pos="relative">
          {isWebScreen && (
            <Image
              src={techBackgroundSvg}
              alt=""
              pos="absolute"
              top="0"
              left="0"
              zIndex={0}
              width="100vw"
              height="100vh"
              opacity={0.2}
            />
          )}
          <Techs />
        </Box>
        <Box pos="relative">
          {isWebScreen && (
            <Image
              src={servicesBackgroundSvg}
              alt=""
              pos="absolute"
              top="0"
              left="0"
              zIndex={0}
              width="100vw"
              height="100vh"
              opacity={0.2}
            />
          )}
          <Services />
        </Box>
        <Box pos="relative">
          {isWebScreen && (
            <Image
              src={projectsBackgroundSvg}
              alt=""
              pos="absolute"
              top="0"
              left="0"
              zIndex={0}
              width="100vw"
              height="100vh"
              opacity={0.2}
            />
          )}
          <Projects />
        </Box>
        <Box pos="relative">
          {isWebScreen && (
            <Image
              src={contactBackgroundSvg}
              alt=""
              pos="absolute"
              top="0"
              left="0"
              zIndex={0}
              width="100vw"
              height="100vh"
              opacity={0.2}
            />
          )}
          <Contact />
        </Box>
      </Flex>

      <Footer />
    </Flex>
  )
}
