///<reference types="cypress" />

import loginpage from '../firstclass/loginpage'

describe('Myytest', function()
{
   
    it('fileupload',function()
    {
       const lp=new loginpage()
       lp.visit()
       lp.fillusername('anshul')
       lp.fillpassword('Aa@54315431')
       lp.submit()
       cy.title().should('be.equal','anshul | drupals')     
   
       //upload image
       
       const filename = 'dog.jpg';
       cy.fixture(filename).then(filecontent => {
       
       
       cy.get('#toolbar-link-system-admin_content').click()
       cy.title().should('be.equal','Content | drupals')
       cy.get('#toolbar-link-entity-user-collection').click()
       cy.get('.dropbutton').contains('Edit').click()
       cy.get('input[type="file"]').attachFile('modi.jpg', { subjectType: 'drag-n-drop' });
       cy.wait(10000)
       cy.get('#edit-submit').click()
      
      
      })


     })



})