import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import Button from "../Button";
function HeaderSubnav({ titleHeader, onBack }) {
    return (
        <Button
            styleButton={false}
            className="flex__horizontal-includeIcon header_subnav"
            iconLeft={<FaAngleLeft />}
            onClick={onBack}
        >
            <h4>{titleHeader}</h4>
        </Button>
    );
}

export default HeaderSubnav;
