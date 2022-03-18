import styled from 'styled-components'

export const Grid = styled.section`
    
    /* grid-template-columns: 1fr;
    grid-gap: 20px; */
    
    @media screen and (min-width: 768px) {
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        margin-top:3vh;

        h1{
            font-size: 60px;
            width: 80%;
        }

        .description{
            width:75%;
        }
        
        >div:first-child{
            order:2;        
            width:50%;
            
        }

        >div:last-child{
            order:1;
            width:50%;
        }

        .variantSelect{
            padding: 10px;
        }
        
    }

   
`


export const SelectWrapper = styled.div`
    margin-top: 40px;
    >strong{
        display: block;
        margin-bottom: 8px;
    }

    
`

export const Price = styled.div`
    margin-top: 40px;
    font-weight: bold;
    font-size: 30px;
`
