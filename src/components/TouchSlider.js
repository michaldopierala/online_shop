import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TouchSlider({ images }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        swipeToSlide: true,
        touchThreshold: 10,
        arrows: false // Set to true if you want arrows
    };

    return (
        <div className='TouchSlider'>
        {/* // <div className='Testing'> */}
            <Slider className='Slider' {...settings}>
                {images.map((image, index) => {
                    return (
                        <div key={index} className='container'>
                            <img src={image} alt="Image" />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

