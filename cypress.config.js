const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require('path');
const pdf = require('pdf-parse');
const mongo = require('cypress-mongodb');
const  allureWriter  =  require ( '@shelex/cypress-allure-plugin/writer' ) ; 

const readPdf = (pathToPdf) => {
  return new Promise((resolve) => {
    const pdfPath = path.resolve(pathToPdf);
    let dataBuffer = fs.readFileSync(pdfPath);
    pdf(dataBuffer).then(function ({ text }) {
      resolve(text);
    });
  });
}

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportHeight: 900,
  viewportWidth: 1440,
  e2e: {
    setupNodeEvents(on, config) {
      mongo.configurePlugin(on);
      allureWriter ( on ,  config ) ; 
      on('task', {
        readPdf
      })
      return config; 
    },
    testIsolation: false,
    baseUrl: 'http://matrix-des.mpmg.mp.br:3000/',
    "env": {
      "cpf": "12024991637",
      "password": "UserTest2023#",
      "feito": "041605200082065202322",
      "id_feito": "640b809585a81760d553b695",
      "feito_vinculado": "041605200081488202381",
      "pedido_analise": " Você já tem um pedido de vista para esse procedimento em análise!",
       "valor_documento": "SOLICITAÇÃO DE ATUAÇÃO (SA) Nº: 176/2022",
      "mongodb": {
        "uri": "mongodb://mongodb-des.mpmg.mp.br:27017/?directConnection=true",
        "database": "uno",
      }
    },
    videoCompression: 1,
  },
});
