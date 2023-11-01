import {loginSelectors} from "../selectors/LoginPage"

class LoginPage {
    GotoPage(){
        cy.visit("/")
    }
    TypeUsername(){
        cy.xpath(loginSelectors.userNameInput).type(Cypress.env('USERNAME'))
    }
    TypePassword(){
        cy.xpath(loginSelectors.passwordInput).type(Cypress.env('PASSWORD'))
    }
    ClickLoginButton(){
        cy.xpath(loginSelectors.loginButton).click()
    }
    VerifyLoginSucces(){
        cy.url().should("contain", "/dashboard/index")
    }
}

export { LoginPage }