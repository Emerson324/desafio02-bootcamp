class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesComments: 'GETArticlescomments'
    }

    init(){
        cy.intercept('POST','**/api/articles').as(this.as.postArticles);
        cy.intercept('GET' ,'**/api/articles/emerson-title-**').as(this.as.getArticlesTitle);
        cy.intercept('GET','**/api/articles/emerson-title-**/comments').as(this.as.getArticlesComments);
    }

}

export default new Routes()