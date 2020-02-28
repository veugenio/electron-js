const { app, Menu, Tray } = require('electron')

app.name = 'Electron App example'

app.on('ready', () => {
  const tray = new Tray('./images/icon.png')
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio', checked: true }
  ])
  tray.setContextMenu(contextMenu)  
})
