import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <footer className='page-footer'>

          <p>
              &copy; {new Date().getFullYear()} <span>Mad Hatter Shop</span> Built with {" "} 
              <a href="https://www.gatsbyjs.com/"> Gatsby </a>
          </p>
      </footer>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;

  right: 0;
  width: 100%;
  text-align: center;
  background: black;
  color: white;

`