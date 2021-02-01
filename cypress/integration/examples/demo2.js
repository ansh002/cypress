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
        cy.get('#edit-submit').click().title().should('eq','sysop | Theme #11')

        //navigation
        cy.xpath('//*[@id="block-block-12"]/p/a').click().title().should('eq','Requested Page Not Found | Theme #11')
        cy.xpath('//*[@id="block-tb-megamenu-main-menu"]/div[2]/div/ul/li[1]/a').should('be.visible').click().title().should('eq','Our Impact | Theme #11')
        cy.xpath('//*[@id="block-tb-megamenu-main-menu"]/div[2]/div/ul/li[2]/a').should('be.visible').click().title().should('eq','Our Partners | Theme #11') 
        cy.xpath('//*[@id="block-tb-megamenu-main-menu"]/div[2]/div/ul/li[3]/a').should('be.visible').click().wait(200).title().should('eq','Get Involved | Theme #11')
        cy.xpath('//*[@id="block-tb-megamenu-main-menu"]/div[2]/div/ul/li[4]/a').should('be.visible').click().wait(200).title().should('eq','News | Theme #11')
        //search
        cy.xpath('//*[@id="block-block-3"]/a/i').click()
        cy.wait(500)
        cy.xpath('//*[@id="edit-search-block-form--2"]').click({force:true}).type('abcd').type('{enter}').title().should('eq','Search | Theme #11')
        cy.xpath('//*[@id="block-block-3"]/a/i').click()
        cy.xpath('//*[@id="edit-search-block-form--2"]').click({force:true}).type('123#').type('{enter}').title().should('eq','Search | Theme #11')

        //donation form
        
        cy.get('#donate').click().title().should('eq','DONATE | Theme #11')
        cy.get('#donate').click()
        cy.xpath('//*[@id="priceset"]/div[1]/div[2]/div[1]/span/label/span[2]').click()
        
        cy.xpath('//*[@id="priceset"]/div[1]/div[2]/div[2]/span/label/span[2]').click()
        cy.xpath('//*[@id="priceset"]/div[1]/div[2]/div[3]/span/label/span[2]').click()
        cy.xpath('//*[@id="priceset"]/div[1]/div[2]/div[4]/span/label/span[2]').click()
        cy.xpath('//*[@id="priceset"]/div[1]/div[2]/div[5]/span/label/span[2]').click()
        cy.xpath('//*[@id="priceset"]/div[1]/div[2]/div[6]/span/label/span[2]').click()
        cy.xpath('//*[@id="priceset"]/div[1]/div[2]/div[7]/span/label').click()
        
        //input text
        cy.xpath('//*[@id="price_3"]').click().type('125')

        //checkbox
        cy.get('[name=is_recur]').click()

        cy.get('#custom_1_1').click()

        cy.get('#custom_1_2').click()

        cy.get('#first_name').click().type('abcg')

        cy.get('#last_name').click().type('hjghj')

        //email
        cy.get('#email-Primary').click().type('anshul@saaranga.com')
        
        //comments
        cy.get('#custom_2').click().type('donation form')

        //button
        cy.xpath('//*[@id="_qf_Main_upload-bottom"]').click()




        






        

        
        
               






    })


})