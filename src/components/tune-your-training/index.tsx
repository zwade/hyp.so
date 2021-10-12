import { Frame } from "../frame";
import TuningFork from "../../assets/tuning-fork.svg";

import "./index.scss";

export const TuneYourTraining = () => {
    return (
        <Frame
            title="Tune your Training"
            className="tune-segment"
            graphic={<TuningFork className="tuning-fork"/>}
            id={"tune-your-training"}
            dark
            flipped
        >
            <p>
                <i>One size fits all</i> is not always the best approach for teaching.
                With Hypatia, you can choose off-the-shelf lessons that fit your company,
                while also using our rich suite of tools to build the perfect curriculum for your team.
            </p>
            <p>
                Connect internal applications, tools, and frameworks securely to Hypatia to use our cloud learning system,
                or run our on-premises solution for more control and flexibility.
            </p>
        </Frame>
    )
}