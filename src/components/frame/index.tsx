
import * as React from "react";

import { useScrolledTo } from "../../hooks";

import "./index.scss";

export interface Props {
    children: React.ReactNode;
    title: string;
    className?: string;
    graphic?: React.ReactNode;
    dark?: boolean;
    flipped?: boolean;
}

export const Frame = (props: Props) => {
    const [divRef, setDivRef] = React.useState<HTMLDivElement | null>(null);
    const scrolledTo = useScrolledTo(divRef);

    return (
        <div
            className={`frame ${props.className ?? ""}`}
            data-visible={scrolledTo}
            data-dark={props.dark}
            data-flipped={props.flipped}
            ref={setDivRef}
        >
            <div className="frame-header">{ props.title }</div>
            <div className="frame-graphic">
                { props.graphic }
            </div>
            <div className="frame-body">
                { props.children }
            </div>
        </div>
    );
}