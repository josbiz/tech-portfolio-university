import { Box, Flex, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

const Navbar = () => {
  return (
    <Box as="nav" bg="blackAlpha.50" color="gray.800" py={4}>
      <Flex
        justify="space-between"
        align="center"
        maxW="container.xl"
        mx="auto"
        px={4}
      >
        <Text fontWeight="bold" fontSize="xl">
          Jose Bolivar I
        </Text>
        <Flex>
          <Link href="/" passHref mx={2}>
            <Text fontWeight="bold">Home</Text>
          </Link>
          <Link href="/blog" passHref mx={2}>
            <Text fontWeight="bold">Blog</Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
