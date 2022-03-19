import React from "react";
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useStore from "../context/StoreContext";

const ProductRow = ({ item }) => {
  const {removeLineItem} = useStore()
	const { product, quantity } = item
    const imagePath = getImage(product.images[0])

  return (
    <Wrapper>
        <ProductWrapper>
        <GatsbyImage className="item-img" image={imagePath} alt={product.title}/>
        <Subtitle>{product.title}</Subtitle>
        </ProductWrapper>
        <Subtitle>{quantity}</Subtitle>
        <DeleteButton onClick={() => removeLineItem(product.variants[0]?.shopifyId)}>Remove</DeleteButton>
    </Wrapper>
  )

}

export default ProductRow

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 330px);
  gap: 40px;
  align-items: center;

  .item-img{
    margin-top:15px;
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