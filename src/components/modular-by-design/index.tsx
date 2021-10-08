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
            Mother tell me a story, or sing me a song.
            It's a sacred sort of disorder how these sisters came along.
            Of flocks of fools, and dozens of men.
            Who fell from their thrones, to the abyss of again.
        </Frame>
    )
}