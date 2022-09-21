import React, { useState } from 'react'
import './Gift.css'
import './fireworks.scss'

function Gift(isPinCodeValid) {

    const [entered, setEntered] = useState(false);

    if (isPinCodeValid) {
        setTimeout(function () {
            setEntered(true)
        }, 2000);
    }

    return (
        <>
            <div className="firework">
                <div className="before"></div>
                <div className="after"></div>
            </div>
            <div className='container'>
                <p className="voucher_text">Happy Birthday!!</p>
                <img src='./img/lotr.webp' alt="Gift card" className='voucher' style={{
                    opacity: entered ? "1" : "0",
                    transition: "opacity 3000ms"
                }}></img>
            </div>
        </>
    )
}

export default Gift