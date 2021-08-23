import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            setScrollValue(window.scrollY);
        };

        onScroll();
        
        window.addEventListener("scroll", onScroll);
        return () => {
          window.removeEventListener("scroll", onScroll);
        };
      }, []);

    return (
        <div className={`navbar-container ${scrollValue!=0 ? "navbar-container-scrolled" : ""}`}>
            <div className="navbar-logo-container">
                <Link href="/" passHref>
                    <img className="navbar-logo" src="/images/title-image.svg"/>
                </Link>
            </div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Education">Education</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;