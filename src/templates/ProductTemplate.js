
import React from 'react'
// import { navigate } from 'gatsby'
import Layout from '../components/Layout'
import {Grid} from './ProductGridWrapper'
import ImageGallery from '../components/ImageGallery/ImageGallery'
// import queryString from 'query-string'
import {FaPlus, FaMinus} from 'react-icons/fa'
// import { useLocation } from '@reach/router'
import styled from 'styled-components'
import Back from '../components/Back'
import useStore from '../context/StoreContext'
import Price from '../components/Price'




const ProductTemplate = ({pageContext}) => {
  const { product } = pageContext

  const {title, description, images} = product
  const { addVariantToCart } = useStore()
    

  const [numOfItems, setNumOfItems] = React.useState(1)
  const IncrementItem = () => {
    setNumOfItems(numOfItems+1)
  }
  const DecreaseItem = () => {
    setNumOfItems(numOfItems<=0?0:numOfItems-1)
  }

  const [currVariantIndex, setCurrVariantIndex] = React.useState(0)


  
 
    return (
      <Layout>
        <Back/>
        <Grid>
          <div className="right-col">
            <h1>{title}</h1>
            <p className="description">{description}</p>
            {/* <SelectWrapper>
              <strong>Variant</strong>
                <select className="variantSelect" onChange={(e) =>{
                  setCurrVariantIndex(e.target.value)
                }}> 
                  {product.variants.map((variant, index)=>{
                    return (
                      <option value={index} key={index}>
                        {variant.title}
                      </option>
                    )
                  })}
                </select>
            </SelectWrapper> */}

            <Price variant={product.variants[currVariantIndex]}/>
            <Quantity>
                <h4>Quantity</h4>
                <form >
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
                        <input className="input" step="1" type="number" id="number" readOnly value={numOfItems}></input>
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
            <OrderButtonsWrapper>
              <button 
              type="button" 
              disabled={product.variants[currVariantIndex].inventoryQuantity <1 ? true : false}
              onClick={()=>addVariantToCart(product,numOfItems)}>
                  Add to cart
              </button>
              <button 
              onClick={()=>alert("Send user to checkout page")}
              type="button" 
              disabled={product.variants[currVariantIndex].inventoryQuantity <1 ? true : false}>
                  Buy it now
                </button>
            </OrderButtonsWrapper>
          </div>
          <div className="left-col">
            <ImageGallery images={images}></ImageGallery>
          </div>
        </Grid>
      </Layout>

    )   
}
export default ProductTemplate

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

const OrderButtonsWrapper = styled.div`
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
