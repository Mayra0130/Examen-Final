class checkoutFinishPage {
    menuButton = '.bm-burger-button';
    logoutLink = '#logout_sidebar_link';
     
    assertUrlFinish() {
      cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html');
  }    
    openMenu() {
      cy.get(this.menuButton).click();
    }
  
    clickLogout() {
      cy.get(this.logoutLink).click();
    }
  
    logout() {
      this.openMenu();
      this.clickLogout();
    }

    assertUrlLogin() {
      cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');
  } 
  }
  
  export default new checkoutFinishPage();
  