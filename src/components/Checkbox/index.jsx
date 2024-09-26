// Librarys
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// Utils
import classnames from "../../utils/classnames";

// Styles
import "./Checkbox.scss";

// Icons
import CheckIcon from "../../assets/commons/check-icon";

function CheckBox({
    containerCheckboxClassName,
    textLabel,
    classNameCheck,
    onChange,
    error,
    isChecked,
}) {
    const [selected, setSelected] = useState(isChecked ?? false);

    const handleClickCheckbox = () => {
        setSelected((prevSelected) => {
            const newSelected = !prevSelected;
            if (onChange) {
                onChange(newSelected);
            }
            return newSelected;
        });
    };

    useEffect(() => {
        setSelected(isChecked);
    },[isChecked])

    return (
        <>
            <div className={classnames([
                    containerCheckboxClassName,
                    "checkbox-control-container"
                ])}
            >
                <button className={classnames([
                        classNameCheck,
                        "checkbox-control",
                        selected === true ? 'Selected' : null,
                        error ? 'error-checkbox' : null,
                    ])}
                    type="button"
                    onClick={handleClickCheckbox}
                >
                    {selected === true && (<CheckIcon />)}
                </button>
                
                {typeof textLabel === "string" && textLabel.length > 0 && (
                    <span className={classnames([
                            "span-title-checkbox",
                            error ? 'error-checkbox-span' : null,
                        ])}
                    >{textLabel}</span>
                )}
            </div>
            {error && (
                <span className="error-message-checkbox">* {error}</span>
            )}
        </>
    );
};

CheckBox.propTypes = {
    containerCheckboxClassName: PropTypes.string,
    textLabel: PropTypes.string,
    classNameCheck: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    isChecked: PropTypes.bool,
};

export default CheckBox;