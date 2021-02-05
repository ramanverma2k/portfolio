import Typination from './animations/typination'
import Carousel from './animations/carousel'
import Social from './social'

const heroLayout = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '3rem'
}

const heroStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px'
}

const Hero = () => (
    <div style={heroLayout}>
        <div style={heroStyle}>
            <h1>Hello👋,<span>
                    <code>
                        I&apos;m Raman Verma, A<br/>
                    </code>
                    <Typination/>
                    <Social/>
                </span>
            </h1>
        </div>
        <Carousel/>
    </div>
)

export default Hero;