import { useParams } from "react-router-dom";
import { useState } from "react";
import ProductsData from "../../Components/Products/ProductsData";
import "./ProductDetails.css";

const ProductDetails = () => {
    const { id } = useParams();

    const product = ProductsData.find(
        (item) => item.id === Number(id)
    );

    const [mainImage, setMainImage] = useState(product.images[0]);

    if (!product) {
        return <h2 style={{ color: "white" }}>Product Not Found</h2>;
    }

    return (
        <section className="product-details-page">
            <div className="product-container">

                {/* LEFT IMAGE SECTION */}
                <div className="product-images">
                    <div className="image-thumbs">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className={mainImage === img ? "active" : ""}
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>

                    <div className="main-image">
                        <img src={mainImage} alt={product.title} />
                    </div>
                </div>

                {/* RIGHT DETAILS SECTION */}
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p className="sub-title">{product.info}</p>

                    <div className="rating">★★★★★ <span> | 1234 Ratings</span></div>

                    <div className="price-box">
                        <span className="final-price">
                            ₹{product.finalPrice.toLocaleString()}
                        </span>
                        <span className="original-price">
                            ₹{product.originalPrice.toLocaleString()}
                        </span>
                    </div>

                    <p className="save">
                        You save ₹{product.originalPrice - product.finalPrice}
                    </p>

                    <button className="add-cart-btn">Add to cart</button>

                    <div className="specs">
                        <p><strong>Brand:</strong> {product.brand}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Type:</strong> {product.type}</p>
                        <p><strong>Connectivity:</strong> {product.connectivity}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProductDetails;
