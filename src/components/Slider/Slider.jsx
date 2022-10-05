import React, { useEffect } from "react";
import { useState } from "react";
import SlideContext from "./SlideContext";
import Arrows from "./Arrows";
import Dots from "./Dots";
import { ImageSlide } from "./ImageSlide";
function Slider() {
    const len = ImageSlide.length - 1;
    const [indexSlide, setIndexSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndexSlide(indexSlide === len ? 0 : indexSlide + 1);
        }, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indexSlide]);
    return (
        <section className="section__slider">
            <SlideContext imageSlide={ImageSlide} indexSlide={indexSlide} />
            <Arrows
                prevSlide={() => {
                    setIndexSlide(indexSlide < 1 ? len : indexSlide - 1);
                }}
                nextSlide={() => {
                    setIndexSlide(indexSlide === len ? 0 : indexSlide + 1);
                }}
            />
            <Dots
                imageSlide={ImageSlide}
                indexSlide={indexSlide}
                onclick={(indexSlide) => {
                    setIndexSlide(indexSlide);
                }}
            />
        </section>
    );
}

export default Slider;
