import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Subscribe to be the first to receive our new arrival
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe whenever you feel like.
                </p>
                <div className="input-areas">
                    <form>
                        <input type='email' name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>HELP &amp; INFORMATION</h2>
                        <Link to='/sign-up'>Help</Link>
                        <Link to='/sign-up'>Track order</Link>
                        <Link to='/sign-up'>Delivery &amp; returns</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>ABOUT FASHION</h2>
                        <Link to='/sign-up'>About us</Link>
                        <Link to='/sign-up'>Careers at FASHION</Link>
                        <Link to='/sign-up'>Corporate responsability</Link>
                        <Link to='/sign-up'>Investors&#180; site</Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>MORE FROM FASHION</h2>
                        <Link to='/sign-up'>Mobile and FASHION apps</Link>
                        <Link to='/sign-up'>Gift vouchers</Link>
                        <Link to='/sign-up'>FASHION Marketplace</Link>
                        <Link to='/sign-up'>Black Friday</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>SOCIAL MEDIA</h2>
                        <Link to='/sign-up'>Instagram</Link>
                        <Link to='/sign-up'>Facebook</Link>
                        <Link to='/sign-up'>Youtube</Link>
                        <Link to='/sign-up'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            FASHION <i className="fas fa-hat-cowboy-side"></i>
                        </Link>
                    </div>
                    <small className="website-rights">FASHION © 2022</small>
                    <div className="social-icons">
                        <Link 
                          className="social-icon-link facebook"
                          to='/'
                          target='_blank'
                          aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link 
                          className="social-icon-link instagram"
                          to='/'
                          target='_blank'
                          aria-label="Instagram"
                        >
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link 
                          className="social-icon-link youtube"
                          to='/'
                          target='_blank'
                          aria-label="Youtube"
                        >
                            <i className="fab fa-youtube" />
                        </Link>
                        <Link 
                          className="social-icon-link twitter"
                          to='/'
                          target='_blank'
                          aria-label="Twitter"
                        >
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link 
                          className="social-icon-link linkedin"
                          to='/'
                          target='_blank'
                          aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer