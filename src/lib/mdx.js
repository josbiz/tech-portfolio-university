import path from 'path'
import fs from 'fs'

import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'
import remarkGfm from 'remark-gfm'

const root = process.cwd()
const postsPath = 'posts'

export const getFiles = (typeDir) => {
  const fullPostsPath = path.join(root, postsPath, typeDir);

  try {
    const files = fs.readdirSync(fullPostsPath)
      .filter((file) => {
        const filePath = path.join(fullPostsPath, file);
        const stats = fs.statSync(filePath);
        return stats.isFile();
      });

    return files;
  } catch (error) {
    console.error('Error al leer los archivos:', error);
    return [];
  }
};

export const getFilesBySlug = async (type, slug) => {
  const mdxSource = fs.readFileSync(
    path.join(root, postsPath, type, `${slug}.md`),
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
      type,
      slug,
      ...data,
    },
  }
}


export const getAllFilesMetadata = (typeDir) => {
  const files = getFiles(typeDir)

  return files.reduce((allPosts, postSlug) => {
    const filePath = path.join(root, postsPath, typeDir, postSlug)

    if (fs.lstatSync(filePath).isFile()) {
      const mdxSource = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(mdxSource)

      return [
        ...allPosts,
        {
          ...data,
          slug: postSlug.replace('.md', ''),
        },
      ];
      
    }

    return allPosts
  }, [])
}


export function getAllSubdirectories() {
  try {
    const subdirectories = fs.readdirSync(path.join(root, postsPath), { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    return subdirectories;
  } catch (error) {
    console.error('Error al leer los subdirectorios:', error);
    return [];
  }
}

export function getAllMDFiles() {
  const subdirectories = getAllSubdirectories()
  const paths = []

  for (const subdir of subdirectories) {
    const dirPath = path.join(root, postsPath, subdir)
    const files = fs.readdirSync(dirPath)

    for (const file of files) {
      if (file.endsWith('.md')) {
        const slug = file.replace(/\.md$/, '')

        paths.push({
          params: {
            type: subdir,
            slug: slug,
          },
        })
      }
    }
  }

  return paths
}