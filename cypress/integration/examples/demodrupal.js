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
        cy.get('#edit-submit').click()

        //navigation
        cy.get('.dropdown').contains('Content').should('be.visible').click().title().should('eq','Content | Theme #11')
        cy.get('.dropdown').contains('Structure').should('be.visible').click().title().should('eq','Structure | Theme #11')
        cy.get('.dropdown').contains('Appearance').should('be.visible').click().title().should('eq','Appearance | Theme #11')
        cy.get('.dropdown').contains('People').should('be.visible').click().title().should('eq','People | Theme #11')
        cy.get('.dropdown').contains('Modules').should('be.visible').click().title().should('eq','Modules | Theme #11')
        cy.get('.dropdown').contains('Configuration').should('be.visible',{force:true}).click().title().should('eq','Configuration | Theme #11')
        cy.get('.dropdown').contains('Support').should('be.visible')
        cy.xpath('//*[@id="admin-menu-menu"]/li[8]/a').click().title().should('eq','CiviCRM Home | Theme #11')
        
               






    })


})