const { app, BrowserWindow } = require('electron');

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({});
  win.maximize();
  win.setMenu(null);
  win.loadFile('kendoUi.html');
}

app.on('ready', createWindow);