import { Input, InputProps } from '@chakra-ui/react'

interface ContactInputProps extends InputProps {
  name: string
  placeholder: string
}

export function ContactInput({
  name,
  placeholder,
  ...rest
}: ContactInputProps) {
  return (
    <Input
      name={name}
      placeholder={placeholder}
      variant="outline"
      borderColor="pink.500"
      bg="gray.800"
      _hover={{
        bg: 'gray.800',
      }}
      size="lg"
      focusBorderColor="pink.500"
      required
      {...rest}
    />
  )
}
