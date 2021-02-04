import Typination from './typination'

const heroStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // border: '1px solid white',
    marginLeft: '10px'
}

const Hero = () => (
    <div style={heroStyle}>
        <h1>Hello👋,<span>
                <p>
                    I&apos;m Raman Verma, A<br/>
                    <Typination/>
                </p>
            </span>
        </h1>
    </div>
)

export default Hero;