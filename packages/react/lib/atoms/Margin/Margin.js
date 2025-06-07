import React from 'react';
import { Spacing } from '@coder.ts/foundation';

const Margin = ({ space = Spacing.sm, left, right, top, bottom, children }) => {
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
    return (React.createElement("div", { className: className }, children));
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
