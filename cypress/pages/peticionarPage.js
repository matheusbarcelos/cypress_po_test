class PeticionarPage {

    preencherFeito(){
      cy.wait(1000)
      cy.get('input[name="numero"]')
        .clear()
        .type(Cypress.env('feito'), { delay: 40})
      cy.get('.card-actions > .btn')
        .click()
      cy.contains('Adicionar documento(s)').should('be.visible')         
    }

    uploadDocumento(){
      cy.get('input[type=\'file\']')
        .selectFile('cypress/fixtures/documentos/doc.pdf', {force: true})
        .then(input => {
          expect(input[0].files[0].name).to.equal('doc.pdf')
      })
    }

    confirmarPeticionamento(){
      cy.get('.checkbox').click()
      cy.get('form button[type="submit"]')
        .contains('Peticionar')
        .click();
    }

}


export default new PeticionarPage;