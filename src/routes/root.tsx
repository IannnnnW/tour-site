import '../styles.css'
import Logo from '../assets/logo-light.png'
import { Link, Outlet } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logoLight from "../assets/logo-light.png"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineConnectWithoutContact, MdOutlineMailOutline, MdOutlinePermPhoneMsg } from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';
import { FaQuestion } from 'react-icons/fa6';
import { LuPalmtree } from "react-icons/lu";
import { GoInfo } from "react-icons/go";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function Root(){
    return(
        <>
            <nav id="navbar">
                <img src={Logo} className='safaris-logo'/>
                <ul id='nav-links'>
                    <li><Link to={'/'}><LuPalmtree/> Home</Link></li>
                    <li><Link to={'/about'}><GoInfo/> About</Link></li>
                    <li><Link to={'/contact-us'}><MdOutlineLocalPhone/> Contact Us</Link></li>
                </ul>
            </nav>
            <Outlet/>
            <footer id='footer'>
               <div className='footer-container'>
                    <div className='footer-left'>
                            <img src={logoLight} className='footer-logo'/>
                            <div className='footer-socials'>
                                <span className='socials'><FaFacebookF/></span>
                                <span className='socials'><FaInstagram/></span>
                                <span className='socials'><FaYoutube/></span>
                            </div>
                    </div>
                    <div className='footer-right'>
                        <div className='footer-explore'>
                            <h4>Navigation</h4>
                            <ul>
                                <li><IoHomeOutline /> Home</li>
                                <li><FaQuestion /> About Us</li>
                                <li><MdOutlineConnectWithoutContact /> Contact</li>
                            </ul>
                        </div>
                        <div className='footer-contact'>
                            <h4>Contact</h4>
                            <ul>
                                <li><MdOutlinePermPhoneMsg />+256 78685 1800</li>
                                <li><MdOutlineMailOutline />info@kabebasafaris.com</li>
                                <li><CiLocationOn/>21 King Street Melbrone, 3000, Australia</li>
                            </ul>
                        </div>
                    </div>
               </div>
               <div className='footer-copyrights'>
                    Copyright &copy; 2024. Wasukira Ian. All Rights Reserved.
               </div>
            </footer>
        </>
    )
}