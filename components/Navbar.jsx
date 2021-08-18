
const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-logo-container">
                <a href="/" passHref>
                    <img className="navbar-logo" src="/images/title-image.svg"/>
                </a>
            </div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li><a href="/" passHref>Home</a></li>
                    <li><a href="/" passHref>About</a></li>
                    <li><a href="/" passHref>Education</a></li>
                    <li><a href="/" passHref>Skills</a></li>
                    <li><a href="/" passHref>Projects</a></li>
                    <li><a href="/" passHref>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;