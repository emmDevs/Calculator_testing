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

  it('Arithmetical operations should update the display with the result of the operation', () => {
    cy.get('#number2').click()
    cy.get('#operator_add').click()
    cy.get('#number4').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '6')
  });

  it('Arithmetical operations should update the display with the result of the operation', () => {
    cy.get('#number4').click()
    cy.get('#operator_subtract').click()
    cy.get('#number2').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2')
  });

  it('Arithmetical operations should update the display with the result of the operation', () => {
    cy.get('#number8').click()
    cy.get('#operator_divide').click()
    cy.get('#number2').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4')
  });

  it('Arithmetical operations should update the display with the result of the operation', () => {
    cy.get('#number4').click()
    cy.get('#operator_multiply').click()
    cy.get('#number2').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '8')
  });

  it('multiple operations should be chained togather', () => {
    cy.get('#number4').click()
    cy.get('#operator_multiply').click()
    cy.get('#number4').click()
    cy.get('#operator_add').click()
    cy.get('#number6').click()
    cy.get('#operator_divide').click()
    cy.get('#number2').click()
    cy.get('#operator_subtract').click()
    cy.get('#number7').click()
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4')
  });
})
