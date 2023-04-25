import HomePage from '../pages/homePage.js'
import PeticionarPage from '../pages/peticionarPage.js'
import ProcedimentosPage from '../pages/procedimentosPage.js'

describe('Peticionamentos', () => {
  beforeEach(() => {
    cy.login();
  })
    
  it('Efetuar um peticionamento válido', () => {
    HomePage.clickCardPeticionar();
    PeticionarPage.preencherFeito();
    PeticionarPage.uploadDocumento();
    PeticionarPage.confirmarPeticionamento();
    ProcedimentosPage.validarPeticionamento();
  });
});