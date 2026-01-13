import { Routes, Route } from "react-router-dom";

import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

import Banner from "./Components/Carousel/Banner";
import Featured from "./Components/Featured-Products/Featured";
import TopProducts from "./Components/Top-Products/TopProducts";
import OurAdvantages from "./Components/OurAdvantages/OurAdvantages";

import ProductDetails from "./Pages/SingleProductpage/ProductDetails";

function App() {
    return (
        <>
            <Header />

            <Routes>
                {/* HOME PAGE */}
                <Route
                    path="/"
                    element={
                        <>
                            <Banner />
                            <Featured />
                            <TopProducts />
                            <OurAdvantages />
                        </>
                    }
                />

                {/* 🔥 SINGLE PRODUCT PAGE */}
                <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
