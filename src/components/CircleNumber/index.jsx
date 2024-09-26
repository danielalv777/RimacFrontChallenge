// Librarys
import PropTypes from "prop-types";

// Utils
import classnames from "../../utils/classnames";

// Styles
import "./CircleNumber.scss";

function CircleNumber({
    containerCircleNumber,
    spanCircleNumber,
    numberDisplay,
}) {
    return (
        <div className={classnames(["main-container-circleNumber", containerCircleNumber])}>
            <span className={classnames(["span-circleNumber", spanCircleNumber])}>{numberDisplay}</span>
        </div>
    );
}

CircleNumber.propTypes = {
    containerCircleNumber: PropTypes.string,
    spanCircleNumber: PropTypes.string,
    numberDisplay: PropTypes.string,
}

export default CircleNumber;