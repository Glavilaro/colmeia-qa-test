describe('Teste de Busca - Resultados e Nenhum Resultado', () => {
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

    cy.get('a[data-variant="icon"]').first().click();
    cy.contains('Bancos de dados').should('be.visible').click();
  });

  it('Deve exibir resultados ao buscar por registro existente', () => {
    cy.get('table tbody tr').should('have.length.at.least', 1);

    cy.get('input[placeholder="Pesquisar"]').clear().type('2');
    cy.get('div.bg-gray-100 button').click();

    cy.get('table tbody tr').should('have.length', 1);
    cy.contains('2').should('be.visible');
  });

  it('Deve exibir mensagem ao buscar por registro inexistente', () => {
    cy.get('input[placeholder="Pesquisar"]').clear().type('XYZ');
    cy.get('div.bg-gray-100 button').click();
    cy.contains('Nenhum resultado encontrado').should('be.visible');
    cy.contains('XYZ').should('not.exist');
  });
});
