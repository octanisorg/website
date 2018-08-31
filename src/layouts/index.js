import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import '../styles/octanis.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} mastHead={
         <div className="masterhead relative-parent">
           <h1 className="oc-brand-indicator">Learning means solving problems</h1>
           <p className="sm-w-3/5">At Octanis, we provide an environment where we turn theory into practice and learning means doing. We share experiences and tools, and make rapid incremental progress while embracing failure.  Above all, we accept everyone for who they are.
           </p>
           <a className="btn btn--large btn--primary cta" href="/about">How it works</a><br/>
         </div>
    }/>

    {children()}

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
