import React from "react";
import '../../App.css';
import { Button } from "../Button/Button";
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='/videos/VidShop.mp4' autoPlay loop />
            <h1>FASHION BOUTIQUE</h1>
            <p>Free shipping &amp; returns on all local orders</p>
            <div className="hero-btns">
                <Button className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    SHOP NOW <i class="fas fa-cart-plus"></i>
                </Button>
                <Button className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    CONTACT <i class="fas fa-phone-square"></i>
                </Button>
            </div>
        </div>
    )
};

export default HeroSection;