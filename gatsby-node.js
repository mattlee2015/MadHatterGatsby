const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const {data} = await graphql(`
  {
  allShopifyProduct {
    edges {
      node {
        id
        title
        shopifyId
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
        handle
        description
        variants {
          shopifyId
        }
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
}

  `)

  data.allShopifyProduct.edges.forEach(({node}) =>{
    createPage({
      path: `products/${node.handle}`,
      component: path.resolve(`src/templates/ProductTemplate/ProductTemplate.js`),
      context: {
        shopifyId: node.shopifyId
      },
    })
  })

  
}
