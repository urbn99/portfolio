import React from 'react'
import image from '../images/css-3.svg'


const skillHTML = () => {
    return (
        <div className='skill'>
            <div className="skill-image">
                <img src={image} alt="" />
            </div>
            <div className="skill-title">
                <h4>CSS</h4>
            </div>
        </div>
    )
}

export default skillHTML
