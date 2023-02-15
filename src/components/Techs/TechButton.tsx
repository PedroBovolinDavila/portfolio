import { Button } from '@chakra-ui/react'

interface TechButtonProps {
  icon: string
  onClick: () => void
}

export function TechButton({ icon, onClick }: TechButtonProps) {
  return (
    <Button
      variant="unstyled"
      w="10"
      h="10"
      p="2"
      borderWidth={1}
      borderColor="pink.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{
        bg: 'pink.500',
      }}
      onClick={onClick}
    >
      <img src={icon} alt="logo" />
    </Button>
  )
}
