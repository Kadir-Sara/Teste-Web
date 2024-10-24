describe('incluindo produtos no carrinho',() =>{
it('deve incluir produtos no carrinho', () => {
  cy.visit('https://www.automationexercise.com/products?search=Polo');
  cy.get('#30'),type('btn btn-default add-to-cart');

  // Verificação do item no carrinho
  cy.visit('https://www.automationexercise.com/view_cart');
  cy.contains('cart_items').should('be.visible');
});
});