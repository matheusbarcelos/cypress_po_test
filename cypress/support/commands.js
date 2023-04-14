
Cypress.Commands.add('login', () => {
    const cpf = Cypress.env('cpf')
    const password = Cypress.env('password')

    const login = () => {
    cy.visit('/');
     cy.get('.btn')
           .should('be.visible')
           .click();
    cy.origin('https://sso.staging.acesso.gov.br', {args: {cpf,password}}, ({cpf,password}) => {
        cy.visit('/login?client_id=promotoria-des.mpmg.mp.br');
        cy.get('#accountId').type(cpf);
        cy.get('form button[type="submit"]').click();
        cy.get('#password').type(password, {log:false});
        cy.get('#submit-button').click();
    })
    cy.contains('Seja bem vindo à Promotoria Online').should('be.visible');
  }

    const options = { cacheAcrossSpecs: true }

    cy.session(cpf, login, options)
    cy.visit('/');
    cy.wait(4000)
})


