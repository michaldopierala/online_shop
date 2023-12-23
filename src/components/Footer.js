import React from 'react'

export default function Footer() {
    return (
        <div className='FooterComponent'>
            <div className='block'>
                <div className='logo'>
                    <img className='image' src='/img/palm_footer_w.png' alt='image of palm' />
                    <img className='name' src='/img/logo1.png' alt='image of palm' />
                </div>
                <div className='info'>
                    <div>terms & conditions</div>
                    <div>Privacy Policy</div>
                    <div>Shipping Policy</div>
                    <div>About Us</div>
                    <div>contact</div>
                </div>
            </div>
            <div className='copyrights'>
                Copyright © 2023, SunsetBay. All rights reserved.
            </div>
        </div>
    )
}
