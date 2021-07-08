const el = require('./elements').ELEMENTS;

const faker = require('faker');
class Cadastro {

    preenchendoFormulario(){
        cy.get(el.campoParaInserirPrimeiroNome).type(faker.name.firstName() + faker.name.lastName());
        cy.get(el.campoParaInserirEmail).type(faker.internet.email());
        cy.get(el.campoParaInserirPassword).type(12345678);
    }

    submeterCadastro(){
        cy.get(el.botaoParaSubmeterCadastro).click();
    }

    verificacaoDoMetodoPostLogin(){
        cy.intercept('POST', '**/api/users**').as('loginUser');
        cy.wait('@loginUser').then((resLoginUser) => {
            expect(resLoginUser.response.statusCode).to.eq(200)
        })
    }

}

export default new Cadastro();