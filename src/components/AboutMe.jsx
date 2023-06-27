import { Box, Heading, Flex, Image, UnorderedList, ListItem } from '@chakra-ui/react'


function AboutMe() {
  return (
    <Box
      className="about-me-card"
      id="about-me-card"
      p={10}
      backgroundColor="gray.200"
      borderRadius="md"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        mb={4}
        flexDirection="column"
      >
        <Heading as="h2" mb={4}>
          Sobre Mí
        </Heading>
        <Image
          src='/images/profile.jpg' 
          alt="My Photo"
          borderRadius="full"
          boxSize="150px"
          border="4px solid white"
        />
        <Box
          mx="auto"
          maxWidth="1000px"
          px={['20px', '40px', '80px', '100px']}
          textAlign="left"
        >
          <UnorderedList p={4} m={4}>
            <ListItem py="5px">
              Disfruto leyendo libros de ciencia ficción y también me gusta dibujar, especialmente en estilo de cómic.
            </ListItem>
            <ListItem py="5px">
              Me interesa mucho el campo de la programación porque creo que se pueden crear cosas increíbles al combinar creatividad y tecnología. Siempre disfruto estudiando las últimas tecnologías.
            </ListItem>
            <ListItem py="5px">
              Me encanta pasar tiempo con mis amigos y explorar nuevos lugares.
            </ListItem>
            <ListItem py="5px">
              Disfruto jugando videojuegos como una forma de relajarme y descansar de las tareas diarias y el trabajo.
            </ListItem>
            <ListItem py="5px">
              Soy amante de la comida y siempre disfruto probando nuevos platos y experimentando diferentes sabores.
            </ListItem>
            <ListItem py="5px">
              Aunque no lo hago muy seguido, me gusta escuchar música.
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </Box>
  )
}

export default AboutMe
