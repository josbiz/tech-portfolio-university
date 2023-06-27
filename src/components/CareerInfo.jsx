import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';

function CareerInfo() {
  return (
    <Box p={{ base: '4', md: '8' }} backgroundColor="white" borderRadius="md">
      <Flex alignItems="center" flexDirection={{ base: 'column', md: 'row' }} m={{ base: '2', md: '4' }}>
        <Image
          src="/images/LogoUABC.png" // Ruta del logo de la universidad
          alt="University Logo"
          boxSize={{ base: '150px', md: '250px' }}
          objectFit="contain"
          m={{ base: '0', md: '4' }}
        />
        <Box p={{ base: '2', md: '4' }}>
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={{ base: '2', md: '4' }}>
            Licenciado en Sistemas computacionales
          </Heading>
          <Text fontWeight="bold">
            Universidad:
          </Text>
          <Text>Universidad Autónoma de Baja California</Text>
          <Text fontWeight="bold" mt={{ base: '4', md: '2' }}>
            Facultad:
          </Text>
          <Text>Facultad de Ingeniería (Mexicali)</Text>
          <Text fontWeight="bold" mt={{ base: '4', md: '2' }}>
            Duración:
          </Text>
          <Text>8 semestres</Text>
          <Text fontWeight="bold" mt={{ base: '4', md: '2' }}>
            Descripción:
          </Text>
          <Text>
            La Licenciatura en Sistemas Computacionales de la Universidad Autónoma de Baja California (UABC) es un programa educativo enfocado en formar profesionales altamente capacitados en el campo de la informática y la tecnología de la información. Durante esta licenciatura, los estudiantes adquieren conocimientos teóricos y prácticos en áreas como la programación, el desarrollo de software, las redes de computadoras, la seguridad informática, la inteligencia artificial y la gestión de proyectos.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default CareerInfo;
