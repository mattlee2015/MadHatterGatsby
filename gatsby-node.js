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
  const {data} = await graphql(`
  {
  allShopifyProductVariant {
    edges {
      node {
        id
        title
        price
        shopifyId
        displayName
        productId
        sku
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        product{
          handle
        }
      }
    }
  }
}
  `)


  data.allShopifyProductVariant.edges.forEach(({node}) =>{
    const prodHandle = slugify(node.product.handle, {lower:true})
    createPage({
      path: `products/${prodHandle}`,
      component: path.resolve(`src/templates/ProductTemplate/ProductTemplate.js`),
      context: {
        shopifyId: node.shopifyId
      },
    })
  })

  
}
