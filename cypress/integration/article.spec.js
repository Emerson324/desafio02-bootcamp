/// <reference types="cypress"/>

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Publicação', () => {
    // hooks --> momentos antes / depois do teste
    
    beforeEach(() => {
       
        // Preparação
        cy.backgroundLogin()
        articles.acessarFormularioDeNovaPublicacao()
    });
    it('Criar um nova publicação', () => {
        // Ação
        articles.preencherFormulario()
        articles.submeterPublicacao()

        // Verificação
        articles.verificacaoDaRotaAposClicarEmPublicar()
        articles.verificarSeAPublicacaoFoiCadastradaComSucesso()
        
    });

});