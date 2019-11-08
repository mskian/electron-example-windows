//handle setupevents as quickly as possible
const setupEvents = require('./installers/setupEvents')
if (setupEvents.handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}

const electron = require('electron');
const {
	app,
	BrowserWindow,
	Menu
} = electron;
const contextMenu = require('electron-context-menu');
const shell = require('electron').shell
var path = require('path');
var weburl = 'https://task.santhoshveer.com';

var menu = Menu.buildFromTemplate([{
	label: 'Menu',
	submenu: [{
			label: 'Open in Browser',
			click() {
				shell.openExternal(weburl)
			}
		},
		{
			label: 'Minimize',
			accelerator: 'CmdOrCtrl+M',
			role: 'minimize'
		},
		{
			label: "Refresh Page",
			accelerator: "CmdOrCtrl+R",
			click() {
				mainWindow.reload();
			}
		},
		{
			type: 'separator'
		},
		{
			label: 'Exit',
			click() {
				app.quit()
			}
		}
	]
}])
Menu.setApplicationMenu(menu);

contextMenu({
	prepend: (params) => [{
		label: 'Menu',
		visible: params.mediaType === 'image'
	}]
});

let mainWindow;

app.setName('Electron Example');

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 700,
		backgroundColor: '#15171A',
		icon: path.join(__dirname, '/assets/icons/Icon-64.png')
	});

	mainWindow.setTitle('Electron Example');
	mainWindow.loadURL(weburl);

	mainWindow.on('closed', () => {
		mainWindow = null;
	});

});