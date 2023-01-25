import logo from '../../assets/logo.png'
import { MdEmail } from 'react-icons/md'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'
import './nav.css'
import { Link } from 'react-router-dom'
import { FiExternalLink } from 'react-icons/fi'

const Nav = () => {
    return (
        <nav id="header" className="nav">
            <div className="nav_logo-section">
                {/* <img className='nav_logo-img' alt="logo" src={logo} /> */}
                <h1 className='nav_logo-txt'>SO HYPNOTIZING</h1>
            </div>
            <div className="nav-righ-side">
                <div className="nav_links-section">
                    <a className="nav-link" href="mailto:newbiz@phoenixagency.ae"><MdEmail className="nav-link_ico" /></a>
                    <a className="nav-link" href="#j"><AiFillInstagram className="nav-link_ico" /></a>
                    <a className="nav-link" href="#j"><RiLinkedinFill className="nav-link_ico" /></a>
                </div>
                <Link className="nav_button" to='/form'>
                    GET IN TOUCH <FiExternalLink/></Link>
            </div>

        </nav>
    )
}

export default Nav