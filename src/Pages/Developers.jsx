import React from 'react';

const Developers = () => {

    const styles = `
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');

        .dev-page-container {
            background-color: #f8f9fa;
            color: #212529;
            padding-bottom: 4rem;
        }

        .dev-hero {
            background: linear-gradient(45deg, #6f42c1, #4a148c);
            padding: 4rem 0;
            margin-bottom: 3rem;
        }

        .dev-hero h1 {
            font-weight: 700;
        }

        .dev-section {
            padding: 2.5rem 0;
        }

        .section-title {
            font-weight: 600;
            margin-bottom: 2.5rem;
            text-align: center;
            position: relative;
        }

        .section-title::after {
            content: '';
            width: 80px;
            height: 3px;
            background-color: #6f42c1;
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
        }

        .tech-stack-grid {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2rem;
        }
        .tech-item {
            text-align: center;
            width: 120px;
        }
        .tech-icon {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            color: #6f42c1;
            transition: transform 0.2s ease;
        }
        .tech-item:hover .tech-icon {
            transform: scale(1.1);
        }
        .tech-item h5 {
            font-size: 1rem;
            font-weight: 500;
        }
        
        .api-usage-container .progress-wrapper {
            margin-bottom: 1.5rem;
        }
        .api-usage-container .progress-label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        .progress {
            height: 20px;
            border-radius: 10px;
        }
        .progress-bar {
            font-weight: bold;
        }
        .bg-cloudconvert { background-color: #2693FF; }
        .bg-adobe { background-color: #FA0F00; }
        .bg-ilovepdf { background-color: #E44847; }
        .bg-gemini { background-color: #8E44AD; }
        
        .team-card {
            background-color: #ffffff;
            border: 1px solid #dee2e6;
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            height: 100%; /* Ensure cards are same height */
        }
        .team-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .team-avatar {
            width: 130px;
            height: 130px;
            border-radius: 50%;
            margin: 0 auto 1rem auto;
            border: 4px solid #6f42c1;
            object-fit: cover;
            background-color: #e9ecef;
        }
        .team-card h4 {
            font-weight: 600;
            margin-bottom: 0.25rem;
        }
        .team-role {
            font-weight: 500;
            color: #6f42c1;
            margin-bottom: 1rem;
        }
        .team-desc {
            font-size: 0.9rem;
            color: #6c757d;
        }


        .dark-theme .dev-page-container {
            background-color: #121212;
            color: #f1f1f1;
        }
        .dark-theme .team-card {
            background-color: #1e1e1e;
            border-color: #333;
        }
        .dark-theme .team-desc {
            color: #aaa;
        }
        .dark-theme .section-title::after, .dark-theme .team-avatar, .dark-theme .team-role, .dark-theme .tech-icon {
             border-color: #8a63d2;
             color: #8a63d2;
        }
        .dark-theme .progress {
            background-color: #333;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <div className="dev-page-container">
                <header className="dev-hero text-white text-center">
                    <div className="container">
                        <h1 className="display-4">Behind the Code</h1>
                        <p className="lead">
                            Meet the developers and explore the technology that powers DocSwitch.
                        </p>
                    </div>
                </header>

                <div className="container">
                    {/* --- Tech Stack Section --- */}
                    <section className="dev-section">
                        <h2 className="section-title">Our Technology Stack</h2>
                        <div className="tech-stack-grid">
                            <div className="tech-item"><div className="tech-icon"><i className="fab fa-react"></i></div><h5>React</h5></div>
                            <div className="tech-item"><div className="tech-icon"><i className="fab fa-node-js"></i></div><h5>Node.js</h5></div>
                            <div className="tech-item"><div className="tech-icon"><i className="fas fa-server"></i></div><h5>Express.js</h5></div>
                            <div className="tech-item"><div className="tech-icon"><i className="fas fa-database"></i></div><h5>MongoDB</h5></div>
                            <div className="tech-item"><div className="tech-icon"><i className="fab fa-aws"></i></div><h5>AWS S3</h5></div>
                            <div className="tech-item"><div className="tech-icon"><i className="fas fa-robot"></i></div><h5>Gemini API</h5></div>
                        </div>
                    </section>
                    
                    {/* --- API Integration Section --- */}
                    <section className="dev-section">
                        <h2 className="section-title">Third-Party API Integration</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8 api-usage-container">
                                <div className="progress-wrapper">
                                    <div className="progress-label"><span>CloudConvert API</span><span>56%</span></div>
                                    <div className="progress"><div className="progress-bar bg-cloudconvert" role="progressbar" style={{ width: '56%' }} aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div></div>
                                </div>
                                <div className="progress-wrapper">
                                    <div className="progress-label"><span>Adobe PDF Services API</span><span>37%</span></div>
                                    <div className="progress"><div className="progress-bar bg-adobe" role="progressbar" style={{ width: '37%' }} aria-valuenow="37" aria-valuemin="0" aria-valuemax="100"></div></div>
                                </div>
                                <div className="progress-wrapper">
                                    <div className="progress-label"><span>ILovePdf API</span><span>~4%</span></div>
                                    <div className="progress"><div className="progress-bar bg-ilovepdf" role="progressbar" style={{ width: '4%' }} aria-valuenow="4" aria-valuemin="0" aria-valuemax="100"></div></div>
                                </div>
                                 <div className="progress-wrapper">
                                    <div className="progress-label"><span>Google Gemini API</span><span>~4%</span></div>
                                    <div className="progress"><div className="progress-bar bg-gemini" role="progressbar" style={{ width: '4%' }} aria-valuenow="4" aria-valuemin="0" aria-valuemax="100"></div></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* --- Meet the Team Section --- */}
                    <section className="dev-section">
                        <h2 className="section-title">Meet the Team</h2>
                        <div className="row justify-content-center g-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="team-card">
                                    <img src="https://placehold.co/200x200/6f42c1/FFFFFF?text=KT" alt="Kartik Thokal" className="team-avatar" />
                                    <h4>Kartik Thokal</h4>
                                    <p className="team-role">Frontend Developer</p>
                                    <p className="team-desc">Responsible for crafting the user interface, implementing dynamic styles, and integrating frontend API endpoints to create a seamless user experience.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-card">
                                    <img src="https://placehold.co/200x200/6f42c1/FFFFFF?text=GK" alt="Gopi Kumar" className="team-avatar" />
                                    <h4>Gopi Kumar</h4>
                                    <p className="team-role">Backend Developer & DB Manager</p>
                                    <p className="team-desc">Architected the server-side logic, manages the database, and orchestrates the complex third-party API integrations that power our conversion engine.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-card">
                                    <img src="https://placehold.co/200x200/FFFFFF/4a148c?text=GPT" alt="ChatGPT" className="team-avatar" />
                                    <h4>ChatGPT</h4>
                                    <p className="team-role">AI Development Assistant</p>
                                    <p className="team-desc">Provided foundational code structures, documentation insights, and debugging assistance, accelerating the development timeline significantly.</p>
                                </div>
                            </div>
                             <div className="col-lg-3 col-md-6">
                                <div className="team-card">
                                    <img src="https://placehold.co/200x200/FFFFFF/4a148c?text=G" alt="Gemini" className="team-avatar" />
                                    <h4>Gemini</h4>
                                    <p className="team-role">AI Feature Specialist</p>
                                    <p className="team-desc">Instrumental in developing advanced features, including the AI Question Generator, by providing specialized API guidance and creative solutions.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Developers;