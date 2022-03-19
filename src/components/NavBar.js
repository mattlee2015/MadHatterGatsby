import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {FaShoppingCart, FaRedhat} from 'react-icons/fa'




const Navbar = () => {
  return (
    <NavBarWrapper>
        <nav className="navbar">
        
            <div className="nav-header">
                <Link to="/" className='logo-icon'><FaRedhat color="white"size={50}/></Link>
                <Link to="/" className="store-name"><h1>The Mad Hatter</h1></Link>
            </div>
            <div className="nav-links">
                <Link to="/products" className='nav-link'>Products</Link>
                <Link to="/cart" className='nav-link'><FaShoppingCart color="white" size={30}></FaShoppingCart></Link>
            </div>
        
        </nav>
    </NavBarWrapper>
  )
}

export default Navbar

const NavBarWrapper = styled.section`
    display: flex;
    align-items: center;
    position: sticky;
    top:0;
    background-color: #2F6539;
    width:100%;
    z-index: 7;
    margin:0px;


    .navbar{
        display:flex;
        width:100%;
    }    

    .nav-header{
        margin-top: 15px;
        display: flex;
        width: 50%;
        flex-direction: row;
        align-items: center;
        
    }

    .nav-links{
        display: flex;
        flex-direction: row;
        width: 50%;
        justify-content: flex-end;
        align-items: center;
        margin-right: 1rem;
        font-size: 1.5rem;
    }

    .logo-icon{
       margin-right: 1rem;
       margin-left: 1rem;
       
    }

    .store-name{
        text-decoration: none;
        color: white;
    }

    h1{
        font-size: 25px;
        letter-spacing: 1px;
    }

    .nav-link{
        margin: 0 1rem;
        text-decoration: none;
        color: white;
    }
`