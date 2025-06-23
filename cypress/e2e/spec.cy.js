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
  return cy
    .get('#aid-auth-widget-iFrame')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
}
