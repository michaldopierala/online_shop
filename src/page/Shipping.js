import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import ReactGA4 from 'react-ga4';

export default function Shipping() {
    const location = useLocation();
    useEffect(() => {
      if (window.location.hostname !== "localhost") {
        ReactGA4.send({ hitType: "pageview", page: location.pathname });
      }
    }, [location.pathname]); // Dependency on pathname only
    
    return (
        <div className='Privacy'>
            <h1>Shipping Policy for ShunsetBay</h1>
            <p>At ShunsetBay, we are committed to delivering your products in a timely and efficient manner. Our Shipping Policy provides detailed information about shipping options, delivery times, and charges. Please review the following terms:</p>
            <h2>1. Shipping Options</h2>
            <p>We offer various shipping options to meet your needs. These may include standard shipping, expedited shipping, and international shipping. The availability of these options depends on your location and the items you order.</p>

            <h2>2. Delivery Times</h2>
            <p>Delivery times vary based on the shipping method selected and your location. Estimated delivery times for each shipping method are provided at checkout.</p>
            <ul>
                <li>Standard Shipping: Typically delivered within 3-5 business days.</li>
                <li>Expedited Shipping: Typically delivered within 1-2 business days.</li>
                <li>International Shipping: Delivery times vary based on destination.</li>
            </ul>
            <h2>3. Shipping Charges</h2>
            <p>Shipping charges are calculated based on the shipping method, size and weight of your order, and your delivery address. You will see the final shipping charges at checkout before confirming your order.</p>

            <h2>4. Order Tracking</h2>
            <p>Once your order is shipped, we will send you a tracking number via email. You can use this number to track your order's progress.</p>

            <h2>5. International Shipments</h2>
            <p>For international shipments, customers are responsible for any customs, duties, or taxes imposed by their respective countries. Please be aware that shipping times may be longer due to customs clearance processes.</p>

            <h2>6. Shipping Restrictions</h2>
            <p>Some products may be subject to shipping restrictions due to size, weight, or legal restrictions in certain countries or regions.</p>

            <h2>7. Damaged or Lost Shipments</h2>
            <p>In the event of a damaged or lost shipment, please contact our customer service immediately for assistance.</p>

            <h2>8. Changes to Shipping Policy</h2>
            <p>We reserve the right to modify this Shipping Policy at any time. Any changes will be posted on our website.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions or concerns about our Shipping Policy, please contact us at [your contact information].</p>
        </div>
    )
}
