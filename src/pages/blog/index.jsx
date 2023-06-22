import React from 'react'

import { getAllFilesMetadata } from '@/lib/mdx'
import PostPreview from '@/components/PostPreview'

export default function BlogPage({ posts }) {
  
  return (
    <div>
      <h1>Blog</h1>
      <div>
        {posts.map(post => {
          return <PostPreview key={post.slug} post={post} />
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata()
  
  return {
    props: { posts }
  }
}
