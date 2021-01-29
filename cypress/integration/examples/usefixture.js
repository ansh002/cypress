describe('test', function() 
{
   before(function()
   {
       cy.fixture('example').then(function(data)
       {
          this.data=data
       
        })



       






    })   


      it ('fixturedemo', function()
      {
              cy.visit('http://127.0.0.1:49163/user/login', {failOnStatusCode: false})
              cy.get('#edit-name').type(this.data.username)
              cy.get('#edit-pass').type(this.data.password)
              cy.get('form').contains('Log in').should('be.visible').click()
              




        })










})