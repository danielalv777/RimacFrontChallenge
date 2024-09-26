// Librarys
import PropTypes from "prop-types";

import iconsCard from "./iconsCardDetails";

// Styles
import "./CardPlanDetails.scss";

function CardPlanDetails({
    iconCardName,
    costPlan,
    planDescription,
    selectPlan,
}) {
    return (
        <div className="cardDetail-control-container">
            {(iconCardName === "Plan en Casa y Clínica" || iconCardName === "Plan en Casa + Fitness") ?
                <div className="green-square-card">
                    <span className="span-green-square-card">Plan recomendado</span>
                </div>
            : null}
            
            <div className="container-cardDetail-header">
                <div className="container-detail-card-info">
                    <span className="plan-name">{iconCardName}</span>
                    <span className="plan-cost-title">COSTO DEL PLAN</span>
                    <span className="plan-cost">$ {costPlan} al mes</span>
                </div>
                <img src={iconsCard[iconCardName]} alt="iconCardDetails" />
            </div>
            <div className="container-description-plan">
                {planDescription.map((description, index) => (
                    <li key={index}>{description}</li>
                ))}
            </div>
            <button className="btn-select-plan" onClick={selectPlan}>Seleccionar Plan</button>
        </div>
    );
};

CardPlanDetails.propTypes = {
    iconCardName: PropTypes.string,
    costPlan: PropTypes.string,
    planDescription: PropTypes.array,
    selectPlan: PropTypes.func,
}

export default CardPlanDetails;