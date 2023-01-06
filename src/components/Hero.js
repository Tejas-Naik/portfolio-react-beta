import React from 'react';
import { HeroSection } from './styles/Hero.styled';

function Hero() {
    return (
        <div className='container'>
            <HeroSection>
                <span className='subheading'>Hii, my name is</span>
                <h1 className='heading-primary'>Tejas Naik.</h1>
                <h1 className='heading-primary fade'>I build things for the web.</h1>
                <p className='description'>
                    I’m a software engineer specializing in building
                    (and occasionally designing) exceptional digital
                    experiences. Currently, I’m focused on building
                    accessible, human-centered products at Upstatement.
                </p>
                <p>
                    <a href="/" className='btn btn--outline'>Contact me</a>
                </p>
            </HeroSection>
        </div>
    )
}

export default Hero;