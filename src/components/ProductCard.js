import React from 'react'
import styled from "styled-components"
// import useStore from '../context/StoreContext'
import withoutApostrophe from '../util/apostrophe'
import slugify from 'slugify'
import { Link } from 'gatsby'
import moneyFormat from '../util/moneyFormat'

const ProductCard = ({ product }) => {
  // const { addVariantToCart } = useStore()

  const {title} = product
  const woa = withoutApostrophe(product.title)
  const slugTitle = slugify(woa,{lower:true})
  const mf = moneyFormat(product.priceRangeV2.maxVariantPrice.amount)

  return (
    <Wrapper>
      <AddButton onClick={
        () => /*addVariantToCart(product, 1)*/
        console.log("added item")}><p>+</p>
      </AddButton>
      <ContentWrapper>
        <Link to={`/products/${slugTitle}`}>
        <Image src={product.images[0]?.originalSrc} alt={title}/>
        </Link>
        <TextWrapper>
          <Title>{title}</Title>
          <Price>${mf}</Price>
        </TextWrapper>
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
  width: 200px;
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
  width: 200px;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  margin: 0;
`

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-radius: 0 0 20px 20px;
  background: rgba(255, 255, 255, 0.2);
  width: 200px;
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

const AddButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #014c40;
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.2);
    transition: 0.2s;
  }
  p {
    margin: 0;
    color: white;
    text-align: center;
    font-weight: bold;
    line-height: 0;
    @media not all and (min-resolution:.001dpcm) { 
      @supports (-webkit-appearance: none) {
        margin-bottom: 5px;
      }
    }
  }
`