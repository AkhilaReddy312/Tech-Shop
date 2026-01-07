import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import Banner from "./Carousel/Banner";


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Banner />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
