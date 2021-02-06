import React from 'react'
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import '../icons/index'
import { CIcon, DockerIcon, ExpressIcon, JavascriptIcon, MongodbIcon, MysqlIcon, NodejsIcon, PostgresqlIcon, PythonIcon, ReactIcon, TypescriptIcon } from '../icons/index'

class Carousel extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={75}
                naturalSlideHeight={75}
                totalSlides={12}
                infinite={true}
                interval={2000}
                isPlaying={true}
                style={{width: '20%',}}
                >
                <Slider classNameAnimation="easeOut">
                    <Slide index={0}>
                        <Image>
                            <CIcon/>
                        </Image>
                    </Slide>
                    <Slide index={1}>
                        <Image src={'https://raw.githubusercontent.com/egonelbre/gophers/10cc13c5e29555ec23f689dc985c157a8d4692ab/vector/fairy-tale/witch-learning.svg'}/>
                    </Slide>
                    <Slide index={2}>
                        <Image>
                            <PythonIcon/>
                        </Image>
                    </Slide>
                    <Slide index={3}>
                        <Image>
                            <JavascriptIcon/>
                        </Image>
                    </Slide>
                    <Slide index={4}>
                        <Image>
                            <TypescriptIcon/>
                        </Image>
                    </Slide>
                    <Slide index={5}>
                        <Image>
                            <NodejsIcon/>
                        </Image>
                    </Slide>
                    <Slide index={6}>
                        <Image>
                            <ReactIcon/>
                        </Image>
                    </Slide>
                    <Slide index={7}>
                        <Image>
                            <ExpressIcon/>
                        </Image>
                    </Slide>
                    <Slide index={8}>
                        <Image>
                            <MongodbIcon/>
                        </Image>
                    </Slide>
                    <Slide index={9}>
                        <Image>
                            <PostgresqlIcon/>
                        </Image>
                    </Slide>
                    <Slide index={10}>
                        <Image>
                            <MysqlIcon/>
                        </Image>
                    </Slide>
                    <Slide index={11}>
                        <Image>
                            <DockerIcon/>
                        </Image>
                    </Slide>
                </Slider>
            </CarouselProvider>
        )
    }
}

export default Carousel