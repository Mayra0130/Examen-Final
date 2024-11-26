class cartPage {
    checkoutButton = '.btn_action'
    cartItem= '.inventory_item_name';

assertUrlCart() {
    cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html');
}

clickCheckout(){
    cy.get(this.checkoutButton).click();
}

validarcarritoElemento1() {
      cy.get(this.cartItem).should('contain.text', 'Sauce Labs Bike Light')
      }
}

export default new cartPage();
