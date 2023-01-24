import React, { useRef, useEffect } from 'react'
import Nav from '../../components/nav/Nav'
import './home.css'
import video from '../../assets/8f70714b.mp4'
import txtSvg from '../../assets/pheonix_2.svg'
import { MdEmail } from 'react-icons/md'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'
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
            <div id="hero" ref={divRef} style={{ opacity }}>

                <div className='home_content '>
                    <img alt="phenix agency" src={txtSvg} className="home_svg-txt" />
                    <p className="home_foot-txt">
                        A CREATIVE AGENCY THAT LIVES AT THE INTERSECTION OF CLARITY AND SURPRISE.
                    </p>
                    <div className="nav_links-section">
                        <a className="nav-link" href="mailto:newbiz@phoenixagency.ae"><MdEmail className="nav-link_ico" /></a>
                        <a className="nav-link" href="#j"><AiFillInstagram className="nav-link_ico" /></a>
                        <a className="nav-link" href="#j"><RiLinkedinFill className="nav-link_ico" /></a>
                    </div>
                </div>


            </div>
            <div className='home_content2 '>
                <div className="home-c2-ls">
                    <img className="home-threeWays__img" alt="" src={threeWays} />
                    <div>
                        <article className='home-c2-rs_article'>

                            <p className="home-c2-rs_article_header">Strategic Plans & Creative Projects</p>
                            If you're ready to grow your audience and increase your engagement,
                            we can help. We'll work with you to build strategic plans that flesh out your
                            vision and target goals. Then, we'll create tools to reach those goals.
                        </article>
                        <article className='home-c2-rs_article'>

                            <p className="home-c2-rs_article_header">Long-Term Partnership</p>
                            If you're looking for ongoing creativity, we recommend forging a long-term partnership
                            with us. We become your organization's marketing arms, continually providing strategy
                            and design that support your brand's goals while keeping things fresh and meaningful.
                        </article>
                        <article className='home-c2-rs_article'>

                            <p className="home-c2-rs_article_header"> Consulting & Workshops</p>
                            Workshops are a great way to infuse your brand with new energy and empower your team with
                            knowledge. One-off workshops may do the trick, or you can opt for a series or a longer-term
                            mentorship program. We also offer customized consulting packages that home in on your specific
                            needs.
                        </article>
                        <article className='home-c2-rs_article'>
                        </article>
                    </div>

                </div>
                <div className="home-c2-rs">
                    <img alt='capabilities' className="home-c2-rs_img" src={capabilities} />

                    <div className="home-c2-ls_flex-list">
                        <ul className="home-c2_ul">
                            <p className="home-c2_list-item__head">Strategy</p>
                            <li className="home-c2_list-item">Advertising Strategy</li>
                            <li className="home-c2_list-item">Brand Strategy</li>
                            <li className="home-c2_list-item">Campaign Strategy</li>
                            <li className="home-c2_list-item">Content Strategy</li>
                            <li className="home-c2_list-item">User Profiles & Journeys</li>
                            <li className="home-c2_list-item">C.O.R.E Discovery</li>
                            <li className="home-c2_list-item">Competitive Audit</li>
                        </ul>
                        <ul className="home-c2_ul">
                            <p className="home-c2_list-item__head">Branding & Design</p>
                            <li className="home-c2_list-item">Brand Development</li>
                            <li className="home-c2_list-item">Logo & Visual Identity</li>
                            <li className="home-c2_list-item">Brand Guidelines</li>
                            <li className="home-c2_list-item">Naming & Messaging</li>
                            <li className="home-c2_list-item">Marketing Collateral</li>
                            <li className="home-c2_list-item">Environmental Design</li>
                            <li className="home-c2_list-item">Packaging Design</li>
                        </ul>
                        <ul className="home-c2_ul">
                            <p className="home-c2_list-item__head">Development</p>
                            <li className="home-c2_list-item">Website & App Design</li>
                            <li className="home-c2_list-item">UI & UX</li>
                            <li className="home-c2_list-item">Full Stack Development</li>
                            <li className="home-c2_list-item">Experiential Production</li>
                            <li className="home-c2_list-item">Interactive Production</li>
                            <li className="home-c2_list-item">CMS Implementation</li>
                            <li className="home-c2_list-item">AR & VR</li>
                        </ul>
                        <ul className="home-c2_ul">
                            <p className="home-c2_list-item__head">Production</p>
                            <li className="home-c2_list-item">Animation & Motion</li>
                            <li className="home-c2_list-item">Illustration</li>
                            <li className="home-c2_list-item">Product Photography</li>
                            <li className="home-c2_list-item">Script Development</li>
                            <li className="home-c2_list-item">Storyboarding</li>
                            <li className="home-c2_list-item">Live Action Production</li>
                            <li className="home-c2_list-item">VFX & Post Production</li>
                        </ul>



                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home