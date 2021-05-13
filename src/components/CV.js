import React from 'react'
import cv from '../cv/Marcin_Urbanski_CV.pdf'
import cvPhoto from '../cv/Marcin_Urbanski_CV.jpg'

const CV = () => {
    return (
        <section className='container'>
            <embed src={cv} className='cv-embed' type="application/pdf" ></embed>
            <img src={cvPhoto} className='cv-photo' alt=""/>
        </section>
    )
}

export default CV
