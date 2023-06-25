import { Box, Heading, Text } from "@chakra-ui/react";

function Hero() {
  return (
    <Box
      bg="blue.500"
      color="white"
      py={16}
      px={8}
      textAlign="center"
    >
      <Heading as="h1" size="2xl" mb={4}>
        Universidad Autónoma de Baja California
      </Heading>
      <Text fontSize="xl" fontWeight="bold" mb={8}>
        ¡Bienvenidos al blog de notas y código!
      </Text>
      <Text fontSize="lg" mb={8}>
        Aquí encontrarás publicaciones con apuntes, proyectos y código relacionados con los cursos de la UABC.
      </Text>
      <Text fontSize="lg" fontWeight="bold">
        ¡Explora y aprende junto a nosotros!
      </Text>
    </Box>
  );
}

export default Hero;
