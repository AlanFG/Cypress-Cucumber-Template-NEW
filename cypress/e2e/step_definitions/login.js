import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {LoginPage} from "../../../page-objects/pages/LoginPage"

const Login = new LoginPage()

context("Login Feature", ()=>{

    describe("Success Login",()=>{
        Given("A user opens the login page", ()=>{
            Login.GotoPage()
        })
        When("A user enters the username {string}", ()=>{
            Login.TypeUsername()
        })
        When("A user enters the password {string}", ()=>{
            Login.TypePassword()
        })
        When("A user clicks on the login button", ()=>{
            Login.ClickLoginButton()
        })
        Then("A user will be logged in", ()=>{
            Login.VerifyLoginSucces()
        })
    })
})