describe('Work with iFrames', () => {
  it('passes', () => {
    cy.visit('https://www.apple.com/')
    cy.get('#globalnav-menubutton-link-bag').click()
    cy.contains('Sign in').click()

    cy.wait(3000)

    getIframeBody().find('.form-checkbox-indicator').click()
  })
})

const getIframeBody = () => {
  // Get the iframe > document > body
  // and retry until the body element is not empty
  return cy
    .get('#aid-auth-widget-iFrame', { timeout: 10000 }) // Increased timeout for iframe loading
    .its('0.contentDocument.body').should('not.be.empty')
    // Wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    .then(cy.wrap);
};