class InventoryPage {
    menuButton = '.bm-burger-button';
    logoutLink = '#logout_sidebar_link';
    addtoCard2 = '.inventory_item:nth-child(2) > .pricebar > [class="btn_primary btn_inventory"]';
    cart = '[fill="currentColor"]'
    //cartItem= '.inventory_item_name';
  
    assertUrlInventory() {
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    }
    openMenu() {
      cy.get(this.menuButton).click();
    }
  
    clickLogout() {
      cy.get(this.logoutLink).click();
    }


    clickaddtocart2(){
      cy.get(this.addtoCard2).click();
      cy.get(this.cart).click();
    }
  
    /*validarcarritoElemento1() {
      cy.get(this.cartItem).should('contain.text', 'Sauce Labs Bike Light')
      }*/
     

    logout() {
      this.openMenu();
      this.clickLogout();
    }
  }
  
  export default new InventoryPage();
  