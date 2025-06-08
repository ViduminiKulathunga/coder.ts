import React, { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import Text from "../../atoms/Text";
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
    const [overlayTop, setOverlayTop] = useState<number | undefined>();
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>();
    const labelRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        setOverlayTop(labelRef.current?.offsetHeight || 0);
    }, [labelRef.current?.offsetHeight]);

    const selectClick = () => {
        setIsOpen(isOpen => !isOpen);
    }

    const handleClick = (option: SelectOption, optionIndex: number) => {
        if (onOptionSelected) {
            onOptionSelected(option, optionIndex)
        }

        setSelectedIndex(optionIndex);
        setIsOpen(false);
    }

    let selectedOption = null;
    if (selectedIndex !== undefined) {
        selectedOption = options[selectedIndex];
    }

    const renderedList = <ul style={{ top: overlayTop }} className="dse-select--overlay">
        {options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;
            return (
                <li
                    className={`dse-select--option ${isSelected ? 'dse-select--option--selected' : ""}`}
                    onClick={() => handleClick(option, optionIndex)}
                    key={option.value}>
                    <Text>
                        {option.label}
                    </Text>

                    {isSelected && <svg width="1rem" height="1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>}

                </li>
            )
        })}
    </ul>

    return (
        <div className="dse-select">
            <button ref={labelRef} className="dse-select--label" onClick={() => selectClick()}>
                <Text>
                    {selectedIndex === undefined ? label : selectedOption?.label}
                </Text>
                <svg
                    width="1rem"
                    height="1rem"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`dse-select--caret ${isOpen ? "dse-select--caret--open" : "dse-select--caret--close"}`} >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            {isOpen && renderedList}

        </div>
    );
}

export default Select;