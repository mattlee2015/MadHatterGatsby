import styled from 'styled-components'

export const Grid = styled.section`
        
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
        
    }

   
`
