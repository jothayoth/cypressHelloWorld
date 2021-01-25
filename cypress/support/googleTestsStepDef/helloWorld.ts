import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { when } from 'cypress/types/jquery';

    Given('I launch the Google home page', () => {
        cy.visit('www.google.com')
    })
    When('I search for {string}',(searchText:string)=>{
        cy.get('.gLFyf').type(searchText).type('{enter}')
        })

    Then('verify the wiki page appears on the search',()=>{
        cy.get('[href="https://en.wikipedia.org/wiki/India"] > .LC20lb > span').
        should('have.text','India - Wikipedia')
    })
 