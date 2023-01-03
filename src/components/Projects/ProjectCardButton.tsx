import { Button } from '@chakra-ui/react'

interface ProjectCardButtonProps {
  redirecUrl: string | undefined
  title: string
}

export function ProjectCardButton({
  redirecUrl,
  title,
}: ProjectCardButtonProps) {
  return (
    <Button
      colorScheme="whiteAlpha"
      as="a"
      target="_blank"
      href={redirecUrl}
      disabled={redirecUrl === undefined}
    >
      {title}
    </Button>
  )
}
