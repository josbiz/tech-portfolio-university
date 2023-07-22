import { Box, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

function PostPreview({ post, type }) {
  return (
    <Link href={`/blog/${type}/${post.slug}`}>
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        transition="all 0.2s"
        _hover={{
          transform: 'translateY(-2px)',
          shadow: 'lg',
        }}
        cursor="pointer"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        textAlign="left"
      >
        <Heading as="h2" fontSize={['xl', '2xl', '2xl', '2xl']} m={1}>
          {post.title}
        </Heading>
        <Text fontSize={['md', 'lg', 'lg', 'lg']} color="gray.600" m={1}>
          {post.subtitle}
        </Text>
        <Text fontSize={['sm', 'md', 'md', 'md']} color="gray.400" m={1}>
          {post.date}
        </Text>
      </Box>
    </Link>
  )
}

export default PostPreview
