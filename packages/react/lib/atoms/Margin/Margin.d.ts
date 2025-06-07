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
declare const Margin: React.FC<MarginProps>;
export default Margin;
