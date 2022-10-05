import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaAngleDown, FaRegKissWinkHeart } from "react-icons/fa";
import Image from "./Image";
import TippyHeadless from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import LogoKuya from "../assets/image/logoKuya.png";
import ResultCharacterSearch from "./ResultCharacterSearch";
import Button from "./Button";
import Menu from "./Poppers/Menu";
import { navMenuNews, navMenuUtility } from "../common/data";
import { listCharacters } from "../common/data";

function Header() {
    const [search, setSearch] = useState("");
    const [listCharactersSearch, setListCharactersSearch] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearch([1, 2, 3]);
    //     }, 5000);
    // }, []);

    // const checkLogin = false;
    const checkLogin = true;

    const handleSearchCharacter = (valueSearch) => {
        const filteredCharacters = listCharacters.filter((item) => {
            return item.name.toLowerCase().includes(valueSearch.toLowerCase());
        });
        setListCharactersSearch(() => filteredCharacters);
    };

    return (
        <header className="header">
            <div className="content content__horizontal">
                <Image
                    src={LogoKuya}
                    alt="Logo Game"
                    className="header_logo--game"
                />

                <nav className="header_nav">
                    <Link className="header_nav--item" to="/">
                        Game
                    </Link>
                    <Menu items={navMenuNews}>
                        <Link
                            className="header_nav--item flex__horizontal-includeIcon"
                            to="/news"
                        >
                            <span>News</span>
                            <FaAngleDown />
                        </Link>
                    </Menu>
                    <Link className="header_nav--item" to="/champions">
                        Champions
                    </Link>
                    <Link className="header_nav--item" to="/patchNotes">
                        Patch Notes
                    </Link>
                    <Link className="header_nav--item" to="/contact">
                        Contact
                    </Link>
                </nav>
                <TippyHeadless
                    interactive={true}
                    visible={search.length > 0}
                    render={(attrs) => (
                        <div
                            className="search_result--box"
                            tabIndex="-1"
                            {...attrs}
                        >
                            <ResultCharacterSearch
                                ListCharactersSearch={listCharactersSearch}
                            />
                        </div>
                    )}
                >
                    <div className="box_search">
                        <FaSearch className="search" />
                        <input
                            type="text"
                            placeholder="Search character..."
                            onChange={(e) => {
                                setSearch(() => e.target.value);
                                handleSearchCharacter(e.target.value);
                            }}
                        />
                    </div>
                </TippyHeadless>
                {checkLogin ? (
                    <>
                        <Tippy
                            content="Wishlist"
                            className="wish-list"
                            placement="bottom"
                        >
                            <div className="icon icon-wish">
                                <FaRegKissWinkHeart />
                            </div>
                        </Tippy>
                        <Menu items={navMenuUtility}>
                            <Image
                                src={require("../assets/image/characters/Onion.jpg")}
                                alt=""
                                className="avatar"
                            />
                        </Menu>
                    </>
                ) : (
                    <Button className="btn-login">Login</Button>
                )}
            </div>
        </header>
    );
}

export default Header;
