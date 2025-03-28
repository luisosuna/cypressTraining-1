describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.com');
    cy.url().should('include' , 'amazon')

    const navMenu = ['Music', 'New Releases', 'Prime', "Today's Deals", 'Customer Service']
      navMenu.forEach(function(navMenu){
        cy.get('#nav-xshop').children().should('contain' ,navMenu)
      })

      cy.get('#twotabsearchtextbox').should('be.visible')
      cy.get('#nav-search-submit-text').should('be.visible')

      cy.get("#twotabsearchtextbox").type('Apple Watch')
      cy.get('#sac-autocomplete-results-container').children().should('have.length' , 2)
      cy.get('#sac-suggestion-row-1').click()
      cy.wait(2000)
      cy.scrollTo(0,2000)
      cy.get('[aria-label="Apple Watch Series 7 (GPS, 41mm) Starlight Aluminum Case with Starlight Sport Band, Regular (Renewed)"]').should('be.visible').click()

      cy.get('#corePrice_feature_div').should('be.visible')
  
      cy.get('#corePrice_feature_div').then($price => {
        const priceDisplayed = $price.text()
        cy.log((priceDisplayed));

        cy.get('#corePrice_feature_div').should('not.be.empty')
        
      })
      cy.get('#add-to-cart-button').should('be.visible').click()
      cy.wait(2000)
      cy.get('#attach-warranty-display').should('be.visible')
      cy.get('#attachSiNoCoverage').should('be.visible').click()
      cy.get('#sw-gtc').click()
      cy.get('img[src="https://m.media-amazon.com/images/I/71Jg8uSo4+L._AC_AA180_.jpg"]').should('be.visible')
     
  });


});