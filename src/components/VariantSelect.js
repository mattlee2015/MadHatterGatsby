import React from 'react'
import styled from 'styled-components'

const VariantSelect = ({variants}) => {
  return (
    <SelectWrapper>
              <strong>Variant</strong>
              <select className="variantSelect">
                {variants.map((variant, index)=>{
                  return (
                    <option value={variant.shopifyId} key={index}>
                      {variant.title}
                    </option>
                  )
                })}
              </select>
    </SelectWrapper>
  )
}

export default VariantSelect

export const SelectWrapper = styled.div`
    margin-top: 40px;
    >strong{
        display: block;
        margin-bottom: 8px;
    }

    .variantSelect{
        padding: 10px;
    }

    
`