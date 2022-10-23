import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import TrainingCom from '../components/Training'
const Training = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='Training' text='Pre-Flight & In-Flight Training'/>
        <TrainingCom/>
        <Footer/>
    </div>
  )
}

export default Training