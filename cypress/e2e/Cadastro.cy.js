describe('Realizar cadastro do usuario', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.contains('a','Cadastrar').click();
    cy.Cadastrar('Otavio Franco','otaviofranco4@gmail.com','Senha123','Senha123')
    //cy.get('input[name="nome"]').type('Otavio Franco')
    //cy.get('input[name="email"]').type('otaviofranco4@gmail.com')
    //cy.get('input[name="password"]').type('Senha123')
    //cy.get('input[name="confirm_password"]').type('Senha123')
    //cy.contains('button','Cadastrar').click();
  })
})

