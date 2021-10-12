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
                        <p>
                            Our vision for better education includes making Hypatia accessible to everyone, not just our customers.
                            That's why we've adopted a hybrid approach to our software.
                            Our standalone application, Hypatia Core, will not only be available for everyone to use,
                            but will be developed in the open with visibility and contributions from the community.
                        </p>
                        <p>
                            Additionally, we are committed to supporting open source learning through our cloud offering, Hypatia Campus.
                            Any open source lessons made available through Hypatia Campus will be available for anyone to use at no cost
                            to the student or the teacher.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}