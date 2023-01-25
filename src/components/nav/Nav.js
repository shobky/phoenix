import logo from '../../assets/logo.jpeg'
import { MdEmail } from 'react-icons/md'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'
import './nav.css'
import { Link } from 'react-router-dom'
import { RxArrowTopRight } from 'react-icons/rx'

const Nav = () => {
    return (
        <nav id="header" className="nav">
            {/* <div className="nav_logo-section"> */}
                <img className='nav_logo-img' alt="logo" src={logo} />
            {/* </div> */}
            <div className="nav-righ-side">
                <div className="nav_links-section">
                    <a className="nav-link" href="mailto:newbiz@phoenixagency.ae"><MdEmail className="nav-link_ico" /></a>
                    <a className="nav-link" href="#j"><AiFillInstagram className="nav-link_ico" /></a>
                    <a className="nav-link" href="#j"><RiLinkedinFill className="nav-link_ico" /></a>
                </div>
                <Link className="nav_button" to='/form'>
                    Get in touch <RxArrowTopRight/></Link>
            </div>

        </nav>
    )
}

export default Nav