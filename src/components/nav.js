import "./styles/btn.css";

const navStyle = {
    display: "flex",
    justifyContent: "flex-end",
};

const Navbar = () => (
    <nav style={navStyle}>
        <div>
            <button
                className="btn"
                type="button"
                onClick={() =>
                    window.open("https://www.github.com/ramanverma2k/portfolio")
                }
            >
                Source
            </button>
        </div>
    </nav>
);

export default Navbar;
