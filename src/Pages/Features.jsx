import React from 'react';

const Features = () => {
    // All CSS is included here to avoid a separate file.
    const styles = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');

        .features-page-container {
            background-color: #f8f9fa;
            color: #212529;
            padding-bottom: 4rem;
        }

        /* --- Hero Section --- */
        .features-hero {
            background: linear-gradient(45deg, #28a745, #218838);
            padding: 4rem 0;
            margin-bottom: 3rem;
        }

        .features-hero h1 {
            font-weight: 700;
        }
        
        /* --- Section Styling --- */
        .features-section {
            padding: 2.5rem 0;
        }

        .section-title {
            font-weight: 600;
            margin-bottom: 2rem;
            text-align: center;
            position: relative;
        }

        .section-title::after {
            content: '';
            width: 80px;
            height: 3px;
            background-color: #28a745;
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
        }

        /* --- Feature Card Styling --- */
        .feature-card {
            background-color: #ffffff;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 1.75rem;
            height: 100%;
            text-align: center;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #28a745;
        }

        .feature-card h5 {
            font-weight: 600;
            margin-bottom: 0.75rem;
        }
        
        .feature-card p {
            font-size: 0.9rem;
            color: #6c757d;
        }

        .coming-soon-card {
            opacity: 0.7;
            border-style: dashed;
        }
        
        .coming-soon-card .feature-icon {
             color: #6c757d;
        }


        /* ─────────────────────────────────── */
        /* DARK THEME OVERRIDES       */
        /* ─────────────────────────────────── */

        .dark-theme .features-page-container {
            background-color: #121212;
            color: #f1f1f1;
        }

        .dark-theme .feature-card {
            background-color: #1e1e1e;
            border-color: #333;
        }
        
        .dark-theme .feature-card p {
            color: #aaa;
        }

        .dark-theme .section-title::after {
            background-color: #218838;
        }
        
        .dark-theme .coming-soon-card .feature-icon {
             color: #555;
        }
    `;

    // Data for all features, categorized for easy management
    const pdfTools = [
        { icon: 'fas fa-file-zipper', name: 'Compress PDF', summary: 'Reduce the file size of your PDFs for easier sharing and storage.' },
        { icon: 'fas fa-object-group', name: 'Merge PDFs', summary: 'Combine multiple PDF documents into a single, organized file.' },
        { icon: 'fas fa-object-ungroup', name: 'Split PDF', summary: 'Extract specific pages or divide a large PDF into smaller documents.' },
        { icon: 'fas fa-file-circle-plus', name: 'Create PDF', summary: 'Generate a new, blank PDF document from scratch, ready for your content.' },
        { icon: 'fas fa-signature', name: 'Sign PDF', summary: 'Apply your digital signature to documents for official and personal use.' },
        { icon: 'fas fa-fill-drip', name: 'Watermark PDF', summary: 'Add custom text or image watermarks to protect your documents.' },
        { icon: 'fas fa-lock', name: 'Protect PDF', summary: 'Secure your PDFs with a password to prevent unauthorized access.' },
        { icon: 'fas fa-lock-open', name: 'Unlock PDF', summary: 'Remove password protection from your PDF files for easy access.' },
        { icon: 'fas fa-eye', name: 'Apply OCR', summary: 'Convert scanned PDFs into searchable and editable text documents.' },
    ];

    const conversionTools = [
        { icon: 'fas fa-file-word', name: 'PDF to Word', summary: 'Convert your PDFs into editable Microsoft Word (DOCX) files.' },
        { icon: 'fas fa-file-powerpoint', name: 'PDF to Presentation', summary: 'Transform PDF pages into slides for a PowerPoint (PPTX) presentation.' },
        { icon: 'fas fa-file-excel', name: 'PDF to Spreadsheets', summary: 'Extract tables and data from PDFs into Microsoft Excel (XLSX) format.' },
        { icon: 'fas fa-file-pdf', name: 'Word to PDF', summary: 'Save your Word documents as high-quality, universal PDF files.' },
        { icon: 'fas fa-file-pdf', name: 'Presentation to PDF', summary: 'Convert your PowerPoint slides into a shareable PDF document.' },
        { icon: 'fas fa-file-csv', name: 'Spreadsheets to CSV', summary: 'Export data from your Excel files into the simple CSV format.' },
    ];

    const imageTools = [
        { icon: 'fas fa-right-left', name: 'JPG to PNG', summary: 'Convert JPG images to PNG format with transparent backgrounds.' },
        { icon: 'fas fa-right-left', name: 'PNG to JPG', summary: 'Change PNG images to the universally compatible JPG format.' },
        { icon: 'fas fa-file-image', name: 'PDF to Image', summary: 'Turn each page of a PDF document into a high-quality image file.' },
        { icon: 'fas fa-file-image', name: 'Word to Image', summary: 'Convert Word document content into easily shareable image formats.' },
        { icon: 'fas fa-file-image', name: 'Presentation to Image', summary: 'Save your presentation slides as individual image files.' },
        { icon: 'fas fa-file-image', name: 'Excel to Image', summary: 'Capture your spreadsheet data as clear, high-resolution images.' },
        { icon: 'fas fa-file-image', name: 'BMP to Image', summary: 'Convert legacy BMP image files to modern formats like JPG or PNG.' },
    ];
    
    const aiTools = [
        { icon: 'fas fa-robot', name: 'AI Question Generator', summary: 'Upload a document and let our AI create study questions and answers for you.' },
    ];

    const multimediaTools = [
         { icon: 'fas fa-file-video', name: 'MP4 Converter', summary: 'Convert MP4 video files to and from various other video formats.' },
         { icon: 'fas fa-file-audio', name: 'MP3 Converter', summary: 'Extract audio from videos or convert audio files to MP3 format.' },
         { icon: 'fas fa-file-video', name: 'MKV Converter', summary: 'Handle MKV video files by converting them to more compatible formats.' },
         { icon: 'fas fa-file-image', name: 'GIF Converter', summary: 'Create or convert animated GIFs from video clips or other image formats.' },
    ];

    const comingSoonTools = [
        { icon: 'fas fa-file-code', name: 'HTML to PDF', summary: 'Convert entire web pages into perfectly formatted PDF documents.' },
        { icon: 'fas fa-link', name: 'URL Shortener', summary: 'Create short, shareable links for any long web address.' },
        { icon: 'fas fa-images', name: 'More Image Formats', summary: 'Support for WEBP, GIF, TIFF, and SVG conversions is on the way.' },
        { icon: 'fas fa-history', name: 'File History', summary: 'Access a history of your recently converted files for quick redownloads.' },
        { icon: 'fas fa-chart-pie', name: 'Conversion Analytics', summary: 'View your total conversion history and usage statistics.' },
    ];

    const renderFeatureCards = (tools, isComingSoon = false) => (
        tools.map((tool, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className={`feature-card ${isComingSoon ? 'coming-soon-card' : ''}`}>
                    <div className="feature-icon"><i className={tool.icon}></i></div>
                    <h5>{tool.name}</h5>
                    <p>{tool.summary}</p>
                </div>
            </div>
        ))
    );

    return (
        <>
            <style>{styles}</style>
            <div className="features-page-container">
                <header className="features-hero text-white text-center">
                    <div className="container">
                        <h1 className="display-4">Our Full Suite of Tools</h1>
                        <p className="lead">
                            Everything you need to manage your documents and media, all in one place.
                        </p>
                    </div>
                </header>

                <div className="container">
                    <section className="features-section">
                        <h2 className="section-title">PDF Management & Security</h2>
                        <div className="row">{renderFeatureCards(pdfTools)}</div>
                    </section>

                    <section className="features-section">
                        <h2 className="section-title">Document & Spreadsheet Converters</h2>
                        <div className="row">{renderFeatureCards(conversionTools)}</div>
                    </section>

                    <section className="features-section">
                        <h2 className="section-title">Image Conversion Suite</h2>
                        <div className="row">{renderFeatureCards(imageTools)}</div>
                    </section>
                    
                    <section className="features-section">
                        <h2 className="section-title">AI-Powered Tools</h2>
                        <div className="row justify-content-center">{renderFeatureCards(aiTools)}</div>
                    </section>

                    <section className="features-section">
                        <h2 className="section-title">Multimedia Tools</h2>
                        <div className="row">{renderFeatureCards(multimediaTools)}</div>
                    </section>

                    <section className="features-section">
                        <h2 className="section-title">Coming Soon...</h2>
                        <div className="row">{renderFeatureCards(comingSoonTools, true)}</div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Features;

