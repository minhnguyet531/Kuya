import React from "react";
import Image from "./Image";
// import { listCharacters } from "../common/data";
function ResultCharacterSearch() {
    return (
        <div className="search-items">
            <h2>Charaters</h2>
            <div className="search-item">
                <Image
                    className="avatar"
                    src={require("../assets/image/characters/Apple.jpg")}
                    alt=""
                />
                <div className="info-item">
                    <h1 className="name-item">Apple</h1>
                    <h4 className="title-item">Test demo skin</h4>
                </div>
            </div>
            <div className="search-item">
                <Image
                    className="avatar"
                    src={require("../assets/image/characters/Apple.jpg")}
                    alt=""
                />
                <div className="info-item">
                    <h1 className="name-item">Apple</h1>
                    <h4 className="title-item">Test demo skin</h4>
                </div>
            </div>
        </div>
    );
}

export default ResultCharacterSearch;
