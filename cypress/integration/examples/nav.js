describe('Myytest', function()
{
   
    it('verify title of the page', function()
    {
        
        cy.visit('http://127.0.0.1:49163/user/login', {failOnStatusCode: false})
        cy.get('input[type="text"]').type('anshul')
        cy.get('input[type="password"]').type('Aa@54315431')    
        cy.get('form').contains('Log in').should('be.visible').click()
        cy.title().should('eq', 'anshul | drupals')       
    
      //navigation test
        cy.get('#toolbar-link-help-main').click()
        cy.title().should('eq', 'Help | drupals')

        cy.go('back')
        cy.title().should('eq', 'anshul | drupals') 

        cy.go('forward')
        cy.title().should('eq', 'Help | drupals')

        cy.go(-1) 
        cy.title().should('eq', 'anshul | drupals') 

        cy.go(1)
        cy.title().should('eq', 'Help | drupals')
    
        
    
    
    
    })

})