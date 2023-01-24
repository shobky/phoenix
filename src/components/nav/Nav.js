import logo from '../../assets/logo.png'
import { MdEmail } from 'react-icons/md'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'
import './nav.css'

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav_logo-section">
                {/* <img className='nav_logo-img' alt="logo" src={logo} /> */}
                <h1 className='nav_logo-txt'>SO HYPNOTIZING</h1>
            </div>
            <div className="nav_links-section">
                {/* <a className="nav-link" href="mailto:newbiz@phoenixagency.ae"><MdEmail className="nav-link_ico" /></a> */}
                <a className="nav-link" href="#j"><AiFillInstagram className="nav-link_ico" /></a>
                <a className="nav-link" href="#j"><RiLinkedinFill className="nav-link_ico" /></a>
            </div>

        </nav>
    )
}

export default Nav