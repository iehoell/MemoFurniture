import React, {Component} from 'react';
import sliderStyles from './sliderStyles.module.scss';
import {Carousel, CarouselItem} from "react-bootstrap";
import chair1 from '../../assets/chair1.jpg';
import chair2 from '../../assets/chair2.jpg';
import chair3 from '../../assets/chair3.jpg';

function Slider(){
    return(
        <Carousel>
            <CarouselItem>
                <img src={chair1} className={sliderStyles.sliderItem} alt={'error1'}/>
            </CarouselItem>
            {/*<CarouselItem>*/}
            {/*    <img src={chair2} className={sliderStyles.sliderItem}/>*/}
            {/*</CarouselItem>*/}
            {/*<CarouselItem>*/}
            {/*    <img src={chair3} className={sliderStyles.sliderItem}/>*/}
            {/*</CarouselItem>*/}
        </Carousel>
    );
}

export default Slider;