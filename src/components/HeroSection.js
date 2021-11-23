import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
import backgroundVideo from '../videos/video-2.mp4'

function HeroSection() {
    return (
        <div className="hero-container">
            <video autoPlay loop muted>
                <source src={backgroundVideo} type='video/mp4'/>
            </video>
            <h1>Join VaRBz
                streaming platform
            </h1>
            <p>What are you waiting for</p>
            <div className="hero-btns">
                <Button
                redirect="/sign-up"
                className="btn"
                buttonSize='btn--large'
                buttonStyle='btn--outline'>
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection