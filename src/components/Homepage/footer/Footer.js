import React, {Fragment} from 'react';
import $ from 'jquery';

import logoForFooter from '../../../images/logo-w.png';

class Footer extends React.Component {
    state = {  }

    componentDidMount() {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
              $('.scroll-top').fadeIn(600);
            } else {
              $('.scroll-top').fadeOut(600);
            }
          });
          $('.scroll-top').on("click", function () {
            $("html,body").animate({
              scrollTop: 0
            }, 500);
            return false;
          });
    }
    render() { 
        return (
            <Fragment>
                <footer className="footer-section section-gap-half">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 footer-left">
                                <a href="www.facebook.com">
                                    <img src={logoForFooter} alt="Home Page" />
                                </a>
                                <p className="copyright-text">&copy; 2018 Design With
                                    <i className="fa fa-heart" aria-hidden="true"></i> By
                                    <a href="http://dopetheme.com" target="_blank">Dope Theme</a>
                                </p>
                            </div>
                            <div className="col-lg-7">
                                <ul id="social">
                                    <li>
                                        <a target="_blank" href="www.facebook.com">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="www.facebook.com">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="www.facebook.com">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="www.facebook.com">
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="footer-menu">
                                    <li>
                                        <a href="www.facebook.com">Affiliate Program</a>
                                    </li>
                                    <li>
                                        <a href="www.facebook.com">Terms &amp; Conditionss</a>
                                    </li>
                                    <li>
                                        <a href="www.facebook.com">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="www.facebook.com">Refund Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="scroll-top">
                    <i className="ti-angle-up"></i>
                </div>
            </Fragment>
        );
    }
}
 
export default Footer;