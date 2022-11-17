import React from 'react';
import Navbar from '../components/Navbar';
import Aboutus from '../components/Aboutus'
import Services from '../components/Services';
import WorkPlace from '../components/WorkPlan';
import Footbar from '../components/Footbar';
import Testimonials from '../components/ControlledCarousel';
const Home = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-4'>
<Navbar />
<Aboutus />
<Services />
{/* <Testimonials /> */}
<WorkPlace />
<Footbar />
      </div>
    </div>
  )
}

export default Home;