const path = require('path')
const slugify = require('slugify')


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
    const result = await graphql(`
    query {
  allShopifyProduct {
    edges {
      node {
        title
        handle
        shopifyId
        variants {
          shopifyId
          price
          title
          inventoryQuantity
          sku
          image {
            gatsbyImageData
            id
          }
          id
          productId
        }
        priceRangeV2 {
          maxVariantPrice {
            amount
          }
        }
        description
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
}
  `)


  result.data.allShopifyProduct.edges.forEach(({node}) =>{
    const prodHandle = slugify(node.handle, {lower:true})
    createPage({
      path: `products/${prodHandle}`,
      component: path.resolve(`src/templates/ProductTemplate.js`),
      context: {
        product: node
      },
    })
  })

  
}
