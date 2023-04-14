import HomePage from '../pages/homePage.js'
import HistoricoPetPage from '../pages/historico_peticionamentoPage.js'

describe('Histórico de Peticionamentos', () => {
  beforeEach(() => {
    cy.login();
  })

  it('Efetuar download de um peticionamento', () => {
    HomePage.clickCardMeusPeticionamentos();
    HistoricoPetPage.buscarProcedimento();
    HistoricoPetPage.efetuarDownloadDocumento();
    HistoricoPetPage.validarDownloadDocumento();
    HistoricoPetPage.validarConteudoDocumento();
  });
})