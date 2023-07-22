import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'
import changeFileName from '@/utils/changeFileName'

function PagesNavigation({type}) {

  const typeFormatted = changeFileName(type)

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href={`/blog/${type}`}>{typeFormatted}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default PagesNavigation
