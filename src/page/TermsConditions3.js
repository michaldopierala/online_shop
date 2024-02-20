import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import ReactGA4 from 'react-ga4';

export default function TermsConditions() {
  const location = useLocation();
  useEffect(() => {
    if (window.location.hostname !== "localhost") {
      ReactGA4.send({ hitType: "pageview", page: location.pathname });
    }
  }, [location.pathname]); // Dependency on pathname only

  return (
    <div className='Privacy'>
      <h1>Terms & Conditions of ShunsetBay</h1>

      <p>Welcome to ShunsetBay. By accessing our website and using our services, you agree to be bound by the following terms and conditions. Please read them carefully.</p>

      <h2>1. General</h2>
      <p>This website is owned and operated by ShunsetBay. The terms "we", "us", and "our" refer to ShunsetBay. By using the site, you agree to the terms and conditions set forth herein and all applicable laws and regulations.</p>

      <h2>2. Use of Website</h2>
      <p>The content on this site is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</p>

      <h2>3. Product Information</h2>
      <p>We endeavor to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display will be accurate.</p>

      <h2>4. Pricing and Payment</h2>
      <p>All prices are subject to change without notice. Payment is due at the time of purchase and may be made by various payment methods as indicated on our website.</p>

      <h2>5. Shipping and Delivery</h2>
      <p>Shipping costs and delivery times may vary. We are not responsible for any delays in shipping.</p>

      <h2>6. Returns and Refunds</h2>
      <p>We accept returns under certain conditions. Refunds are made to the original method of payment.</p>

      <h2>7. User Account</h2>
      <p>You may need to register an account to access some features of the site. You are responsible for maintaining the confidentiality of your account and password.</p>

      <h2>8. Intellectual Property</h2>
      <p>The content, design, and graphics on this site are owned by or licensed to us and are protected by intellectual property laws.</p>

      <h2>9. Limitation of Liability</h2>
      <p>ShunsetBay will not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products.</p>

      <h2>10. Indemnification</h2>
      <p>You agree to indemnify and hold harmless ShunsetBay and its employees from any claim or demand made by any third party due to your breach of these Terms and Conditions.</p>

      <h2>11. Privacy Policy</h2>
      <p>Our Privacy Policy, which sets out how we use your information, can be found at [Link to Privacy Policy]. By using this Website, you consent to the processing described therein and warrant that all data provided by you is accurate.</p>

      <h2>12. Changes to Terms and Conditions</h2>
      <p>We reserve the right to change these terms and conditions at any time. Your continued use of the site following any changes indicates your acceptance of the new terms.</p>

      <h2>13. Governing Law</h2>
      <p>These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State Law].</p>

      <h2>14. Contact Information</h2>
      <p>If you have any questions about these Terms and Conditions, please contact us at [your contact information].</p>
    </div>
  )
}
