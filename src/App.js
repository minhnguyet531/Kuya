import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider/Slider";
import ListOfCharacters from "./components/ListOfCharacters";
import Footer from "./components/Footer";
import "./App.scss";
function App() {
    return (
        <div className="App">
            <Header />
            <Slider />
            <ListOfCharacters />
            <Footer />
            <Routes>
                <Route path="/" element="" />
                <Route path="/news" element="" />
                <Route path="/champions" element="" />
                <Route path="/patchNotes" element="" />
                <Route path="/contact" element="" />
            </Routes>
        </div>
    );
}

export default App;
