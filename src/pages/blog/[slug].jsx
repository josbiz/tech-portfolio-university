import React from 'react'
import { getFilesBySlug, getFiles } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote'

export default function PostPage({ source, frontMatter }) {
  
  return (
    <div>
      <MDXRemote {...source}/>
    </div>
  )
}


export async function getStaticPaths() {
	const posts = await getFiles("posts");
	const paths = posts.map((post) => ({
		params: {
			slug: post.replace(/\.mdx/, ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { source, frontmatter } = await getFilesBySlug(params.slug);

	return {
		props: {
			source,
			frontmatter: {
				slug: params.slug,
				...frontmatter,
			},
		},
	};
}