describe ('Pizza App', () => {

    const orderButton = () => cy.get('a[href="/pizza"]')
    const homeButton = () => cy.get('a[href="/"]')
    const nameInput = () => cy.get('input[name=name]')
    const instructionInput = () => cy.get('input[name=instructions]')
    const sizeInput = () => cy.get('select[name=size]')
    const pepperoni = () => cy.get('input[name=pepperoni]')
    const sausage = () => cy.get('input[name=sausage]')
    const chicken = () => cy.get('input[name=chicken]')
    const cheese = () => cy.get('input[name=cheese]')
    const orderPizza = () => cy.get('button')

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

    describe('test form functionality', () => {
        it('check existance of inputs', () => {
            nameInput().should('exist')
            instructionInput().should('exist')
            sizeInput().should('exist')
            pepperoni().should('exist')
            sausage().should('exist')
            chicken().should('exist')
            cheese().should('exist')
            orderPizza().should('exist')
        })

        it('test typing in text fields',() => {
            nameInput().should('have.value', '')
            .type('Johnny')
            .should('have.value', 'Johnny')
            instructionInput().should('have.value', '')
            .type('Please Leave at door')
            .should('have.value', 'Please Leave at door')
        })

        it('test topping selection', () => {
            pepperoni().click()
            sausage().click()
            chicken().click()
            cheese().click()
            pepperoni().click()
            sausage().click()
            chicken().click()
            cheese().click()
        })

        it('test order button', () => {
            orderPizza().should('be.disabled')
            nameInput().type('JX')
            sizeInput().select('medium')
            orderPizza().should('be.enabled')

        })
    })

})