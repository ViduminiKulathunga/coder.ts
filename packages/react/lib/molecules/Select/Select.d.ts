import React from "react";
import type { ReactNode } from "react";
interface SelectOption {
    label: string;
    value: string;
}
interface RenderOptionsProps {
    isSelected: boolean;
    option: SelectOption;
    getOptionRecommondedProps: (overrideProps?: Object) => Object;
}
interface SelectProps {
    onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
    options?: SelectOption[];
    label?: string;
    renderOptions?: (props: RenderOptionsProps) => React.ReactNode;
    children?: ReactNode;
}
declare const Select: React.FC<SelectProps>;
export default Select;
