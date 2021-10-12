import * as React from "react";
import { useScrolledTo } from "../../hooks";
import { MobileContext } from "../app/mobile-context";

import "./index.scss";

const trim = (str: TemplateStringsArray) =>
    str
        .join("")
        .split("\n")
        .map((x) => x.trim())
        .filter((x) => !!x)
        .join("\n");

const leftContent = trim`
    write content quickly in markdown
    run scripts within lessons
    embed apps, quizzes, and more
    integrate with existing pipelines
`;

const rightContent = trim`
    bring your own servers or use ours
    test students’ knowledge
    add new functionality with docker
    evaluate code written by students
`

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