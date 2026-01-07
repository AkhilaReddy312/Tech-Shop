import Slider from "react-slick";
import "./Banner.css";
import ProductsData from "../Components/Products/ProductsData";
const Banner = () => {
    const heroProducts = ProductsData.filter(
        (product) => product.tag === "hero-product"
    );
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
    };

    return (
        <section className="banner">
            <Slider {...settings}>
                {heroProducts.map((product) => (
                    <div className="banner-slide" key={product.id}>
                        {/* Background ghost text */}
                        <h1 className="bg-text">{product.type}</h1>
                        {/* LEFT CONTENT */}
                        <div className="banner-text">
                            <h4>{product.title}</h4>
                            <h1>{product.tagline}</h1>

                            <div className="price">
                                <span className="final-price">₹{product.finalPrice}</span>
                                <span className="original-price">₹{product.originalPrice}</span>
                            </div>


                            <button className="shop-btn">Shop Now</button>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="banner-img">
                            <img
                                src={product.heroImage}
                                alt={product.title}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Banner;
