import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <Link href="/">
                    <a className={styles.nav__logo}>Raman Verma</a>
                </Link>
            </div>
            <div>
                <Link href="/projects">
                    <a className={styles.nav__links}>Projects</a>
                </Link>
                <Link href="/blog">
                    <a className={styles.nav__links}>Blog</a>
                </Link>
                <Link href="/about">
                    <a className={styles.nav__links}>About me</a>
                </Link>
                <Link href="/contact">
                    <a className={styles.nav__links}>Contact</a>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
