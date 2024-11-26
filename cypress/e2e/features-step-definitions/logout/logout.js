import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../pages/loginPage';
import InventarioPage from '../../pages/InventarioPage';
import cartPage from '../../pages/cartPage';
import yourInformationPage from '../../pages/yourInformationPage';
import overviewPage from '../../pages/overviewPage';
import checkoutFinishPage from '../../pages/checkoutFinishPage';

// 1.Paso para abrir la página de Sauce Demo
Given("que abro la página de Sauce Demo", () => {
    loginPage.visit();
});
// Paso para ingresar un usuario y contraseña
When("ingreso el usuario {string} y la contraseña {string}", (usuario, contraseña) => {
    loginPage.login(usuario, contraseña);
});
// Paso para verificar que la página de productos se carga
Then("debería ver la página de productos", () => {
    InventarioPage.assertUrlInventory();
    cy.screenshot('captura1')
});

// 
Then("agrego un producto al carrito de compra", () => {
    InventarioPage.clickaddtocart2();
   
});


// Paso para verificar que la página de productos se carga
Then("debería ver el producto agregado al carrito", () => {
    cartPage.assertUrlCart();
    cy.screenshot('captura2')
});

// Paso para verificar que la página de productos se carga
Then("hago clic para comprar el producto", () => {
    cartPage.clickCheckout();
});

// 
Then("debería ver el formulario", () => {
    yourInformationPage.assertUrlYourInformation();
    cy.screenshot('captura3')
});

// 
Then("Llenar formulario", () => {
    yourInformationPage.llenarFormulario('Mayra', 'Melendez', 'QA123');
});

Then("hago clic en el boton continue", () => {
    yourInformationPage.clicContinue();
});

Then("debería ver el overview", () => {
    overviewPage.assertUrlOverview();
    cy.screenshot('captura4')
});

Then("Hago clic en Finish", () => {
    overviewPage.clickFinish();
});

Then("verifico checkout completo", () => {
    checkoutFinishPage.assertUrlFinish();
    cy.screenshot('captura5')
});

Then("realizo logout", () => {
    checkoutFinishPage.logout();  
});

Then("verifico estar en la pagina logout", () => {
    checkoutFinishPage.assertUrlLogin();  
    cy.screenshot('captura6')
});
