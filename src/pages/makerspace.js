import React from 'react'
import Link from 'gatsby-link'
import BodyImages from 'react-body-images'
import Header from '../components/header'

const MakerspacePage = ({data}) => (

  <BodyImages className='dimmed' bgImageArray={['https://content.octanis.org/storage/uploads/2018/08/23/5b7ec40e40a86IMG_8103.jpg']}>
    <Header mastHead={
          <div className="grid">
            <div className="grid__item sm-w-1/1">
            <div className="masterhead relative-parent">
              <h1 className="oc-brand-indicator">Learning means solving problems</h1>
              <p className="sm-w-3/5">At Octanis, we provide an environment where we turn theory into practice and learning means doing. We share experiences and tools, and make rapid incremental progress while embracing failure.  Above all, we accept everyone for who they are.
              </p>
              <a className="btn btn--large btn--primary cta" href="/about">How it works</a><br/>
            </div>
            </div>
          </div>
    } />
  </BodyImages>
)

export default MakerspacePage
export const query = graphql`
  query MakerspaceQuery {
    data1: page(slug: { eq: "makerspace" }) {
      title
      content
    }
  }
`
