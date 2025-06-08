import React from "react";
import ReactDOM from "react-dom/client";

import { Button, Color, Text, Margin, Select } from "@coder.ts/react";
import "@coder.ts/scss/lib/Button.css";
import "@coder.ts/scss/lib/Utilities.css";
import "@coder.ts/scss/lib/Text.css";
import "@coder.ts/scss/lib/Margin.css";

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <>
        <div>
            <Margin left space="xxl">
                <Text size="xl">
                    Welcome to Moon 🌕!
                </Text>
            </Margin>
            <div>
                <Select options={[{ label: "London", value: "london" }, { label: "Stockholm", value: "stockholm" }]} />
            </div>
        </div>

    </>
);