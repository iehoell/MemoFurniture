import React, {Component} from 'react';
import './sliderStyles.css';
import Flickity from 'react-flickity-component';
import chair1 from '../../assets/chair1.jpg';
import chair2 from '../../assets/chair2.jpg';
import chair3 from '../../assets/chair3.jpg';
import _default from "chart.js/dist/plugins/plugin.tooltip";

const flickityOptions = {
    initialIndex: 2
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
                            width: 400,
                            height: 500,
                            backgroundSize: "cover",
                        }}></div>
                        </>
                    </div>
                )
            })}
        </Flickity>
    );
}

export default Slider;