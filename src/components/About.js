import React from 'react';
import { SectionAbout } from "./styles/About.styled";

function About() {
    return (
        <SectionAbout>
            <div class="container container-about">
                <div className="container-text">
                    <h3 className='heading-tertiary'><span>01.</span> About Me</h3>
                    <p className="description">
                        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <p className="description">
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                    </p>
                    <p className="description">
                        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                    </p>

                    <div className="skills">
                        <p className="description">Here are a few technologies I’ve been working with recently:</p>
                        <ul className="skills-list">
                            <li><span>▹</span>Html, CSS</li>
                            <li><span>▹</span>JavaScript</li>
                            <li><span>▹</span>React</li>
                            <li><span>▹</span>Python</li>
                            <li><span>▹</span>Flask</li>
                            <li><span>▹</span>API's</li>
                        </ul>
                    </div>
                </div>
                <div className='container-img'>
                    <img src="https://pbs.twimg.com/profile_images/1546160607786778625/X1i2Leku_400x400.jpg" alt="profile" />
                </div>
            </div>
        </SectionAbout>
    )
}

export default About;