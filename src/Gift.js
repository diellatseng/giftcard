import React, { useState } from 'react'
import './Gift.css'

function Gift(isPinCodeValid) {

    const [entered, setEntered] = useState(false);

    if (isPinCodeValid) {
        setTimeout(function () {
            setEntered(true)
        }, 200);
    }

    return (
        <div className='container'>
            <img src='./img/lotr.webp' alt="Gift card" className='voucher' style={{
                opacity: entered ? "1" : "0",
                transition: "opacity 3000ms"
            }}></img>
        </div>
    )
}

export default Gift