import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import loginPage from '../../pages/loginPage';
import InventarioPage from '../../pages/InventarioPage';

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
    cy.screenshot('screenshot login')
});