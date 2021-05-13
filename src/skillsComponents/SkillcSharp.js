import React from 'react'
import image from '../images/cSharp.svg'


const skillWoo = () => {
    return (
        <div className='skill'>
            <div className="skill-image">
                <img src={image} alt="" />
            </div>
            <div className="skill-title">
                <h4>C#</h4>
            </div>
        </div>
    )
}

export default skillWoo