import React from 'react'

export default function Footer() {
    return (
        <div className='FooterComponent'>
            <div className='grid'>
                <div className='logo'>
                    <img className='image' src='/img/palm_footer.png' alt='image of palm' />
                    <div className='name'> SunsetBay</div>
                </div>
                <div className='info'>
                    <div>Adress</div>
                    <div>Email</div>
                </div>
            </div>
        </div>
    )
}
