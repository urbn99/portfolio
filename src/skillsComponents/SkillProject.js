import React from 'react'
import image from '../images/project.svg'


const skillProject = () => {
    return (
        <div className='skill'>
            <div className="skill-image">
                <img src={image} alt="" />
            </div>
            <div className="skill-title">
                <h4>MS Project</h4>
            </div>
        </div>
    )
}

export default skillProject