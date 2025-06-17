import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'
import Head from 'next/head'

import { getAllFilesMetadata, getAllSubdirectories } from '@/lib/mdx'
import changeFileName from '@/utils/changeFileName'
import sortPostByDate from '@/utils/sortPostByDate'

import PostPreview from '@/components/PostPreview'
import Container from '@/components/Container'

export default function TypePage({ posts, type }) {
  const fileName = changeFileName(type)
  const sortedPosts = sortPostByDate(posts)

  return (
    <>
      <Head>
        <title>{`Notas de ${fileName} | Notas`}</title>
        <meta
          name="description"
          content="Aquí encontrarás una colección de notas detalladas y recursos útiles que he recopilado durante mi tiempo en la escuela. Este blog está diseñado para ayudar a estudiantes como tú a obtener información adicional, clarificar conceptos y reforzar el aprendizaje"
        />
      </Head>
      <Container variant="normal">
        <Heading as="h1" mb={4} fontSize={['2xl', '3xl', '4xl', '5xl']}>
          Notas de {fileName}
        </Heading>
        <Text mb={4}>
          Aquí puedes encontrar todas mis notas y código que aprendí en la
          universidad sobre esta materia.
        </Text>
        <Flex flexDirection="column" gap={6} my={10}>
          {sortedPosts.map((post) => (
            <PostPreview key={post.slug} post={post} type={type} />
          ))}
        </Flex>
      </Container>
    </>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const { type } = params

  const posts = await getAllFilesMetadata(type)

  return {
    props: { posts, type },
  }
}

export async function getStaticPaths() {
  const subs = await getAllSubdirectories()
  const paths = subs.map((sub) => ({
    params: { type: sub },
  }))

  return {
    paths,
    fallback: false,
  }
}
