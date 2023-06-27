import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import heroImage from '../../public/images/bannerBackgr.jpg'

function Hero() {
  return (
    <Box
      backgroundImage={`url(${heroImage.src})`}
      backgroundColor="rgba(0, 0, 0, 0.6)"
      backgroundBlendMode="overlay"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      color="white"
      py={16}
      px={8}
      textAlign="center"
      height="85vh"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Heading as="h1" size="2xl" mb={4}>
          ¡Hola! Soy José Bolívar
        </Heading>
        <Text fontSize="xl" fontWeight="bold" mb={8}>
          ¡Bienvenido al blog de mis notas y código!
        </Text>
        <Text fontSize="lg" mb={8}>
          Aquí encontrarás publicaciones con apuntes, proyectos y código relacionado con los cursos que tomé durante mi carrera universitaria.
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          Espero que puedas aprender y obtener ideas a partir del contenido disponible aquí.
        </Text>
      </Flex>
    </Box>
  );
}

export default Hero;
