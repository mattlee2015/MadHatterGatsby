import styled from 'styled-components'



const ImageThumbnailWrapper = styled.section`

    .small-img{
        width:10vw;
    }

    border: 4px solid ${props => (props.isActive ? '#000' : '#ccc')};
    opacity: ${props => (props.isActive ? 1: 0.5)};

    @media screen and (min-width: 768px) {

        .small-img{
            margin: 1px;
            border: 1px solid #ccc;
            width:5vw;
        }



    }
    

`


export default ImageThumbnailWrapper