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
    // cy.visit('http://127.0.0.1:5500/index.html')

    // Act
    cy.get("[data-cy=clear]").click();
    cy.get("[data-cy=seven]").click();
    cy.get("#plusButton").click();
    cy.get("#twoButton").click();
    cy.get("#evaluateButton").click();

    // Assert
    cy.get("#inputField").should("have.value", "9");
  }) 

  it('checks 7 - 2 equals 5', () => {
    // Arrange
    // cy.visit('http://127.0.0.1:5500/index.html')

    // Act
    cy.get("[data-cy=clear]").click();
    cy.get("[data-cy=seven]").click();
    cy.get("#minusButton").click();
    cy.get("#twoButton").click();
    cy.get("#evaluateButton").click();

    // Assert
    cy.get("#inputField").should("have.value", "5");
  })

  it('checks 7 * 2 equals 14', () => {
    // Arrange
    // cy.visit('http://127.0.0.1:5500/index.html')

    // Act
    cy.get("[data-cy=clear]").click();
    cy.get("[data-cy=seven]").click();
    cy.get("#multiplicationButton").click();
    cy.get("#twoButton").click();
    cy.get("#evaluateButton").click();

    // Assert
    cy.get("#inputField").should("have.value", "14");
  })

  it('checks 7 / 2 equals 3.5', () => {
    // Arrange
    // cy.visit('http://127.0.0.1:5500/index.html')

    // Act
    cy.get("[data-cy=clear]").click();
    cy.get("[data-cy=seven]").click();
    cy.get("#divisionButton").click();
    cy.get("#twoButton").click();
    cy.get("#evaluateButton").click();

    // Assert
    cy.get("#inputField").should("have.value", "3.5");
  })

})
