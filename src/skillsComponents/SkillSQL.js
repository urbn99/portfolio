import React from 'react'
import image from '../images/sql.svg'


const skillSQL = () => {
    return (
        <div className='skill'>
            <div className="skill-image">
                <img className='skill-js' src={image} alt="" />
            </div>
            <div className="skill-title">
                <h4>MySQL</h4>
            </div>
        </div>
    )
}

export default skillSQL