import React from 'react'
import Link from 'gatsby-link'


const IndexPage = ({data}) => (
  <div
    dangerouslySetInnerHTML={{
      __html: data.page.content,
    }}
/>
)

export default IndexPage
export const query = graphql`
  query HomeQuery {
    page(slug: { eq: "home" }) {
      title
      content
    }
  }
`
