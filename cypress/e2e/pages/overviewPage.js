// cypress/e2e/pages/LoginPage.js
class overviewPage {
  finishButton = '.cart_button'
  assertUrlOverview() {
    cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-two.html');
}

  clickFinish() {
    cy.get(this.finishButton).click();
  }

}

export default new overviewPage();