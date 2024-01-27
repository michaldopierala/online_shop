import React from 'react'
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div className='FooterComponent'>
            {/* <div className='block'> */}
                <div className='logo'>
                    <img className='image' src='/img/palm_footer_w.png' alt='image of palm' />
                    <img className='name' src='/img/logo1.png' alt='image of palm' />
                </div>
                <div className='info'>
                    <div><Link className="link" to="terms">terms & conditions</Link></div>
                    {/* <Link className="link" to="terms">terms & conditions</Link> */}
                    <div>Privacy Policy</div>
                    <div>Shipping Policy</div>
                    <div>About Us</div>
                    <div>contact</div>
                </div>
            {/* </div> */}
            <div className='copyrights'>
                Copyright © 2023, SunsetBay. All rights reserved.
            </div>
        </div>
    )
}
