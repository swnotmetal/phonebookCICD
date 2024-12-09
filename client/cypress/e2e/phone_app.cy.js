/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
describe('Phone all simple test', () => {
  it('frontend can be opened and seen', () => {
    cy.visit('http://localhost:5173')
    cy.contains('add a new contact')
    cy.contains('Phonebook')
    cy.contains('Add')
  })
})

describe('new contact can be added', () => {
  it('a new contact can be added', () => {
    cy.visit('http://localhost:5173')
    cy.get('input[placeholder="enter a name here"]').type('test name')
    cy.get('input[placeholder="enter a phone number here:"]').type('123-4567890')
    cy.contains('Add').click()
    cy.contains('test name')
    cy.contains('123-4567890')
  })
})