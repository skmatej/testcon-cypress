describe('Login functionality', function() {
    it('Should display validation for empty user after attempted loggin', function () {
       
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role User', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 24"]').click()
        cy.get('[id="loginForm.role"]').each(function () {
          //cy.get('[id="loginForm.role"]').click({ force: true })
        
            cy.get('[aria-label="Team Lead"]').click()
            cy.get('[type="submit"]').click()


        })

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User')
        cy.get('.main-nav').find('li').should('have.length', 2)
        let d = new Date(), a = d.getUTCDate();
        cy.get('.calendar--today').contains(a);
    })
})