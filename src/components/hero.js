import Typination from './animations/typination'
import Carousel from './animations/carousel'
import Social from './social'

const heroLayout = {
    display: 'flex',
    justifyContent: 'space-between',
    // border: '1px solid white',
    marginTop: '3rem'
}

const heroStyle = {
    display: 'flex',
    alignItems: 'center',
    // border: '1px solid white',
    marginLeft: '10px'
}

const Hero = () => (
    <div style={heroLayout}>
        <div style={heroStyle}>
            <h1>Hello👋,<span>
                    <p>
                        I&apos;m Raman Verma, A<br/>
                        <Typination/>
                    </p>
                    <Social/>
                </span>
            </h1>
        </div>
        <Carousel/>
    </div>
)

export default Hero;