import "./OurAdvantages.css";
import ServicesData from "./ServicesData";

const OurAdvantages = () => {
    return (
        <section className="advantages">
            <div className="advantages-title">
                <span>Our Advantages</span>
            </div>

            <div className="advantages-list">
                {ServicesData.map((item) => (
                    <div className="advantage-card" key={item.id}>
                        <div className="adv-icon">
                            {item.icon}
                        </div>

                        <div className="adv-text">
                            <h4>{item.title}</h4>
                            <p>{item.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurAdvantages;
