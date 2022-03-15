import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import {Link} from 'gatsby'
import styled from 'styled-components'

const IndexPage = () => {
  return (
    <Layout>
      <HomePage>
      <Seo title="Home" />
      <StaticImage
        src="../images/hero.jpeg"
        alt="flour and eggs"
        className="hero-img"
        placeholder="tracedSVG"
        layout="fullWidth"      
      />

      <div className="hero-container">
        <div className="hero-text">
          <h1>Mad Hatter</h1>
          <h4>We have the right fit for you</h4>
        </div>
        <div className="btn-row">
          <Link to="/products"><button className="btn">Explore Now</button></Link>
        </div>
      </div>
      </HomePage>
    </Layout>
  )
}

export default IndexPage


const HomePage = styled.section`
  height: 40vh;
  position: relative;
  margin-top:15px;
  margin-bottom: 2rem;

  .hero-img{
    height: 40vh;
    position: relative;
    margin-bottom: 2rem;
  }

  .hero-container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    flex-direction: column;
  }

  .hero-text{
    text-align: center;
    color: white;
  }

  .hero-text h1{
    font-size: 60px;
  }
  .hero-text h4{
    font-size: 30px;
  }

  .btn-row{
    display: flex;
    justify-content: flex-start;
    width: 100%;
    
  }

  .btn{
    padding: 8px 30px;
    margin: 30px 0;
    margin-left: 50px;
    border-radius: 1rem;
    background-color: #2F6539;
    border: 1px solid white;
    color: white;
    
  }

  .btn:hover{
    cursor: pointer;
  }
  
`