import Link from 'next/link'

function PostPreview({ post }) {
  return (
    <div>
      <Link href={`/blog/${post.slug}`}>
        <h2>{post.title}</h2>
        <p>{post.subtitle}</p>
      </Link>
    </div>
  )
}

export default PostPreview
