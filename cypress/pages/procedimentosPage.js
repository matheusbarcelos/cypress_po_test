class ProcedimentosPage {

  validarPeticionamento(){
    cy.xpath('//*[@class="_toastItem svelte-95rq8t"]//div[contains(text(), "Petição realizada com sucesso.")]')
      .should('be.visible')
    // cy.xpath('//*[@id="main-content"]//tbody//tr[1]')
    //   .invoke('text')
    //   .then(($value) => {
    //     expect($value).to.contains('doc.pdf')
    //   })
   }

   buscarProcedimento(){
    cy.get('.input-group > .input')
      .type(Cypress.env('feito_vinculado'))
    cy.xpath('//*[@class="input-group"]//button[@class="btn btn-sm btn-square"]')
      .click()
   }

   verificarInformacoesProcedimento(){
    cy.get('tbody > tr > :nth-child(3)')
      .invoke('text')
      .then(($value) => {
        expect($value).to.contains('Inquérito Civil')
      })
   }
   
}

export default new ProcedimentosPage;