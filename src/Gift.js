import React from 'react'
import './Gift.css'

function Gift(isPinCodeValid) {
    if (isPinCodeValid) {
        return (
            <div className='container'>
                <img src='./img/lotr.webp' alt="Gift card" className='voucher'></img>
            </div>
        )
    }
}

export default Gift