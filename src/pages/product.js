// import React from 'react'
// import { graphql, Link } from "gatsby"
// import Layout from '../Components/Layout'

// const product = () => {
//     return (
//         <Layout>
//             <h2>Product Page</h2>
//         </Layout>
//     )
// }

// export default product

import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../Components/Layout";

const ComponentName = ({ data: { allContentfulProduct } }) => {
    console.log(allContentfulProduct);
    return (
        <Layout>
            <section style={{ display: 'flex', justifyContent: 'space-around' }}>
                {
                    allContentfulProduct.nodes.map((product) => {
                        return (
                            <article key={product.id}>
                                <h2>{product.title}</h2>
                                <img src={product.image.fluid.src} alt={product.title} width={300} height={350} />
                                <p>{product.price}</p>
                                <Link to={`/product/${product.slug}`}>More Info</Link>
                            </article>
                        )
                    })
                }
            </section>
        </Layout>
    )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        title
        price
        slug
        id
        image {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default ComponentName

