import React from 'react'
import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'

import { getAllFilesMetadata } from '@/lib/mdx'

import PostPreview from '@/components/PostPreview'

export default function BlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>Bon-TI Notes | Blog</title>
        <meta
          name="description"
          content="Aquí encontrarás una colección de notas detalladas y recursos útiles que he recopilado durante mi tiempo en la escuela. Este blog está diseñado para ayudar a estudiantes como tú a obtener información adicional, clarificar conceptos y reforzar el aprendizaje"
        />
      </Head>
      <Box px={20} py={10}>
        <Heading as="h1" mb={4}>
          Blog
        </Heading>
        <Text mb={4}>
          Aquí puedes encontrar todas mis notas y código que aprendí en la
          universidad.
        </Text>
        <Grid templateColumns={['1fr', '1fr 1fr']} gap={4} my={10}>
          {posts.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </Grid>
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata()

  return {
    props: { posts },
  }
}
