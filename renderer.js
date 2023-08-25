
// const information = document.getElementById("info")

// information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

// const func = async () =>{
//     // const response = await window.versions.ping()
//     const res = await window.electronAPI.loadPreferences()
//     console.log(res);
// }

// func()

const setButton = document.getElementById("btn")
const titleInput = document.getElementById("title")

setButton.addEventListener("click", () => {
    const title = titleInput.value
    window.electronAPI.setTitle(title)
})

async function func() {
    const res = await window.electronAPI.ping()
    const paths = await window.electronAPI.openFile()
    console.log(res);
    console.log(paths);
}

func()