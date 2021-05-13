import React from 'react'
import image from '../images/js.svg'


const skillJS = () => {
    return (
        <div className='skill'>
            <div className="skill-image">
                <img className='skill-js' src={image} alt="" />
            </div>
            <div className="skill-title">
                <h4>JavaScript</h4>
            </div>
        </div>
    )
}

export default skillJS
