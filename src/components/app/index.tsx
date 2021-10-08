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

import { palette } from "./palette";

import "./index.scss";

export const App = () => {
    return (
        <PaletteProvider palette={palette}>
            <div className="app">
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
        </PaletteProvider>
    )
}