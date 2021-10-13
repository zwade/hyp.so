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

const leftContent = <>
    <div>write content quickly in markdown</div>
    <div>run scripts within lessons</div>
    <div>embed apps, quizzes, and more</div>
    <div>integrate with existing pipelines</div>
</>

const rightContent = <>
    <div>bring your own servers or use ours</div>
    <div>test students’ knowledge</div>
    <div>add new functionality with docker</div>
    <div>evaluate code written by students</div>
</>;

export const SlideIn = () => {
    const [divRef, setDivRef] = React.useState<HTMLDivElement | null>(null);
    const isMobile = React.useContext(MobileContext);
    const isCombined = useScrolledTo(divRef, 0.66);

    return (
        <div className="slidein" data-combined={isCombined || !!window.ssr} ref={setDivRef}>
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