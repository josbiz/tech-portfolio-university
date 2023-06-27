import path from 'path'
import fs from 'fs'

import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import remarkGfm from 'remark-gfm'

const root = process.cwd()
const postsPath = 'posts'

export const getFiles = () => fs.readdirSync(path.join(root, postsPath))

export const getFilesBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(
    path.join(root, postsPath, `${slug}.md`),
    'utf-8'
  )

  const { data, content } = await matter(mdxSource)
  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
      remarkPlugins: [remarkGfm],
    },
  })

  return {
    source,
    frontmatter: {
      slug,
      ...data,
    },
  }
}

export const getAllFilesMetadata = () => {
  const files = getFiles()

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, postsPath, postSlug),
      'utf-8'
    )

    const { data } = matter(mdxSource)

    return [
      {
        ...data,
        slug: postSlug.replace('.md', ''),
      },
      ...allPosts,
    ]
  }, [])
}
