
import React from 'react'
import { graphql, navigate as gatsbyNavigate } from 'gatsby'
import Layout from '../../components/Layout'
import {Grid,SelectWrapper, Price} from './ProductGridWrapper'
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import CartContext from '../../context/CartContext'
import moneyFormat from '../../util/moneyFormat'
import { useLocation } from '@reach/router'
import queryString from 'query-string'
import {FaPlus, FaMinus} from 'react-icons/fa'
import styled from 'styled-components'
import Back from '../../components/Back'



const ProductTemplate = ({data}) => {
    const {getProductById, updateLineItem} = React.useContext(CartContext)
    const {title, description, images} = data.shopifyProductVariant.product
    const [product, setProduct] = React.useState(null)
    const [selectedVariant, setSelectedVariant] = React.useState(null)
    const {search} = useLocation();


    const [numOfItems, setNumOfItems] = React.useState(1)
    const IncrementItem = () => {
      setNumOfItems(numOfItems+1)
    }
    const DecreaseItem = () => {
      setNumOfItems(numOfItems<=0?0:numOfItems-1)
    }

    const variantId = queryString.parse(search).variant

    React.useEffect(()=>{
      getProductById(data.shopifyProductVariant.product.shopifyId).then(result=>{
        setProduct(result)
        setSelectedVariant(result.variants.find(({id}) => id ===variantId) || result.variants[0] )

  
      })
    }, [getProductById,data.shopifyProductVariant.product.shopifyId, variantId])

    const handleVariantChange = (e) =>{
      const newVariant = product?.variants.find(variant=>variant.id === e.target.value)
      setSelectedVariant(newVariant)
      gatsbyNavigate(`?variant=${encodeURIComponent(newVariant.id)}`, {replace:true})
    }


    const handleSubmit = (e) =>{
      e.preventDefault();
      

    }

    return (
        <Layout>
          <Back/>
          <Grid>
           
            <div className="1">
              <h1>{title}</h1>
              <p className="description">{description}</p>
              {product?.availableForSale && !!selectedVariant &&(
              <>
              
              {product?.variants.length > 1 && (
              <SelectWrapper>
                <strong>Variant</strong>
                <select className="variantSelect" value={selectedVariant.id} onChange={handleVariantChange}>
                  {product?.variants.map((variant, index)=>{
                    return (
                      <option value={variant.id} key={index}>{variant.title}</option>
                    )
                  })}
                </select>
              </SelectWrapper>
              )}
              
              <div>
                {!!selectedVariant && (
                <>
                  <Price>${moneyFormat(selectedVariant.price)}</Price>
                </>)}
              </div>

                <Quantity>
                  <h4>Quantity</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="order-input">
                    
                      <FaMinus className="input minus" color="black" size={35} onClick={DecreaseItem} id="decrease"
                      style={{
                        border:"1px solid black",
                        borderTopStyle:"hidden",
                        borderBottomStyle:"hidden",
                        borderRightStyle:"hidden",
                        borderLeftStyle:"hidden",
                        padding:"9px",

                      }}
                      ></FaMinus>
                      <input className="input" step="1" type="number" id="number" value={numOfItems}></input>
                      <FaPlus className="input plus" color="black" size={35} onClick={IncrementItem} id="increase"
                      style={{
                        border:"1px solid black",
                        borderTopStyle:"hidden",
                        borderBottomStyle:"hidden",
                        borderRightStyle:"hidden",
                        borderLeftStyle:"hidden",
                        padding:"9px",

                      }}
                      ></FaPlus>
                  
                  </div>
                </form>
                
                </Quantity>
                <OrderButtons>
                  <button onClick={
                    ()=>alert("Added to cart")
                  } type="submit" disabled={!(selectedVariant.available)}>Add to cart</button>
                  <button onClick={
                    ()=>alert("Send user to checkout page")
                  } type="submit" disabled={!(selectedVariant.available)}>Buy it now</button>
                </OrderButtons>
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

const OrderButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 15px;
  border-radius: 3rem;
  width: 50%;

  >button:first-child{
      background-color: #00BB77;
  }

  >button{
    padding: 15px;
    margin-top: 1em;
    margin-bottom: 5px;
    font-size: 20px;
    border-radius: 3rem;
    background-color: #2F6539;
    color: white;

    
  }

  >button:disabled{
    border-color:#999;
    cursor: not-allowed;
    color: #999;
  }

  >button:hover:not(:disabled){
    cursor: pointer;
    background-color: white;
    color: #2F6539;
  }

  >button:first-child:hover:not(:disabled){
      background-color: white;
      color:#00BB77;
  }
`

const Quantity = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction:column;

  

  .order-input{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 30%;
    border: 1px solid gray;
    >input{
      width: 50px;
      padding: 1em;
      text-align: center;
      font-size: 25px;
      border-top-style: hidden;
      border-left-style: hidden;
      border-right-style: hidden;
      border-bottom-style: hidden;

    }
  }

  .input{
    margin: 0 5px;
    
  }

  .plus:hover,.minus:hover{
    cursor: pointer;
  }

  
`

export const query = graphql`
query productQuery($shopifyId: String) {
  shopifyProductVariant(shopifyId: {eq: $shopifyId}) {
    id
    shopifyId
    image{
        id
    }
    product {
      shopifyId
      title
      tags
      description
      images {
        id
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