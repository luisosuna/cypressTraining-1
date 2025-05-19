describe('Work with iFrames', () => {
  it('passes', () => {
    cy.visit('https://www.apple.com/')
    cy.get('#globalnav-menubutton-link-bag').click()
    cy.contains('Sign in').click()
    cy.wait(3000)
    getIframeDocument().find('.form-checkbox-indicator').click()

    
  })

})

const getIframeDocument = () => {
  return cy
  .get('#aid-auth-widget-iFrame')
  .its('0.contentDocument').should('exist')
}