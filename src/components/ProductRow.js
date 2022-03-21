import React from "react";
import styled from "styled-components"
import useStore from "../context/StoreContext";
import { FaTrashAlt } from "react-icons/fa";
import QuantityAdjuster from "./QuantityAdjuster";


const ProductRow = ({ item }) => {

  const {checkout,removeLineItem, addVariantToCart} = useStore()
  const amount = item.quantity*item.variant.price
  console.log(item)
  const handleAdjust = ({quantity, variantId}) =>{
    addVariantToCart(variantId, quantity)
  }
  return (
    <Wrapper>
      
      <DeleteButton onClick={() => removeLineItem(checkout.id,item.id)}><FaTrashAlt/></DeleteButton>
     
      <div className="col-1">
        <div className="product-info">
          <ProductWrapper>
            <img className="item-img" src={item.variant.image.src} alt={item.title}/>
            <Subtitle className="title">{item.title}</Subtitle>
          </ProductWrapper>
          
          <div className="var-quant">
            <Subtitle><span>Variant: </span>{item.variant.title}</Subtitle>
            <Subtitle><QuantityAdjuster item={item} onAdjust={
              handleAdjust
            }/></Subtitle>
          </div>
          
        </div>    
      </div>

      <div className="col-2">  
        <Subtitle>${amount}</Subtitle>
      </div>  
    </Wrapper>
  )

}

export default ProductRow

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  margin-top:15px;
  left:0;
  margin-bottom: 3rem;
  
  span{
    display: none;
  }

  @media screen and (max-width: 500px){
    display:flex;
    justify-content: space-evenly;
    
  }


  .col-1{
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    width:100%;
  }

  .delete-btn{
    display: flex;
    justify-content: center;
  }

  .product-info{
    display:flex;
    flex-grow: 2;
    justify-content: space-around;
    align-items: center;
    width:55%;

    @media screen and (max-width:900px){
      display:flex;
      
      
    }


  }

  .var-quant{
    display:flex;
    justify-content: space-between;
    width:35%;


    @media screen and (max-width: 900px){
      display:flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: black;
      span{
        display: inline;
        color:gray;
      }
      
    
    }

  }

  .col-2{
    display:flex;
    align-items: center;
    justify-content: center;
    width:25%;


  }

  .item-img{
    
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 20px;
    margin-left:5px;
    margin-right:10px;
  }
`

const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  


`

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 14px;

`

const DeleteButton = styled.p`
  flex-grow:1;
  color: #a61b2b;
  font-size: 14px;
  cursor: pointer;
  margin-right:10px;
`