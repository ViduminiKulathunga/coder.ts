import React from "react";
import ReactDOM from "react-dom/client";

import { Button, Color, Text } from "@coder.ts/react";
import "@coder.ts/scss/lib/Button.css"
import "@coder.ts/scss/lib/Utilities.css"
import "@coder.ts/scss/lib/Text.css"

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <>
        <Button label="Submit" />
        <Color hexCode="#012" width="lg" height="lg" />
        <Text size="xl">
            Hello World!
        </Text>
    </>
);