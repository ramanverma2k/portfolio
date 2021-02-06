import Typination from './animations/typination'
import Carousel from './animations/carousel'

const heroLayout = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60vh'
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
                </span>
            </h1>
        </div>
        <Carousel/>
    </div>
)

export default Hero;