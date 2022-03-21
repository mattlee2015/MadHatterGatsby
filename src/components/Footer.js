import React from 'react'
import styled from 'styled-components'
import {FaTwitter, FaInstagram, FaYoutube, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterWrapper>
        <div className="col-1">
          <h3>Follow Us</h3>
          <div className="social-media">
              <FaFacebook className="icon" size={30}/>
              <FaYoutube className="icon" size={30}/>
              <FaInstagram className="icon" size={30}/>
              <FaTwitter className="icon" size={30}/>
          </div>
        </div>
         
        <div>
          <p>
            &copy; {new Date().getFullYear()} <span>Mad Hatter Shop</span> Built with {" "} 
            <a href="https://www.gatsbyjs.com/"> Gatsby </a>
          </p>
        </div> 
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.section`
  position: relative;
  bottom: 0;
  padding: 20px;
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  background: white;
  color: black;

  >div{
    margin: 5px 5px;
  }

  .social-media{
    margin-top: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
  }

  .icon{
    margin: 0 5px;
    cursor: pointer;
  }
  
`