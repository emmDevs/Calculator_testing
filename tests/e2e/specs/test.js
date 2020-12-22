// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('number buttons should update the display of running total', () => {
    cy.get('#number2').click()
    cy.get('#number8').click()
    cy.get('#number4').click()
    cy.get('#number6').click();
    cy.get('.display').should('contain', '2846')
  });
})
