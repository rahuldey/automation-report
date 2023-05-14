const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  notification: (message) => {
    ipcRenderer.send('notify', message);
  },
});
