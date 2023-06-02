const { app, BrowserWindow } = require('electron')
const base= "src/"


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // titleBarStyle: 'hidden'
  })

  win.loadFile(base + 'index.html')
  win.setMenu(null)
}

app.whenReady().then(() => {
  createWindow()
})