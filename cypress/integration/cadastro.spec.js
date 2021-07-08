/// <reference types="cypress"/>

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        //register
        cy.visit('register');
        cadastro.preenchendoFormulario()
        cadastro.submeterCadastro()
        cadastro.verificacaoDoMetodoPostLogin()
    });
});

//elementos 