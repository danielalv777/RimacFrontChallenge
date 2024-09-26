// Librarys
import PropTypes from "prop-types";

// Components
import CheckBoxCustom from "../CheckBoxCustom";

// Utils
import classnames from "../../utils/classnames";

// Icons
import IconForMe from "../../assets/Planes/card/card-for-me.svg";
import IconForOther from "../../assets/Planes/card/card-for-other.svg";

// Styles
import "./CardOption.scss";
import { useEffect, useState } from "react";

function CardOption({
    containerCardOption,
    iconCard,
    iconTitleInfo,
    iconDescriptionInfo,
    onChange,
    isSelected,
}) {
    const [cardSelected, setCardSelected] = useState(isSelected ?? false);

    const handleChangeCard = () => {
        setCardSelected((prevSelected) => {
            const newSelected = !prevSelected;
            if (onChange) {
                onChange(newSelected);
            }
            return newSelected;
        });
    };

    useEffect(() => {
        setCardSelected(isSelected);
    },[isSelected])

    return (
        <div className={classnames([
                "cardOption-control-container", containerCardOption,
                cardSelected === true ? "selected" : null
            ])}
        >
            <div className="card-header">
                <CheckBoxCustom classNameCheck="card-checkbox" onChange={handleChangeCard} isChecked={isSelected} />
            </div>
            <div className="container-card-info">
                <div className="container-icon-card-detail">
                    <img src={iconCard === 1 ? IconForMe : IconForOther} alt="iconCard" className="container-icon-card"/>
                    <span className="span-title-card">{iconTitleInfo}</span>
                </div>
                <span className="span-description-card">{iconDescriptionInfo}</span>
            </div>
        </div>
    );
}

CardOption.propTypes = {
    containerCardOption: PropTypes.string,
    iconCard: PropTypes.number,
    iconTitleInfo: PropTypes.string,
    iconDescriptionInfo: PropTypes.string,
    onChange: PropTypes.func,
    isSelected: PropTypes.bool,
}

export default CardOption;