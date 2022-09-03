import Desktop from "./lib/Desktop.jsx";
import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles.jsx";

const style = {
    padding: "0 8px",
    display: "grid",
    gridAutoFlow: "column",
    gridGap: "16px",
    position: "fixed",
    overflow: "hidden",
    padding: "4px 8px",
    width: "auto",
    bottom: "0px",
    left: "0px",
    fontFamily: styles.fontFamily,
    lineHeight: styles.lineHeight,
    fontSize: styles.fontSize,
    color: styles.colors.dim,
    fontWeight: styles.fontWeight,
    zIndex: 101,
};

export const refreshFrequency = false;
export const command = "./clarity/scripts/windows.sh";

export const render = ({ output }, ...args) => {
    const data = parse(output);
    if (typeof data === "undefined") {
        return null;
    }
    if (typeof data.error !== "undefined") {
        return null;
    }
    const displayId = Number(window.location.pathname.split("/")[1]);
    const display = data.displays.find(d => d.id === displayId);
    return (
        <div style={style}>
            <Desktop
                displayData={display}
                spaceData={data.spaces.filter(s => s.display === display.index)}
                windowData={data.windows.filter(w => w.display === display.index)}
            />
        </div>
    );
};

export default null;
