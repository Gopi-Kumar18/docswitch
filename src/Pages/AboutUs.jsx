import React from 'react';

const AboutUs = () => {

    const styles = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');

        .about-us-page-container {
            background-color: #f8f9fa;
            color: #212529;
            padding-bottom: 3rem;
        }

        .about-hero {
            background: linear-gradient(45deg, #563d7c, #8b5fbf);
            padding: 4rem 0;
            margin-bottom: 3rem;
        }

        .about-hero h1 {
            font-weight: 700;
        }

        .about-section {
            padding: 2.5rem 0;
            border-bottom: 1px solid #e9ecef;
        }

        .about-section:last-child {
            border-bottom: none;
        }

        .about-section h2 {
            font-weight: 600;
            margin-bottom: 1.5rem;
        }

        .section-illustration {
            padding: 1rem;
            text-align: center;
            font-style: italic;
            color: #6c757d;
        }
        
        .how-it-works-card {
            padding: 2rem;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            height: 100%;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .how-it-works-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .icon-circle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #563d7c;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0 auto 1.5rem auto;
        }

        .explore-card {
            background-color: #ffffff;
            padding: 2.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .explore-card h4 {
            font-weight: 600;
        }

        .explore-btn {
            background-color: #563d7c;
            color: white;
            border: none;
            font-weight: 500;
            padding: 0.75rem 1.5rem;
            transition: background-color 0.2s ease;
            text-decoration: none; /* Ensure it's not underlined */
        }

        .explore-btn:hover {
            background-color: #443063;
            color: white;
        }


        .dark-theme .about-us-page-container {
            background-color: #121212;
            color: #f1f1f1;
        }

        .dark-theme .about-section {
            border-bottom-color: #333;
        }
        
        .dark-theme .section-illustration {
            color: #888;
        }

        .dark-theme .how-it-works-card,
        .dark-theme .explore-card {
            background-color: #1e1e1e;
            border-color: #333;
        }
        
        .dark-theme .explore-card {
             box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .dark-theme .icon-circle {
            background-color: #8b5fbf;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <div className="about-us-page-container">
                {/* Hero Section */}
                <header className="about-hero text-white text-center">
                    <div className="container">
                        <h1 className="display-4">Simplifying Your Digital Documents</h1>
                        <p className="lead">
                            Welcome to DocSwitch, your all-in-one solution for seamless document conversion and management.
                        </p>
                    </div>
                </header>

                <div className="container">
                    {/* Our Mission Section */}
                    <section className="about-section row align-items-center">
                        <div className="col-lg-6">
                            <h2>Our Mission</h2>
                            <p>
                                At DocSwitch, our mission is to make document handling effortless and accessible to everyone. We believe that powerful tools shouldn't be complicated. Whether you're a student, a professional, or just need to manage personal files, we provide a suite of free, user-friendly tools to streamline your workflow and save you time.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-illustration">
                                
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section className="about-section text-center">
                        <h2>How It Works</h2>
                        <p className="text-muted mb-4">A simple and secure process from start to finish.</p>
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="how-it-works-card">
                                    <div className="icon-circle">1</div>
                                    <h4>Upload Your File</h4>
                                    <p>Drag and drop your document or select it from your device. We prioritize your privacy; your files are secure with us.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="how-it-works-card">
                                    <div className="icon-circle">2</div>
                                    <h4>We Process It</h4>
                                    <p>Our system leverages powerful third-party APIs to convert your document to the desired format with precision.</p>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="how-it-works-card">
                                    <div className="icon-circle">3</div>
                                    <h4>Download & Go</h4>
                                    <p>Your new file is ready for download almost instantly. No watermarks, no hidden costs—just your converted document.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technology & Transparency Section */}
                    <section className="about-section row align-items-center">
                        <div className="col-lg-6">
                            <h2>Our Technology & Transparency</h2>
                            <p>
                                DocSwitch is built on a modern tech stack, featuring a dynamic frontend with <strong>React</strong> to ensure a fast and responsive user experience.
                            </p>
                            <p>
                                For our conversion processes, we integrate with specialized, industry-leading <strong>third-party APIs</strong>. This allows us to offer a wide range of tools without building every converter from scratch. Because we rely on these external services, conversion speeds may occasionally vary. We are committed to transparency and always strive to provide a reliable service.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-illustration">
                                
                            </div>
                        </div>
                    </section>

                    {/* Explore More Section */}
                    <section className="about-section text-center">
                        <h2>Discover More</h2>
                        <p className="text-muted mb-4">Dive deeper into what makes DocSwitch work.</p>
                        <div className="row justify-content-center">
                            <div className="col-md-5 mb-4">
                                <div className="explore-card">
                                    <h4>For the Tech-Savvy</h4>
                                    <p>Interested in the technical details and our development journey? Visit our Developers page.</p>
                                    <a href="/docswitch-web-developers" className="btn explore-btn mt-3 align-self-center">
                                        Meet the Developers
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-5 mb-4">
                                <div className="explore-card">
                                    <h4>Our Full Toolkit</h4>
                                    <p>Get a complete overview of all the conversion and management tools we offer.</p>
                                    <a href="/features" className="btn explore-btn mt-3 align-self-center">
                                        View All Features
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AboutUs;

