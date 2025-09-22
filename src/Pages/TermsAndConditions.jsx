import React from 'react';

const TermsAndConditions = () => {

    const styles = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');

        .legal-page-container {
            background-color: #f8f9fa;
            color: #212529;
            padding-bottom: 4rem;
            font-family: 'Inter', sans-serif;
        }

        .legal-hero {
            background: linear-gradient(45deg, #6c757d, #495057);
            padding: 4rem 0;
            margin-bottom: 3rem;
        }

        .legal-hero h1, .legal-hero p {
            color: #ffffff;
        }

        .legal-hero h1 {
            font-weight: 700;
        }
        
        .legal-content {
            background-color: #ffffff;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 2rem 2.5rem;
        }

        .legal-content h2 {
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 1rem;
            border-bottom: 2px solid #6c757d;
            padding-bottom: 0.5rem;
        }
        
        .legal-content p, .legal-content li {
            line-height: 1.7;
            color: #495057;
        }

        .legal-content ul {
            padding-left: 20px;
        }
        
        .legal-content strong {
            color: #212529;
        }

        .dark-theme .legal-page-container {
            background-color: #121212;
            color: #f1f1f1;
        }
        .dark-theme .legal-content {
            background-color: #1e1e1e;
            border-color: #333;
        }
        .dark-theme .legal-content h2 {
            border-color: #495057;
        }
        .dark-theme .legal-content p, .dark-theme .legal-content li {
            color: #aaa;
        }
        .dark-theme .legal-content strong {
            color: #f1f1f1;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <div className="legal-page-container">
                <header className="legal-hero text-center">
                    <div className="container">
                        <h1 className="display-4">Terms and Conditions</h1>
                        <p className="lead">Please read these terms carefully before using our service.</p>
                        <p className="fst-italic">Last updated: September 22, 2025</p>
                    </div>
                </header>

                <div className="container">
                    <div className="legal-content">
                        <p>Welcome to DocSwitch ("we", "us", "our"). These Terms and Conditions ("Terms") govern your use of our website and the services offered. By accessing or using our service, you agree to be bound by these Terms.</p>

                        <h2>1. Conditions of Use</h2>
                        <p>
                            DocSwitch is provided for <strong>educational and web-development practical purposes only.</strong> The service is not intended for commercial use. You agree not to use the service for any commercial activities without our prior written consent.
                        </p>

                        <h2>2. User Conduct</h2>
                        <p>You agree not to use the service for any purpose that is illegal or prohibited by these Terms. You are responsible for the content of the files you upload. You agree not to:</p>
                        <ul>
                            <li>Upload any file that contains viruses, malware, or any other malicious code.</li>
                            <li>Attempt to gain unauthorized access to our servers or any other user's account.</li>
                            <li>Use the service to infringe on the intellectual property rights of others.</li>
                            <li>Engage in any activity that could disrupt, damage, or impair the functionality of our service.</li>
                        </ul>

                        <h2>3. Privacy Policy</h2>
                        <p>
                            Your privacy is important to us. Our <a href="/privacy-policy">Privacy Policy</a> is incorporated by reference into these Terms. Please read it carefully to understand how we collect, use, and secure your data.
                        </p>

                        <h2>4. Limitation of Liability</h2>
                        <p>
                            The service is provided on an "as is" and "as available" basis. While we strive to provide a reliable service, we do not guarantee that it will be error-free or uninterrupted. To ensure the security and integrity of our platform, we log technical data, including IP addresses, upon file upload. This is solely for the purpose of identifying and preventing abuse of our systems. In cases where a user is found to be intentionally harming our website by uploading malicious files or engaging in other prohibited activities, we reserve the right to take appropriate action, which may include blocking access from the associated IP address and reporting the activity to relevant authorities.
                        </p>

                        <h2>5. Termination</h2>
                        <p>
                            We reserve the right to terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will immediately cease.
                        </p>

                        <h2>6. Changes to Terms</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page. Your continued use of the service after any such changes constitutes your acceptance of the new Terms.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsAndConditions;
