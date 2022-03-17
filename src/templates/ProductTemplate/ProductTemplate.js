import React from 'react'
import { graphql, navigate as gatsbyNavigate } from 'gatsby'
import Layout from '../../components/Layout'
import {Grid,SelectWrapper, Price} from './ProductGridWrapper'
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import CartContext from '../../context/CartContext'
import moneyFormat from '../../util/moneyFormat'
// import { useLocation } from '@reach/router'


const ProductTemplate = ({data}) => {
    console.log(data)
    const {getProductById} = React.useContext(CartContext)
    const {title, description, images} = data.shopifyProductVariant.product
    const [product, setProduct] = React.useState(null)
    const [selectedVariant, setSelectedVariant] = React.useState(null)
    // const {search, origin, pathname} = useLocation();
    // console.log(search, origin, pathname)

    React.useEffect(()=>{
      getProductById(data.shopifyProductVariant.product.shopifyId).then(result=>{
        // console.log(result)
        setProduct(result)
        setSelectedVariant(result.variants[0])
        // console.log("PRODUCT ID Is: "+selectedVariant?.sku)
  
      })
    }, [getProductById, data.shopifyProductVariant.product.shopifyId])

    const handleVariantChange = (e) =>{
      const newVariant = product?.variants.find(variant=>variant.id === e.target.value)
      setSelectedVariant(newVariant)
      gatsbyNavigate(`?variant=${encodeURIComponent(newVariant.id)}`)
      // gastbyNavigate(`all-products?s=${encodeURIComponent(searchTerm)});
    }

    return (
        <Layout>
          
          <Grid>
            <div className="1">
              <h1>{title}</h1>
              <p>{description}</p>
              {product?.availableForSale && (
              <>
              <SelectWrapper>
                <strong>Variant</strong>
                <select onChange={handleVariantChange}>
                  {product?.variants.map((variant, index)=>{
                    return (
                      <option value={variant.id} key={index}>{variant.title}</option>
                    )
                  })}
                </select>
              </SelectWrapper>
              <div>
                {!!selectedVariant && <Price>${moneyFormat(selectedVariant.price)}</Price>}
              </div>
              </>
              )}
             
            </div>
            <div className="2">
              <ImageGallery images={images}></ImageGallery>
            </div>
          </Grid>
        </Layout>
    )
}

export const query = graphql`
query productQuery($shopifyId: String) {
  shopifyProductVariant(shopifyId: {eq: $shopifyId}) {
    id
    shopifyId
    product {
      shopifyId
      title
      tags
      description
      images {
        gatsbyImageData(layout: CONSTRAINED, width: 400, placeholder: TRACED_SVG)
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
        }
      }
    }
  }
}
`
export default ProductTemplate