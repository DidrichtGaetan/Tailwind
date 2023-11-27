const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        particulares: './clasesParticulares.html',
        grupo: './enGrupoReducido.html',
        online: './online.html',
        empresas: './enEmpresas.html',
        espagnol: 'espagnol.html',
        francais: 'francais.html',
        anglais: 'anglais.html',
        mainJS: './script.js'
      }
    }
  }
})