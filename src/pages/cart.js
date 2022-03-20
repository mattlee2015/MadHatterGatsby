import React from 'react'
import styled from "styled-components"

import Layout from '../components/Layout'
import ProductRow from '../components/ProductRow'
import PrimaryButton from "../components/PrimaryButton"
import useStore from '../context/StoreContext'

const Cart = () => {

  const { checkout } = useStore()

  return (
    <Layout>
      <Wrapper>
        <HeaderWrapper>
          <Text>Product</Text>
          <Text>Quantity</Text>
          <Text>Remove Item</Text>
        </HeaderWrapper>

        {
          checkout.lineItems.length > 0 ? checkout.lineItems.map((item, index) => <ProductRow key={index} item={item} />) : <Text>Your cart is empty.</Text>
        }

        <ButtonWrapper>
          <PrimaryButton text="Checkout" onClick={() => window.open(checkout.webUrl)} disabled={checkout.lineItems.length===0? true: false}/>
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Cart

const Wrapper = styled.div`
  margin: 40px;
`

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 330px);
  gap: 40px;
`

const Text = styled.p`
    margin-top: 30px;
  font-weight: 600;
  font-size: 14px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`