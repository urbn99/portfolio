import React from 'react'
import image from '../images/html-5.svg'


const skillHTML = () => {
    return (
        <div className='skill'>
            <div className="skill-image">
                <img src={image} alt=""/>
            </div>
            <div className="skill-title">
                <h4>HTML</h4>
            </div>
        </div>
    )
}

export default skillHTML
