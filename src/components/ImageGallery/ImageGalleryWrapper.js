import styled from 'styled-components'

const ImageGalleryWrapper = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    >div:first-child{
        border: 5px solid black;
        width:400px;
    }

    .mini-gallery{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        
    }

`

export default ImageGalleryWrapper