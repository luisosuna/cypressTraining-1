describe('Work with iFrames', () => {
  it('passes', () => {
    cy.visit('https://www.apple.com/')
    cy.get('#globalnav-menubutton-link-bag').click()
    cy.contains('Sign in').click()

    cy.wait(3000)

cy.origin("https://secure10.store.apple.com", () => { 
  const getIframeBody = () => {
  return cy

