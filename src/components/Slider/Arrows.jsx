import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function Arrows({ prevSlide, nextSlide }) {
    return (
        <div className="arrows">
            <FaArrowLeft className="arrow arrow-left" onClick={prevSlide} />
            <FaArrowRight className="arrow arrow-right" onClick={nextSlide} />
        </div>
    );
}

export default Arrows;
