import HomePage from '../pages/homePage.js'
import PedirVista from '../pages/pedir_vistaPage.js'

describe('Pedidos de Vista', () => {
  beforeEach(() => {
    cy.login();
  })

  it('Pedido de Vista em análise', () => {
    HomePage.clickCardPedirVista();
    PedirVista.preecherFeito();
    PedirVista.validarPedidoEmAnalise();
  });
})