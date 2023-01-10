
const { app, BrowserWindow, protocol ,dialog} = require("electron");
const { autoUpdater } = require("electron-updater");
const path = require("path");
const url = require("url");

let updateInterval=null;
const iconUrl = url.format({
  pathname: path.join(__dirname, "/movies.ico"),
  protocol: 'file:',
  slashes: true
 })

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    icon: __dirname + "/movies.ico",
  
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });


  
  const appURL = app.isPackaged
    ? url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true,
      })
    : "http://localhost:3000";
  mainWindow.loadURL(appURL);
  

  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools();
  }
}


function setupLocalFilesNormalizerProxy() {
  protocol.registerHttpProtocol(
    "file",
    (request, callback) => {
      const url = request.url.substr(8);
      callback({ path: path.normalize(`${__dirname}/${url}`) });
    },
    (error) => {
      if (error) console.error("Failed to register protocol");
    }
  );
}


app.whenReady().then(() => {
  createWindow();
  setupLocalFilesNormalizerProxy();
  updateInterval = setInterval(() => autoUpdater.checkForUpdates(), 60000);
  app.on("activate", function () {
   
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
autoUpdater.on("update-available", (_event, releaseNotes, releaseName) => {
  const dialogOpts = {
     type: 'info',
     buttons: ['Ok'],
     title: 'Update Available',
     message: process.platform === 'win32' ? releaseNotes : releaseName,
     detail: 'A new version download started. The app will be restarted to install the update.'
  };
  dialog.showMessageBox(dialogOpts);

  updateInterval = null;
});

autoUpdater.on("update-downloaded", (_event, releaseNotes, releaseName) => {
  const dialogOpts = {
     type: 'info',
     buttons: ['Restart', 'Later'],
     title: 'Application Update',
     message: process.platform === 'win32' ? releaseNotes : releaseName,
     detail: 'A new version has been downloaded. Restart the application to apply the updates.'
  };
  dialog.showMessageBox(dialogOpts).then((returnValue) => {
     if (returnValue.response === 0) autoUpdater.quitAndInstall()
  });
});


app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});


const allowedNavigationDestinations = "https://my-electron-app.com";
app.on("web-contents-created", (event, contents) => {
  contents.on("will-navigate", (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);

    if (!allowedNavigationDestinations.includes(parsedUrl.origin)) {
      event.preventDefault();
    }
  });
});