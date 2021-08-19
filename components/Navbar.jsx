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
                    <li><Link href="/" passHref>Home</Link></li>
                    <li><Link href="/" passHref>About</Link></li>
                    <li><Link href="/" passHref>Education</Link></li>
                    <li><Link href="/" passHref>Skills</Link></li>
                    <li><Link href="/" passHref>Projects</Link></li>
                    <li><Link href="/" passHref>Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;