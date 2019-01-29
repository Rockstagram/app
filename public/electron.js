// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const path = require('path');
const fork = require('child_process').fork;
const url = require('url');
const ChromeManager = require('./chrome-manager');
const { appUpdater } = require('./auto-updater');

const isDev = process.env.MODE === 'development';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow, cManager;

// for workers
exports.fork = fork;
exports.path = path;
exports.getExecutablePath = () => {
  return cManager.executablePath;
};

async function getChromium() {
  cManager = new ChromeManager({
    app,
    mainWindow
  });
  await cManager.setup();
}

function createWindow() {
  console.log('DEVELOPMENT MODE?', isDev);
  if (isDev) {
    const {
      default: installExtension,
      REDUX_DEVTOOLS
    } = require('electron-devtools-installer');

    installExtension(REDUX_DEVTOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(err => console.log('An error occurred: ', err));
  }

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      // devTools: isDev,
      nodeIntegration: true
    }
  });

  // if (!isDev) {
  //   mainWindow.webContents.on('devtools-opened', () => {
  //     mainWindow.webContents.closeDevTools();
  //   });
  // }

  // and load the index.html of the app.
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: isDev
        ? path.join(__dirname, '/../build/index.html')
        : path.join(__dirname, './index.html'),
      protocol: 'file:',
      slashes: true
    });
  mainWindow.loadURL(startUrl);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  mainWindow.webContents.once('dom-ready', async () => {
    console.log('loading…');
    mainWindow.webContents.send('app-init', true);
    mainWindow.webContents.send('app-version', app.getVersion());
    await getChromium();
    mainWindow.webContents.send('app-init', false);
    console.log('loaded √');
  });

  if (!isDev) appUpdater(mainWindow);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function() {
  createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
