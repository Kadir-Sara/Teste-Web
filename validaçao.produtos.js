describe('Validar Produtos no Carrinho', () => {
    it('Deve validar os produtos no carrinho na tela de pagamento', () => {
        // Acessar a página do carrinho
        cy.visit('https://www.automationexercise.com/view_cart');

        // Obter os nomes e preços dos produtos no carrinho
        cy.get('cart_info_table').each(($el) => {
            const vertical-align: inherit; = $el.text();
        });

        // Proseguir para a tela de pagamento 
        cy.visist('https://www.automationexercise.com/payment');
        cy.get('vertical-align: inherit;').click();
    });
});
