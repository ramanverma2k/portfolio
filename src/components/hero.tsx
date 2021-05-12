import Social from "./social";
import "../styles/hero.css";

const Hero = () => {
    return (
        <div className="hero">
            <div className="preview__box">
                <h2 className="preview__heading">
                    Projects <hr />
                </h2>
            </div>
            <h1 className="greet">
                Hi, I'm Raman Verma
                <span>
                    <p className="info">
                        A <span style={{ color: "#ee6c4d" }}>GoLang</span>{" "}
                        fanatic,{" "}
                        <span style={{ color: "#ee6c4d" }}>Typescript</span>{" "}
                        lover,{" "}
                        <span style={{ color: "#ee6c4d" }}>Fullstack</span>{" "}
                        developer,
                        <br />
                        With a little bit of interest in{" "}
                        <span style={{ color: "#ee6c4d" }}>Deep Learning</span>.
                    </p>
                </span>
                <Social />
            </h1>
            <div className="preview__box">
                <h2 className="preview__heading">
                    Blog <hr />
                </h2>
            </div>
        </div>
    );
};

export default Hero;
