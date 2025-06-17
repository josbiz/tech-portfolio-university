import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'

import { getAllSubdirectories } from '@/lib/mdx'
import changeFileName from '@/utils/changeFileName'

import Container from '@/components/Container'
import TypePreview from '@/components/TypePreview'

export default function BlogPage({ subs }) {
  return (
    <>
      <Head>
        <title>Josbiz Notes | Blog</title>
        <meta
          name="description"
          content="Aquí encontrarás una colección de notas detalladas y recursos útiles que he recopilado durante mi tiempo en la escuela. Este blog está diseñado para ayudar a estudiantes como tú a obtener información adicional, clarificar conceptos y reforzar el aprendizaje"
        />
      </Head>
      <Container variant="normal">
        <Heading as="h1" mb={4} fontSize={['2xl', '3xl', '4xl', '5xl']}>
          Notas
        </Heading>
        <Text mb={4}>
          Aquí encontrarás una colección de notas detalladas y recursos útiles
          que he recopilado durante mi tiempo en la escuela. Este blog está
          diseñado para ayudar a estudiantes como tú a obtener información
          adicional, clarificar conceptos y reforzar el aprendizaje
        </Text>
        <Box>
          {subs.map((sub) => {
            const fileName = changeFileName(sub)
            return (
              <TypePreview key={sub} sub={sub} filename={fileName} />
            )
          })}
        </Box>
        </Container>
    </>
  )
}

export async function getStaticProps() {
  const subs = await getAllSubdirectories()

  return {
    props: { subs },
  }
}
