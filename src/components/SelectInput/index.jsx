// Librarys
import PropTypes from "prop-types";
import { useState } from "react";
import Select from 'react-select';

// Components
import InputText from "../InputText";

// Utils
import classnames from "../../utils/classnames";

// Styles
import "./SelectInput.scss";

const customStyles = {
    control: (provided) => ({
        ...provided,
        border: 'none',
        boxShadow: 'none',
        '&:hover': {
          border: 'none',
        },
        height: '40px',
        width: '100%',
    }),
    input: (provided) => ({
        ...provided,
        border: 'none',
        boxShadow: 'none',
        outline: 'none',           
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        padding: '4px',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
  };

export default function SelectInput({
    autoFocus,
    selectClassName,
    isDisabled,
    isMulti, // allow users select multiple options
    isSearchable,
    onChange,
    options,
    placeholder,
    noOptionsMessage, // Text to display when there are no options
    value, // Control the current value
    defaultValue,
    inputValue,
    menuIsOpen, // control whether the menu is open
    onFocus,
    onBlur,
    customInput,
    error,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (selectedOption) => {
        if (onChange) {
            onChange(selectedOption);
        }
        setIsOpen(false);
    }

    return (
        <>
            <div className="selectInput-control-container">
                <Select
                    autoFocus={autoFocus}
                    className={classnames([
                        selectClassName, "select-container",
                        error ? "errorSelect" : null
                    ])}
                    styles={customStyles}
                    isDisabled={isDisabled}
                    isMulti={isMulti}
                    isSearchable={isSearchable}
                    onChange={handleChange}
                    options={options}
                    placeholder={placeholder}
                    noOptionsMessage={noOptionsMessage}
                    value={value}
                    defaultValue={defaultValue}
                    inputValue={inputValue}
                    menuIsOpen={isOpen || menuIsOpen}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                <InputText 
                    textLabel="Nro. de documento"
                    containerClassName={classnames([
                        "container-input-document",
                        error ? "errorInput" : null
                    ])}
                    customInput={customInput}
                />
            </div>
            {error && (
                <span className="error-message-selectInput">* {error}</span>
            )}
        </>
    );
}

SelectInput.propTypes = {
    selectRef: PropTypes.object,
    autoFocus: PropTypes.bool,
    selectClassName: PropTypes.string,
    isDisabled: PropTypes.bool,
    isMulti: PropTypes.bool,
    isSearchable: PropTypes.bool,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    placeholder: PropTypes.string,
    noOptionsMessage: PropTypes.string,
    value: PropTypes.any,
    defaultValue: PropTypes.object,
    inputValue: PropTypes.string,
    menuIsOpen: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    customInput: PropTypes.object,
    error: PropTypes.string,

    style: PropTypes.object,
    containerClassName: PropTypes.string,
    loaderClassName: PropTypes.string,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    textLabel: PropTypes.string,
};