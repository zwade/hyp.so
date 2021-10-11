import * as React from "react";
import { useScrolledTo } from "../../hooks";
import { MobileContext } from "../app/mobile-context";

import "./index.scss";

const leftContent = `run commands within the lesson
design new content in markdown
embed apps, quizzes, and more
integrate with existing LMS`;

const rightContent = `bring your own servers or use ours
test students’ knowledge
add new functionality with docker
run code written by students`

export const SlideIn = () => {
    const [divRef, setDivRef] = React.useState<HTMLDivElement | null>(null);
    const isMobile = React.useContext(MobileContext);
    const isCombined = useScrolledTo(divRef, 0.66);

    return (
        <div className="slidein" data-combined={isCombined} ref={setDivRef}>
            <div className="left">
                <div className="piston">
                    <div className="title">Clarity meets Complexity</div>
                    <div className="piston-content">
                        { leftContent }
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="piston">
                    <div className="title">Clarity meets Complexity</div>
                    <div className="piston-content">
                        { isMobile ? leftContent : rightContent }
                    </div>
                </div>
            </div>
        </div>
    )
}