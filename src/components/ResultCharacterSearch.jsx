import React from "react";
import Image from "./Image";
// import { listCharacters } from "../common/data";
function ResultCharacterSearch({ ListCharactersSearch }) {
    console.log(ListCharactersSearch);

    return (
        <div className="search-items">
            <h2>Charaters</h2>
            {ListCharactersSearch.map((character) => (
                <div className="search-item" key={character.id}>
                    <Image
                        className="avatar"
                        src={character.image}
                        alt={character.name}
                    />
                    <div className="info-item">
                        <h1 className="name-item">{character.name}</h1>
                        <h4 className="title-item">{character.title}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ResultCharacterSearch;
