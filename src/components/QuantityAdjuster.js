import React from 'react'
import styled from 'styled-components'

const QuantityAdjuster = ({item, onAdjust}) => {
    const {quantity} = item

    const handleDecrementQuant = () =>{
        onAdjust({variantId: item.variant.id, quantity:-1})
    }

    const handleIncrementQuant = () =>{
        onAdjust({variantId: item.variant.id, quantity: 1})
    }
  return (
    <QuantityAdjusterWrapper>
        <AdjusterButton onClick={handleDecrementQuant}>-</AdjusterButton>
            <div>{quantity}</div>
        <AdjusterButton onClick={handleIncrementQuant}>+</AdjusterButton>
    </QuantityAdjusterWrapper>
  )
}

export default QuantityAdjuster

const QuantityAdjusterWrapper = styled.div`
    display:flex;
    >div{
        margin:auto 0;
        padding: 5px 10px;
    }

`
const AdjusterButton = styled.div`
    cursor: pointer;
    border: 1px solid black;
    font-weight: bold;

`