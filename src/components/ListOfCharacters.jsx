import { useEffect, useState } from "react";
import Image from "./Image";
import { listCharacters } from "../common/data";
import Button from "./Button";

function ListOfCharacters() {
    const tags = ["Green", "Pink", "Yellow"];
    const [checkTag, setCheckTag] = useState(0);
    const handleOptionTag = (index) => {
        setCheckTag(index);
    };

    const itemCharacters = listCharacters.filter(
        (character) => character.toneColor === `tone${tags[checkTag]}`
    );

    return (
        <section className="section__listOfCharacters container">
            <div className="content content__vertical">
                <div className="display_flex--horizontal">
                    <h1 className="title_header">List Characters</h1>
                    <ul className="tags display_flex--horizontal">
                        {tags.map((tag, index) => (
                            <li
                                key={index}
                                className={`tag-item text-tone${
                                    tag === "Yellow" ? `YellowBrown` : tag
                                }  ${
                                    index === checkTag
                                        ? `tag_active--${tag.toLowerCase()}`
                                        : ``
                                }`}
                                onClick={() => handleOptionTag(index)}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="list_cards">
                    {itemCharacters.map((character) => (
                        <div className="card" key={character.id}>
                            <Image
                                src={character.image}
                                alt=""
                                className="card_item card_item--front"
                            />
                            <div className="card_item card_item--back">
                                <Image
                                    src={character.image}
                                    alt=""
                                    key={character.id}
                                    className="card_image--back"
                                />
                                <h4
                                    className={`card_heading card_heading--${character.toneColor}`}
                                >
                                    {character.name}
                                </h4>
                                <div className="card_detail">
                                    <h5
                                        className={`card_title text-${character.toneColor}`}
                                    >
                                        {character.title}
                                    </h5>
                                    <Button
                                        className={`btn-add btn-add--${character.toneColor}`}
                                    >
                                        Read Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ListOfCharacters;

// SASS: BAI 40
