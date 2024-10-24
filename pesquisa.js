describe('pesquisa no site', () => {  
it('o usuario deve selecionar o campo de pesquisa e selecionar um produto e selecionar em pesquisar', () => {
    cy.visit('“https://www.automationexercise.com/products”');
    cy.get('#search_product).type('text');
    cy.contins('#Polo').type('text');
    cy.get('submit_search').shadow().find('button').click()

    // Verificação dos resultados da pesquisa
    cy.contains('search_product').should('be.visible');
});
 });
