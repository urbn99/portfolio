import React from 'react'
import strona1 from '../images/strona1.jpg'


const WebCard1 = () => {
    return (
        <div className='web-card'>
            <div className="web-card-title mr-10">
                Kalkulator zapotrzebowania kalorycznego
            </div>

            <img className="web-card-image mr-10" src={strona1} alt="error" />

            <div className="web-card-desc mr-10">
                <p>Aplikacja umożliwiająca użytkownikowi obliczenie swojego zapotrzebowania kalorycznego, po przez wypełnienie krótkiego formularza. Aplikacja została wykonana z użyciem: HTML, CSS, JavaScript</p>
            </div>

            <div className="web-card-button-container">
                
                <a rel="noopener noreferrer" href="https://kalkulator-zapotrzebowania-kalorycznego.netlify.app" target="_blank">
                    <button className='web-card-button trans-left'>Otwórz stronę</button>
                </a>
                
                <a rel="noopener noreferrer" href="https://github.com/urbn99/calories-calculator" target="_blank">
                    <button className='web-card-button trans-right'>GitHub</button>
                </a>
            </div>
            
            
            
        </div>
    )
}

export default WebCard1
