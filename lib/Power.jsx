import settings from "./settings.jsx";
import styles from "./styles.jsx";
import symbols from "./symbols.jsx";

const render = ({ powerData }) => {
    const batteryPercentage = powerData.battery.percentage || 0;
    const noBattery = batteryPercentage < 0 || batteryPercentage > 100;
    const isCharging = powerData.battery.charging;
    const isWired = powerData.wired;
    const isLowPowerMode = powerData.lowPowerMode;
    const timeRemaining = powerData.timeRemaining;

    const batterySymbol = noBattery ?
        "" : symbols.battery[Math.round(0.01*batteryPercentage*(symbols.battery.length-1))];
    const chargingSymbol = isCharging ? symbols.power : "";
    const wiredSymbol = isWired ? symbols.powerPassthrough : "";
    const lowPowerModeSymbol = isLowPowerMode ? symbols.powerSaving : "";
    let batteryText = noBattery ? "" : (batteryPercentage + "%");
    let timeRemainingText =
        (batteryPercentage == 100 && isWired) || timeRemaining == "-:--" ?
        "" : timeRemaining;

    let batteryStyle = {}
    let chargeSymStyle = {}
    if (batteryPercentage <= 20 && !isCharging) {
        batteryStyle.color = styles.colors.red;
    } else if (isCharging) {
        batteryStyle.color = styles.colors.green;
        chargeSymStyle.color = styles.colors.orange;
    } else{
        batteryStyle.color = styles.colors.textColor;
    }

    let suppStyle = {
        fontSize: "9px",
        fontWeight: "bold"
    }

    switch (settings?.bar?.status?.details?.power) {
        case "percentage":
            timeRemainingText = "";
            break;
        case "time":
            batteryText = (batteryPercentage == 100 && isWired) ? "-:--" : timeRemaining;
            timeRemainingText = "";
            break;
        case "all":
        case true:
            break;
        default:
            batteryText = "";
            timeRemainingText = "";
            break;
    }

    return (
        <div>
            <span style={batteryStyle}>{batterySymbol}</span> <span style={chargeSymStyle}>{chargingSymbol || wiredSymbol}</span> {lowPowerModeSymbol} {batteryText} <span style={suppStyle}>{timeRemainingText}</span>
        </div>
    );
}
export default render;
