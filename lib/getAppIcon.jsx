const autosub = {
    "Chrome": "Google Chrome",
    "iTerm2": "iTerm",
    "Word": "Microsoft Word",
    "Excel": "Microsoft Excel",
    "PowerPoint": "Microsoft PowerPoint",
    "OneNote": "Microsoft OneNote",
    "Outlook": "Microsoft Outlook",
    "Code": "Visual Studio Code",
}


const getAppIconName = (appName) => {
    if (autosub[appName] != null) {
        appName = autosub[appName];
    }
    return appName;
}
const getAppIconPath = (appName) => {
    console.log("getAppIconPath", appName)
    console.log("getAppIconPath", "/clarity/appIcons/" + fixURI(encodeURIComponent(getAppIconName(appName) + ".png")))
    return "/clarity/appIcons/" + fixURI(encodeURIComponent(getAppIconName(appName) + ".png"))
}
const fixURI = (uri) => {
    return uri.replace(/%E2%80%8E/g, "");
}

export { getAppIconName, getAppIconPath };

