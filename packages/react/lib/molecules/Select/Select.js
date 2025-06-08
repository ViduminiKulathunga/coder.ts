import React, { useState, useRef, useEffect } from 'react';
import Text from '../../atoms/Text/Text.js';

const Select = ({ options = [], label = "Please select an option", onOptionSelected, renderOptions }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [overlayTop, setOverlayTop] = useState();
    const [selectedIndex, setSelectedIndex] = useState();
    const labelRef = useRef(null);
    useEffect(() => {
        setOverlayTop(labelRef.current?.offsetHeight || 0);
    }, [labelRef.current?.offsetHeight]);
    const selectClick = () => {
        setIsOpen(isOpen => !isOpen);
    };
    const handleClick = (option, optionIndex) => {
        if (onOptionSelected) {
            onOptionSelected(option, optionIndex);
        }
        setSelectedIndex(optionIndex);
        setIsOpen(false);
    };
    let selectedOption = null;
    if (selectedIndex !== undefined) {
        selectedOption = options[selectedIndex];
    }
    const renderedList = React.createElement("ul", { style: { top: overlayTop }, className: "dse-select--overlay" }, options.map((option, optionIndex) => {
        const isSelected = selectedIndex === optionIndex;
        const renderOptionsProps = {
            option,
            isSelected,
            getOptionRecommondedProps: (overrideProps = {}) => {
                return {
                    className: `dse-select--option ${isSelected ? 'dse-select--option--selected' : ""}`,
                    onClick: () => handleClick(option, optionIndex),
                    ...overrideProps
                };
            },
        };
        if (renderOptions) {
            return renderOptions(renderOptionsProps);
        }
        return (React.createElement("li", { className: `dse-select--option ${isSelected ? 'dse-select--option--selected' : ""}`, onClick: () => handleClick(option, optionIndex), key: option.value },
            React.createElement(Text, null, option.label),
            isSelected && React.createElement("svg", { width: "1rem", height: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }))));
    }));
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { ref: labelRef, className: "dse-select--label", onClick: () => selectClick() },
            React.createElement(Text, null, selectedIndex === undefined ? label : selectedOption?.label),
            React.createElement("svg", { width: "1rem", height: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: `dse-select--caret ${isOpen ? "dse-select--caret--open" : "dse-select--caret--close"}` },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m19.5 8.25-7.5 7.5-7.5-7.5" }))),
        isOpen && renderedList));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
