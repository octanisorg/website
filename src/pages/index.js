import React from 'react'
import Link from 'gatsby-link'


const IndexPage = ({data}) => (

<div>
  <div id="pagebg">
   <img src="/img/header1.jpg" alt="" />
  </div>

  <div className="grid padded bg-gradient">
		<div className="grid__item sm-w-1/1">
		</div>
	</div>

    <div className="grid padded bg-darker">
      <div className="grid__item sm-w-1/1 pdg">
          <h1>{data.page.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.page.content,
            }}
        />
      </div>
    </div>

  </div>
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
