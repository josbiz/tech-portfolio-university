import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

const root = process.cwd()
const postsPath = 'posts'

export const getFiles = () => fs.readdirSync(path.join(root, postsPath))

export const getFilesBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(
    path.join(root, postsPath, `${slug}.mdx`),
    'utf-8'
  )

  const { data, content } = await matter(mdxSource)
  const source = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
    },
  })

  return {
    source,
    frontMatter: {
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
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ]
  }, [])
}
