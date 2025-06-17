import { Box, Text, Flex, Link } from "@chakra-ui/react";

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
            <Text>Inicio</Text>
          </Link>
          <Link href="/notas" marginX={2}>
            <Text>Notas</Text>
          </Link>
        </Flex>
      </Box>
      <Text fontSize={14}>Desarrollador por Josbiz</Text>
      <Text fontSize={25}>♥</Text>
    </Box>
  );
}

export default Footer;
