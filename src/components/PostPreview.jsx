import { Box, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

function PostPreview({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
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
        textAlign="center"
      >
        <Heading as="h2" fontSize={['xl', '2xl', '2xl', '2xl']} mb={2}>
          {post.title}
        </Heading>
        <Text fontSize={['md', 'lg', 'lg', 'lg']} color="gray.600">
          {post.subtitle}
        </Text>
      </Box>
    </Link>
  )
}

export default PostPreview
