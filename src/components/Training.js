import React from 'react'
import { Link } from 'react-router-dom'
import './TrainingStyle.css'
import moon from '../images/moon.jpg'
import space from '../images/space project.jpg'

const Training = () => {
  return (
    <div className='training'>
        <div className='training-container'>
            <div className='left'>
            <h1>Training</h1>
                <p>Thorough training is a necessity when traveling to space.
                We offer all inclusive training for pre-flight and in-flight scenarios.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                      <img src={moon} className='img' alt=''/>
                    </div>
                    <div className='img-stack bottom'>
                      <img src={space} className='img' alt=''/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Training