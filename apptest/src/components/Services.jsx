import React from 'react'
// import ReactImageGallery from 'react-image-gallery';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"
import { serviceImages } from '../data/images'

const Services = () => {
  return (
    <div id="Services" className='flex flex-col p-4 bg-[#E5E5E5] gap-4 '>
      <p className='text-[25px] font-bold '>OUR SERVICES</p>
      <div className='flex items-center grid grid-cols-4 md:grid-cols-2 gap-6'>
        {
          serviceImages.map((service, index) => (
            <div key={index} className="flex flex-col gap-4 border-2 border-[#C4C4C4] shadow-md p-6 rounded-[10px]">
              <img src={service.imgUrl} className='w-full h-[20rem] ' />
              <p className='text-[18px] font-bold'>{service.title}</p>
              <p className='text-[16px] font-medium'>{service.description}</p>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Services