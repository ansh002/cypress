// ignore uncaught exceptions
Cypress.on('uncaught:exception', (err) => {
    return false
  })
  
  

describe('login', function() 
{
    it('visits ', function() {
        cy.visit('http://theme11r.oneeach.org/user/login', {failOnStatusCode: false})

        cy.get('#edit-name').type('sysop')
        cy.get('input[type="password"]').type('Ftc@vid@20') 
        cy.get('[role=presentation]').click()
        cy.get('#edit-submit').click()






    })


})