import { Box, Flex, Text, Link } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box as="nav" bg="blackAlpha.50" color="gray.800" py={4} px={3}>
      <Flex
        justify="space-between"
        align="center"
        maxW="container.xl"
        mx="auto"
        px={4}
      >
        <Link href="/">
          <Text fontWeight="bold" fontSize="xl">
            Josbiz Notes
          </Text>
        </Link>
        <Flex>
          <Link href="/" mx={2}>
            <Text fontWeight="bold">Inicio</Text>
          </Link>
          <Link href="/notas" mx={2}>
            <Text fontWeight="bold">Notas</Text>
          </Link>
        </Flex>
      </Flex> 
    </Box>
  )
}

export default Navbar
