import settings from './settings.jsx';

export default {
    colors: {
        fg:  "#ffffffcc",
        dim: "#ffffff33",
        bg:     !!settings.bar.backgroundTint ? "#11111144" : "#11111100",
        bgTint: "#00000000",//!!settings.bar.backgroundTint ? settings.bar.backgroundTint + "44" : "#00000000",
        minimalFg:  "#ffffff88",
        minimalDim: "#ffffff33",
        minimalBg:  "#ffffff0a",
        red:    "#ff4020",
        orange: "#ff8700",
        green:  "#0aaa1a",
        button: {
            bg:        "#ffffffff",
            halfDimBg: "#ffffff11",
            dimBg:     "#ffffff55",
            fg:        "#111111aa",
            halfDimFg: "#11111166",
            dimFg:     "#111111aa",
        }
    },
    height: settings.bar.height,
    padding: settings.bar.paddingVertical,
    heightWithoutPadding: settings.bar.height - settings.bar.paddingVertical*2,
    fontSize: settings.bar.fontSize || 12 + "px",
    fontWeight: 400,
    fontFamily: "SF Pro",
}

