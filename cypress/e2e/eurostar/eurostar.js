import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";

beforeEach(function() {
    cy.fixture('bookingData').then(function(data){
       globalThis.data = data;
    })
});

Given("Visit Eurostar Page", () =>{
    cy.visit('http://www.eurostar.com/')
    const bookingData = cy.fixture('bookingData.json')
})

When("Validate title of page", () => {
    cy.get('button[id="consent_prompt_accept_all_cookies"]').click()
    cy.title().should('include', 'Book Europe Train Tickets and Holidays');
})

Then("Click on TRAINS", () => {
    cy.get('[data-testid="trains"] > .sc-b4smoy-17').click({force: true})
    cy.url().should('include', 'train')
})

Then("Select FROM and TO options", () => {
    cy.get('input[id="from"]').type('Lon')
    cy.wait(4000)
    cy.contains(globalThis.data.From).click()
    cy.get('input[id="to"]').click()
    cy.contains(globalThis.data.To).click()
    cy.scrollTo('top')
})

Then("Select two dates", () => {
    cy.get('input[name="calendar"]').click()
    cy.get(`[aria-label=${globalThis.data.fromDate}]`).click();
    cy.get(`[aria-label=${globalThis.data.toDate}]`).click();
    cy.scrollTo('top')
    // cy.contains('Thu 10 Aug - Sat 12 Aug').should('exist')
})

Then("Select Passengers and click Search", () => {
    cy.get('input[id="passenger"]').click({force:true})
    cy.get('button[data-testid="increase-bt"]').first().click()
    cy.scrollTo('top')
    cy.contains('OK').click()
    cy.get('button[type="submit"]').click()
})

Then("Select Outbound Price", ()=> {
    cy.url().should('include', 'outbound')
    cy.get('span[data-testid="journey-price-amount"]').first().click({multiple: true, force: true})
    cy.get(`.sc-1gqi1hq-1 > .sc-173ffic-6 > .sc-173ffic-9 > [data-testid="journey-fare-types"] > [data-testid="select-button"]`).first().click()
})

Then("Select Return Price", ()=> {
    cy.wait(6000)
    cy.get('span[class="sc-1plz0z8-1 bzIPMW"]').first().click({multiple: true, force: true})
    cy.get('.sc-1gqi1hq-1 > .sc-173ffic-6 > .sc-173ffic-9 > [data-testid="journey-fare-types"] > [data-testid="select-button"] > .sc-axlilu-1 > .sc-axlilu-4').first().click({force: true})
    
})

Then("Click continue without extra", () => {
    cy.contains('Travel Extras').should('exist')
    cy.get('button[data-testid="basket-action"]').click()
})

Then("Click check out as a guest", () => {
    cy.url().should('include', 'checkout')
    cy.get('[data-testid="continue-as-guest"]').click()
})

Then("Print or Screen Shot of the Check Out Screen", () => {
    cy.contains('Checkout').should('exist')
    cy.screenshot('Checkout-Page')

})