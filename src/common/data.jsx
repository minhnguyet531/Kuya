//Import icon
import {
    FaSearch,
    FaAngleDown,
    FaAngleRight,
    FaTwitterSquare,
    FaTiktok,
    FaFacebookSquare,
    FaInstagram,
    FaRegKissWinkHeart,
} from "react-icons/fa";

export const listCharacters = [
    {
        id: 0,
        name: "Apple",
        toneColor: "toneYellow",
        image: require("../assets/image/characters/Apple.jpg"),
        title: "Phù thủy bí ngô",
    },
    {
        id: 1,
        name: "Beet",
        toneColor: "tonePink",
        image: require("../assets/image/characters/Beet.jpg"),
        title: "Cảnh vệ biển",
    },
    {
        id: 2,
        name: "Broccoli",
        toneColor: "toneGreen",
        image: require("../assets/image/characters/Broccoli.jpg"),
        title: "Nam vương",
    },
    {
        id: 3,
        name: "Celery",
        toneColor: "tonePink",
        image: require("../assets/image/characters/Celery.jpg"),
        title: "Thích khách",
    },
    {
        id: 4,
        name: "Daikon",
        toneColor: "toneYellow",
        image: require("../assets/image/characters/Daikon.jpg"),
        title: "Kỵ sĩ âm phủ",
    },
    {
        id: 5,
        name: "Dragon Fruit",
        toneColor: "tonePink",
        image: require("../assets/image/characters/DragonFruit.jpg"),
        title: "Lốc địa ngục",
    },
    {
        id: 6,
        name: "Egg",
        toneColor: "toneWhite",
        image: require("../assets/image/characters/Egg.jpg"),
        title: "Đọa lạc thiên sứ",
    },
    {
        id: 7,
        name: "Mango",
        toneColor: "toneYellow",
        image: require("../assets/image/characters/Mango.jpg"),
        title: "Hỏa nhẫn kim tinh",
    },
    {
        id: 8,
        name: "Napa",
        toneColor: "toneGreen",
        image: require("../assets/image/characters/Napa.jpg"),
        title: "Nghiệp hóa yêu hậu",
    },
    {
        id: 9,
        name: "Onion",
        toneColor: "toneGreen",
        image: require("../assets/image/characters/Onion.jpg"),
        title: "Vũ khí đối tượng",
    },
    {
        id: 10,
        name: "Raspberry",
        toneColor: "tonePink",
        image: require("../assets/image/characters/Raspberry.jpg"),
        title: "Mèo siêu quậy",
    },
    {
        id: 11,
        name: "Riceball",
        toneColor: "toneWhite",
        image: require("../assets/image/characters/Riceball.jpg"),
        title: "Thế tử nguyệt tộc",
    },
];

export const navMenuUtility = [
    {
        title: "View profile",
        to: "",
    },
    {
        title: "Feedback and help",
        to: "",
    },
    {
        title: "Setting",
        to: "",
    },
    {
        title: "Log out",
        to: "",
        separate: true,
    },
];

export const navMenuNews = [
    {
        title: "All",
        to: "/news/all",
    },
    {
        title: "Game Updates",
        to: "/news/updates",
    },
    {
        title: "Esports",
        to: "/news/esports",
    },
    {
        title: "Media",
        to: "/news/media",
        iconRight: <FaAngleRight />,
        subnav: {
            titleHeader: "Media",
            data: [
                {
                    type: "Media",
                    title: "Facebook",
                    to: "/news/media/facebook",
                    iconLeft: <FaFacebookSquare />,
                },
                {
                    type: "Media",
                    title: "Instagram",
                    to: "/news/media/instagram",
                    iconLeft: <FaInstagram />,
                },
                {
                    type: "Media",
                    title: "Tiktok",
                    to: "/news/media/tiktok",
                    iconLeft: <FaTiktok />,
                },
                {
                    type: "Media",
                    title: "Twitter",
                    to: "/news/media/twitter",
                    iconLeft: <FaTwitterSquare />,
                },
            ],
        },
    },
    {
        title: "Community",
        to: "/news/community",
    },
];
