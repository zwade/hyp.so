import * as React from "react";
import { Frame } from "../frame";
import Pencil from "../../assets/pencil.svg";

import "./index.scss";

export const ModularByDesign = () => {
    return (
        <Frame
            title="Modular by Design"
            className="about-segment"
            graphic={<Pencil className="pencil"/>}
        >
            <p>
                Hypatia is an all-in-one Learning Management System and Content Management System geared toward high-quality technical education.
                Use our full suite of tools to create, test, and deploy in depth lesson plans,
                or integrate Hypatia into your existing solutions for instant access to high quality content.
            </p>
            <p>
                Hypatia even allows you to bring your own applications into the classroom with our hybrid cloud and on-prem approach.
                With Hypatia, you can easily build lessons that integrate seemlessly into your needs and infrastructure.
            </p>
        </Frame>
    )
}