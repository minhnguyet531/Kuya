import React from "react";
import { Link } from "react-router-dom";
import {
    FaSearch,
    FaAngleDown,
    FaAngleRight,
    FaTwitterSquare,
    FaTiktok,
    FaFacebookSquare,
    FaInstagram,
} from "react-icons/fa";
import classNames from "classnames/bind";
import styles from "../assets/style/components/_button.scss";
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    className,
    iconLeft,
    iconRight,
    children,
    styleButton = true,
    onClick,
    ...passProps
}) {
    let Comp = "button";

    const _props = {
        onClick,
        ...passProps,
    };

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = "a";
    }
    const classes = cx(styleButton === true ? "btn" : "bg-white", {
        [className]: className,
    });
    return (
        <Comp className={classes} {..._props}>
            {iconLeft && <div className="icon">{iconLeft}</div>}
            {children}
            {iconRight && <div className="icon">{iconRight}</div>}
        </Comp>
    );
}

export default Button;
