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
            All the world was a dream I couldn't shake,
            In a midnight reverie, of which I'll never wake.
            That started, mundane enough, with an incessant tapping on the window pane separating me from the storm.
        </Frame>
    )
}