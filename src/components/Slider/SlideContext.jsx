import Image from "../Image";

function SlideContext({ imageSlide, indexSlide }) {
    return (
        <div>
            {imageSlide.map((slide) => (
                <Image
                    key={slide.id}
                    className={
                        slide.id === indexSlide
                            ? "image_slider active"
                            : "inactive"
                    }
                    src={slide.url}
                ></Image>
            ))}
        </div>
    );
}

export default SlideContext;
