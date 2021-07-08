const el = require('./elements').ELEMENTS

class Login {
    
    acessarLogin(){
        // acessar login
        cy.visit('login');
    }

    preencherFormulario(){
        // preencher formulário
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);

    }
    
    submeterFormulario(){
        // submeter formulário
        cy.get(el.buttonSubmit).click();
    }

    verificacaoSeApiLoginDeuSucesso(){        
        cy.intercept('POST', '**/api/users/login**').as('loginUser');
        cy.wait('@loginUser').then((resLoginUser) => {
            expect(resLoginUser.response.statusCode).to.eq(200)
        })
    }

    verificacaoSeAPaginaFoiRedirecionadaParaHome(){
        cy.get(el.campoEscritoFeed).should('be.visible')
    }

    
}

export default new Login();