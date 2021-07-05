import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                RV
            </Link>
            <div className="navbar__right">
                <a
                    href="https://drive.google.com/file/d/1I-ZAtjAdJ-sKESbu-HQAx0r9ROIBHxBC/view?usp=sharing"
                    className="link1"
                    rel="noreferrer"
                    target="_blank"
                >
                    Resume
                </a>
                <Link to="/about" className="link">
                    About
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
