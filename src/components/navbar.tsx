import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                RV
            </Link>
            <div className="navbar__right">
                <Link to="/resume" className="link link1">
                    Resume
                </Link>
                <Link to="/about" className="link">
                    About
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
