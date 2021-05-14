import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <span>
                <a href="https://www.github.com/ramanverma2k">© ramanverma2k</a>
            </span>
            <span>
                Made with <span style={{ color: "#ee6c4d" }}>React</span>,{" "}
                <span style={{ color: "#ee6c4d" }}>Typescript</span> and{" "}
                <span style={{ color: "#ee6c4d" }}>❤</span>
            </span>
        </footer>
    );
};

export default Footer;
