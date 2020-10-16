describe ('Pizza App', () => {

    const orderButton = () => cy.get('a[href="/pizza"]')
    const homeButton = () => cy.get('a[href="/"]')

    it('check links and click', () => {
        cy.visit('http://localhost:3000')
        orderButton().should('exist')
        orderButton().click()
        cy.visit('http://localhost:3000')
        homeButton().should('exist')
        homeButton().click()
    })

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })


})