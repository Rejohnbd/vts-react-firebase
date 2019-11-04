import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

import team1 from '../../../images/team/team1.jpg';
import team2 from '../../../images/team/team2.jpg';
import team3 from '../../../images/team/team3.jpg';
import team4 from '../../../images/team/team4.jpg';
import team5 from '../../../images/team/team5.jpg';
import team6 from '../../../images/team/team6.jpg';

class Team extends React.Component {
    state = {
        options: {
            items: 4,
            loop: true,
            margin: 30,
            dots: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        }
    }
    render() { 
        return (
            <section className="team-section section-gap-full">
                <div className="container">
                    <div className="section-title">
                        <h2 className="text-center">Our Team</h2>
                        <p className="text-center">Intoducing the Potential Team.</p>
                    </div>
                    <div className="row">
                        <OwlCarousel
                            className="team-carusel  owl-carousel" 
                            id="team-carusel"
                            {...this.state.options}
                        >
                            <div className="single-team item">
                                <img className="img-fluid" src={team1} alt="Team Person" />
                                <div className="team-content">
                                    <h4>Foto Sushi</h4>
                                    <ul>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-facebook"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-tumblr-alt"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-linkedin"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-team item">
                                <img className="img-fluid" src={team2} alt="Team Person" />
                                <div className="team-content">
                                    <h4>Philipe Cavalcante</h4>
                                    <ul>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-facebook"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-tumblr-alt"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-linkedin"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-team item">
                                <img className="img-fluid" src={team3} alt="Team Person" />
                                <div className="team-content">
                                    <h4>Cristian Newman</h4>
                                    <ul>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-facebook"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-tumblr-alt"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-linkedin"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-team item">
                                <img className="img-fluid" src={team4} alt="Team Person" />
                                <div className="team-content">
                                    <h4>Conor Sexton</h4>
                                    <ul>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-facebook"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-tumblr-alt"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-linkedin"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-team item">
                                <img className="img-fluid" src={team5} alt="Team Person" />
                                <div className="team-content">
                                    <h4>Pete Bellis</h4>
                                    <ul>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-facebook"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-tumblr-alt"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-linkedin"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-team item">
                                <img className="img-fluid" src={team6} alt="Team Person" />
                                <div className="team-content">
                                    <h4>Tanja Heffner</h4>
                                    <ul>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-facebook"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-tumblr-alt"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-linkedin"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-team item">
                                <img className="img-fluid" src={team1} alt="Team Person" />
                                <div className="team-content">
                                    <h4>Foto Sushi</h4>
                                    <ul>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-facebook"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-tumblr-alt"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-linkedin"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-team item">
                                <img className="img-fluid" src={team2} alt="Team Person" />
                                <div className="team-content">
                                    <h4>Philipe Cavalcante</h4>
                                    <ul>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-facebook"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-tumblr-alt"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-linkedin"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-team item">
                                <img className="img-fluid" src={team3} alt="Team Person" />
                                <div className="team-content">
                                    <h4>Cristian Newman</h4>
                                    <ul>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-facebook"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-tumblr-alt"></span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="www.facebook.com">
                                                <span className="ti-linkedin"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div> 
                </div>
            </section>
        );
    }
}
 
export default Team;