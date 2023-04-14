import HomePage from '../pages/homePage.js'
import ProcedimentosPage from '../pages/procedimentosPage.js'

describe('Procedimentos', () =>{
  beforeEach(() => {
    cy.login();
  })

  it('Consultar informações de um procedimento vinculado', () => {
    HomePage.clickCardProcedimentosVinculados();
    ProcedimentosPage.buscarProcedimento();
    ProcedimentosPage.verificarInformacoesProcedimento();
  });
})