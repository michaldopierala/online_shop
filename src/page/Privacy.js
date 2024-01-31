import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import ReactGA4 from 'react-ga4';

export default function Privacy() {
    const location = useLocation();
    useEffect(() => {
      if (window.location.hostname !== "localhost") {
        ReactGA4.send({ hitType: "pageview", page: location.pathname });
      }
    }, [location.pathname]); // Dependency on pathname only
    
    return (
        <div className='Privacy'>

            <h1>Privacy Policy for SunsetBay</h1>

            <h2>1. Introduction</h2>
            <p>Welcome to SunsetBay. We are committed to protecting the privacy and security of our customers and site visitors. This Privacy Policy outlines how we collect, use, protect, and share information gathered about you in connection with your use of our website and services.</p>

            <h2>2. Information We Collect</h2>
            <ul>
                <li><strong>Personal Information:</strong> We collect personal information you provide to us when you purchase products, register for an account, sign up for newsletters, or participate in promotions. This may include your name, email address, postal address, phone number, and payment information.</li>
                <li><strong>Non-Personal Information:</strong> We also collect non-personal information such as browsing history, search queries, and preferences when you interact with our site.</li>
            </ul>

            <h2>3. Use of Information</h2>
            <p>Your information is used to:</p>
            <ul>
                <li>Process and fulfill your orders.</li>
                <li>Provide customer service and support.</li>
                <li>Improve and personalize your shopping experience.</li>
                <li>Communicate with you about products, services, offers, and promotions.</li>
                <li>Monitor and analyze trends, usage, and activities.</li>
            </ul>

            <h2>4. Sharing of Information</h2>
            <p>We may share your information with:</p>
            <ul>
                <li>Third-party service providers for the purpose of conducting business (e.g., payment processing, shipping, data analysis).</li>
                <li>Law enforcement or government agencies if required by law.</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for their marketing purposes without your explicit consent.</p>

            <h2>5. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure.</p>

            <h2>6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. You can also object to the processing of your data, request a limitation of processing, and exercise your right to data portability.</p>

            <h2>7. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of such websites.</p>

            <h2>8. Changes to Our Privacy Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at [your contact information].</p>

            <p>Effective as of [Date].</p>

        </div>
    )
}
