// Librarys
import PropTypes from "prop-types";

// Components
import CircleNumber from "../../components/CircleNumber";

// Icons
import LinerHeader from "../../assets/Planes/header/line.svg";
import IconBack from "../../assets/Planes/header/Icon-button-back.svg";
import IconProgressBar from "../../assets/Planes/header/atoms_stepper_progress.svg";
import IconBackMobile from "../../assets/Planes/header/back-mobile.svg";

// Utils
import classnames from "../../utils/classnames";

// Styles
import "./SecurePlan.scss";

function HeaderSecurePlan({
    handleBackHome,
    currentStep,
}) {

    return (
        <div className="main-container-header-secure">
            <div className="container-header-secure-desktop">
                <div className="container-steps-header">
                    <div className="first-step-header-secure">
                        <CircleNumber
                            numberDisplay="1"
                            containerCircleNumber={currentStep === "selectPlan" ? 'SelecteCircle' : null}
                            spanCircleNumber={currentStep === "selectPlan" ? 'SelecteCircleSpan' : null}
                        />
                        <span className={classnames(["span-header-secure", currentStep === "selectPlan" ? 'Selected' : null])}>Planes y coberturas</span>
                    </div>
                    <div className="container-img-liner">
                        <img src={LinerHeader} alt="headerImgLiner" />
                    </div>
                    <div className="first-step-header-secure">
                        <CircleNumber
                            numberDisplay="2" 
                            containerCircleNumber={currentStep === "summarize" ? 'SelecteCircle' : null}
                            spanCircleNumber={currentStep === "summarize" ? 'SelecteCircleSpan' : null}
                        />
                        <span className={classnames(["span-header-secure", currentStep === "summarize" ? 'Selected' : null])}>Resumen</span>
                    </div>
                </div>
                <div className="container-button-back">
                    <button className="button-back-header-secure" onClick={handleBackHome}>
                        <img src={IconBack} alt="iconBackHeader" />
                        <span className="span-back-header-secure">Volver</span>
                    </button>
                </div>
            </div>
            <div className="container-header-secure-mobile">
                <button className="button-back-header-secure" onClick={handleBackHome}>
                    <img src={IconBackMobile} alt="iconBackHeader" />
                </button>
                <div className="container-steps-mobile">
                    <span className="steps-number-mobile">{currentStep === "selectPlan" ? 'PASO 1 DE 2' : 'PASO 2 DE 2'}</span>
                    <img src={IconProgressBar} alt="progressBar" />
                </div>
            </div>
        </div>
    );
}

HeaderSecurePlan.propTypes = {
    handleBackHome: PropTypes.func,
    currentStep: PropTypes.string,
}

export default HeaderSecurePlan;