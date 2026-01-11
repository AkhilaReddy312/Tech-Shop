import "./OurAdvantages.css";
import {
    FaShippingFast,
    FaShieldAlt,
    FaTags,
    FaLock
} from "react-icons/fa";

const OurAdvantages = () => {
    return (
        <section className="advantages">
            <div className="advantages-title">
                <span>Our Advantages</span>
            </div>

            <div className="advantages-list">

                <div className="advantage-card">
                    <FaShippingFast className="adv-icon" />
                    <div className="adv-text">
                        <h4>Express Delivery</h4>
                        <p>Ships in 24 Hours</p>
                    </div>
                </div>

                <div className="advantage-card">
                    <FaShieldAlt className="adv-icon" />
                    <div className="adv-text">
                        <h4>Brand Warranty</h4>
                        <p>100% Original products</p>
                    </div>
                </div>

                <div className="advantage-card">
                    <FaTags className="adv-icon" />
                    <div className="adv-text">
                        <h4>Exciting Deals</h4>
                        <p>On all prepaid orders</p>
                    </div>
                </div>

                <div className="advantage-card">
                    <FaLock className="adv-icon" />
                    <div className="adv-text">
                        <h4>Secure Payments</h4>
                        <p>SSL / Secure certificate</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurAdvantages;
