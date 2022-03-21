
import React, { useState }  from 'react'
import { navigate as GatsbyNavigate } from 'gatsby'
import Layout from '../components/Layout'
import {Grid} from './ProductGridWrapper'
import ImageGallery from '../components/ImageGallery/ImageGallery'
import styled from 'styled-components'
import Back from '../components/Back'
import useStore from '../context/StoreContext'
import Price from '../components/Price'




const ProductTemplate = ({pageContext}) => {
  const { product } = pageContext
  const {client} = useStore()
  console.log(client)
  const { addVariantToCart } = useStore()
 
  const {title, description, images} = product
  const [currVariantIndex, setCurrVariantIndex] = React.useState(0)
  const [variant, setVariant] = useState(product.variants[currVariantIndex]);
  const [numOfItems, setNumOfItems] = React.useState(1)
  const hasVariants = product.variants.length > 1
  



  const handleVariantChange = (e) =>{
    
    setCurrVariantIndex(e.target.value) 
    const newVariant = product?.variants.find(v => v === product.variants[e.target.value])
    setVariant(newVariant)
    // setVariant(product.variants[e.target.value])
    GatsbyNavigate(`?variant=${encodeURIComponent(newVariant.storefrontId)}`, {replace: true})
    
  }
  
 
    return (
      <Layout>
        <Back/>
        
        <Grid>
          <h1>{title}</h1>
            <div className="columns">
              <div className="left-col">
                <ImageGallery images={images}></ImageGallery>
              </div>
              <div className="right-col">
                
                <p className="description">{description}</p>
                
                { hasVariants &&
                  <SelectWrapper>
                  <strong>Variant</strong>
                    <select className="variantSelect" onChange={handleVariantChange}> 
                      {product.variants.map((variant, index)=>{
                        return (
                          <option value={index} key={index}>
                            {variant.title}
                          </option>
                        )
                      })}
                    </select>
                </SelectWrapper>}
                
                <Price variant={variant}/>
                <Order>
                  <Quantity>
                      <h4>Quantity</h4>
                      <form>
                        <input className="input" step="1" type="number" id="number" value={numOfItems} onChange={
                          (e)=>{
                            setNumOfItems(e.target.value)
                          }
                        }></input>
                      </form>
                  </Quantity>
                  <OrderButtonsWrapper>
                    <button 
                    type="button" 
                    disabled={variant.inventoryQuantity <1 ? true : false}
                    onClick={()=>addVariantToCart(variant?.storefrontId,numOfItems)}>
                        Add to cart
                    </button>
                  </OrderButtonsWrapper>
                </Order>
              </div>
          </div>
        </Grid>
      </Layout>

    )   
}
export default ProductTemplate
const Order = styled.div`
  display:flex;
  justify-content: flex-start;
  flex-direction: column;
`

const Quantity = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;

  input{
    margin-top:5px;
    width: 50px;
    padding: 1em;
    text-align: center;
    font-size: 25px;

  }

  @media screen and (max-width: 900px) {
    align-items: center;
  } 

`

const OrderButtonsWrapper = styled.div`
  margin-top: 5px;
  border-radius: 3rem;


  >button{
    padding: 15px 64px;
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
const SelectWrapper = styled.div`
    margin-top: 40px;
    >strong{
        display: block;
        margin-bottom: 8px;
    }

    .variantSelect{
        padding: 10px;
    }

    
`
