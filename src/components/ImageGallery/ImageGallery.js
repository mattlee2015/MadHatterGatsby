import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ImageGalleryWrapper from './ImageGalleryWrapper'
import ImageThumbnail from './ImageThumbnail/ImageThumbnail'



const ImageGallery = ({images}) => {

    const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(images[0])

    const [activeImageIndex, setActiveImageIndex] = React.useState(0)

    const activeImagePath =getImage(activeImageThumbnail)


  return (
      <ImageGalleryWrapper>
        <div>
            <GatsbyImage image={activeImagePath} alt="active image"/>
        </div>
        <div className='mini-gallery'>

            {images.map((image, index)=>{
                const currImg = getImage(image)
                return <ImageThumbnail 
                            image={currImg} 
                            key={index} 
                            onClickImg={()=>{
                                setActiveImageThumbnail(image)
                                setActiveImageIndex(index)
                            }
                            }     
                            isActive={activeImageIndex === index}
                            >
                        </ImageThumbnail>
            })}
        </div>
    </ImageGalleryWrapper>
  )
}

export default ImageGallery