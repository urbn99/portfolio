import React from 'react'
import WebCard1 from '../webCards/WebCard1'
import WebCard2 from '../webCards/WebCard2'
import WebCard3 from '../webCards/WebCard3'
import WebCard4 from '../webCards/WebCard4'
import WebCard5 from '../webCards/WebCard5'


const Portfolio = () => {
    return (
        <section className='container'>
            <h3 className='title'>Portfolio</h3>
            <WebCard1/>
            <WebCard5 />
            <WebCard4/>
            <WebCard3/>
            <WebCard2/>
            
        </section>
    )
}

export default Portfolio
