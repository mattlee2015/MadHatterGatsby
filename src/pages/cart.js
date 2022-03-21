import React from 'react'
import styled from "styled-components"

import Layout from '../components/Layout'
import ProductRow from '../components/ProductRow'
import PrimaryButton from "../components/PrimaryButton"
import useStore from '../context/StoreContext'
import { Link } from 'gatsby'


const Cart = () => {
  
  const { checkout } = useStore()
  console.log(checkout)
  
  const totalItem = (lineItems) =>{
    var total = 0
    for(let i=0;i<lineItems.length;i++){
        const items = lineItems[i].quantity
        total+=items
    }

    return total
}

 const totalItemPrice = (lineItems) =>{
    var total = 0
    for(let i=0;i<lineItems.length;i++){
        const quant = lineItems[i].quantity
        const cost = lineItems[i].variant.price
        total+=quant*cost
    }

    
    return total
}


  return (
    <Layout>
      <Wrapper>
        {
          totalItem(checkout.lineItems)<1?<h1>Your cart is empty.</h1>: <h1>Your Cart</h1>
        }
        <HeaderWrapper>
          <div className="table-heads">
            <div className="col-1">
              <Text className="product-table-head">Product</Text>
              <div className="var-quant">
                <Text>Variant</Text>
                <Text>Quantity</Text>
              </div>
            </div>
            <div className="col-2">
              <Text>Amount</Text>
            </div>
           
            
          </div>
        </HeaderWrapper>

        {
          checkout.lineItems.length > 0 ? checkout.lineItems.map((item, index) => <ProductRow key={index} item={item} />) : <></>
        }
        <Total>
          <div className="total-container-1"></div>
          <div className="total-container-2">
            <div className="total-cat">
              <div className="total-quant">
                <Text>Total Quanity:</Text>
                {
                  totalItem(checkout.lineItems)<1? <spam></spam> :<span>{totalItem(checkout.lineItems)}</span>
                }
              </div>
              <div className="total-amount">
                <Text>Total Amount:</Text>
                {
                  totalItem(checkout.lineItems)<1? <spam></spam> :<span>${totalItemPrice(checkout.lineItems)}</span>
                }
              </div>
              


            </div>
          </div>
        </Total>
        <div className="btn">
          <Link to="/products">
            <ButtonWrapper>
            <PrimaryButton text="Continue Shopping"/>
            </ButtonWrapper>
          </Link>
          <ButtonWrapper>
            <PrimaryButton text="Checkout" onClick={() => window.open(checkout.webUrl)} disabled={checkout.lineItems.length===0? true: false}/>
          </ButtonWrapper>

        </div>
        
      </Wrapper>
    </Layout>
  )
}

export default Cart

const Wrapper = styled.div`
  margin: 20px;

  .btn{
    display:flex;
    justify-content: space-between;
    align-items: center;

    .bts{
      padding: 0px 20px;
      margin-top: 1em;
      margin-bottom: 5px;
      font-size: 20px;
      border-radius: 3rem;
      background-color: #2F6539;
      color: white;
      padding: 0 20px;
      cursor: pointer;
      :hover {
        transform: scale(1.2);
        transition: 0.2s;
      }
    }
  }
  
  
  


`
const Total = styled.div`
  border-top: 1px solid black;
  width:100%;
  display:flex;

  .total-container-1{
    width:50%;
    
  }

  .total-container-2{
    width:50%;
    display:flex;
    justify-content: flex-end;
    
  }

  .total-cat{
    display: flex;
    width:100%;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2rem;
  }

  .total-quant{
    display:flex;
    align-items: baseline;
  }

  .total-amount{
    display:flex;
    align-items: baseline;
  }
  
`

const HeaderWrapper = styled.div`
  border-bottom: 1px solid black;

  .table-heads{
    margin-left:10px;
    display: flex;
    justify-content: space-around;
    text-align: center;

  }

  .product-table-head{
    width:50%;
  }

  .col-1{
    display: flex;
    justify-content: space-around;
    width:75%;

  }

  .col-2{
    display:flex;
    justify-content: center;
    width:25%;
  }

  .var-quant{
    display:flex;
    justify-content: space-between;
    width:45%;
  }

  @media screen and (max-width: 900px){
    border-bottom: none;
    font-size: 12px;

    
    .var-quant{
      display: none;
    }



    
  }
`

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin: 30px 5px 0 5px;

  @media screen and (max-width: 900px){
    font-size: 12px;
    
  }


`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`