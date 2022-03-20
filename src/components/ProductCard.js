import React from 'react'
import styled from "styled-components"
import withoutApostrophe from '../util/apostrophe'
import slugify from 'slugify'
import { Link } from 'gatsby'
import moneyFormat from '../util/moneyFormat'
// import useStore from '../context/StoreContext'

const ProductCard = ({ product }) => {

  const {title} = product
  const woa = withoutApostrophe(product.title)
  const slugTitle = slugify(woa,{lower:true})
  const mf = moneyFormat(product.priceRangeV2.maxVariantPrice.amount)
  // const {addVariantToCart} = useStore()

  return (
    <Wrapper>
      {/* <AddButton onClick={()=>{
        addVariantToCart(product, 1)
        console.log("AddButton clicked")
        }}>
        <p>+</p>
      </AddButton> */}
      <ContentWrapper>
        <Link to={`/products/${slugTitle}`}>
        <Image src={product.images[0]?.originalSrc} alt={title}/>
        <TextWrapper>
          <Title>{title}</Title>
          <Price>${mf}</Price>
        </TextWrapper>
        </Link>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ProductCard

const Wrapper = styled.div`
  display: grid;
  margin: 10px 10px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  width: 300px;
  border-radius: 20px;

  gap: 10px;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 20px 40px rgba(52, 53, 99, 0.2),
    0px 1px 3px rgba(0, 0, 0, 0.05);

  .featured-img{
    width: 200px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    margin: 0;
  }

`

const ContentWrapper = styled.div``

const Image = styled.img`
  width: 280px;
  height: 300px;
  object-fit: contain;
  border-radius: 20px;
  margin: 0;
`

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  
  border-radius: 0 0 20px 20px;
  background: rgba(255, 255, 255, 0.2);
  width: 100%;
  padding: 10px 0;
  backdrop-filter: blur(40px);
`

const Title = styled.p`
  font-weight: 600;
  text-align: center;
  margin: 0;
  color: black;
`

const Price = styled.p`
  font-weight: normal;
  text-align: center;
  margin: 0;
  color: black;
`