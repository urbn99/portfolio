import React from 'react'
import image from '../images/bootstrap.svg'


const skillBootstrap = () => {
    return (
        <div className='skill'>
            <div className="skill-image">
                <img src={image} alt="" />
            </div>
            <div className="skill-title">
                <h4>Bootstrap</h4>
            </div>
        </div>
    )
}

export default skillBootstrap