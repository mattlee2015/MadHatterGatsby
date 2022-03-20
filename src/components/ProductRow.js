import React from "react";
import styled from "styled-components"
import useStore from "../context/StoreContext";

const ProductRow = ({ item }) => {

  const {checkout, removeLineItem} = useStore()
  
  return (
    <Wrapper>
        <ProductWrapper>
        <img className="item-img" src={item.variant.image.src} alt={item.title}/>
        <Subtitle>{item.title}</Subtitle>
        </ProductWrapper>
        <Subtitle>{item.quantity}</Subtitle>
        <DeleteButton onClick={() => removeLineItem(checkout.id,item.id)}>Remove</DeleteButton>
    </Wrapper>
  )

}

export default ProductRow

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 330px);
  gap: 40px;
  align-items: center;
  margin-top:15px;
  .item-img{
    
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 20px;
  }
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  gap: 20px;
  align-items: center;
  width: 330px;
`

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 14px;

`

const DeleteButton = styled.p`
  color: #a61b2b;
  font-size: 14px;
  cursor: pointer;
`