import { contextBridge, ipcRenderer } from 'electron'

export const apiTeste = {
  insereTeste: async () =>{
    ipcRenderer.send('create');
  },

  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  }
}

contextBridge.exposeInMainWorld('Teste', apiTeste)
