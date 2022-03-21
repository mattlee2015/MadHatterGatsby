import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const Search = () => {

    const [searchTerm, setSearchTerm] = React.useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    

  return (
    <SearchWrapper>
        <form onSubmit={handleSubmit} id="search-bar">
            <input placeholder="Search" type="text" name="search" value={searchTerm} onChange={(e)=>{
                setSearchTerm(e.target.value)
            }}/>
            <button type="submit"><FaSearch/></button>
        </form>
       
    </SearchWrapper>
  )
}

export default Search

const SearchWrapper = styled.div`
    
    margin-left: 30px;
    margin-right: 10px;

    #search-bar{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input{
        padding: 7px;
    }

    button{
        padding: 7px;
    }
    

`