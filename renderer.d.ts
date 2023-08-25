export interface IElectronAPI {
    loadPreferences: () => Promise<void>
    ping: () => Promise<void>
    setTitle: (title: string) => Promise<void>
    openFile: () => Promise<void>
    syncMessage: (message: string) => Promise<void>
    handleCounter:(callback: (counter: number) => void) => Promise<void>
}

// 全局增强 Window 接口。
declare global {
    interface Window {
        electronAPI: IElectronAPI
    }
}