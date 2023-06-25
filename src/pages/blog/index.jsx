import React from 'react'
import { Box, Grid, Heading, Text } from '@chakra-ui/react'

import { getAllFilesMetadata } from '@/lib/mdx'

import PostPreview from '@/components/PostPreview'

export default function BlogPage({ posts }) {
  return (
    <Box px={20} py={10}>
      <Heading as="h1" mb={4}>Blog</Heading>
      <Text mb={4}>Here you can found all my notes and code, that i learned at university</Text>
      <Grid templateColumns={['1fr', '1fr 1fr']} gap={4} my={10}>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Grid>
    </Box>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata()

  return {
    props: { posts },
  }
}
