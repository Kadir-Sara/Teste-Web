describe('Login valido', () => {
    it('deve fazer login com credenciais v�lidas', () => {
        cy.visit('�https://www.automationexercise.com/login�');
        cy.get('#email').type('teste2021@teste.com.br');
        cy.get('#senha').type('teste');
        cy.get('#SubmitLogin').click();

        // Verifica��o se o login foi bem-sucedido (por exemplo, buscando um elemento espec�fico da p�gina inicial)
        cy.contains('Sign out').should('be.visible');
    });
});
