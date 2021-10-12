import HeaderSvg from "../../assets/header.svg";

import "./index.scss";

export const Header = () => {
    return (
        <div className="header">
            <div className="header-blob">
                <HeaderSvg/>
            </div>
            <div className="header-options">
                <div className="header-logo">hypatia</div>
                <div className="header-links">
                    <a className="link" href="#tune-your-training">about</a>
                    {/* <div className="link omit-mobile">examples</div> */}
                    <a className="link" href="https://github.com/zwade/hypatia/" target="_blank">docs</a>
                    <a className="link inverted" href="#join-waitlist">join the waitlist</a>
                </div>
                <div className="tagline">
                    train employees and customers faster
                </div>
            </div>
        </div>
    );
}