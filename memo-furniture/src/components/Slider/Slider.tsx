import React, {Component} from 'react';
import './sliderStyles.css';
import Flickity from 'react-flickity-component';
import chair1 from '../../assets/chair1.jpg';
import chair2 from '../../assets/chairchair.webp';
import chair3 from '../../assets/chair3.jpg';

const flickityOptions = {
    initialIndex: 0
}

const items = {
    id: [1, 2, 3],
    title: ['chair1', 'chair2', 'chair3'],
    image: [chair1, chair2, chair3]
}
function Slider(){
    return(
        <Flickity
            className='Slider'
            elementType='div'
            disableImagesLoaded={false}
            options={flickityOptions}
            reloadOnUpdate
            static
            >
            {items['id'].map((index) => {
                return(
                    <div key={index} className='Plate'>
                        <>
                        <div style={{
                            backgroundImage: `url(${items['image'][index-1]})`,
                            width: 440,
                            height: 500,
                            backgroundSize: "cover",
                        }} className='plateImage'></div>
                        </>
                    </div>
                )
            })}
        </Flickity>
    );
}

export default Slider;