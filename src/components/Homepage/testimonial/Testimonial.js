import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

import avatar1 from '../../../images/avatar/avatar1.jpg';
import avatar2 from '../../../images/avatar/avatar2.jpg';
import avatar3 from '../../../images/avatar/avatar3.jpg';

class Testimonial extends React.Component {
    state = {
        options: {
            items: 2,
            loop: true,
            margin: 30,
            dots: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            autoplay: true,
            responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
            }
        }
    }
    render() { 
        return (
            <section className="testimonial-section section-gap-full" id="testimonial-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 testimonial-left">
                            <h2>What People Says</h2>
                            <p>
                                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorperi.
                            </p>
                        </div>
                        <div className="col-lg-8 testimonial-right">
                            <OwlCarousel
                                className="testimonial-carusel owl-carousel" 
                                id="testimonial-carusel"
                                {...this.state.options}
                            >
                                <div className="single-testimonial item">
                                    <p>
                                        “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam.”
                                    </p>
                                    <div className="user-details d-flex flex-row align-items-center">
                                        <div className="img-wrap">
                                            <img src={avatar1} alt="Testimonial Avatar" />
                                        </div>
                                        <div className="details">
                                            <h4>Alice Johnson</h4>
                                            <p>Business Development</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonial item">
                                    <p>
                                        “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam.”
                                    </p>
                                    <div className="user-details d-flex flex-row align-items-center">
                                        <div className="img-wrap">
                                            <img src={avatar2} alt="Testimonial Avatar" />
                                        </div>
                                        <div className="details">
                                            <h4>Amber Mcdonald</h4>
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonial item">
                                    <p>
                                        “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam.”
                                    </p>
                                    <div className="user-details d-flex flex-row align-items-center">
                                        <div className="img-wrap">
                                            <img src={avatar3} alt="Testimonial Avatar" />
                                        </div>
                                        <div className="details">
                                            <h4>Rhonda Barnes</h4>
                                            <p>UI/UX Designer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonial item">
                                    <p>
                                        “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam.”
                                    </p>
                                    <div className="user-details d-flex flex-row align-items-center">
                                        <div className="img-wrap">
                                            <img src={avatar1} alt="Testimonial Avatar" />
                                        </div>
                                        <div className="details">
                                            <h4>Alice Johnson</h4>
                                            <p>Business Development</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonial item">
                                    <p>
                                        “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam.”
                                    </p>
                                    <div className="user-details d-flex flex-row align-items-center">
                                        <div className="img-wrap">
                                            <img src={avatar2} alt="Testimonial Avatar" />
                                        </div>
                                        <div className="details">
                                            <h4>Amber Mcdonald</h4>
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonial item">
                                    <p>
                                        “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam.”
                                    </p>
                                    <div className="user-details d-flex flex-row align-items-center">
                                        <div className="img-wrap">
                                            <img src={avatar3} alt="Testimonial Avatar" />
                                        </div>
                                        <div className="details">
                                            <h4>Rhonda Barnes</h4>
                                            <p>UI/UX Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Testimonial;