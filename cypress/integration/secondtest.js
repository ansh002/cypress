
describe('login', function() {
  it('visits ', function() {
    cy.visit('http://127.0.0.1:49163/user/login', {failOnStatusCode: false})
    cy.get('input[type="text"]').type('anshul')
    cy.get('input[type="password"]').type('Aa@54315431')    
    cy.get('form').contains('Log in').should('be.visible').click()
      
    //webform test
    cy.get('.toolbar').contains('Structure').click()
    cy.get('.label').contains('Webforms').click()
  
     //enquiry webform  
    cy.get('table').contains('enquiry').click()
    cy.get('#edit-working').check().should('be.checked').and('have.value','1')
    
      
      
  })
     //dropdown test
  it('howtocontact Drop Down', function () {
     cy.get('#edit-how-to-contact').select('adress').should('have.value','adress') 
     

  })
    //module select test
  it('another dropdown', function() {
    cy.get('#toolbar-link-entity-user-collection').click()
    cy.visit('http://127.0.0.1:49163/admin/people', {failOnStatusCode: false})
    cy.get('.menu-item').contains('Log in').click()
    cy.get('input[type="text"]').type('anshul')
    cy.get('input[type="password"]').type('Aa@54315431')
    cy.get('form').contains('Log in').click()
    cy.get('#toolbar-link-entity-user-collection').click()
    cy.get('.dropbutton').click()
    cy.get('#toolbar-link-system-modules_list').click({force:true})
    cy.get('#edit-text').click({force:true}).type('js').click()
    cy.get('#module-jsonapi').click()
    cy.get('input[type="submit"]').click()
     

  })
  it('radio buttons', function() {
     cy.visit('http://127.0.0.1:49163/admin/modules', {failOnStatusCode: false})
     cy.get('.menu-item').contains('Log in').click()
     cy.get('input[type="text"]').type('anshul')
     cy.get('input[type="password"]').type('Aa@54315431')
     cy.get('form').contains('Log in').click()
     cy.get('.toolbar').contains('Structure').click()
     cy.get('.label').contains('Webforms').click()
     cy.get('table').contains('enquiry').click()
     cy.get('#edit-marital-status-maried').should('be.visible').click().should('be.checked')
     cy.get('#edit-marital-status-bachelor').should('be.visible').should('not.be.checked').click()
     cy.get('#edit-name').should('not.contain.value').click({force:true}).type('anshul')
     
     cy.get('#edit-wizard-next').click()

  })







});