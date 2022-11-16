import React from 'react'
import ReactImageGallery from 'react-image-gallery';
import {Carousel} from 'react-responsive-carousel';
import {images} from '../data/images';

const Services = () => {
  return (
    <div>
        <Carousel>
            {images.map((image,index)=>(
             <div key={index}>
<img src={image} />
             </div>
            ))}
        </Carousel>
    </div>
  )
}

export default Services