import { Box, Heading, Text } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'

import { getFilesBySlug, getFiles } from '@/lib/mdx'
import MDXComponents from '@/components/MDXComponents'

export default function PostPage({ source, frontmatter }) {
  const title = frontmatter.title
  const subtitle = frontmatter.subtitle
  const date = frontmatter.date

  return (
    <>
      <Head>
        <title>{`${title} | Blog`}</title>
      </Head>
      <Box
        mx={['20px', '50px', '100px', '200px']}
        my={['20px', '30px', '40px', '50px']}
      >
        <Heading as="h1" fontSize={['xl', '2xl', '3xl', '4xl']} mb={2}>
          {title}
        </Heading>
        <Heading
          as="h2"
          fontSize={['md', 'lg', 'xl', '2xl']}
          fontWeight="normal"
          mb={2}
        >
          {subtitle}
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={4}>
          {date}
        </Text>
        <Box>
          <MDXRemote {...source} components={MDXComponents} />
        </Box>
      </Box>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getFiles('posts')
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.md/, ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
} 

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFilesBySlug(params.slug)
  
  return {
    props: {
      source,
      frontmatter: {
        slug: params.slug,
        ...frontmatter,
      },
    },
  }
}
