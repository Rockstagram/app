const os = require('os');
const { autoUpdater } = require('electron-updater');
const { app, dialog, shell } = require('electron');
const { download } = require('electron-dl');
const fetch = require('node-fetch');
const version = app.getVersion();
const platform = os.platform() + '_' + os.arch(); // usually returns darwin_64
console.log(version, process.platform, platform);

async function appUpdater(mainWindow) {
  console.log('CHECK FOR UPDATE');
  // for platforms other than mac
  if (platform.toLowerCase().indexOf('darwin') < 0)
    return autoUpdater.checkForUpdatesAndNotify();

  // mac only (because otherwise we would have to buy an expensive mac license)
  const call = await fetch(
    'https://api.github.com/repos/Rockstagram/app/releases'
  );
  const json = await call.json();
  const latest = json[0].name;
  const update = version != latest;
  console.log('CURRENT', version, 'LATEST', latest, 'NEEDS UPDATE?', update);
  if (!update) return;

  const releaseNotes = json[0].body;
  for(let i = 0, il = json[0].assets.length; i < il; i++) {
    if(json[0].assets[i].name.indexOf('.dmg') > -1)
      var asset = json[0].assets[i];
  }
  if(!asset) return;

  const downloadUrl = asset.browser_download_url;
  const name = asset.name;

  let message = `
A new version of ${app.getName()} is now available. 
Current: ${version}. New Version: ${latest}.
Do you want to download it?

(to update, download the new version and simply replace the old app with the new one)

${
  releaseNotes
    ? `Release notes:
${releaseNotes}`
    : ''
}
  `;

  dialog.showMessageBox(
    {
      type: 'question',
      buttons: ['Later', 'Download'],
      defaultId: 1,
      message: `A new version of ${app.getName()} is available`,
      detail: message
    },
    async response => {
      if (response === 1) {
        setTimeout(() => {
          dialog.showMessageBox({
            type: 'info',
            message: 'The update is being downloaded.',
            detail: `Once finished, close ${app.getName()}, find the new version in your downloads folder and simply replace the current installation with the new one.`
          });
        }, 1500);
        await download(mainWindow, downloadUrl);
        dialog.showMessageBox(
          {
            type: 'info',
            message: 'Download Successful',
            buttons: ['Later', 'Close & Open new'],
            defaultId: 1,
            detail: `
Please close this app and replace the current installation with the new one.

(Just drag and drop the new one to your applications folder and choose replace)
            `
          },
          response => {
            shell.openItem(`${app.getPath('downloads')}/${name}`);
            if (response === 1) setTimeout(() => app.quit(), 1000);
          }
        );
      }
    }
  );
}

exports = module.exports = {
  appUpdater
};
