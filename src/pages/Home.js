import React from 'react'
import Nav from '../components/nav/Nav'
import './home.css'
import video from '../assets/8f70714b.mp4'
import txtSvg from '../assets/pheonix_2.svg'
import { MdEmail } from 'react-icons/md'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'

const Home = () => {
    return (
        <div className="home">
            <Nav />
            <div>
                <video className="home_video" loop muted autoPlay playsInline id="myVideo">
                    <source src={video} />
                </video>
                <div className='home_content'>
                    <img alt="phenix agency" src={txtSvg} className="home_svg-txt" />
                    <p className="home_foot-txt">
                        A CREATIVE AGENCY THAT LIVES AT THE INTERSECTION OF CLARITY AND SURPISE.
                    </p>
                    <div className="nav_links-section">
                        <a className="nav-link" href="mailto:newbiz@phoenixagency.ae"><MdEmail className="nav-link_ico" /></a>
                        <a className="nav-link" href="#j"><AiFillInstagram className="nav-link_ico" /></a>
                        <a className="nav-link" href="#j"><RiLinkedinFill className="nav-link_ico" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home