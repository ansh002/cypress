

describe('login', function() {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:49163/user/login', {failOnStatusCode: false})
        cy.get('input[type="text"]').type('anshul')
        cy.get('input[type="password"]').type('Aa@54315431')    
        cy.get('form').contains('Log in').should('be.visible').click()
    })
  
    it('viewport', () => {
      
  
      cy.get('#toolbar-bar').should('be.visible')
      cy.viewport(360, 500)
  
      
      cy.get('#toolbar-bar').should('be.visible')
      cy.get('#toolbar-item-shortcuts').should('be.visible')
      cy.get('#toolbar-link-system-admin_content').should('be.visible')
  
      //check site in large screen
      cy.viewport(2999, 2999)
  
      
      //check site in different phones
      cy.viewport('macbook-15')
      cy.wait(1000)
      cy.viewport('macbook-13')
      cy.wait(1000)
      cy.viewport('macbook-11')
      cy.wait(1000)
      cy.viewport('ipad-2')
      cy.wait(1000)
      cy.viewport('ipad-mini')
      cy.wait(1000)
      cy.viewport('iphone-6+')
      cy.wait(1000)
      cy.viewport('iphone-6')
      cy.wait(1000)
      cy.viewport('iphone-5')
      cy.wait(1000)
      cy.viewport('iphone-4')
      cy.wait(1000)
      
  
      
    })
  })
  