import React, { ReactNode } from "react";
import { Spacing } from "@coder.ts/foundation";

interface MarginProps {
    space?: keyof typeof Spacing;
    left?: boolean;
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    children: ReactNode;
}

const Margin: React.FC<MarginProps> = ({ space = Spacing.sm, left, right, top, bottom, children }) => {
    let className = ``;

    if (!left && !right && !top && !bottom) {
        className = `dse-margin-${space}`;
    }

    if (right) {
        className = `${className} dse-margin-right-${space}`;
    }

    if (bottom) {
        className = `${className} dse-margin-bottom-${space}`;
    }

    if (top) {
        className = `${className} dse-margin-top-${space}`;
    }

    if (left) {
        className = `${className} dse-margin-left-${space}`;
    }

    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default Margin;

