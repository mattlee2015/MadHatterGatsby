import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import { FaArrowLeft } from 'react-icons/fa'

const Back = () => {
  return (
    <BackWrapper>
            <Link className="back-arrow" to='/products'>
                <button type="button">
                <FaArrowLeft style={{marginRight:"5px"}}/>
                Back
                </button>
            </Link>
    </BackWrapper>
  )
}

export default Back

const BackWrapper = styled.div`
    margin-top:40px;
    margin-left: 5vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;

    button{
        padding: 7px;
        border-radius: 1rem;
        background-color: white;
    }

    .back-arrow{
        text-decoration: none;
        color: black;
        
    }

    button:hover{
        text-decoration: underline;
        background-color:#2F6539;
        color: white;
    }
`