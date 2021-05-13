import React from 'react'
import strona3 from '../images/strona3.jpg'

const WebCard3 = () => {
    return (
        <div className='web-card'>
            <div className="web-card-title mr-10">
                STRONA RESTAURACJI
            </div>

            <img className="web-card-image mr-10" src={strona3} alt="error" />

            <div className="web-card-desc mr-10">
                <p>Strona restauracji, zawierająca slider ze zdjęciami, zmienne menu, rozwijaną listę. Wykonana w React'cie z wykorzystaniem języka Sass</p>
            </div>

            <div className="web-card-button-container">

                <a rel="noopener noreferrer" href="https://stronarestauracji.netlify.app/" target="_blank">
                    <button className='web-card-button trans-left'>Otwórz stronę</button>
                </a>

                <a rel="noopener noreferrer" href="https://github.com/urbn99/restaurant-page" target="_blank">
                    <button className='web-card-button trans-right'>GitHub</button>
                </a>
            </div>



        </div>
    )
}

export default WebCard3