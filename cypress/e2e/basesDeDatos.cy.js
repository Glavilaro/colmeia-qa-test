describe('Teste de Bases de Dados Colmeia', () => {
  it('Deve exibir tabela vazia quando não há bases de dados', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/');
    cy.wait(2000);
    cy.get('[formcontrolname="email"]').type('qa@test.com');
    cy.get('[formcontrolname="password"]').type('123456');
    cy.get('button[type="submit"]').click();

    cy.contains('Seu login está incorreto').should('be.visible');
    cy.contains('Continuar').click();

    cy.url().should('include', '/dashboard');
    cy.wait(5000);

    //  Hace click la campana para abrir el menu lateral
    cy.get('a[data-variant="icon"]').first().click();

    // Espera que aparezca el enlace "Bancos de dados" y hace click
    cy.contains('Bancos de dados').should('be.visible').click();

    
    cy.get('table', { timeout: 10000 }).should('exist');
    cy.get('table tbody').find('tr').should('have.length', 0);
  });
});
