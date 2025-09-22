import React from 'react';

const PrivacyPolicy = () => {

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
            background: linear-gradient(45deg, #17a2b8, #117a8b);
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
            border-bottom: 2px solid #17a2b8;
            padding-bottom: 0.5rem;
        }
        
        .legal-content h3 {
            font-weight: 600;
            font-size: 1.2rem;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
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
            border-color: #117a8b;
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
                        <h1 className="display-4">Privacy Policy</h1>
                        <p className="lead">Your privacy is critically important to us.</p>
                        <p className="fst-italic">Last updated: September 22, 2025</p>
                    </div>
                </header>

                <div className="container">
                    <div className="legal-content">
                        <p>Welcome to DocSwitch. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services. By using DocSwitch, you agree to the collection and use of information in accordance with this policy.</p>

                        <h2>1. Information We Collect</h2>
                        <p>We collect different types of information for various purposes to provide and improve our service to you.</p>
                        <h3>Personal Data</h3>
                        <p>While using our authentication features, we may ask you to provide us with certain personally identifiable information ("Personal Data"). This includes:</p>
                        <ul>
                            <li>Email address</li>
                            <li>Password</li>
                        </ul>
                        <h3>File & Usage Data</h3>
                        <p>We also collect information on how the service is accessed and used ("Usage Data"). This includes:</p>
                        <ul>
                            <li><strong>Files:</strong> The files you upload for conversion are collected solely for the purpose of processing your request.</li>
                            <li><strong>Log Data:</strong> We may collect your IP address to monitor for malicious activity and ensure the stability of our servers.</li>
                        </ul>

                        <h2>2. How We Use Your Data</h2>
                        <p>DocSwitch uses the collected data for the following purposes:</p>
                        <ul>
                            <li><strong>To Provide the Service:</strong> The primary purpose of collecting your files is to perform the requested conversion or modification.</li>
                            <li><strong>To Manage Your Account:</strong> To manage your registration as a user of the Service.</li>
                            <li><strong>For Security:</strong> To monitor for and prevent malicious activity, such as repeated uploads of corrupted files that could harm our servers.</li>
                            <li><strong>To Improve Our Service:</strong> To understand how our services are used so we can enhance the user experience.</li>
                        </ul>

                        <h2>3. Data Security and Retention</h2>
                        <p>The security of your data is our top priority. We implement robust security measures to protect both your personal information and the files you upload.</p>
                        <h3>File Security</h3>
                        <ul>
                            <li><strong>Temporary Storage:</strong> Files you upload are stored temporarily on our secure AWS S3 servers only for the duration of the conversion process.</li>
                            <li><strong>Automated Deletion:</strong> Your files are automatically and permanently deleted from our servers immediately after you download the converted file. If a file upload fails or the conversion process is interrupted, the file is also deleted instantly.</li>
                            <li><strong>Secure Access:</strong> Access to your converted file is provided via a secure link that is tied to a JSON Web Token (JWT). This token automatically expires after <strong>2 hours</strong>, at which point the link becomes invalid, ensuring no one else can access your file.</li>
                        </ul>
                        <h3>Personal Data Security</h3>
                        <ul>
                            <li><strong>Password Encryption:</strong> All user passwords are encrypted using industry-standard hashing algorithms before being stored in our database. We never store plaintext passwords.</li>
                        </ul>

                        <h2>4. Your Rights</h2>
                        <p>You have the right to access, update, or delete the personal information we have on you. You can manage your account information through your profile settings or by contacting us directly.</p>

                        <h2>5. Changes to This Privacy Policy</h2>
                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;
