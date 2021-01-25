//The first test 'Hello World'

      describe('My First Test', () => {
        it('Does not do much!', () => {
            cy.visit('www.google.com')
        })
        it('Google Search',()=>{
            cy.get('.gLFyf').type("India").type('{enter}')
            cy.get('[href="https://en.wikipedia.org/wiki/India"] > .LC20lb > span').
            should('have.text','India - Wikipedia')
        })
      })