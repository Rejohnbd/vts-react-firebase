import React from 'react';

class Contact extends React.Component {
    state = {  }
    render() { 
        return (
            <section className="contact-section padding-top-120" id="contact-section">
                <div className="container">
                    <div className="section-title">
                        <h2 className="text-center">Contact Us</h2>
                        <p className="text-center">Get in Touch With Me</p>
                    </div>
                    <div className="row address-wrap justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-6 single-address-col">
                            <i className="ti ti-mobile"></i>
                            <p>
                                +880-176875479
                                <br/> +880-754791768
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 single-address-col">
                            <i className="ti ti-map-alt"></i>
                            <p>
                                1179 Sarah Drive,Lafayette
                                <br/> California 90021
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 single-address-col">
                            <i className="ti ti-email"></i>
                            <p>
                                info@dopedemo.com
                                <br/> contact@dopedemo.com
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center form-row">
                        <div className="col-lg-9">
                            <form id="contact-form" action="#">
                                <div className="row contact-form-wrap justify-content-center">
                                    <div className="col-md-6 contact-name form-col">
                                        {/* <input name="name" id="name" className="form-control" type="text" placeholder="Name*"
                                            onfocus="this.placeholder=''" onblur="this.placeholder='Name*'" /> */}
                                    </div>
                                    <div className="col-md-6 contact-email form-col">
                                        {/* <input name="mail" id="mail" className="form-control" type="email" placeholder="E-mail*"
                                            onfocus="this.placeholder=''" onblur="this.placeholder='Email*'" /> */}
                                    </div>
                                    <div className="col-lg-12">
                                        {/* <textarea name="comment" id="comment" className="form-control" rows="8" placeholder="Message"
                                            onfocus="this.placeholder=''" onblur="this.placeholder='Message*'"></textarea> */}
                                    </div>
                                    <input type="submit" className="primary-btn" value="Send Message" id="submit-message" />
                                    <div id="msg" className="message"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Contact;