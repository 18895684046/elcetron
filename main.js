const { app, BrowserWindow, ipcMain, dialog, Menu } = require("electron")
const path = require("path")

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })

    const menu = Menu.buildFromTemplate([
        {
            label: app.name,
            submenu: [
                {
                    click: () => mainWindow.webContents.send('update-counter', 1),
                    label: 'Increment'
                },
                {
                    click: () => mainWindow.webContents.send('update-counter', -1),
                    label: 'Decrement'
                }
            ]
        }
    ])

    Menu.setApplicationMenu(menu)
    mainWindow.loadFile("index.html")
    mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()
    ipcMain.on("counter-value", (event, arg) => {
        console.log(arg);
    })

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

