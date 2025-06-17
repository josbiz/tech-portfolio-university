import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function TypePreview({ sub, filename }) {
  return (
    <div>
      <Link href={`/notas/${sub}`}>
        <Box
          p={4}
          my={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          backgroundColor="gray.200"
          transition="all 0.2s"
          _hover={{
            transform: 'translateY(-2px)',
            shadow: 'lg',
            color: 'blue.500',
            backgroundColor: "white"
          }}
          cursor="pointer"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          textAlign="left"
        >
          <Heading as="h2" fontSize={['xl', '2xl', '2xl', '2xl']} m={1}>
            {filename}
          </Heading>
        </Box>
      </Link>
    </div>
  )
}

export default TypePreview
