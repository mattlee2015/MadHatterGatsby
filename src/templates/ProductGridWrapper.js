import styled from 'styled-components'

export const Grid = styled.section`
    h1{
        font-size: 60px;
        width: 100%;
        text-align: center;
        margin-top: 2vh;
    }
    .columns{
        margin-top: 20px;
        display:flex;
        justify-content: space-evenly;
        
    }

    @media screen and (max-width: 900px){
        .columns{
            flex-direction: column;
        }

        .right-col{
            margin-top: 20px;
            display:flex;
            flex-direction: column;
            align-items: center;
            
        }

    }


   
`
