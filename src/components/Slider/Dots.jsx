import React from "react";

function Dots({ imageSlide, indexSlide, onclick }) {
    return (
        <div className="dots">
            {imageSlide.map((slide) => (
                <div
                    key={slide.id}
                    className={
                        slide.id === indexSlide
                            ? "dot-item dot-active"
                            : "dot-item"
                    }
                    onClick={() => onclick(slide.id)}
                ></div>
            ))}
        </div>
    );
}

export default Dots;
