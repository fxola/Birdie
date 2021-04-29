describe('Home screen test', () => {
  it('Should render home screen with available account cards', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Choose a family member');
    cy.contains('Mereoleona Vermillion');
    cy.contains('Levi Ackerman');
    cy.contains('Isaac Netero');
  });

  it('Should display the dashboard when the user clicks an account to view', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Mereoleona Vermillion').click();
    cy.url().should('include', '/dashboard');
  });

  it('Should display the appropriate message when a user views from a mobile device', () => {
    cy.viewport(500, 800);
    cy.visit('http://localhost:3000');
    cy.contains('Please view on a desktop for a better experience');
  });
});
