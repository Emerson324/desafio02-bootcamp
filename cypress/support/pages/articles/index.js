const faker = require('faker');

const el = require('./elements').ELEMENTS

import Routes from '../../routes';

class Articles {

    acessarFormularioDeNovaPublicacao(){
        cy.get(el.linkNovaPublicacao).click()
    }

    preencherFormulario(){
        // Execução/Ação
        cy.get(el.inputTitle).type('Emerson Title')
        cy.get(el.inputDescription).type('Cypress')
        cy.get(el.textAreaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('Cypress')
    }

    submeterPublicacao(){

     

        // submeter artigo
        cy.get(el.buttonSubmit).click()

    }
    
    verificarSeAPublicacaoFoiCadastradaComSucesso(){
                
        // usando template string
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse)  => {
            expect(postArticlesResponse.response.statusCode).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitleResponse)  => {
            expect(getArticlesTitleResponse.response.statusCode).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesComments}`).then((getArticlesCommentsResponse)  => {
            expect(getArticlesCommentsResponse.response.statusCode).to.eq(200)
        })
    }

    verificacaoDaRotaAposClicarEmPublicar(){
        // Verificação
        cy.url().should('contain', 'article')
    }
}

export default new Articles();