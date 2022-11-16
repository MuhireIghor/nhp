import React from 'react';
import Navbar from '../components/Navbar';
import Aboutus from '../components/Aboutus'
import Services from '../components/Services';
const Home = () => {
  return (
    <div className='flex flex-col'>
<Navbar />
<Aboutus />
<Services />
    </div>
  )
}

export default Home;