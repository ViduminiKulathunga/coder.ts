import React, { ReactNode } from "react";
import { FontSize } from "@coder.ts/foundation";

interface TextProps {
    size?: keyof typeof FontSize;
    children?: ReactNode

}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
    const className = `dse-text-${size}`;

    return (
        <p className={className}>{children}</p>
    );
}

export default Text;