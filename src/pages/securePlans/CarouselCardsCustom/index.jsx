// Librarys
import PropTypes from "prop-types";
import { useState } from "react";

// Components
import CardPlanDetails from "../../../components/CardPlanDetails";

// Icons
import LeftArrow from "../../../assets/Planes/cardDetails/left-arrow-circle.svg";
import RigthtArrow from "../../../assets/Planes/cardDetails/rigth-arrow-circle.svg";

// Styles
import "./CarouselCardsCustom.scss";

function CarouselCardsCustom({
    arrayOptions,
    handleSelectPlan,
}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === arrayOptions.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? arrayOptions.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="container-control-carousel">
            <div className="carousel-track" style={{ transform: `translateX(${-currentIndex * 90}%)` }}>
                {arrayOptions.map((plan, index) => (
                    <CardPlanDetails 
                        key={index}
                        iconCardName={plan.name}
                        costPlan={plan.price}
                        planDescription={plan.description}
                        selectPlan={() => handleSelectPlan(plan)}
                    />
                ))}
            </div>
            {(arrayOptions.length > 0) && (
                <div className="container-buttons-next-previous">
                    <button className="carousel-button left" onClick={prevSlide}>
                        <img src={LeftArrow} alt="left-arrow-carousel" />
                    </button>
                    <span className="span-carousel-pages">{(currentIndex + 1) + ' / ' + arrayOptions.length}</span>
                    <button className="carousel-button right" onClick={nextSlide}>
                        <img src={RigthtArrow} alt="rigth-arrow-carousel" />
                    </button>
                </div>
            )}
        </div>
    );
};

CarouselCardsCustom.propTypes = {
    arrayOptions: PropTypes.array,
    handleSelectPlan: PropTypes.func,
}

export default CarouselCardsCustom;
