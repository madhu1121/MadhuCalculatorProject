/// <reference types="cypress" />

// my actual first test - does the page load
describe('The main page loads', () => {
  it('successfully loads', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
  }) 
})


// testing basic operations
describe('Basic Calculator Operations', () => {
  it('checks 7 + 2 equals 9', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')

    // Act
    cy.get("[data-cy=seven]").click();
    cy.get("#plusButton").click();
    cy.get("#twoButton").click();
    cy.get("#evaluateButton").click();

    // Assert
    cy.get("#inputField").should("have.value", "9");
  }) 
})
