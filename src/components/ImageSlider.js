import React, { useState } from 'react';

const ImageSlider = (props) => {

    const images = props.img
    const [current, setCurrent] = useState(0);
    const length = images.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    const goToSlide = index => {
        setCurrent(index);
    };

    if (!Array.isArray(images) || images.length <= 0) {
        return null;
    }

    return (
        <section className="ImageSlider">
            <div className="thumbnail-container">
                {images.map((image, index) => {
                    return (
                        <img
                            key={index}
                            src={image}
                            alt="thumbnail"
                            className={index === current ? 'thumbnail active' : 'thumbnail'}
                            onClick={() => goToSlide(index)}
                        />
                    );
                })}
            </div>
            <div className='mainImage'>
                <button className="left-arrow" onClick={prevSlide}>
                    <i class="fas fa-chevron-left"></i>
                </button>
                {images.map((image, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <img src={image} alt="carousel" className="image" />
                            )}
                        </div>
                    );
                })}
                <button className="right-arrow" onClick={nextSlide}>
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </section>
    );
};

export default ImageSlider;
