import { Flex, SlideFade, useMediaQuery } from '@chakra-ui/react'
import {
  DiscordLogo,
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
} from 'phosphor-react'
import { SocialMediaButton } from './SocialMediaButton'

export function SocialMediaBox() {
  const [isWebScreen] = useMediaQuery('(min-width: 48em)')

  return (
    <SlideFade
      in={true}
      style={{
        position: 'fixed',
        zIndex: 20,
        ...(isWebScreen
          ? {
              top: '50%',
              translateY: '-50%',
              right: 0,
            }
          : {
              bottom: 0,
              left: '50%',
              translateX: '-50%',
            }),
      }}
    >
      <Flex
        bg="gray.800"
        flexDir={['row', 'row', 'column']}
        gap="4"
        padding="2"
        borderTopLeftRadius="lg"
        borderBottomLeftRadius={['none', 'none', 'lg']}
        borderTopRightRadius={['lg', 'lg', 'none']}
        borderWidth={1}
        borderColor="pink.500"
        as="aside"
      >
        <SocialMediaButton
          icon={InstagramLogo}
          link="https://www.instagram.com/peeeddrroo_/"
          label="Open my Instagram profile"
        />
        <SocialMediaButton
          icon={EnvelopeSimple}
          link="mailto:pedrod.bovolin@gmail.com"
          label="Send me an email"
        />
        <SocialMediaButton
          icon={DiscordLogo}
          link="https://discordapp.com/users/539167776112115722"
          label="Contact me on Discord"
        />
        <SocialMediaButton
          icon={GithubLogo}
          link="https://github.com/pedrobovolindavila"
          label="Open my GitHub profile"
        />
      </Flex>
    </SlideFade>
  )
}
