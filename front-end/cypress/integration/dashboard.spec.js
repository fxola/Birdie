describe('Dashboard screen test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.contains('Mereoleona Vermillion').click();
  });

  it('Should render dashboard screen with side bar contents correctly', () => {
    cy.url().should('include', '/dashboard');
    cy.contains(`Mereoleona's Profile`);
    cy.contains('Wellbeing');
    cy.contains('Metabolism');
    cy.contains('Alerts');
  });

  it('Should render dashboard screen with a select input and General observation as the default value and have other wellbeing options', () => {
    cy.url().should('include', '/dashboard');
    cy.get('select').select('General observation');
    cy.get('select').should('have.value', 'general_observation');
    cy.get('select').select('Mood observation');
    cy.get('select').should('have.value', 'mood_observation');
    cy.get('select').select('Concerns raised');
    cy.get('select').should('have.value', 'concern_raised');
    cy.get('select').select('Physical health observations');
    cy.get('select').should('have.value', 'physical_health_observation');
  });

  it('Should render the loading indicator while fetching general observation events for user', () => {
    cy.contains('Loading');
    cy.contains('General observation');
    cy.contains('Note');
  });

  it('Should display select input and Food intake observation as the default value when the user clicks on Metabolism Tab and have other metabolism options', () => {
    cy.contains('Metabolism').click();
    cy.get('select').select('Food intake observation');
    cy.get('select').should('have.value', 'food_intake_observation');
    cy.get('select').select('Catheter observation');
    cy.get('select').should('have.value', 'catheter_observation');
    cy.get('select').select('Toilet visits recorded');
    cy.get('select').should('have.value', 'toilet_visit_recorded');
    cy.get('select').select('Incontinence pad observation');
    cy.get('select').should('have.value', 'incontinence_pad_observation');
  });

  it('Should display the Alert cards when the user clicks on Alert Tab', () => {
    cy.contains('Alert').click();
    cy.contains('Raised Alerts');
    cy.contains('Qualified Alerts');
    cy.contains('Loading');
  });

  it('Should display the appropriate message when a user views from a mobile device', () => {
    cy.viewport(500, 800);
    cy.visit('http://localhost:3000');
    cy.contains('Please view on a desktop for a better experience');
  });
});
