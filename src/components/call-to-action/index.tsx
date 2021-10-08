import * as React from 'react';
import { Input, Checkbox, Button } from "react-pwn";

import { Frame } from '../frame';

import "./index.scss";

enum Options {
    Trainer = "I'm a teacher/trainer",
    Student = "I'm a student",
    ContentDev = "I'm interested in developing content",
    Tech = "I'm interested in playing with the technology",
}

const checkboxOptions = [
    { label: Options.Trainer, value: Options.Trainer },
    { label: Options.ContentDev, value: Options.ContentDev },
    { label: Options.Student, value: Options.Student },
    { label: Options.Tech, value: Options.Tech },
];

export const CallToAction = () => {
    const [email, setEmail] = React.useState("");
    const [selections, setSelections] = React.useState(new Set<Options>());

    return (
        <Frame
            title="Get the Details"
            className="details-segment"
        >
            <div className="details-blurb">
                Hypatia is still in closed beta, but we're adding new users every week.
                To get more information about the product, and join the waitlist to get in,
                Please fill out this quick form.
                You can also get in touch with us at <a href="mailto:welcome@hyp.so" target="_blank">welcome@hyp.so</a>.
            </div>
            <div className="form">
                <Input value={email} onChange={setEmail} placeholder="Email Address"/>
                <div className="rest" data-hidden={email === ""}>
                    <div className="spacer"/>
                    <div className="prompt">I'm interested in hypatia because...</div>
                    <Checkbox
                        className="reasons"
                        options={checkboxOptions}
                        value={selections}
                        onChange={setSelections}
                    />
                    <Button
                        disabled={email.length < 4 || !email.includes("@")}
                        label="Submit"
                    />
                    <div className="consent">By clicking submit, I agree that it's ok for hyp.so to send me periodic emails.</div>
                </div>
            </div>
        </Frame>
    )
}