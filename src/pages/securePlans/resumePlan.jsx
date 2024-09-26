// Librarys
import PropTypes from "prop-types";

// Icons
import userIcon from "../../assets/Planes/resumen/resumen-user.svg";

function ResumePlan({
    userName,
    userLastName,
    userLogin,
    planSelected,
}) {
    return (
        <div className="container-resume-plan">
            <span className="span-user-title">Resumen del seguro</span>
            <div className="container-resumen-details">
                <span className="span-title-resumen">PRECIOS CALCULADOS PARA:</span>
                <div className="container-user-resumen">
                    <img src={userIcon} alt="userResumen" />
                    <span className="span-user-resumen">{userName + ' ' + userLastName}</span>
                </div>
                <div className="container-resumen-add-info">
                    <span className="span-title-add-info">Responsable de pago</span>
                    <span className="span-body-add-info">DNI: {userLogin.dni}</span>
                    <span className="span-body-add-info">Celular: {userLogin.phone}</span>
                </div>
                <div className="container-resumen-add-info">
                    <span className="span-title-add-info">Plan elegido</span>
                    <span className="span-body-add-info">{planSelected.name}</span>
                    <span className="span-body-add-info">${planSelected.price} al mes</span>
                </div>
            </div>
        </div>
    );
}

ResumePlan.propTypes = {
    userName: PropTypes.string,
    userLastName: PropTypes.string,
    userLogin: PropTypes.object,
    planSelected: PropTypes.object,
}

export default ResumePlan;