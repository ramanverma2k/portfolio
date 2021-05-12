import "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="logo" href="/">
                RV
            </a>
            <div className="navbar__right">
                <a className="link link1" href="/">
                    Resume
                </a>
                <a className="link" href="/">
                    About
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
