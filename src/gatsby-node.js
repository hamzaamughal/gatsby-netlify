
const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
    {
        allContentfulProduct {
        nodes {
          slug
          title
          price
          info{
              info
          }
          image{
              fluid{
                  src
              }
          }
        }
      }
    }
    `)
    result.data.allContentfulProduct.nodes.forEach((data) => {
        createPage({
            path: `product/${data.slug}`,
            component: path.resolve('./src/templates/productTemplate.js'),
            context: {
                data: data
            }
        })
    })
}