import React from 'react'
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

class Carousel extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={75}
                naturalSlideHeight={50}
                totalSlides={2}
                infinite={true}
                interval={2000}
                isPlaying={true}
                style={{width: '30%'}}
                >
                <Slider classNameAnimation="easeOut">
                    <Slide index={0}>
                        <Image src={"https://www.vectorlogo.zone/logos/golang/golang-official.svg"}/>
                    </Slide>
                    <Slide index={1}>
                        <Image src={"https://www.vectorlogo.zone/logos/python/python-icon.svg"}/>
                    </Slide>
                </Slider>
            </CarouselProvider>
        )
    }
}

export default Carousel