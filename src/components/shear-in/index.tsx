import * as React from "react";
import { useScrolledTo } from "../../hooks";

import "./index.scss";

export const ShearIn = () => {
    const [divRef, setDivRef] = React.useState<HTMLDivElement | null>(null);
    const isCombined = useScrolledTo(divRef, 0.75);

    return (
        <div className="shear-in" data-combined={isCombined} ref={setDivRef}>
            <div className="left">
                <div className="piston">
                    <div className="piston-content">Embracing Open Source</div>
                </div>
            </div>
            <div className="right">
                <div className="piston">
                    <div className="piston-content">
                        {
`Look straight through me.
Look at the nightmare.
Our past is but a dream that we try to escape,
try to evade, to erase ourselves.
Look through me, and see the anthem of our obsession.
Behold your child: perfection, a rotting shell of atrophy.`
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}