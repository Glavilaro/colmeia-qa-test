describe('Teste de Colmeia Forms - Validar que está vazio', () => {
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
        cy.contains('Forms').should('be.visible').click();
    });

    it('Deve confirmar que não há registros em Forms', () => {
        cy.get('table').should('not.exist');
        cy.get('form').should('not.exist');
        cy.get('button.ml-3.flex.items-center.gap-3').click();
        cy.get('form').should('not.exist');
        cy.get('table').should('not.exist');
    });
});
