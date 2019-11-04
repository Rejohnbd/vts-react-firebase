import React from 'react';

class Price extends React.Component {
    state = {  }
    render() { 
        return (
            <section className="price-section section-gap-full" id="price-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 price-left">
                            <h4>
                                Our Pricing Plan <br/> and Options
                            </h4>
                            <p>
                                Far curiosity incommode now led smallness allowance. Favour bed assure son things yet.
                            </p>
                        </div>
                        <div className="col-lg-7 d-flex price-right">
                            <div className="single-price main">
                                <div className="top-wrap">
                                    <i className="ti ti-medall"></i>
                                    <h4>Enterprise</h4>
                                    <p>For Large Size Team</p>
                                    <h2><span>$</span>88.0</h2>
                                </div>
                                <div className="bottom-wrap">
                                    <ul>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>1000 Max Conntection</span>
                                            <i className="ti ti-check"></i>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>1000 Max Conntection</span>
                                            <i className="ti ti-check"></i>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>Additional Option</span>
                                            <i className="ti ti-check"></i>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>Lifetime Support</span>
                                            <i className="ti ti-check"></i>
                                        </li>
                                    </ul>
                                    <a href="www.facebook.com" className="primary-btn primary-btn-w d-block mx-auto">Select Plan</a>
                                </div>
                            </div>
                            <div className="single-price">
                                <div className="top-wrap">
                                    <i className="ti ti-briefcase"></i>
                                    <h4>Free</h4>
                                    <p className="relative">For Personal Use</p>
                                    <h2 className="relative"><span>$</span>00.0</h2>
                                </div>
                                <div className="bottom-wrap">
                                    <ul>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>1000 Max Conntection</span>
                                            <i className="ti ti-check"></i>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>1000 Max Conntection</span>
                                            <i className="ti ti-check"></i>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>Additional Option</span>
                                            <i className="ti ti-close"></i>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center">
                                            <span>Lifetime Support</span>
                                            <i className="ti ti-close"></i>
                                        </li>
                                    </ul>
                                    <a href="www.facebook.com" className="primary-btn d-block mx-auto">Select Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Price;