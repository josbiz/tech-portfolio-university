import { Box, Text, Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

function Footer() {
  return (
    <Box
      as="footer"
      w="100%"
      p={4}
      color="blackAlpha.700"
      textAlign="center"
    >
      <Box width="100%" marginX="auto" maxWidth="400px" marginY="15px">
        <Flex justifyContent="center">
          <Link href="/" marginX={2}>
            <Text>Home</Text>
          </Link>
          <Link href="/blog" marginX={2}>
            <Text>Blog</Text>
          </Link>
        </Flex>
      </Box>
      <Text fontSize={14}>Developed by Bon-TI</Text>
      <Text fontSize={25}>♥</Text>
    </Box>
  );
}

export default Footer;
