describe('Teste de login Colmeia', () => {
  it('Deve exibir mensagem de erro ao login incorreto', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/');
    cy.wait(2000);
    cy.get('[formcontrolname="email"]').type('qa@test.com');
    cy.get('[formcontrolname="password"]').type('123456');
    cy.get('button[type="submit"]').click();
    cy.contains('Seu login está incorreto').should('be.visible');
  });
});
