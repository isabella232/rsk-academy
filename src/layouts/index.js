import * as React from 'react'
import dynamic from 'next/dynamic'

import { PageContainer } from '@/components/index'

const MDXLayout = dynamic(() => import('./mdx'))

export default function DefaultLayout({ children, frontMatter }) {
  const { slug } = frontMatter
  const layoutMap = {
    '/projects': <MDXLayout frontmatter={frontMatter}>{children}</MDXLayout>,
    '/courses': <MDXLayout frontmatter={frontMatter}>{children}</MDXLayout>,
    '/blog': <MDXLayout frontmatter={frontMatter}>{children}</MDXLayout>,
    default: (
      <PageContainer frontmatter={frontMatter}>{children}</PageContainer>
    ),
  }
  const layout = Object.entries(layoutMap).find(([path, _component]) =>
    String(slug).startsWith(path),
  )

  return layout[1] ?? layoutMap.default
}
