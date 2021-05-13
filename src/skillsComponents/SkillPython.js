import React from 'react'
import image from '../images/python.png'


const skillWoo = () => {
    return (
        <div className='skill'>
            <div className="skill-image">
                <img className='skill-js' src={image} alt="" />
            </div>
            <div className="skill-title">
                <h4>Python</h4>
            </div>
        </div>
    )
}

export default skillWoo