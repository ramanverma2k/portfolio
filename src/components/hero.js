import Typination from "./animations/typination";
import Carousel from "./animations/carousel";

const heroLayout = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "60vh",
};

const heroStyle = {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
    fontFamily: "Quicksand",
    fontSize: "20px",
};

const Hero = () => (
    <div style={heroLayout}>
        <div style={heroStyle}>
            <h1>
                Hello👋
                <span>
                    <p>
                        I&apos;m Raman Verma, A<br />
                    </p>
                    <Typination />
                </span>
            </h1>
        </div>
        <Carousel />
    </div>
);

export default Hero;
