import React from 'react'
import strona4 from '../images/strona4.jpg'

const WebCard4 = () => {
    return (
        <div className='web-card'>
            <div className="web-card-title mr-10">
                STRONA POGODOWA
            </div>

            <img className="web-card-image mr-10" src={strona4} alt="error" />

            <div className="web-card-desc mr-10">
                <p>Strona pogodowa, umożliwiająca użytkownikowi sprawdzenie aktualnej pogody w dowolnym mieśćie. Strona pobiera zewnętrzne API pogodowe. Całość została utworzona w React'cie w wykorzystaniem języka Sass </p>
            </div>

            <div className="web-card-button-container">

                <a rel="noopener noreferrer" href="https://actualweather.netlify.app/" target="_blank">
                    <button className='web-card-button trans-left'>Otwórz stronę</button>
                </a>

                <a rel="noopener noreferrer" href="https://github.com/urbn99/weather" target="_blank">
                    <button className='web-card-button trans-right'>GitHub</button>
                </a>
            </div>



        </div>
    )
}

export default WebCard4