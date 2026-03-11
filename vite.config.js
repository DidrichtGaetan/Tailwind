const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Version espagnole
        main: './index.html',
        particulares: './clasesParticulares.html',
        grupo: './enGrupoReducido.html',
        empresas: './enEmpresas.html',
        espagnol: './espagnol.html',
        francais: './francais.html',
        anglais: './anglais.html',
        traduccion: './traduccion.html',
        methodologie: './methodologie.html',
        online: './online.html',
        intensivo: './intensivo.html',
        offres: './offres.html',
        anoUno: './1ano.html',
        // Version française
        main_fr: './index_fr.html',
        particulares_fr: './clasesParticulares_fr.html',
        grupo_fr: './enGrupoReducido_fr.html',
        empresas_fr: './enEmpresas_fr.html',
        espagnol_fr: './espagnol_fr.html',
        francais_fr: './francais_fr.html',
        anglais_fr: './anglais_fr.html',
        traduccion_fr: './traduccion_fr.html',
        methodologie_fr: './methodologie_fr.html',
        online_fr: './online_fr.html',
        intensivo_fr: './intensivo_fr.html',
        offres_fr: './offres_fr.html',
        anoUno_fr: './1ano_fr.html',
      }
    }
  }
})
