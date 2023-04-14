class HistoricoPeticionamentoPage {

  buscarProcedimento(){
    cy.get('.input-group > .input')
      .type(Cypress.env('feito'))
    cy.xpath('//*[@class="flex mb-2"]//button[@class="btn btn-sm btn-square"]')  
      .click()
   }

   efetuarDownloadDocumento(){
    cy.xpath('//*[@class="w-20"]//label[@title="Documentos"]')
      .first()
      .click()
    cy.xpath('//*[@class="w-20"]//label[@title="Documentos"]')
      .first()
      .click()
      cy.get('[title="Baixar Documento"]')
      .click()
   }

   validarDownloadDocumento(){
    cy.readFile('cypress/downloads/doc.pdf')
      .should('exist')
   }

   validarConteudoDocumento(){
    cy.task('readPdf', 'cypress/downloads/doc.pdf')
      .should('contain', Cypress.env('valor_documento'))
   }
}

export default new HistoricoPeticionamentoPage;
