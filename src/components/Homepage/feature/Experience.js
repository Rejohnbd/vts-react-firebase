import React from 'react';

const Feature = () => {
    return (
        <section className="service-section section-gap-full" id="feature-section">
            
            <div className="container">
            <div className="section-title">
                <h2 className="text-center">Our Service</h2>
                <p className="text-center">Discover The Service We Provide</p>
            </div>
            <div className="row">
                <a href="#download-section" className="col-lg-4  col-md-6 pb-30">
                    <div className="single-service">
                        <i className="ti-location-pin"></i>
                        <h4>Live Tracking</h4>
                    </div>
                </a>
                <a href="#download-section" className="col-lg-4  col-md-6 pb-30">
                    <div className="single-service">
                        <i className="ti-bar-chart"></i>
                        <h4>Mileage Report</h4>
                    </div>
                </a>
                <a href="#download-section" className="col-lg-4 col-md-6 pb-30">
                    <div className="single-service">
                        <i className="ti-filter"></i>
                        <h4>Fuel Monitoring</h4>
                    </div>
                </a>
                <a href="#download-section" className="col-lg-4  col-md-6 pb-30">
                    <div className="single-service">
                        <i className="ti-announcement"></i>
                        <h4>Destination Alert</h4>
                    </div>
                </a>
                <a href="#download-section" className="col-lg-4 col-md-6 pb-30">
                    <div className="single-service">
                        <i className="ti-announcement"></i>
                        <h4>AC On/Off Notification</h4>
                    </div>
                </a>
                <a href="#download-section" className="col-lg-4 col-md-6 pb-30">
                    <div className="single-service">
                        <i className="ti-announcement"></i>
                        <h4>Engine On/Off Notification</h4>
                    </div>
                </a>
                <a href="#download-section" className="col-lg-4 col-md-6 pb-30">
                    <div className="single-service">
                        <i className="ti-write"></i>
                        <h4>Daily Summary</h4>
                    </div>
                </a>
                <a href="#download-section" className="col-lg-4 col-md-6 pb-30">
                    <div className="single-service">
                        <i className="ti-alert"></i>
                        <h4>Speed Violation Alert</h4>
                    </div>
                </a>
                <a href="#download-section" className="col-lg-4 col-md-6 pb-30">
                    <div className="single-service">
                        <i className="ti-pin"></i>
                        <h4>GEO Fence Alert</h4>
                    </div>
                </a>
            </div>
            </div>
        </section>
    );
}
 
export default Feature;