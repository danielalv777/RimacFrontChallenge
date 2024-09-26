// Librarys
import PropTypes from "prop-types";

// Utils
import classnames from "../../utils/classnames";

// Styles
import "./InputText.scss";

// Constants
import {
  DEFAULT_TYPE,
} from "./constants";

export default function InputText({
  type = DEFAULT_TYPE,
  textLabel,
  value,
  style,
  className,
  autoFocus,
  placeholder,
  containerStyle,
  containerClassName,
  customInput = {},
  disabled,
  readOnly,
  onChange,
  onFocus,
  onBlur,
  error,
  pattern,
  maxLength,
}) {
  const numberInputOnWheelPreventChange = e => {
    if (e.target.type === "number") {
      e.target.blur();

      e.stopPropagation();
    }
  };

  return (
    <>
        <div
            style={containerStyle}
            className={classnames([
                containerClassName,
                "input-control-container",
                disabled ? "Disbaled" : null,
                error ? "error-inputText" : null
            ])}
        >
            {typeof textLabel === "string" && textLabel.length > 0 && (
                <span className="span-title-input">{textLabel}</span>
            )}

            <input
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                {...customInput}
                type={type}
                style={style}
                readOnly={readOnly}
                disabled={disabled}
                autoFocus={autoFocus}
                placeholder={placeholder}
                pattern={pattern}
                maxLength={maxLength}
                onClick={e => e.stopPropagation()}
                autoComplete="new-password"
                onWheel={numberInputOnWheelPreventChange}
                className={classnames([
                    className,
                    "input-control",
                    error ? "input-has-error" : null,
                ])}
            />
        
        </div>
        
        {error && (
            <span className="span-error-input-message">* {error}</span>
        )}
    </>
  );
}

InputText.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  textLabel: PropTypes.string,
  className: PropTypes.string,
  customInput: PropTypes.object,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,
  pattern:  PropTypes.string,
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.string,
  error: PropTypes.string,
};
