export type Theme = Record<string, string>;

export enum ColorThemes {
  Light = "light",
  Dark = "dark",
}

type Themes = Record<ColorThemes, Theme>;

const themes: Themes = {
  light: {
    background: "#fff",
    color: "#000",
  },
  dark: {
    background: "#252525",
    color: "#fff",
    nav: "#1e1e1e",
    accent: "#00ccff",
    card: "#212121",
    combo: "#212121"
  },
};

export default themes;
