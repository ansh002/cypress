describe('customcmd', function()
{
   
    
    
    
    it('customtest', function()
    {
        cy.login('anshul','Aa@54315431')
        cy.title().should('be.equal','anshul | drupals')
        cy.get('.menu-item').contains('Log out').click({force:true})

        cy.login('anshula','Aa@54315431')
        cy.title().should('be.equal','Log in | drupals')


        cy.login('anshul','Aa@5431543')
        cy.title().should('be.equal','Log in | drupals')

                
    })
    it('addcustomer', function()
    {
        cy.login('anshul','Aa@54315431')
                
    })
    it('Edit customer', function()
    { 
        cy.login('anshul','Aa@54315431')
        cy.title().should('be.equal','anshul | drupals')
                
    })



})