import React from 'react'
import styled from 'styled-components'
import moneyFormat from '../util/moneyFormat'

const Price = ({variant}) => {
  return (
    <PriceWrapper>
        <div>${moneyFormat(variant.price)}</div>   
    </PriceWrapper>
  )
}

export default Price

export const PriceWrapper = styled.div`
    margin-top: 40px;
    font-weight: bold;
    font-size: 30px;
`