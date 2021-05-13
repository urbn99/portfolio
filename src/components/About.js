import React from 'react'
import photo from '../images/urb2.png'

const About = () => {
    return (
        <section className='container'>
            <h3 className='title'>O mnie</h3>
            <section className='about-components'>
                <div className='about-text'>
                    <p>
                        <p className='text-1'>Witam, nazywam sie Marcin.</p> 
                        <br/><br/>
                        <p>Mam 21 lat i jestem studentem 3 roku informatyki ze specjalizacją: Inżynieria Technologii Internetowych. Informatyka jest jednym z moich wielu zainteresowań. Wolny czas spędzam na podróżowaniu lub na siłowni.</p>
                        
                        <br/><br/>
                        <p>Aktualnie poszukuję oferty stażu lub praktyk, jestem otwarty na każdą propozycję oraz na każde stanowisko. Zapraszam do zapoznania się z moim CV oraz portfolio.</p>
                        
                    </p>
                    
                </div>
                <div className="about-image">
                    <img className='photo-front' src={photo} alt=""/>
                </div> 
            </section>
            
        </section>
    )
}

export default About
