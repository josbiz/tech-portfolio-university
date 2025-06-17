import {
  Breadcrumb
} from '@chakra-ui/react'
import changeFileName from '@/utils/changeFileName'

function PagesNavigation({type}) {

  const typeFormatted = changeFileName(type)

  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
        <Breadcrumb.Link href="/notas">Blog</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
        <Breadcrumb.Link href={`/notas/${type}`}>{typeFormatted}</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}

export default PagesNavigation
