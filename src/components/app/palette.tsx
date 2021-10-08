import { Palette, Palettes } from "react-pwn";

export const palette: Palette = {
    ...Palettes.GreenOrange
}

// I don't have a real palette, so i'm going to be lazy
for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const) {
    palette[`primary-0${i}`] = 0x1C7EF0;
}