import symbols from "./symbols.jsx";
import styles from "./styles.jsx";
import { run } from "uebersicht";

const render = () => {
    const date = new Date();
    const dateFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    const timeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: false };

    const dateStr = symbols.calendar + " " + date.toLocaleDateString("en-SG", dateFormatOptions);
    const timeStr = "    " + date.toLocaleTimeString("en-SG", timeFormatOptions);

    return (<div>
        <span style={{color: styles.colors.textColor}} onClick={() => run("open /System/Applications/Calendar.app")}>{dateStr}</span>
        &nbsp;
        <span style={{color: styles.colors.textColor}} onClick={() => run("open /System/Applications/Clock.app || open /System/Applications/Calendar.app")}>{timeStr}</span>
    </div>);
}
export default render;
