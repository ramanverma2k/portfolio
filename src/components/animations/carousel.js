import React from 'react'
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

class Carousel extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={75}
                naturalSlideHeight={30}
                totalSlides={2}
                infinite={true}
                interval={2000}
                isPlaying={true}
                style={{width: '20%'}}
                >
                <Slider classNameAnimation="easeOut">
                    <Slide index={0}>
                        <Image style={{height: '100px'}} src={"https://www.vectorlogo.zone/logos/golang/golang-official.svg"}/>
                    </Slide>
                    <Slide index={1}>
                        <Image style={{height: '100px'}} src={"https://www.vectorlogo.zone/logos/python/python-icon.svg"}/>
                    </Slide>
                </Slider>
            </CarouselProvider>
        )
    }
}

export default Carousel