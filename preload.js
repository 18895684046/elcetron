// window.addEventListener("DOMContentLoaded", () => {
//     const repalceText = (selector, text) => {
//         const element = document.getElementById(selector)
//         if(element) element.innerText = text
//     }
//     for(const dependency of ["chrome", "node", "electron"]){
//         repalceText(`${dependency}-version`, process.versions[dependency])
//     }
// })

/**
 * 预加载脚本，增强了渲染器的功能
 */

const { contextBridge, ipcRenderer } = require("electron")

// contextBridge.exposeInMainWorld("versions", {
//     node: () => process.versions.node,
//     chrome: () => process.versions.chrome,
//     electron: () => process.versions.electron,
//     ping: () => ipcRenderer.invoke("ping")
//     // 除了函数外，也可以暴露变量
// })

contextBridge.exposeInMainWorld("electronAPI",{
    // loadPreferences: () => ipcRenderer.invoke('load-prefs'),
    ping:() => ipcRenderer.invoke('ping'),
    setTitle :(title) => ipcRenderer.send('set-title',title),
    openFile: () => ipcRenderer.invoke('dialog:openFile'),
    syncMessage: (message) => ipcRenderer.sendSync('synchronous-message',message),
    handleCounter: (callback) => ipcRenderer.on('update-counter', callback)
})