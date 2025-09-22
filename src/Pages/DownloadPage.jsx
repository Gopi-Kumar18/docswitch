import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';


const allTools = [
    { icon: 'fas fa-file-zipper', name: 'Compress PDF', summary: 'Reduce PDF file size.', path: '/compress-pdf' },
    { icon: 'fas fa-object-group', name: 'Merge PDFs', summary: 'Combine multiple PDFs.', path: '/merge-pdf' },
    { icon: 'fas fa-object-ungroup', name: 'Split PDF', summary: 'Extract pages from a PDF.', path: '/split-pdf' },
    { icon: 'fas fa-signature', name: 'Sign PDF', summary: 'Apply your digital signature.', path: '/sign-pdf' },
    { icon: 'fas fa-lock', name: 'Protect PDF', summary: 'Add a password to a PDF.', path: '/protect-pdf' },
    { icon: 'fas fa-lock-open', name: 'Unlock PDF', summary: 'Remove a PDF password.', path: '/unlock-pdf' },
    { icon: 'fas fa-file-word', name: 'PDF to Word', summary: 'Convert PDFs to DOCX.', path: '/pdf-to-word' },
    { icon: 'fas fa-file-powerpoint', name: 'PDF to Presentation', summary: 'Convert PDFs to PPTX.', path: '/pdf-to-ppt' },
    { icon: 'fas fa-file-excel', name: 'PDF to Excel', summary: 'Extract data to XLSX.', path: '/pdf-to-excel' },
    { icon: 'fas fa-right-left', name: 'JPG to PNG', summary: 'Convert JPG to PNG.', path: '/jpg-to-png' },
    { icon: 'fas fa-right-left', name: 'PNG to JPG', summary: 'Convert PNG to JPG.', path: '/png-to-jpg' },
    { icon: 'fas fa-file-image', name: 'PDF to Image', summary: 'Convert PDF to images.', path: '/pdf-to-image' },
    { icon: 'fas fa-robot', name: 'AI Question Generator', summary: 'Generate questions from text.', path: '/ai-question-generator' },
    { icon: 'fas fa-file-video', name: 'MP4 Tools', summary: 'Convert MP4 videos.', path: '/multimedia-tools' },
    { icon: 'fas fa-file-audio', name: 'MP3 Tools', summary: 'Convert audio to MP3.', path: '/multimedia-tools' },
];

const RandomTools = ({ count = 4 }) => {
    const [randomTools, setRandomTools] = useState([]);

    useEffect(() => {
        const shuffled = [...allTools].sort(() => 0.5 - Math.random());
        setRandomTools(shuffled.slice(0, count));
    }, [count]);

    return (
        <div className="random-tools-section">
            <h3 className="random-tools-title">Try another tool</h3>
            <div className="row g-4">
                {randomTools.map((tool, index) => (
                    <div key={index} className="col-lg-3 col-md-6">
                        <Link to={tool.path} className="random-tool-card">
                            <i className={`random-tool-icon ${tool.icon}`}></i>
                            <h5>{tool.name}</h5>
                            <p>{tool.summary}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};


const FollowUs = () => {
    return (
        <div className="follow-us-section text-center">
            <div className="thank-you-message">
                Thank you for using our service
                <svg className="heart-icon" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </div>
            <p className="follow-us-text">Follow us on</p>
            <div className="social-links">
                <a href="https://github.com/Gopi-Kumar18" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/kartikthokal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
};


const DownloadPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const outputFormat = searchParams.get('outputFormat') || 'file';
  const navigate = useNavigate();

 
  const backendUrl = import.meta.env.VITE_BACKEND_URL; 
  const downloadUrl = `${backendUrl}/download?token=${encodeURIComponent(token)}&outputFormat=${outputFormat}`;

  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    window.location.href = downloadUrl;
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(downloadUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  const styles = `
    /* --- Random Tools Section --- */
    .random-tools-section {
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 12px;
        padding: 2.5rem;
        margin-top: 3rem;
    }
    .random-tools-title {
        font-weight: 600;
        margin-bottom: 2rem;
        text-align: center;
    }
    .random-tool-card {
        background-color: #ffffff;
        border: 1px solid #e9ecef;
        border-radius: 8px;
        padding: 1.5rem;
        text-align: center;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: inherit;
        height: 100%;
    }
    .random-tool-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        color: inherit;
    }
    .random-tool-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #0d6efd;
    }
    .random-tool-card h5 {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    .random-tool-card p {
        font-size: 0.9rem;
        color: #6c757d;
    }

    /* --- Follow Us Section --- */
    .follow-us-section {
        margin-top: 4rem;
        padding: 2rem;
    }
    .thank-you-message {
        font-size: 1.5rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
    .heart-icon {
        width: 28px;
        height: 28px;
        stroke: #dc3545;
        stroke-width: 1.5;
        fill: transparent;
        animation: fillHeart 1s ease-in-out 0.5s forwards;
    }
    @keyframes fillHeart {
        from { fill: transparent; }
        to { fill: #dc3545; }
    }
    .follow-us-text {
        margin-top: 0.5rem;
        color: #6c757d;
    }
    .social-links a {
        font-size: 1.75rem;
        color: #212529;
        margin: 0 0.75rem;
        transition: color 0.2s ease;
    }
    .social-links a:hover {
        color: #0d6efd;
    }

    /* --- Dark Theme Overrides --- */
    .dark-theme .random-tools-section {
        background-color: #1e1e1e;
        border-color: #333;
    }
    .dark-theme .random-tool-card {
        background-color: #2a2a2a;
        border-color: #444;
    }
    .dark-theme .random-tool-card p { color: #aaa; }
    .dark-theme .random-tool-icon { color: #4dabf7; }
    .dark-theme .thank-you-message { color: #f1f1f1; }
    .dark-theme .follow-us-text { color: #aaa; }
    .dark-theme .social-links a { color: #f1f1f1; }
    .dark-theme .social-links a:hover { color: #4dabf7; }
  `;

  return (
    <>
        <style>{styles}</style>
        <div className="download-page container my-5">
            <h2 className="text-center mb-4">Your file is ready!</h2>

            <div className="card shadow mx-auto" style={{ maxWidth: '600px' }}>
                <div className="card-body p-4">
                    <p className="text-center mb-3">
                        Click “Download” to get your {outputFormat.toUpperCase()} file, or share this secure link:
                    </p>

                    <div className="d-flex mb-4">
                        <input
                            type="text"
                            className="form-control"
                            readOnly
                            value={downloadUrl}
                        />
                        <button
                            className={`btn btn-outline-primary ms-2`}
                            onClick={handleCopyLink}
                        >
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>

                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button onClick={handleDownload} className="btn btn-success btn-lg px-4">
                            Download {outputFormat.toUpperCase()}
                        </button>
                        <button onClick={handleBackToHome} className="btn btn-secondary btn-lg px-4">
                            Convert More
                        </button>
                    </div>
                </div>
            </div>

            <RandomTools count={4} />

            <FollowUs />

        </div>
    </>
  );
};

export default DownloadPage;

