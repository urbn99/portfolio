import React from 'react'
import image from '../images/uxui.svg'


const skillUXUI = () => {
    return (
        <div className='skill'>
            <div className="skill-image">
                <img className='skill-js' src={image} alt="" />
            </div>
            <div className="skill-title">
                <h4>UX UI</h4>
            </div>
        </div>
    )
}

export default skillUXUI