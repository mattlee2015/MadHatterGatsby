import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import ImageThumbnailWrapper from './ImageThumbnailWrapper'

const ImageThumbnail = ({isActive, onClickImg, image}) => {

    const imagePath = getImage(image)

  return (
    <ImageThumbnailWrapper onClick={onClickImg} isActive={isActive}>
        <GatsbyImage image={imagePath} className="small-img" alt="small-images-product"/>
    </ImageThumbnailWrapper>
  )
}

export default ImageThumbnail