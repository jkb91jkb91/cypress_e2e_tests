describe('Training Page Test', () => {
    it('should display the text "Please select a training"', () => {
      cy.visit('http://localhost:80')
      cy.contains('Please eselect a training')
        .should('be.visible')
    })
  })
