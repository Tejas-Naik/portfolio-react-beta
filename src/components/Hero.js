import React from 'react';
import { HeroSection } from './styles/Hero.styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

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
                <div className='links-left'>
                    <a href="/" className='link'><GitHubIcon className='link-icon' /></a>
                    <a href="/" className='link'><InstagramIcon className='link-icon' /></a>
                    <a href="/" className='link'><TwitterIcon className='link-icon' /></a>
                    <a href="/" className='link'><LinkedInIcon className='link-icon' /></a>
                    <a href="/" className='link'><FacebookIcon className='link-icon' /></a>
                    <div class="vl"></div>
                </div>
                <div className='links-right'>
                    <a className='link email' href="/">rntejas2005@gmail.com</a>
                    <div className="vl"></div>
                </div>
            </HeroSection>
        </div>
    )
}

export default Hero;