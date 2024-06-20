//Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
describe('Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.contains('a','Ver pets disponíveis para adoção').click();
    cy.contains('p','Olá! ')
    cy.contains('p',' Veja os amigos disponíveis para adoção!')
  })
})

//Visite a página de principal do AdoPet e teste os botões header;
describe('Visite a página de principal do AdoPet e teste os botões header', () => {
  beforeEach(()=>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
  })
  it('passes', () => {
    cy.contains('a','Ver pets disponíveis para adoção').click();
    cy.contains('Olá! ').should('be.visible')
    cy.contains('Veja os amigos disponíveis para adoção!').should('be.visible')
  })
})

//Com o Cypress, escreva os códigos dos seguintes testes:


//Visite a página de /login do Adopet;
//Visite a página de /home do Adopet;
//Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.