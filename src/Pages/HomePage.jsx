
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/HomePage.css';

import CardItem from '../otherComponents/CardItem';
import CardData from '../otherComponents/CardData';

import pdfIconNeon from '../assets/pdfIconNeon.png';
import pdfSlide1 from '../assets/pdf-2.png';
import imgToolkitBanner from '../assets/image-tkit.jpg';
import multimediaBanner from '../assets/mm-banner.png';
import aiGeneratorBanner from '../assets/ai-question-gen.png';

const conversionTypes = ["PPTX", "PDF", "DOCX", "JPG", "PNG", "COMPRESS", "MERGE", "SPLIT", "WATERMARK", "SIGN"];

const HomePage = () => {
    const [currentConversion, setCurrentConversion] = useState(conversionTypes[0]);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const textInterval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentConversion(prev => {
                    const index = conversionTypes.indexOf(prev);
                    return conversionTypes[(index + 1) % conversionTypes.length];
                });
                setFade(false);
            }, 500);
        }, 3000);
        return () => clearInterval(textInterval);
    }, []);

    return (
        <div className="home-page container">
            <header className="hero-section mt-4">
                <div className="hero-content">
                    <h1 className="display-4">From PDFs to Everything - Instantly</h1>
                    <p className="lead-new">
                        Convert, edit and manage documents with speed and grace. Tools
                        that professionals enjoy — friendly enough for everyone.
                    </p>
                    <div className="hero-buttons">
                        <a href="/create-pdf" className="btn btn-lg try-conversion-btn">Try a Conversion</a>
                        <a href="/other-pdf-tools" className="btn btn-lg explore-tools-btn">Explore Tools</a>
                    </div>
                    <div className="featured-text mt-3">
                        Featured: <span className={`conversion-text ${fade ? 'fade-out' : 'fade-in'}`}>{currentConversion}</span>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={pdfIconNeon} alt="Neon PDF Icon" />
                </div>
            </header>

            <div className="row justify-content-center mt-4">
                {CardData.slice(0, 6).map((card, index) => (
                    <CardItem key={index} {...card} />
                ))}
            </div>

            {/* PDF Tools Section */}
            <div className="feature-section first-feature">
                <div className="feature-content-column">
                    <h3 className="feature-heading">Our other frequently used PDF conversions</h3>
                    <div className="feature-card">
                        <h4>Your Complete PDF Toolkit</h4>
                        <p>
                            Beyond simple conversions, unlock a full suite of tools to manage your documents. Merge, split, compress, or sign PDFs with ease. Everything you need to master your workflow is right here.
                        </p>
                        <a href="/other-pdf-tools" className="feature-btn">
                            See All PDF Tools
                        </a>
                    </div>
                </div>
                <div className="feature-media-container">
                    <img src={pdfSlide1} alt="PDF Tool Kit" />
                </div>
            </div>

            {/* Image Ops Section */}
            <div className="feature-section">
                <div className="feature-content-column">
                    <h3 className="feature-heading">Image Op's</h3>
                    <div className="feature-card">
                        <h4>Optimize Your Images</h4>
                        <p>
                            Effortlessly convert, resize, and compress your images. Our tools help you manage image files for web, print, or storage with just a few clicks.
                        </p>
                        <a href="/other-img-tools" className="feature-btn">
                            See All Image Tools
                        </a>
                    </div>
                </div>
                <div className="feature-media-container">
                    <img src={imgToolkitBanner} alt="Image Operations" />
                </div>
            </div>

            {/* AI Section */}
            <div className="feature-section">
                <div className="feature-content-column">
                    <h3 className="feature-heading">Work with AI</h3>
                    <div className="feature-card">
                        <h4>AI Question Generator</h4>
                        <p>
                            Generate Questions with AI. Create questions from PDFs using AI instantly. This powerful tool helps you quickly build quizzes, study guides, and more from your existing documents.
                        </p>
                        <a href="/ai-question-generator" className="feature-btn">
                            Click to Generate
                        </a>
                    </div>
                </div>
                <div className="feature-media-container">
                    <img src={aiGeneratorBanner} alt="AI illustrations" />
                </div>
            </div>

            {/* Multimedia Section */}
            <div className="feature-section">
                <div className="feature-content-column">
                    <h3 className="feature-heading">All Multimedia tools</h3>
                    <div className="feature-card">
                        <h4>Your Multimedia Toolkit</h4>
                        <p>
                            Convert, edit, and create with our suite of powerful multimedia tools. Handle audio and video files with ease for any project.
                        </p>
                        <a href="/multimedia-tools" className="feature-btn">
                            See All Multimedia Tools
                        </a>
                    </div>
                </div>
                <div className="feature-media-container">
                    <img src={multimediaBanner} alt="Multimedia Tools" />
                </div>
            </div>

        </div>
    );
};

export default HomePage;
