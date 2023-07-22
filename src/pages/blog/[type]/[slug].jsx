import { Box, Heading, Text } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'

import { getFilesBySlug, getAllMDFiles } from '@/lib/mdx'
import PagesNavigation from '@/components/PagesNavigation'
import MDXComponents from '@/components/MDXComponents'

import Container from '@/components/Container'

export default function PostPage({ source, frontmatter }) {
  const title = frontmatter.title
  const subtitle = frontmatter.subtitle
  const date = frontmatter.date
  const keywords = frontmatter.keywords

  return (
    <>
      <Head>
        <title>{`${title} | Bon-TI Notes`}</title>
        <meta name="description" content={subtitle} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Container variant="slug">
        <Box my={6}>
        <PagesNavigation type={frontmatter.type} />
        </Box>
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
        </Container>
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getAllMDFiles();

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { type, slug } = params;
  const { source, frontmatter } = await getFilesBySlug(type, slug);

  return {
    props: {
      source,
      frontmatter: {
        type,
        slug,
        ...frontmatter,
      },
    },
  };
}
