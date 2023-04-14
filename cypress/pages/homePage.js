class HomePage {

  clickCardPeticionar(){
    cy.get('[class="card-title"]')
      .contains('Peticionar')
      .click()
    cy.contains('Para peticionar favor inserir o número do procedimento no campo ao lado')
      .should('be.visible')
  }

  clickCardPedirVista(){
    cy.get('[class="card-title"]')
      .contains('Pedir vista')
      .click()
    cy.contains('Para pedir vista favor inserir o número do procedimento no campo ao lado.')
      .should('be.visible')
  }

  clickCardProcedimentosVinculados(){
    cy.get('[class="card-title"]')
      .contains('Procedimentos vinculados')
      .click()
    cy.contains('Listagem de procedimentos vinculados ao seu CPF')
      .should('be.visible')
  }

  clickCardMeusPeticionamentos(){
    cy.get('[class="card-title"]')
      .contains('Meus peticionamentos')
      .click()
    cy.contains('Histórico de peticionamentos do usuário')
      .should('be.visible')
  }

}

export default new HomePage;



