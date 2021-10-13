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
    const [interests, setInterests] = React.useState(new Set<Options>());
    const [done, setDone] = React.useState(false);

    const submit = async () => {
        const req = await fetch("/interest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                interests: [...interests],
            }),
        });

        // The only way we get 404 is if we're local
        if (req.status === 200 || req.status === 404) {
            setDone(true);
        }
    }

    return (
        <Frame
            title="Get the Details"
            className="details-segment"
            id="join-waitlist"
        >
            <div className="details-blurb">
                Hypatia is still in closed beta, but we're adding new users every week.
                To get more information about the product, and join the waitlist to get in,
                Please fill out this quick form.
                You can also get in touch with us at <a rel="noreferrer" href="mailto:welcome@hyp.so" target="_blank">welcome@hyp.so</a>.
            </div>
            <div className="form">
                {
                    !done ? (
                        <Input value={email} onChange={setEmail} placeholder="Email Address"/>
                    ) : (
                        <div className="done">
                            <h2>Thanks!</h2>
                            <p>We'll be in touch soon.</p>
                        </div>
                    )
                }
                <div className="rest" data-hidden={email === "" || done}>
                    <div className="spacer"/>
                    <div className="prompt">I'm interested in hypatia because...</div>
                    <Checkbox
                        className="reasons"
                        options={checkboxOptions}
                        value={interests}
                        onChange={setInterests}
                    />
                    <Button
                        disabled={email.length < 4 || !email.includes("@")}
                        label="Submit"
                        onClick={submit}
                    />
                    <div className="consent">By clicking submit, I agree that it's ok for hyp.so to send me periodic emails.</div>
                </div>
            </div>
        </Frame>
    )
}