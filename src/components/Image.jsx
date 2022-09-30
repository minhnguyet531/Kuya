import { useState, forwardRef } from "react";
import classNames from "classnames/bind";
import imagesDefault from "../assets/image/kuyaDownload.jpg";
import styles from "../assets/style/components/_image.scss";

const cx = classNames.bind(styles);
const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: customFallback = imagesDefault,
            ...props
        },
        ref
    ) => {
        const [fallback, setFallback] = useState("");

        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                className={cx("", { [className]: className })}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    }
);

export default Image;
