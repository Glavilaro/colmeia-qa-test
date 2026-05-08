describe('Teste de Colmeia Login - Validar link de recuperação de senha', () => {
  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/');
    cy.wait(2000);
  });

  it('Deve confirmar que o link "Esqueceu sua senha?" não redireciona', () => {
    cy.contains('Esqueceu sua senha?').should('be.visible');

    //click en el link
    cy.contains('Esqueceu sua senha?').click();

    // url no es m.
    cy.url().should('eq', 'https://teste-colmeia-qa.colmeia-corp.com/');

    cy.get('form').should('exist');
    cy.get('[formcontrolname="email"]').should('be.visible');
    cy.get('[formcontrolname="password"]').should('be.visible');
  });
});
