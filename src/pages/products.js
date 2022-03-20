import React from 'react'
import { graphql } from 'gatsby'
import ProductCard from "../components/ProductCard"
import styled from 'styled-components'
import Layout from '../components/Layout'
// import slugify from 'slugify'
// import withoutApostrophe from '../util/apostrophe'

const Products = ({ data }) => {
	const { nodes } = data.allShopifyProduct

	return (
        <Layout>
			<ProductsWrapper>
				{nodes?.map((product,index)=>{
                    return (
                        <ProductCard key={index} product={product}></ProductCard> 
                    )
                })}
			</ProductsWrapper>
        </Layout>
            )
}

export default Products

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-left: 10vw;
  margin-top: 20px;
  margin-bottom: 30px;
`

export const query = graphql`
{
  allShopifyProduct {
    nodes {
      title
      handle
      variants {
        shopifyId
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
      }
      description
      images {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        originalSrc
      }
    }
  }
}


` 