export default new class LoginProcess {
    headerSelector = () => cy.get('header[class="HeaderView v1a v1 bs-view dcon dc8 isFixedHeaderAware Header"]')
    loginPopUp = () => this.headerSelector().find('[class="LoginUserView v1a v1 bs-view dcon dc19 LoginUser"]')
    emailInputSelector = () => cy.get('input[class="xta_login userName"]');
    passwordInputSelector = () => cy.get('input[class="xta_password password"]');
    loginButton = () => cy.get('a[class="button login xta_doLogin"]');
    

    login = () => {
        this.loginPopUp().click()        
        this.emailInputSelector().type(Cypress.env('userEmail'))
        this.passwordInputSelector().type(Cypress.env('password'))
        this.loginButton().click()
    }
}