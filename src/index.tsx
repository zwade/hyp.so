/// <reference path="./image.d.ts"/>
// ^ ts-loader isn't picking it up for some reason

import { render } from "react-dom";
import { App } from "./components/app";

render(<App/>, document.getElementById("root"))