import Banner from "../Components/Carousel/Banner";
import Featured from "../Components/Featured-Products/Featured";
import { Services } from "../Components/Services/Services";
import TopProducts from "../Components/Top-Products/TopProducts";

export const Home = () => {

    return (
        <>
            <Banner />
            <Featured />
            <TopProducts />
            <Services />
        </>
    );
};


