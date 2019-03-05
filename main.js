const { app, BrowserWindow } = require('electron');

let win;

function createWindow () {
  win = new BrowserWindow({
    show: false,
    // autoHideMenuBar: true, //auto-hide menu (calling btn = alt)
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('kendoUi.html');
  win.maximize()
  win.show()
  win.setMenu(null); // disable menu

  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
