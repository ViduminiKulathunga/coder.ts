import React, { useState } from 'react';

const Select = ({ options = [], label = "Please select an option", onOptionSelected }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectClick = () => {
        setIsOpen(isOpen => !isOpen);
    };
    const handleClick = (option, optionIndex) => {
        setIsOpen(isOpen => !isOpen);
        if (onOptionSelected) {
            onOptionSelected(option, optionIndex);
        }
    };
    const renderedList = React.createElement("ul", null, options.map((option, optionIndex) => {
        return (React.createElement("li", { onClick: () => handleClick(option, optionIndex), key: option.value }, option.label));
    }));
    return (React.createElement("div", null,
        React.createElement("button", { onClick: () => selectClick() }, label),
        isOpen && renderedList));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
