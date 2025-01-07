import React from 'react';
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <header className="text-center py-5 bg-black text-white">
                <h1>Privacy Policy</h1>
                <p>Last Updated: 3/1/2025</p>
            </header>

            <section className="container my-5">
                <div className="content">
                    <h2>1. Information We Collect</h2>
                    <p>We collect the following types of information when you use our services:</p>
                    <ul>
                        <li><strong>Personal Information:</strong> Name, email, phone number, etc.</li>
                        <li><strong>Non-Personal Information:</strong> Device, browser info, etc.</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>Your data is used for the following purposes:</p>
                    <ul>
                        <li>Provide and improve services</li>
                        <li>Respond to your inquiries</li>
                        <li>Send marketing communications (only if you opt-in)</li>
                        <li>Analyze website usage to enhance user experience</li>
                    </ul>

                    <h2>3. Cookies</h2>
                    <p>We use cookies to enhance your browsing experience. You can control cookies via your browser settings.</p>

                    <h2>4. Third-Party Services</h2>
                    <p>We may use third-party services like Google Analytics for monitoring user behavior and serving ads.</p>

                    <h2>5. Data Security</h2>
                    <p>We employ reasonable security measures to protect your data but cannot guarantee complete security due to inherent risks in online data transmission.</p>

                    <h2>6. Your Rights</h2>
                    <p>You have the right to access, update, or delete your personal data. To do so, contact us at: <strong>contact@visitpenang.com</strong></p>

                    <h2>7. Children’s Privacy</h2>
                    <p>Our site is not intended for children under 13. We do not knowingly collect personal data from children.</p>

                    <h2>8. Changes to This Privacy Policy</h2>
                    <p>We may update this policy from time to time. All changes will be posted on this page with the date of the latest revision.</p>

                    <h2>9. Contact Us</h2>
                    <p>If you have any questions or concerns, feel free to reach out to us at:</p>
                    <p>Email: <strong>contact@visitpenang.com</strong></p>
                    <p>Phone: <strong>+60 123-456-789</strong></p>
                    <p>Address: 123 Visit Penang St., Penang, Malaysia</p>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
