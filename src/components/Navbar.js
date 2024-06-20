import React from 'react';
// import logo from '../images/logo.svg'
import { myNavList, socialLink } from '../data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
    return (<>
        <div>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={"./images/logo.svg"} className="nav-logo" alt="Tutorial" />
                        <button type="button" className="nav-toggle" id="nav-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <ul className="nav-links" id="nav-links">
                        {myNavList.map((navlist) => {
                            return (<li key={navlist.id}>
                                <Link to={navlist.href} className="nav-link">
                                    {navlist.text}
                                </Link>
                            </li>)
                        })}
                    </ul>
                    <ul className="nav-icons">
                        {/* {socialLink.map((item) => {
                            <li key={item.id}>
                                <a href={item.href} target="_blank" className="twitter social">
                                    <FontAwesomeIcon icon={item.icon} size="2x" />
                                </a>
                            </li>
                        })} */}
                        <li>
                            <a href="https://www.twitter.com" target="_blank" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com" target="_blank" className="facebook socialnav-icon">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </>
    )
}

export default Navbar
