class PedirVistaPage {

  preecherFeito(){
    cy.wait(1000)
    cy.get('input[name="numero"]')
      .type(Cypress.env('feito'), { delay: 40})
    cy.get('.card-actions > .btn')
      .click()
  }

  validarPedidoEmAnalise(){
    cy.get('.bx--inline-notification__title')
        .invoke('text')
        .then(($value) => {
            expect($value).to.equal(Cypress.env('pedido_analise'))
        })
  }
}

export default new PedirVistaPage;