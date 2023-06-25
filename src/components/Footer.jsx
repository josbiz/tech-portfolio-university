import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      as="footer"
      w="100%"
      p={4}
      color="blackAlpha.700"
      textAlign="center"
    >
      <Text fontSize={14}>Developed by Bon-TI</Text>
      <Text fontSize={25}>♥</Text>
    </Box>
  );
};

export default Footer;
