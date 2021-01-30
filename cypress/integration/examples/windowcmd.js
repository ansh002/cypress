

describe('Myytest', function()
{
   
    it('verify title of the page', function()
     {
        
        cy.visit('http://127.0.0.1:49163/user/login', {failOnStatusCode: false})
        cy.get('input[type="text"]').type('anshul')
        cy.get('input[type="password"]').type('Aa@54315431')    
        cy.get('form').contains('Log in').should('be.visible').click()
        cy.get('#toolbar-link-system-themes_page').click()
       //window command and alternative in cypress

        cy.window().should(win => {
           const loc = win.location
           expect(loc.pathname).to.eql('/admin/appearance')
           expect(loc.protocol).to.eql('http:')
            
           //reload with window
          win.location.reload()
         

        })

          
       

          //cypress alternatives
          cy.location('pathname').should('eq','/admin/appearance')
          cy.location('protocol').should('eq','http:')

          //cypress reload
          cy.reload()


    
    
    
    
    
     })



})