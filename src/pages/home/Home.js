import React, { useRef, useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import './home.css'
import video from '../../assets/8f70714b.mp4'
import txtSvg from '../../assets/pheonix_2.svg'
import threeWays from '../../assets/3WAYS.png'
import capabilities from '../../assets/capabilities.png'
import useOpacityOnScroll from '../../hooks/useOpacityScroll/UseOpacityOnScroll'

const Home = () => {
    const divRef = useRef(null);
    const opacity = useOpacityOnScroll(divRef);

    return (
        <div className="home smooth-scroll">
            <Nav />
            <video className="home_video" loop muted autoPlay playsInline id="myVideo">
                <source src={video} />
            </video>
            <div >
                <div id="hero" ref={divRef} style={{ opacity }} className='home_content '>
                    <img alt="phenix agency" src={txtSvg} className="home_svg-txt" />
                    <p className="home_foot-txt">
                        A CREATIVE AGENCY THAT LIVES AT THE INTERSECTION OF CLARITY AND SURPRISE.
                    </p>
                    <a href="mailto:newbiz@phoenixagency.ae"
                     className="home_button">  GET IN TOUCH</a>
                </div>
            </div>
           
        </div>
    )
}

export default Home