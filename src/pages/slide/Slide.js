import React, { useState, useEffect } from 'react'
import './slide.css'
import './home.css'
import video from '../../assets/8f70714b.mp4'
import txtSvg from '../../assets/text.jpeg'
import threeWays from '../../assets/3WAYS.png'
import trademark from '../../assets/trademark.jpeg'
import capabilities from '../../assets/capabilities.png'
import { Link } from 'react-router-dom'


const Slide = () => {
    const [qty, setQty] = useState(1)
    const [startFlag, setStartFlag] = useState(true)
    const [initialScroll, setInitialScroll] = useState(window.scrollY)
    const [sectionStick, setSectionStick] = useState(null);
    const [sectionsQty, setSectionsQty] = useState(null);
    const TIME_OUT = 600
    useEffect(() => {
        const sections = document.querySelectorAll('section')
        setSectionsQty(sections.length)
        const stick = document.querySelector('.section-stick')
        setSectionStick(stick)
        Array(sectionsQty)
            .fill()
            .forEach(() => {
                stick.innerHTML = stick.innerHTML + '<div class="stick"></div>'
            })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [qty, startFlag, initialScroll])

    const handleScroll = () => {
        if (startFlag) {
            const scrollDown = window.scrollY >= initialScroll
            const scrollLimit = qty >= 1 && qty <= sectionsQty
            // Verify that the scroll does not exceed the number of sections
            if (scrollLimit) {
                document.body.style.overflowY = 'hidden' // Lock el scroll
                if (scrollDown && qty < sectionsQty) {
                    const main = document.querySelector(`section.s${qty}`)
                    const next = document.querySelector(`section.s${qty + 1}`)
                    main.style.transform = 'translateY(-100vh)'
                    next.style.transform = 'translateY(0)'
                    setQty(qty + 1)
                    document.getElementById('header').classList.add('nav_header__scroll');

                } else if (!scrollDown && qty > 1) {
                    const main = document.querySelector(`section.s${qty - 1}`)
                    const next = document.querySelector(`section.s${qty}`)
                    main.style.transform = 'translateY(0)'
                    next.style.transform = 'translateY(100vh)'
                    setQty(qty - 1)
                    document.getElementById('header').classList.remove('nav_header__scroll');


                }
                // Scroll progressbar
                const active = sectionStick.querySelector('.stick.active')
                active.style.top = (62 + 30) * (qty - 1) + 'px'
            }
            console.log('SLIDE', qty)
            // Wait for the scrolling to finish to reset the values
            setTimeout(() => {
                setInitialScroll(window.scrollY)
                setStartFlag(true)
                document.body.style.overflowY = 'scroll' // Unlock scroll
            }, TIME_OUT)
            setStartFlag(false)
        }
        // Keep scrollbar in the middle of the viewport
        window.scroll(0, window.screen.height)
    }

    // let startY; // will hold the starting Y position of the touch

    // function handleTouchStart(event) {
    //     // store the starting Y position of the touch
    //     startY = event.touches[0].clientY;
    // }

    // function handleTouchEnd(event) {

    //     const endY = event.changedTouches[0].clientY; // ending Y position of the touch

    //     // calculate the distance moved
    //     const distance = startY - endY;

    //     // check if the user swiped up or down
    //     if (distance > 0) {
    //         // user swiped up
    //         alert('hi')
    //         document.getElementById('header').classList.add('nav_header__scroll');
    //     } else {
    //         // user swiped down
    //         document.getElementById('header').classList.remove('nav_header__scroll');

    //     }
    // }

    return (
        <div className="layout">
            <div style={{ display: "none" }} className="section-stick">
                <div className="stick active"></div>
            </div>
            <video className="home_video" loop muted autoPlay playsInline id="myVideo">
                <source src={video} />
            </video>
            <section className="s1">
                <div id="hero" className='home_content '>
                    <div className="home_text-igms">
                        <img alt="phenix agency" src={txtSvg} className="home_svg-txt" />
                        <img alt="phenix agency" src={trademark} className="home_svg-ico" />
                    </div>
                    <p className="home_foot-txt">
                        INDEPENDENTLY OWNED CREATIVE STUDIO THAT LIVES AT THE INTERSECTION OF SCIENCE
                        AND VISUAL ARTS, <br /> HYPNOTIZING CUSTOMERS THROUGH MEMORABLE EXPERIENCES KNOWN TO
                        BUILD LOYALTY LEADING BRANDS</p>
                </div>
            </section>
            <section className="s2">
                <div id='neDiv' className='home_content2 '>
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
            </section>
            {/* <section className="s3">Section Three</section>
            <section className="s4">Section Four</section> */}
        </div>
    )
}

export default Slide