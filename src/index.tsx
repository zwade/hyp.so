/// <reference path="./image.d.ts"/>
// ^ ts-loader isn't picking it up for some reason

declare global {
    interface Window {
        readonly ssr?: boolean;
    }
}

import { render } from "react-dom";
import { App } from "./components/app";

if (!window.ssr) {
    render(<App/>, document.getElementById("root"))
}

export { App };