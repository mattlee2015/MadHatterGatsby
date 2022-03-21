import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {FaShoppingCart, FaRedhat} from 'react-icons/fa'
import Search from './Search'

import useStore from '../context/StoreContext'

const totalItem = (lineItems) =>{
    var total = 0
    for(let i=0;i<lineItems.length;i++){
        const items = lineItems[i].quantity
        total+=items
    }

    return total
}

const Navbar = () => {
    const {checkout} = useStore()
  return (
    <NavBarWrapper>
        <nav className="navbar">
        
            <div className="nav-header">
                <Link to="/" className='logo-icon'><FaRedhat color="white"size={50}/></Link>
                <Link to="/" className="store-name"><h1>The Mad Hatter</h1></Link>
            </div>
            <div className="nav-links">
                <Search></Search>
                <Link to="/products" className='nav-link'>Products</Link>
                <Link to="/cart" className='nav-link cart'><FaShoppingCart color="white" size={30}>
                    </FaShoppingCart>
                    {
                        totalItem(checkout.lineItems)<1? <spam></spam> :<span>({totalItem(checkout.lineItems)})</span>
                    }  
                </Link>
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
    right:0;
    left:0;
    background-color: #2F6539;
    width:100%;
    z-index: 7;
    margin:0px;


    .navbar{
        display:flex;
        width:100%;
        align-items: center;
    }    

    .nav-header{
        margin-top: 15px;
        display: flex;
        width: 50%;
        flex-direction: row;
        align-items: center;
        
    }

    .nav-links{
        margin-right: 7rem;
        display: flex;
        flex-direction: row;
        width: 50%;
        justify-content: flex-end;
        align-items: center;
        font-size: 1.5rem;

        @media screen and (max-width: 500px){
            margin-right:1rem;
        }
    }

    .logo-icon{
       margin-right: 1rem;
       margin-left: 1rem;
       
    }

    .store-name{
        text-decoration: none;
        color: white;

        @media screen and (max-width: 890px){
            display:none;
        }
    }

    h1{
        font-size: 25px;
        letter-spacing: 1px;
    }

    .nav-link{
        margin: 0 1rem;
        text-decoration: none;
        color: white;
        @media screen and (max-width: 500px){
            font-size: 20px;
        }
        
    }

    .cart{
        display: flex;
        align-items: center;
        justify-content: space-around;
        >span{
            margin-left: 7px;
        }
    } 
`