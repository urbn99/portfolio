import React from 'react'
import strona2 from '../images/strona2.jpg'

const WebCard2 = () => {
    return (
        <div className='web-card'>
            <div className="web-card-title mr-10">
                Generator tekstu i liczb
            </div>

            <img className="web-card-image mr-10" src={strona2} alt="error" />

            <div className="web-card-desc mr-10">
                <p>Strona umożliwiająca użytkownikowi na generowanie tekstu, w stylu lorem ipsum, oraz generowanie liczb w podanym przez użytkownika przedziale</p>
            </div>

            <div className="web-card-button-container">

                <a rel="noopener noreferrer" href="https://generatorliczbitekstu.netlify.app/" target="_blank">
                    <button className='web-card-button trans-left'>Otwórz stronę</button>
                </a>

                <a rel="noopener noreferrer" href="https://github.com/urbn99/generator" target="_blank">
                    <button className='web-card-button trans-right'>GitHub</button>
                </a>
            </div>



        </div>
    )
}

export default WebCard2
