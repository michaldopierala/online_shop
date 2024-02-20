import React from 'react'
import CookieConsent from "react-cookie-consent";


export default function CookieConsent() {
    return (
        <div>
            <CookieConsent
                onAccept={() => {
                    ReactPixel.init('YOUR_PIXEL_ID'); // Initialize Facebook Pixel after consent
                    ReactPixel.pageView(); // Track page view after consent
                }}
            >
                This website uses cookies to enhance the user experience.
            </CookieConsent>
      // Your component content
        </div >
    )
}
