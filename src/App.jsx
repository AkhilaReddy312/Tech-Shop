import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import Banner from "./Carousel/Banner";
import Featured from "./Components/Featured-Products/Featured";
import TopProducts from "./Components/Top-Products/TopProducts";
import OurAdvantages from "./Components/OurAdvantages/OurAdvantages";


function App() {
    return (
        <BrowserRouter>
            <Header />

            <Banner />

            <Featured />

            <TopProducts />

            <OurAdvantages />

            <Footer />
        </BrowserRouter>
    );
}

export default App;
