import React from 'react'
import ReactImageGallery from 'react-image-gallery';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {images} from '../data/images';

const Services = () => {
  return (
    <div>
        <Carousel className='h-[20px]'>
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