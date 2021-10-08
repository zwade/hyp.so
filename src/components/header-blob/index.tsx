import HeaderSvg from "../../assets/header.svg";

import "./index.scss";

export const Header = () => {
    return (
        <div className="header">
            <div className="header-blob">
                <HeaderSvg />
            </div>
            <div className="header-options">
                <div className="header-logo">hypatia</div>
                <div className="spacer"/>
                <div className="link">about</div>
                <div className="link">examples</div>
                <div className="link">docs</div>
                <div className="link inverted">try now</div>
            </div>
            <div className="tagline">
                train employees and customers faster
            </div>
        </div>
    );
}