import * as React from "react";
import { useScrolledTo } from "../../hooks";

import "./index.scss";

export const SlideIn = () => {
    const [divRef, setDivRef] = React.useState<HTMLDivElement | null>(null);
    const isCombined = useScrolledTo(divRef, 0.66);

    return (
        <div className="slidein" data-combined={isCombined} ref={setDivRef}>
            <div className="left">
                <div className="piston">
                    <div className="title">Clarity meets Complexity</div>
                    <div className="piston-content">
                        {
`run commands within the lesson
design new content in markdown
embed apps, quizzes, and more
integrate with existing LMS`
                        }
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="piston">
                    <div className="title">Clarity meets Complexity</div>
                    <div className="piston-content">
                        {
`bring your own servers or use ours
test students’ knowledge
add new functionality with docker
run code written by students`
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}