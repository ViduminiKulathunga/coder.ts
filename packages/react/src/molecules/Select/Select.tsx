import React, { useState } from "react";
import type { ReactNode } from "react";

interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
    options?: SelectOption[];
    label?: string;
    children?: ReactNode;
}

const Select: React.FC<SelectProps> = ({ options = [], label = "Please select an option", onOptionSelected }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const selectClick = () => {
        setIsOpen(isOpen => !isOpen);
    }

    const handleClick = (option: SelectOption, optionIndex: number) => {
        setIsOpen(isOpen => !isOpen);
        if (onOptionSelected) {
            onOptionSelected(option, optionIndex)
        }
    }

    const renderedList = <ul>
        {options.map((option, optionIndex) => {
            return (
                <li onClick={() => handleClick(option, optionIndex)} key={option.value}>
                    {option.label}
                </li>
            )
        })}
    </ul>

    return (
        <div>
            <button onClick={() => selectClick()}>
                {label}
            </button>

            {isOpen && renderedList}

        </div>
    );
}

export default Select;