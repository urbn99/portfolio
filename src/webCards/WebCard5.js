import React from 'react'
import strona4 from '../images/strona5.jpg'

const WebCard5 = () => {
    return (
        <div className='web-card'>
            <div className="web-card-title mr-10">
                APLIKACJA TO DO
            </div>

            <img className="web-card-image mr-10" src={strona4} alt="error" />

            <div className="web-card-desc mr-10">
                <p>Aplikacja pozwalająca użytkownikowi na dodawanie zadań do zrobienia w swojej liście. Aplikacja zapisuje wszystkie zmiany w Local Storage dzięki czemu dane nie zostają usówane po ponownym włączeniu strony, użytkownik może również zaznaczyć poszczególne zadanie jako ukończone oraz ma możliwość jego usunięcia. Całość została utworzona w React'cie z wykorzystaniem języka Sass </p>
                
            </div>

            <div className="web-card-button-container">

                <a rel="noopener noreferrer" href="https://todoappbyurbn.netlify.app/" target="_blank">
                    <button className='web-card-button trans-left'>Otwórz stronę</button>
                </a>

                <a rel="noopener noreferrer" href="https://github.com/urbn99/to-do-app" target="_blank">
                    <button className='web-card-button trans-right'>GitHub</button>
                </a>
            </div>



        </div>
    )
}

export default WebCard5