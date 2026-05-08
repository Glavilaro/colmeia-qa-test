describe('Teste de Colmeia Candidato - Validar que não possui ações', () => {
  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/');
    cy.wait(2000);
    cy.get('[formcontrolname="email"]').type('qa@test.com');
    cy.get('[formcontrolname="password"]').type('123456');
    cy.get('button[type="submit"]').click();

    cy.contains('Seu login está incorreto').should('be.visible');
    cy.contains('Continuar').click();

    cy.url().should('include', '/dashboard');
    cy.wait(5000);
  });

  it('Deve confirmar que o módulo Candidato não realiza nenhuma ação', () => {
    //cand.visible
    cy.contains('Candidato').should('be.visible');

    cy.contains('Candidato').click();
    cy.url().should('include', '/dashboard'); // sigue igual
    cy.get('table').should('not.exist');
    cy.get('form').should('not.exist');
  });
});
