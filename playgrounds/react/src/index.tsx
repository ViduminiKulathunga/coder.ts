import React from "react";
import ReactDOM from "react-dom/client";


import { Button } from "@coder.ts/react";
import "@coder.ts/scss/lib/Button.css"

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement!);

root.render(
    <Button label="Submit" />
);