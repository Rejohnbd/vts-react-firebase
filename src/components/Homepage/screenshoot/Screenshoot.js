import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import '../../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

import screen1 from '../../../images/screen/screen1.jpg';
import screen2 from '../../../images/screen/screen2.jpg';
import screen3 from '../../../images/screen/screen3.jpg';
import screen4 from '../../../images/screen/screen4.jpg';
import screen5 from '../../../images/screen/screen5.jpg';
import screen6 from '../../../images/screen/screen6.jpg';
import screen7 from '../../../images/screen/screen7.jpg';

class Screenshoot extends React.Component {
    state = {
        options: {
            loop: true,
            responsiveClass: true,
            nav: true,
            margin: 5,    
            autoplayTimeout: 4000,
            smartSpeed: 500,
            center: true,
            navText: ['<span class="ti ti-angle-left"></span>', '<span class="ti ti-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        }
    }
    render() { 
        return (
            <section className="screenshot-section section-gap-full">
                <div className="container">
                    <div className="section-title">
                        <h2 className="text-center">App Screenshots</h2>
                    </div>
                    <div className="row">
                        <OwlCarousel
                            className="screenshot_slider owl-carousel" 
                            id="screenshot-carusel"
                            // items={5}
                            // loop
                            // margin={10}
                            // nav
                            {...this.state.options}
                        >
                            <div className="item">
                                <img src={screen1} alt="Screenshoot One" title="Screenshoot One" />
                            </div>
                            <div className="item">
                                <img src={screen2} alt="Screenshoot Two" title="Screenshoot Two" />
                            </div>
                            <div className="item">
                                <img src={screen3} alt="Screenshoot Three" title="Screenshoot Three" />
                            </div>
                            <div className="item">
                                <img src={screen4} alt="Screenshoot Four" title="Screenshoot Four" />
                            </div>
                            <div className="item">
                                <img src={screen5} alt="Screenshoot Five" title="Screenshoot Five" />
                            </div>
                            <div className="item">
                                <img src={screen6} alt="Screenshoot Six" title="Screenshoot Six" />
                            </div>
                            <div className="item">
                                <img src={screen7} alt="Screenshoot Seven" title="Screenshoot Seven" />
                            </div>
                            <div className="item">
                                <img src={screen1} alt="Screenshoot One" title="Screenshoot One" />
                            </div>
                            <div className="item">
                                <img src={screen2} alt="Screenshoot Two" title="Screenshoot Two" />
                            </div>
                        </OwlCarousel> 
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Screenshoot;