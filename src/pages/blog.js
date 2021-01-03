import React from 'react'
import Layout from '../Components/Layout'

const blog = ({ data }) => {
    return (
        <Layout>
            <h2>Blog Page</h2>
            <h5>{data.site.siteMetadata.name}</h5>
        </Layout>
    )
}
export const query = graphql`
  {
    site {
      siteMetadata {
        name
        description
        age
        address
      }
    }
  }
`

export default blog
