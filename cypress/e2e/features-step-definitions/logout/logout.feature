Feature: checkout en Sauce Demo

    Scenario: Login
        Given que abro la página de Sauce Demo
        When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
        Then debería ver la página de productos
        And agrego un producto al carrito de compra
        And debería ver el producto agregado al carrito
        And hago clic para comprar el producto
        And debería ver el formulario
        And Llenar formulario
        And hago clic en el boton continue
        And debería ver el overview
        And Hago clic en Finish
        And verifico checkout completo
        And realizo logout
        And verifico estar en la pagina logout
