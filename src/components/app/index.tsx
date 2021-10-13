import * as React from "react";
import { PaletteProvider } from "react-pwn";

import { Header } from "../header-blob";
import { HypatiaSample } from "../hypatia-sample";
import { SlideIn } from "../slide-in";
import { ModularByDesign } from "../modular-by-design";
import { TuneYourTraining } from "../tune-your-training";
import { ShearIn } from "../shear-in";
import { CallToAction } from "../call-to-action";
import { Footer } from "../footer";

import { MobileContext } from "./mobile-context";
import { palette } from "./palette";

import "./index.scss";

export const App = () => {
    const [appRef, setAppRef] = React.useState<HTMLDivElement | null>(null);
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        if (!appRef) return;

        const isMobileVar =
            getComputedStyle(appRef)
                .getPropertyValue("--is-mobile")
                .trim();
        const isMobile = isMobileVar === "1";

        setIsMobile(isMobile);
    }, [appRef]);

    return (
        <PaletteProvider palette={palette}>
            <MobileContext.Provider value={isMobile}>
                <div className="app" ref={setAppRef}>
                        <div className="content">
                        <Header/>
                        <HypatiaSample/>
                        <SlideIn/>
                        <TuneYourTraining/>
                        <ModularByDesign/>
                        <ShearIn/>
                        <CallToAction/>
                        <Footer/>
                    </div>
                </div>
            </MobileContext.Provider>
        </PaletteProvider>
    )
}