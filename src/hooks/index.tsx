import * as React from "react";

export const useScrolledTo = (elt: HTMLElement | null, proportion = 0.5) => {
    const [scrolledTo, setScrolledTo] = React.useState(false);

    const test = () => {
        if (!elt) return;
        const { top } = elt.getBoundingClientRect();
        if (top < window.innerHeight * proportion) {
            setScrolledTo(true);
        }
    }

    React.useEffect(() => {
        test();
    }, [elt]);

    React.useEffect(() => {
        if (!scrolledTo) {
            window.addEventListener("scroll", test);
            return () => {
                window.removeEventListener("scroll", test);
            }
        }
    }, [elt, scrolledTo]);

    return scrolledTo;
}